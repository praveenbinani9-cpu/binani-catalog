import { createFileRoute, Link } from "@tanstack/react-router";
import { ItemCard } from "@/components/item-card";
import { company, products, services, faqs } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Binani Enterprises — Apparel, Waste Paper & Payment Services" },
      {
        name: "description",
        content:
          "Browse the Binani Enterprises catalog: kurta pajama, Nehru jackets, OCC waste paper, kraft liner and digital payment services from Surat, Gujarat.",
      },
      { property: "og:title", content: "Binani Enterprises — Product & Service Catalog" },
      {
        property: "og:description",
        content: "Ethnic apparel, recycled paper grades and payment solutions. Established 2024, Surat.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
          <div>
            <span className="inline-block rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Manufacturer · Supplier · Est. 2024
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              {company.name}
            </h1>
            <p className="mt-4 max-w-xl text-base opacity-90">{company.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-md bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary hover:opacity-90"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-semibold hover:bg-primary-foreground/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.slice(0, 4).map((p) => (
              <img
                key={p.slug}
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-40 w-full rounded-xl object-cover shadow-card"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-serif text-3xl font-semibold">Welcome to {company.name}</h2>
            <p className="mt-4 text-muted-foreground">{company.intro}</p>
            <Link
              to="/about"
              className="mt-6 inline-block rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              Read More
            </Link>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {company.business.slice(0, 6).map((b) => (
              <div key={b.label} className="bg-card p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{b.label}</dt>
                <dd className="mt-1 text-sm font-semibold">{b.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl font-semibold">Our Product Range</h2>
            <Link to="/products" className="text-sm font-semibold text-primary hover:underline">
              View All Products →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <ItemCard key={p.slug} item={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold">Our Services Range</h2>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
            View All Services →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ItemCard key={s.slug} item={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-4">
        <h2 className="font-serif text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
