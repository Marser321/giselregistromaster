import { Circles } from "./Circles";

interface BackgroundLayerProps {
  /** Añade un velo de viñeta para mejorar contraste del texto. */
  vignette?: boolean;
}

/**
 * Capa de fondo de marca por código (motivo `circles`: anillos dorados +
 * destellos + velo turquesa). On-brand, ligera y sin depender de imágenes IA.
 * Se monta detrás del contenido de las secciones oscuras y del hero/cierre.
 */
export function BackgroundLayer({ vignette = true }: BackgroundLayerProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Circles />
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
