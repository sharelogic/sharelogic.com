"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  children: ReactNode;
  /** "up" fades from below, "left" slides in from right, "right" slides in from left */
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  /** 0–1: how much of the element must be in view before triggering */
  amount?: number;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  amount = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const reduce = useReducedMotion();

  const offset = 52;

  const initial = reduce
    ? { opacity: 0 }
    : {
        opacity: 0,
        x: direction === "left" ? offset : direction === "right" ? -offset : 0,
        y: direction === "up" ? offset : 0,
      };

  const animate = inView ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
