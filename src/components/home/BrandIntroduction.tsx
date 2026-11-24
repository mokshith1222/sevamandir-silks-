import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, Sparkles } from "lucide-react";

export function BrandIntroduction() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF6F0] border-b border-[#B08A4A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Image with Frame */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden border-2 border-[#B08A4A]/30 bg-[#EAE2D7] shadow-xl">
              <Image
                src="/images/sarees/saree-emerald-banarasi.jpg"
                alt="Timeless Indian Silk Artistry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative Offset Gold Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#B08A4A]/40 -z-10 hidden sm:block" />
          </div>

          {/* Right: Editorial Story & Ethos */}
          <div className="space-y-6">
            <SectionHeading
              align="left"
              subtitle="The Art of Heritage"
              title="The Art of Timeless Elegance"
              description="Indian silk weaving is among humanity's most revered living textile arts. At Sevamandir Silks, we honor this noble lineage through carefully curated collections that celebrate the grace, regal dignity, and enduring splendor of traditional sarees."
            />

            <div className="space-y-4 text-sm sm:text-base text-[#332522]/80 font-light leading-relaxed">
              <p>
                From the rich temple-spire Korvai borders of Kanjivaram to the ornate floral brocades of Varanasi, silk represents far more than an opulent garment—it is a sacred heirloom passed across generations, embodying blessing, artistry, and eternal feminine grace.
              </p>
              <p>
                Whether adorning a radiant bride on her wedding morning or elevating the intimacy of a festival, our boutique curations are chosen with unwavering dedication to pure silk yarns, authentic zari, and timeless design balance.
              </p>
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <Link
                href="/collections"
                className="inline-flex items-center space-x-3 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
              >
                <span>Explore Curations</span>
                <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
              </Link>

              <Link
                href="/our-story"
                className="text-xs uppercase tracking-[0.2em] text-[#792D3B] hover:text-[#B08A4A] font-medium transition-colors border-b border-[#792D3B]/40 pb-0.5"
              >
                Read Brand Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
