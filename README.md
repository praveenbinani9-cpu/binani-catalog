# Binani Enterprises textile website

TanStack Start + React + TypeScript, Tailwind v4 and shadcn/ui. Routing stays on the existing TanStack stack rather than installing React Router.

## Content to confirm before publishing
- `src/data/fabrics.ts`: email, street address, business hours, WhatsApp number (international digits without +), fabric compositions and founding year (existing business data says 2024).
- Confirm +91 8460360600 as the current business phone. WhatsApp is deliberately inactive until its number is confirmed; chat buttons currently open Contact rather than an invented recipient.
- Replace generated/representative images with approved actual fabric, printing and manufacturing photographs. Imports are in `src/data/fabrics.ts` and the content routes.
- Confirm or replace the typographic B. logo mark and favicon.
- Confirm MOQ, sampling/production lead times and policy terms. Policies are general drafts for owner/legal review, without invented cancellation/refund deadlines.
- Confirm fabric base assignments, GSM, width, blend and sample suitability. Discovery labels are not composition certifications.
- No shop map is embedded until the exact address is confirmed. Add the confirmed map after that; never publish a fabricated location.

## Inquiry storage
The applied schema is in `drizzle/migrations/0000_textile_inquiries.sql`: inquiries, protected user_roles, RLS, explicit grants and private file read policies. The private `tech-packs` bucket was created through the Storage API with a 20 MB per-file limit. Creation is not embedded as unsupported storage.buckets SQL.
The 3-step RFQ uses react-hook-form + Zod; the server validates again. PDFs, JPGs, PNGs, AI and CDR files are accepted at up to 20 MB each. Inquiry and uploads are saved before showing success. Uploads are private with short-lived staff download links.

## Staff access
`/auth` signs in with an authorised email/password account. `/admin` lists inquiries, manages New / Contacted / Quoted / Closed statuses, opens full details and attachments, and exports all paginated rows as safe CSV.
Create the owner’s account using Lovable More → Users → Add user. Assign that account the admin role through a trusted database operation. No public signup or self-assigned admin role is provided. The website cannot guess which person should receive administrative access.
Role assignment template for an authorised operator (replace the UUID, never use a sample password):
```sql
insert into public.user_roles(user_id,role) values ('<actual-authorised-user-uuid>','admin');
```

## SEO and legacy URLs
Each content route has unique metadata. Organization and LocalBusiness JSON-LD includes only known locality information. `/sitemap.xml` uses the request origin. `/products` and legacy item URLs redirect to `/fabrics`; `/services` redirects to `/digital-printing`. Existing `/payment` remains available.

## Development
`bun install`, `bun run dev`. Existing project build pipeline verifies compilation. Run validation tests with `bun test src/lib/rfq-schema.test.ts`.
