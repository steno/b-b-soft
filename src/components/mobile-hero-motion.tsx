type MobileHeroMotionProps = {
  className?: string;
};

export function MobileHeroMotion({ className = "" }: MobileHeroMotionProps) {
  return (
    <div
      className={`mobile-hero-visible-motion pointer-events-none absolute inset-0 md:hidden ${className}`}
      aria-hidden="true"
    >
      <span className="mobile-hero-blob mobile-hero-blob-a" />
      <span className="mobile-hero-blob mobile-hero-blob-b" />
      <span className="mobile-hero-blob mobile-hero-blob-c" />
    </div>
  );
}
