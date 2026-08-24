import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

const title = "Disclaimer — Binani Enterprises";
const description =
  "Scope and limits of the information published on the Binani Enterprises catalog website, including product images, pricing and third-party links.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="24 August 2026"
      intro="This website is published by Binani Enterprises as a product and service catalog for business buyers."
      sections={[
        {
          heading: "1. Information purpose only",
          body: (
            <p>
              Content on this website is provided for general information. It does not constitute a
              binding offer, a warranty of fitness for a particular purpose, or professional advice.
              Please confirm specifications and prices with us in writing before ordering.
            </p>
          ),
        },
        {
          heading: "2. Images and specifications",
          body: (
            <p>
              Catalog images are representative and are used to illustrate product categories.
              Actual goods may differ in shade, weave, print placement, grade and packing.
              Specifications are typical values and are finalised per order.
            </p>
          ),
        },
        {
          heading: "3. Pricing",
          body: (
            <p>
              Indicated prices are reference ranges that vary with quantity, specification, raw
              material cost and market conditions. A binding price applies only through a written
              quotation.
            </p>
          ),
        },
        {
          heading: "4. Third-party links and services",
          body: (
            <p>
              Links to external websites and references to payment gateways, banks or logistics
              providers are for convenience. We do not control those services and are not
              responsible for their content, availability or terms.
            </p>
          ),
        },
        {
          heading: "5. Availability",
          body: (
            <p>
              We aim to keep this website accurate and available, but we may change or interrupt it
              without notice and accept no liability for reliance on outdated content.
            </p>
          ),
        },
      ]}
    />
  );
}
