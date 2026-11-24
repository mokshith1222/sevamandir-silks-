import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collections.map((col) => ({
    slug: col.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: `${collection.title} | SEVAMANDIR SILKS`,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsByCollection(collection.slug);
  const otherCollections = collections.filter((c) => c.slug !== collection.slug);

  return (
    <div className="pt-24 pb-24 bg-[#F5EEE5]">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center space-x-2 text-xs tracking-[0.18em] uppercase text-[#332522]/60">
          <Link href="/" className="hover:text-[#792D3B] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08A4A]" />
          <Link href="/collections" className="hover:text-[#792D3B] transition-colors">
            Collections
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B08A4A]" />
          <span className="text-[#792D3B] font-semibold">{collection.title}</span>
        </nav>
      </div>

      {/* Collection Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="relative overflow-hidden bg-[#542D32] text-[#FAF6F0] border-2 border-[#B08A4A] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Narrative */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-black/30 border border-[#B08A4A]/50 px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#E6CA85] w-fit">
                <Sparkles className="w-3 h-3 text-[#B08A4A]" />
                <span>{collection.tagline}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
                {collection.title}
              </h1>

              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-xl">
                {collection.editorial}
              </p>

              <div className="pt-2 text-xs text-[#E6CA85] tracking-widest uppercase">
                {products.length} Curated Masterpieces Available for Enquiry
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#3D1F24]">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#542D32]/80 via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="flex flex-col sm:flex-row items-baseline justify-between border-b border-[#B08A4A]/20 pb-4 gap-2">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#792D3B]">
              Available Designs
            </h2>
            <p className="text-xs text-[#332522]/70 font-light pt-1">
              Pure silk weaves. Price and availability provided via WhatsApp concierge.
            </p>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#B08A4A]">
            Showing {products.length} Designs
          </span>
        </div>

        <ProductGrid products={products} />
      </div>

      {/* Related Collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-[#B08A4A]/20">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B08A4A] font-medium">
              Explore More Weaves
            </span>
            <h3 className="font-serif text-3xl text-[#792D3B]">
              Other Signature Collections
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCollections.map((rel) => (
              <Link
                key={rel.slug}
                href={`/collections/${rel.slug}`}
                className="group relative bg-[#FAF6F0] border border-[#B08A4A]/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE2D7]">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] tracking-widest uppercase text-[#E6CA85] block">
                      {rel.tagline}
                    </span>
                    <h4 className="font-serif text-xl text-white font-medium">
                      {rel.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
