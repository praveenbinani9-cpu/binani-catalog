import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allItems, products, services } from "@/data/catalog";

export const Route = createFileRoute("/catalog/$slug")({
  loader: ({ params }) => {
    const item = allItems.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Unavailable — Binani Enterprises" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.name} — ${item.price} | Binani Enterprises` },
        { name: "description", content: item.description.slice(0, 155) },
        { property: "og:title", content: `${item.name} — Binani Enterprises` },
        { property: "og:description", content: item.description.slice(0, 155) },
        { property: "og:image", content: item.image },
        { name: "twitter:image", content: item.image },
      ],
    };
  },
  component: ItemDetail,
  notFoundComponent: ItemNotFound,
});

function ItemNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl font-semibold">Item not found</h1>
      <p className="mt-3 text-muted-foreground">
        That catalog entry doesn't exist. Browse our full range instead.
      </p>
      <Link
        to="/products"
        className="mt-6 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        View Products
      </Link>
    </div>
  );
}

function ItemDetail() {
  const { item } = Route.useLoaderData();
  const isService = item.category === "Payment Services";
  const related = (isService ? services : products)
    .filter((i) => i.slug !== item.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="px-2">/</span>
        <Link to={isService ? "/services" : "/products"} className="hover:text-foreground">
          {isService ? "Services" : "Products"}
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground">{item.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <img
          src={item.image}
          alt={item.name}
          className="w-full rounded-xl border border-border bg-secondary object-cover shadow-card"
        />
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {item.category}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-semibold">{item.name}</h1>
          <p className="mt-3 text-xl font-semibold text-primary">{item.price}</p>
          <p className="mt-5 text-muted-foreground">{item.description}</p>

          <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide">Product Details</h2>
          <dl className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {item.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 p-3 text-sm">
                <dt className="text-muted-foreground">{s.label}</dt>
                <dd className="text-right font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/contact"
            search={{ item: item.name }}
            className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Send Inquiry
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold">You may also need</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/catalog/$slug"
                params={{ slug: r.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card"
              >
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-serif text-base font-semibold">{r.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{r.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
