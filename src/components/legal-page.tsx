import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Legal
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base text-muted-foreground">{intro}</p>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-serif text-xl font-semibold text-foreground">{s.heading}</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {s.body}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="font-serif text-lg font-semibold text-foreground">Questions about this policy?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Binani Enterprises, Surat, Gujarat, India · GST No. 24CPYPB8953C1ZL
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Contact Praveen Binani: <a href="tel:+918460360600" className="underline">+91 8460360600</a>. Email: [EMAIL].</p>
      </div>
    </main>
  );
}
