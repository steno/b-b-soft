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

/** Absolute URL for Open Graph, Twitter, and other social crawlers. */
export function absoluteAssetUrl(path: string): string {
  const relative = assetPath(path);
  if (relative.startsWith("http://") || relative.startsWith("https://")) {
    return relative;
  }

  return new URL(relative, siteConfig.url).href;
}
