import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { allItems, company } from "@/data/catalog";

type ContactSearch = { item?: string | undefined };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    item: typeof search["item"] === "string" ? search["item"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact & Inquiry — Binani Enterprises" },
      {
        name: "description",
        content:
          "Send a product or service inquiry to Binani Enterprises, Surat. Share your sourcing requirement and receive a quote.",
      },
      { property: "og:title", content: "Contact Binani Enterprises" },
      {
        property: "og:description",
        content: "Tell us your sourcing needs for apparel, waste paper or payment services.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { item } = Route.useSearch();
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-[1fr_1fr]">
      <div>
        <h1 className="font-serif text-4xl font-semibold">Request a Quote</h1>
        <p className="mt-3 text-muted-foreground">
          We are happy to fulfil your requirement. Let us know what your sourcing needs are and our
          team will respond with pricing and availability.
        </p>
        <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border">
          {company.business.slice(-4).map((b) => (
            <div key={b.label} className="bg-card p-4">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">{b.label}</dt>
              <dd className="mt-1 text-sm font-semibold">{b.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <form
        className="rounded-xl border border-border bg-card p-6 shadow-card"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          const form = e.currentTarget;
          setTimeout(() => {
            setSubmitting(false);
            form.reset();
            toast.success("Inquiry sent", {
              description: "Our team will get back to you shortly.",
            });
          }, 600);
        }}
      >
        <div className="grid gap-4">
          <label className="grid gap-1.5 text-sm font-medium">
            Your Name
            <input
              required
              name="name"
              className="rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Email
            <input
              required
              type="email"
              name="email"
              className="rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Mobile Number
            <input
              required
              name="phone"
              className="rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Interested In
            <select
              name="item"
              defaultValue={item ?? ""}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">General inquiry</option>
              {allItems.map((i) => (
                <option key={i.slug} value={i.name}>
                  {i.name}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Requirement Details
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Quantity, specifications, delivery location…"
              className="rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Inquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}