"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-[#332522]">
      {/* Background Image with optimized priority loading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Royal Indian Silk Saree Editorial"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top filter brightness-[0.78] contrast-[1.05]"
        />
        {/* Editorial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center space-x-2.5 bg-black/40 backdrop-blur-xs border border-[#B08A4A]/50 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-[#E6CA85]">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
            <span>Royal Heritage Silks</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.12] tracking-wide">
            Elegance Woven in Every Thread.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-xl">
            Discover the beauty of timeless Indian silk and celebrate the art of traditional elegance. Handcrafted weaves curated for life&apos;s most cherished milestones.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 pt-2">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center space-x-3 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-xl border border-[#B08A4A]/50 hover:border-[#B08A4A]"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
            </Link>

            <Link
              href="/our-story"
              className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/60 px-7 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300"
            >
              <span>Discover Our Story</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#792D3B] via-[#B08A4A] to-[#792D3B] z-10" />
    </section>
  );
}
