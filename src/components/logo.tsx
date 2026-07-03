import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-9 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/bbsoftlogo1.png"
      alt="BB Soft"
      width={220}
      height={48}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
