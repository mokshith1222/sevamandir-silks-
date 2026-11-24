import React from "react";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#B08A4A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          subtitle="Catalogue Showcase"
          title="Featured Silk Masterpieces"
          description="A curated preview of authentic silk sarees. Click enquire to receive personal availability, pricing guidance, and video styling assistance."
        />

        <ProductGrid products={featured} />

        <div className="text-center pt-8">
          <Link
            href="/collections"
            className="inline-flex items-center space-x-3 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
          >
            <span>Explore Complete Boutique Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#B08A4A]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
