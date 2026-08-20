import { createFileRoute } from "@tanstack/react-router";
import { ItemCard } from "@/components/item-card";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Kurta Pajama, Nehru Jackets & Waste Paper | Binani Enterprises" },
      {
        name: "description",
        content:
          "Full product catalog from Binani Enterprises: kids and men's kurta pajama, jacquard Nehru jackets, embroidery suits, OCC waste paper and kraft liner board.",
      },
      { property: "og:title", content: "Product Range — Binani Enterprises" },
      {
        name: "og:description",
        content: "Ethnic apparel and recycled paper grades with bulk pricing and timely delivery.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-serif text-4xl font-semibold">Our Products</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Ethnic apparel and recycled paper grades, supplied in bulk with specifications tailored to
        each buyer.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ItemCard key={p.slug} item={p} />
        ))}
      </div>
    </div>
  );
}