import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the philosophy, textile reverence, and artisanal dedication behind Sevamandir Silks.",
};

export default function OurStoryPage() {
  return (
    <div className="pt-24 pb-24 bg-[#F5EEE5]">
      {/* Editorial Hero */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#332522]">
        <Image
          src="/images/sarees/saree-champagne-gold.jpg"
          alt="Art of Indian Silk Heritage"
          fill
          priority
          sizes="100vw"
          className="object-cover filter brightness-[0.7] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 py-16">
          <div className="inline-flex items-center space-x-2 bg-black/40 border border-[#B08A4A]/50 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#E6CA85]">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
            <span>The Heritage Chronicle</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-wide">
            The Soul of Handloom Silk
          </h1>
          <p className="text-sm sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Honoring the timeless dialogue between skilled human hands, pure silk threads, and sacred traditional motifs.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              subtitle="Brand Philosophy"
              title="A Reverence for Living Traditions"
              description="In an era of rapid industrial production, handloom silk remains an oasis of contemplative beauty and generational knowledge."
            />

            <div className="space-y-4 text-sm sm:text-base text-[#332522]/85 font-light leading-relaxed">
              <p>
                At Sevamandir Silks, our curations celebrate the peerless textile diversity of India. From the heavy Korvai borders of Kanchipuram to the ethereal floral brocades of Varanasi, every drape in our collection is selected for its uncompromised purity of weave and enduring aesthetic gravity.
              </p>
              <p>
                We view each saree not as temporary fashion, but as a wearable heirloom—an ensemble chosen to mark life&apos;s most sacred ceremonies, from wedding vows to auspicious celebrations, designed to be loved today and cherished by generations to follow.
              </p>
            </div>

            {/* Note regarding demo copy */}
            <div className="bg-[#FAF6F0] border-l-4 border-[#B08A4A] p-4 text-xs text-[#332522]/80 leading-relaxed">
              <p>
                <strong className="text-[#792D3B]">Boutique Notice:</strong> This brand narrative represents our guiding aesthetic philosophy. Detailed verified historical archives and proprietor notes will be integrated upon official client launch.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-[#B08A4A]/30 shadow-2xl bg-[#EAE2D7]">
              <Image
                src="/images/sarees/saree-haveli-green.jpg"
                alt="Crafting Pure Silk Sarees"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#792D3B] text-[#FAF6F0] p-4 hidden sm:flex flex-col justify-center items-center text-center shadow-lg border border-[#B08A4A]/50">
              <span className="font-serif text-2xl font-semibold text-[#E6CA85]">100%</span>
              <span className="text-[10px] uppercase tracking-widest mt-1">Pure Silk Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars of Curation */}
      <div className="bg-[#FAF6F0] py-20 sm:py-24 border-y border-[#B08A4A]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            subtitle="The Sevamandir Standard"
            title="Our Triad of Quality"
            description="Every saree showcased in our boutique adheres to three non-negotiable principles."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5EEE5] border border-[#B08A4A]/30 p-8 space-y-4 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#792D3B]/10 flex items-center justify-center text-[#792D3B]">
                <ShieldCheck className="w-6 h-6 text-[#792D3B]" />
              </div>
              <h3 className="font-serif text-2xl text-[#792D3B]">Pure Yarn Integrity</h3>
              <p className="text-xs sm:text-sm text-[#332522]/80 font-light leading-relaxed">
                We select authentic, high-twist mulberry and tussar silk filaments, ensuring an exquisite natural drape, rich hand-feel, and enduring luster.
              </p>
            </div>

            <div className="bg-[#F5EEE5] border border-[#B08A4A]/30 p-8 space-y-4 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#792D3B]/10 flex items-center justify-center text-[#792D3B]">
                <Sparkles className="w-6 h-6 text-[#792D3B]" />
              </div>
              <h3 className="font-serif text-2xl text-[#792D3B]">Authentic Zari Artistry</h3>
              <p className="text-xs sm:text-sm text-[#332522]/80 font-light leading-relaxed">
                Featuring authentic electroplated and silver-tested zari work, rendering architectural motifs that gleam with antique warmth under celebratory light.
              </p>
            </div>

            <div className="bg-[#F5EEE5] border border-[#B08A4A]/30 p-8 space-y-4 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#792D3B]/10 flex items-center justify-center text-[#792D3B]">
                <Heart className="w-6 h-6 text-[#792D3B]" />
              </div>
              <h3 className="font-serif text-2xl text-[#792D3B]">Timeless Design Balance</h3>
              <p className="text-xs sm:text-sm text-[#332522]/80 font-light leading-relaxed">
                Avoidance of transient trends in favor of classical proportions, auspicious color harmony, and motifs with centuries of cultural meaning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#792D3B]">
          Experience The Splendor Firsthand
        </h2>
        <p className="text-sm sm:text-base text-[#332522]/80 font-light max-w-xl mx-auto leading-relaxed">
          Explore our signature silk collections or contact our styling concierges for bespoke wedding and celebratory consultations.
        </p>
        <div className="pt-2">
          <Link
            href="/collections"
            className="inline-flex items-center space-x-3 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-lg"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
