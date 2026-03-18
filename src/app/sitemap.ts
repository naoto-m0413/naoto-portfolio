import { MetadataRoute } from "next";

const BASE_URL = "https://naoto-dev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/teijitaiping/terms`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/teijitaiping/privacy`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/atodeyaru/support`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy/atodeyaru`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy/ikiisoge`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
