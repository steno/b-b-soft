import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-12 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src={assetPath("/bblogo.png")}
      alt="BB Soft"
      width={320}
      height={72}
      priority={priority}
      className={`object-contain object-left ${className}`}
    />
  );
}
