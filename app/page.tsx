import Image from "next/image";
import { buildMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/layout/Container";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { HomeSectionUnifi } from "@/components/home/HomeSectionUnifi";
import { HomeSectionEasyAPI } from "@/components/home/HomeSectionEasyAPI";
// import { HomeSection6Products } from "@/components/home/HomeSection6Products";
// import { HomeSection7Documentation } from "@/components/home/HomeSection7Documentation";
import { HomeSectionFollow } from "@/components/home/HomeSectionFollow";
import { HomeHeroArtboard } from "@/components/home/HomeHeroImages";
import { GridStreakOverlay } from "@/components/effects/GridStreakOverlay";
import { FadeUp } from "@/components/motion/FadeUp";
import { LinkButton } from "@/components/ui/LinkButton";
import { siteConfig } from "@/lib/data/site";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Smarter ServiceNow Integrations`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        title="Smarter ServiceNow Integrations"
        subtitle="Governance, visibility, and control for ServiceNow integrations that matter"
        visual={<HomeHeroArtboard />}
        showBackgroundDots={false}
      >
        <LinkButton href="/contact" hero>
          Talk to an Integration Specialist
        </LinkButton>
        {/* <LinkButton href="/products/easy-api" variant="secondary" hero>
          Watch Overview
        </LinkButton> */}
      </Hero>

      <SectionIntro
        title="Integrations shape how your business is experienced"
        description="Most businesses treat integrations as a technical necessity.
Smart ones see them as critical to building trust and delivering exceptional customer experiences."
        // descripton2="Smart businesses realise that integrations are fundamental in building trust. Most think of them as a technical problem with little thought about the overall experience. The reality is that integrations are critical to the success of any business."
      />

      <FeatureGrid
        columns={3}
        items={[
          {
            title: "Strategic Governance",
            description: "ServiceNow gives you many ways to build integrations. But without proper strategy, standards, and governance, things quickly become chaotic and hard to manage at scale.\n\nShareLogic delivers the strategy, standards, and governance framework you need to run integrations confidently and reliably — year after year.",
            iconSrc: "/section-2/icon-incident.svg",
          },
          {
            title: "Real-Time Visibility",
            description: "With traditional integrations, problems can stay hidden for weeks or months. This lack of visibility quietly causes missed SLAs, poor data quality, and damaged customer experiences.\n\nReal-time visibility into every integration is essential. It lets you catch issues early and keep operations smooth and reliable.",
            iconSrc: "/section-2/icon-cube.svg",
          },
          {
            title: "Operational Control",
            description: "Integrations can quickly turn from assets into liabilities as you scale. Technical debt explodes with every new deployment.\n\nThe only way to stay in control is through clear standards for how integrations are built, operated, and documented.",
            iconSrc: "/section-2/icon-warning.svg",
          },
        ]}
      />

      <section
        id="section-3"
        className="relative overflow-hidden border-t border-slate-200 bg-[#2750F5]"
        aria-labelledby="section-3-heading"
      >
        <Container className="py-12 sm:py-14">
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
            <FadeUp className="flex min-w-0 shrink-0 justify-center lg:w-[46%] lg:justify-start">
              <div className="relative w-full max-w-[590px]">
                <Image
                  src="/hero-illustration.png"
                  alt=""
                  width={809}
                  height={740}
                  className="h-auto w-full object-contain object-left"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  loading="lazy"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.06} className="min-w-0 lg:flex-1">
              <h2 id="section-3-heading" className="text-3xl font-semibold tracking-tight text-white">
                Governance for ServiceNow Integrations
              </h2>
              <p className="mt-4 text-pretty text-base text-xl leading-relaxed text-white">
                Real visibility. Real control. Exceptional experiences.
                ShareLogic delivers the governance layer ServiceNow doesn’t — so your integrations become a competitive advantage instead of a constant headache.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>
      {/* <HomeSection6Products /> */}
      <HomeSectionUnifi />
      <HomeSectionEasyAPI />
      
      <TrustedBy />
      {/* <HomeSection7Documentation /> */}

      <HomeSectionFollow />
    </>
  );
}
