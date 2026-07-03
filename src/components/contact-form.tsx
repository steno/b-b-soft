"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";

type FormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo Request from ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Company: ${form.company}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-navy">Thank you!</h3>
        <p className="mt-2 text-muted">
          Your email client should open shortly. If it doesn&apos;t, reach us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
            {siteConfig.email}
          </a>
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground transition-colors placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy">
            Company
          </label>
          <input
            id="company"
            type="text"
            required
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputClass}
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Contact Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your operation and what you'd like to see in a demo..."
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
