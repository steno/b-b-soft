import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { pricingHighlights, softwareFeatures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Software",
  description:
    "BB Soft is simple to use yet feature-rich — bulletproof reliability, unlimited capacity, and 95% faster billing for DMCs and tour operators.",
};

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Software"
        title={
          <>
            Simple to use.{" "}
            <span className="italic text-accent-light">Feature rich.</span>
          </>
        }
        description="BB Soft handles every aspect of your DMC or tour operation — from bookings and logistics to costing, billing, and inventory control."
      />

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="Everything your operation needs"
          description="Built on WinDev, WinDev Mobile, and WebDev with Microsoft SQL Server at the core."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section className="bg-background">
        <SectionHeader
          eyebrow="Pricing Philosophy"
          title="One server. One monthly fee. That's it."
          description="No charges for features, terminals, locations, or support."
          centered
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {pricingHighlights.map((item, i) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-slate-300/90 bg-white p-8 shadow-md shadow-slate-400/15"
            >
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CTABanner
          title="See BB Soft in action"
          description="Book an online demonstration and discover how BB Soft can cut your billing time by 95%."
          secondaryLabel="View AI Module"
          secondaryHref="/ai-mod"
        />
      </Section>
    </>
  );
}
