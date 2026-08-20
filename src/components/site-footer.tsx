import { Link } from "@tanstack/react-router";
import { company } from "@/data/catalog";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-brand-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-xl font-semibold">{company.name}</h2>
          <p className="mt-3 text-sm opacity-80">{company.tagline}</p>
          <p className="mt-4 text-sm opacity-80">GST No. 24CPYPB8953C1ZL</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70">Catalog</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/products" className="opacity-85 hover:opacity-100">All Products</Link></li>
            <li><Link to="/services" className="opacity-85 hover:opacity-100">All Services</Link></li>
            <li><Link to="/about" className="opacity-85 hover:opacity-100">About Us</Link></li>
            <li><Link to="/contact" className="opacity-85 hover:opacity-100">Send Inquiry</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70">Reach Us</h3>
          <address className="mt-3 space-y-2 text-sm not-italic opacity-85">
            <p>Surat, Gujarat, India</p>
            <p>Business Type: Manufacturer &amp; Supplier</p>
            <p>Markets: All Over India</p>

            {/* Added phone and email */}
            <p>
              Phone:{" "}
              <a href="tel:+918460360600" className="text-primary hover:underline" aria-label="Call Binani Enterprises">
                +91 8460360600
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:email-pravin@binanienterprises.in" className="text-primary hover:underline" aria-label="Email Binani Enterprises">
                email-pravin@binanienterprises.in
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
