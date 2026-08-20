import { Link } from "@tanstack/react-router";
import type { Item } from "@/data/catalog";

export function ItemCard({ item }: { item: Item }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1">
      <Link
        to="/catalog/$slug"
        params={{ slug: item.slug }}
        className="block aspect-4/3 overflow-hidden bg-secondary"
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {item.category}
        </span>
        <h3 className="font-serif text-lg font-semibold leading-snug">
          <Link to="/catalog/$slug" params={{ slug: item.slug }} className="hover:text-primary">
            {item.name}
          </Link>
        </h3>
        <p className="text-sm font-semibold text-primary">{item.price}</p>
        <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-auto flex gap-2 pt-3">
          <Link
            to="/catalog/$slug"
            params={{ slug: item.slug }}
            className="flex-1 rounded-md border border-border px-3 py-2 text-center text-sm font-medium hover:bg-secondary"
          >
            View Details
          </Link>
          <Link
            to="/contact"
            search={{ item: item.name }}
            className="flex-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Send Inquiry
          </Link>
        </div>
      </div>
    </article>
  );
}