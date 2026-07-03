import { FeatureIcon, type FeatureIconName } from "@/components/icons";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: FeatureIconName;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <FeatureIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-muted leading-relaxed">{description}</p>
    </div>
  );
}
