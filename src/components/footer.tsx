import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent font-bold text-sm text-white">
                BB
              </span>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-slate-300 leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="mt-2 text-accent font-medium italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Navigation
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
              Contact
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
            &copy; {year} {siteConfig.name}, LLC. All rights reserved.
          </p>
          <Link
            href="/ethics"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Anti-Corruption & Business Ethics Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
