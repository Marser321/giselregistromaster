import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

function diff(target: number) {
  const total = Math.max(0, target - Date.now());
  const days = Math.floor(total / 86_400_000);
  const hours = Math.floor((total % 86_400_000) / 3_600_000);
  const minutes = Math.floor((total % 3_600_000) / 60_000);
  const seconds = Math.floor((total % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => String(n).padStart(2, "0");

interface CountdownProps {
  datetimeISO: string;
  className?: string;
}

/** Timer regresivo hasta la fecha del evento. */
export function Countdown({ datetimeISO, className }: CountdownProps) {
  const target = useMemo(() => new Date(datetimeISO).getTime(), [datetimeISO]);
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { v: t.days, label: "Días" },
    { v: t.hours, label: "Horas" },
    { v: t.minutes, label: "Min" },
    { v: t.seconds, label: "Seg" },
  ];

  return (
    <div className={cn("flex items-stretch gap-1.5 sm:gap-2", className)}>
      {units.map((u, i) => (
        <div key={i} className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex min-w-[52px] flex-col items-center rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-2 sm:min-w-[64px]">
            <span className="font-display text-xl font-semibold tabular-nums sm:text-2xl">
              {pad(u.v)}
            </span>
            <span className="text-[8px] uppercase tracking-[0.18em] text-white/55 sm:text-[9px]">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-base text-accent/55">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
