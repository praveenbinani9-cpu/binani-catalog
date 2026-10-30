import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useRef, useState } from "react";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment — Binani Enterprises" },
      { name: "description", content: "Make payments via our PayGlocal integration." },
      { property: "og:title", content: "Pay — Binani Enterprises" },
      { property: "og:description", content: "Online payment options for confirmed Binani Enterprises orders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PaymentPage,
});

function PaymentCard({
  title,
  subtitle,
  onClick,
  buttonLabel,
}: {
  title: string;
  subtitle?: string;
  onClick: () => void;
  buttonLabel?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="font-serif text-lg font-semibold">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      <button
        onClick={onClick}
        className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        {buttonLabel ?? "Select"}
      </button>
    </div>
  );
}

function PaymentPage() {
  const gbpContainerRef = useRef<HTMLDivElement | null>(null);
  const usdContainerRef = useRef<HTMLDivElement | null>(null);
  const inrContainerRef = useRef<HTMLDivElement | null>(null);

  const [gbpLoaded, setGbpLoaded] = useState(false);
  const [usdLoaded, setUsdLoaded] = useState(false);
  const [inrLoaded, setInrLoaded] = useState(false);

  const [loadingId, setLoadingId] = useState<string | null>(null);

  const createFormWithScript = useCallback((container: HTMLDivElement, pbId: string) => {
    // If a form/script is already present, don't create another
    if (container.querySelector("form")) return;

    const form = document.createElement("form");
    // placeholder to avoid empty form issues
    form.appendChild(document.createElement("div"));

    const script = document.createElement("script");
    script.src = "https://oneclick.payglocal.in/simple.js";
    script.async = true;
    script.setAttribute("data-pb-id", pbId);

    form.appendChild(script);
    container.appendChild(form);

    // no-op listeners; provider will render its own UI
    script.addEventListener("load", () => {});
    script.addEventListener("error", () => {});
  }, []);

  const handleGbp = useCallback(() => {
    const c = gbpContainerRef.current;
    if (!c) return;
    if (gbpLoaded || loadingId === "gbp") return;
    setLoadingId("gbp");
    try {
      createFormWithScript(c, "pb_63lFq53Wd9Rh");
      setGbpLoaded(true);
    } finally {
      setLoadingId(null);
    }
  }, [createFormWithScript, gbpLoaded, loadingId]);

  const handleUsd = useCallback(() => {
    const c = usdContainerRef.current;
    if (!c) return;
    if (usdLoaded || loadingId === "usd") return;
    setLoadingId("usd");
    try {
      createFormWithScript(c, "pb_xiCUFvHSnEXJ");
      setUsdLoaded(true);
    } finally {
      setLoadingId(null);
    }
  }, [createFormWithScript, usdLoaded, loadingId]);

  const handleInr = useCallback(() => {
    const c = inrContainerRef.current;
    if (!c) return;
    if (inrLoaded || loadingId === "inr") return;
    setLoadingId("inr");
    try {
      createFormWithScript(c, "pb_aQzGGu6zqpwm");
      setInrLoaded(true);
    } finally {
      setLoadingId(null);
    }
  }, [createFormWithScript, inrLoaded, loadingId]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <nav className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground">Pay Online</span>
      </nav>

      <h1 className="mt-6 font-serif text-3xl font-semibold">Pay Online</h1>
      <p className="mt-3 text-muted-foreground">Choose a payment currency below — click the button for the currency you want to pay with.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <PaymentCard
          title="Pay with GBP"
          subtitle="Cards, UPI and Netbanking (GBP)"
          buttonLabel={gbpLoaded ? "Widget loaded" : loadingId === "gbp" ? "Loading…" : "Pay with GBP"}
          onClick={handleGbp}
        />

        <PaymentCard
          title="Pay with USD"
          subtitle="UPI & Wallets (USD)"
          buttonLabel={usdLoaded ? "Widget loaded" : loadingId === "usd" ? "Loading…" : "Pay with USD"}
          onClick={handleUsd}
        />

        <PaymentCard
          title="Pay with INR"
          subtitle="PayGlocal INR checkout"
          buttonLabel={inrLoaded ? "Widget loaded" : loadingId === "inr" ? "Loading…" : "Pay with INR"}
          onClick={handleInr}
        />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="font-medium">GBP widget</h2>
          <div ref={gbpContainerRef} className="mt-3" />
        </div>

        <div>
          <h2 className="font-medium">USD widget</h2>
          <div ref={usdContainerRef} className="mt-3" />
        </div>

        <div>
          <h2 className="font-medium">INR widget</h2>
          <div ref={inrContainerRef} className="mt-3" />
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm text-muted-foreground">Note: the payment widget is provided by a third-party provider (PayGlocal). Please test with sandbox credentials and ensure your browser/CSP allows loading https://oneclick.payglocal.in.</p>
      </div>
    </div>
  );
}
