import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { Section, SectionHeader } from "@/components/section";
import { SparklesIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "AI Module (AI-Mod)",
  description:
    "BB Soft's Artificial Intelligence Module cuts transfer set-up time by 50% on first use and keeps improving — lightyears ahead of the competition.",
};

const aiBenefits = [
  {
    title: "50% faster on day one",
    description:
      "The labor-intensive task of Transfer Set-Up for excursions is cut by 50% on the very first use.",
    icon: "⚡",
  },
  {
    title: "Continuous improvement",
    description:
      "With each successive use, time savings increase as the AI learns your operation's patterns.",
    icon: "📈",
  },
  {
    title: "Seamless integration",
    description:
      "AI-Mod adds to your existing BB Soft platform — no migration, no disruption to your workflow.",
    icon: "🔗",
  },
  {
    title: "Industry-leading",
    description:
      "A whole new world in DMC and tour provider software. BB Soft is lightyears ahead of the competition.",
    icon: "🚀",
  },
] as const;

export default function AIModPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-mesh pt-32 pb-20">
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent-light">
              <SparklesIcon className="h-6 w-6" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-wider text-eyebrow">
              Artificial Intelligence Module
            </p>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
            Your operation, in a{" "}
            <span className="italic text-accent-light">whole new universe</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
            BB Soft was already the most efficient, accurate software in the
            industry. With AI-Mod, the speed and efficiencies you achieve will
            be staggering.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="How It Works"
          title="AI that learns your business"
          description="Once AI-Mod is added to your current BB Soft platform, operating your DMC or tour operation will never be the same."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {aiBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-5 rounded-2xl border border-slate-300/90 bg-white p-6 shadow-md shadow-slate-400/15"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {benefit.icon}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-navy">{benefit.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="font-display text-2xl leading-relaxed text-white sm:text-3xl">
            &ldquo;It is a whole, new world in the DMC and Tour Provider Software
            Industry and BB Soft is lightyears ahead of the competition.&rdquo;
          </blockquote>
        </div>
      </Section>

      <Section>
        <CTABanner
          title="Ready to enter the AI era?"
          description="Add AI-Mod to your BB Soft platform and experience staggering efficiency gains from day one."
          secondaryLabel="View Software Features"
          secondaryHref="/software"
        />
      </Section>
    </>
  );
}
