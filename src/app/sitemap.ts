import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/software", "/ai-mod", "/guarantee", "/ethics", "/contact"];
  const spanishRoutes = routes.map((route) => `/es${route}`);

  return [...routes, ...spanishRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/es" ? "weekly" : "monthly",
    priority: route === "" || route === "/es" ? 1 : 0.8,
  }));
}
