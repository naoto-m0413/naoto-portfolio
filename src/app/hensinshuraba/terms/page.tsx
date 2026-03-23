import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | 返信修羅場",
  description: "iOSアプリ「返信修羅場」の利用規約",
};

const sections = [
  {
    title: "はじめに",
    content:
      "本利用規約（以下「本規約」）は、松永直人（以下「開発者」）が提供するiOSアプリ「返信修羅場」（以下「本アプリ」）の利用条件を定めるものです。本アプリをご利用いただいた場合、本規約に同意したものとみなします。",
  },
  {
    title: "利用条件",
    content:
      "本アプリはApple App Storeを通じて配信されるiOSアプリです。ご利用にはApple IDおよびiOS 17.0以上の端末が必要です。本アプリのご利用にあたっては、Appleのサービス利用規約にも従うものとします。",
  },
  {
    title: "課金・返金",
    content:
      "本アプリは一部有料機能（広告削除）を提供します。購入はAppleのStoreKitを通じて行われ、返金についてはAppleの返金ポリシーに従います。一度購入した広告削除は、同一Apple IDでの「購入の復元」機能によって再適用できます。",
  },
  {
    title: "禁止事項",
    content:
      "以下の行為を禁止します。①本アプリのリバースエンジニアリング・改ざん・再配布、②本アプリを利用した違法行為または第三者への迷惑行為、③本アプリのコンテンツを無断で転載・複製する行為。",
  },
  {
    title: "免責事項",
    content:
      "本アプリはエンターテインメント目的で提供されます。開発者は本アプリの利用によって生じた損害について、いかなる責任も負いません。また、アプリの継続的な提供・特定機能の維持を保証するものではありません。",
  },
  {
    title: "知的財産権",
    content:
      "本アプリに含まれるテキスト・デザイン・ゲームコンテンツ等の知的財産権は開発者に帰属します。ただし、シェア機能を通じたスコアのシェアなどの通常利用は許可されます。",
  },
  {
    title: "規約の変更",
    content:
      "開発者は必要に応じて本規約を変更する場合があります。重要な変更はアプリのアップデートにてお知らせします。変更後も本アプリを継続してご利用いただいた場合、変更後の規約に同意したものとみなします。",
  },
  {
    title: "お問い合わせ",
    content:
      "本規約に関するご質問は、アプリ内の設定画面よりお問い合わせください。",
  },
];

export default function HensinSurabaTermsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">利用規約</h1>
        <p className="text-[#a3a3a3] text-sm mb-1">返信修羅場</p>
        <p className="text-[#555] text-sm mb-10">最終更新日：2026年3月23日</p>

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

        <div className="mt-16 pt-8 border-t border-[#2a2a2a] flex flex-col gap-3">
          <Link
            href="/hensinshuraba/privacy"
            className="text-[#a3a3a3] text-sm hover:text-[#f5f5f5] transition-colors"
          >
            プライバシーポリシー →
          </Link>
          <Link
            href="/"
            className="text-[#555] text-sm hover:text-[#a3a3a3] transition-colors"
          >
            ← ポートフォリオに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
