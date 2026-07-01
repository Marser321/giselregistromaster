import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "accent" | "outline" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  accent:
    "border border-champagne/45 bg-accent text-accent-foreground shadow-[0_18px_45px_-24px_hsl(var(--accent))] hover:-translate-y-0.5 hover:brightness-105 font-semibold",
  outline:
    "border border-border text-foreground hover:bg-muted/60 font-medium",
  ghost: "text-foreground hover:bg-muted/60 font-medium",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-6 text-sm",
  lg: "h-14 px-8 text-sm sm:text-base",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

/** Estado "pendiente" (sin `href` aún): pill silenciado, lectura intencional
 *  —no un CTA dorado apagado que parezca roto. Se acompaña con `cta.note`. */
const pending =
  "cursor-not-allowed border border-white/15 bg-white/[0.05] text-white/55 shadow-none font-semibold";

const base = cn(
  "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-out",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "active:scale-[0.98] whitespace-nowrap"
);

/**
 * Botón. Con `href` renderiza un <a> (CTA activo); sin `href` renderiza un
 * <button> que, si va `disabled`, usa el estilo "pendiente".
 * Nota: `disabled` no aplica a enlaces — cuando hay `href` el CTA siempre va activo.
 */
export function Button({
  className,
  variant = "accent",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={cn(base, props.disabled ? pending : variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
