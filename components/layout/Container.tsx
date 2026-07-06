import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
};

export function Container({ children, className, as: Tag = "div" }: Props) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
