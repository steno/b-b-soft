"use client";

import { useEffect, useRef } from "react";

type VantaNetBackgroundProps = {
  variant?: "hero" | "footer";
  fallbackClassName?: string;
};

const NAVY = 0x0c1929;
const TEAL = 0x14b8a6;

const variantConfig = {
  hero: {
    points: 14,
    maxDistance: 24,
    spacing: 17,
    showDots: true,
    mouseControls: true,
    touchControls: true,
  },
  footer: {
    points: 10,
    maxDistance: 18,
    spacing: 20,
    showDots: true,
    mouseControls: false,
    touchControls: false,
  },
} as const;

function shouldUseFallback() {
  if (typeof window === "undefined") return true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  // Skip only on touch-primary devices (phones), not narrow desktop windows.
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
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldUseFallback()) return;

    let active = true;
    const config = variantConfig[variant];

    async function initVanta() {
      try {
        const THREE = await import("three");
        const NET = (await import("vanta/dist/vanta.net.min")).default;

        if (!active || !containerRef.current) return;

        effectRef.current?.destroy();
        effectRef.current = NET({
          el: containerRef.current,
          THREE,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: TEAL,
          backgroundColor: NAVY,
          ...config,
        });
      } catch (error) {
        console.error("Vanta NET failed to initialize:", error);
      }
    }

    const frame = requestAnimationFrame(() => {
      initVanta();
    });

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, [variant]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div className={`absolute inset-0 ${fallbackClassName}`} />
      <div ref={containerRef} className="absolute inset-0 z-[1]" />
    </div>
  );
}
