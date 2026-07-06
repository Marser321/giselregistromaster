# Regeneración editorial — prompts, variantes y selección

Fecha: 2026-07-01  
Alcance: masterclass React `masterclass-ser-uno`  
Método: generación integrada con referencias fotográficas reales de Gisella.

## Resultado

- 8 fondos × 2 candidatos = 16 opciones.
- 5 retratos × 2 candidatos = 10 opciones.
- 1 banner social × 2 composiciones = 2 opciones.
- Total: 28 opciones.
- Los originales se conservan en `backgrounds/`, `portraits/` y `social/`.
- Los 13 ganadores de generación se conservan sin compresión en `masters/`.

## Selección publicada

| Pieza | Candidatos | Ganador | Ruta activa |
|---|---|---|---|
| Fondo hero | `hero-atmosphere-a.png`, `hero-atmosphere-b.png` | B | `public/img/editorial/hero-atmosphere.webp` |
| Fondo introducción | `intro-editorial-v2-a.png`, `intro-editorial-v2-b.png` | B | `public/img/editorial/intro-editorial-v2.webp` |
| Fondo beneficios | `benefits-editorial-v2-a.png`, `benefits-editorial-v2-b.png` | A | `public/img/editorial/benefits-editorial-v2.webp` |
| Fondo pilares | `pillars-atmosphere-a.png`, `pillars-atmosphere-b.png` | A | `public/img/editorial/pillars-atmosphere.webp` |
| Fondo autoridad | `authority-editorial-v2-a.png`, `authority-editorial-v2-b.png` | A | `public/img/editorial/authority-editorial-v2.webp` |
| Fondo testimonios | `testimonials-editorial-v2-a.png`, `testimonials-editorial-v2-b.png` | A | `public/img/editorial/testimonials-editorial-v2.webp` |
| Fondo FAQ | `faq-editorial-v2-a.png`, `faq-editorial-v2-b.png` | A | `public/img/editorial/faq-editorial-v2.webp` |
| Fondo cierre | `final-atmosphere-a.png`, `final-atmosphere-b.png` | B | `public/img/editorial/final-atmosphere.webp` |
| Retrato hero · `Gisela-1` | `gisella-hero-a.png`, `gisella-hero-b.png` | B | `gisella-hero-editorial-v2-{720,1200}.webp` |
| Retrato empatía · `Gisela-8` | `gisella-empathy-a.png`, `gisella-empathy-b.png` | B | `gisella-empathy-editorial-v2-{720,1200}.webp` |
| Retrato autoridad · `Gisela-13` | `gisella-authority-a.png`, `gisella-authority-b.png` | B | `gisella-authority-editorial-v2-{720,1200}.webp` |
| Retrato método · `Gisela-11` | `gisella-method-a.png`, `gisella-method-b.png` | A | `gisella-method-editorial-v2-{720,1200}.webp` |
| Retrato cierre · `Gisela-18` | `gisella-closing-a.png`, `gisella-closing-b.png` | A | `gisella-closing-editorial-v2-{720,1200}.webp` |
| Banner social | `hero-banner-a.jpg`, `hero-banner-b.jpg` | B | `public/img/hero-banner.jpg` |

## Prompts finales de fondos

Base común: imagen 16:9 sin personas, texto, logotipos ni marcas de agua; paleta navy, turquesa y dorado bronce; espacio negativo de bajo contraste; acabado editorial premium.

1. **Hero.** Fondo cinematográfico navy profundo con velos de seda turquesa a la derecha, anillos concéntricos dorados muy finos y pocos destellos de cuatro puntas. Mantener izquierda y centro oscuros y tranquilos para el titular.
2. **Introducción.** Superficie marfil cálida de papel y lino, luz natural lateral muy suave, grano fino y formas orgánicas dorado champaña casi imperceptibles. Centro limpio para texto navy.
3. **Beneficios.** Composición gráfica navy ordenada, retícula sutil, monograma circular abstracto apenas visible, pequeñas señales doradas y profundidad turquesa periférica. Evitar contraste detrás de las tarjetas.
4. **Pilares.** Fondo navy estructurado con anillos dorados naciendo desde una esquina y un velo turquesa suave en el extremo opuesto; ritmo gráfico claro y amplia zona calmada.
5. **Autoridad.** Fondo marfil editorial de estudio, textura de yeso/papel fino, ventana difusa y líneas arquitectónicas champaña muy suaves. Elegante y compatible con texto navy.
6. **Testimonios.** Atmósfera navy cálida y confiable, profundidad turquesa tenue, halo dorado muy bajo y destellos mínimos en los márgenes. Centro oscuro y silencioso.
7. **FAQ.** Superficie marfil casi minimalista, papel cálido, sombra lineal muy tenue y detalle dorado periférico. Máxima limpieza alrededor de preguntas y respuestas.
8. **Cierre.** Fondo navy emocional y sereno, seda turquesa en un borde, anillos dorados envolventes y luz cálida contenida; sensación de decisión y esperanza, con área oscura para CTA.

En cada pieza, el candidato A explora una solución más gráfica y el B una solución más fotográfica/editorial.

## Prompts finales de retratos

Base común: editar la fotografía real adjunta; preservar identidad exacta, edad, rostro, cuerpo, ropa, manos, joyas y proporciones; modificar principalmente fondo, iluminación y color; piel natural; lente editorial 85 mm; sin texto ni logotipos.

1. **Hero · `Gisela-1`.** Medio cuerpo, brazos cruzados y sonrisa cálida; integrar en estudio navy con seda azul, anillos dorados discretos, luz suave frontal y borde turquesa. Recorte vertical 4:5.
2. **Empatía · `Gisela-8`.** Mantener el gesto íntimo con manos sobre el pecho y ojos cerrados; fondo marfil cálido de estudio, ventana difusa y sombra orgánica suave. Humano, sereno y natural. 4:5.
3. **Autoridad · `Gisela-13`.** Mantener pose sentada y gesto profesional; superficie marfil arquitectónica, luz natural lateral y espacio negativo limpio. Autoridad cercana, sin rigidez. 4:5.
4. **Método · `Gisela-11`.** Mantener pose, manos y el corazón dorado real sin sustituirlo ni rediseñarlo; fondo navy/turquesa, halo dorado contenido y luz dirigida al corazón. 4:5.
5. **Cierre · `Gisela-18`.** Crear un retrato limpio, humano y esperanzado a partir de la persona real; fondo navy con seda turquesa y anillo dorado sutil; eliminar cualquier reloj, busto, pedestal o utilería. 4:5.

Los candidatos A y B variaron fondo, dirección de luz y densidad gráfica, no la intención de identidad.

## Banner social

Composición determinista 2400×1200 con el retrato ganador del hero: fondo navy/turquesa, zona de texto oscura a la izquierda y retrato a la derecha. El copy se aplicó después de la generación, con Playfair Display y Metropolis, para evitar texto sintético.

Copy publicado:

> MASTERCLASS GRATUITA  
> Cómo salvar tu matrimonio  
> en 12 semanas,  
> sin que tu esposo lo sepa  
> CON LA DRA. GISELLA ARIAS-OLSON

## Criterios de decisión

Identidad, anatomía, naturalidad, coherencia de luz, limpieza del recorte, compatibilidad con el copy y desempeño dentro del layout. Los fondos activos se exportaron a 1920×1080 WebP; los retratos a 1200×1500 y 720×900 WebP; el banner a 2400×1200 JPG.
