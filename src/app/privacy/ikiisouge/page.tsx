import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 生き急げ！",
  description: "iOSアプリ「生き急げ！」のプライバシーポリシー",
};

const sections = [
  {
    title: "第1条（収集する情報）",
    content:
      "本アプリは、個人情報の収集を行いません。通知設定などのデータはお使いの端末内にのみ保存され、外部サーバーへ送信されることはありません。",
  },
  {
    title: "第2条（広告・分析ツール）",
    content:
      "本アプリは広告を表示せず、Google Analytics等の分析ツールも使用していません。",
  },
  {
    title: "第3条（お問い合わせ）",
    content:
      "プライバシーに関するご質問は、アプリ内の問い合わせ窓口よりご連絡ください。",
  },
];

export default function IkiisougePrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">プライバシーポリシー</h1>
        <p className="text-[#a3a3a3] text-sm mb-1">生き急げ！</p>
        <p className="text-[#a3a3a3] text-sm mb-10">最終更新日：2026年3月10日</p>

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
          <a
            href="/"
            className="text-[#a3a3a3] text-sm hover:text-[#f5f5f5] transition-colors"
          >
            ← ポートフォリオに戻る
          </a>
        </div>
      </div>
    </main>
  );
}
