import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site.config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Barra CTA fija que aparece tras hacer scroll. Aumenta conversión. */
export function StickyCta() {
  const { cta, event } = siteConfig;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const finalCta = document.querySelector("#reservar");
      const rect = finalCta?.getBoundingClientRect();
      const finalCtaVisible = Boolean(
        rect && rect.top < window.innerHeight && rect.bottom > 0
      );
      setShow(window.scrollY > 700 && !finalCtaVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 transition-transform duration-300",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="border-t border-white/10 bg-background/[0.94] shadow-[0_-18px_50px_-35px_rgba(0,0,0,.8)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-4 py-1">
          <p className="hidden text-xs text-white/48 sm:block">
            {event.label}
          </p>
          <Button
            href={cta.href}
            className="h-9 w-full px-6 text-xs sm:w-auto"
            disabled={!cta.href}
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
