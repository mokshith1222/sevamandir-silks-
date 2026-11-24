"use client";

import React from "react";
import { X, MessageSquare, AlertCircle, PhoneCall, Copy, Check } from "lucide-react";
import { isWhatsAppConfigured, generateWhatsAppMessage } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  collectionName?: string;
  customMessage?: string;
}

export function WhatsAppModal({
  isOpen,
  onClose,
  productName,
  collectionName,
  customMessage,
}: WhatsAppModalProps) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const message = generateWhatsAppMessage({ productName, collectionName, customMessage });
  const configured = isWhatsAppConfigured();

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF6F0] border-2 border-[#B08A4A] p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#332522]/60 hover:text-[#792D3B] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex p-3 rounded-full bg-[#792D3B]/10 text-[#792D3B] mb-1">
            <MessageSquare className="w-6 h-6 text-[#792D3B]" />
          </div>
          <h3 className="font-serif text-2xl text-[#792D3B] font-semibold tracking-wide">
            {productName ? "Direct Catalogue Enquiry" : "Boutique Silk Enquiry"}
          </h3>
          <p className="text-xs text-[#332522]/70 tracking-wider uppercase font-sans">
            Sevamandir Silks • Personal Concierge
          </p>
        </div>

        {/* Notice regarding Demo Mode */}
        {!configured && (
          <div className="bg-[#F5EEE5] border-l-4 border-[#B08A4A] p-4 mb-6 text-xs text-[#332522]/90 leading-relaxed">
            <div className="flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-[#B08A4A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#792D3B] font-semibold block mb-0.5">
                  Demo Notice for Business Owner:
                </strong>
                The boutique&apos;s live WhatsApp business telephone number will be linked here once provided in <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono">src/config/site.ts</code>. Below is the exact automated enquiry message your customers will send to your WhatsApp.
              </div>
            </div>
          </div>
        )}

        {/* Message Preview */}
        <div className="bg-white p-4 border border-[#B08A4A]/25 mb-6">
          <div className="text-[11px] uppercase tracking-wider text-[#B08A4A] font-semibold mb-1">
            Prefilled Customer Message:
          </div>
          <p className="text-sm text-[#332522] italic font-serif leading-relaxed">
            &ldquo;{message}&rdquo;
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          {configured ? (
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Launch WhatsApp Chat</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#792D3B] hover:bg-[#542D32] text-[#F5EEE5] py-3 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#B08A4A]" />
                  <span>Message Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Sample Enquiry Message</span>
                </>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-center text-xs tracking-[0.18em] uppercase text-[#332522]/70 hover:text-[#792D3B] transition-colors"
          >
            Return to Catalogue
          </button>
        </div>
      </div>
    </div>
  );
}
