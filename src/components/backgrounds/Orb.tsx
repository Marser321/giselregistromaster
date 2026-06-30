import { siteConfig } from "@/content/site.config";
import { accentHsl } from "@/lib/theme";

/**
 * Orbe de luz difusa con glow del color de acento. CSS puro, sin JS.
 * Motivo "foco/promesa". Bueno para hero y cierres.
 */
export function Orb({ className }: { className?: string }) {
  const a = accentHsl(siteConfig.theme, 0.5);
  const a2 = accentHsl(siteConfig.theme, 0.12);
  return (
    <div
      aria-hidden
      className={className}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          width: "60vw",
          height: "60vw",
          maxWidth: 720,
          maxHeight: 720,
          transform: "translateX(-50%)",
          borderRadius: "9999px",
          background: `radial-gradient(circle at 50% 50%, ${a} 0%, ${a2} 35%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
