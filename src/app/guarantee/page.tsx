import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our BB Soft Guarantee",
  description:
    "Within 3 months of switching to BB Soft, save at least 4× your monthly usage fee — or we refund your set-up fee.",
};

const guaranteeSteps = [
  {
    step: "01",
    title: "Switch to BB Soft",
    description: "Complete your cut-over to the BB Soft platform and begin operations.",
  },
  {
    step: "02",
    title: "Measure your savings",
    description:
      "Track the time and cost savings across billing, operations, and logistics over 3 months.",
  },
  {
    step: "03",
    title: "Guaranteed results",
    description:
      "Save a minimum of 4× your monthly usage fee — or BB Soft refunds your entire set-up fee.",
  },
] as const;

export default function GuaranteePage() {
  return (
    <>
      <section className="gradient-mesh pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-eyebrow">
            Our BB Soft Guarantee
          </p>
          <h1 className="mt-3 font-display text-4xl font-normal text-white sm:text-5xl lg:text-6xl">
            We put our money{" "}
            <span className="italic text-accent-light">where our mouth is</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
            We are so confident in our software, we make this guarantee without
            hesitation. BB Soft is that good.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 p-10 text-center sm:p-16">
            <p className="text-7xl font-bold text-accent sm:text-8xl">4×</p>
            <p className="mt-4 text-2xl font-semibold text-navy sm:text-3xl">
              Minimum savings in 3 months
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted leading-relaxed">
              Within 3 months of cutting over to BB Soft, your company will save a
              minimum of quadruple your Monthly Usage Fee. If not, BB Soft will
              refund your Set-Up Fee.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="How It Works"
          title="Three simple steps to guaranteed ROI"
          centered
        />
        <div className="grid gap-8 md:grid-cols-3">
          {guaranteeSteps.map((item) => (
            <div key={item.step} className="text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            title="No risk. All reward."
            description="Join the DMCs and tour operators who trust BB Soft to deliver measurable results from day one."
            centered
          />
          <Button href="/contact" variant="primary" size="lg">
            Get Started Today
          </Button>
        </div>
      </Section>

      <Section>
        <CTABanner
          title="The software that makes you money"
          description="See for yourself why we're confident enough to guarantee 4× ROI."
        />
      </Section>
    </>
  );
}
