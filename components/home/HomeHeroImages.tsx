import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";

/**
 * Right-column hero artwork for the home page (no outer section — use inside `Hero` with `visual` prop).
 */
export function HomeHeroArtboard() {
  return (
    <FadeUp delay={0.1} className="relative mx-auto w-full min-w-0 min-w-[850px] -translate-x-[85px]" aria-hidden>
      <Image
        src="/home/hero/home-hero-product.svg"
        alt=""
        width={800}
        height={600}
        className="h-auto w-full object-contain"
        priority
        unoptimized
      />
    </FadeUp>
  );
}
