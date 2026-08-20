import { createFileRoute } from "@tanstack/react-router";
import { ItemCard } from "@/components/item-card";
import { services } from "@/data/catalog";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Payment Gateway & Digital Payment Solutions | Binani Enterprises" },
      {
        name: "description",
        content:
          "Payment gateway integration, online payment collection, payment links, transaction management and reporting services from Binani Enterprises.",
      },
      { property: "og:title", content: "Service Range — Binani Enterprises" },
      {
        property: "og:description",
        content: "Digital payment services for Indian businesses, set up and supported end to end.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-serif text-4xl font-semibold">Our Services</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Digital payment solutions covering integration, collection, reconciliation and reporting.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ItemCard key={s.slug} item={s} />
        ))}
      </div>
    </div>
  );
}