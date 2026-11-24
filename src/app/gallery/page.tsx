import React from "react";
import { Metadata } from "next";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { Sparkles } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Editorial Gallery",
  description:
    "An editorial visual anthology showcasing royal silk sarees, opulent zari motifs, and authentic handloom craft.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-24 bg-[#F5EEE5]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-[#792D3B]/10 border border-[#B08A4A]/40 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#792D3B]">
          <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
          <span>Visual Anthology</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#792D3B] font-normal tracking-wide">
          Editorial Gallery
        </h1>
        <p className="text-sm sm:text-base text-[#332522]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Immerse yourself in high-resolution perspectives of our handwoven silk sarees, bridal ensembles, and detailed metallic zari textures.
        </p>
      </div>

      {/* Gallery Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MasonryGallery items={galleryItems} />

        <div className="mt-16 bg-[#FAF6F0] border border-[#B08A4A]/30 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4 shadow-sm">
          <h3 className="font-serif text-2xl text-[#792D3B]">
            Looking for a Specific Motif or Hue?
          </h3>
          <p className="text-xs sm:text-sm text-[#332522]/80 font-light leading-relaxed">
            Our boutique maintains an extensive physical vault of heritage weaves. Connect with our styling concierges for private digital lookbooks and video walk-throughs.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-block bg-[#792D3B] text-[#FAF6F0] px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#542D32] transition-colors"
            >
              Request Custom Lookbook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
