# Lote Gemini — Sabio Cuidador y soporte físico

Fecha: 2026-07-08
Alcance: landing de registro `masterclass-ser-uno`
Estado: bandeja preparada; sin candidatos de Gemini importados todavía.

## Objetivo

Generar variantes de retratos que conserven al 100% la identidad real de Gisella Arias Olson y corrijan la sensación de estar sentada en el aire. Esta pasada prioriza los slots:

- Autoridad: `gisella-authority-editorial-v2-{720,1200}.webp`
- Cierre: `gisella-closing-editorial-v2-{720,1200}.webp`

Hero, empatía y método solo se reemplazan si aparece una mejora clara y más fiel al arquetipo.

## Arquetipo visual

**Sabio Cuidador**: autoridad serena, calidez clínica, presencia que sostiene, claridad sin dureza, cercanía sin perder estatus profesional.

La composición debe comunicar:

- Sabiduría: mirada clara, postura estable, luz editorial sobria.
- Cuidado: expresión cálida, gestos humanos, calma emocional.
- Sostén: asiento/base/piso/sombra visibles; el cuerpo debe sentirse físicamente apoyado.
- Marca: navy `#1D2D43`, turquesa `#46B3D1`, dorado bronce `#D59647`, con luz natural premium.

## Regla obligatoria para retratos sentados

Toda imagen sentada debe mostrar al menos uno de estos soportes de forma creíble:

- silla, banco, sillón o respaldo visible;
- base del asiento o cojín;
- piso y sombra de contacto;
- apoyo corporal coherente con la pose original.

No aprobar imágenes con muslos, falda, piernas o torso recortados de forma que parezcan suspendidos. No inventar una pose nueva si la foto original ya ofrece un soporte claro.

## Flujo de selección

1. Guardar entregas nuevas de Gemini en `inbox/`.
2. Revisar identidad, manos, joyas, edad, piel, anatomía, soporte físico y compatibilidad con layout.
3. Mover ganadoras sin compresión a `selected/`; mover descartes a `rejected/`.
4. Exportar WebP optimizado en pares `720` y `1200`.
5. Reemplazar producción solo si la ganadora supera al asset activo.
6. Registrar decisión final en este README o en `PROMPTS-Y-SELECCION.md` si el lote crece.

## Prompts base para Gemini

### Autoridad — `Gisela-13`

Use the attached real reference photo of Gisella Arias Olson. Preserve her exact identity, face, age, hair, body proportions, clothing, jewelry, hands and seated pose. Re-render as an ultra-realistic editorial portrait for a premium psychology masterclass.

Visual archetype: wise caregiver; calm authority, warmth, grounded presence, trustworthy clinical elegance. Keep the visible rattan chair or a refined light natural chair/backrest from the original reference. The seated body must be physically supported; include a believable seat/base, contact shadow, and enough lower-frame context so she never appears to float. Soft natural side light, warm ivory studio wall, subtle navy/turquoise depth, restrained bronze-gold accents. 85mm editorial lens look, natural skin texture, no plastic retouching. 4:5 vertical crop with safe space for the website frame.

NEGATIVE: text, watermark, logo, extra people, distorted hands or eyes, altered face, younger face, plastic skin, floating body, missing chair, no seat, no contact shadow, cropped unsupported legs, harsh shadows, oversaturation.

### Cierre — `Gisela-18`

Use the attached real reference photo of Gisella Arias Olson. Preserve her exact identity, face, age, hair, body proportions, blouse, skirt, jewelry, hands and seated pose. Re-render as an ultra-realistic editorial portrait for the final CTA of a premium masterclass.

Visual archetype: wise caregiver; hopeful, human, calm, emotionally steady. Keep the seated body visibly grounded: show the white seat/base or a refined stool/chair edge, floor plane, and soft contact shadow. Background may be deep navy `#1D2D43` with subtle turquoise depth and a thin bronze-gold ring, but the lower body must not disappear into a floating cut-out. Warm natural skin tones, elegant soft key light, subtle rim light, premium but restrained. 4:5 vertical crop; leave enough bottom context for `object-bottom` rendering.

NEGATIVE: text, watermark, logo, extra people, distorted hands or eyes, altered face, younger face, plastic skin, floating body, missing seat, no floor/contact shadow, unsupported legs, heavy fantasy glow, oversaturation.

## Criterios de aprobación

- Identidad de Gisella intacta.
- Soporte físico visible y natural.
- Arquetipo Sabio Cuidador claro.
- Compatible con los contenedores actuales de la landing.
- Sin naming ni texto incrustado en la imagen.
- Export final WebP con pesos razonables y pares 720/1200 completos.
