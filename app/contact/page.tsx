import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { ContentCard } from "@/components/ui/ContentCard";
import { siteConfig } from "@/lib/data/site";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact ShareLogic for sales inquiries, security reviews, and partnership discussions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Talk with ShareLogic"
        subtitle="Tell us about your integration challenges and we'll get you moving in the right direction."
      />

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className={cn(sectionHeadingH2, "text-slate-900")}>Send a message</h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                If you&apos;d like to find out more about what we do or arrange a demo, please get in touch.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <h2 className={cn(sectionHeadingH2, "text-slate-900")}>Company</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {siteConfig.legalName}
                  <br />
                  {siteConfig.contact.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-slate-900">Email: </span>
                    <a className="text-slate-700 underline" href={`mailto:${siteConfig.contact.email}`}>
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Phone: </span>
                    <a className="text-slate-700 underline" href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}>
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* <div className="mt-6 grid gap-4">
                <ContentCard
                  title="Security reviews"
                  description="Request security documentation, architecture summaries, and common questionnaire responses (placeholder)."
                />
                <ContentCard
                  title="Partners"
                  description="Technology providers and system integrators: ask about enablement, sandboxes, and certification paths (placeholder)."
                />
              </div> */}

              {/* <details className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                  FAQ (placeholder)
                </summary>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">Do you support on‑prem deployments?</span>{" "}
                    Enterprise deployment options vary—this starter content is intentionally generic.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">How fast can we get started?</span>{" "}
                    Timelines depend on scope, security requirements, and integration complexity.
                  </p>
                </div>
              </details> */}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
