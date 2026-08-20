import { createFileRoute, Link } from "@tanstack/react-router";
import { company, products } from "@/data/catalog";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Binani Enterprises, Surat" },
      {
        name: "description",
        content:
          "Binani Enterprises is a Surat-based manufacturer and supplier established in 2024, serving apparel, waste paper and payment service buyers across India.",
      },
      { property: "og:title", content: "About Binani Enterprises" },
      {
        property: "og:description",
        content: "Company profile, business details and GST information for Binani Enterprises, Surat.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="font-serif text-4xl font-semibold">About {company.name}</h1>
      <p className="mt-5 text-muted-foreground">{company.intro}</p>
      <p className="mt-4 text-muted-foreground">
        Our range spans ethnic apparel for men and children, recycled paper grades such as OCC and
        DSOCC waste paper and kraft liner board, and digital payment services for businesses that
        need reliable collection and reporting. Buyers can request any product to specification and
        expect delivery within a committed time frame.
      </p>

      <h2 className="mt-12 font-serif text-2xl font-semibold">Company Profile</h2>
      <dl className="mt-5 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {company.business.map((b) => (
          <div key={b.label} className="bg-card p-4">
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">{b.label}</dt>
            <dd className="mt-1 text-sm font-semibold">{b.value}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-12 font-serif text-2xl font-semibold">What We Supply</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {products.map((p) => (
          <li key={p.slug}>
            <Link
              to="/catalog/$slug"
              params={{ slug: p.slug }}
              className="text-sm text-primary hover:underline"
            >
              {p.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="mt-10 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        Request a Quote
      </Link>
    </div>
  );
}