"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone, MapPin, Sparkles, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppModal } from "@/components/shared/WhatsAppModal";

export function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 sm:py-28 bg-[#792D3B] text-[#FAF6F0] border-t-2 border-[#B08A4A] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B08A4A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-black/20 border border-[#B08A4A]/50 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-[#E6CA85]">
              <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
              <span>Personal Consultation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-wide text-white">
              Find Your Perfect Expression of Elegance
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-xl mx-auto">
              Whether you are curating a wedding trousseau or seeking an heirloom silk saree for a momentous gathering, our personal concierges are delighted to assist.
            </p>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp Enquiry</span>
              </button>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-transparent hover:bg-white/10 text-white border border-white/60 px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-lg"
              >
                <span>Visit Boutique & Contact</span>
              </Link>
            </div>

            {/* Store Information Placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 text-xs text-white/80 border-t border-white/15 max-w-xl mx-auto text-left">
              <div className="flex items-start space-x-3 bg-black/20 p-3.5 border border-white/10">
                <MapPin className="w-4 h-4 text-[#B08A4A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium mb-0.5">Boutique Location:</strong>
                  <span>{siteConfig.contact.addressPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-black/20 p-3.5 border border-white/10">
                <Clock className="w-4 h-4 text-[#B08A4A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium mb-0.5">Visiting Hours:</strong>
                  <span>{siteConfig.contact.timingsPlaceholder}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
