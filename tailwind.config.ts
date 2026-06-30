import type { Config } from "tailwindcss";

/**
 * Design system. Colors reference CSS variables (HSL channels) defined in
 * src/index.css and overridden at runtime by src/lib/theme.ts from
 * siteConfig.theme. Re-theming a landing = changing siteConfig.theme.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
        accent2: "hsl(var(--accent-2) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        ivory: "hsl(var(--ivory) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        champagne: "hsl(var(--champagne) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "Parisienne", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        glow: "0 0 60px -15px hsl(var(--accent) / 0.45)",
        glow2: "0 0 60px -15px hsl(var(--accent-2) / 0.45)",
        card: "0 1px 0 0 hsl(var(--foreground) / 0.04) inset, 0 24px 60px -30px hsl(0 0% 0% / 0.6)",
        editorial: "0 30px 80px -38px hsl(215 60% 5% / 0.55)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-h)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
