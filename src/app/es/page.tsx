import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { Section, SectionHeader } from "@/components/section";
import { SparklesIcon } from "@/components/icons";
import { MobileHeroMotion } from "@/components/mobile-hero-motion";
import { VantaNetBackground } from "@/components/vanta-net-background";
import { assetPath } from "@/lib/asset-path";
import { siteContainerClass } from "@/lib/layout";
import {
  homeStatsEs,
  pricingHighlightsEs,
  siteConfigEs,
  softwareFeaturesEs,
} from "@/lib/content-es";

export const metadata: Metadata = {
  title: "BB Soft — Software para DMCs y operadores turísticos",
  description: siteConfigEs.description,
};

export default function SpanishHomePage() {
  const highlightFeatures = softwareFeaturesEs.slice(0, 6);

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <VantaNetBackground variant="hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <MobileHeroMotion className="z-[2]" />
        <div className={`relative z-10 ${siteContainerClass} py-32 lg:py-40`}>
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 xl:gap-20">
            <div className="max-w-3xl">
              <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-eyebrow">
                <SparklesIcon className="h-4 w-4 text-eyebrow" />
                Ahora con operaciones impulsadas por IA
              </p>
              <h1 className="animate-fade-up animation-delay-100 font-display text-5xl font-normal leading-tight text-white sm:text-6xl lg:text-7xl">
                El software que te hace{" "}
                <span className="text-accent-light italic">ganar dinero</span>
              </h1>
              <p className="animate-fade-up animation-delay-200 mt-6 text-xl leading-relaxed text-slate-300">
                {siteConfigEs.description} Fácil de usar, lleno de funciones y
                creado para operaciones que nunca se detienen.
              </p>
              <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/es/contact" variant="primary" size="lg">
                  Solicitar demo
                </Button>
                <Button href="/es/software" variant="outline" size="lg">
                  Ver funciones
                </Button>
              </div>
            </div>

            <div className="pointer-events-none flex justify-center lg:justify-end lg:pr-20 xl:pr-32 2xl:pr-40">
              <div className="h-48 overflow-hidden sm:h-60 md:h-[17rem] lg:h-[min(58vh,620px)] xl:h-[min(62vh,720px)]">
                <Image
                  src={assetPath("/anna-glow.png")}
                  alt="Anna, representante de BB Soft"
                  width={567}
                  height={832}
                  priority
                  className="h-[115%] w-auto max-w-none object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-up animation-delay-400 mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20">
            {homeStatsEs.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-6 py-5 text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Por qué BB Soft"
          title="Diseñado para DMCs y operadores turísticos que exigen confiabilidad"
          description="Desde reservas de un solo pasajero hasta operaciones de millones de pasajeros, BB Soft lo maneja todo con estabilidad y sin cargos ocultos."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/es/software" variant="ghost" size="lg">
            Ver las 12+ funciones &rarr;
          </Button>
        </div>
      </Section>

      <Section dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="AI-Mod"
              title="Inteligencia artificial integrada a tu flujo de trabajo"
              description="BB Soft ya era el software más eficiente de la industria. Con AI-Mod, operar tu DMC u operador turístico entra en un nuevo universo."
              light
            />
            <ul className="space-y-4">
              {[
                "50% menos tiempo en la configuración de traslados desde el primer uso",
                "Las eficiencias aumentan con cada uso sucesivo",
                "Se integra sin problemas con tu plataforma BB Soft existente",
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
              <Button href="/es/ai-mod" variant="primary" size="lg">
                Conocer AI-Mod
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
                    <p className="font-semibold text-white">Configuración de traslados</p>
                    <p className="text-sm text-slate-400">Rutas asistidas por IA</p>
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
                    { label: "Tiempo ahorrado", value: "4.2 hrs" },
                    { label: "Precisión", value: "99.8%" },
                    { label: "Aprendizaje", value: "Activo" },
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

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Precios transparentes"
          title="Sin cargos ocultos. Sin sorpresas."
          description="Tus costos se basan en el uso mensual desde un servidor: nada más."
          centered
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pricingHighlightsEs.map((item) => (
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

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-navy p-10 text-white">
              <p className="text-6xl font-bold text-accent-light">4×</p>
              <p className="mt-2 text-2xl font-semibold">Garantía de ROI</p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Dentro de 3 meses de cambiar a BB Soft, tu empresa ahorrará al
                menos cuatro veces tu tarifa mensual de uso, o reembolsamos tu
                cargo de implementación.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Nuestra garantía"
              title="Tenemos tanta confianza que lo ponemos por escrito"
              description="BB Soft es así de bueno. Hacemos esta garantía sin dudar porque nuestros clientes ven ahorros dramáticos desde el primer día."
            />
            <Button href="/es/guarantee" variant="primary" size="lg">
              Leer la garantía
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <CTABanner
          title="Entonces, ¿por qué esperar?"
          description="Agenda una demostración online y descubre cómo BB Soft puede transformar tu DMC u operación turística."
          primaryLabel="Solicitar demo"
          primaryHref="/es/contact"
          secondaryLabel="Explorar software"
          secondaryHref="/es/software"
        />
      </Section>
    </>
  );
}
