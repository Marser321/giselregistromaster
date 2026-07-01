import { useEffect } from "react";
import { siteConfig } from "@/content/site.config";

/** Script oficial de LeadConnector/HighLevel: auto-ajusta la altura del iframe
 *  del formulario vía postMessage. Se inyecta una sola vez por página. */
const FORM_EMBED_SRC = "https://link.msgsndr.com/js/form_embed.js";

/**
 * Formulario de registro embebido (HighLevel / LeadConnector).
 * Config-driven: se auto-oculta si no hay `siteConfig.form` (patrón Vsl/Benefits).
 *
 * Nota de estilo: la tarjeta va en blanco para que el form sea legible sea cual
 * sea el tema del builder (por defecto HL trae fondo blanco + texto oscuro). Si
 * en HighLevel se configura el form con fondo transparente + campos claros, se
 * puede cambiar `bg-white` por la clase `glass` para fundirlo con el navy.
 */
export function RegistrationForm() {
  const { form } = siteConfig;

  useEffect(() => {
    if (!form) return;
    if (document.querySelector(`script[src="${FORM_EMBED_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = FORM_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, [form]);

  if (!form) return null;

  const inlineId = `inline-${form.formId}`;
  const height = form.height ?? 640;

  return (
    <div className="w-full">
      {(form.heading || form.subheading) && (
        <div className="mb-5">
          {form.heading && (
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {form.heading}
            </h3>
          )}
          {form.subheading && (
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {form.subheading}
            </p>
          )}
        </div>
      )}

      <div className="w-full overflow-hidden rounded-2xl bg-white p-1.5 shadow-glow ring-1 ring-accent/30">
        <iframe
          src={form.src}
          id={inlineId}
          title="Formulario de registro — Masterclass Ser Uno"
          className="block w-full rounded-xl"
          style={{ height, border: "none" }}
          scrolling="no"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-form-id={form.formId}
          data-layout-iframe-id={inlineId}
          data-height={String(height)}
        />
      </div>
    </div>
  );
}
