import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Empathy() {
  const { intro } = siteConfig;
  if (!intro) return null;

  return (
    <Section id="intro" tone="ivory" className="ivory-grain">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div>
          <Reveal>
            <div className="editorial-rule mb-9 h-px w-24" />
            <h2 className="max-w-2xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
              {intro.title}
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-5 max-w-2xl font-sans text-lg font-light leading-relaxed text-ink/85 sm:text-xl">
              {intro.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-ink/70 sm:text-lg">
              {intro.body}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 max-w-2xl border-l-2 border-accent pl-5 py-1">
              <p className="font-sans text-base font-medium leading-relaxed text-ink/90 sm:text-lg">
                {intro.highlightBlock}
              </p>
            </div>
          </Reveal>
        </div>

        {intro.image && (
          <Reveal delay={0.08}>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -bottom-5 -left-5 h-32 w-32 border-b border-l border-accent/45" />
              <div className="aspect-[4/5] overflow-hidden rounded-t-[9rem] bg-white shadow-editorial">
                <img
                  src={intro.image}
                  srcSet={intro.imageSrcSet}
                  sizes="(min-width: 1024px) 500px, 90vw"
                  alt={intro.imageAlt ?? ""}
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
