import imgKidsKurta from "@/assets/kids-kurta.jpg";
import imgMensKurta from "@/assets/mens-kurta.jpg";
import imgNehruJacket from "@/assets/nehru-jacket.jpg";
import imgEmbroiderySuit from "@/assets/embroidery-suit.jpg";
import imgOccWastePaper from "@/assets/occ-waste-paper.jpg";
import imgKraftLiner from "@/assets/kraft-liner.jpg";
import imgDsoccWastePaper from "@/assets/dsocc-waste-paper.jpg";
import imgSvcGateway from "@/assets/svc-gateway.jpg";
import imgSvcCollection from "@/assets/svc-collection.jpg";
import imgSvcB2b from "@/assets/svc-b2b.jpg";
import imgSvcLinks from "@/assets/svc-links.jpg";
import imgSvcSecure from "@/assets/svc-secure.jpg";
import imgSvcTransactions from "@/assets/svc-transactions.jpg";
import imgSvcReporting from "@/assets/svc-reporting.jpg";
import imgSvcSupport from "@/assets/svc-support.jpg";

export type Item = {
  slug: string;
  name: string;
  price: string;
  image: string;
  category: "Apparel" | "Paper & Scrap" | "Payment Services";
  description: string;
  specs: { label: string; value: string }[];
};

export const company = {
  name: "Binani Enterprises",
  tagline: "Manufacturer & Supplier of Ethnic Apparel, Waste Paper and Digital Payment Solutions",
  intro:
    "Established in 2024, Binani Enterprises supplies a trusted range of ethnic apparel, recycled paper grades and digital payment services across India. Our qualified team works with premium raw material and delivers to committed timelines, with specifications tailored to each buyer.",
  business: [
    { label: "Business Type", value: "Manufacturer" },
    { label: "Year of Establishment", value: "2024" },
    { label: "Ownership Type", value: "Sole Proprietorship" },
    { label: "Company Turnover", value: "Rs. 5 - 10 Crore (US$ 1 - 2 Mn Approx.)" },
    { label: "No. of Employees", value: "Less than 10 People" },
    { label: "Major Markets Covered", value: "All Over India" },
    { label: "GST No.", value: "24CPYPB8953C1ZL" },
    { label: "Location", value: "Surat, Gujarat, India" },
  ],
};

export const products: Item[] = [
  {
    slug: "kids-kurta-pajama",
    name: "Kids Kurta Pajama",
    price: "₹500 - 2500 / Piece",
    image: imgKidsKurta,
    category: "Apparel",
    description:
      "High quality Kids Kurta Pajama from a dependable supplier. Owing to our flawless transit system, we deliver orders within the promised time frame, in a wide choice of fabrics, colours and sizes.",
    specs: [
      { label: "Material", value: "Cotton, Silk Blend" },
      { label: "Sizes", value: "2 - 14 Years" },
      { label: "Minimum Order", value: "50 Pieces" },
    ],
  },
  {
    slug: "mens-kurta-pajama",
    name: "Men's Kurta Pajama",
    price: "₹500 - 2500 / Piece",
    image: imgMensKurta,
    category: "Apparel",
    description:
      "A comprehensive range of Men's Kurta Pajama produced with the assistance of our dedicated workforce. Buyers can stay rest assured for on-time delivery and consistent finishing.",
    specs: [
      { label: "Material", value: "Cotton, Rayon, Silk Blend" },
      { label: "Sizes", value: "S - XXXL" },
      { label: "Minimum Order", value: "50 Pieces" },
    ],
  },
  {
    slug: "jacquard-nehru-jacket",
    name: "Jacquard Nehru Jacket",
    price: "₹500 - 2500 / Piece",
    image: imgNehruJacket,
    category: "Apparel",
    description:
      "Jacquard Nehru Jackets crafted in rich woven patterns for festive and wedding wear. Available in a broad palette with custom sizing on bulk orders.",
    specs: [
      { label: "Pattern", value: "Jacquard Woven" },
      { label: "Sizes", value: "S - XXXL" },
      { label: "Minimum Order", value: "25 Pieces" },
    ],
  },
  {
    slug: "embroidery-suit-design",
    name: "Embroidery Suit Design",
    price: "₹100 - 600 / Piece",
    image: imgEmbroiderySuit,
    category: "Apparel",
    description:
      "Finest Embroidery Suit Designs that customers trust us for. Backed by a sophisticated transit system, buyers receive their consignments without delay.",
    specs: [
      { label: "Work", value: "Machine Embroidery" },
      { label: "Usage", value: "Ethnic Wear" },
      { label: "Minimum Order", value: "100 Pieces" },
    ],
  },
  {
    slug: "occ-waste-paper",
    name: "OCC Waste Paper",
    price: "$160 - 250 / Metric Ton",
    image: imgOccWastePaper,
    category: "Paper & Scrap",
    description:
      "Fine quality OCC Waste Paper at nominal prices. Buyers are free to place bulk as well as urgent orders and we ensure timely delivery of every lot.",
    specs: [
      { label: "Type", value: "Paper Waste" },
      { label: "Payment Terms", value: "L/C, D/A, D/P, T/T, Online Payment" },
      { label: "Packaging", value: "Baled" },
    ],
  },
  {
    slug: "kraft-liner-board",
    name: "Kraft Liner Board",
    price: "$600 - 700 / Metric Ton",
    image: imgKraftLiner,
    category: "Paper & Scrap",
    description:
      "Reckoned as a noted supplier of Kraft Liner, we meet the exact requirements of buyers and deliver orders on schedule for complete satisfaction.",
    specs: [
      { label: "Grade", value: "Kraft Liner" },
      { label: "Payment Terms", value: "L/C, D/A, D/P, T/T, Online Payment" },
      { label: "Form", value: "Reels" },
    ],
  },
  {
    slug: "occ-dsocc-waste-paper",
    name: "OCC / DSOCC Waste Paper",
    price: "$150 - 250 / Metric Ton",
    image: imgDsoccWastePaper,
    category: "Paper & Scrap",
    description:
      "DSOCC Waste Paper is a recyclable paper material suitable for recycling and paper manufacturing. It is collected, sorted and processed to maintain consistent quality and usability.",
    specs: [
      { label: "Type", value: "Paper Waste" },
      { label: "Material", value: "Corrugated Cardboard, OCC Scraps" },
      { label: "Payment Terms", value: "L/C, D/P, T/T, Online Payment" },
    ],
  },
];

export const services: Item[] = [
  {
    slug: "payment-gateway-integration",
    name: "Payment Gateway Integration",
    price: "₹5000 / PG",
    image: imgSvcGateway,
    category: "Payment Services",
    description:
      "End-to-end payment gateway integration for websites and apps, with sandbox testing, go-live support and documentation.",
    specs: [{ label: "Turnaround", value: "3 - 7 Working Days" }],
  },
  {
    slug: "online-payment-collection",
    name: "Online Payment Collection",
    price: "₹5000 / PG",
    image: imgSvcCollection,
    category: "Payment Services",
    description:
      "Collect customer payments online through cards, UPI, netbanking and wallets with automated reconciliation.",
    specs: [{ label: "Modes", value: "UPI, Cards, Netbanking, Wallets" }],
  },
  {
    slug: "b2b-payment-solutions",
    name: "B2B Payment Solutions",
    price: "₹5000 / PG",
    image: imgSvcB2b,
    category: "Payment Services",
    description:
      "Payment workflows built for business buyers: invoice collection, bulk payouts and credit period handling.",
    specs: [{ label: "Best For", value: "Distributors, Traders, Manufacturers" }],
  },
  {
    slug: "payment-links",
    name: "Payment Links",
    price: "₹5000 / PG",
    image: imgSvcLinks,
    category: "Payment Services",
    description:
      "Share ready-to-pay links over WhatsApp, SMS or email and get paid without a website or checkout build.",
    specs: [{ label: "Setup", value: "Same Day" }],
  },
  {
    slug: "digital-payment-acceptance",
    name: "Digital Payment Acceptance",
    price: "₹5000 / PG",
    image: imgSvcCollection,
    category: "Payment Services",
    description:
      "Enable digital payment acceptance across counters and online channels with unified settlement.",
    specs: [{ label: "Support", value: "Onboarding + Training" }],
  },
  {
    slug: "transaction-management",
    name: "Transaction Management",
    price: "₹5000 / PG",
    image: imgSvcTransactions,
    category: "Payment Services",
    description:
      "Track, reconcile and manage every transaction from a single dashboard with refund and dispute handling.",
    specs: [{ label: "Reporting", value: "Daily & Monthly" }],
  },
  {
    slug: "secure-payments",
    name: "Secure Payments",
    price: "₹5000 / PG",
    image: imgSvcSecure,
    category: "Payment Services",
    description:
      "PCI-conscious, encrypted payment flows with fraud checks to keep customer money and data protected.",
    specs: [{ label: "Security", value: "Encryption + Fraud Checks" }],
  },
  {
    slug: "real-time-reporting",
    name: "Real Time Reporting",
    price: "₹5000 / PG",
    image: imgSvcReporting,
    category: "Payment Services",
    description:
      "Live visibility into collections, settlements and failures so finance teams always know where money stands.",
    specs: [{ label: "Export", value: "CSV, Excel" }],
  },
  {
    slug: "reliable-support",
    name: "Reliable Support",
    price: "₹5000 / PG",
    image: imgSvcSupport,
    category: "Payment Services",
    description:
      "Responsive assistance for setup, settlement queries and escalations from a team that knows your account.",
    specs: [{ label: "Availability", value: "Mon - Sat" }],
  },
  {
    slug: "payment-reporting",
    name: "Payment Reporting",
    price: "₹5000 / PG",
    image: imgSvcReporting,
    category: "Payment Services",
    description:
      "Structured payment reports for accounting, GST filing and internal audits, delivered on your schedule.",
    specs: [{ label: "Formats", value: "PDF, Excel" }],
  },
];

export const allItems = [...products, ...services];

export const faqs = [
  {
    q: "What is the business of Binani Enterprises?",
    a: "The company is engaged as a manufacturer of Kids Kurta Pajama, Men's Kurta Pajama, Jacquard Nehru Jacket, Embroidery Suit Design, waste paper grades and digital payment services.",
  },
  {
    q: "When was Binani Enterprises founded?",
    a: "Binani Enterprises was established in 2024 and operates from Surat, Gujarat, India.",
  },
  {
    q: "How many employees does the company have?",
    a: "The company has fewer than 10 people on its rolls.",
  },
  {
    q: "Which markets do you serve?",
    a: "We supply all over India, and export waste paper and kraft liner grades to overseas buyers.",
  },
];
