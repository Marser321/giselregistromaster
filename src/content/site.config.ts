import type { SiteConfig } from "./types";

/**
 * FUENTE ÚNICA DE VERDAD.
 * Editar este archivo cambia toda la landing (copy + oferta + theme).
 *
 * Masterclass: Dra. Gisella Arias-Olson · Método Ser Uno.
 * Copy entregado por AD Media Solution (textual, no se reescribe).
 *
 * ⚠️ Pendientes externos antes de publicar:
 *   1. cta.href           → pegar el link real de registro (GHL / Kajabi)
 *   2. event.datetimeISO  → confirmar que coincide con la fecha/hora final
 *   3. vsl (opcional)     → activar solo cuando exista el video de invitación
 *
 * Copy original intacto. Theme = identidad oficial de marca (navy + dorado + turquesa).
 */
export const siteConfig: SiteConfig = {
  // ===================== META (SEO) =====================
  meta: {
    title: "Masterclass gratuita con la Dra. Gisella Arias · Método Ser Uno",
    description:
      "Masterclass en vivo y gratuita: cómo salvar tu matrimonio en 12 semanas sin que tu esposo lo sepa, con el Método Ser Uno de la Dra. Gisella Arias-Olson.",
    brand: "Dra. Gisella Arias-Olson · Ser Uno",
  },

  // ===================== THEME =====================
  // Identidad oficial Gisella Arias-Olson: navy #1D2D43 + dorado #D59647 +
  // turquesa #46B3D1. Display Playfair Display · sans Metropolis (auto-hospedada)
  // · script Parisienne · fondo de marca "circles".
  theme: {
    name: "gisella",
    colors: {
      background: "215 45% 8%",
      foreground: "210 25% 96%",
      muted: "215 30% 14%",
      mutedForeground: "210 12% 66%",
      card: "215 35% 11%",
      cardForeground: "210 25% 96%",
      border: "214 28% 22%",
      accent: "33 63% 56%", // dorado bronce #D59647
      accentForeground: "215 45% 8%",
      ring: "33 63% 56%",
      accent2: "193 60% 55%", // turquesa #46B3D1
    },
    fontDisplay: "Playfair Display",
    fontSans: "Metropolis",
    fontScript: "Parisienne",
    radius: "18px",
    background: "circles",
  },

  // ===================== FONDOS POR SECCIÓN =====================
  // Imagen de fondo on-brand por sección (clave = id de la sección). Placeholders
  // tratados desde los FONDOS de marca; reemplazar por versiones IA siguiendo
  // referencias/imagenes-prompts.md (mismas rutas). Render con overlay en Section.tsx.
  sectionBackgrounds: {
    intro: {
      src: "/img/bg/intro.jpg",
      position: "center",
      opacity: 0.16,
      tone: "ivory",
    },
    beneficios: {
      src: "/img/bg/beneficios.jpg",
      position: "center",
      opacity: 0.42,
      tone: "dark",
    },
    pilares: {
      src: "/img/editorial/pillars-atmosphere.webp",
      position: "left bottom",
      opacity: 0.56,
      tone: "dark",
    },
    instructor: {
      src: "/img/bg/instructor.jpg",
      position: "center",
      opacity: 0.16,
      tone: "ivory",
    },
    testimonios: {
      src: "/img/bg/testimonios.jpg",
      position: "center",
      opacity: 0.44,
      tone: "dark",
    },
    faq: {
      src: "/img/bg/faq.jpg",
      position: "center",
      opacity: 0.14,
      tone: "ivory",
    },
  },

  // ===================== CTA =====================
  cta: {
    label: "✨ Sí quiero mi lugar en la masterclass",
    // Pendiente externo: pegar aquí el link público real del formulario de registro.
    // href: "https://tu-plataforma.com/registro-masterclass",
    note: "Registro pendiente de activar · Gratuita · 60 minutos · Sin compromiso",
  },

  // ===================== EVENTO =====================
  event: {
    // Derivado del ISO actual. Confirmar con el cliente antes de publicar.
    label: "Jueves, 16 de julio · 9:00 PM EDT · 8:00 PM COL · 7:00 PM MX",
    datetimeISO: "2026-07-16T20:00:00-05:00",
  },

  // ===================== HERO =====================
  hero: {
    badge: "MASTERCLASS EN VIVO Y GRATUITA",
    headline: "Cómo salvar tu matrimonio en 12 semanas,",
    highlight: "sin que tu esposo lo sepa",
    subheadline:
      "Masterclass en vivo y gratuita con la Dra. Gisella Arias-Olson — Psicóloga Clínica, especialista en Neurociencia y Terapia de Familia. Aunque ya hayas probado terapia y no haya funcionado.",
    urgency: "Cupos limitados",
    // Banner del header (placeholder tratado; reemplazar por la versión IA
    // — ver referencias/imagenes-prompts.md, misma ruta).
    image: "/img/editorial/hero-atmosphere.webp",
    imageAlt: "Dra. Gisella Arias-Olson",
    portrait: "/img/editorial/gisella-hero-720.webp",
    portraitSrcSet:
      "/img/editorial/gisella-hero-720.webp 720w, /img/editorial/gisella-hero-1200.webp 1200w",
    portraitAlt: "Dra. Gisella Arias-Olson",
  },

  // ===================== INTRO (gancho emocional) =====================
  intro: {
    lines: [
      "¿Cuántas veces has sentido que, aunque estén en la misma habitación, él está completamente lejos?",
      "¿Cuántas veces has hablado… y sentido que no te escucha?",
      "Si eres una mujer exitosa, profesional, que sostiene todo con fuerza —y por dentro sientes que tu matrimonio se está apagando— esta masterclass es para ti.",
    ],
    closing:
      "No necesitas que él venga. No necesitas que él cambie primero. Solo necesitas 60 minutos y la disposición de mirar hacia adentro.",
    image: "/img/editorial/gisella-empathy-720.webp",
    imageSrcSet:
      "/img/editorial/gisella-empathy-720.webp 720w, /img/editorial/gisella-empathy-1200.webp 1200w",
    imageAlt: "Dra. Gisella Arias-Olson en un gesto de introspección y calma",
  },

  // ===================== VSL (video de invitación) =====================
  // OPCIONAL — desactivado para que la página cargue limpia. Para activarlo,
  // descomenta este bloque y pega el embed real (YouTube/Vimeo) de la Dra.
  //
  // vsl: {
  //   eyebrow: "Antes de la masterclass, mira esto",
  //   headline: "Un mensaje de la Dra. Gisella para ti",
  //   embedUrl: "https://www.youtube.com/embed/ID_DEL_VIDEO",
  //   kind: "iframe",
  // },

  // ===================== AUTORIDAD (Quién es Gisella) =====================
  authority: {
    eyebrow: "Conoce a tu guía",
    name: "Dra. Gisella Arias-Olson",
    title: "Psicóloga Clínica · Especialista en Neurociencia y Terapia de Familia",
    bio: "Con más de 30 años acompañando a familias, parejas y mujeres en crisis, la Dra. Gisella desarrolló el Método Ser Uno: un sistema de inteligencia relacional que combina neurociencia, psicología clínica y terapia de familia para transformar el matrimonio desde adentro hacia afuera. Ha visto, una y otra vez, que la transformación no empieza cuando él cambia: empieza cuando tú decides dejar de pedir perdón por SER tú.",
    credentials: [
      "Psicóloga Clínica · Especialista en Neurociencia y Terapia de Familia",
      "+30 años acompañando familias, parejas y mujeres en crisis",
      "Creadora del Método Ser Uno, basado en neurociencia",
      "Transformaciones reales: sin devoluciones ni abandonos a mitad del camino",
    ],
    // Placeholder tratado (grado navy + destellos). Reemplazar por la versión IA
    // generada con referencias/imagenes-prompts.md (misma ruta).
    photo: "/img/editorial/gisella-authority-720.webp",
    photoSrcSet:
      "/img/editorial/gisella-authority-720.webp 720w, /img/editorial/gisella-authority-1200.webp 1200w",
    media: [],
  },

  // ===================== PILARES (Qué vas a descubrir) =====================
  pillars: {
    eyebrow: "Lo que vas a descubrir en esta sesión",
    headline: "Lo que esta masterclass va a despertar en ti",
    items: [
      {
        index: "01",
        icon: "Brain",
        title: "Por qué estás en modo supervivencia",
        points: [
          'Cómo tu cerebro ha confundido "ser fuerte" con desconectarte emocionalmente de tu esposo y de ti misma.',
        ],
      },
      {
        index: "02",
        icon: "Megaphone",
        title: "Las voces que no son tuyas",
        points: [
          "Cómo creencias que adoptaste en la infancia, en tu familia o en tu cultura están saboteando tu forma de amar hoy — y cómo reprogramarlas.",
        ],
      },
      {
        index: "03",
        icon: "Zap",
        title: "El desequilibrio que nadie te explicó",
        points: [
          "Por qué la misma energía que te hizo exitosa en la vida es la que está fracturando tu vínculo, y cómo equilibrarla sin dejar de ser quien eres.",
        ],
      },
      {
        index: "04",
        icon: "Heart",
        title: "El cerebro de pareja",
        points: [
          "Cómo activar la reconexión emocional con tu esposo desde tu SER, sin confrontaciones, sin ruegos, sin perder tu identidad.",
        ],
      },
      {
        index: "05",
        icon: "Sparkles",
        title: "El método Ser Uno",
        points: [
          "El sistema de inteligencia relacional basado en neurociencia que ya ha transformado matrimonios de mujeres como tú, incluso cuando el esposo no participó.",
        ],
      },
    ],
    image: "/img/editorial/gisella-method-720.webp",
    imageSrcSet:
      "/img/editorial/gisella-method-720.webp 720w, /img/editorial/gisella-method-1200.webp 1200w",
    imageAlt: "Dra. Gisella sosteniendo un corazón dorado — el Método Ser Uno",
  },

  // ===================== BENEFITS (Para quién es esto) =====================
  benefits: {
    headline: "Esta masterclass es para ti si:",
    items: [
      {
        icon: "CheckCircle2",
        text: "Llevas meses (o años) en modo supervivencia dentro de tu relación.",
      },
      {
        icon: "CheckCircle2",
        text: "Eres fuerte en todo… pero en tu matrimonio te sientes sola.",
      },
      {
        icon: "CheckCircle2",
        text: "Has intentado hablar con él y las conversaciones siempre terminan igual.",
      },
      {
        icon: "CheckCircle2",
        text: "Sientes que lo estás dando todo y que nada cambia.",
      },
      {
        icon: "CheckCircle2",
        text: "Has pensado en terapia de pareja pero él no quiere ir — o ya la intentaron y no funcionó.",
      },
      {
        icon: "CheckCircle2",
        text: "Por dentro sabes que todavía quieres salvar esta relación, pero ya no sabes cómo.",
      },
    ],
  },

  // ===================== TESTIMONIOS =====================
  testimonials: {
    eyebrow: "Lo que dicen las mujeres que ya vivieron este proceso",
    headline: "Historias reales del programa Ser Uno",
    subhead:
      "Mujeres que dejaron el modo supervivencia y reconstruyeron su vínculo desde adentro.",
    // Testimonios reales (extractos textuales de clientas del programa Ser Uno).
    // Para añadir video: agrega videoUrl (embed YouTube/Vimeo) y videoLength.
    items: [
      {
        name: "Yolanda",
        location: "Programa Ser Uno",
        quote:
          "Entrar a Ser Uno fue como prender la luz en un cuarto que llevaba años oscuro. Hoy no reacciono desde el enojo ni desde el miedo. No sé qué pasará con mi matrimonio, pero sé que con o sin él… estaré bien. Porque me encontré.",
        result: "Me encontré a mí misma",
      },
      {
        name: "Ingrid",
        location: "Programa Ser Uno",
        quote:
          "Llegué a Ser Uno confundida, frustrada, llena de heridas. En el proceso aprendí que no se trata de cambiar al otro, sino de reconectar conmigo. Hoy soy Ingrid. Con límites, con claridad, con una paz que nunca antes había conocido.",
        result: "Paz, límites y claridad",
      },
      {
        name: "María",
        location: "Programa Ser Uno",
        quote:
          "Cuando llegué al programa me sentía devastada, sin rumbo. Pero en las sesiones con Gisella volví a sentir esperanza. Me reencontré. Aunque mi esposo haya decidido terminar, yo tengo las herramientas para estar bien.",
        result: "Volví a sentir esperanza",
      },
      {
        name: "Ana María",
        location: "Programa Ser Uno",
        quote:
          "Cuando encontré a Gisella, sentí que Dios me estaba respondiendo. Su manera de unir fe, neurociencia y emociones fue el puente que necesitaba. Hoy no me pierdo en el rol de esposa o madre. Hoy soy yo.",
        result: "Hoy soy yo",
      },
      {
        name: "Anna R.",
        location: "Puerto Vallarta, MX",
        quote:
          "Me siento más segura de mí misma, con más ganas de continuar trabajando. Esto significa algo fabuloso.",
        result: "Más segura de mí misma",
      },
      {
        name: "Alma V.",
        location: "Minnesota, USA",
        quote:
          "Gracias a las sesiones con la Doctora Gisella he logrado alcanzar metas que antes parecían inalcanzables. Su empatía y el apoyo que recibí hicieron una gran diferencia en mi proceso de crecimiento.",
        result: "Metas que parecían inalcanzables",
      },
      {
        name: "Annyb R.",
        location: "Perú",
        quote:
          "Siendo una mamá soltera, extranjera y sin familia, su apoyo y tácticas han sido efectivas para mi crecimiento personal, profesional y sobre todo como mamá. ¡Recomiendo 100% a Gisella!",
        result: "Crecí como persona y como mamá",
      },
      {
        name: "Triny T.",
        location: "Guadalajara, MX",
        quote:
          "Las herramientas que me daba me enseñaron a ver los desafíos de una manera correcta. Me enseñó que en la vida siempre hay una oportunidad para comenzar de nuevo.",
        result: "Una oportunidad para empezar de nuevo",
      },
    ],
    disclaimer:
      "Los testimonios reflejan experiencias reales de clientas del programa Ser Uno. Cada proceso es individual.",
  },

  // ===================== FAQ =====================
  faq: {
    headline: "Preguntas frecuentes",
    items: [
      {
        q: "¿Necesito que mi esposo participe o que lo sepa?",
        a: "No. La masterclass está diseñada para que la transformación empiece en ti. No necesitas que él venga, ni que cambie primero.",
      },
      {
        q: "¿Y si ya probamos terapia de pareja y no funcionó?",
        a: "Esta sesión parte de un enfoque distinto: neurociencia aplicada al vínculo y el Método Ser Uno. Funciona incluso cuando la terapia tradicional no dio resultados — y aunque él no participe.",
      },
      {
        q: "¿Tiene algún costo?",
        a: "No. Es 100% gratuita y en vivo por Zoom. Solo necesitas registrarte para reservar tu cupo.",
      },
      {
        q: "¿Cuánto dura y quedará grabada?",
        a: "Dura 60 minutos e incluye espacio para preguntas en vivo. Te recomendamos asistir en directo: los cupos son limitados.",
      },
    ],
  },

  // ===================== CIERRE (urgencia / identidad) =====================
  finalCta: {
    subhead: "Antes de cerrar esta página",
    headline: "Tu matrimonio no tiene que terminar. Pero la espera, sí.",
    body: "Llevas demasiado tiempo esperando que algo cambie: que él lo entienda, el momento correcto, que las cosas mejoren solas. Pero algo te trajo hasta aquí hoy, y no es casualidad. Esta masterclass no te va a pedir que te rindas ni que aguantes más: te va a mostrar cómo activar, desde tu SER, el tipo de amor que ya vive dentro de ti.",
    image: "/img/editorial/final-atmosphere.webp",
    photo: "/img/editorial/gisella-time-1280.webp",
    photoSrcSet:
      "/img/editorial/gisella-time-1280.webp 1280w, /img/editorial/gisella-time-1920.webp 1920w",
  },

  // ===================== FOOTER =====================
  footer: {
    legal:
      "© 2026 Dra. Gisella Arias-Olson · Programa Ser Uno. Todos los derechos reservados.",
    credit: "Copy y sitio por AD Media Solution",
  },
};

export default siteConfig;
