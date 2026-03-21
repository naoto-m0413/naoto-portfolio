import { siteUrl } from "@/lib/site";
import { sitemapRoutes } from "@/lib/sitemap-routes";

export function GET() {
  const body = sitemapRoutes.map((route) => `${siteUrl}${route}`).join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
