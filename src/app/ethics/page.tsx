import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Anti-Corruption & Business Ethics Policy",
  description:
    "At BB Soft, bribery is never permitted. We don't do crooked stuff — our commitment to honesty and integrity.",
};

const principles = [
  {
    title: "Zero tolerance for bribery",
    description:
      "We will not seek to influence others by offering, paying, or receiving bribes or kickbacks — by any means considered unethical, illegal, or harmful to our reputation.",
  },
  {
    title: "Applies to all partners",
    description:
      "While certain laws apply only to government officials, this policy extends to non-government business partners as well.",
  },
  {
    title: "Employee responsibility",
    description:
      "Employees and representatives are expected to decline any opportunity that would place our ethical principles and reputation at risk.",
  },
  {
    title: "Legal consequences",
    description:
      "Bribery and corruption are illegal and can expose both employees and the company to fines, penalties, imprisonment, and reputational damage.",
  },
] as const;

export default function EthicsPage() {
  return (
    <>
      <section className="gradient-mesh pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-eyebrow">
            Business Ethics
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-normal text-white sm:text-5xl">
            Anti-Corruption &amp; Business Ethics Policy
          </h1>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="font-display text-2xl italic text-navy sm:text-3xl">
                &ldquo;We don&apos;t do crooked stuff.&rdquo;
              </p>
            </blockquote>
            <p className="mt-8 text-lg text-muted leading-relaxed">
              Bribery and corruption are not only against our company values;
              they are illegal and can expose both the employee and the company
              to fines and penalties, including imprisonment and reputational
              damage. At BB Soft, bribery is never permitted.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              We will not seek to influence others, either directly or
              indirectly, by offering, paying, or receiving bribes or
              kickbacks, or by any other means that is considered unethical,
              illegal, or harmful to our reputation of honesty and integrity.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Our Principles"
          title="Integrity in every interaction"
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
