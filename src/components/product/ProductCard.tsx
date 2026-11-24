"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Sparkles, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { WhatsAppModal } from "@/components/shared/WhatsAppModal";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-[#FAF6F0] border border-[#B08A4A]/25 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#B08A4A]">
        {/* Product Image Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE2D7]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 bg-[#792D3B] text-[#FAF6F0] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium shadow-sm border border-[#B08A4A]/40">
              {product.badge}
            </div>
          )}

          {/* Quick Category link */}
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-[#FAF6F0] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1">
            {product.collectionName}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-serif text-lg sm:text-xl text-[#792D3B] font-medium leading-snug line-clamp-1 group-hover:text-[#B08A4A] transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-[#332522]/80 line-clamp-2 leading-relaxed font-light">
              {product.description}
            </p>

            <div className="pt-2 text-[11px] space-y-1 text-[#332522]/70 border-t border-[#B08A4A]/15">
              <div className="flex justify-between">
                <span className="font-medium text-[#792D3B]">Fabric:</span>
                <span>{product.fabric}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#792D3B]">Zari:</span>
                <span>{product.zari}</span>
              </div>
            </div>
          </div>

          {/* Enquiry Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center space-x-2 bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] py-2.5 px-4 text-xs uppercase tracking-[0.18em] font-medium transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B08A4A]" />
              <span>Enquire for Price</span>
            </button>
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
        collectionName={product.collectionName}
      />
    </>
  );
}
