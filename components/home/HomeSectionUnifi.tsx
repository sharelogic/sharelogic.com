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
    id: "unifi-governance",
    title: "Embedded Governance",
    body:
      `Stop guessing what’s happening with your integrations.
      Unifi gives you total visibility into every single one — in real time —
      while automatically enforcing standards and governance. No more surprises.
      No more silent failures. Just complete control.`,
    imageSrc: "/home/unifi-img-1.png",
  },
  {
    id: "unifi-scale",
    title: "Enterprise-Scale Integration",
    body:
      `Scale from 10 to 500+ integrations without the usual chaos.
      Unifi’s architecture is designed for maintainability from day one. You’ll
      slash technical debt, reduce maintenance costs, and actually keep your
      integration estate healthy as you grow.`,
    imageSrc: "/home/unifi-img-2.png",
  },
  {
    id: "unifi-native",
    title: "100% ServiceNow Native",
    body:
      `No middleware. No third-party tools. No extra vendors.
      Unifi lives entirely inside ServiceNow. Your data stays secure, audits
      become simple, and you stay in full control — without adding complexity or risk.`,
    imageSrc: "/home/unifi-img-3.png",
  },
];

const MotionLink = motion.create(Link);

/** Hover/tap without boxShadow so selected border + shadow from className are not overridden. */
const SLIDE_CARD_MOTION = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.985 },
  transition: BUTTON_MOTION.transition,
} as const;

export function HomeSectionUnifi() {
  const [active, setActive] = useState(0);

  return (
    <section id="section-4" className="border-t border-slate-200 bg-white" aria-labelledby="section-4-heading">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <p className="inline-flex rounded-lg bg-[#2750F5] px-3 py-1.5 text-sm font-bold tracking-tight text-white">
              Unifi
            </p>
            <h2
              id="section-4-heading"
              className={cn(sectionHeadingH2, "mt-4 text-slate-900")}
            >
              The eBonding Integration Platform for ServiceNow
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
              Unifi is built for enterprise customers who get it.
              You already understand how critical — and how difficult — it is to
              create a truly scalable integration strategy in ServiceNow.
              Unifi was designed specifically for you.
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
              href="/products/unifi"
              whileHover={BUTTON_MOTION.whileHover}
              whileTap={BUTTON_MOTION.whileTap}
              transition={BUTTON_MOTION.transition}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[#2750F5] bg-white px-5 py-2.5 text-sm font-semibold text-[#2750F5] shadow-sm transition-colors hover:bg-[#2750F5]/5"
            >
              Learn more
            </MotionLink>
          </div>

          <div className="relative flex min-h-[280px] items-start justify-center rounded-[2rem] px-6 pt-12 pb-8 sm:min-h-[360px] sm:pt-14 sm:pb-10 lg:px-8 lg:pt-[260px] lg:pb-10">
            <div className="relative aspect-[939/952] w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SLIDES[active].imageSrc}
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
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
