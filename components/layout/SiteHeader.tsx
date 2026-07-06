"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { LinkButton } from "@/components/ui/LinkButton";
import { EASE_IN_OUT } from "@/lib/motion";
import { mainNavigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

const dropdownTransition = { duration: 0.22, ease: EASE_IN_OUT as [number, number, number, number] };
const mobilePanelTransition = { duration: 0.28, ease: EASE_IN_OUT as [number, number, number, number] };
const mobileSidebarTransition = { duration: 0.24, ease: EASE_IN_OUT as [number, number, number, number] };

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const baseId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const activeHref = useMemo(() => pathname, [pathname]);

  function closeNav() {
    setMobileOpen(false);
    setOpenGroupId(null);
  }

  function onNavigateClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.defaultPrevented) return;
    closeNav();
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenGroupId(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  function scheduleClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenGroupId(null), 120);
  }

  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  return (
    <header
      className={cn("sticky top-0 z-50 border-b border-white/15 bg-[#2750F5]")}
    >
      <div className="mx-auto flex max-w-[1350px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Logo variant="onBrand" />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {mainNavigation.map((group) => {
              if (!group.children?.length && group.href) {
                return (
                  <Link
                    key={group.id}
                    href={group.href}
                    onClick={onNavigateClick}
                    className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    {group.label}
                  </Link>
                );
              }

              const menuId = `${baseId}-menu-${group.id}`;
              const btnId = `${baseId}-btn-${group.id}`;
              const open = openGroupId === group.id;

              return (
                <div
                  key={group.id}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenGroupId(group.id);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    id={btnId}
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-white/10",
                      open && "bg-white/10",
                    )}
                    aria-expanded={open}
                    aria-haspopup="true"
                    aria-controls={menuId}
                    onClick={() => setOpenGroupId(open ? null : group.id)}
                  >
                    {group.label}
                    <span className="text-white/70" aria-hidden>
                      ▾
                    </span>
                  </button>
                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        key={menuId}
                        id={menuId}
                        role="menu"
                        aria-labelledby={btnId}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={dropdownTransition}
                        className="absolute left-0 top-full z-50 mt-2 w-[min(100vw-2rem,28rem)] origin-top rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                      >
                        <ul className="max-h-[70vh] overflow-auto py-1">
                          {group.children?.map((child) => {
                            const active = activeHref === child.href;
                            const external = /^https?:\/\//i.test(child.href);
                            return (
                              <li key={`${group.id}-${child.label}`}>
                                <Link
                                  role="menuitem"
                                  href={child.href}
                                  {...(external
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                                  onClick={onNavigateClick}
                                  className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-50",
                                    active && "bg-slate-50",
                                  )}
                                >
                                  {child.icon ? (
                                    <Image
                                      src={child.icon}
                                      alt=""
                                      width={24}
                                      height={24}
                                      aria-hidden
                                      className="h-7 w-7 shrink-0"
                                    />
                                  ) : null}
                                  <span className="min-w-0">
                                    <span className="font-medium text-slate-900">
                                      {child.label}
                                      {external ? (
                                        <>
                                          <span className="ml-1 text-slate-400" aria-hidden>
                                            ↗
                                          </span>
                                          <span className="sr-only"> (opens in new tab)</span>
                                        </>
                                      ) : null}
                                    </span>
                                    {child.description ? (
                                      <span className="mt-1 block text-xs text-slate-600">{child.description}</span>
                                    ) : null}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LinkButton href="/contact" variant="nav" onClick={closeNav}>
            Talk with a specialist
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 p-2.5 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls={`${baseId}-mobile`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <MenuIcon open={mobileOpen} />
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              key="mobile-backdrop"
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={mobilePanelTransition}
              className="fixed inset-0 z-[60] bg-slate-950/45 lg:hidden"
              onClick={closeNav}
            />
            <motion.aside
              key="mobile-nav"
              id={`${baseId}-mobile`}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={mobileSidebarTransition}
              className="fixed inset-y-0 left-0 z-[70] w-[min(86vw,22rem)] overflow-y-auto border-r border-white/20 bg-[#2750F5] px-4 py-4 sm:px-5 lg:hidden"
            >
              <div className="mb-6">
                <Logo variant="onBrand" />
              </div>
              <nav className="flex flex-col gap-1" aria-label="Primary mobile">
                {mainNavigation.map((group) => {
                  const linkUnderline =
                    "block w-full py-3 text-left text-sm font-semibold text-white underline decoration-white/45 underline-offset-[6px] hover:decoration-white";

                  if (!group.children?.length && group.href) {
                    return (
                      <Link key={group.id} href={group.href} onClick={onNavigateClick} className={linkUnderline}>
                        {group.label}
                      </Link>
                    );
                  }

                  const expanded = openGroupId === `m-${group.id}`;
                  return (
                    <div key={group.id} className="border-b border-white/15 pb-1 last:border-b-0">
                      <button
                        type="button"
                        className={cn(linkUnderline, "bg-transparent")}
                        aria-expanded={expanded}
                        onClick={() => setOpenGroupId(expanded ? null : `m-${group.id}`)}
                      >
                        {group.label}
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded ? (
                          <motion.div
                            key={`sub-${group.id}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={dropdownTransition}
                            className="overflow-hidden"
                          >
                            <ul className="mt-1 space-y-1 border-l border-white/20 pl-3">
                              {group.children?.map((child) => {
                                const external = /^https?:\/\//i.test(child.href);
                                return (
                                  <li key={`${group.id}-${child.label}`}>
                                    <Link
                                      href={child.href}
                                      {...(external
                                        ? { target: "_blank", rel: "noopener noreferrer" }
                                        : {})}
                                      onClick={onNavigateClick}
                                      className="block py-2 text-sm font-medium text-white/90 underline decoration-white/35 underline-offset-[5px] hover:text-white hover:decoration-white"
                                    >
                                      {child.label}
                                      {external ? (
                                        <>
                                          <span className="ml-1 inline-block text-white/60" aria-hidden>
                                            ↗
                                          </span>
                                          <span className="sr-only"> (opens in new tab)</span>
                                        </>
                                      ) : null}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
              <div className="mt-6 border-t border-white/15 pt-4">
                <LinkButton href="/contact" variant="nav" className="w-full" onClick={closeNav}>
                  Talk with a specialist
                </LinkButton>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
