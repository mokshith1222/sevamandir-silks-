import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { collections } from "@/data/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const lastMod = new Date("2026-01-01");

  const collectionUrls = collections.map((col) => ({
    url: `${baseUrl}/collections/${col.slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...collectionUrls,
  ];
}
