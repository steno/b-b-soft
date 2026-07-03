import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const useCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "b-b-soft";
const basePath =
  isGithubPages && !useCustomDomain ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_BUILD_ID: process.env.NEXT_PUBLIC_BUILD_ID ?? "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
