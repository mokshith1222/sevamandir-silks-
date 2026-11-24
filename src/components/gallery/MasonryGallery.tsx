"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

interface MasonryGalleryProps {
  items?: GalleryItem[];
  previewMode?: boolean;
}

export function MasonryGallery({
  items = galleryItems,
  previewMode = false,
}: MasonryGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const displayedItems = previewMode ? items.slice(0, 6) : items;

  return (
    <>
      {/* Equal size, perfectly aligned grid optimized for mobile and desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedItems.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden border border-[#B08A4A]/30 bg-[#FAF6F0] shadow-sm hover:shadow-2xl hover:border-[#B08A4A] transition-all duration-300 flex flex-col"
            >
              {/* Equal 3:4 Aspect Ratio on every photo for consistent mobile & desktop presentation */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE2D7]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Badge on Image */}
                <div className="absolute top-3 left-3 bg-[#792D3B] text-[#FAF6F0] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium border border-[#B08A4A]/40 shadow-sm">
                  {item.category}
                </div>

                {/* Expand Pill */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-xs text-white p-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#E6CA85]" />
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
              </div>

              {/* Information bar below image so mobile users can clearly read every title without needing to hover */}
              <div className="p-4 bg-[#FAF6F0] border-t border-[#B08A4A]/15 space-y-1">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B08A4A] font-medium block">
                  {item.category}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-medium text-[#792D3B] group-hover:text-[#B08A4A] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#332522]/70 font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Lightbox
        item={selectedItem}
        items={displayedItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(item) => setSelectedItem(item)}
      />
    </>
  );
}
