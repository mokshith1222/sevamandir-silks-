import React from "react";
import { siteConfig } from "@/config/site";
import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#792D3B] text-[#FAF6F0] py-2.5 px-4 border-b border-[#B08A4A]/30 text-center relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2.5 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-medium">
        <Sparkles className="w-3.5 h-3.5 text-[#B08A4A] shrink-0" />
        <span>{siteConfig.announcement}</span>
        <Sparkles className="w-3.5 h-3.5 text-[#B08A4A] shrink-0" />
      </div>
    </div>
  );
}
