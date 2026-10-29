import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { rfqSchema, validateFile } from '@/lib/rfq-schema';
export const submitInquiry = createServerFn({method:'POST'}).inputValidator((input:FormData)=>{if(!(input instanceof FormData)) throw new Error('Invalid inquiry');return input;}).handler(async({data})=>{
 const raw=data.get('details'); if(typeof raw!=='string') throw new Error('Missing inquiry details');
 const details=rfqSchema.parse(JSON.parse(raw));
 const files=data.getAll('files').filter((f):f is File=>f instanceof File && f.size>0);
 for(const file of files) { const error=validateFile(file); if(error) throw new Error(error); }
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const id=crypto.randomUUID(); const uploaded:{name:string;path:string}[]=[];
 try {
  for(const file of files) { const path=`${id}/${crypto.randomUUID()}.${file.name.split('.').pop()?.toLowerCase()}`; const {error}=await supabaseAdmin.storage.from('tech-packs').upload(path,file,{contentType:'application/octet-stream',upsert:false}); if(error) throw new Error('Your file could not be uploaded. Please try again.'); uploaded.push({name:file.name,path}); }
  const {company_name,contact_person,phone,email,customer_type,notes,consent,website:_,...requirements}=details;
  const {error}=await supabaseAdmin.from('inquiries').insert({id,company_name,contact_person,phone,email,customer_type,notes,consent,requirements,files:uploaded});
  if(error) throw new Error('Your inquiry could not be saved. Please try again.'); return {id};
 } catch(error) { if(uploaded.length) await supabaseAdmin.storage.from('tech-packs').remove(uploaded.map(f=>f.path)); throw error; }
});
export const listInquiries=createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).inputValidator(z.object({page:z.number().int().min(0)})).handler(async({context,data})=>{ const {data:admin}=await context.supabase.rpc('has_role',{_user_id:context.userId,_role:'admin'}); if(!admin) throw new Error('Staff access has not been enabled for this account.'); const {data:rows,error,count}=await context.supabase.from('inquiries').select('*',{count:'exact'}).order('created_at',{ascending:false}).range(data.page*50,data.page*50+49); if(error) throw new Error('Could not load inquiries'); return {rows:rows??[],count:count??0}; });
export const updateInquiry=createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).inputValidator(z.object({id:z.string().uuid(),status:z.enum(['New','Contacted','Quoted','Closed'])})).handler(async({context,data})=>{const {data:rows,error}=await context.supabase.from('inquiries').update({status:data.status}).eq('id',data.id).select('id');if(error||!rows?.length)throw new Error('Could not update this inquiry');return {ok:true};});
export const fileLink=createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).inputValidator(z.object({path:z.string().max(300)})).handler(async({context,data})=>{const {data:link,error}=await context.supabase.storage.from('tech-packs').createSignedUrl(data.path,60,{download:true});if(error||!link)throw new Error('File unavailable');return {url:link.signedUrl};});
