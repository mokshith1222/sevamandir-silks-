"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { WhatsAppModal } from "./WhatsAppModal";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] p-3.5 sm:px-5 sm:py-3.5 shadow-xl border border-[#B08A4A] transition-all duration-300 hover:scale-105 focus:outline-none"
          aria-label="Enquire on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-[#B08A4A] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline-block ml-3 text-xs uppercase tracking-[0.18em] font-medium">
            Enquire on WhatsApp
          </span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B08A4A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B08A4A]"></span>
          </span>
        </button>
      </div>

      <WhatsAppModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
