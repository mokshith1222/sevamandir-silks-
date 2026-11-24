"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, MessageSquare, Check, ShieldCheck } from "lucide-react";
import { WhatsAppModal } from "@/components/shared/WhatsAppModal";
import { cn } from "@/lib/utils";

const showcaseSarees = [
  {
    id: "saree-1",
    title: "Royal Temple Bride Kanjivaram",
    tagline: "Authentic South Indian Bridal Heirloom",
    src: "/images/sarees/saree-bride-red.jpg",
    fabric: "Pure Mulberry Silk",
    zari: "Pure Gold Zari",
  },
  {
    id: "saree-2",
    title: "Emerald Green Royal Banarasi",
    tagline: "Opulent Imperial Brocade",
    src: "/images/sarees/saree-emerald-banarasi.jpg",
    fabric: "Pure Katan Silk",
    zari: "Sona Rupa Zari",
  },
  {
    id: "saree-3",
    title: "Heritage Zari Temple Weave",
    tagline: "Hand-Interlocked Korvai Saree",
    src: "/images/sarees/saree-folded-zari.jpg",
    fabric: "High-Twist Silk",
    zari: "Temple Motif Zari",
  },
  {
    id: "saree-4",
    title: "Haveli Emerald & Purple Silk",
    tagline: "Festive Dual-Shade Drape",
    src: "/images/sarees/saree-haveli-green.jpg",
    fabric: "Handloom Tussar Silk",
    zari: "Antique Gold Trim",
  },
];

export function CuteHero() {
  const [activeSareeIndex, setActiveSareeIndex] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const activeSaree = showcaseSarees[activeSareeIndex];

  return (
    <>
      <section className="relative bg-[#FAF6F0] pt-32 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#B08A4A]/25">
        {/* Soft background glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B08A4A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#792D3B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Cute Eyebrow Tag */}
              <div className="inline-flex items-center space-x-2 bg-[#792D3B]/10 border border-[#B08A4A]/40 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-[#792D3B] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
                <span>Royal Heritage Silk Boutique</span>
              </div>

              {/* Clear, Beautiful Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#792D3B] font-normal leading-[1.15] tracking-wide">
                  Elegance Woven in Every Thread.
                </h1>
                <div className="w-16 h-[2px] bg-[#B08A4A] mx-auto lg:mx-0" />
              </div>

              {/* Clear, Inviting Supporting Copy */}
              <p className="text-base sm:text-lg text-[#332522]/85 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Discover the timeless grace of authentic South Indian Kanjivaram and Banarasi silk sarees. Handcrafted with 100% pure mulberry silk and exquisite gold zari for life&apos;s most cherished celebrations.
              </p>

              {/* Cute Key Feature Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                <span className="inline-flex items-center space-x-1.5 bg-white border border-[#B08A4A]/30 px-3 py-1.5 text-xs text-[#332522] shadow-xs">
                  <Check className="w-3.5 h-3.5 text-[#B08A4A]" />
                  <span>100% Pure Silk</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-white border border-[#B08A4A]/30 px-3 py-1.5 text-xs text-[#332522] shadow-xs">
                  <Check className="w-3.5 h-3.5 text-[#B08A4A]" />
                  <span>Authentic Gold Zari</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-white border border-[#B08A4A]/30 px-3 py-1.5 text-xs text-[#332522] shadow-xs">
                  <Check className="w-3.5 h-3.5 text-[#B08A4A]" />
                  <span>Bridal & Festive Heirlooms</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center space-x-2.5 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md border border-[#B08A4A]/40"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(true)}
                  className="inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Showcase Column: Clean, Complete, Cute Image Display */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-md sm:max-w-lg space-y-4">
                
                {/* Main Saree Showcase Card */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE2D7] border-2 border-[#B08A4A] shadow-2xl transition-all duration-300">
                  <Image
                    src={activeSaree.src}
                    alt={activeSaree.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-center transition-all duration-500"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#792D3B] text-[#FAF6F0] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-medium border border-[#B08A4A]/50 shadow-md">
                    {activeSaree.tagline}
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E6CA85] font-medium block">
                      Featured Saree Drape
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                      {activeSaree.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-[11px] text-white/80 pt-1">
                      <span>• {activeSaree.fabric}</span>
                      <span>• {activeSaree.zari}</span>
                    </div>
                  </div>
                </div>

                {/* Cute Saree Thumbnails Switcher */}
                <div className="bg-white p-3 border border-[#B08A4A]/30 shadow-sm flex items-center justify-between gap-2.5">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#792D3B] font-medium hidden sm:inline-block pl-1">
                    Tap Saree:
                  </span>
                  <div className="flex items-center space-x-2 flex-1 justify-around">
                    {showcaseSarees.map((saree, idx) => (
                      <button
                        key={saree.id}
                        type="button"
                        onClick={() => setActiveSareeIndex(idx)}
                        className={cn(
                          "relative w-12 h-14 sm:w-14 sm:h-16 overflow-hidden border-2 transition-all cursor-pointer",
                          activeSareeIndex === idx
                            ? "border-[#792D3B] scale-105 shadow-md ring-2 ring-[#B08A4A]"
                            : "border-transparent opacity-60 hover:opacity-100"
                        )}
                        aria-label={`View ${saree.title}`}
                      >
                        <Image
                          src={saree.src}
                          alt={saree.title}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <WhatsAppModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        productName={activeSaree.title}
      />
    </>
  );
}
