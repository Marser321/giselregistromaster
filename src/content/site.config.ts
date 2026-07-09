import type { SiteConfig } from "./types";

/**
 * FUENTE ÚNICA DE VERDAD.
 * Editar este archivo cambia toda la landing (copy + oferta + theme).
 *
 * Masterclass: Psicóloga Gisella Arias Olson · Método Ser Uno.
 * Copy entregado por AD Media Solution (textual, no se reescribe).
 *
 * Estado del registro: RESUELTO — el form real de HighLevel va embebido en el popup
 * (ver `form` + CtaButton/FormModal); `cta.href="#reservar"` es solo el ancla de respaldo.
 * Imágenes: set editorial v2 DEFINITIVO en /img/editorial (ya no son placeholders).
 *
 * Pendientes reales (detalle en PENDIENTES.md, raíz del proyecto):
 *   • event.datetimeISO             → confirmar fecha/hora final con el cliente
 *   • vsl (opcional)                → activar cuando exista el video de invitación
 *   • testimonials[].videoUrl (opc) → cuando los MP4 estén en YouTube/Vimeo
 *   • authority.media (opcional)    → logos de medios si los hay
 *
 * Copy original intacto. Theme = identidad oficial de marca (navy + dorado + turquesa).
 */
export const siteConfig: SiteConfig = {
  // ===================== META (SEO) =====================
  meta: {
    title: "Masterclass gratuita con la Psicóloga Gisella Arias Olson · Método Ser Uno",
    description:
      "Masterclass en vivo y gratuita: cómo transformar tu matrimonio sin esperar a que él cambie, con el Método Ser Uno de la Psicóloga Gisella Arias Olson.",
    brand: "Psicóloga Gisella Arias Olson · SER UNO",
  },

  // ===================== THEME =====================
  // Identidad oficial Gisella Arias Olson: navy #1D2D43 + dorado #D59647 +
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
  // Imagen de fondo on-brand por sección (clave = id de la sección). Set editorial v2
  // DEFINITIVO (ya no son placeholders); ver referencias/imagenes-prompts.md para el
  // contrato de nombres/rutas. Render con overlay en Section.tsx.
  sectionBackgrounds: {
    intro: {
      src: "/img/editorial/intro-editorial-v2.webp",
      position: "center",
      opacity: 0.3,
      tone: "ivory",
    },
    beneficios: {
      src: "/img/editorial/benefits-editorial-v2.webp",
      position: "center",
      // Bajo a propósito: el motivo Circles por código es la base y la imagen
      // editorial v2 suma textura encima. Subir opacity si se quiere que domine.
      opacity: 0.36,
      tone: "dark",
    },
    pilares: {
      src: "/img/editorial/pillars-atmosphere.webp",
      position: "left bottom",
      opacity: 0.3,
      tone: "dark",
    },
    instructor: {
      src: "/img/editorial/authority-editorial-v2.webp",
      position: "left center",
      opacity: 0.3,
      tone: "ivory",
    },
    testimonios: {
      src: "/img/editorial/testimonials-editorial-v2.webp",
      position: "center",
      opacity: 0.34,
      tone: "dark",
    },
    faq: {
      src: "/img/editorial/faq-editorial-v2.webp",
      position: "left center",
      opacity: 0.24,
      tone: "ivory",
    },
  },

  // ===================== CTA =====================
  // Todos los botones (Hero, StickyCta, FinalCta, Vsl) abren el popup de registro
  // (ver CtaButton + FormModal). `href` queda como ancla de respaldo sin-JS hacia
  // la sección de cierre (#reservar), que también dispara el popup.
  cta: {
    label: "✨ Sí quiero mi lugar en la masterclass",
    shortLabel: "Reservar mi lugar",
    href: "#reservar",
    note: "Gratuita · 60 minutos · Sin compromiso",
  },

  // ===================== FORMULARIO DE REGISTRO =====================
  // Form de HighLevel (white-label sobre el dominio de marca app.mentesanahoy.com).
  // Se muestra dentro del popup refinado (FormModal): el iframe va en layout INLINE
  // y el marco/estilo lo controla el código. El script form_embed.js se deriva del
  // mismo origen que `src` y ajusta la altura vía postMessage.
  form: {
    src: "https://app.mentesanahoy.com/widget/form/7DMYdErV9zBFMDqFc1XP",
    formId: "7DMYdErV9zBFMDqFc1XP",
    height: 640,
    heading: "Reserva tu lugar en la masterclass",
    subheading:
      "Completa tus datos y recibe el acceso. Cupos limitados · 100% gratuita.",
  },

  // ===================== EVENTO =====================
  event: {
    // Derivado del ISO actual. Confirmar con el cliente antes de publicar.
    label: "Martes, 21 de julio · 7:00 PM (Hora Miami)",
    datetimeISO: "2026-07-21T19:00:00-04:00",
  },

  // ===================== HERO =====================
  hero: {
    badge: "MASTERCLASS EN VIVO Y GRATUITA",
    headline: "Cómo transformar tu matrimonio",
    highlight: "sin esperar a que él cambie",
    subtitle: "Rompiendo el divorcio silencioso.",
    subheadline:
      "Incluso si ya has probado terapia y todavía sientes distancia en tu matrimonio.",
    urgency: "Cupos limitados",
    // Banner atmosférico del header (set editorial v2 definitivo).
    image: "/img/editorial/hero-atmosphere.webp",
    imageAlt: "Gisella Arias Olson",
    portrait: "/img/editorial/gisella-hero-sabio-20260709-720.webp",
    portraitSrcSet:
      "/img/editorial/gisella-hero-sabio-20260709-720.webp 720w, /img/editorial/gisella-hero-sabio-20260709-1200.webp 1200w",
    portraitAlt: "Psicóloga Gisella Arias Olson en un gesto de escucha y reflexión",
  },

  // ===================== INTRO (gancho emocional) =====================
  intro: {
    title: "¿Cuántas noches has estado a su lado y, aun así, te has sentido completamente sola?",
    subtitle: "No porque no lo ames, sino porque ya no sabes cómo llegar a él sin perseguir, discutir o callarte.",
    body: "Eres capaz, profesional y acostumbrada a sostener mucho. Pero esa misma fuerza te ha dejado cargando una distancia que nadie más parece ver.",
    highlightBlock: "No necesitas hacer más. Necesitas dejar de salvar tu matrimonio desde la urgencia, el control o el sacrificio silencioso.",
    image: "/img/editorial/gisella-empathy-calm-20260709-720.webp",
    imageSrcSet:
      "/img/editorial/gisella-empathy-calm-20260709-720.webp 720w, /img/editorial/gisella-empathy-calm-20260709-1200.webp 1200w",
    imageAlt: "Psicóloga Gisella Arias Olson en un momento de calma junto al mar",
  },

  // ===================== VSL (video de invitación) =====================
  // OPCIONAL — desactivado para que la página cargue limpia. Para activarlo,
  // descomenta este bloque y pega el embed real (YouTube/Vimeo) de Gisella.
  //
  // vsl: {
  //   eyebrow: "Antes de la masterclass, mira esto",
  //   headline: "Un mensaje de Gisella para ti",
  //   embedUrl: "https://www.youtube.com/embed/ID_DEL_VIDEO",
  //   kind: "iframe",
  // },

  // ===================== AUTORIDAD (Quién es Gisella) =====================
  authority: {
    eyebrow: "Conoce a tu guía",
    name: "Psicóloga Gisella Arias Olson",
    title: "PSICÓLOGA CLÍNICA · ESPECIALISTA EN TERAPIA FAMILIAR, TERAPIA SISTÉMICA, NEUROCIENCIA Y TEOLOGÍA",
    bio: "Con más de 27 años acompañando a familias, parejas y mujeres en crisis, la Psicóloga Gisella Arias Olson desarrolló el Método SER UNO: un enfoque de inteligencia relacional que integra neurociencia, psicología clínica y terapia familiar para ayudar a las mujeres a comprender la dinámica de su matrimonio y comenzar a transformarla desde adentro hacia afuera. Su experiencia le ha mostrado, una y otra vez, que el cambio no empieza cuando él cambia, sino cuando ella recupera claridad, seguridad emocional y presencia.",
    credentials: [
      "Psicóloga Clínica · Especialista en Terapia Familiar, Terapia Sistémica, Neurociencia y Teología",
      "+27 años acompañando familias, parejas y mujeres en crisis",
      "Creadora del Método SER UNO, un enfoque de inteligencia relacional basado en neurociencia",
      "Acompañamiento clínico, humano y orientado a transformación real",
    ],
    // Retrato editorial v2 definitivo (Gisella real sobre navy + anillo dorado).
    photo: "/img/editorial/gisella-authority-desk-20260709-720.webp",
    photoSrcSet:
      "/img/editorial/gisella-authority-desk-20260709-720.webp 720w, /img/editorial/gisella-authority-desk-20260709-1200.webp 1200w",
    media: [],
  },

  // ===================== PILARES (Qué vas a descubrir) =====================
  pillars: {
    eyebrow: "LO QUE DESCUBRIRÁS EN ESTA MASTERCLASS",
    headline: "La vía para salir de la supervivencia emocional en tu matrimonio.",
    items: [
      {
        index: "01",
        icon: "Brain",
        title: "Por qué estás en modo supervivencia",
        points: [
          "Aprendiste a ser fuerte para protegerte y cómo eso puede estar desconectándote emocionalmente de tu esposo y de ti misma.",
        ],
      },
      {
        index: "02",
        icon: "Megaphone",
        title: "Las voces que no son tuyas",
        points: [
          "Las creencias que aprendiste en tu historia, tu familia o tu cultura y que hoy influyen en tu forma de amar.",
        ],
      },
      {
        index: "03",
        icon: "Zap",
        title: "El desequilibrio que nadie te explicó",
        points: [
          "Por qué las fortalezas que te ayudan a sostener tu vida pueden dejarte cargando sola la relación.",
        ],
      },
      {
        index: "04",
        icon: "Heart",
        title: "El cerebro de pareja",
        points: [
          "La dinámica emocional que se activa entre ustedes y la vía para empezar a recuperar conexión sin perseguir, rogar ni perder tu identidad.",
        ],
      },
      {
        index: "05",
        icon: "Sparkles",
        title: "El método SER UNO",
        points: [
          "El mapa de inteligencia relacional basado en neurociencia que te ayudará a comprender por dónde comenzar, incluso si él todavía no está listo para participar.",
        ],
      },
    ],
    image: "/img/editorial/gisella-method-guide-20260709-720.webp",
    imageSrcSet:
      "/img/editorial/gisella-method-guide-20260709-720.webp 720w, /img/editorial/gisella-method-guide-20260709-1200.webp 1200w",
    imageAlt: "Psicóloga Gisella Arias Olson trabajando con claridad y presencia",
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
        text: "Intentas hablar con él, pero todo termina igual.",
      },
      {
        icon: "CheckCircle2",
        text: "Sientes que das mucho y nada cambia.",
      },
      {
        icon: "CheckCircle2",
        text: "Has pensado en terapia de pareja pero él no quiere ir — o ya la intentaron y no funcionó.",
      },
      {
        icon: "CheckCircle2",
        text: "Todavía quieres salvar tu relación, pero no sabes cómo sin perderte a ti misma.",
      },
    ],
  },

  // ===================== TESTIMONIOS =====================
  testimonials: {
    eyebrow: "LO QUE DICEN MUJERES QUE HAN TRABAJADO CON GISELLA",
    headline: "Historias reales de mujeres que comenzaron a volver a sí mismas",
    subhead:
      "Mujeres que encontraron más claridad, seguridad emocional y una nueva forma de relacionarse consigo mismas y con su matrimonio.",
    // Testimonios reales (extractos textuales de clientas del programa Ser Uno).
    // Para añadir video: agrega videoUrl (embed YouTube/Vimeo) y videoLength.
    items: [
      {
        name: "Yolanda",
        location: "Acompañamiento individual",
        quote:
          "Entrar a Ser Uno fue como prender la luz en un cuarto que llevaba años oscuro. Hoy no reacciono desde el enojo ni desde el miedo. No sé qué pasará con mi matrimonio, pero sé que con o sin él… estaré bien. Porque me encontré.",
        result: "Me encontré a mí misma",
      },
      {
        name: "Ingrid",
        location: "Acompañamiento individual",
        quote:
          "Llegué a Ser Uno confundida, frustrada, llena de heridas. En el proceso aprendí que no se trata de cambiar al otro, sino de reconectar conmigo. Hoy soy Ingrid. Con límites, con claridad, con una paz que nunca antes había conocido.",
        result: "Paz, límites y claridad",
      },
      {
        name: "María",
        location: "Acompañamiento individual",
        quote:
          "Cuando llegué al programa me sentía devastada, sin rumbo. Pero en las sesiones con Gisella volví a sentir esperanza. Me reencontré. Aunque mi esposo haya decidido terminar, yo tengo las herramientas para estar bien.",
        result: "Volví a sentir esperanza",
      },
      {
        name: "Ana María",
        location: "Acompañamiento individual",
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
          "Gracias a las sesiones con Gisella he logrado alcanzar metas que antes parecían inalcanzables. Su empatía y el apoyo que recibí hicieron una gran diferencia en mi proceso de crecimiento.",
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
        q: "¿Necesito que mi esposo participe o saber que asistiré?",
        a: "No. Esta es una masterclass exclusiva para mujeres. Tu esposo no participa ni necesita estar presente. Puedes asistir tú sola para comprender la dinámica de tu matrimonio y empezar a trabajar en lo que sí está en tus manos, sin esperar a que él cambie primero.",
      },
      {
        q: "¿Y si ya probamos terapia de pareja y no funcionó?",
        a: "Esta masterclass presenta un enfoque distinto: neurociencia aplicada al vínculo y el Método SER UNO. Te ayudará a comprender por qué algunas dinámicas se repiten y por dónde puedes comenzar, incluso si él no participa.",
      },
      {
        q: "¿Tiene algún costo?",
        a: "No. Es 100% gratuita y en vivo por Zoom. Solo necesitas registrarte para reservar tu cupo.",
      },
      {
        q: "¿Cuánto dura y quedará grabada?",
        a: "La masterclass dura aproximadamente 60 minutos. Recomendamos asistir en vivo para participar del espacio de preguntas al final. Sin embargo, si te registras y no puedes conectarte a tiempo, enviaremos una grabación de acceso exclusivo que estará disponible únicamente por 24 horas después del evento.",
      },
    ],
  },

  // ===================== CIERRE (urgencia / identidad) =====================
  finalCta: {
    subhead: "ANTES DE CERRAR ESTA PÁGINA",
    headline: "Tu matrimonio no tiene que seguir sobreviviendo. Pero la espera, sí.",
    body: "Llevas demasiado tiempo esperando que algo cambie: que él lo entienda, que llegue el momento correcto o que las cosas mejoren solas. Pero algo te trajo hasta aquí hoy, y no es casualidad. Esta masterclass no te va a pedir que te rindas ni que aguantes más. Te mostrará una nueva forma de comprender la dinámica que están viviendo y el primer paso para dejar de sostener tu matrimonio desde la urgencia, el control o el sacrificio silencioso.",
    image: "/img/editorial/final-atmosphere.webp",
    photo: "/img/editorial/gisella-closing-sofa-20260709-720.webp",
    photoSrcSet:
      "/img/editorial/gisella-closing-sofa-20260709-720.webp 720w, /img/editorial/gisella-closing-sofa-20260709-1200.webp 1200w",
  },

  // ===================== FOOTER =====================
  footer: {
    legal:
      "© 2026 Psicóloga Gisella Arias Olson · Programa SER UNO. Todos los derechos reservados.",
    credit: "Copy y sitio por AD Media Solution",
  },
};

export default siteConfig;
