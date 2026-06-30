# Plan de imágenes — Dra. Gisella · Masterclass Ser Uno

> **Objetivo:** dejar TODO listo para que el generador de imágenes produzca las piezas
> finales **super‑profesionales y on‑brand**. La landing ya tiene **placeholders tratados
> por código** en cada slot; al generar las definitivas, **se reemplazan en la MISMA ruta y
> con el MISMO nombre** y aparecen solas (sin tocar código).

## Cómo generar y reemplazar (workflow)
1. Elegí el generador. **Recomendado: image‑to‑image** (Gemini / *Nano Banana*) para
   **conservar el parecido real** de la Dra. en los retratos y el banner.
2. Adjuntá la **foto de referencia** indicada + pegá el prompt de esa pieza.
3. Exportá al **aspecto y resolución** de la tabla. Optimizá (Squoosh/TinyPNG):
   fondos/banner < 300 KB, retratos < 400 KB. Formato **WebP** (ideal) o **JPG/PNG**.
4. Guardá con el **nombre exacto** en su carpeta de `public/` (sobrescribe el placeholder).

## Identidad (no negociable en todos los prompts)
- **Navy `#1D2D43`** (base) · **turquesa `#46B3D1`** (profundidad/acento) · **dorado bronce
  `#D59647`** (premium).
- Lenguaje gráfico: **gradiente navy→turquesa + anillos concéntricos dorados + destellos de
  4 puntas + patrón monograma "O"** (opcional). Estética: sobria, premium, cálida, confiable.
- **Retratos/banner:** conservar identidad EXACTA (rostro, cabello, edad) de la referencia.
- **Fondos:** **sin personas y sin texto**; mucho espacio oscuro y bajo contraste para que el
  texto blanco encima se lea.

---

## Manifiesto actual (todo lo que hay que generar/reemplazar)

> La landing activa usa principalmente rutas `/img/editorial/*.webp`. Los archivos
> antiguos `/img/gisella-*.jpg` y `/img/hero-banner.jpg` quedan como referencia/reserva
> visual; no son el contrato principal de implementación.

| Archivo | Ruta `public/` | Aspecto | Res. mín | Tipo | Dónde se usa | Referencia |
|---|---|---|---|---|---|---|
| `hero-atmosphere.webp` | `/img/editorial/hero-atmosphere.webp` | 16:9 | 1920×1080 | Fondo hero abstracto | Hero | `Fondo-3` / marca |
| `pillars-atmosphere.webp` | `/img/editorial/pillars-atmosphere.webp` | 16:9 | 1920×1080 | Fondo editorial | Pillars | `Background_Gold_Circules` |
| `final-atmosphere.webp` | `/img/editorial/final-atmosphere.webp` | 16:9 | 1920×1080 | Fondo cierre | FinalCta | `Fondo-5` / marca |
| `bg/intro.jpg` | `/img/bg/intro.jpg` | 16:9 | 1600×900 mín. | Fondo sutil | Intro | `Fondo-2` |
| `bg/beneficios.jpg` | `/img/bg/beneficios.jpg` | 16:9 | 1600×900 mín. | Fondo sutil | Benefits | `Fondo-4` |
| `bg/instructor.jpg` | `/img/bg/instructor.jpg` | 16:9 | 1600×900 mín. | Fondo sutil | Authority | `Fondo-1` |
| `bg/testimonios.jpg` | `/img/bg/testimonios.jpg` | 16:9 | 1600×900 mín. | Fondo sutil | Testimonials | `Fondo-5` |
| `bg/faq.jpg` | `/img/bg/faq.jpg` | 16:9 | 1600×900 mín. | Fondo sutil | Faq | `Fondo-4` |
| `gisella-hero-720.webp` + `gisella-hero-1200.webp` | `/img/editorial/` | 4:5 seguro en UI | 720w / 1200w | Retrato hero | Hero | `Gisela-1` |
| `gisella-empathy-720.webp` + `gisella-empathy-1200.webp` | `/img/editorial/` | 4:5 | 720w / 1200w | Retrato emocional | Intro | `Gisela-8` |
| `gisella-authority-720.webp` + `gisella-authority-1200.webp` | `/img/editorial/` | 4:5 | 720w / 1200w | Retrato autoridad | Authority | `Gisela-13` |
| `gisella-method-720.webp` + `gisella-method-1200.webp` | `/img/editorial/` | 4:5 seguro en UI | 720w / 1200w | Retrato método | Pillars | `Gisela-11` |
| `gisella-time-1280.webp` + `gisella-time-1920.webp` | `/img/editorial/` | 16:9 / recorte 4:5 seguro | 1280w / 1920w | Retrato cierre | FinalCta | `Gisela-20` |

> Las fotos `Gisela-*.jpg` están en la carpeta `Fotos .../Fotos` del Desktop.

---

## 1) Fondo del hero — `hero-atmosphere.webp` (16:9)
Referencia: `Gisela-1.jpg` (brazos cruzados, segura).
```
Abstract premium hero background, 16:9 (1920x1080), dark mode. Deep navy #1D2D43
to teal #46B3D1 with thin concentric GOLD #D59647 rings and elegant four-point
sparkle stars. Keep the left/center dark and calm for headline readability; allow
subtle brighter motion only toward the right edge. Cinematic, sophisticated,
serene, trustworthy, premium.
NEGATIVE: text, watermark, logos, faces, people, busy center, high contrast.
```
> El retrato del hero se renderiza como imagen independiente; no debe estar integrado en
> este fondo.

## 2) Fondos de sección (16:9, abstractos, sin personas/texto)
Receta base (rellenar `[MOOD]`):
```
Abstract premium brand background, dark mode, NO people, NO text. Base deep navy
#1D2D43 with subtle teal #46B3D1 depth and thin GOLD #D59647 concentric rings plus
a few four-point gold sparkles; optional faint "O" monogram pattern, very subtle.
Lots of dark, low-contrast negative space so overlaid white text stays readable.
Cinematic, elegant, soft, [MOOD]. 16:9, ultra-detailed.
NEGATIVE: faces, people, text, watermark, busy clutter, high contrast, bright center.
```
| Archivo | `[MOOD]` |
|---|---|
| `bg/intro.jpg` | intimate, calm, hopeful — softest, almost empty |
| `bg/beneficios.jpg` | clean, orderly, faint monogram texture |
| `pillars-atmosphere.webp` | structured, prominent concentric gold rings emanating from a corner |
| `bg/instructor.jpg` | elegant, navy→teal glow, refined |
| `bg/testimonios.jpg` | warm, trustworthy, a few gold sparkles |
| `bg/faq.jpg` | minimal, very dark, almost plain navy |
| `final-atmosphere.webp` | reflective, urgent but calm, premium close |

## 3) Retratos (conservar identidad)
Receta base:
```
Ultra-realistic editorial portrait, 85mm lens look, f/2.0, soft key light with a
subtle rim/back light. Natural skin retouch (keep skin texture, no plastic look).
Preserve the EXACT identity (face, hair, age) of the woman in the reference photo.
Cut-out subject composited on a deep navy #1D2D43 to teal #46B3D1 radial-gradient
studio backdrop; thin concentric GOLD #D59647 rings and a few elegant gold
four-point sparkle stars; gentle navy color-grade integrated for depth, warm
natural skin tones. Premium, serene, trustworthy, feminine. [ENCUADRE/POSE].
NEGATIVE: text, watermark, logo, extra people, harsh shadows, plastic skin,
distorted hands/eyes, oversaturation.
```
| Archivo | Aspecto | Ref. | `[ENCUADRE/POSE]` | Alternativa |
|---|---|---|---|---|
| `gisella-hero-720.webp` / `gisella-hero-1200.webp` | 4:5 seguro | `Gisela-1` | medio cuerpo, brazos cruzados, mira a cámara, sonrisa cálida; fondo navy/dorado, sin pared blanca dominante | `Gisela-16` |
| `gisella-empathy-720.webp` / `gisella-empathy-1200.webp` | 4:5 | `Gisela-8` | íntimo, manos sobre el pecho, ojos cerrados, sereno | `Gisela-2` |
| `gisella-authority-720.webp` / `gisella-authority-1200.webp` | 4:5 | `Gisela-13` | sentada, mano cerca del mentón, profesional, espacio negativo a un lado | `Gisela-18` |
| `gisella-method-720.webp` / `gisella-method-1200.webp` | 4:5 seguro | `Gisela-11` | sostiene un corazón dorado en las manos, foco en el corazón, manos impecables | `Gisela-3` |
| `gisella-time-1280.webp` / `gisella-time-1920.webp` | 16:9, recorte 4:5 seguro | `Gisela-20` | escena amplia con reloj de arena con brillo dorado, reflexiva; sujeto y objeto importantes centrados para no cortarse en móvil | — |

---

## Notas por generador
- **Gemini / Nano Banana (recomendado):** adjuntá la foto y escribí el prompt como
  **instrucción de edición** ("Take this woman and re-render her as…"). El mejor para parecido.
- **Midjourney:** `/imagine <prompt> --cref <URL_foto> --cw 100 --ar 1:1 --style raw --v 6`
  (cambiá `--ar` a 4:5, 16:9 o 2:1 según la pieza; `--cref` fija el personaje).
- **ChatGPT (GPT‑Image):** adjuntá la foto y pegá el prompt; aclarar "same woman, keep her face".

## Consistencia de serie
- Generá las 5 retratos + el banner en **una sola sesión**, con la **misma referencia de luz**
  y el **mismo dorado/navy**. Si el generador soporta **seed**, fijala para coherencia.
- Los 6 fondos: mismo navy/teal/dorado, variando solo la intensidad/mood. Que ninguno compita
  con el texto (centro oscuro).

## Specs de salida
- Resolución mín. de la tabla; exportá a **WebP** (o JPG/PNG) y **optimizá**.
- **Mismo nombre y ruta** que el placeholder → reemplazo directo, sin tocar código.
- Probá en móvil: el sujeto/los puntos de interés no deben quedar cortados (los fondos usan
  `object-cover`).
