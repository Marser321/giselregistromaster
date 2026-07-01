import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { User } from "lucide-react";

export function Authority() {
  const { authority } = siteConfig;

  return (
    <Section id="instructor" tone="ivory" className="ivory-grain">
      <div className="grid items-center gap-14 lg:grid-cols-[.88fr_1.12fr] lg:gap-24">
        <Reveal>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-5 -top-5 h-36 w-36 border-r border-t border-accent/45" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-b-[8rem] bg-white shadow-editorial">
              {authority.photo ? (
                <img
                  src={authority.photo}
                  srcSet={authority.photoSrcSet}
                  sizes="(min-width: 1024px) 480px, 90vw"
                  alt={authority.name}
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white/70">
                  <User className="h-20 w-20 text-ink/20" />
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="eyebrow text-[#875822]">{authority.eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-none tracking-[-0.025em] text-ink sm:text-6xl">
            {authority.name}
          </h2>
          <p className="mt-4 max-w-xl text-sm font-semibold uppercase leading-relaxed tracking-[0.1em] text-[#875822]">
            {authority.title}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-7 text-ink/66">
            {authority.bio}
          </p>

          <ul className="mt-9 grid gap-x-8 sm:grid-cols-2">
            {authority.credentials.map((credential, i) => (
              <li key={i} className="border-t border-ink/12 py-5">
                <span className="font-display text-sm text-[#875822]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ink/76">{credential}</p>
              </li>
            ))}
          </ul>

          {authority.media.length > 0 && (
            <div className="mt-8 border-t border-ink/12 pt-6">
              {authority.mediaEyebrow && (
                <p className="eyebrow text-ink/45">{authority.mediaEyebrow}</p>
              )}
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
                {authority.media.map((media, i) => (
                  <span key={i} className="font-display text-lg font-semibold text-ink/65">
                    {media.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
