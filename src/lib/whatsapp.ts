import { siteConfig } from "@/config/site";

export interface WhatsAppEnquiryOptions {
  productName?: string;
  collectionName?: string;
  customMessage?: string;
}

/**
 * Returns whether WhatsApp has been configured with an authentic business telephone number.
 */
export function isWhatsAppConfigured(): boolean {
  return Boolean(siteConfig.whatsappNumber && siteConfig.whatsappNumber.trim().length >= 10);
}

/**
 * Generates an enquiry message string formatted specifically for luxury product or collection enquiries.
 */
export function generateWhatsAppMessage(options?: WhatsAppEnquiryOptions): string {
  if (options?.customMessage) {
    return options.customMessage;
  }
  if (options?.productName) {
    return `Hello, I am interested in the ${options.productName}. Could you please share its price and availability?`;
  }
  if (options?.collectionName) {
    return `Hello, I would like to enquire about the ${options.collectionName} at Sevamandir Silks. Could you please share details?`;
  }
  return `Hello, I would like to make an enquiry regarding Sevamandir Silks collections.`;
}

/**
 * Returns a wa.me URL if configured, or null if unconfigured.
 */
export function getWhatsAppUrl(options?: WhatsAppEnquiryOptions): string | null {
  if (!isWhatsAppConfigured()) {
    return null;
  }
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const message = generateWhatsAppMessage(options);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
