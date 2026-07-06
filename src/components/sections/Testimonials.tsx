import { useCallback, useEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function isDirectVideo(url: string) {
  return /\.(mp4|webm|ogg)(\?|#|$)/i.test(url);
}

function toEmbedUrl(url: string) {
  const youtubeWatch = url.match(/youtube\.com\/watch\?v=([^&]+)/i);
  if (youtubeWatch?.[1]) return `https://www.youtube.com/embed/${youtubeWatch[1]}`;

  const youtubeShort = url.match(/youtu\.be\/([^?&/]+)/i);
  if (youtubeShort?.[1]) return `https://www.youtube.com/embed/${youtubeShort[1]}`;

  const vimeo = url.match(/vimeo\.com\/(\d+)/i);
  if (vimeo?.[1] && !url.includes("player.vimeo.com")) {
    return `https://player.vimeo.com/video/${vimeo[1]}`;
  }

  return url;
}

export function Testimonials() {
  const { testimonials } = siteConfig;
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);

  const measure = useCallback(() => {
    const element = trackRef.current;
    if (!element) return;
    const total = Math.max(1, testimonials.items.length);
    setPages(total);
    setActive(Math.min(total - 1, Math.round(element.scrollLeft / element.clientWidth)));
  }, [testimonials.items.length]);

  useEffect(() => {
    measure();
    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const onScroll = useCallback(() => {
    const element = trackRef.current;
    if (element) setActive(Math.round(element.scrollLeft / element.clientWidth));
  }, []);

  const goTo = useCallback((index: number) => {
    const element = trackRef.current;
    if (!element) return;
    const total = Math.max(1, testimonials.items.length);
    const next = ((index % total) + total) % total;
    element.scrollTo({ left: next * element.clientWidth, behavior: "smooth" });
  }, [testimonials.items.length]);

  useEffect(() => {
    if (testimonials.items.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      if (!pausedRef.current) goTo(active + 1);
    }, 6500);
    return () => clearInterval(interval);
  }, [active, goTo, testimonials.items.length]);

  return (
    <Section id="testimonios" tone="dark" className="border-y border-white/5">
      <Reveal className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
        <p className="eyebrow text-accent">{testimonials.eyebrow}</p>
        <div>
          <h2 className="max-w-[15ch] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-6xl">
            {testimonials.headline}
          </h2>
          {testimonials.subhead && (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
              {testimonials.subhead}
            </p>
          )}
        </div>
      </Reveal>

      <div
        className="relative mt-14"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onFocusCapture={() => (pausedRef.current = true)}
        onBlurCapture={() => (pausedRef.current = false)}
      >
        <div
          ref={trackRef}
          onScroll={onScroll}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Testimonios de clientas"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") goTo(active + 1);
            if (event.key === "ArrowLeft") goTo(active - 1);
          }}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.items.map((testimonial, i) => (
            <article
              key={i}
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${testimonials.items.length}`}
              className="grid basis-full shrink-0 snap-start gap-10 border-y border-white/12 py-10 lg:grid-cols-[1.28fr_.72fr] lg:gap-16 lg:py-14"
            >
              <div>
                <Quote className="h-8 w-8 text-accent/55" strokeWidth={1.25} />
                <p className="mt-6 max-w-4xl font-display text-2xl leading-[1.35] text-white/88 sm:text-4xl">
                  “{testimonial.quote}”
                </p>
                {testimonial.videoUrl && (
                  <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-white/12 bg-black/45 shadow-editorial">
                    <div className="relative aspect-video w-full">
                      {isDirectVideo(testimonial.videoUrl) ? (
                        <video
                          src={testimonial.videoUrl}
                          controls
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <iframe
                          src={toEmbedUrl(testimonial.videoUrl)}
                          title={`Testimonio de ${testimonial.name}`}
                          className="absolute inset-0 h-full w-full"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                    {testimonial.videoLength && (
                      <p className="border-t border-white/10 px-4 py-2 text-xs text-white/60">
                        Duración: {testimonial.videoLength}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-end border-l border-white/12 pl-7">
                <p className="font-display text-xl text-accent">{testimonial.result}</p>
                <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/12 pt-5">
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="mt-1 text-xs text-white/60">{testimonial.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-accent/75">
                    <BadgeCheck className="h-4 w-4" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">Verificado</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {pages > 1 && (
          <div className="mt-7 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir al testimonio ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-1 rounded-full transition-all",
                    i === active ? "w-8 bg-accent" : "w-3 bg-white/18 hover:bg-white/35"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Testimonio anterior"
                onClick={() => goTo(active - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/14 text-white/65 transition-colors hover:border-accent/55 hover:text-accent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Siguiente testimonio"
                onClick={() => goTo(active + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/14 text-white/65 transition-colors hover:border-accent/55 hover:text-accent"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {testimonials.disclaimer && (
        <p className="mt-9 max-w-3xl text-xs leading-relaxed text-white/60">
          {testimonials.disclaimer}
        </p>
      )}
    </Section>
  );
}
