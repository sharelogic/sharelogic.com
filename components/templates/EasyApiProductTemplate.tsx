"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { BoxiconExpand, BoxiconLayer, BoxiconServer, BoxiconShield } from "@/components/icons/IntegrityPlatformColumnIcons";
import { Container } from "@/components/layout/Container";
import { GridStreakOverlay } from "@/components/effects/GridStreakOverlay";
import { FadeUp } from "@/components/motion/FadeUp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import type { ProductPageContent } from "@/lib/types/content";

const HERO_NAVY = "#2750F5";
const HERO_ACCENT = "#2b59ff";
const FINAL_CTA_BG = "#2750F5";
const FINAL_CTA_BLUE = "#2e5bff";

type IntegrityIconProps = SVGProps<SVGSVGElement> & { size?: number };

const INTEGRITY_PLATFORM_COLUMNS: {
  text: string;
  Icon: ComponentType<IntegrityIconProps>;
}[] = [
  {
    Icon: BoxiconServer,
    text: "ServiceNow often becomes the operational backbone of the organisation. As more teams adopt the platform, the number of systems interacting with it grows.",
  },
  {
    Icon: BoxiconLayer,
    text: "Without clear governance, integrations can emerge organically as teams build tools, reports or small applications around the platform. Over time, ServiceNow can unintentionally become the integration layer for systems that were never formally designed to rely on it.",
  },
  {
    Icon: BoxiconShield,
    text: "Easy API helps platform owners maintain architectural control. By ensuring integrations are introduced through managed APIs, organisations can support innovation while protecting the integrity of the platform.",
  },
];

type Props = {
  product: ProductPageContent;
};

function DashboardChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-xl">
      <Image
        src="/easyapi/dashboard-img.svg"
        alt="Easy API dashboard showing request volume, errors, and performance metrics"
        width={1200}
        height={900}
        className="h-auto w-full object-cover object-top"
        unoptimized
      />
      <svg
        viewBox="0 0 1440 1024"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <polyline
          points="114.291,420.043 170.286,437.045 225.087,305.599 282.887,420.557 338.472,450.12 393.775,437.025 451.284,454.044 506.508,422.136 562.968,419.996 619.63,465.216 674.808,454.022 730.892,448.001 787.106,454.01 842.053,229.727 899.969,437.732 954.087,305.599 1011.63,350.216 1067.92,488.594 1123.34,437.252 1180.07,441.007 1235.08,305.599 1292.93,456.604 1348.13,463.013 1403.12,363.523"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeDasharray="6000"
          strokeDashoffset={inView ? 0 : 6000}
          style={{ transition: inView ? "stroke-dashoffset 3.5s ease-in-out 0.3s" : "none" }}
        />
      </svg>
    </div>
  );
}

export function EasyApiProductTemplate(_props: Props) {
  const MotionLink = motion.create(Link);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">

            {/* Left: copy */}
            <div className="flex flex-col">
              <FadeUp className="mb-6 inline-flex">
                <Image
                  src="/easyapi/logo-easyapi.svg"
                  alt="Easy API"
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                  priority
                />
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  A Controlled Way to Expose ServiceNow Data
                </h1>
              </FadeUp>

              <FadeUp delay={0.14}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-500 sm:text-lg">
                  ServiceNow Table APIs are available by default, allowing ungoverned and often undesired integrations into your
                  platform. Easy API puts you back in control.
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
                  Start Free Trial
                </MotionLink>
                <MotionLink
                  href="#features"
                  whileHover={BUTTON_MOTION.whileHover}
                  whileTap={BUTTON_MOTION.whileTap}
                  transition={BUTTON_MOTION.transition}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-transparent px-8 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  See How It Works
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
                    { label: "Pricing", href: "#pricing", icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v12M9 9.5c0-1.1.9-2 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 2-2" strokeLinecap="round"/>
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
              <div className="relative h-[480px] w-full max-w-[580px]" aria-hidden>

                {/* Orange circular arrows — behind everything */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/easyapi/hero/hero-arrows.svg"
                    alt=""
                    width={520}
                    height={520}
                    className="h-auto w-[90%]"
                  />
                </div>

                {/* Orange square backdrop — behind cards, in front of arrows */}
                <div className="absolute right-0 left-[10%] top-[-40px] z-[1]">
                  <Image
                    src="/easyapi/hero/hero-easyapi-square.png"
                    alt=""
                    width={420}
                    height={420}
                    className="h-auto w-[90%] rounded-2xl"
                  />
                </div>

                {/* Main graph card — centred */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  className="absolute left-[4%] top-[12%] z-[2]"
                >
                  <Image
                    src="/easyapi/hero/hero-modal-graph.svg"
                    alt="API request graph"
                    width={535}
                    height={296}
                    className="h-auto w-full drop-shadow-2xl"
                  />
                </motion.div>

                {/* KPI: Errors — top right */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  className="absolute right-[-20px] bottom-[5%] z-[3]"
                >
                  <Image
                    src="/easyapi/hero/KPI-Errors.svg"
                    alt="Errors KPI"
                    width={280}
                    height={120}
                    className="h-auto w-full drop-shadow-xl"
                  />
                </motion.div>

                {/* KPI: Inbound Requests — bottom left */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
                  className="absolute top-[2%] left-0 z-[3]"
                >
                  <Image
                    src="/easyapi/hero/KPI-Inbound requests.svg"
                    alt="Inbound Requests KPI"
                    width={280}
                    height={120}
                    className="h-auto w-full drop-shadow-xl"
                  />
                </motion.div>

              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ── Trusted by ── */}
      <section className="border-b border-slate-100 bg-white" aria-labelledby="easyapi-trusted-heading">
        <Container className="py-10 sm:py-12">
          <div className="flex items-center gap-8">
            {/* Label + divider — fixed */}
            <div className="shrink-0 flex items-center gap-8">
              <p id="easyapi-trusted-heading" className="shrink-0 text-sm font-semibold text-slate-900 leading-snug">
                Trusted by over 70<br className="hidden sm:block" /> companies
              </p>
              <div className="hidden sm:block w-px self-stretch bg-slate-200" />
            </div>

            {/* Marquee — clips within the remaining container width */}
            <div className="relative min-w-0 flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

              {/* Two identical sets side-by-side; translate -50% = one full set = seamless */}
              <div
                className="flex items-center"
                style={{ animation: "marquee 30s linear infinite", willChange: "transform" }}
              >
                {[1, 2].map((copy) => (
                  <div key={copy} className="flex shrink-0 items-center gap-14 pr-14">
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-[#F0F2F8]">
        <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
          <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
            <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
              The secure replacement for ServiceNow Table APIs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              ServiceNow Table APIs are available by default, allowing ungoverned and often
              undesired integrations into your platform. Easy API puts you back in control.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} className="mx-auto mt-12 max-w-4xl">
            <DashboardChart />
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 4-column features ── */}
      <section className="border-b border-slate-100 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: BoxiconServer,
                title: "Managed API Gateway",
                body: "Replace direct Table API access with a governed gateway — every integration goes through Easy API, giving you full visibility and control.",
              },
              {
                Icon: BoxiconShield,
                title: "Granular Access Control",
                body: "Decide exactly what data and operations are exposed, and which users or systems are permitted to interact with each API.",
              },
              {
                Icon: BoxiconLayer,
                title: "Unified API Registry",
                body: "Bring Scripted REST APIs and Easy API endpoints into one place — a single source of truth for all ServiceNow API activity.",
              },
              {
                Icon: BoxiconExpand,
                title: "Scales With Your Platform",
                body: "As your ServiceNow footprint grows, Easy API grows with it — supporting new teams and integrations without sacrificing governance.",
              },
            ].map(({ Icon, title, body }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.1} className="flex flex-col">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: HERO_NAVY }}
                  aria-hidden
                >
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonial ── */}
      <section style={{ backgroundColor: HERO_NAVY }}>
        <Container className="py-20 sm:py-24 lg:py-28">
          <FadeUp className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <Image
              src="/quote.svg"
              alt=""
              width={48}
              height={48}
              className="mb-8 h-12 w-auto"
              aria-hidden
            />
            <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl lg:text-2xl">
              ServiceNow is an incredibly secure platform and it makes extensive use of highly
              configurable ACLs. The difficulty with these ACLs is the complexity across the
              platform, and this is where Easy API comes in. Easy API removes this complexity
              with a highly configurable, simple integration manager.
            </blockquote>
            <figcaption className="mt-8">
              <p className="text-xl font-bold text-white">Tim Attenborough</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/60">
                CTO, ShareLogic
              </p>
            </figcaption>
          </FadeUp>
        </Container>
      </section>

      {/* ── Interactive slideshow section ── */}
      {(() => {
        const SLIDES = [
          {
            text: "Instead of integrations connecting directly through out-of-box Table APIs, APIs are created and managed through Easy API.",
            src: "/easyapi/dashboard-img.svg",
            alt: "Easy API dashboard showing request volume, errors, and performance metrics",
          },
          {
            text: "Decisions can be quickly made about what data and operations are exposed, and which users or systems can interact with them.",
            src: "/easyapi/ui-1.png",
            alt: "Easy API requests view in the product UI",
          },
          {
            text: "Existing Scripted REST APIs can also be managed within Easy API, bringing API access and activity into one place.",
            src: "/easyapi/ui-2.png",
            alt: "Easy API scripted REST API management view",
          },
        ] as const;

        function SlideSection() {
          const [active, setActive] = useState(0);
          return (
            <section className="border-b border-slate-200 bg-[#F0F2F8]">
              <Container className="py-14 sm:py-16 lg:py-20">
                <ScrollReveal direction="up">
                  <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
                    A Controlled Way to Expose ServiceNow Data
                  </h2>
                  <p className="mt-3 text-lg text-slate-500">
                    Easy API delivers structural control across complex integration portfolios.
                  </p>
                </ScrollReveal>

                <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Left: clickable description cards */}
                  <ScrollReveal direction="right" className="flex flex-col gap-4">
                    {SLIDES.map((slide, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={cn(
                          "rounded-2xl border px-5 py-5 text-left text-base leading-relaxed transition-all sm:px-6",
                          active === i
                            ? "border-blue-400 bg-white shadow-md text-slate-900"
                            : "border-transparent bg-white/50 text-slate-500 hover:bg-white hover:text-slate-700"
                        )}
                      >
                        {slide.text}
                      </button>
                    ))}
                  </ScrollReveal>

                  {/* Right: image that swaps on click */}
                  <ScrollReveal direction="left" delay={0.1} className="lg:sticky lg:top-28">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-[#0d1524] shadow-xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={active}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <Image
                            src={SLIDES[active].src}
                            alt={SLIDES[active].alt}
                            width={1200}
                            height={900}
                            className="h-auto w-full object-cover object-top"
                            unoptimized
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                </div>
              </Container>
            </section>
          );
        }

        return <SlideSection />;
      })()}

      {/* ── Control / Scale accordion section ── */}
      {(() => {
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
          <section className="border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
            <Container>
              {/* Blue rounded container — radius top-left & bottom-right only */}
              <div
                className="overflow-hidden p-8 sm:p-12 lg:p-16"
                style={{
                  backgroundColor: HERO_NAVY,
                  borderRadius: "4rem 0 4rem 0",
                }}
              >
                {/* Block 1: image left, accordion right */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <ScrollReveal direction="right">
                    <div className="overflow-hidden rounded-2xl bg-[#0d1524] shadow-lg">
                      <Image
                        src="/easyapi/ui-3.png"
                        alt="Easy API control view"
                        width={1200}
                        height={900}
                        className="h-auto w-full object-cover object-top"
                        unoptimized
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={0.1}>
                    <h2 className={cn(sectionHeadingH2, "text-white")}>
                      Control, Visibility and Governance
                    </h2>
                    <p className="mt-3 text-base text-white/70">
                      Easy API provides the control and visibility needed to safely manage ServiceNow APIs as more integrations are needed.
                    </p>
                    <div className="mt-8">
                      <AccordionRow
                        label="Control what data is exposed"
                        body="Define exactly what can be accessed and apply permissions across users, services and APIs."
                      />
                      <AccordionRow
                        label="See how APIs are used"
                        body="Monitor who accessed an API, when requests were made and what data was involved."
                      />
                      <AccordionRow
                        label="Respond instantly when needed"
                        body="Disable APIs or restrict access to specific users or services to quickly isolate issues."
                      />
                    </div>
                  </ScrollReveal>
                </div>

                <div className="my-32 lg:my-48" />

                {/* Block 2: accordion left, image right */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <ScrollReveal direction="right">
                    <h2 className={cn(sectionHeadingH2, "text-white")}>Build for scale</h2>
                    <p className="mt-3 text-base text-white/70">
                      As ServiceNow adoption grows, so does the number of integrations connected to it.
                    </p>
                    <div className="mt-8">
                      <AccordionRow
                        label="Create APIs quickly"
                        body="Configure APIs in minutes without writing code. Easy API makes it simple to define endpoints, set permissions, and publish."
                      />
                      <AccordionRow
                        label="Automate API Provisioning"
                        body="Use workflows to automatically create and configure APIs as part of your onboarding and delivery processes."
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={0.1}>
                    <div className="overflow-hidden rounded-2xl bg-[#0d1524] shadow-lg">
                      <Image
                        src="/easyapi/ui-1.png"
                        alt="Easy API scale view"
                        width={1200}
                        height={900}
                        className="h-auto w-full object-cover object-top"
                        unoptimized
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </Container>
          </section>
        );
      })()}

      {/* ── Built for scale: text left / screenshot right ── */}
      <section className="border-b border-slate-100 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: copy */}
            <ScrollReveal direction="right" className="flex flex-col">
              <p className="text-2xl font-bold text-slate-400 leading-snug">Built for scale</p>
              <h2 className={cn(sectionHeadingH2, "text-slate-900 mt-0")}>
                Built for scale
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                What begins as a handful of integrations can quickly expand into dozens or hundreds
                of systems interacting with the platform. Without a structured approach, managing
                those integrations becomes increasingly difficult.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Easy API provides a consistent way to expose ServiceNow data as integrations scale.
                APIs are created through a single managed framework, giving platform owners clear
                visibility into what systems are connected and how they interact with the platform.
              </p>
            </ScrollReveal>

            {/* Right: screenshot */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
                <Image
                  src="/easyapi/ui-3.png"
                  alt="Easy API systems view showing connected integrations"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover object-top"
                  unoptimized
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>


      {/* ── FAQ ── */}
      {(() => {
        const FAQS = [
          {
            q: "What is Easy API?",
            a: "Easy API is a ServiceNow application that replaces direct Table API access with a managed, governed gateway. It gives platform owners full control over what data is exposed, who can access it, and how integrations are monitored.",
          },
          {
            q: "How do I get started?",
            a: "You can start a free trial directly from this page. Easy API installs natively within ServiceNow, so there's no external infrastructure to set up — you're up and running in minutes.",
          },
          {
            q: "Does Easy API work with existing Scripted REST APIs?",
            a: "Yes. Existing Scripted REST APIs can be imported and managed within Easy API, bringing all your API access and activity into one place without having to rebuild them.",
          },
          {
            q: "How does Easy API handle permissions?",
            a: "Easy API lets you define granular permissions at the API level — controlling which users, roles, or external systems can interact with each endpoint and what operations they're allowed to perform.",
          },
          {
            q: "Is Easy API native to ServiceNow?",
            a: "Yes. Easy API runs entirely within ServiceNow, which means it integrates naturally with your existing workflows, service catalogue, and access controls — no third-party infrastructure required.",
          },
          {
            q: "Can I automate API provisioning?",
            a: "Yes. Because Easy API is native to ServiceNow, you can integrate API provisioning into your existing service workflows — letting teams request, approve, and provision APIs through standard ServiceNow processes.",
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
                {/* Left: heading */}
                <FadeUp className="flex items-start lg:items-center">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Still have questions?
                  </h2>
                </FadeUp>

                {/* Right: accordion rows */}
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

        <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
          {/* Left decoration */}
          <div className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 md:block lg:left-8" aria-hidden>
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#cfd6ec]" />
              <div className="absolute inset-10 rounded-full border border-dashed border-[#cfd6ec]" />
              <div className="absolute bottom-4 left-16 h-12 w-12 rotate-45 rounded-lg bg-[#c8c4f7]" />
              <div className="absolute bottom-20 left-20 h-5 w-5 rotate-45 rounded bg-[#c8c4f7]" />
            </div>
          </div>
          {/* Right decoration */}
          <div className="pointer-events-none absolute right-4 top-8 hidden md:block lg:right-8" aria-hidden>
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#cfd6ec]" />
              <div className="absolute inset-10 rounded-full border border-dashed border-[#cfd6ec]" />
              <div className="absolute right-12 top-2 h-12 w-12 rotate-45 rounded-lg bg-[#c8c4f7]" />
              <div className="absolute right-4 top-16 h-5 w-5 rotate-45 rounded bg-[#c8c4f7]" />
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <h2 className={cn(sectionHeadingH2, "text-balance")}>
                Take Control of Your ServiceNow APIs
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl">
                Start a free trial and see how Easy API helps you manage and control your ServiceNow APIs.
              </p>
            </FadeUp>
            <FadeUp delay={0.12} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-95 sm:w-auto"
                style={{ backgroundColor: FINAL_CTA_BLUE }}
              >
                Start Free Trial
              </MotionLink>
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border border-[#8ea2eb] bg-white px-8 py-3.5 text-sm font-semibold text-[#2750F5] shadow-sm transition-colors hover:bg-slate-50 sm:w-auto"
              >
                See How It Works
              </MotionLink>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
