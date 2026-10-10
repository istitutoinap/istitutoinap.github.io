import type { MetadataRoute } from "next";

const siteUrl = "https://istitutoinap.it";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-10");

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/associazione/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/neuromodulazione/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
