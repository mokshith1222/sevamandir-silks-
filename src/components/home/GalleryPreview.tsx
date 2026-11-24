import React from "react";
import Link from "next/link";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5] border-t border-[#B08A4A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="Visual Editorial"
          title="Moments of Regal Grace"
          description="Explore our visual anthology highlighting authentic silk textures, celebratory draping, and intricate metallic motifs."
        />

        <MasonryGallery previewMode />

        <div className="text-center pt-4">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-3 bg-transparent hover:bg-[#792D3B] text-[#792D3B] hover:text-[#FAF6F0] border border-[#792D3B] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
