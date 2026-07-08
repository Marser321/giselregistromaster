import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Calendar, Mail, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { BackgroundLayer } from "@/components/backgrounds/BackgroundLayer";
import { Footer } from "@/components/sections/Footer";

export function ThankYou() {
  const { event } = siteConfig;

  // Enlace del grupo de WhatsApp provisto por el cliente
  const whatsappUrl = "https://chat.whatsapp.com/KRForTspXq1HGZWCF91Fxd?mode=gi_t"; 

  // Fecha para agregar al calendario (Google Calendar link simple)
  // 21 de Julio de 2026, 7:00 PM Miami (EDT, UTC-4) -> 20260721T230000Z / 20260722T000000Z
  const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Masterclass+Método+Ser+Uno+--+Gisella+Arias+Olson&dates=20260721T230000Z/20260722T000000Z&details=Masterclass+en+vivo:+Cómo+transformar+tu+matrimonio+sin+esperar+a+que+él+cambie.+Enlace+de+Zoom+se+enviará+por+email+y+WhatsApp.&location=Online+Zoom";

  return (
    <div className="relative isolate min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* Background decorativo */}
      <BackgroundLayer vignette={true} />

      {/* Header flotante con logo */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <a href="/" className="inline-flex items-center gap-2">
          <img
            src="/brand/logo-blanco.png"
            alt="Gisella Arias Olson · Ser Uno"
            className="h-12 w-auto object-contain"
          />
        </a>
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver a la landing
        </a>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 z-10">
        <div className="w-full max-w-2xl bg-card/65 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-editorial ring-1 ring-accent/30 text-center">
          
          {/* Icono de éxito animado */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6"
          >
            <CheckCircle2 className="h-9 w-9" />
          </motion.div>

          <motion.h1
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
          >
            ¡Registro Completado!
          </motion.h1>

          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-muted-foreground max-w-lg mx-auto mb-8 sm:mb-12"
          >
            Tu lugar para la Masterclass en vivo ya está asegurado. Sigue estos 3 pasos indispensables para no perderte de nada.
          </motion.p>

          {/* Pasos */}
          <div className="text-left space-y-6 sm:space-y-8 max-w-xl mx-auto mb-10">
            
            {/* Paso 1 */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex gap-4 sm:gap-5"
            >
              <div className="flex-none flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-accent-foreground font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-base flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-accent" />
                  Únete al Grupo de WhatsApp de la Masterclass
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  Es el canal oficial. Compartiremos los accesos de Zoom directos, recordatorios y el Workbook de trabajo de forma prioritaria.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs transition-colors shadow-glow"
                >
                  Unirme al grupo en WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Paso 2 */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex gap-4 sm:gap-5"
            >
              <div className="flex-none flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-accent-foreground font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-base flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  Guarda la fecha en tu calendario
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-1 font-medium text-accent">
                  {event.label}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Asegúrate de reservar el espacio en tu agenda para estar presente en vivo y poder interactuar.
                </p>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
                >
                  Añadir a Google Calendar
                </a>
              </div>
            </motion.div>

            {/* Paso 3 */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex gap-4 sm:gap-5"
            >
              <div className="flex-none flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-accent-foreground font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-base flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  Revisa tu correo de confirmación
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Enviamos un email de confirmación desde la dirección de Gisella Arias Olson. Si no lo encuentras en 5 minutos, revisa las carpetas de Correo no deseado (Spam) o Promociones.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
