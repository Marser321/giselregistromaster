import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "accent" | "accent2" | "muted" | "outline";

const variants: Record<Variant, string> = {
  accent: "bg-accent/15 text-accent border-accent/30",
  accent2: "bg-accent2/12 text-accent2 border-accent2/25",
  muted: "bg-muted/70 text-muted-foreground border-border",
  outline: "bg-transparent text-foreground border-border",
};

export function Badge({
  className,
  variant = "accent",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
