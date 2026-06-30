import { motion, useReducedMotion } from "framer-motion";
import { CalendarClock, Users } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/Countdown";

const fade = (delay: number, reduceMotion: boolean | null) => ({
  initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion
    ? { duration: 0 }
    : { duration: 0.62, ease: [0.22, 1, 0.36, 1], delay },
});

export function Hero() {
  const { hero, event, cta } = siteConfig;
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative isolate overflow-hidden bg-background">
      {hero.image && (
        <div aria-hidden className="absolute inset-0 z-0">
          <img
            src={hero.image}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/.98)_0%,hsl(var(--background)/.88)_48%,hsl(var(--background)/.26)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background" />
        </div>
      )}

      <div className="container relative z-10 px-6 pb-16 pt-6 sm:pt-8 lg:min-h-[760px] lg:pb-14">
        <motion.div {...fade(0, reduceMotion)} className="flex items-center justify-between">
          <img
            src="/brand/logo-blanco.png"
            alt="Dra. Gisella Arias-Olson"
            width={220}
            height={92}
            className="h-12 w-auto sm:h-14"
          />
          <div className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/45 sm:flex">
            <span className="h-px w-10 bg-accent/65" />
            {siteConfig.meta.brand}
          </div>
        </motion.div>

        <div className="grid items-center gap-12 pb-2 pt-8 lg:grid-cols-[minmax(0,1.14fr)_minmax(340px,.86fr)] lg:gap-10 lg:pt-3">
          <div className="relative z-10 max-w-3xl">
            <motion.div {...fade(0.06, reduceMotion)}>
              <Badge className="border-accent/30 bg-accent/10 px-4 py-1.5 text-[10px] tracking-[0.2em]">
                <span className="inline-block h-1 w-1 rounded-full bg-accent" />
                {hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              {...fade(0.1, reduceMotion)}
              className="mt-4 max-w-[14ch] font-display text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4rem]"
            >
              {hero.headline}{" "}
              {hero.highlight && (
                <span className="text-gradient-accent">{hero.highlight}</span>
              )}
            </motion.h1>

            <motion.p
              {...fade(0.16, reduceMotion)}
              className="mt-4 max-w-2xl text-[0.94rem] leading-relaxed text-white/65 sm:text-lg"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              {...fade(0.21, reduceMotion)}
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/58 sm:text-sm"
            >
              <span className="inline-flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-accent" />
                {event.label}
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                {hero.urgency}
              </span>
            </motion.div>

            <motion.div {...fade(0.27, reduceMotion)} className="mt-5">
              <Countdown datetimeISO={event.datetimeISO} />
            </motion.div>

            <motion.div
              {...fade(0.33, reduceMotion)}
              className="mt-5 flex flex-col items-start gap-2.5"
            >
              <Button
                href={cta.href}
                size="lg"
                className="w-full sm:w-auto"
                disabled={!cta.href}
              >
                {cta.label}
              </Button>
              {cta.note && (
                <span className="text-[10px] leading-relaxed text-white/45 sm:text-xs">
                  {cta.note}
                </span>
              )}
            </motion.div>
          </div>

          {hero.portrait && (
            <motion.div
              {...fade(0.2, reduceMotion)}
              className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:ml-auto lg:max-w-[430px]"
            >
              <div className="absolute -inset-3 rounded-[2.1rem] border border-accent/25" />
              <div className="absolute -left-7 top-14 h-32 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] bg-ivory shadow-editorial ring-1 ring-white/10">
                <img
                  src={hero.portrait}
                  srcSet={hero.portraitSrcSet}
                  sizes="(min-width: 1024px) 430px, 86vw"
                  alt={hero.portraitAlt ?? hero.imageAlt ?? ""}
                  width={1200}
                  height={1800}
                  className="h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
