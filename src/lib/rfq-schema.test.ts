import {test,expect} from 'bun:test';
import {validateFile,MAX_FILE_BYTES,rfqSchema,csvCell} from './rfq-schema';
import {capacity,filterFabrics,fabrics} from '../data/fabrics';
test('allows a 20 MB PDF but rejects one byte over the requested limit',()=>{expect(MAX_FILE_BYTES).toBe(20971520);expect(validateFile({name:'cutting.pdf',size:20971520})).toBeNull();expect(validateFile({name:'cutting.pdf',size:20971521})).not.toBeNull();});
test('accepts every requested file format and rejects an executable',()=>{for(const ext of ['pdf','jpg','png','ai','cdr'])expect(validateFile({name:`techpack.${ext}`,size:100})).toBeNull();expect(validateFile({name:'payload.exe',size:100})).not.toBeNull();});
test('business capacity stays 100000 pure and 30000 polyester meters per day',()=>{expect(capacity.pure).toBe(100000);expect(capacity.polyester).toBe(30000);});
test('RFQ requires explicit consent',()=>{const input={company_name:'Sample Business',contact_person:'Sample Contact',phone:'+919876543210',email:'sample@example.com',customer_type:'Exporter',category:'Kaftans',base:'Viscose',fabric:'Fendi',blend:'',digital_print:false,value_additions:[],quantity:'500 pieces',delivery_date:'2026-12-01',notes:'',website:'',consent:false};expect(rfqSchema.safeParse(input).success).toBe(false);expect(rfqSchema.safeParse({...input,consent:true}).success).toBe(true);});
test('filters combine fabric name, base, type and application',()=>{expect(fabrics.length).toBe(28);expect(filterFabrics('Fendi','Viscose','RFD','Women').map(f=>f.name)).toEqual(['Fendi','Fendi Crush']);expect(filterFabrics('Fendi','Cotton','RFD','Women')).toEqual([]);});
test('CSV prevents spreadsheet formula execution and escapes quotes',()=>{expect(csvCell('=1+1')).toBe('"\'=1+1"');expect(csvCell('a"b')).toBe('"a""b"');});
