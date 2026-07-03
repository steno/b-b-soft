import { siteConfig } from "@/lib/content";

/** Prefix public asset paths for GitHub Pages basePath (e.g. /b-b-soft). */
export function assetPath(path: string): string {
  const base =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === "production" ? siteConfig.basePath : "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const url = `${base}${normalized}`;
  const buildId = process.env.NEXT_PUBLIC_BUILD_ID;

  if (!buildId) return url;

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${buildId}`;
}
