import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Pillars() {
  const { pillars } = siteConfig;

  return (
    <Section id="pilares" tone="dark">
      <Reveal className="max-w-4xl">
        <p className="eyebrow text-accent">{pillars.eyebrow}</p>
        <h2 className="mt-5 max-w-[17ch] font-display text-4xl font-semibold leading-[1.04] tracking-[-0.025em] sm:text-6xl">
          {pillars.headline}
        </h2>
      </Reveal>

      <div className="mt-14 grid items-start gap-10 sm:gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        {pillars.image && (
          <Reveal>
            <div className="relative lg:sticky lg:top-24">
              <div className="absolute -inset-3 rounded-[1.75rem] border border-accent/20" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-white/5 shadow-editorial">
                <img
                  src={pillars.image}
                  srcSet={pillars.imageSrcSet}
                  sizes="(min-width: 1024px) 430px, 90vw"
                  alt={pillars.imageAlt ?? ""}
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        )}

        <div className="border-t border-white/14">
          {pillars.items.map((pillar, i) => (
            <Reveal key={pillar.index} delay={Math.min(i * 0.06, 0.2)}>
              <article className="group grid gap-5 border-b border-white/14 py-7 sm:grid-cols-[72px_1fr] sm:py-8">
                <div className="flex items-center justify-between sm:block">
                  <span className="font-display text-3xl font-medium text-accent/75">
                    {pillar.index}
                  </span>
                  <span className={`mt-3 hidden h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/35 transition-colors sm:flex ${i % 2 === 0 ? 'group-hover:border-accent/45 group-hover:text-accent' : 'group-hover:border-accent2/45 group-hover:text-accent2'}`}>
                    <Icon name={pillar.icon} className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-white sm:text-[1.75rem]">
                    {pillar.title}
                  </h3>
                  <div className="mt-3 space-y-2">
                    {pillar.points.map((point, j) => (
                      <p key={j} className="max-w-2xl text-sm leading-relaxed text-white/58 sm:text-base">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
