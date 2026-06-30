import type { Theme } from "@/content/types";

/**
 * Aplica el theme del siteConfig a las variables CSS de :root en runtime.
 * Esto permite re-tematizar toda la landing cambiando solo siteConfig.theme.
 */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const c = theme.colors;

  root.style.setProperty("--background", c.background);
  root.style.setProperty("--foreground", c.foreground);
  root.style.setProperty("--muted", c.muted);
  root.style.setProperty("--muted-foreground", c.mutedForeground);
  root.style.setProperty("--card", c.card);
  root.style.setProperty("--card-foreground", c.cardForeground);
  root.style.setProperty("--border", c.border);
  root.style.setProperty("--accent", c.accent);
  root.style.setProperty("--accent-foreground", c.accentForeground);
  root.style.setProperty("--ring", c.ring);
  if (c.accent2) root.style.setProperty("--accent-2", c.accent2);

  root.style.setProperty("--radius", theme.radius);
  root.style.setProperty("--font-display", theme.fontDisplay);
  root.style.setProperty("--font-sans", theme.fontSans);
  if (theme.fontScript)
    root.style.setProperty("--font-script", theme.fontScript);
}

/** Devuelve el valor de acento como hsl() usable en canvas/SVG. */
export function accentHsl(theme: Theme, alpha = 1) {
  return `hsl(${theme.colors.accent} / ${alpha})`;
}
