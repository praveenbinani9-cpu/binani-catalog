import { z } from 'zod';
import { bases, categories, valueAdds } from '@/data/fabrics';
export const MAX_FILE_BYTES = 20 * 1024 * 1024;
export const allowedExtensions = ['pdf','jpg','jpeg','png','ai','cdr'];
export function validateFile(file:{name:string;size:number}) { if(file.size>MAX_FILE_BYTES) return 'Each file must be 20 MB or smaller.'; if(!allowedExtensions.includes(file.name.split('.').pop()?.toLowerCase() ?? '')) return 'Use PDF, JPG, PNG, AI or CDR files.'; return null; }
export const rfqSchema = z.object({ company_name:z.string().trim().min(1,'Company name is required').max(150),contact_person:z.string().trim().min(1,'Contact person is required').max(100),phone:z.string().trim().regex(/^[+\d\s()-]{7,25}$/,'Enter a valid phone number'),email:z.string().trim().email('Enter a valid email').max(255),customer_type:z.enum(['Exporter','Corporate','Domestic business']),category:z.enum(categories),base:z.enum(bases),fabric:z.string().max(150),blend:z.string().max(500),digital_print:z.boolean(),value_additions:z.array(z.enum(valueAdds)),quantity:z.string().trim().min(1,'Quantity is required').max(100),delivery_date:z.string().min(1,'Delivery date is required').regex(/^\d{4}-\d{2}-\d{2}$/),notes:z.string().max(5000),consent:z.boolean().refine(v=>v,'Please agree to the privacy policy'),website:z.string().max(0) });
export type RfqValues = z.infer<typeof rfqSchema>;
export function csvCell(value:unknown) { let s=String(value ?? ''); if(/^[=+@\-\t\r]/.test(s)) s="'"+s; return '"'+s.replaceAll('"','""')+'"'; }
