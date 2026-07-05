"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  getLocaleFromPathname,
  languageSwitchHref,
  localizedHref,
  navLinksForLocale,
  stripLocale,
  uiText,
} from "@/lib/i18n";
import { siteContainerClass } from "@/lib/layout";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const basePathname = stripLocale(pathname);
  const navLinks = navLinksForLocale(locale);
  const text = uiText[locale];
  const switchHref = languageSwitchHref(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lockedScrollY = useRef(0);
  const skipScrollRestore = useRef(false);

  const showSolidHeader = scrolled || mobileOpen;

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
    window.scrollTo(0, 0);
  }, [pathname]);

  function closeMenuForNavigation() {
    skipScrollRestore.current = true;
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;

    lockedScrollY.current = window.scrollY;
    const { style } = document.body;

    style.position = "fixed";
    style.top = `-${lockedScrollY.current}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";

      if (skipScrollRestore.current) {
        skipScrollRestore.current = false;
      } else {
        window.scrollTo(0, lockedScrollY.current);
      }
    };
  }, [mobileOpen]);

  const headerSurface = mobileOpen
    ? "menu-overlay border-b border-white/10 shadow-lg"
    : scrolled
      ? "bg-white shadow-sm border-b border-border lg:bg-white/90 lg:backdrop-blur-lg"
      : "bg-transparent";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[250] ${mobileOpen ? "" : "transition-colors duration-300"} ${headerSurface}`}
      >
        <div className={`${siteContainerClass} flex items-center justify-between py-3 lg:py-4`}>
          <Link href={localizedHref("/", locale)} className="shrink-0">
            <Logo priority className="h-12 w-auto sm:h-14 lg:h-16" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => {
              const active = basePathname === link.baseHref;
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
            <Link
              href={switchHref}
              className={`ml-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                scrolled
                  ? "border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-navy"
                  : "border-white/25 text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {text.switchLanguage}
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button
              href={localizedHref("/contact", locale)}
              variant={scrolled ? "primary" : "secondary"}
              size="sm"
            >
              {text.requestDemo}
            </Button>
          </div>

          <button
            type="button"
            className={`lg:hidden rounded-lg p-2 transition-colors ${
              mobileOpen
                ? "text-white hover:bg-white/10"
                : showSolidHeader
                  ? "text-navy hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? text.closeMenu : text.openMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {mounted &&
        mobileOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={text.mobileNavigation}
            className="menu-overlay lg:hidden fixed inset-0 z-[240]"
          >
            <nav
              className={`${siteContainerClass} flex min-h-dvh flex-col gap-1 overflow-y-auto pb-8 pt-24`}
              aria-label="Mobile"
            >
              {navLinks.map((link) => {
                const active = basePathname === link.baseHref;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenuForNavigation}
                    className={`rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                      active
                        ? "bg-white/15 text-accent-light"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={switchHref}
                onClick={closeMenuForNavigation}
                className="rounded-xl px-4 py-3 text-lg font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {text.switchLanguage}
              </Link>
              <div className="mt-4 border-t border-white/10 pt-4">
                <Button
                  href={localizedHref("/contact", locale)}
                  variant="primary"
                  className="w-full"
                  onClick={closeMenuForNavigation}
                >
                  {text.requestDemo}
                </Button>
              </div>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
