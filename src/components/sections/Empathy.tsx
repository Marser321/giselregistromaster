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
            <p className="max-w-[17ch] font-display text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
              {intro.lines[0]}
            </p>
          </Reveal>

          <div className="mt-9 space-y-0 border-y border-ink/10">
            {intro.lines.slice(1).map((line, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="border-b border-ink/10 py-6 font-display text-2xl leading-snug text-ink/82 last:border-b-0 sm:text-[1.75rem]">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>

          {intro.closing && (
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-base leading-relaxed text-ink/65 sm:text-lg">
                {intro.closing}
              </p>
            </Reveal>
          )}
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
