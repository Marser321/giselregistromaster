import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Benefits() {
  const { benefits } = siteConfig;
  if (!benefits) return null;

  return (
    <Section id="beneficios" tone="dark" className="pb-10 sm:pb-14 lg:pb-16">
      <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <div className="editorial-rule mb-7 h-px w-20" />
            <h2 className="max-w-[12ch] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl">
              {benefits.headline}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-x-8 sm:grid-cols-2">
          {benefits.items.map((benefit, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <div className="group min-h-36 border-t border-white/12 py-6 transition-colors hover:border-accent/55">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <Icon name={benefit.icon} className="h-4 w-4 text-white/28 transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-white/72">
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
