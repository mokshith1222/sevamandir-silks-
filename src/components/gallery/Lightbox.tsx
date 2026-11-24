"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
  onEnquire?: (item: GalleryItem) => void;
}

export function Lightbox({ item, items, onClose, onNavigate, onEnquire }: LightboxProps) {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else {
      onNavigate(items[items.length - 1]);
    }
  }, [currentIndex, items, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(items[currentIndex + 1]);
    } else {
      onNavigate(items[0]);
    }
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-50 bg-black/40 rounded-full"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-colors bg-black/40 hover:bg-black/60 rounded-full z-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-colors bg-black/40 hover:bg-black/60 rounded-full z-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image & Caption */}
      <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
        <div className="relative w-full h-[65vh] sm:h-[70vh]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
        </div>

        <div className="mt-4 text-center text-[#FAF6F0] space-y-1 max-w-xl px-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08A4A] font-medium">
            {item.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-normal">
            {item.title}
          </h3>
          <p className="text-xs text-white/70 font-light">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
