import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

const title = "Terms & Conditions — Binani Enterprises";
const description =
  "Terms and conditions covering quotations, orders, pricing, delivery and payments for Binani Enterprises apparel, waste paper and payment services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="24 August 2026"
      intro="These terms govern the use of this catalog website and any quotation, order or supply arrangement between you and Binani Enterprises, Surat, Gujarat, India."
      sections={[
        {
          heading: "1. About these terms",
          body: (
            <p>
              By browsing this website or sending an inquiry, you accept these terms. Where a signed
              purchase order, sales contract or service agreement exists, that document prevails over
              these terms for the transaction it covers.
            </p>
          ),
        },
        {
          heading: "2. Catalog information",
          body: (
            <>
              <p>
                Product and service listings, specifications and images are indicative and intended
                to help you evaluate our range. Natural variation in fabric, shade, weave, moisture
                content and grade is normal for textile and recycled paper goods.
              </p>
              <p>
                We may update, add or withdraw catalog items at any time without notice. Nothing on
                this website is an offer to sell; it is an invitation to request a quotation.
              </p>
            </>
          ),
        },
        {
          heading: "3. Quotations and orders",
          body: (
            <>
              <p>
                Prices shown on the website are reference ranges. A binding price applies only when
                confirmed in a written quotation from us, and quotations remain valid for the period
                stated in them.
              </p>
              <p>
                An order is accepted once we confirm it in writing along with quantity,
                specification, price, lead time and payment terms. Minimum order quantities may
                apply for certain items.
              </p>
            </>
          ),
        },
        {
          heading: "4. Pricing, taxes and payment",
          body: (
            <>
              <p>
                Unless a quotation says otherwise, prices are exclusive of GST, freight, insurance
                and other statutory levies, which are charged as applicable.
              </p>
              <p>
                Accepted payment terms include L/C, D/P, T/T and online payment as confirmed per
                order. Payments must be made to the bank account named on our invoice; we never
                request payment to an account communicated only by phone or chat.
              </p>
            </>
          ),
        },
        {
          heading: "5. Delivery",
          body: (
            <p>
              Lead times are estimates from the date of order confirmation and, where applicable,
              receipt of advance payment. We are not liable for delays caused by events outside our
              reasonable control, including transport disruption, raw material shortage, strikes or
              regulatory action.
            </p>
          ),
        },
        {
          heading: "6. Payment services",
          body: (
            <p>
              Our digital payment offerings are integration, collection, reporting and support
              services. Underlying card, UPI, netbanking and wallet processing is performed by
              licensed payment providers and banks, and remains subject to their terms, onboarding
              checks and settlement timelines.
            </p>
          ),
        },
        {
          heading: "7. Intellectual property",
          body: (
            <p>
              The content, layout, images and branding on this website belong to Binani Enterprises
              or its licensors and may not be copied, reproduced or used commercially without our
              written permission.
            </p>
          ),
        },
        {
          heading: "8. Liability",
          body: (
            <p>
              Our liability for any claim relating to goods or services is limited to the invoice
              value of the affected supply. We are not liable for indirect or consequential losses
              such as loss of profit, production or business opportunity.
            </p>
          ),
        },
        {
          heading: "9. Governing law",
          body: (
            <p>
              These terms are governed by the laws of India, and the courts at Surat, Gujarat have
              exclusive jurisdiction over any dispute.
            </p>
          ),
        },
      ]}
    />
  );
}
