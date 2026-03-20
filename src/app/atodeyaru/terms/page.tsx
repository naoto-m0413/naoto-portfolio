import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | アトデヤル",
  description: "iOSアプリ「アトデヤル」の利用規約",
};

const articles = [
  {
    title: "第1条　適用",
    content:
      "本規約は、ユーザーと開発者との間の本アプリの利用に関わる一切の関係に適用されます。",
  },
  {
    title: "第2条　利用条件",
    content:
      "本アプリはApp Storeを通じて提供されます。ユーザーはAppleのApp Store利用規約に同意した上で本アプリをご利用ください。",
  },
  {
    title: "第3条　無料体験期間",
    content:
      "本アプリはインストール日から5日間、すべての機能を無料でご利用いただける体験期間を設けています。この期間はAppleのサブスクリプション機能とは独立した、アプリ独自の仕組みです。体験期間終了後は、無料版の制限内でのご利用またはサブスクリプションへの加入が必要です。",
  },
  {
    title: "第4条　サブスクリプション",
    content:
      "本アプリは以下の自動更新サブスクリプションを提供しています。\n\n【プレミアムプラン】月額300円（税込）\n【開発者応援プラン】月額500円（税込）\n\n・サブスクリプションの料金は、購入確認時にApple IDに課金されます。\n・サブスクリプションは有効期間終了の24時間以上前に解約しない限り、自動的に更新されます。\n・プランの変更・解約は、App Storeの「設定」→「サブスクリプション」から行えます。\n・解約後も現在の有効期間が終了するまでご利用いただけます。",
  },
  {
    title: "第5条　無料版の制限",
    content:
      "無料体験期間終了後、サブスクリプションに加入しない場合は以下の制限が適用されます。\n・タスクは5個まで\n・テンプレートは1個まで\n\n体験期間中に上限を超えたデータがある場合、最終利用順に制限数までが保持され、超過分は削除されます。",
  },
  {
    title: "第6条　禁止事項",
    content:
      "ユーザーは以下の行為を行ってはなりません。\n・本アプリを逆コンパイル、リバースエンジニアリングする行為\n・本アプリを利用して違法または不正な行為を行う行為\n・その他、開発者が不適切と判断する行為",
  },
  {
    title: "第7条　免責事項",
    content:
      "開発者は、本アプリの利用によってユーザーに生じた損害について、一切の責任を負いません。本アプリは現状有姿で提供され、動作の完全性や特定目的への適合性を保証するものではありません。",
  },
  {
    title: "第8条　サービスの変更・終了",
    content:
      "開発者は、ユーザーへの通知なく本アプリの内容の変更または提供の終了をすることができます。",
  },
  {
    title: "第9条　規約の変更",
    content:
      "開発者は必要に応じて本規約を変更することがあります。変更後の規約はアプリ内に掲載した時点で効力を生じます。",
  },
  {
    title: "第10条　準拠法",
    content: "本規約の解釈にあたっては、日本法を準拠法とします。",
  },
];

export default function AtodeyaruTermsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">利用規約</h1>
        <p className="text-[#a3a3a3] text-sm mb-1">アトデヤル</p>
        <p className="text-[#a3a3a3] text-sm mb-10">最終更新日：2026年3月13日</p>

        <p className="text-[#d4d4d4] leading-relaxed mb-10">
          本利用規約（以下「本規約」）は、アトデヤル開発者（以下「開発者」）が提供するiOSアプリ「アトデヤル」（以下「本アプリ」）の利用条件を定めるものです。本アプリをご利用いただく前に、本規約をよくお読みください。
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <section key={article.title}>
              <h2 className="text-base font-semibold mb-2 text-[#f5f5f5]">
                {article.title}
              </h2>
              <p className="text-[#a3a3a3] leading-relaxed text-sm whitespace-pre-line">
                {article.content}
              </p>
            </section>
          ))}

          <section>
            <h2 className="text-base font-semibold mb-2 text-[#f5f5f5]">
              お問い合わせ
            </h2>
            <p className="text-[#a3a3a3] leading-relaxed text-sm">
              本規約に関するご質問は下記までご連絡ください。
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
