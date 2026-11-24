export interface Collection {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  editorial: string;
  image: string;
  accent: string;
  itemCount: number;
}

export const collections: Collection[] = [
  {
    slug: "kanjivaram",
    title: "Kanjivaram Silks",
    tagline: "The Golden Heirloom of South India",
    description: "Woven with pure mulberry silk and interlocked gold and silver zari, embodying regal grace.",
    editorial: "Renowned for its heavy weight, contrast borders, and timeless temple motifs, the Kanjivaram silk saree is woven with traditional Korvai techniques where body and border are conjoined with unmatched precision.",
    image: "/images/sarees/saree-folded-zari.jpg",
    accent: "#B08A4A",
    itemCount: 3,
  },
  {
    slug: "banarasi",
    title: "Banarasi Collection",
    tagline: "Splendor from the Ancient Weavers of Varanasi",
    description: "Opulent pure silk brocades adorned with floral jaal, paisleys, and intricate metallic weaves.",
    editorial: "A symphony of gold and silver zari with Mughal-inspired motifs, Banarasi sarees capture royal poise and centuries of revered Indian artisanal artistry.",
    image: "/images/sarees/saree-emerald-banarasi.jpg",
    accent: "#792D3B",
    itemCount: 3,
  },
  {
    slug: "bridal",
    title: "Bridal Collection",
    tagline: "Couture Silks for the Grandest Celebrations",
    description: "Magnificent bridal weaves crafted in auspicious shades of crimson, vermilion, and antique gold.",
    editorial: "Designed for memories that transcend generations, each bridal masterpiece combines resplendent drape, celebratory radiance, and opulent zari work.",
    image: "/images/sarees/saree-bride-red.jpg",
    accent: "#542D32",
    itemCount: 3,
  },
  {
    slug: "festive",
    title: "Festive Collection",
    tagline: "Effortless Radiance for Every Auspicious Moment",
    description: "Lighter weaves and vibrant color combinations celebrating tradition with contemporary poise.",
    editorial: "Striking the ideal harmony between comfort and regal presence, our festive silk curations illuminate Diwali, family celebrations, and grand soirées.",
    image: "/images/sarees/saree-haveli-green.jpg",
    accent: "#B08A4A",
    itemCount: 3,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((col) => col.slug.toLowerCase() === slug.toLowerCase());
}
