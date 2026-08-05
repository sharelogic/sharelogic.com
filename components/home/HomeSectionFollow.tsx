import { Container } from "@/components/layout/Container";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import { HomeFollowLeadForm } from "@/components/home/HomeFollowLeadForm";

export function HomeSectionFollow() {
  return (
    <section
      id="section-follow"
      className="section-follow relative overflow-hidden border-t border-slate-200 bg-white"
      aria-labelledby="section-follow-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-55"
        aria-hidden
        style={{
          backgroundImage: "url('/square-bg-pattern.png')",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Left decoration */}
      <div className="pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 xl:block" style={{ left: 'calc(50% - 256px - 80px - 256px)' }} aria-hidden>
        <div className="relative h-64 w-64">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#cfd6ec]" />
          <div className="absolute inset-10 rounded-full border border-dashed border-[#cfd6ec]" />
          <div className="absolute bottom-4 left-16 h-12 w-12 rotate-45 rounded-lg bg-[#c8c4f7]" />
          <div className="absolute bottom-20 left-20 h-5 w-5 rotate-45 rounded bg-[#c8c4f7]" />
        </div>
      </div>
      {/* Right decoration */}
      <div className="pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 xl:block" style={{ right: 'calc(50% - 256px - 80px - 256px)' }} aria-hidden>
        <div className="relative h-64 w-64">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#cfd6ec]" />
          <div className="absolute inset-10 rounded-full border border-dashed border-[#cfd6ec]" />
          <div className="absolute right-12 top-2 h-12 w-12 rotate-45 rounded-lg bg-[#c8c4f7]" />
          <div className="absolute right-4 top-16 h-5 w-5 rotate-45 rounded bg-[#c8c4f7]" />
        </div>
      </div>

      <Container className="relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="section-follow-heading" className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Ready to fix your integrations?
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-[#666666]">
            Let&apos;s address the visibility, control, and security issues once and for all.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-lg sm:mt-8">
          <HomeFollowLeadForm />
        </div>
      </Container>
    </section>
  );
}
