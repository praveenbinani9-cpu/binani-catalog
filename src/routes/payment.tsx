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

    // Create a form and inject a visible "PAY NOW WITH USD" button and the PayGlocal script
    const form = document.createElement("form");
    form.className = "flex items-center gap-4";

    const button = document.createElement("button");
    button.type = "submit";
    // Tailwind classes used elsewhere in the site for visual consistency
    button.className = "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90";
    button.textContent = "PAY NOW WITH USD";

    form.appendChild(button);

    const script = document.createElement("script");
    script.src = "https://oneclick.payglocal.in/simple.js";
    script.async = true;
    // Updated PB id as requested
    script.setAttribute("data-pb-id", "pb_xiCUFvHSnEXJ");

    // Append the script after the button so the button is visible even if the script fails to load
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
        {/* Payment widget and visible button are injected into this container on the client */}
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
