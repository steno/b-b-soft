"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/content";
import { siteConfigEs } from "@/lib/content-es";
import {
  getLocaleFromPathname,
  localizedHref,
  navLinksForLocale,
  uiText,
} from "@/lib/i18n";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const navLinks = navLinksForLocale(locale);
  const text = uiText[locale];
  const config = locale === "es" ? siteConfigEs : siteConfig;

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href={localizedHref("/", locale)} className="inline-flex">
              <Logo className="h-10" />
            </Link>
            <p className="mt-4 max-w-md text-slate-300 leading-relaxed">
              {config.description}
            </p>
            <p className="mt-2 text-accent font-medium italic">
              &ldquo;{config.tagline}&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {text.navigation}
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {text.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {year} {siteConfig.name}, LLC. {text.rights}
          </p>
          <Link
            href={localizedHref("/ethics", locale)}
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            {text.ethicsPolicy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
