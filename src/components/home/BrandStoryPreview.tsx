import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function BrandStoryPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6F0] border border-[#B08A4A]/30 p-8 sm:p-12 lg:p-16 relative shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B08A4A] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#792D3B] font-normal leading-tight">
                Tradition Meets Timeless Beauty
              </h2>

              <p className="text-sm sm:text-base text-[#332522]/85 font-light leading-relaxed">
                At Sevamandir Silks, we believe that an authentic silk saree carries the soul of Indian celebration. It is an ensemble sculpted not just for an evening, but to be treasured as an heirloom that daughter inherits from mother, radiant with sentiment and grace.
              </p>

              <p className="text-sm sm:text-base text-[#332522]/85 font-light leading-relaxed">
                By presenting pure weaves with complete transparency and refined taste, our boutique offers an intimate space where discerning connoisseurs discover traditional handloom splendor.
              </p>

              <div className="pt-2">
                <Link
                  href="/our-story"
                  className="inline-flex items-center space-x-3 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
                >
                  <span>Discover The Full Story</span>
                  <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
                </Link>
              </div>
            </div>

            {/* Visual preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-[#B08A4A]/40 shadow-xl bg-[#EAE2D7]">
                <Image
                  src="/images/sarees/saree-folded-zari.jpg"
                  alt="Traditional Saree Elegance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#B08A4A] hidden sm:block" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#B08A4A] hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
