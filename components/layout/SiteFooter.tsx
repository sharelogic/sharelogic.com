import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { mainNavigation } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/site";

function SocialIcon({ label }: { label: string }) {
  const cls = "h-4 w-4 shrink-0 text-current";
  const key = label.toLowerCase();
  if (key === "linkedin") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (key === "x" || key === "twitter") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (key === "github") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return null;
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#000000] text-white">
      <Container as="div" className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="onDark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">{siteConfig.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {siteConfig.social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  <SocialIcon label={s.label} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-5">
            {mainNavigation.map((group) => (
              <div key={group.id}>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/55">{group.label}</p>
                {group.children?.length ? (
                  <ul className="mt-3 space-y-2">
                    {group.children.map((child) => {
                      const external = /^https?:\/\//i.test(child.href);
                      return (
                        <li key={`${group.id}-${child.label}`}>
                          <Link
                            href={child.href}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="text-sm text-white/90 hover:text-white"
                          >
                            {child.label}
                            {external ? <span className="sr-only"> (opens in new tab)</span> : null}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : group.href ? (
                  <ul className="mt-3 space-y-2">
                    <li>
                      <Link href={group.href} className="text-sm text-white/90 hover:text-white">
                        {group.label}
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/privacy-policy" className="text-white/55 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
