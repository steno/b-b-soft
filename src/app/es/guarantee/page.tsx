import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nuestra garantía BB Soft",
  description:
    "Dentro de 3 meses de cambiar a BB Soft, ahorra al menos 4× tu tarifa mensual de uso o reembolsamos tu cargo de implementación.",
};

const guaranteeSteps = [
  {
    step: "01",
    title: "Cambia a BB Soft",
    description: "Completa tu transición a la plataforma BB Soft y comienza a operar.",
  },
  {
    step: "02",
    title: "Mide tus ahorros",
    description:
      "Mide los ahorros de tiempo y costo en facturación, operaciones y logística durante 3 meses.",
  },
  {
    step: "03",
    title: "Resultados garantizados",
    description:
      "Ahorra un mínimo de 4× tu tarifa mensual de uso o BB Soft reembolsa tu cargo de implementación.",
  },
] as const;

export default function SpanishGuaranteePage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra garantía BB Soft"
        title={
          <>
            Ponemos nuestro dinero{" "}
            <span className="italic text-accent-light">donde está nuestra palabra</span>
          </>
        }
        description="Tenemos tanta confianza en nuestro software que hacemos esta garantía sin dudarlo. BB Soft es así de bueno."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 p-10 text-center sm:p-16">
            <p className="text-7xl font-bold text-accent sm:text-8xl">4×</p>
            <p className="mt-4 text-2xl font-semibold text-navy sm:text-3xl">
              Ahorro mínimo en 3 meses
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted leading-relaxed">
              Dentro de 3 meses de cambiar a BB Soft, tu empresa ahorrará un
              mínimo de cuatro veces tu tarifa mensual de uso. Si no, BB Soft
              reembolsará tu cargo de implementación.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Cómo funciona"
          title="Tres pasos simples hacia un ROI garantizado"
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
            title="Sin riesgo. Todo recompensa."
            description="Únete a los DMCs y operadores turísticos que confían en BB Soft para lograr resultados medibles desde el primer día."
            centered
          />
          <Button href="/es/contact" variant="primary" size="lg">
            Comenzar hoy
          </Button>
        </div>
      </Section>

      <Section>
        <CTABanner
          title="El software que te hace ganar dinero"
          description="Comprueba por ti mismo por qué tenemos la confianza suficiente para garantizar 4× ROI."
          primaryLabel="Solicitar demo"
          primaryHref="/es/contact"
          secondaryLabel="Explorar software"
          secondaryHref="/es/software"
        />
      </Section>
    </>
  );
}
