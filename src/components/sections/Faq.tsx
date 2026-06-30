import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Faq() {
  const { faq } = siteConfig;
  const [open, setOpen] = useState<number | null>(0);
  if (!faq) return null;

  return (
    <Section id="faq" tone="ivory" className="ivory-grain">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <div className="editorial-rule mb-7 h-px w-20" />
            <h2 className="max-w-[11ch] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-ink sm:text-6xl">
              {faq.headline}
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-ink/14">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className="border-b border-ink/14">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7"
                    aria-expanded={isOpen}
                  >
                    <span className="flex gap-5">
                      <span className="font-display text-sm text-[#875822]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                        {item.q}
                      </span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/14">
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-[#875822] transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-10 pr-14 text-sm leading-7 text-ink/62 sm:pl-12 sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
