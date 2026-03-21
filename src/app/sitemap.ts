import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const sitemapRoutes = [
  "",
  "/community",
  "/teijitaiping/terms",
  "/teijitaiping/privacy",
  "/atodeyaru/support",
  "/atodeyaru/privacy",
  "/atodeyaru/terms",
  "/ikiisoge/support",
  "/privacy/atodeyaru",
  "/privacy/ikiisoge",
  "/terms/ikiisoge",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.3,
  }));
}
