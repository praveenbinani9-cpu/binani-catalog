import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useRef, useState } from "react";

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
  const gbpContainerRef = useRef<HTMLDivElement | null>(null);
  const usdContainerRef = useRef<HTMLDivElement | null>(null);
  const [gbpLoaded, setGbpLoaded] = useState(false);
  const [usdLoaded, setUsdLoaded] = useState(false);
  const [gbpLoading, setGbpLoading] = useState(false);
  const [usdLoading, setUsdLoading] = useState(false);

  const createFormWithScript = useCallback((container: HTMLDivElement, pbId: string) => {
    // If a form/script is already present, don't create another
    if (container.querySelector("form")) return;

    const form = document.createElement("form");
    // Keep form minimal (only the script) because PayGlocal's script usually renders its own button
    form.appendChild(document.createElement("div")); // placeholder to ensure form is not empty in some browsers

    const script = document.createElement("script");
    script.src = "https://oneclick.payglocal.in/simple.js";
    script.async = true;
    script.setAttribute("data-pb-id", pbId);

    // Append script to form (as in the snippet you provided)
    form.appendChild(script);

    container.appendChild(form);

    // Resolve when script loads or errors
    script.addEventListener("load", () => {});
    script.addEventListener("error", () => {});
  }, []);

  const handleGbpClick = useCallback(() => {
    const container = gbpContainerRef.current;
    if (!container) return;
    if (gbpLoaded || gbpLoading) return;
    setGbpLoading(true);

    try {
      // pb_63lFq53Wd9Rh used previously for GBP; change if you have a GBP-specific PB id
      createFormWithScript(container, "pb_63lFq53Wd9Rh");
      setGbpLoaded(true);
    } catch (e) {
      // ignore — still set state to stop reattempt spam
      // console.error(e);
    } finally {
      setGbpLoading(false);
    }
  }, [createFormWithScript, gbpLoaded, gbpLoading]);

  const handleUsdClick = useCallback(() => {
    const container = usdContainerRef.current;
    if (!container) return;
    if (usdLoaded || usdLoading) return;
    setUsdLoading(true);

    try {
      // Use the exact snippet PB id you provided for USD
      createFormWithScript(container, "pb_xiCUFvHSnEXJ");
      setUsdLoaded(true);
    } catch (e) {
      // console.error(e);
    } finally {
      setUsdLoading(false);
    }
  }, [createFormWithScript, usdLoaded, usdLoading]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="font-serif text-3xl font-semibold">Pay Online</h1>
      <p className="mt-3 text-muted-foreground">
        Choose a currency and click a button to load the one-click payment widget.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">GBP</h2>
              <button
                type="button"
                onClick={handleGbpClick}
                disabled={gbpLoaded || gbpLoading}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
              >
                {gbpLoaded ? "Widget loaded" : gbpLoading ? "Loading…" : "PAY NOW WITH GBP"}
              </button>
            </div>
            <div ref={gbpContainerRef} className="mt-4" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">USD</h2>
              <button
                type="button"
                onClick={handleUsdClick}
                disabled={usdLoaded || usdLoading}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
              >
                {usdLoaded ? "Widget loaded" : usdLoading ? "Loading…" : "PAY NOW WITH USD"}
              </button>
            </div>
            <div ref={usdContainerRef} className="mt-4" />
          </div>
        </div>
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
