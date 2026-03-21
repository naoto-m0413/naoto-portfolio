import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | アトデヤル",
  description: "iOSアプリ「アトデヤル」のプライバシーポリシー",
};

const sections = [
  {
    title: "収集する情報",
    content:
      "本アプリは、ユーザーの個人情報を収集しません。タスク・テンプレート・XP・レベルなどのデータはすべてお使いのデバイス内にのみ保存され、外部サーバーには送信されません。",
  },
  {
    title: "サブスクリプション・課金情報",
    content:
      "本アプリ内での課金処理はAppleのStoreKitを通じて行われます。課金情報（クレジットカード番号等）は開発者には一切通知されず、Appleが管理します。",
  },
  {
    title: "開発者へのメッセージ機能",
    content:
      "開発者応援プランの加入者は、アプリ内の専用フォームから開発者へメッセージを送ることができます。この機能はお使いのデバイスのメールアプリを経由して送信されます。フォームに入力した内容（件名・本文・返信用メールアドレス）はメールとして開発者に届きますが、開発者以外の第三者に提供されることはありません。",
  },
  {
    title: "第三者への提供",
    content: "本アプリはユーザーデータを第三者に提供しません。",
  },
  {
    title: "広告",
    content:
      "本アプリは現在広告を表示していません。将来的に広告を導入する場合は、本ポリシーを更新します。",
  },
  {
    title: "通知",
    content:
      "本アプリはユーザーの許可を得た場合にのみ通知を送信します。通知はいつでもiOSの設定からオフにできます。",
  },
  {
    title: "お子様のプライバシー",
    content:
      "本アプリは13歳未満のお子様から意図的に情報を収集することはありません。",
  },
  {
    title: "本ポリシーの変更",
    content:
      "本ポリシーは必要に応じて更新されることがあります。変更後のポリシーはアプリ内に掲載した時点で効力を生じます。",
  },
];

export default function AtodeyaruPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">プライバシーポリシー</h1>
        <p className="text-[#a3a3a3] text-sm mb-1">アトデヤル</p>
        <p className="text-[#a3a3a3] text-sm mb-10">最終更新日：2026年3月13日</p>

        <p className="text-[#d4d4d4] leading-relaxed mb-10">
          アトデヤル開発者（以下「開発者」）は、iOSアプリ「アトデヤル」（以下「本アプリ」）におけるユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
        </p>

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

          <section>
            <h2 className="text-base font-semibold mb-2 text-[#f5f5f5]">
              お問い合わせ
            </h2>
            <p className="text-[#a3a3a3] leading-relaxed text-sm">
              プライバシーに関するご質問は下記までご連絡ください。
              <br />
              <a
                href="mailto:naoto.m.dev@gmail.com"
                className="text-[#3b82f6] hover:underline"
              >
                naoto.m.dev@gmail.com
              </a>
            </p>
          </section>
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
