"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Slide = {
  id: string;
  title: string;
  body: string;
  imageSrc: string;
};

const SLIDES: Slide[] = [
  {
    id: "easyapi-secure",
    title: "Secure by Default",
    body: "Stop risky, ungoverned access to your ServiceNow data. EasyAPI gives you complete control over who can access what — with granular permissions and full auditability from day one.",
    imageSrc: "/home/easy-api-image-1.png",
  },
  {
    id: "easyapi-governed",
    title: "Governed Integrations",
    body: "Turn chaotic point-to-point integrations into clean, governed ones. EasyAPI enforces standards, maintains visibility, and prevents shadow IT from creating backdoors into your platform.",
    imageSrc: "/home/easy-api-img-2.png",
  },
  {
    id: "easyapi-simple",
    title: "Simple and Powerful",
    body: "Easy for developers. Secure for the business. EasyAPI replaces risky Table API usage with a modern, well-governed alternative that’s faster to implement and much safer to operate at scale.",
    imageSrc: "/home/easy-api-img-3.png",
  },
];

const MotionLink = motion.create(Link);

/** Hover/tap without boxShadow so selected border + shadow from className are not overridden. */
const SLIDE_CARD_MOTION = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.985 },
  transition: BUTTON_MOTION.transition,
} as const;

export function HomeSectionEasyAPI() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="section-5"
      className="bg-slate-50"
      aria-labelledby="section-5-heading"
    >
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-20">
          <div className="relative flex min-h-[280px] items-start justify-center pt-12 pb-8 sm:min-h-[360px] sm:pt-14 sm:pb-10 lg:pt-[260px] lg:pb-10">
            <div className="relative aspect-[850/869] w-full max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SLIDES[active].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDES[active].imageSrc}
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="min-w-0">
            <p className="inline-flex rounded-lg bg-[#2750F5] px-3 py-1.5 text-sm font-bold tracking-tight text-white">
              EasyAPI
            </p>
            <h2
              id="section-5-heading"
              className={cn(sectionHeadingH2, "mt-4 text-slate-900")}
            >
              The Secure Replacement for ServiceNow Table APIs
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
              ServiceNow Table APIs are on by default — wide open and ungoverned.
              That means anyone can connect, often without oversight, creating
              security risks and compliance headaches.
              EasyAPI puts you back in control.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {SLIDES.map((slide, index) => {
                const isActive = active === index;
                return (
                  <motion.button
                    key={slide.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-label={slide.title}
                    onClick={() => setActive(index)}
                    whileHover={SLIDE_CARD_MOTION.whileHover}
                    whileTap={SLIDE_CARD_MOTION.whileTap}
                    transition={SLIDE_CARD_MOTION.transition}
                    className={cn(
                      "w-full rounded-xl border bg-white p-4 text-left ring-0 transition-[box-shadow,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2750F5]/30",
                      isActive
                        ? "z-[1] border-[#2750F5] shadow-[0_0_0_1px_#2750F5,0_12px_32px_-8px_rgba(39,80,245,0.28)]"
                        : "z-0 border-slate-200 shadow-sm hover:border-slate-300",
                    )}
                  >
                    <p className="text-sm font-semibold text-slate-900">{slide.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{slide.body}</p>
                  </motion.button>
                );
              })}
            </div>

            <MotionLink
              href="/products/easy-api"
              whileHover={BUTTON_MOTION.whileHover}
              whileTap={BUTTON_MOTION.whileTap}
              transition={BUTTON_MOTION.transition}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[#2750F5] bg-white px-5 py-2.5 text-sm font-semibold text-[#2750F5] shadow-sm transition-colors hover:bg-[#2750F5]/5"
            >
              Learn more
            </MotionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
