"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GridStreakOverlay } from "@/components/effects/GridStreakOverlay";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import type { ProductPageContent } from "@/lib/types/content";

const MotionLink = motion(Link);

const HERO_NAVY = "#2750F5";
const HERO_BG = "#2D5BFF";

const CAPABILITY_CARDS = [
  {
    icon: "/unifi/icons/building-08.svg",
    title: "Mission-Critical Operations",
    description: "Agents and operations staff can see integration activity, replay messages, and resolve issues without needing specialist help.",
    tagline: "Empowering the whole team, not just developers.",
  },
  {
    icon: "/unifi/icons/refresh-ccw-04.svg",
    title: "Reliable Messaging",
    description: "Robust asynchronous integration with real-time monitoring and delivery assurance, so your most important messages always arrive.",
    tagline: "Guaranteed delivery for business-critical flows.",
  },
  {
    icon: "/unifi/icons/arrow-up-right.svg",
    title: "Automated Testing",
    description: "Quickly create and run automated regression tests to ensure your integrations remain reliable after every update.",
    tagline: "Never fear an upgrade again.",
  },
  {
    icon: "/unifi/icons/code-02.svg",
    title: "Delightful Development",
    description: "Build integrations faster with Unifi Integration Designer. Even complex requirements like asynchronous messaging become simple.",
    tagline: "Low-code to pro-code flexibility.",
  },
];


type Props = {
  product: ProductPageContent;
};

export function UnifiProductTemplate({ product }: Props) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        {/* Dot-grid background */}
        <div className="pointer-events-none absolute inset-y-0 right-[400px] flex items-center" aria-hidden>
          <Image
            src="/unifi/dot-grid.svg"
            alt=""
            width={688}
            height={515}
            className="h-auto w-[688px] max-w-none opacity-60"
          />
        </div>
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">

            {/* Left: copy */}
            <div className="flex flex-col">
              <FadeUp className="mb-6 inline-flex">
                <Image
                  src="/unifi/logo-unifi.svg"
                  alt="Unifi"
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                  priority
                />
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  Take the risk out of eBonding with Unifi
                </h1>
              </FadeUp>

              <FadeUp delay={0.14}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-500 sm:text-lg">
                  Unifi delivers the control, visibility, and stability needed for
                  robust enterprise integrations in ServiceNow.
                </p>
              </FadeUp>

              <FadeUp delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MotionLink
                  href="/contact"
                  whileHover={BUTTON_MOTION.whileHover}
                  whileTap={BUTTON_MOTION.whileTap}
                  transition={BUTTON_MOTION.transition}
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:opacity-90"
                  style={{ backgroundColor: HERO_NAVY }}
                >
                  Talk to a Specialist
                </MotionLink>
                <MotionLink
                  href="#how-it-works"
                  whileHover={BUTTON_MOTION.whileHover}
                  whileTap={BUTTON_MOTION.whileTap}
                  transition={BUTTON_MOTION.transition}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-transparent px-8 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                  style={{ color: HERO_NAVY }}
                >
                  Architecture Overview
                </MotionLink>
              </FadeUp>

              {/* Jump to nav */}
              <FadeUp delay={0.26}>
                <div className="mt-10 flex items-center gap-3 border-t border-slate-100 pt-8">
                  <span className="text-sm text-slate-500">Jump to:</span>
                  {[
                    { label: "Features", href: "#features", icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={1.8}>
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="currentColor" stroke="none"/>
                      </svg>
                    )},
                    { label: "FAQs", href: "#faqs", icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeLinecap="round"/>
                        <circle cx="12" cy="17" r="0.5" fill="currentColor"/>
                      </svg>
                    )},
                  ].map(({ label, href, icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-800 transition-opacity hover:opacity-70"
                    >
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: HERO_NAVY }}
                      >
                        {icon}
                      </span>
                      {label}
                    </Link>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right: hero illustration */}
            <FadeUp delay={0.1} className="hidden lg:flex lg:items-center lg:justify-center">
              <div className="relative h-[624px] w-full max-w-[728px]" aria-hidden>
                <Image
                  src="/unifi/background-ui.svg"
                  alt=""
                  fill
                  className="object-contain object-center"
                />

                {/* card-CMDB — top left */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                  className="absolute left-0 top-[10%] w-[46%]"
                >
                  <Image
                    src="/unifi/card-CMDB.svg"
                    alt="CMDB integration card"
                    width={280}
                    height={160}
                    className="h-auto w-full drop-shadow-xl"
                  />
                </motion.div>

                {/* card-Problem — bottom right */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-[8%] right-0 w-[48%]"
                >
                  <Image
                    src="/unifi/card-Problem.svg"
                    alt="Problem management card"
                    width={280}
                    height={160}
                    className="h-auto w-full drop-shadow-xl"
                  />
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ── Trusted by ── */}
      <section className="border-b border-slate-100 bg-white" aria-labelledby="unifi-trusted-heading">
        <Container className="py-10 sm:py-12">
          <div className="flex items-center gap-8">
            <div className="shrink-0 flex items-center gap-8">
              <p id="unifi-trusted-heading" className="shrink-0 text-sm font-semibold text-slate-900 leading-snug">
                Trusted by over 70<br className="hidden sm:block" /> companies
              </p>
              <div className="hidden sm:block w-px self-stretch bg-slate-200" />
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

              <div className="flex w-max" style={{ animation: "marquee 30s linear infinite", willChange: "transform" }}>
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex shrink-0 items-center gap-14 px-7">
                    {[
                      { src: "/logos/BT.png", alt: "BT" },
                      { src: "/logos/CDW.png", alt: "CDW" },
                      { src: "/logos/MOJ.png", alt: "MOJ" },
                      { src: "/logos/NTT.png", alt: "NTT" },
                      { src: "/logos/SKF.png", alt: "SKF" },
                      { src: "/logos/advania.png", alt: "Advania" },
                      { src: "/logos/husqvarna.png", alt: "Husqvarna" },
                    ].map(({ src, alt }) => (
                      <Image
                        key={`${copy}-${src}`}
                        src={src}
                        alt={alt}
                        width={120}
                        height={40}
                        className="h-8 w-auto max-w-[110px] shrink-0 object-contain grayscale opacity-50"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Why most integrations become a risk ── */}
      <section className="border-b border-slate-200 bg-[#F0F2F8]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
            <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
            Manage all your integrations in a single place.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Unifi makes it easy to handle your most difficult, business-critical integrations with confidence and control.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} className="mx-auto mt-12 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200/60 shadow-xl">
              <Image
                src="/unifi/message-fields.svg"
                alt="Unifi message fields configuration"
                width={1200}
                height={700}
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Capabilities (6-card features) ── */}
      <section id="features" className="border-b border-slate-100 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center mb-12">
            <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
              Connect ServiceNow to Anything
            </h2>
          </ScrollReveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_CARDS.map(({ icon, title, description, tagline }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.08} className="flex flex-col">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: HERO_NAVY }}
                  aria-hidden
                >
                  <Image src={icon} alt="" width={20} height={20} className="h-5 w-5 brightness-0 invert" />
                </span>
                <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                <p className="mt-3 text-sm font-semibold text-[#2750F5]">{tagline}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonial carousel ── */}
      {(() => {
        const QUOTES = [
          {
            quote: "It used to take us three to four months to deliver integrations with our customers' ticketing systems. With Unifi, we can complete them in days or even hours...",
            name: "Gary",
            role: "British Telecommunications PLC",
          },
          {
            quote: "As one of our customers told us, 'This is a system built on experience, by people who really know integrations.'",
            name: "Daniel Billing",
            role: "Founder and Solutions Architect, ProCori",
          },
          {
            quote: "ShareLogic's continuous refinement of the backend of the platform frees us to focus on our core business requirements rather than worry about the technology.",
            name: "Fernando Caamaño, Vice President",
            role: "Systems Design, NTT Managed Cloud & Infrastructure Services",
          },
        ];
        const [active, setActive] = useState(0);
        return (
          <section style={{ backgroundColor: HERO_NAVY }}>
            <Container className="py-20 sm:py-24 lg:py-28">
              <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <Image src="/quote.svg" alt="" width={48} height={48} className="mb-8 h-12 w-auto" aria-hidden />

                <div className="relative min-h-[200px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.figure
                      key={active}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="flex flex-col items-center text-center"
                    >
                      <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl lg:text-2xl">
                        &ldquo;{QUOTES[active].quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-8">
                        <p className="text-xl font-bold text-white">{QUOTES[active].name}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/60">
                          {QUOTES[active].role}
                        </p>
                      </figcaption>
                    </motion.figure>
                  </AnimatePresence>
                </div>

                {/* Dot indicators */}
                <div className="mt-10 flex items-center gap-2">
                  {QUOTES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Quote ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/60"}`}
                    />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        );
      })()}

      {/* ── Designed for eBonding ── */}
      <section className="border-b border-slate-100 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="right" className="flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3">Designed for eBonding</p>
              <h2 className={cn(sectionHeadingH2, "text-slate-900 mt-0")}>
                Unifi makes it easy to handle your most difficult, business-critical integrations
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                While Unifi can handle many integration types, eBonding is where it truly excels.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                eBonding is one of the toughest integration challenges. It requires bi-directional sync,
                complex state management, strict SLA alignment, and long-term reliability.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Most platforms struggle here. This is what Unifi was designed for.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative mx-auto w-full max-w-3xl">
                <Image
                  src="/unifi/pattern-section/cubes.svg"
                  alt=""
                  width={163}
                  height={203}
                  className="pointer-events-none absolute -left-8 -top-10 z-[1] h-auto w-[clamp(110px,20vw,165px)]"
                />
                <Image
                  src="/unifi/pattern-section/cube.svg"
                  alt=""
                  width={204}
                  height={262}
                  className="pointer-events-none absolute -right-8 -bottom-8 z-[1] h-auto w-[clamp(130px,24vw,200px)]"
                />
                <Image
                  src="/unifi/pattern-section/UI.svg"
                  alt="eBonding architecture diagram"
                  width={566}
                  height={349}
                  className="relative z-[2] h-auto w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── How it Works + Governance — blue feature list container ── */}
      {(() => {
        const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        function AccordionRow({ label, body }: { label: string; body: string }) {
          const [open, setOpen] = useState(false);
          return (
            <div className="border-t border-white/20 last:border-b last:border-white/20">
              <button
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open}
              >
                <span className="text-base font-medium text-white">{label}</span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/40 text-white"
                  aria-hidden
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth={2}>
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-white/75">{body}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <section id="how-it-works" className="border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
            <div className="px-4 sm:px-6">
              <div
                className="overflow-hidden px-8 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20"
                style={{
                  backgroundColor: HERO_NAVY,
                  borderRadius: "4rem 0 4rem 0",
                }}
              >
                <div className="mx-auto max-w-[1350px]">
                {/* Block 1: image left, feature list right */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <ScrollReveal direction="right">
                    <div className="overflow-hidden rounded-2xl bg-[#0d1524] shadow-lg">
                      <Image
                        src="/unifi/documentation.png"
                        alt="Unifi Integration Designer"
                        width={1200}
                        height={700}
                        className="h-auto w-full object-cover object-top"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={0.1}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Delightful Development</p>
                    <h2 className={cn(sectionHeadingH2, "text-white")}>
                      Build better integrations with Integration Designer
                    </h2>
                    <div className="mt-8">
                      <AccordionRow label="Integrations" body={LOREM} />
                      <AccordionRow label="Messages and Fields" body={LOREM} />
                      <AccordionRow label="Pollers" body={LOREM} />
                      <AccordionRow label="Datasets" body={LOREM} />
                      <AccordionRow label="Multi-system integration" body={LOREM} />
                      <AccordionRow label="Pro-code Power at Enterprise Scale" body={LOREM} />
                    </div>
                  </ScrollReveal>
                </div>

                <div className="my-32 lg:my-48" />

                {/* Block 2: feature list left, image right */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <ScrollReveal direction="right">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Mission-critical Operations</p>
                    <h2 className={cn(sectionHeadingH2, "text-white")}>
                      Guaranteed delivery for business critical flows.
                    </h2>
                    <div className="mt-8">
                      <AccordionRow label="Real-time monitoring" body={LOREM} />
                      <AccordionRow label="Operational visibility" body={LOREM} />
                      <AccordionRow label="Disaster recovery" body={LOREM} />
                      <AccordionRow label="Governance embedded by design" body={LOREM} />
                      <AccordionRow label="Native ServiceNow Security" body={LOREM} />
                      <AccordionRow label="Long-Term Stability" body={LOREM} />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={0.1}>
                    <div className="overflow-hidden rounded-2xl bg-[#0d1524] shadow-lg">
                      <Image
                        src="/unifi/dash-templates.png"
                        alt="Unifi dashboard templates"
                        width={1234}
                        height={700}
                        className="h-auto w-full object-cover object-top"
                      />
                    </div>
                  </ScrollReveal>
                </div>

                <div className="my-32 lg:my-48" />

                {/* Block 3: image left, feature list right */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <ScrollReveal direction="right">
                    <div className="overflow-hidden rounded-2xl bg-[#0d1524] shadow-lg">
                      <Image
                        src="/unifi/message-fields.png"
                        alt="Unifi automated testing"
                        width={1200}
                        height={700}
                        className="h-auto w-full object-cover object-top"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={0.1}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Automated Testing</p>
                    <h2 className={cn(sectionHeadingH2, "text-white")}>
                      Never fear an upgrade again.
                    </h2>
                    <div className="mt-8">
                      <AccordionRow label="Upgrade & Change Confidence" body={LOREM} />
                      <AccordionRow label="Create tests from real data with one click" body={LOREM} />
                      <AccordionRow label="Dedicated Test Assistant portal" body={LOREM} />
                      <AccordionRow label="Full internal end-to-end testing" body={LOREM} />
                    </div>
                  </ScrollReveal>
                </div>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── More you can do with Unifi ── */}
      <section className="border-b border-slate-100 bg-[#F0F2F8]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center mb-14">
            <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
              More you can do with Unifi
            </h2>
          </ScrollReveal>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { icon: "/unifi/icons/arrow-up-right.svg", title: "Response Actions" },
              { icon: "/unifi/icons/refresh-ccw-04.svg", title: "Asynchronous Messaging" },
              { icon: "/unifi/icons/code-02.svg", title: "Automated Documentation" },
              { icon: "/unifi/icons/building-08.svg", title: "Templates" },
              { icon: "/unifi/icons/refresh-ccw-04.svg", title: "Automatic Retries & Replays" },
              { icon: "/unifi/icons/arrow-up-right.svg", title: "Multi-vendor / SIAM" },
              { icon: "/unifi/icons/building-08.svg", title: "Queue Management" },
            ].map(({ icon, title }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.05}>
                <div className="flex flex-col">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#2750F5]">
                    <Image src={icon} alt="" width={20} height={20} className="h-5 w-5 brightness-0 invert" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      {(() => {
        const FAQS = [
          {
            q: "What is Unifi?",
            a: "Unifi is a native ServiceNow application that provides a governed control layer for enterprise integrations. It standardizes how integrations are built, monitored, and maintained — with full visibility into every message and transformation.",
          },
          {
            q: "What is eBonding and why does Unifi excel at it?",
            a: "eBonding is the bi-directional synchronisation of records between ServiceNow and external systems (like other ITSM platforms). It requires complex state management, strict SLA alignment, and long-term reliability — exactly what Unifi was purpose-built for.",
          },
          {
            q: "Does Unifi require external infrastructure?",
            a: "No. Unifi runs entirely natively within ServiceNow, which means it inherits the platform's security model, audit controls, and access governance automatically. No middleware, no third-party infrastructure.",
          },
          {
            q: "How does Unifi handle upgrades and changes?",
            a: "Unifi includes built-in automated regression testing so you can validate that integrations remain reliable after every ServiceNow upgrade or process change. It's designed to remove the fear from upgrades.",
          },
          {
            q: "Who can use Unifi — do you need developer skills?",
            a: "Unifi is designed for both pro-code developers and operational teams. Non-developers can see integration activity, replay messages, and resolve issues without specialist help. Developers get full flexibility for complex logic.",
          },
          {
            q: "How do I get started with Unifi?",
            a: "Talk to one of our specialists — we'll walk you through a demo tailored to your integration challenges and help you understand how Unifi would fit into your ServiceNow environment.",
          },
        ];

        function FaqRow({ q, a }: { q: string; a: string }) {
          const [open, setOpen] = useState(false);
          return (
            <div
              className="cursor-pointer overflow-hidden rounded-2xl border border-white/30 px-6 py-5 transition-colors hover:border-white/50"
              onClick={() => setOpen((o) => !o)}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-medium text-white">{q}</span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center text-white"
                  aria-hidden
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </motion.span>
              </div>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm leading-relaxed text-white/70">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <section id="faqs" style={{ backgroundColor: HERO_NAVY }} className="relative overflow-hidden">
            <GridStreakOverlay />
            <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
              <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
                <FadeUp className="flex items-start lg:items-center">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Still have questions?
                  </h2>
                </FadeUp>
                <FadeUp delay={0.08} className="flex flex-col gap-4">
                  {FAQS.map(({ q, a }) => (
                    <FaqRow key={q} q={q} a={a} />
                  ))}
                </FadeUp>
              </div>
            </Container>
          </section>
        );
      })()}

      <section className="relative overflow-hidden text-slate-900 py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#2750F5]" aria-hidden />

        {/* Left decoration — z-0 so it sits behind the form */}
        <div className="pointer-events-none absolute left-[10%] top-1/2 z-0 hidden -translate-y-1/2 md:block xl:left-[14%]" aria-hidden>
          <div className="relative h-64 w-64">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#cfd6ec]" />
            <div className="absolute inset-10 rounded-full border border-dashed border-[#cfd6ec]" />
            <div className="absolute bottom-4 left-16 h-12 w-12 rotate-45 rounded-lg bg-[#c8c4f7]" />
            <div className="absolute bottom-20 left-20 h-5 w-5 rotate-45 rounded bg-[#c8c4f7]" />
          </div>
        </div>
        {/* Right decoration — z-0 so it sits behind the form */}
        <div className="pointer-events-none absolute right-[10%] top-1/2 z-0 hidden -translate-y-1/2 md:block xl:right-[14%]" aria-hidden>
          <div className="relative h-64 w-64">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#cfd6ec]" />
            <div className="absolute inset-10 rounded-full border border-dashed border-[#cfd6ec]" />
            <div className="absolute right-12 top-2 h-12 w-12 rotate-45 rounded-lg bg-[#c8c4f7]" />
            <div className="absolute right-4 top-16 h-5 w-5 rotate-45 rounded bg-[#c8c4f7]" />
          </div>
        </div>

        <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <h2 className={cn(sectionHeadingH2, "text-balance")}>
                Let&apos;s Talk About Your Integrations
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl">
                If integration stability, governance and long-term scalability matter in your environment, Unifi is designed for that reality.
              </p>
            </FadeUp>
            <FadeUp delay={0.12} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-95 sm:w-auto"
                style={{ backgroundColor: HERO_NAVY }}
              >
                Speak to an Integration Specialist
              </MotionLink>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
