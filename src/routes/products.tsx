import {createFileRoute,redirect} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
export const Route=createFileRoute('/products')({head:()=>pageHead('Products — Fabric Collection','Explore the textile collection and manufacturing capabilities of Binani Enterprises.'),beforeLoad:()=>{throw redirect({to:'/fabrics',statusCode:301});}});
