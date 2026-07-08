/**
 * Tipos de la fuente única de verdad de la landing.
 * La skill `landing-copy` rellena `siteConfig` siguiendo estos tipos.
 * La skill `landing-backgrounds` controla `theme.colors` y `theme.background`.
 */

/** Canales HSL como string, p. ej. "43 96% 56%" (sin la función hsl()). */
export type Hsl = string;

export interface ThemeColors {
  background: Hsl;
  foreground: Hsl;
  muted: Hsl;
  mutedForeground: Hsl;
  card: Hsl;
  cardForeground: Hsl;
  border: Hsl;
  accent: Hsl;
  accentForeground: Hsl;
  ring: Hsl;
  /** Acento secundario (p. ej. turquesa de marca) para gradientes/script. Opcional. */
  accent2?: Hsl;
}

export type SectionTone = "dark" | "ivory";

export interface SectionBackgroundConfig {
  src: string;
  /** Posición CSS de la imagen, p. ej. "left bottom". */
  position?: string;
  /** Opacidad de la imagen antes del velo de contraste. */
  opacity?: number;
  /** Tono editorial de la sección. */
  tone?: SectionTone;
}

export type BackgroundMotif =
  | "particles"
  | "orb"
  | "mesh"
  | "circles"
  | "none";

export interface Theme {
  /** Nombre del nicho/preset, solo informativo. */
  name: string;
  colors: ThemeColors;
  fontDisplay: string;
  fontSans: string;
  /** Fuente script para flourishes (p. ej. "Parisienne"). Opcional. */
  fontScript?: string;
  /** Radio base de tarjetas/botones, p. ej. "16px". */
  radius: string;
  /** Motivo de fondo global del hero/secciones oscuras. */
  background: BackgroundMotif;
}

export interface Cta {
  label: string;
  /** Etiqueta corta para espacios compactos (header, sticky). Cae a `label`. */
  shortLabel?: string;
  /** URL de registro o checkout. Si falta, los botones quedan deshabilitados. */
  href?: string;
  /** Texto pequeño bajo el botón, p. ej. "Sin tarjeta. Sin compromiso." */
  note?: string;
}

export interface EventInfo {
  /** Fecha/hora legible, p. ej. "Miércoles 17 de Junio · 8:00 PM EST". */
  label: string;
  /** ISO para el countdown, p. ej. "2026-06-17T20:00:00-05:00". */
  datetimeISO: string;
}

export interface Hero {
  badge: string;
  headline: string;
  highlight?: string; // parte del headline resaltada con el color de acento
  /** Subtítulo en tipografía más pequeña/delgada bajo el headline principal. Opcional. */
  subtitle?: string;
  subheadline: string;
  urgency: string;
  bonus?: string;
  /** Banner de fondo del hero (ruta en /public). Se oculta sin dato. Opcional. */
  image?: string;
  imageAlt?: string;
  /** Retrato editorial independiente del fondo para conservar identidad y recorte responsive. */
  portrait?: string;
  portraitSrcSet?: string;
  portraitAlt?: string;
}

export interface Intro {
  title: string;
  subtitle: string;
  body: string;
  highlightBlock: string;
  /** Imagen emocional (ruta en /public). Se oculta sin dato. Opcional. */
  image?: string;
  imageSrcSet?: string;
  imageAlt?: string;
}

export interface MediaLogo {
  name: string;
}

export interface Authority {
  eyebrow: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  /** Ruta a la foto en /public, p. ej. "/img/editorial/gisella-authority-editorial-v2-720.webp". Opcional. */
  photo?: string;
  photoSrcSet?: string;
  mediaEyebrow?: string;
  media: MediaLogo[];
}

export interface Pillar {
  index: string; // "01"
  /** Nombre del icono de lucide-react, p. ej. "TrendingUp". */
  icon: string;
  title: string;
  points: string[];
}

export interface Benefit {
  icon: string;
  text: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  result: string;
  /** Duración del video, p. ej. "1:24". Opcional. */
  videoLength?: string;
  /** Embed/URL del video o thumbnail. Opcional. */
  videoUrl?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Vsl {
  eyebrow: string;
  headline: string;
  /** Embed del VSL: YouTube/Vimeo/Wistia (iframe src) o mp4. */
  embedUrl: string;
  /** "iframe" para YouTube/Vimeo, "video" para mp4 directo. */
  kind: "iframe" | "video";
  poster?: string;
}

/** Formulario de registro embebido (HighLevel / LeadConnector). Opcional:
 *  si falta, la sección de cierre cae al CTA por enlace (`cta.href`). */
export interface RegistrationForm {
  /** src del iframe, p. ej. "https://api.leadconnectorhq.com/widget/form/<formId>". */
  src: string;
  /** formId = último segmento del URL del builder de HighLevel. */
  formId: string;
  /** Altura inicial en px antes de que form_embed.js la ajuste vía postMessage. */
  height?: number;
  /** Encabezado/subtítulo opcional encima del formulario. */
  heading?: string;
  subheading?: string;
}

export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    brand: string;
  };
  theme: Theme;
  /** Imagen de fondo opcional por sección, indexada por el `id` de la sección
   *  (p. ej. "pilares", "testimonios"). La renderiza Section.tsx con overlay. */
  sectionBackgrounds?: Record<string, string | SectionBackgroundConfig>;
  cta: Cta;
  /** Formulario de registro embebido. Si existe, la sección de cierre lo muestra. */
  form?: RegistrationForm;
  event: EventInfo;
  hero: Hero;
  intro?: Intro;
  vsl?: Vsl;
  authority: Authority;
  pillars: {
    eyebrow: string;
    headline: string;
    items: Pillar[];
    /** Imagen del método (ruta en /public) mostrada sobre las tarjetas. Opcional. */
    image?: string;
    imageSrcSet?: string;
    imageAlt?: string;
  };
  benefits?: {
    headline: string;
    items: Benefit[];
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    subhead?: string;
    items: Testimonial[];
    disclaimer?: string;
  };
  bonus?: {
    headline: string;
    items: Benefit[];
  };
  finalCta: {
    headline: string;
    subhead: string;
    body: string;
    /** Imagen de fondo sutil (ruta en /public), p. ej. motivo de tiempo. Opcional. */
    image?: string;
    /** Fotografía editorial independiente para el cierre. */
    photo?: string;
    photoSrcSet?: string;
  };
  faq?: {
    headline: string;
    items: Faq[];
  };
  footer: {
    legal: string;
    credit?: string;
  };
}
