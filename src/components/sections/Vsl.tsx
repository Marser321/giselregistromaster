import { siteConfig } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** Sección protagonista: el Video Sales Letter. */
export function Vsl() {
  const { vsl, cta } = siteConfig;
  if (!vsl) return null;

  return (
    <Section id="vsl" width="narrow" className="pt-6 sm:pt-10">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {vsl.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold sm:text-4xl">
          {vsl.headline}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass mt-8 overflow-hidden rounded-lg p-2 shadow-glow">
          <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
            {vsl.kind === "iframe" ? (
              <iframe
                src={vsl.embedUrl}
                title="VSL"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={vsl.embedUrl}
                poster={vsl.poster}
                controls
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16} className="mt-8 flex flex-col items-center gap-3">
        <CtaButton size="lg">{cta.label}</CtaButton>
        {cta.note && (
          <span className="text-xs text-muted-foreground">{cta.note}</span>
        )}
      </Reveal>
    </Section>
  );
}
