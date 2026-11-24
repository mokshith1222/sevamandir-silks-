import React from "react";
import { CuteHero } from "@/components/home/CuteHero";
import { BrandIntroduction } from "@/components/home/BrandIntroduction";
import { CollectionGrid } from "@/components/home/CollectionGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Craftsmanship } from "@/components/home/Craftsmanship";
import { BrandStoryPreview } from "@/components/home/BrandStoryPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <CuteHero />
      <BrandIntroduction />
      <CollectionGrid />
      <FeaturedProducts />
      <Craftsmanship />
      <BrandStoryPreview />
      <GalleryPreview />
      <ContactCTA />
    </main>
  );
}
