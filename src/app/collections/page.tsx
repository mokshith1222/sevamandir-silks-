import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { collections } from "@/data/collections";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Royal Silk Collections",
  description:
    "Explore our signature Indian silk sarees: Kanjivaram Korvai, Banarasi brocades, royal bridal drapes, and festive heirlooms.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-24 pb-24 bg-[#F5EEE5]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-[#792D3B]/10 border border-[#B08A4A]/40 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#792D3B]">
          <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
          <span>Curated Catalogue</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#792D3B] font-normal tracking-wide">
          Royal Silk Collections
        </h1>
        <p className="text-sm sm:text-base text-[#332522]/80 max-w-2xl mx-auto font-light leading-relaxed">
          From the temple-border Korvai weaves of South India to the imperial brocades of Varanasi, immerse yourself in our signature handloom silk sarees.
        </p>
      </div>

      {/* Editorial Collection Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {collections.map((col, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={col.slug}
              className="bg-[#FAF6F0] border border-[#B08A4A]/30 overflow-hidden shadow-lg transition-all duration-300 hover:border-[#B08A4A]"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-[#EAE2D7] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#792D3B] text-[#FAF6F0] text-[10px] tracking-[0.25em] uppercase px-3 py-1 font-medium border border-[#B08A4A]/40">
                    Collection 0{index + 1}
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#B08A4A] font-medium block">
                      {col.tagline}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#792D3B] font-normal">
                      {col.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#332522]/85 font-light leading-relaxed">
                    {col.editorial}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link
                      href={`/collections/${col.slug}`}
                      className="inline-flex items-center justify-center space-x-3 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
                    >
                      <span>Explore {col.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
                    </Link>

                    <span className="text-xs text-[#332522]/60 tracking-wider text-center sm:text-left">
                      Pure Handloom • Enquire for Pricing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
