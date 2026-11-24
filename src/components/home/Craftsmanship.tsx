import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Craftsmanship() {
  const pillars = [
    {
      title: "Pure Kanjivaram Mulberry Silk",
      subtitle: "The Foundation of Luxury",
      description:
        "Woven with 100% pure high-twist mulberry silk filaments, imparting natural thermal comfort, luminous golden luster, and an incomparable regal drape.",
      image: "/images/sarees/saree-folded-zari.jpg",
    },
    {
      title: "Hand-Interlocked Korvai Temple Saree",
      subtitle: "The Sacred Shuttle Join",
      description:
        "A revered South Indian weaving discipline where two artisans work simultaneously to interlock contrasting borders and grand temple pallus with seamless harmony.",
      image: "/images/sarees/saree-purple-gold.jpg",
    },
    {
      title: "Imperial Bridal Zari Brocade",
      subtitle: "The Radiance of Metallic Weaves",
      description:
        "Finely drawn silver and gold-dipped threads shaped into sacred kalash, floral jaals, and temple motifs that never lose their heirloom brilliance.",
      image: "/images/sarees/saree-white-gold.jpg",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#542D32] text-[#FAF6F0] border-y-2 border-[#B08A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          light
          subtitle="Honoring The Loom"
          title="The Poetry of Indian Silk Craftsmanship"
          description="Every authentic saree represents dozens of hours of disciplined manual precision, patient thread counting, and age-old design wisdom."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#3D1F24] border border-[#B08A4A]/30 overflow-hidden flex flex-col justify-between hover:border-[#B08A4A] transition-colors"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2D161A]">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover filter contrast-[1.05] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#792D3B] text-[10px] tracking-[0.2em] text-[#E6CA85] uppercase px-2.5 py-1 font-medium border border-[#B08A4A]/40">
                  Step 0{idx + 1}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B08A4A] font-medium">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF6F0]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FAF6F0]/80 font-light leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B08A4A]/20 flex items-center justify-between text-[11px] text-[#B08A4A]">
                  <span className="uppercase tracking-[0.18em]">Living Heritage</span>
                  <span>Pure Silk Saree</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
