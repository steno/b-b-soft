import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Política anticorrupción y ética empresarial",
  description:
    "En BB Soft, el soborno nunca está permitido. No hacemos cosas corruptas: nuestro compromiso con la honestidad y la integridad.",
};

const principles = [
  {
    title: "Cero tolerancia al soborno",
    description:
      "No buscaremos influir en otros ofreciendo, pagando o recibiendo sobornos o comisiones ilegales por medios poco éticos, ilegales o dañinos para nuestra reputación.",
  },
  {
    title: "Aplica a todos los socios",
    description:
      "Aunque ciertas leyes aplican solo a funcionarios gubernamentales, esta política también se extiende a socios comerciales no gubernamentales.",
  },
  {
    title: "Responsabilidad de los empleados",
    description:
      "Se espera que empleados y representantes rechacen cualquier oportunidad que ponga en riesgo nuestros principios éticos y reputación.",
  },
  {
    title: "Consecuencias legales",
    description:
      "El soborno y la corrupción son ilegales y pueden exponer tanto a empleados como a la empresa a multas, sanciones, prisión y daño reputacional.",
  },
] as const;

export default function SpanishEthicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ética empresarial"
        title="Política anticorrupción y ética empresarial"
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="font-display text-2xl italic text-navy sm:text-3xl">
                &ldquo;No hacemos cosas corruptas.&rdquo;
              </p>
            </blockquote>
            <p className="mt-8 text-lg text-muted leading-relaxed">
              El soborno y la corrupción no solo van contra nuestros valores;
              son ilegales y pueden exponer tanto al empleado como a la empresa
              a multas y sanciones, incluyendo prisión y daño reputacional. En
              BB Soft, el soborno nunca está permitido.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              No buscaremos influir en otros, directa o indirectamente,
              ofreciendo, pagando o recibiendo sobornos o comisiones ilegales,
              ni por cualquier otro medio considerado poco ético, ilegal o
              dañino para nuestra reputación de honestidad e integridad.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Nuestros principios"
          title="Integridad en cada interacción"
          centered
        />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-slate-300/90 bg-white p-6 shadow-md shadow-slate-400/15"
            >
              <h3 className="text-lg font-semibold text-navy">{principle.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
