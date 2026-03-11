import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naoto | Portfolio",
  description: "アプリを作り、発信し、形にしていく人のポートフォリオサイト。個人開発・Web制作・発信活動の記録。",
  openGraph: {
    title: "Naoto | Portfolio",
    description: "アプリを作り、発信し、形にしていく人のポートフォリオサイト。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
