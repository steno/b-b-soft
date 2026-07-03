import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BB Soft to learn more about our product and services or schedule an online demonstration.",
};

export default function ContactPage() {
  return (
    <>
      <section className="gradient-mesh pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-eyebrow">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-normal text-white sm:text-5xl">
            So, why are you waiting?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
            If you would like to know more about our product and services or
            schedule an online demonstration, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-navy">Get in touch</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Reach out directly or fill in the form and we&apos;ll get back to you
              promptly.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-navy">Phone</p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-accent hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-navy">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
