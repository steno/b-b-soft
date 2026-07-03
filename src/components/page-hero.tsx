import { type ReactNode } from "react";
import { siteContainerClass } from "@/lib/layout";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  eyebrowIcon?: ReactNode;
  decorative?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  eyebrowIcon,
  decorative = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden gradient-mesh pt-32 pb-20">
      {decorative && (
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      )}
      <div className={`relative ${siteContainerClass} text-center`}>
        {eyebrowIcon ? (
          <div className="flex items-center justify-center gap-3">
            {eyebrowIcon}
            <p className="text-sm font-semibold uppercase tracking-wider text-eyebrow">
              {eyebrow}
            </p>
          </div>
        ) : (
          <p className="text-sm font-semibold uppercase tracking-wider text-eyebrow">
            {eyebrow}
          </p>
        )}
        <h1
          className={`mx-auto max-w-4xl font-display text-4xl font-normal text-white sm:text-5xl lg:text-6xl ${
            eyebrowIcon ? "mt-6 leading-tight" : "mt-3"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
