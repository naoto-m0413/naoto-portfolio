import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | おきるーむ",
  description: "iOSアプリ「おきるーむ」のプライバシーポリシー",
};

const sections = [
  {
    title: "第1条（収集する情報）",
    content:
      "本アプリは、個人情報の収集を行いません。アラーム設定・QRコード・起床記録などのデータはすべてお使いの端末内にのみ保存され、外部サーバーへ送信されることはありません。",
  },
  {
    title: "第2条（カメラの利用）",
    content:
      "本アプリはQRコードのスキャンにカメラを使用します。カメラで撮影した映像はQRコードの読み取りにのみ使用し、保存・送信は一切行いません。",
  },
  {
    title: "第3条（通知の利用）",
    content:
      "本アプリはアラーム機能のためにiOSの通知システムを使用します。通知はすべて端末内でスケジュールされ、外部サーバーを経由しません。",
  },
  {
    title: "第4条（写真ライブラリへのアクセス）",
    content:
      "本アプリはQRコード画像を写真アプリに保存する場合に写真ライブラリへの書き込み権限を使用します。読み取りは行いません。",
  },
  {
    title: "第5条（広告・分析ツール）",
    content:
      "本アプリは広告を表示せず、Google Analytics等の分析ツールも使用していません。",
  },
  {
    title: "第6条（お問い合わせ）",
    content:
      "プライバシーに関するご質問は、X（@naoto_dev_jp）またはメール（naoto.m.dev@gmail.com）よりご連絡ください。",
  },
];

export default function OkiroomPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">プライバシーポリシー</h1>
        <p className="text-[#a3a3a3] text-sm mb-1">おきるーむ</p>
        <p className="text-[#a3a3a3] text-sm mb-10">最終更新日：2026年3月23日</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-base font-semibold mb-2 text-[#f5f5f5]">
                {section.title}
              </h2>
              <p className="text-[#a3a3a3] leading-relaxed text-sm">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#2a2a2a]">
          <Link
            href="/"
            className="text-[#a3a3a3] text-sm hover:text-[#f5f5f5] transition-colors"
          >
            ← ポートフォリオに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
