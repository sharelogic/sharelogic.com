import type { ReactNode } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/layout/Container";
import { GridStreakOverlay } from "@/components/effects/GridStreakOverlay";
import { cn } from "@/lib/utils/cn";

type Props = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  /** When set, hero is a single section with flex row: copy left (~50%), visual right (~50%) on large screens. */
  visual?: ReactNode;
  /** Dot grid overlay on the blue background (default true). Home uses false for a cleaner hero. */
  showBackgroundDots?: boolean;
};

export function Hero({ title, subtitle, children, className, visual, showBackgroundDots = true }: Props) {
  const copy = (
    <>
      <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      {subtitle ? <p className="mt-4 text-xl text-pretty text-base leading-relaxed text-white">{subtitle}</p> : null}
      {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
    </>
  );

  return (
    <section
      className={cn(
        "relative flex min-h-[600px] flex-col justify-center overflow-hidden border-b border-white/10 bg-[#2750F5]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden>
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/gradient.svg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <GridStreakOverlay />
        {showBackgroundDots ? (
          <>
            <div className="absolute inset-y-0 left-0 z-[1] w-1/2">
              <div className="relative h-full w-full">
                <Image
                  src="/home/dots.svg"
                  alt=""
                  fill
                  className="object-cover object-left object-top max-w-100"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 z-[1] w-1/2">
              <div className="relative h-full w-full">
                <Image
                  src="/home/dots.svg"
                  alt=""
                  fill
                  className="object-cover object-right object-top max-w-100"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </>
        ) : null}
      </div>
      <Container className="relative z-10 w-full py-16 sm:py-20 lg:py-24 xl:py-28">
        {visual ? (
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10 xl:gap-12">
            <FadeUp className="w-full min-w-0 lg:w-[45%]">{copy}</FadeUp>
            <div className="w-full min-w-0 lg:w-[55%]">{visual}</div>
          </div>
        ) : (
          <FadeUp className="max-w-3xl">{copy}</FadeUp>
        )}
      </Container>
    </section>
  );
}
