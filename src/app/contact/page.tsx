"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock, MessageSquare, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { WhatsAppModal } from "@/components/shared/WhatsAppModal";
import { isWhatsAppConfigured } from "@/lib/whatsapp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    interest: "Bridal Sarees",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-24 bg-[#F5EEE5]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-[#792D3B]/10 border border-[#B08A4A]/40 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#792D3B]">
          <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
          <span>Boutique Concierge</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#792D3B] font-normal tracking-wide">
          Contact & Enquiries
        </h1>
        <p className="text-sm sm:text-base text-[#332522]/80 max-w-2xl mx-auto font-light leading-relaxed">
          We invite you to experience Sevamandir Silks. Reach out for bespoke wedding consultations, collection enquiries, or private viewings.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Boutique Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF6F0] border border-[#B08A4A]/30 p-8 space-y-6 shadow-md">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B08A4A] font-medium block">
                  Boutique Flagship
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#792D3B]">
                  Sevamandir Silks
                </h2>
              </div>

              {/* Informational Placeholders */}
              <div className="space-y-4 text-sm text-[#332522]/80 pt-2">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-[#B08A4A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#792D3B] block font-medium">Boutique Address:</strong>
                    <span className="font-light">{siteConfig.contact.addressPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-[#B08A4A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#792D3B] block font-medium">Telephone Concierge:</strong>
                    <span className="font-light">{siteConfig.contact.phonePlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-[#B08A4A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#792D3B] block font-medium">Email Enquiries:</strong>
                    <span className="font-light">{siteConfig.contact.emailPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-[#B08A4A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#792D3B] block font-medium">Visiting Hours:</strong>
                    <span className="font-light">{siteConfig.contact.timingsPlaceholder}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-[#B08A4A]/20">
                <button
                  type="button"
                  onClick={() => setIsWhatsAppModalOpen(true)}
                  className="w-full flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Instant WhatsApp Enquiry</span>
                </button>
              </div>
            </div>

            {/* Google Maps Location Placeholder */}
            <div className="bg-[#FAF6F0] border border-[#B08A4A]/30 p-6 space-y-3 shadow-md">
              <h3 className="font-serif text-lg text-[#792D3B]">Boutique Location Map</h3>
              <div className="relative aspect-[16/9] w-full bg-[#EAE2D7] border border-[#B08A4A]/20 flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-8 h-8 text-[#B08A4A] mb-2 animate-bounce" />
                <span className="text-xs uppercase tracking-[0.18em] font-medium text-[#792D3B]">
                  Interactive Map View
                </span>
                <span className="text-[11px] text-[#332522]/70 font-light mt-1">
                  Exact Google Maps coordinates embed will be activated upon launch.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF6F0] border border-[#B08A4A]/30 p-8 sm:p-12 shadow-lg space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B08A4A] font-medium block">
                  Enquiry & Appointment
                </span>
                <h2 className="font-serif text-3xl text-[#792D3B]">
                  Send a Private Enquiry
                </h2>
                <p className="text-xs text-[#332522]/70 font-light">
                  Please share your requirements and preferred saree categories below.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#F5EEE5] border-2 border-[#B08A4A] p-6 space-y-4">
                  <div className="flex items-center space-x-3 text-[#792D3B]">
                    <CheckCircle2 className="w-6 h-6 text-[#B08A4A]" />
                    <h3 className="font-serif text-xl font-medium">Demo Submission Acknowledged</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#332522]/85 font-light leading-relaxed">
                    Thank you, <strong className="text-[#792D3B]">{formData.name || "Valued Client"}</strong>. As this is a live commercial presentation demo, form submissions do not transmit to an external inbox.
                  </p>
                  <p className="text-xs text-[#332522]/85 font-light leading-relaxed">
                    To experience live client communication, use the direct WhatsApp concierge button below:
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsWhatsAppModalOpen(true)}
                      className="inline-flex items-center space-x-2 bg-[#792D3B] text-[#FAF6F0] hover:bg-[#542D32] px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#B08A4A]" />
                      <span>Open WhatsApp Enquiry Modal</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#792D3B] font-medium mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyadarshini Rao"
                      className="w-full bg-white border border-[#B08A4A]/30 px-4 py-3 text-sm text-[#332522] focus:outline-none focus:border-[#792D3B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] text-[#792D3B] font-medium mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-[#B08A4A]/30 px-4 py-3 text-sm text-[#332522] focus:outline-none focus:border-[#792D3B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] text-[#792D3B] font-medium mb-1.5">
                        Collection of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-white border border-[#B08A4A]/30 px-4 py-3 text-sm text-[#332522] focus:outline-none focus:border-[#792D3B]"
                      >
                        <option value="Kanjivaram Silks">Kanjivaram Silks</option>
                        <option value="Banarasi Collection">Banarasi Collection</option>
                        <option value="Bridal Collection">Bridal Collection</option>
                        <option value="Festive Collection">Festive Collection</option>
                        <option value="Bespoke Trousseau Consultation">Bespoke Trousseau Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#792D3B] font-medium mb-1.5">
                      Your Message / Specific Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention color preferences, event dates, or specific saree styles you wish to explore..."
                      className="w-full bg-white border border-[#B08A4A]/30 px-4 py-3 text-sm text-[#332522] focus:outline-none focus:border-[#792D3B]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#792D3B] hover:bg-[#542D32] text-[#FAF6F0] py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors shadow-md cursor-pointer"
                    >
                      Submit Boutique Enquiry
                    </button>
                  </div>

                  <div className="flex items-start space-x-2 pt-2 text-[11px] text-[#332522]/65">
                    <AlertCircle className="w-3.5 h-3.5 text-[#B08A4A] shrink-0 mt-0.5" />
                    <span>
                      Demo Mode: Submissions demonstrate frontend validation and UI responsiveness. Live API dispatch will be activated in production.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        customMessage={
          formData.name
            ? `Hello Sevamandir Silks, this is ${formData.name}. I am interested in ${formData.interest}. Could you please guide me on availability?`
            : undefined
        }
      />
    </div>
  );
}
