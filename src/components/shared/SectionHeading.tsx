import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left" | "right";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {subtitle && (
        <div className="flex items-center justify-center space-x-3">
          {align === "center" && <span className="h-[1px] w-8 bg-[#B08A4A]" />}
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B08A4A]">
            {subtitle}
          </span>
          {align === "center" && <span className="h-[1px] w-8 bg-[#B08A4A]" />}
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide",
          light ? "text-[#FAF6F0]" : "text-[#792D3B]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-sm sm:text-base font-light leading-relaxed pt-1",
            light ? "text-[#FAF6F0]/80" : "text-[#332522]/80"
          )}
        >
          {description}
        </p>
      )}

      <div
        className={cn(
          "pt-2 flex items-center",
          align === "center" && "justify-center"
        )}
      >
        <span className="w-12 h-[1px] bg-[#B08A4A]/50" />
      </div>
    </div>
  );
}
