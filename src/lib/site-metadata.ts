import type { Metadata } from "next";
import { absoluteAssetUrl, assetPath } from "@/lib/asset-path";
import { siteConfig } from "@/lib/content";

const FAVICON_PATH = "/star.png";
const FAVICON_SIZE = 190;
const SOCIAL_IMAGE_PATH = "/icon.png";
const SOCIAL_IMAGE_SIZE = 354;

const socialImage = {
  url: absoluteAssetUrl(SOCIAL_IMAGE_PATH),
  width: SOCIAL_IMAGE_SIZE,
  height: SOCIAL_IMAGE_SIZE,
  alt: `${siteConfig.name} logo`,
  type: "image/png",
};

export const siteIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: assetPath(FAVICON_PATH), type: "image/png", sizes: `${FAVICON_SIZE}x${FAVICON_SIZE}` },
  ],
  apple: [
    { url: assetPath(FAVICON_PATH), type: "image/png", sizes: `${FAVICON_SIZE}x${FAVICON_SIZE}` },
  ],
  shortcut: assetPath(FAVICON_PATH),
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
