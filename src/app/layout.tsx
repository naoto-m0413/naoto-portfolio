import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Naoto | Portfolio",
  description: "アプリを作り、発信し、形にしていく人のポートフォリオサイト。個人開発・Web制作・発信活動の記録。",
  openGraph: {
    title: "Naoto | Portfolio",
    description: "アプリを作り、発信し、形にしていく人のポートフォリオサイト。",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Naoto | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naoto | Portfolio",
    description: "アプリを作り、発信し、形にしていく人のポートフォリオサイト。",
    images: [`${siteUrl}/og-image.png`],
  },
  verification: {
    google: "pPM9FKpm0IPc859D8dIFY0ywEPHwtuiMguOjOXpOvho",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
