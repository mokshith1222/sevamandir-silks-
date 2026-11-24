import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export function CollectionGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EEE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="Signature Weaves"
          title="Curated Royal Collections"
          description="Explore our hallmark categories, each reflecting centuries of regional textile distinction and celebratory grandeur."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {collections.map((col) => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="group relative bg-[#FAF6F0] border border-[#B08A4A]/25 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-[#B08A4A]"
            >
              {/* Image with subtle zoom */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE2D7]">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                {/* Bottom title overlay on mobile/preview */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#E6CA85] font-medium">
                    {col.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white mt-1 flex items-center justify-between">
                    <span>{col.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#B08A4A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#FAF6F0]">
                <p className="text-xs text-[#332522]/80 leading-relaxed font-light">
                  {col.description}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#B08A4A]/15 text-xs">
                  <span className="text-[#792D3B] font-medium uppercase tracking-[0.15em]">
                    View Collection
                  </span>
                  <span className="text-[11px] text-[#B08A4A]">
                    {col.itemCount} Designs
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
