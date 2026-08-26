import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { company } from "@/data/catalog";
import logo from "@/assets/binani-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/payment", label: "Payment" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedPbId, setSelectedPbId] = useState<string | null>(null);
  const paymentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = paymentRef.current;
    if (!container) return;

    // clear previous content
    container.innerHTML = "";

    if (!selectedPbId) return;

    const form = document.createElement("form");
    const script = document.createElement("script");
    script.src = "https://oneclick.payglocal.in/simple.js";
    script.setAttribute("data-pb-id", selectedPbId);
    script.async = true;
    form.appendChild(script);
    container.appendChild(form);

    return () => {
      if (container.contains(form)) container.removeChild(form);
    };
  }, [selectedPbId]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Binani Enterprises logo"
            width={816}
            height={816}
            className="h-10 w-auto"
          />

          <span className="leading-tight">
            <span className="block font-serif text-base font-semibold text-foreground">
              {company.name}
            </span>
            <span className="block text-xs text-muted-foreground">Surat, Gujarat · GST Verified</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            // Render a payment dropdown for the payment nav item
            if (n.to === "/payment") {
              return (
                <div key={n.to} className="relative">
                  <button
                    type="button"
                    onClick={() => setPaymentOpen((v) => !v)}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground border border-transparent hover:bg-secondary hover:text-foreground"
                    aria-expanded={paymentOpen}
                  >
                    {n.label}
                  </button>

                  {paymentOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-card p-2 shadow-lg">
                      <div className="space-y-2">
                        <button
                          className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-secondary"
                          onClick={() => setSelectedPbId("pb_63lFq53Wd9Rh")}
                        >
                          Payment Option 1
                        </button>

                        <button
                          className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-secondary"
                          onClick={() => setSelectedPbId("pb_63lFq53Wd9Rh")}
                        >
                          Payment Option 2
                        </button>

                        {/* New button requested: Pay (INR) — injects provided PayGlocal snippet */}
                        <button
                          className="w-full rounded-md bg-primary px-3 py-2 text-left text-sm font-semibold text-primary-foreground hover:opacity-90"
                          onClick={() => setSelectedPbId("pb_aQzGGu6zqpwm")}
                        >
                          Pay (INR)
                        </button>

                        {/* Additional button under payment option as requested */}
                        <button
                          className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-secondary"
                          onClick={() => {
                            // Example: reuse same pb id or set another if available
                            setSelectedPbId("pb_aQzGGu6zqpwm");
                          }}
                        >
                          Pay (INR) — Alternate
                        </button>
                      </div>

                      <div ref={paymentRef} className="mt-3" />
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="ml-auto rounded-md border border-border p-2 md:hidden"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-2 md:hidden">
          {nav.map((n) => (
            <div key={n.to}>
              {n.to === "/payment" ? (
                <div>
                  <button
                    className="block w-full text-left rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                    onClick={() => setPaymentOpen((v) => !v)}
                  >
                    {n.label}
                  </button>

                  {paymentOpen && (
                    <div className="mt-2 space-y-2">
                      <button
                        className="w-full rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:bg-secondary"
                        onClick={() => setSelectedPbId("pb_63lFq53Wd9Rh")}
                      >
                        Payment Option 1
                      </button>

                      <button
                        className="w-full rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:bg-secondary"
                        onClick={() => setSelectedPbId("pb_63lFq53Wd9Rh")}
                      >
                        Payment Option 2
                      </button>

                      <button
                        className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                        onClick={() => setSelectedPbId("pb_aQzGGu6zqpwm")}
                      >
                        Pay (INR)
                      </button>

                      <button
                        className="w-full rounded-md px-3 py-2 text-sm hover:bg-secondary"
                        onClick={() => setSelectedPbId("pb_aQzGGu6zqpwm")}
                      >
                        Pay (INR) — Alternate
                      </button>

                      <div ref={paymentRef} className="mt-3" />
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
