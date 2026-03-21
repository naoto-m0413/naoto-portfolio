import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { sitemapRoutes } from "@/lib/sitemap-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.3,
  }));
}
