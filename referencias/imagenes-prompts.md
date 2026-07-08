# Plan de imágenes — Psicóloga Gisella Arias Olson · Masterclass Ser Uno (v2, set editorial en producción)

> **Estado (2026-07-01):** el **set editorial v2 ya está generado y en producción**. Cada slot
> usa un archivo `-editorial-v2-*.webp` (retratos) o `*-editorial-v2.webp` / `*-atmosphere.webp`
> (fondos), todos bajo `public/img/editorial/`. Para mejorar un slot, **reemplazá el archivo en
> su misma ruta y nombre** y aparece solo (sin tocar código).

> **Regeneración completa publicada:** las 28 opciones, los ganadores y los prompts ejecutados
> están documentados en `generated-variants/2026-07-01-editorial-regeneration/PROMPTS-Y-SELECCION.md`.

> **Fuente rectora:** esta landing de registro es la referencia viva de copy, naming, tono y
> visual para el resto del ecosistema. Las demás páginas deben tomar de aquí la forma de hablar
> de Gisella Arias Olson y el tratamiento visual aprobado.

> **Refresh Sabio Cuidador (2026-07-08):** las próximas variantes de Gemini entran primero como
> candidatos en `generated-variants/2026-07-08-gemini-wise-caregiver-support-fix/`. No se
> reemplaza producción hasta que una ganadora supere al asset activo.

> **Motivo de marca por código (activo):** `Circles` (anillos dorados + destellos + velo
> turquesa) se renderiza detrás del hero, el cierre y las secciones oscuras. Los **fondos de
> sección** van a **baja opacidad (0.20–0.28** en `site.config.ts`, ver `sectionBackgrounds`)
> para no tapar los anillos; subí esa `opacity` a ~0.4 si querés que la foto domine. Los
> **retratos** son el asset principal de cada slot (sujeto recortado sobre navy con anillo dorado).

## Cómo generar y reemplazar (workflow)
1. Elegí el generador. **Recomendado: image‑to‑image** (Gemini / *Nano Banana*) para
   **conservar el parecido real** de Gisella Arias Olson en los retratos.
2. Adjuntá la **foto de referencia** indicada + pegá el prompt de esa pieza.
3. Exportá al **aspecto** de la tabla. Optimizá (Squoosh/TinyPNG): fondos < 200 KB, retratos
   < 120 KB. Formato **WebP**. Mantené los **pares responsive** `-720`/`-1200`.
4. Guardá con el **nombre exacto** en `public/img/editorial/` (sobrescribe el actual).

> **Nota de limpieza:** el set viejo (`/img/bg/*.jpg`, retratos non‑v2 `gisella-*-{720,1200}.webp`
> y `gisella-time-*`) quedó **retirado** en
> `referencias/asset-backups/2026-07-01-orphaned-after-editorial-v2/`. El contrato vivo es el de
> abajo.

## Identidad (no negociable en todos los prompts)
- **Navy `#1D2D43`** (base) · **turquesa `#46B3D1`** (profundidad/acento) · **dorado bronce
  `#D59647`** (premium).
- Lenguaje gráfico: **gradiente navy→turquesa + anillos concéntricos dorados + destellos de
  4 puntas + patrón monograma "O"** (opcional). Estética: sobria, premium, cálida, confiable.
- **Retratos:** conservar identidad EXACTA (rostro, cabello, edad) de la referencia.
- **Fondos:** **sin personas y sin texto**; mucho espacio oscuro y bajo contraste para que el
  texto blanco encima se lea.
- **Arquetipo visual:** **Sabio Cuidador**. Autoridad serena, calidez clínica, sostén,
  claridad y presencia emocional. Nada rígido, frío o grandilocuente.
- **Retratos sentados:** deben mostrar silla, base, piso o sombra de contacto creíble. Si el
  cuerpo parece suspendido o el apoyo físico queda ambiguo, la imagen no se aprueba.
- **Naming vivo:** usar **Psicóloga Gisella Arias Olson** o **Gisella Arias Olson**. Evitar
  honoríficos médicos y la forma del apellido con guion en piezas activas.

---

## Manifiesto vivo (contrato real que consume el código)

Todos en `public/img/editorial/`. Rutas exactas que referencia `src/content/site.config.ts`.

### Fondos (abstractos, sin figura)

| Archivo | Sección (`id`) | Aspecto | Opacidad en config | Tono | Referencia |
|---|---|---|---|---|---|
| `hero-atmosphere.webp` | Hero (`image`) | 16:9 | — (fondo hero) | dark | marca |
| `intro-editorial-v2.webp` | `intro` | 16:9 | 0.30 | ivory | regenerado |
| `benefits-editorial-v2.webp` | `beneficios` | 16:9 | 0.36 | dark | regenerado |
| `pillars-atmosphere.webp` | `pilares` | 16:9 | 0.30 (left bottom) | dark | regenerado |
| `authority-editorial-v2.webp` | `instructor` | 16:9 | 0.30 (left center) | ivory | regenerado |
| `testimonials-editorial-v2.webp` | `testimonios` | 16:9 | 0.34 | dark | regenerado |
| `faq-editorial-v2.webp` | `faq` | 16:9 | 0.24 (left center) | ivory | regenerado |
| `final-atmosphere.webp` | FinalCta (`image`) | 16:9 | — (fondo cierre) | dark | marca |

### Retratos (conservar identidad; par responsive `-720` + `-1200`)

| Archivo (base) | Slot | Aspecto | Ref. | `[ENCUADRE/POSE]` |
|---|---|---|---|---|
| `gisella-hero-editorial-v2-{720,1200}.webp` | Hero (`portrait`) | 4:5 | `Gisela-1` | medio cuerpo, brazos cruzados, mira a cámara, sonrisa cálida |
| `gisella-empathy-editorial-v2-{720,1200}.webp` | Intro/Empatía (`image`) | 4:5 | `Gisela-8` | íntimo, manos sobre el pecho, ojos cerrados, sereno |
| `gisella-authority-editorial-v2-{720,1200}.webp` | Authority (`photo`) | 4:5 | `Gisela-13` | sentada, mano cerca del mentón, profesional, espacio negativo a un lado |
| `gisella-method-editorial-v2-{720,1200}.webp` | Pilares/Método (`image`) | 4:5 | `Gisela-11` | sostiene un corazón dorado en las manos, foco en el corazón |
| `gisella-closing-editorial-v2-{720,1200}.webp` | FinalCta (`photo`) | 4:5 | `Gisela-18` | retrato limpio, humano y esperanzado; sin reloj, busto ni utilería |

> Las fotos `Gisela-*.jpg` están en `Fotos-20260630T191426Z-3-001/Fotos/` del Desktop.

---

## 1) Fondo del hero — `hero-atmosphere.webp` (16:9)
```
Abstract premium hero background, 16:9 (1920x1080), dark mode. Deep navy #1D2D43
to teal #46B3D1 with thin concentric GOLD #D59647 rings and elegant four-point
sparkle stars. Keep the left/center dark and calm for headline readability; allow
subtle brighter motion only toward the right edge. Cinematic, sophisticated,
serene, trustworthy, premium.
NEGATIVE: text, watermark, logos, faces, people, busy center, high contrast.
```
> El retrato del hero (`gisella-hero-editorial-v2-*`) se renderiza como imagen independiente;
> no debe estar integrado en este fondo.

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
| `intro-editorial-v2.webp` | intimate, calm, hopeful — softest, almost empty |
| `benefits-editorial-v2.webp` | clean, orderly, faint monogram texture |
| `pillars-atmosphere.webp` | structured, prominent concentric gold rings emanating from a corner |
| `authority-editorial-v2.webp` | elegant, navy→teal glow, refined |
| `testimonials-editorial-v2.webp` | warm, trustworthy, a few gold sparkles |
| `faq-editorial-v2.webp` | minimal, very dark, almost plain navy |
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
Ver la tabla de retratos de arriba para `[ENCUADRE/POSE]` y la foto de referencia de cada slot.

---

## Notas por generador
- **Gemini / Nano Banana (recomendado):** adjuntá la foto y escribí el prompt como
  **instrucción de edición** ("Take this woman and re-render her as…"). El mejor para parecido.
- **Midjourney:** `/imagine <prompt> --cref <URL_foto> --cw 100 --ar 4:5 --style raw --v 6`
  (cambiá `--ar` a 16:9 para fondos; `--cref` fija el personaje).
- **ChatGPT (GPT‑Image):** adjuntá la foto y pegá el prompt; aclarar "same woman, keep her face".

## Consistencia de serie
- Generá los 5 retratos en **una sola sesión**, con la **misma referencia de luz** y el **mismo
  dorado/navy**. Si el generador soporta **seed**, fijala para coherencia.
- Los fondos: mismo navy/teal/dorado, variando solo la intensidad/mood. Que ninguno compita con
  el texto (centro oscuro).

## Specs de salida
- Exportá a **WebP** y **optimizá**. Mantené los pares `-720`/`-1200`.
- **Mismo nombre y ruta** que el archivo actual → reemplazo directo, sin tocar código.
- Probá en móvil: el sujeto/los puntos de interés no deben quedar cortados (los fondos usan
  `object-cover`).

## Aparte — imagen social (OG)
`public/img/hero-banner.jpg` (2400×1200, ratio 2:1) es la **imagen para compartir en redes**
(`og:image` / `twitter:image` en `index.html`). Opcional: regenerarla on‑brand (navy/dorado con
Gisella Arias Olson + claim) y guardarla en la misma ruta. El copy debe alinearse con el hero
actual: "Cómo transformar tu matrimonio sin esperar a que él cambie", sin naming antiguo.
