import { siteConfig } from "@/content/site.config";
import { accentHsl } from "@/lib/theme";

/** Estrella/destello de 4 puntas con glow dorado. */
function Sparkle({
  x,
  y,
  size,
  delay = 0,
}: {
  x: string;
  y: string;
  size: number;
  delay?: number;
}) {
  const gold = accentHsl(siteConfig.theme, 1);
  return (
    <svg
      className="animate-pulse-soft"
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        filter: `drop-shadow(0 0 6px ${accentHsl(siteConfig.theme, 0.6)})`,
      }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M50 4 C53 38 62 47 96 50 C62 53 53 62 50 96 C47 62 38 53 4 50 C38 47 47 38 50 4 Z"
        fill={gold}
      />
    </svg>
  );
}

/**
 * Motivo de marca Gisella: anillos concéntricos dorados + destellos sobre un
 * velo navy→turquesa. CSS/SVG puro (sin canvas), ligero y responsive.
 * Reproduce el lenguaje gráfico del branding. Bueno para hero, cierres y
 * secciones oscuras.
 */
export function Circles({ className }: { className?: string }) {
  const gold = accentHsl(siteConfig.theme, 1);
  const rings = [110, 165, 220, 275, 330];

  return (
    <div
      aria-hidden
      className={className}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      {/* Velo navy → turquesa (acento-2) para profundidad de marca. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 90% at 12% 8%, hsl(var(--accent-2) / 0.16) 0%, transparent 46%), radial-gradient(120% 100% at 100% 100%, hsl(var(--accent-2) / 0.10) 0%, transparent 52%)",
        }}
      />

      {/* Anillos concéntricos dorados (cúmulo superior derecho). */}
      <svg
        className="animate-float"
        style={{
          position: "absolute",
          top: "-22%",
          right: "-12%",
          width: "72vw",
          height: "72vw",
          maxWidth: 860,
          maxHeight: 860,
        }}
        viewBox="0 0 700 700"
        fill="none"
      >
        {rings.map((r, i) => (
          <circle
            key={i}
            cx="350"
            cy="350"
            r={r}
            stroke={gold}
            strokeOpacity={0.2 - i * 0.025}
            strokeWidth="1.2"
          />
        ))}
      </svg>

      {/* Cúmulo inferior izquierdo, más sutil. */}
      <svg
        style={{
          position: "absolute",
          bottom: "-28%",
          left: "-18%",
          width: "60vw",
          height: "60vw",
          maxWidth: 680,
          maxHeight: 680,
          opacity: 0.6,
        }}
        viewBox="0 0 700 700"
        fill="none"
      >
        {rings.slice(0, 4).map((r, i) => (
          <circle
            key={i}
            cx="350"
            cy="350"
            r={r}
            stroke={gold}
            strokeOpacity={0.14 - i * 0.025}
            strokeWidth="1.2"
          />
        ))}
      </svg>

      {/* Destellos dorados. */}
      <Sparkle x="74%" y="14%" size={26} delay={0} />
      <Sparkle x="18%" y="30%" size={16} delay={1.2} />
      <Sparkle x="60%" y="70%" size={20} delay={0.6} />
    </div>
  );
}
