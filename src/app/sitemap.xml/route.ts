const BASE_URL = "https://naoto-dev.vercel.app";

const urls = [
  { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "weekly", lastmod: "2026-03-18" },
  { loc: `${BASE_URL}/teijitaiping/terms`, priority: "0.3", changefreq: "monthly", lastmod: "2026-03-18" },
  { loc: `${BASE_URL}/teijitaiping/privacy`, priority: "0.3", changefreq: "monthly", lastmod: "2026-03-18" },
  { loc: `${BASE_URL}/atodeyaru/support`, priority: "0.3", changefreq: "monthly", lastmod: "2026-03-18" },
  { loc: `${BASE_URL}/privacy/atodeyaru`, priority: "0.3", changefreq: "monthly", lastmod: "2026-03-18" },
  { loc: `${BASE_URL}/privacy/ikiisoge`, priority: "0.3", changefreq: "monthly", lastmod: "2026-03-18" },
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
