import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Gift } from "lucide-react";

/** Bonus / regalos por asistir. Opcional. */
export function Bonus() {
  const { bonus } = siteConfig;
  if (!bonus) return null;

  return (
    <Section id="bonus" width="narrow">
      <Reveal>
        <div className="glass rounded-lg p-8 text-center sm:p-12">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Gift className="h-6 w-6" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
            {bonus.headline}
          </h2>
          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left">
            {bonus.items.map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-md border border-border/60 bg-muted/30 px-4 py-3"
              >
                <Icon name={b.icon} className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
