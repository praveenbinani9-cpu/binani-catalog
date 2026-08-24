import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

const title = "Refund & Cancellation Policy — Binani Enterprises";
const description =
  "Cancellation windows, return conditions, quality claim process and refund timelines for goods and payment services supplied by Binani Enterprises.";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      updated="24 August 2026"
      intro="This policy explains when an order can be cancelled, how quality claims are handled, and how refunds are processed for apparel, waste paper and payment service orders."
      sections={[
        {
          heading: "1. Cancellation by the buyer",
          body: (
            <>
              <p>
                Orders can be cancelled without charge before production or dispatch preparation
                begins. Write to us at pravin@binanienterprises.in with your order reference.
              </p>
              <p>
                Once material has been cut, customised, baled or booked with a transporter,
                cancellation is subject to recovery of costs already incurred. Custom-made and
                made-to-specification goods cannot be cancelled after production starts.
              </p>
            </>
          ),
        },
        {
          heading: "2. Quality claims and returns",
          body: (
            <>
              <p>
                Please inspect goods on delivery. Claims for shortage, transit damage or
                specification mismatch must reach us within 7 days of delivery, with the invoice
                number, lot details and clear photographs of the goods and packing.
              </p>
              <p>
                Approved claims are settled by replacement, credit note or refund, at the option
                agreed with you. Goods must be unused and in original packing where a physical
                return is required; returns without prior written authorisation cannot be accepted.
              </p>
            </>
          ),
        },
        {
          heading: "3. What is not covered",
          body: (
            <p>
              Normal variation in shade, weave, print placement, grade, moisture and bale weight is
              inherent to textile and recycled paper goods and is not a defect. Damage from misuse,
              improper storage, exposure to moisture after delivery, or alterations carried out
              after dispatch is also outside this policy.
            </p>
          ),
        },
        {
          heading: "4. Payment service orders",
          body: (
            <p>
              Setup and integration fees are payable for the work performed. If a payment gateway
              cannot be activated for reasons attributable to us, fees for the unfinished scope are
              refunded. Fees are not refundable where a provider or bank declines onboarding due to
              the merchant's documents, business category or compliance checks.
            </p>
          ),
        },
        {
          heading: "5. Refund method and timeline",
          body: (
            <p>
              Approved refunds are issued to the original payment source or bank account used for
              the purchase, normally within 7 to 14 working days of approval. Bank or gateway
              charges and any freight already incurred may be deducted. We do not make refunds in
              cash or to third-party accounts.
            </p>
          ),
        },
        {
          heading: "6. How to raise a request",
          body: (
            <p>
              Email pravin@binanienterprises.in or call +91 8460360600 with your invoice number and
              the issue. We acknowledge requests within 2 working days and share a resolution after
              inspection of the evidence or goods.
            </p>
          ),
        },
      ]}
    />
  );
}
