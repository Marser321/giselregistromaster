import { siteConfig } from "@/content/site.config";

export function Footer() {
  const { footer, meta } = siteConfig;
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
        <p className="font-display text-sm font-semibold text-foreground/80">
          {meta.brand}
        </p>
        <p>{footer.legal}</p>
        {footer.credit && <p className="text-muted-foreground/60">{footer.credit}</p>}
      </div>
    </footer>
  );
}
