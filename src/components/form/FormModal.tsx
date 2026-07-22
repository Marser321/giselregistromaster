import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { useFormModal } from "@/components/form/FormModalContext";

/**
 * Popup de registro refinado. Envuelve el iframe de HighLevel/LeadConnector
 * (layout INLINE) en un marco premium de marca (navy + dorado) con backdrop
 * desenfocado, botón de cierre y animación.
 *
 * El iframe se monta una sola vez y queda persistente (el overlay se oculta con
 * CSS/animación, no se desmonta) para que `form_embed.js` gestione la altura vía
 * postMessage de forma fiable aunque el popup arranque cerrado.
 */
export function FormModal() {
  const { form } = siteConfig;
  const { isOpen, closeForm } = useFormModal();
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Script oficial de embed, con el mismo origen que el `src` del form (queda en
  // sync con el dominio de marca). Se inyecta una sola vez por página.
  useEffect(() => {
    if (!form) return;
    const scriptSrc = new URL(form.src).origin + "/js/form_embed.js";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, [form]);

  // Escape para cerrar + bloqueo del scroll del body + foco al abrir.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeForm();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeForm]);

  if (!form) return null;

  const frameId = `popup-${form.formId}`;
  const height = form.height ?? 640;
  // Calendario de reservas (/widget/booking/) vs formulario (/widget/form/):
  // el booking no usa los atributos data-* de layout/trigger de los forms.
  const isBooking = form.src.includes("/widget/booking/");

  const overlay = (
    <div
      className="fixed inset-0 z-[100]"
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
      aria-hidden={!isOpen}
      {...(isOpen ? {} : ({ inert: "" } as Record<string, unknown>))}
    >
      {/* Backdrop desenfocado (solo visual). */}
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
      />

      {/* Capa scrolleable: click fuera del panel cierra. */}
      <div className="absolute inset-0 overflow-y-auto" onClick={closeForm}>
        <div className="flex min-h-full items-center justify-center p-2 sm:p-6">
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={form.heading ?? "Formulario de registro"}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-[1.6rem] bg-card p-3 shadow-editorial ring-1 ring-accent/25 sm:p-6"
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
              scale: isOpen ? 1 : reduceMotion ? 1 : 0.96,
              y: isOpen ? 0 : reduceMotion ? 0 : 12,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={closeForm}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="h-4 w-4" />
            </button>

            {(form.heading || form.subheading) && (
              <div className="mb-4 pr-10">
                {form.heading && (
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-[1.7rem]">
                    {form.heading}
                  </h3>
                )}
                {form.subheading && (
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {form.subheading}
                  </p>
                )}
              </div>
            )}

            <div className="max-h-[80vh] overflow-auto rounded-2xl bg-white p-1 shadow-glow ring-1 ring-accent/30 sm:p-1.5">
              <iframe
                src={form.src}
                id={frameId}
                title={
                  isBooking
                    ? "Reserva tu lugar — Masterclass Ser Uno"
                    : "Formulario de registro — Masterclass Ser Uno"
                }
                className="block w-full rounded-xl"
                style={{ height, border: "none", overflow: "hidden" }}
                scrolling="no"
                {...(isBooking
                  ? {}
                  : {
                      "data-layout": "{'id':'INLINE'}",
                      "data-trigger-type": "alwaysShow",
                      "data-form-id": form.formId,
                      "data-layout-iframe-id": frameId,
                      "data-height": String(height),
                    })}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
