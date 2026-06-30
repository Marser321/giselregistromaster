import { siteConfig } from "@/content/site.config";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/Countdown";

export function FinalCta() {
  const { finalCta, event, cta } = siteConfig;

  return (
    <section id="reservar" className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      {finalCta.image && (
        <div aria-hidden className="absolute inset-0 z-0">
          <img
            src={finalCta.image}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-center opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/.98)_0%,hsl(var(--background)/.84)_54%,hsl(var(--background)/.28)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/75" />
        </div>
      )}

      <div className="container relative z-10 grid items-center gap-14 px-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-accent">{finalCta.subhead}</p>
            <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
              {finalCta.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              {finalCta.body}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <Countdown datetimeISO={event.datetimeISO} />
          </Reveal>

          <Reveal delay={0.14} className="mt-7 flex flex-col items-start gap-2.5">
            <Button
              href={cta.href}
              size="lg"
              className="w-full sm:w-auto"
              disabled={!cta.href}
            >
              {cta.label}
            </Button>
            {cta.note && <span className="text-[10px] text-white/42 sm:text-xs">{cta.note}</span>}
          </Reveal>
        </div>

        {finalCta.photo && (
          <Reveal delay={0.08}>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-3 rounded-[2rem] border border-accent/22" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] shadow-editorial">
                <img
                  src={finalCta.photo}
                  srcSet={finalCta.photoSrcSet}
                  sizes="(min-width: 1024px) 500px, 90vw"
                  alt=""
                  width={1920}
                  height={1315}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
