import {createFileRoute,redirect} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
export const Route=createFileRoute('/catalog/$slug')({head:()=>pageHead('Textile Catalog','Explore our fabric collection and made-to-order textile options.'),beforeLoad:()=>{throw redirect({to:'/fabrics',statusCode:301});}});
