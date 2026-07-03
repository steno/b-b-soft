import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { Section, SectionHeader } from "@/components/section";
import { SparklesIcon } from "@/components/icons";
import { MobileHeroMotion } from "@/components/mobile-hero-motion";
import { homeStats, pricingHighlights, softwareFeatures, siteConfig } from "@/lib/content";
import { assetPath } from "@/lib/asset-path";
import { siteContainerClass } from "@/lib/layout";
import { VantaNetBackground } from "@/components/vanta-net-background";
import Image from "next/image";

export default function HomePage() {
  const highlightFeatures = softwareFeatures.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <VantaNetBackground variant="hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <MobileHeroMotion className="z-[2]" />
        <div className={`relative z-10 ${siteContainerClass} py-32 lg:py-40`}>
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 xl:gap-20">
            <div className="max-w-3xl">
              <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-eyebrow">
                <SparklesIcon className="h-4 w-4 text-eyebrow" />
                Now with AI-powered operations
              </p>
              <h1 className="animate-fade-up animation-delay-100 font-display text-5xl font-normal leading-tight text-white sm:text-6xl lg:text-7xl">
                The software that makes you{" "}
                <span className="text-accent-light italic">money</span>
              </h1>
              <p className="animate-fade-up animation-delay-200 mt-6 text-xl leading-relaxed text-slate-300">
                {siteConfig.description} Simple to use, feature-rich, and built for
                operations that never stop.
              </p>
              <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg">
                  Schedule a Demo
                </Button>
                <Button href="/software" variant="outline" size="lg">
                  See Features
                </Button>
              </div>
            </div>

            <div className="pointer-events-none flex justify-center lg:justify-end lg:pr-20 xl:pr-32 2xl:pr-40">
              <div className="h-48 overflow-hidden sm:h-60 md:h-[17rem] lg:h-[min(58vh,620px)] xl:h-[min(62vh,720px)]">
                <Image
                  src={assetPath("/anna-glow.png")}
                  alt="Anna, BB Soft representative"
                  width={567}
                  height={832}
                  priority
                  className="h-[115%] w-auto max-w-none object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-up animation-delay-400 mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20">
            {homeStats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-6 py-5 text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features overview */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Why BB Soft"
          title="Built for DMCs and tour operators who demand reliability"
          description="From single-passenger bookings to million-passenger operations — BB Soft handles it all with bulletproof stability and zero hidden fees."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/software" variant="ghost" size="lg">
            View all 12+ features &rarr;
          </Button>
        </div>
      </Section>

      {/* AI Module teaser */}
      <Section dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="AI-Mod"
              title="Artificial intelligence, built into your workflow"
              description="BB Soft was already the most efficient software in the industry. With AI-Mod, operating your DMC or tour operation enters a whole new universe."
              light
            />
            <ul className="space-y-4">
              {[
                "50% reduction in transfer set-up time on first use",
                "Efficiencies increase with every successive use",
                "Seamlessly integrates with your existing BB Soft platform",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-light">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/ai-mod" variant="primary" size="lg">
                Learn About AI-Mod
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="eyebrow-icon flex h-12 w-12 items-center justify-center rounded-xl">
                    <SparklesIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Excursion Transfer Set-Up</p>
                    <p className="text-sm text-slate-400">AI-assisted routing</p>
                  </div>
                  <span className="ml-auto rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent-light">
                    -50%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent to-accent-light" />
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: "Time saved", value: "4.2 hrs" },
                    { label: "Accuracy", value: "99.8%" },
                    { label: "Learning", value: "Active" },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-xl bg-white/5 p-4">
                      <p className="text-lg font-bold text-white">{metric.value}</p>
                      <p className="text-xs text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing highlights */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Transparent Pricing"
          title="No hidden fees. No surprises."
          description="Your costs are based on monthly usage from one server — nothing more."
          centered
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pricingHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-300/90 bg-white p-8 text-center shadow-md shadow-slate-400/15"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Guarantee teaser */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-navy p-10 text-white">
              <p className="text-6xl font-bold text-accent-light">4×</p>
              <p className="mt-2 text-2xl font-semibold">ROI Guarantee</p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Within 3 months of switching to BB Soft, your company will save a
                minimum of quadruple your monthly usage fee — or we refund your
                set-up fee.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Our Guarantee"
              title="We're so confident, we put it in writing"
              description="BB Soft is that good. We make this guarantee without hesitation because our clients consistently see dramatic savings from day one."
            />
            <Button href="/guarantee" variant="primary" size="lg">
              Read Our Guarantee
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="So, why are you waiting?"
          description="Schedule an online demonstration and see how BB Soft can transform your DMC or tour operation."
        />
      </Section>
    </>
  );
}
