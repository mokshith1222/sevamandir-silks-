"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RotateCcw,
  Sparkles,
  ArrowRight,
  Maximize2,
  Play,
  Pause,
  Compass,
  Info,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Curated 360 multi-angle frames for the complete silk saree drape
const frames360 = [
  {
    angle: 0,
    label: "Front Grand Drape (0°)",
    src: "/images/360/frame-0.jpg",
    subtitle: "Complete royal bridal vermilion weave with temple border",
  },
  {
    angle: 45,
    label: "Quarter Pallu Angle (45°)",
    src: "/images/360/frame-1.jpg",
    subtitle: "Fluid drape showcasing Korvai border alignment",
  },
  {
    angle: 90,
    label: "Right Profile Silhouette (90°)",
    src: "/images/360/frame-2.jpg",
    subtitle: "Fall and pleat structure of heavy mulberry silk",
  },
  {
    angle: 135,
    label: "Pallu Turn & Weave (135°)",
    src: "/images/360/frame-3.jpg",
    subtitle: "Interlocking gold zari shuttle details",
  },
  {
    angle: 180,
    label: "Grand Architectural Pallu (180°)",
    src: "/images/360/frame-4.jpg",
    subtitle: "The majestic back pallu featuring traditional motifs",
  },
  {
    angle: 225,
    label: "Reverse Silhouette (225°)",
    src: "/images/360/frame-5.jpg",
    subtitle: "Full rear elegance and contour drape",
  },
  {
    angle: 270,
    label: "Left Profile & Pleats (270°)",
    src: "/images/360/frame-6.jpg",
    subtitle: "Evenly pleated handloom folds and contrast border",
  },
  {
    angle: 315,
    label: "Macro Zari Radiance (315°)",
    src: "/images/360/frame-7.jpg",
    subtitle: "Luminous reflection of authentic zari under warm light",
  },
];

// Interactive craftsmanship inspection hotspots
const hotspots = [
  {
    id: "hotspot-pallu",
    top: "38%",
    left: "62%",
    title: "Sacred Temple Pallu",
    desc: "Dense gold-dipped zari woven with traditional gopuram architectural motifs.",
  },
  {
    id: "hotspot-korvai",
    top: "70%",
    left: "42%",
    title: "Interlocked Korvai Join",
    desc: "Seamless interlocking of contrast burgundy border into the crimson body.",
  },
  {
    id: "hotspot-silk",
    top: "52%",
    left: "28%",
    title: "Pure Mulberry Silk",
    desc: "Grade-A mulberry silk filaments imparting natural weight and majestic sheen.",
  },
];

export function InteractiveHero360() {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Auto rotation loop
  useEffect(() => {
    if (!isAutoRotating || isDragging) return;

    const interval = setInterval(() => {
      setCurrentFrameIndex((prev) => (prev + 1) % frames360.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging]);

  // Drag interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartX;
      const sensitivity = 40; // pixels per frame

      if (Math.abs(deltaX) > sensitivity) {
        const step = deltaX > 0 ? 1 : -1;
        setCurrentFrameIndex((prev) => {
          const next = prev + step;
          if (next < 0) return frames360.length - 1;
          if (next >= frames360.length) return 0;
          return next;
        });
        setDragStartX(e.clientX);
      }
    },
    [isDragging, dragStartX]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch drag for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartX;
    const sensitivity = 30;

    if (Math.abs(deltaX) > sensitivity) {
      const step = deltaX > 0 ? 1 : -1;
      setCurrentFrameIndex((prev) => {
        const next = prev + step;
        if (next < 0) return frames360.length - 1;
        if (next >= frames360.length) return 0;
        return next;
      });
      setDragStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const currentFrame = frames360[currentFrameIndex];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#2A171A] text-[#FAF6F0] overflow-hidden flex flex-col justify-between pt-24 pb-12 border-b-2 border-[#B08A4A]">
      {/* Subtle luxury ambient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#B08A4A_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#792D3B]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#B08A4A]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & Call to Actions */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Interactive Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-black/40 border border-[#B08A4A]/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#E6CA85] shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#B08A4A] animate-spin-slow" />
              <span>Interactive 360° Drape Experience</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12] tracking-wide">
                Elegance Woven in Every Thread.
              </h1>
              <div className="w-16 h-[1.5px] bg-[#B08A4A] mx-auto lg:mx-0" />
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Discover the full, unfiltered beauty of royal Indian silk. Rotate 360° to inspect authentic hand-interlocked Korvai borders, pure mulberry silk sheen, and radiant gold zari from every angle.
            </p>

            {/* Quick Angle Presets */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B08A4A] block mb-2 font-medium">
                Select Saree Perspective:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  { idx: 0, name: "0° Front" },
                  { idx: 2, name: "90° Profile" },
                  { idx: 4, name: "180° Pallu" },
                  { idx: 6, name: "270° Pleats" },
                ].map((item) => (
                  <button
                    key={item.idx}
                    type="button"
                    onClick={() => {
                      setCurrentFrameIndex(item.idx);
                      setIsAutoRotating(false);
                    }}
                    className={cn(
                      "px-3 py-1.5 text-xs uppercase tracking-[0.15em] border transition-all duration-200 cursor-pointer",
                      currentFrameIndex === item.idx
                        ? "border-[#B08A4A] bg-[#792D3B] text-[#FAF6F0] font-semibold"
                        : "border-white/20 bg-black/20 text-white/70 hover:border-[#B08A4A]/50 hover:text-white"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                href="/collections"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-xl border border-[#B08A4A]/60"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
              </Link>

              <Link
                href="/our-story"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/50 px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                <span>Discover Our Story</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 360 Interactive Saree Showcase */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-xl mx-auto">
              
              {/* Outer Luxury Frame */}
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={cn(
                  "relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden border-2 border-[#B08A4A] bg-[#1F1013] shadow-2xl select-none transition-all cursor-grab active:cursor-grabbing",
                  isDragging && "cursor-grabbing ring-2 ring-[#B08A4A]"
                )}
              >
                {/* Complete Image Display */}
                <Image
                  src={currentFrame.src}
                  alt={currentFrame.label}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center filter contrast-[1.05] transition-opacity duration-300"
                />

                {/* Subtle vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge: Degree and View Description */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-md border border-[#B08A4A]/50 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#E6CA85]">
                    {currentFrame.label}
                  </div>

                  <div className="bg-black/60 backdrop-blur-md border border-[#B08A4A]/50 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B08A4A] animate-ping" />
                    <span>360° LIVE</span>
                  </div>
                </div>

                {/* Interactive Inspection Hotspots */}
                {hotspots.map((spot) => (
                  <div
                    key={spot.id}
                    style={{ top: spot.top, left: spot.left }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group"
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
                      }}
                      className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#792D3B]/90 text-[#FAF6F0] border border-[#B08A4A] shadow-lg transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                      aria-label={spot.title}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E6CA85]" />
                      <span className="absolute -inset-1 rounded-full border border-[#B08A4A] animate-ping opacity-60 pointer-events-none" />
                    </button>

                    {/* Popover Callout */}
                    {(activeHotspot === spot.id || false) && (
                      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-48 bg-[#FAF6F0] text-[#332522] p-3 shadow-2xl border border-[#B08A4A] text-left text-xs z-30 animate-in fade-in zoom-in-95 duration-200">
                        <strong className="block text-[#792D3B] font-serif text-sm mb-0.5">
                          {spot.title}
                        </strong>
                        <p className="text-[11px] leading-relaxed text-[#332522]/80">
                          {spot.desc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Center Drag Hint overlay (fades after interaction) */}
                <div className="absolute inset-x-0 bottom-6 flex flex-col items-center justify-center text-center pointer-events-none">
                  <div className="bg-black/65 backdrop-blur-md border border-[#B08A4A]/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90 shadow-md">
                    <span>⇄ Drag left/right to rotate 360°</span>
                  </div>
                  <span className="text-[10px] text-[#E6CA85] tracking-wider mt-1 font-light">
                    {currentFrame.subtitle}
                  </span>
                </div>
              </div>

              {/* 360 Interactive Control Bar */}
              <div className="mt-4 bg-[#1F1013] border border-[#B08A4A]/40 p-3 sm:p-4 flex items-center justify-between gap-3 text-xs shadow-md">
                {/* Prev / Next controls */}
                <div className="flex items-center space-x-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentFrameIndex((prev) =>
                        prev === 0 ? frames360.length - 1 : prev - 1
                      );
                      setIsAutoRotating(false);
                    }}
                    className="p-2 border border-white/20 bg-black/30 hover:border-[#B08A4A] hover:text-[#B08A4A] transition-colors cursor-pointer"
                    aria-label="Previous Angle"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCurrentFrameIndex((prev) => (prev + 1) % frames360.length);
                      setIsAutoRotating(false);
                    }}
                    className="p-2 border border-white/20 bg-black/30 hover:border-[#B08A4A] hover:text-[#B08A4A] transition-colors cursor-pointer"
                    aria-label="Next Angle"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Angle Progress Track */}
                <div className="flex-1 max-w-xs flex items-center space-x-1">
                  {frames360.map((f, i) => (
                    <button
                      key={f.angle}
                      type="button"
                      onClick={() => {
                        setCurrentFrameIndex(i);
                        setIsAutoRotating(false);
                      }}
                      className={cn(
                        "h-1.5 flex-1 transition-all duration-300",
                        currentFrameIndex === i
                          ? "bg-[#B08A4A] scale-y-125"
                          : "bg-white/20 hover:bg-white/40"
                      )}
                      aria-label={`Go to ${f.label}`}
                    />
                  ))}
                </div>

                {/* Auto-Rotate Play/Pause toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                    className={cn(
                      "inline-flex items-center space-x-1.5 px-3 py-1.5 border text-[11px] uppercase tracking-[0.15em] transition-colors cursor-pointer",
                      isAutoRotating
                        ? "border-[#B08A4A] bg-[#792D3B] text-[#FAF6F0]"
                        : "border-white/20 bg-black/30 text-white/80 hover:text-white"
                    )}
                  >
                    {isAutoRotating ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-[#E6CA85]" />
                        <span className="hidden sm:inline">Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-[#E6CA85]" />
                        <span className="hidden sm:inline">Auto 360°</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Golden Divider */}
      <div className="h-[2px] bg-gradient-to-r from-[#792D3B] via-[#B08A4A] to-[#792D3B] w-full" />
    </section>
  );
}
