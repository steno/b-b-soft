import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { pricingHighlightsEs, softwareFeaturesEs } from "@/lib/content-es";

export const metadata: Metadata = {
  title: "Nuestro Software",
  description:
    "BB Soft es fácil de usar y rico en funciones: confiabilidad, capacidad ilimitada y facturación 95% más rápida para DMCs y operadores turísticos.",
};

export default function SpanishSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestro Software"
        title={
          <>
            Fácil de usar.{" "}
            <span className="italic text-accent-light">Rico en funciones.</span>
          </>
        }
        description="BB Soft maneja cada aspecto de tu DMC u operación turística: reservas, logística, costos, facturación y control de inventario."
      />

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Capacidades principales"
          title="Todo lo que tu operación necesita"
          description="Construido sobre WinDev, WinDev Mobile y WebDev, con Microsoft SQL Server en el núcleo."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareFeaturesEs.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section className="bg-background">
        <SectionHeader
          eyebrow="Filosofía de precios"
          title="Un servidor. Una tarifa mensual. Eso es todo."
          description="Sin cargos por funciones, terminales, ubicaciones o soporte."
          centered
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {pricingHighlightsEs.map((item, i) => (
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
          title="Mira BB Soft en acción"
          description="Reserva una demostración online y descubre cómo BB Soft puede reducir tu tiempo de facturación en un 95%."
          primaryLabel="Solicitar demo"
          primaryHref="/es/contact"
          secondaryLabel="Ver AI-Mod"
          secondaryHref="/es/ai-mod"
        />
      </Section>
    </>
  );
}
