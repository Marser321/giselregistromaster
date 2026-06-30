import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-lg p-6 sm:p-7 transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
}
