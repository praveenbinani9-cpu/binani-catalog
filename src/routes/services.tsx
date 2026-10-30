import {createFileRoute,redirect} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
export const Route=createFileRoute('/services')({head:()=>pageHead('Textile Services','Explore the textile collection and manufacturing capabilities of Binani Enterprises.'),beforeLoad:()=>{throw redirect({to:'/digital-printing',statusCode:301});}});
