export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Imperial Crimson Temple Kanjivaram",
    category: "Bridal Heirloom",
    image: "/images/sarees/saree-bride-red.jpg",
    description: "Authentic temple-border bridal Kanjivaram silk saree adorned with dense 24K gold zari work.",
  },
  {
    id: "gallery-2",
    title: "Royal Emerald Banarasi Brocade",
    category: "Banarasi Heritage",
    image: "/images/sarees/saree-emerald-banarasi.jpg",
    description: "Opulent emerald green pure katan silk saree featuring all-over gold brocade and royal border.",
  },
  {
    id: "gallery-3",
    title: "Handwoven Zari Thali Masterpiece",
    category: "Pure Zari Weave",
    image: "/images/sarees/saree-folded-zari.jpg",
    description: "Magnificent folded crimson silk with interlocked zari pallu and traditional temple jewelry ensemble.",
  },
  {
    id: "gallery-4",
    title: "Champagne Gold Architectural Silk",
    category: "Royal Festive",
    image: "/images/sarees/saree-champagne-gold.jpg",
    description: "Subtle champagne gold drape framed with rich maroon and copper-gold zari borders.",
  },
  {
    id: "gallery-5",
    title: "Haveli Emerald & Purple Border",
    category: "Signature Handloom",
    image: "/images/sarees/saree-haveli-green.jpg",
    description: "Vibrant emerald green silk body complemented by high-contrast purple and gold peacock borders.",
  },
  {
    id: "gallery-6",
    title: "Pink Lotus Korvai Bridal Silk",
    category: "Bridal Grandeur",
    image: "/images/sarees/saree-pink-temple.jpg",
    description: "The definitive wedding silk saree draped in classical South Indian bridal splendor.",
  },
];
