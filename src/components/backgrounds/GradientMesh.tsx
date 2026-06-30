import { siteConfig } from "@/content/site.config";
import { accentHsl } from "@/lib/theme";

/**
 * Malla de gradientes suaves (aurora). CSS puro. Motivo "calma/movimiento".
 * Alternativa más sutil a las partículas para nichos no financieros.
 */
export function GradientMesh({ className }: { className?: string }) {
  const a1 = accentHsl(siteConfig.theme, 0.22);
  const a2 = accentHsl(siteConfig.theme, 0.14);
  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(40% 50% at 15% 20%, ${a1} 0%, transparent 60%),
          radial-gradient(35% 45% at 85% 15%, ${a2} 0%, transparent 60%),
          radial-gradient(50% 50% at 50% 100%, ${a2} 0%, transparent 70%)
        `,
        filter: "blur(30px)",
      }}
    />
  );
}
