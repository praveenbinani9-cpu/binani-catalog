import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/legal-page';
import { pageHead } from '@/lib/seo';
export const Route=createFileRoute('/shipping')({head:()=>pageHead('Shipping & Delivery Policy','Packing, dispatch and delivery arrangements for textile orders.'),component:Policy});
function Policy(){return <LegalPage title={'Shipping & Delivery Policy'} updated="30 October 2026" intro={'Packing, dispatch and delivery arrangements for textile orders.'} sections={[
        { heading: 'Timelines by order', body: <p>Ready fabric and make-to-order goods have different dispatch requirements. Sampling approval, procurement, production, finishing and payment milestones influence the plan. Lead times and dispatch dates are confirmed in writing for each accepted order.</p> },
        { heading: 'Destinations and freight', body: <p>Share the delivery destination and any exporter or buyer requirements before quotation. Freight, duties, insurance, unloading and responsibility for transport are agreed per order. No country coverage, carrier or fixed freight rate is promised without confirmation.</p> },
        { heading: 'Packing and documentation', body: <p>Roll, garment, carton, labelling and documentation requirements should be included in the project brief. Special packing and buyer-specific markings are reviewed and priced where applicable.</p> },
        { heading: 'Receiving goods', body: <p>Check the consignment against the dispatch documents on receipt. Record visible damage or shortages with the carrier and inform us promptly with photographs and the order reference. Claim requirements follow the agreed order terms.</p> },
        { heading: 'Changes and delays', body: <p>Transport interruptions, weather, material availability and approval changes can affect delivery. We discuss revised timelines when known. Risk transfer, remedies and responsibility remain governed by the accepted contract and applicable law.</p> },
]}/>;}
