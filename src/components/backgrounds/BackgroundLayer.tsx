import { siteConfig } from "@/content/site.config";
import type { BackgroundMotif } from "@/content/types";
import { Particles } from "./Particles";
import { Orb } from "./Orb";
import { GradientMesh } from "./GradientMesh";
import { Circles } from "./Circles";

interface BackgroundLayerProps {
  /** Forzar un motivo concreto; por defecto usa siteConfig.theme.background. */
  motif?: BackgroundMotif;
  /** Añade un velo de viñeta para mejorar contraste del texto. */
  vignette?: boolean;
  density?: number;
}

/**
 * Capa de fondo global. Elige el motivo generativo según el theme del nicho.
 * La skill `landing-backgrounds` controla qué motivo se usa y dónde.
 */
export function BackgroundLayer({
  motif,
  vignette = true,
  density = 1,
}: BackgroundLayerProps) {
  const m = motif ?? siteConfig.theme.background;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {m === "particles" && <Particles density={density} />}
      {m === "orb" && <Orb />}
      {m === "mesh" && <GradientMesh />}
      {m === "circles" && <Circles />}
      {vignette && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, transparent 40%, hsl(var(--background) / 0.85) 100%)",
          }}
        />
      )}
    </div>
  );
}
