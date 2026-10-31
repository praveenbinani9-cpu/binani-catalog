import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/legal-page';
import { pageHead } from '@/lib/seo';
export const Route=createFileRoute('/disclaimer')({head:()=>pageHead('Disclaimer','Representative textile imagery, catalog information and quotation limits.'),component:Policy});
function Policy(){return <LegalPage title={'Disclaimer'} updated="30 October 2026" intro={'Representative textile imagery, catalog information and quotation limits.'} sections={[
        { heading: 'Representative imagery', body: <p>The current website uses generated and representative fabric photographs, not verified photographs of stock or completed client work. They illustrate a visual direction and cannot establish actual texture, shade, pattern or treatment. Ask for samples before ordering.</p> },
        { heading: 'Fabric details', body: <p>Catalog base assignments and applications are initial classifications for discovery, not certified composition statements. Textile trade names can vary. Confirm actual fibre content, GSM, width, finish, blend and suitability in writing.</p> },
        { heading: 'Capacity and availability', body: <p>The figures of 1,00,000 meters per day on pure fabrics and 30,000 meters per day on polyester refer to digital printing capacity, not fabric manufacturing. They are business-provided figures, not independently audited certifications or guaranteed output for an individual order. Availability and achievable delivery depend on the confirmed brief and production plan.</p> },
        { heading: 'No invented credentials', body: <p>No certification, client endorsement or third-party quality approval is claimed unless verified information is supplied. Placeholder details such as MOQ, lead times, address, email and hours are pending confirmation.</p> },
        { heading: 'External links and general policies', body: <p>External platforms have their own terms and availability. The website policies are general drafts for owner and legal review and do not substitute for transaction-specific written terms or legal advice.</p> },
]}/>;}
