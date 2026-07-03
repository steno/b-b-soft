"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { navLinks, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerSurface = mobileOpen
    ? "bg-white shadow-sm border-b border-border"
    : scrolled
      ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-border"
      : "bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${headerSurface}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-sm transition-colors ${
              scrolled
                ? "bg-primary text-white"
                : "bg-white/15 text-white backdrop-blur-sm"
            }`}
          >
            BB
          </span>
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? active
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:text-navy hover:bg-slate-100"
                    : active
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant={scrolled ? "primary" : "secondary"}
            size="sm"
          >
            Request Demo
          </Button>
        </div>

        <button
          type="button"
          className={`lg:hidden rounded-lg p-2 transition-colors ${
            scrolled ? "text-navy hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {mounted &&
        mobileOpen &&
        createPortal(
          <div className="lg:hidden fixed inset-0 top-[72px] z-[90] bg-white overflow-y-auto">
            <nav className="flex flex-col gap-1 p-6" aria-label="Mobile">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 border-t border-border pt-4">
                <Button href="/contact" variant="primary" className="w-full">
                  Request Demo
                </Button>
              </div>
            </nav>
          </div>,
          document.body
        )}
    </header>
  );
}
