import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { openRoles } from "@/lib/data/careers";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join ShareLogic and help enterprises build integration programs that are governable, observable, and scalable.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Build software that enterprises run in production"
        subtitle="ShareLogic is a cross-functional team of engineers, architects, and customer partners focused on reliability, security, and pragmatic delivery."
      />

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>How we work</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="text-base font-semibold text-slate-900">Ownership</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Small teams with clear accountability—fewer handoffs, more end-to-end responsibility.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="text-base font-semibold text-slate-900">Craft</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We care about operational detail: observability, failure modes, and supportability.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="text-base font-semibold text-slate-900">Trust</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We work with regulated customers—security and integrity aren’t optional extras.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>Open roles</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">No open positions at this time.</p>
        </Container>
      </section>

      <CtaBand
        headline="Don’t see the right role?"
        body="We’re always interested in meeting strong engineers and field practitioners. Send a note with your background and what you want to work on."
        primaryLabel="General inquiry"
        primaryHref="/contact"
      />
    </>
  );
}
