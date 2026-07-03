import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function Section({ children, className = "", id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${dark ? "bg-navy text-white" : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-wider ${
            light ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
