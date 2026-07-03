import { Button } from "@/components/ui/button";

type CTABannerProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTABanner({
  title,
  description,
  primaryLabel = "Request a Demo",
  primaryHref = "/contact",
  secondaryLabel = "Explore Software",
  secondaryHref = "/software",
}: CTABannerProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl gradient-mesh px-8 py-16 text-center sm:px-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="relative">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
