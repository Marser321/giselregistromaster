import * as React from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site.config";
import type { SectionTone } from "@/content/types";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  /** Ancho de contenido. "narrow" para texto, "wide" por defecto. */
  width?: "narrow" | "wide";
  /** Superficie editorial clara u oscura. */
  tone?: SectionTone;
}

/**
 * Envoltorio de sección con padding vertical y contenedor centrado.
 * Si `siteConfig.sectionBackgrounds[id]` existe, pinta una imagen de fondo
 * on-brand con overlay navy (legibilidad). Se oculta sin dato.
 */
export function Section({
  className,
  width = "wide",
  tone,
  id,
  children,
  ...props
}: SectionProps) {
  const background = id ? siteConfig.sectionBackgrounds?.[id] : undefined;
  const bg = typeof background === "string" ? { src: background } : background;
  const resolvedTone = tone ?? bg?.tone ?? "dark";
  return (
    <section
      id={id}
      data-tone={resolvedTone}
      className={cn(
        "relative isolate overflow-hidden py-20 sm:py-28 lg:py-32",
        resolvedTone === "ivory"
          ? "bg-ivory text-ink"
          : "bg-background text-foreground",
        className
      )}
      {...props}
    >
      {bg && (
        <div aria-hidden className="absolute inset-0 z-0">
          <img
            src={bg.src}
            alt=""
            className="h-full w-full object-cover"
            style={{
              objectPosition: bg.position ?? "center",
              opacity: bg.opacity ?? 0.42,
            }}
            loading="lazy"
          />
          <div
            className={cn(
              "absolute inset-0",
              resolvedTone === "ivory"
                ? "bg-ivory/80"
                : "bg-gradient-to-b from-background/75 via-background/40 to-background/80"
            )}
          />
        </div>
      )}
      <div
        className={cn(
          "container relative z-10",
          width === "narrow" && "max-w-3xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
