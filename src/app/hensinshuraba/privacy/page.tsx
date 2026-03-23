import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 返信修羅場",
  description: "iOSアプリ「返信修羅場」のプライバシーポリシー",
};

const sections = [
  {
    title: "収集する情報",
    content:
      "本アプリは、ユーザーの個人情報を直接収集しません。ゲームのプレイ記録（クリアタイム・ミス数・ランク・実績）はすべて端末内のUserDefaultsに保存され、外部サーバーへの送信は行いません。",
  },
  {
    title: "広告について",
    content:
      "本アプリはGoogle AdMobによる広告を表示する場合があります。広告配信のために、AdMobが端末の広告識別子（IDFA）等を利用することがあります。広告の詳細なプライバシー情報については、Googleのプライバシーポリシーをご確認ください。広告削除の課金を行った場合、広告は一切表示されません。",
  },
  {
    title: "課金・購入情報",
    content:
      "本アプリ内での課金処理はAppleのStoreKitを通じて行われます。クレジットカード情報等の決済情報は開発者には一切渡らず、Appleが管理します。",
  },
  {
    title: "App Tracking Transparency",
    content:
      "iOS 14以降では、広告トラッキングの利用前にユーザーへの許可確認を行います。トラッキングを許可しない場合でも、本アプリのすべての機能をご利用いただけます。",
  },
  {
    title: "情報の第三者提供",
    content:
      "本アプリは、法令に基づく場合を除き、収集した情報を第三者に提供・開示することはありません。",
  },
  {
    title: "お問い合わせ",
    content:
      "プライバシーポリシーに関するご質問・ご意見は、アプリ内の設定画面よりお問い合わせください。",
  },
  {
    title: "プライバシーポリシーの変更",
    content:
      "本ポリシーは必要に応じて更新される場合があります。重要な変更がある場合はアプリのアップデートにてお知らせします。最新版は常に本ページに掲載されます。",
  },
];

export default function HensinSurabaPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">プライバシーポリシー</h1>
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
            href="/hensinshuraba/terms"
            className="text-[#a3a3a3] text-sm hover:text-[#f5f5f5] transition-colors"
          >
            利用規約 →
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
