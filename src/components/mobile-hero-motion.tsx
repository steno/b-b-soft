type MobileHeroMotionProps = {
  className?: string;
  /** Show on tablet widths too (e.g. mobile nav overlay). Default: phone only. */
  alwaysShow?: boolean;
};

export function MobileHeroMotion({
  className = "",
  alwaysShow = false,
}: MobileHeroMotionProps) {
  return (
    <div
      className={`mobile-hero-visible-motion pointer-events-none absolute inset-0 ${alwaysShow ? "" : "md:hidden"} ${className}`}
      aria-hidden="true"
    >
      <span className="mobile-hero-blob mobile-hero-blob-a" />
      <span className="mobile-hero-blob mobile-hero-blob-b" />
      <span className="mobile-hero-blob mobile-hero-blob-c" />
    </div>
  );
}
