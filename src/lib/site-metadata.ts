import type { Metadata } from "next";
import { absoluteAssetUrl, assetPath } from "@/lib/asset-path";
import { siteConfig } from "@/lib/content";

const ICON_PATH = "/icon.png";
const ICON_SIZE = 354;

const socialImage = {
  url: absoluteAssetUrl(ICON_PATH),
  width: ICON_SIZE,
  height: ICON_SIZE,
  alt: `${siteConfig.name} logo`,
  type: "image/png",
};

export const siteIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: assetPath("/favicon.ico"), sizes: "any" },
    { url: assetPath(ICON_PATH), type: "image/png", sizes: `${ICON_SIZE}x${ICON_SIZE}` },
  ],
  apple: [{ url: assetPath(ICON_PATH), type: "image/png", sizes: `${ICON_SIZE}x${ICON_SIZE}` }],
  shortcut: assetPath(ICON_PATH),
};

export function buildOpenGraph(
  title: string = siteConfig.name,
  description: string = siteConfig.description,
): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [socialImage],
  };
}

export function buildTwitter(
  title: string = siteConfig.name,
  description: string = siteConfig.description,
): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary",
    title,
    description,
    images: [socialImage.url],
  };
}
