export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

const spanishPrefix = "/es";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const navLabels: Record<Locale, Record<string, string>> = {
  en: {
    "/software": "Software",
    "/ai-mod": "AI Module",
    "/guarantee": "Guarantee",
    "/ethics": "Ethics",
    "/contact": "Contact",
  },
  es: {
    "/software": "Software",
    "/ai-mod": "Módulo IA",
    "/guarantee": "Garantía",
    "/ethics": "Ética",
    "/contact": "Contacto",
  },
};

export const uiText = {
  en: {
    requestDemo: "Request Demo",
    navigation: "Navigation",
    contact: "Contact",
    rights: "All rights reserved.",
    ethicsPolicy: "Anti-Corruption & Business Ethics Policy",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileNavigation: "Mobile navigation",
    switchLanguage: "Español",
  },
  es: {
    requestDemo: "Solicitar demo",
    navigation: "Navegación",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    ethicsPolicy: "Política anticorrupción y ética empresarial",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mobileNavigation: "Navegación móvil",
    switchLanguage: "English",
  },
} as const;

export function getLocaleFromPathname(pathname: string | null): Locale {
  if (pathname === spanishPrefix || pathname?.startsWith(`${spanishPrefix}/`)) {
    return "es";
  }

  return defaultLocale;
}

export function stripLocale(pathname: string | null): string {
  if (!pathname || pathname === spanishPrefix) return "/";
  if (pathname.startsWith(`${spanishPrefix}/`)) {
    return pathname.slice(spanishPrefix.length) || "/";
  }

  return pathname;
}

export function localizedHref(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  if (locale === defaultLocale) return href;
  return href === "/" ? spanishPrefix : `${spanishPrefix}${href}`;
}

export function languageSwitchHref(pathname: string | null): string {
  const locale = getLocaleFromPathname(pathname);
  const basePath = stripLocale(pathname);
  return localizedHref(basePath, locale === "en" ? "es" : "en");
}

export function navLinksForLocale(locale: Locale) {
  return Object.entries(navLabels[locale]).map(([href, label]) => ({
    href: localizedHref(href, locale),
    baseHref: href,
    label,
  }));
}
