import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

const title = "Privacy Policy — Binani Enterprises";
const description =
  "How Binani Enterprises collects, uses, shares and protects the information you submit through inquiries on this catalog website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="24 August 2026"
      intro="Binani Enterprises respects your privacy. This policy explains what information we collect through this website, why we collect it, and the choices you have."
      sections={[
        {
          heading: "1. Information we collect",
          body: (
            <>
              <p>
                <strong className="text-foreground">Information you give us:</strong> name, company,
                phone number, email address, city, the item you are interested in, and the details
                of your message when you submit an inquiry or contact us directly.
              </p>
              <p>
                <strong className="text-foreground">Technical information:</strong> basic request
                data such as browser type, device type and pages visited, used to keep the site
                secure and working correctly.
              </p>
            </>
          ),
        },
        {
          heading: "2. How we use your information",
          body: (
            <>
              <p>
                We use inquiry details to respond to you, prepare quotations, process and deliver
                orders, provide support, and maintain our commercial and statutory records such as
                GST invoicing.
              </p>
              <p>
                We do not sell your personal information, and we do not use it for unrelated
                marketing without your consent.
              </p>
            </>
          ),
        },
        {
          heading: "3. Sharing",
          body: (
            <p>
              We share information only as needed to serve you: with logistics and courier partners
              for delivery, with banks and licensed payment providers for payments, with our
              accountants and auditors, and with authorities where the law requires it. Partners are
              expected to use the information only for the purpose we share it.
            </p>
          ),
        },
        {
          heading: "4. Cookies",
          body: (
            <p>
              This catalog website uses only the minimum storage needed for the site to function.
              You can block or delete cookies in your browser settings; core browsing will continue
              to work.
            </p>
          ),
        },
        {
          heading: "5. Retention and security",
          body: (
            <p>
              We keep inquiry and transaction records for as long as needed for the business
              relationship and for the periods required under tax and company law. We apply
              reasonable organisational and technical safeguards, and limit access to staff who need
              it. No transmission over the internet can be guaranteed fully secure.
            </p>
          ),
        },
        {
          heading: "6. Your choices",
          body: (
            <p>
              You may ask us to access, correct or delete the personal information you have given us,
              or to stop contacting you, by writing to pravin@binanienterprises.in. We will act on
              your request unless we must retain the data under applicable law.
            </p>
          ),
        },
        {
          heading: "7. Children",
          body: (
            <p>
              This is a business-to-business website and is not directed at children. We do not
              knowingly collect information from minors.
            </p>
          ),
        },
        {
          heading: "8. Changes",
          body: (
            <p>
              We may update this policy as our business or the law changes. The revised version will
              appear on this page with a new update date.
            </p>
          ),
        },
      ]}
    />
  );
}
