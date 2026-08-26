import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment — Binani Enterprises" },
      { name: "description", content: "Make payments via our PayGlocal integration." },
      { property: "og:title", content: "Pay — Binani Enterprises" },
    ],
  }),
  component: PaymentPage,
});

function PaymentPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a form and inject the PayGlocal script inside it
    const form = document.createElement("form");
    const script = document.createElement("script");
    script.src = "https://oneclick.payglocal.in/simple.js";
    script.async = true;
    // Update this PB id to your merchant PB id if needed
    script.setAttribute("data-pb-id", "pb_63lFq53Wd9Rh");
    form.appendChild(script);
    container.appendChild(form);

    return () => {
      if (container.contains(form)) container.removeChild(form);
    };
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="font-serif text-3xl font-semibold">Pay Online</h1>
      <p className="mt-3 text-muted-foreground">
        Use the one-click payment widget below to make a payment. If the widget does not appear,
        check the browser console for blocked scripts or CSP errors.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        {/* Payment widget is injected into this container on the client */}
        <div ref={containerRef} />
      </div>

      <Link
        to="/"
        className="mt-6 inline-block rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
      >
        Back to Home
      </Link>
    </div>
  );
}
