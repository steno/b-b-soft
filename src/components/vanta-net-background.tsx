"use client";

import { useEffect, useRef } from "react";

type VantaNetBackgroundProps = {
  variant?: "hero" | "footer";
  fallbackClassName?: string;
};

declare global {
  interface Window {
    THREE?: object;
    VANTA?: {
      NET: (options: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

const NAVY = 0x0c1929;
const TEAL = 0x14b8a6;
const THREE_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
const VANTA_NET_CDN =
  "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js";

const variantConfig = {
  hero: {
    points: 9,
    maxDistance: 20,
    spacing: 20,
    showDots: true,
    mouseControls: false,
    touchControls: false,
    backgroundAlpha: 0.35,
    opacity: 0.85,
  },
  footer: {
    points: 8,
    maxDistance: 16,
    spacing: 22,
    showDots: false,
    mouseControls: false,
    touchControls: false,
    backgroundAlpha: 0.45,
    opacity: 0.9,
  },
} as const;

function loadScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function shouldUseFallback() {
  if (typeof window === "undefined") return true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    return true;
  }

  try {
    const canvas = document.createElement("canvas");
    return !(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return true;
  }
}

export function VantaNetBackground({
  variant = "hero",
  fallbackClassName = "gradient-mesh",
}: VantaNetBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);
  const isVisibleRef = useRef(false);
  const isInitializingRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const container = containerRef.current;
    if (!root || !container || shouldUseFallback()) return;

    let active = true;
    const { opacity, backgroundAlpha, ...config } = variantConfig[variant];

    function destroyEffect() {
      effectRef.current?.destroy();
      effectRef.current = null;
    }

    async function createEffect() {
      if (
        !active ||
        !isVisibleRef.current ||
        document.hidden ||
        effectRef.current ||
        isInitializingRef.current ||
        !containerRef.current
      ) {
        return;
      }

      isInitializingRef.current = true;

      try {
        await loadScript(THREE_CDN, "bbsoft-three");
        await loadScript(VANTA_NET_CDN, "bbsoft-vanta-net");

        if (
          !active ||
          !isVisibleRef.current ||
          document.hidden ||
          !containerRef.current ||
          !window.THREE ||
          !window.VANTA?.NET
        ) {
          return;
        }

        effectRef.current = window.VANTA.NET({
          el: containerRef.current,
          THREE: window.THREE,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: TEAL,
          backgroundColor: NAVY,
          backgroundAlpha,
          ...config,
        });

        containerRef.current.style.opacity = String(opacity);
      } catch (error) {
        console.error("Vanta NET failed to initialize:", error);
      } finally {
        isInitializingRef.current = false;
      }
    }

    function syncEffect() {
      if (isVisibleRef.current && !document.hidden) {
        void createEffect();
      } else {
        destroyEffect();
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry?.isIntersecting ?? false;
        syncEffect();
      },
      { threshold: 0.05, rootMargin: "50px" },
    );

    const onVisibilityChange = () => {
      syncEffect();
    };

    observer.observe(root);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      active = false;
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      destroyEffect();
    };
  }, [variant]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      <div className={`absolute inset-0 ${fallbackClassName}`} />
      <div ref={containerRef} className="absolute inset-0 z-[1]" />
      {variant === "hero" && (
        <div className="mobile-hero-motion absolute inset-0 z-[2] md:hidden" />
      )}
    </div>
  );
}
