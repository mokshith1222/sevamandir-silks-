export interface Product {
  id: string;
  name: string;
  collectionSlug: string;
  collectionName: string;
  description: string;
  fabric: string;
  zari: string;
  color: string;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "kanjivaram-royal-crimson",
    name: "Royal Crimson Temple Border Kanjivaram",
    collectionSlug: "kanjivaram",
    collectionName: "Kanjivaram Silks",
    description: "Hand-interlocked Korvai weave in auspicious deep crimson with magnificent temple spire zari motifs on the pallu.",
    fabric: "100% Pure Mulberry Silk",
    zari: "Authentic Gold-Dipped Zari",
    color: "Royal Crimson & Antique Gold",
    image: "/images/sarees/saree-bride-red.jpg",
    badge: "Bespoke Heirloom",
  },
  {
    id: "kanjivaram-emerald-mayil",
    name: "Emerald Green Peacock Korvai Silk",
    collectionSlug: "kanjivaram",
    collectionName: "Kanjivaram Silks",
    description: "Rich peacock green silken body accentuated with traditional Mayil (peacock) and Chakram motifs in solid gold zari.",
    fabric: "High-Twist Pure South Silk",
    zari: "Pure Zari Weave",
    color: "Peacock Emerald & Wine Red",
    image: "/images/sarees/saree-folded-zari.jpg",
    badge: "Heritage Signature",
  },
  {
    id: "kanjivaram-mustard-rudraksh",
    name: "Mustard Gold Rudraksh Border Saree",
    collectionSlug: "kanjivaram",
    collectionName: "Kanjivaram Silks",
    description: "Luminous turmeric gold silk body framed by contrast burgundy borders carrying miniature sacred Rudraksh motifs.",
    fabric: "Pure Kanchipuram Weave",
    zari: "Fine Antique Zari",
    color: "Turmeric Gold & Deep Wine",
    image: "/images/sarees/saree-purple-gold.jpg",
  },
  {
    id: "banarasi-midnight-shikargah",
    name: "Midnight Blue Shikargah Banarasi Brocade",
    collectionSlug: "banarasi",
    collectionName: "Banarasi Collection",
    description: "A tribute to classical imperial artistry depicting flora and hunting silhouettes rendered in fine gold and silver brocade.",
    fabric: "Pure Katan Silk",
    zari: "Intricate Sona Rupa Zari",
    color: "Midnight Blue & Antique Gold",
    image: "/images/sarees/saree-emerald-banarasi.jpg",
    badge: "Collector Edition",
  },
  {
    id: "banarasi-gulab-rani",
    name: "Gulabi Rani Floral Jaal Banarasi",
    collectionSlug: "banarasi",
    collectionName: "Banarasi Collection",
    description: "Vibrant royal fuchsia pink drape enveloped with an all-over Meenakari floral jaal pattern and scalloped border.",
    fabric: "Handwoven Organza Silk",
    zari: "Cutwork Meenakari & Gold",
    color: "Rani Fuchsia & Burnished Gold",
    image: "/images/sarees/saree-pink-temple.jpg",
  },
  {
    id: "banarasi-ivory-meenakari",
    name: "Ivory & Champagne Gold Katan Brocade",
    collectionSlug: "banarasi",
    collectionName: "Banarasi Collection",
    description: "Subtle royal ivory base shimmering with understated champagne gold zari, tailored for daytime regal ceremonies.",
    fabric: "Pure Katan Weave",
    zari: "Muted Champagne Zari",
    color: "Ivory & Champagne Gold",
    image: "/images/sarees/saree-white-gold.jpg",
  },
  {
    id: "bridal-sindoor-patola",
    name: "Imperial Sindoor Bridal Silk",
    collectionSlug: "bridal",
    collectionName: "Bridal Collection",
    description: "The definitive bridal heirloom in intense vermilion red, highlighted with dense floral pallu and heavy zari detailing.",
    fabric: "Heavyweight Pure Mulberry Silk",
    zari: "24-Karat Gold Finish Zari",
    color: "Deep Sindoor Red",
    image: "/images/sarees/saree-bride-red.jpg",
    badge: "Signature Bridal",
  },
  {
    id: "bridal-wine-padma",
    name: "Deep Wine Padma Lotus Bridal Saree",
    collectionSlug: "bridal",
    collectionName: "Bridal Collection",
    description: "Opulent burgundy-wine silk interwoven with auspicious blooming Padma (lotus) motifs along the wide borders.",
    fabric: "Dual-Shaded Pure Silk",
    zari: "Antique Rose Gold Zari",
    color: "Burgundy Wine & Rose Gold",
    image: "/images/sarees/saree-champagne-gold.jpg",
  },
  {
    id: "bridal-regal-maroon",
    name: "Regal Maroon Gold Brocade Weave",
    collectionSlug: "bridal",
    collectionName: "Bridal Collection",
    description: "A commanding bridal silhouette featuring a majestic grand pallu with traditional Kalash and mango paisleys.",
    fabric: "Triple-Warp Pure Silk",
    zari: "Pure Gold Brocade",
    color: "Regal Maroon & Royal Gold",
    image: "/images/sarees/saree-haveli-green.jpg",
  },
  {
    id: "festive-saffron-sunburst",
    name: "Sunburst Saffron Tussar Festive Saree",
    collectionSlug: "festive",
    collectionName: "Festive Collection",
    description: "Lightweight festive elegance in warm sun-drenched saffron with gold tissue borders for celebratory gatherings.",
    fabric: "Pure Tussar Silk",
    zari: "Featherlight Tissue Zari",
    color: "Saffron Marigold & Gold",
    image: "/images/sarees/saree-folded-zari.jpg",
    badge: "Festive Favorite",
  },
  {
    id: "festive-teal-chandrakala",
    name: "Teal Blue Chandrakala Silk Saree",
    collectionSlug: "festive",
    collectionName: "Festive Collection",
    description: "Deep oceanic teal contrasted with delicate silver crescent moon and star patterns across the body.",
    fabric: "Soft Handloom Silk",
    zari: "Silver Zari Work",
    color: "Oceanic Teal & Pure Silver",
    image: "/images/sarees/saree-emerald-banarasi.jpg",
  },
  {
    id: "festive-copper-rust",
    name: "Copper Rust & Bronze Tissue Silk",
    collectionSlug: "festive",
    collectionName: "Festive Collection",
    description: "Modern metallic shimmer meets traditional drape in this lightweight bronze copper tissue silk creation.",
    fabric: "Tissue Mulberry Blend",
    zari: "Bronze Metallic Weave",
    color: "Copper Rust & Burnished Bronze",
    image: "/images/sarees/saree-purple-gold.jpg",
  },
];

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collectionSlug.toLowerCase() === collectionSlug.toLowerCase());
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 8);
}
