import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

const title = "Shipping & Delivery Policy — Binani Enterprises";
const description =
  "Dispatch timelines, freight terms, packing standards and delivery coverage for apparel and waste paper consignments from Binani Enterprises, Surat.";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <LegalPage
      title="Shipping & Delivery Policy"
      updated="24 August 2026"
      intro="How we pack, dispatch and deliver consignments of ethnic apparel and recycled paper grades from Surat, Gujarat to buyers across India and export markets."
      sections={[
        {
          heading: "1. Dispatch timelines",
          body: (
            <p>
              Ready stock is normally dispatched within 3 to 7 working days of order confirmation.
              Made-to-order apparel and bulk paper lots follow the lead time stated in the
              quotation. Timelines start after receipt of the confirmed order and any agreed advance
              payment.
            </p>
          ),
        },
        {
          heading: "2. Coverage",
          body: (
            <p>
              We supply all over India by road and rail transport, and handle export consignments
              through container and freight-forwarding partners on terms agreed per order.
            </p>
          ),
        },
        {
          heading: "3. Freight and risk",
          body: (
            <p>
              Unless the quotation states otherwise, freight, insurance and unloading are to the
              buyer's account and risk passes on handover to the transporter. Where we arrange
              transport on your behalf, we do so as your agent and share the carrier's docket
              details for tracking.
            </p>
          ),
        },
        {
          heading: "4. Packing",
          body: (
            <p>
              Apparel is packed in poly bags inside cartons; waste paper and kraft grades are
              supplied in bales or reels as specified. Special packing, marking or labelling can be
              arranged at additional cost if requested before dispatch.
            </p>
          ),
        },
        {
          heading: "5. Receiving a consignment",
          body: (
            <p>
              Please check the number of packages and their condition against the transporter's
              document before signing. Note any shortage or visible damage on the delivery
              challan and inform us within 48 hours with photographs, so we can pursue the claim
              with the carrier.
            </p>
          ),
        },
        {
          heading: "6. Delays",
          body: (
            <p>
              We share revised timelines as soon as a delay is known. We are not responsible for
              delays caused by transport strikes, weather, checkpoint or customs holds, or other
              events outside our reasonable control.
            </p>
          ),
        },
      ]}
    />
  );
}
