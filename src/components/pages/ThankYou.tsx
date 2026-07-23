import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Calendar, Mail, ArrowLeft } from "lucide-react";
import { getNextEvent } from "@/lib/event";
import { Countdown } from "@/components/Countdown";
import { BackgroundLayer } from "@/components/backgrounds/BackgroundLayer";
import { Footer } from "@/components/sections/Footer";

export function ThankYou() {
  // Canal oficial de WhatsApp (novedades y actualizaciones) provisto por el cliente.
  const whatsappUrl = "https://whatsapp.com/channel/0029VbD0l3S60eBgUtYJZu0m";

  // Todo lo que depende de la fecha se recalcula en cada carga hacia el próximo
  // martes 7:00 PM de Miami (ver src/lib/event.ts): etiqueta, countdown y calendario.
  const ev = getNextEvent();
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Masterclass+Método+Ser+Uno+--+Gisella+Arias+Olson&dates=${ev.calendarStart}/${ev.calendarEnd}&details=Masterclass+en+vivo:+Cómo+transformar+tu+matrimonio+sin+esperar+a+que+él+cambie.+Enlace+de+Zoom+se+enviará+por+email+y+WhatsApp.&location=Online+Zoom`;

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

          {/* Próxima sesión: 100% dinámica hacia el próximo martes 7:00 PM Miami */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mx-auto mb-10 max-w-xl rounded-2xl border border-accent/25 bg-white/[0.03] px-5 py-5 sm:px-6"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Próxima sesión en vivo
            </p>
            <p className="mt-1.5 font-display text-xl font-semibold text-white sm:text-2xl">
              {ev.dateLabel}
            </p>
            <p className="text-sm font-medium text-accent">
              7:00 PM — hora de Miami
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
              {ev.zones.map((z) => (
                <span key={z.label}>
                  {z.time} <span className="text-white/40">{z.label}</span>
                </span>
              ))}
            </div>

            <div className="mt-4 flex justify-center">
              <Countdown datetimeISO={ev.datetimeISO} />
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
              La masterclass se transmite <strong className="font-semibold text-white/80">todos los martes a la misma hora</strong>. Si no puedes conectarte este martes, avísanos en el canal de WhatsApp y te reservamos el lugar en la siguiente.
            </p>
          </motion.div>

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
                  Únete al Canal de WhatsApp de la Masterclass
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  Es el canal oficial. Ahí se comparten las novedades y actualizaciones: el enlace de Zoom de cada martes, los recordatorios antes de empezar y el Workbook de trabajo.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs transition-colors shadow-glow"
                >
                  Unirme al canal de WhatsApp
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
                  {ev.label}
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
