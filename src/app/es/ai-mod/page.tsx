import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { SparklesIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Módulo IA (AI-Mod)",
  description:
    "El Módulo de Inteligencia Artificial de BB Soft reduce el tiempo de configuración de traslados en un 50% desde el primer uso y sigue mejorando.",
};

const aiBenefits = [
  {
    title: "50% más rápido desde el primer día",
    description:
      "La tarea intensiva de configuración de traslados para excursiones se reduce en un 50% desde el primer uso.",
    icon: "⚡",
  },
  {
    title: "Mejora continua",
    description:
      "Con cada uso sucesivo, los ahorros de tiempo aumentan mientras la IA aprende los patrones de tu operación.",
    icon: "📈",
  },
  {
    title: "Integración sin fricción",
    description:
      "AI-Mod se suma a tu plataforma BB Soft actual: sin migración y sin interrumpir tu flujo de trabajo.",
    icon: "🔗",
  },
  {
    title: "Liderazgo en la industria",
    description:
      "Un mundo completamente nuevo en software para DMCs y operadores turísticos. BB Soft está años luz por delante.",
    icon: "🚀",
  },
] as const;

export default function SpanishAIModPage() {
  return (
    <>
      <PageHero
        decorative
        eyebrow="Módulo de Inteligencia Artificial"
        eyebrowIcon={
          <span className="eyebrow-icon flex h-12 w-12 items-center justify-center rounded-2xl">
            <SparklesIcon className="h-6 w-6" />
          </span>
        }
        title={
          <>
            Tu operación, en un{" "}
            <span className="italic text-accent-light">nuevo universo</span>
          </>
        }
        description="BB Soft ya era el software más eficiente y preciso de la industria. Con AI-Mod, la velocidad y eficiencia que lograrás serán impresionantes."
      />

      <Section>
        <SectionHeader
          eyebrow="Cómo funciona"
          title="IA que aprende tu negocio"
          description="Una vez agregado AI-Mod a tu plataforma BB Soft actual, operar tu DMC u operador turístico nunca volverá a ser igual."
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
            &ldquo;Es un mundo completamente nuevo en la industria del software para
            DMCs y operadores turísticos, y BB Soft está años luz por delante de la competencia.&rdquo;
          </blockquote>
        </div>
      </Section>

      <Section>
        <CTABanner
          title="¿Listo para entrar en la era de la IA?"
          description="Agrega AI-Mod a tu plataforma BB Soft y experimenta mejoras de eficiencia desde el primer día."
          primaryLabel="Solicitar demo"
          primaryHref="/es/contact"
          secondaryLabel="Ver funciones"
          secondaryHref="/es/software"
        />
      </Section>
    </>
  );
}
