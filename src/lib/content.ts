export const siteConfig = {
  name: "BB Soft",
  tagline: "The Software That Makes You Money",
  description:
    "Operations, logistics, invoicing, and costing software for Destination Management Companies (DMCs) and tour providers.",
  phone: "1 563 328 4723",
  phoneHref: "tel:+15633284723",
  email: "info@b-b-soft.com",
  url: "https://www.b-b-soft.com",
};

export const navLinks = [
  { href: "/software", label: "Software" },
  { href: "/ai-mod", label: "AI Module" },
  { href: "/guarantee", label: "Guarantee" },
  { href: "/ethics", label: "Ethics" },
  { href: "/contact", label: "Contact" },
] as const;

export const softwareFeatures = [
  {
    title: "Bullet-proof reliability",
    description:
      'Our philosophy: the network can never go down. BB Soft is built for uninterrupted operations.',
    icon: "shield",
  },
  {
    title: "Enterprise-grade stability",
    description:
      "Built on WinDev, WinDev Mobile, and WebDev — platforms trusted by leading companies worldwide.",
    icon: "server",
  },
  {
    title: "Microsoft SQL Server",
    description:
      "Reliable data management with proven enterprise database technology at the core.",
    icon: "database",
  },
  {
    title: "Unlimited capacity",
    description:
      "Whether you book 1 passenger a month or 1,000,000, BB Soft scales with your business.",
    icon: "scale",
  },
  {
    title: "Multi-airport operations",
    description:
      "No limit on airports. Passengers arriving at one airport and departing from another? Handled seamlessly.",
    icon: "plane",
  },
  {
    title: "Flexible hotel management",
    description:
      "Virtually unlimited hotels per reservation — passengers moving between properties is no problem.",
    icon: "hotel",
  },
  {
    title: "Excursion management",
    description:
      "Handle your own excursions and third-party excursions with full operational control.",
    icon: "map",
  },
  {
    title: "Any round trip type",
    description:
      "Book round trips from your company, external suppliers, or Fly & Drive packages.",
    icon: "route",
  },
  {
    title: "Complete financial control",
    description:
      "Full costing, billing, and inventory control in one integrated system.",
    icon: "chart",
  },
  {
    title: "95% faster billing",
    description:
      "Cut your billing time by 95% — literally. Reclaim hours every week.",
    icon: "clock",
  },
  {
    title: "Precise receivables",
    description:
      "Partial or full invoice payments with complete line-by-line detail of what was paid or outstanding.",
    icon: "receipt",
  },
  {
    title: "Line-by-line credit notes",
    description:
      "Apply credit notes with granular control at the line-item level.",
    icon: "credit",
  },
] as const;

export const pricingHighlights = [
  {
    title: "No feature charges",
    description: "Use every feature of the software — no hidden fees or upsells.",
  },
  {
    title: "No terminal fees",
    description:
      "One location or one hundred — no fees for separate terminals, software keys, or multi-city offices.",
  },
  {
    title: "Free support",
    description: "Comprehensive support included. No extra charges, ever.",
  },
] as const;

export const homeStats = [
  { value: "95%", label: "Reduction in billing time" },
  { value: "4×", label: "Guaranteed ROI in 3 months" },
  { value: "∞", label: "Passengers & locations supported" },
  { value: "$0", label: "Extra fees for support" },
] as const;
