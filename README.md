# Landing VSL (template)

Landing de lanzamiento para masterclass — Vite + React + TS + Tailwind.
Generada por la skill **landing-builder**.

## Uso

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist (estático, deploy en Netlify/Vercel/Lovable)
```

## Editar la landing

Todo el contenido vive en **un solo archivo**: `src/content/site.config.ts`.
- Cambiar copy, oferta, testimonios, FAQ → editar `site.config.ts`.
- Cambiar paleta/nicho → editar `site.config.ts > theme` (skill `landing-backgrounds`).
- Imágenes (instructor, og) → carpeta `public/`, referenciar como `/archivo.jpg`.

## Estructura

- `src/content/` — fuente única de verdad (config + tipos).
- `src/lib/theme.ts` — aplica el theme a variables CSS en runtime.
- `src/components/sections/` — secciones de la landing (orden en `App.tsx`).
- `src/components/backgrounds/` — fondos generativos (particles, orb, mesh).
- `src/components/ui/` — primitivos (Button, Card, Badge, Section, Reveal, Icon).

Secciones opcionales (Benefits, Bonus, Faq) se ocultan solas si su clave no está en el config.
