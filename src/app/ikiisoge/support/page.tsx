import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サポート | 生き急げ！",
  description: "iOSアプリ「生き急げ！」のサポートページです。使い方やよくある質問をご確認いただけます。",
};

const features = [
  { title: "今年の経過率をリアルタイム表示", desc: "今年が何%過ぎたかを秒単位で表示します。アプリを開くたびに、今日の時間への意識が変わります。" },
  { title: "365日分の日替わりメッセージ", desc: "毎日異なる一言が表示されます。固定イベント（元日・大晦日など）には特別なメッセージが届きます。" },
  { title: "毎日の通知", desc: "指定した時刻にその日の進捗と一言をお知らせします。曜日・時間ごとにカスタム設定も可能です。" },
  { title: "今日の目標をSNSに投稿", desc: "今日やることを1つ書いて、X（旧Twitter）などのSNSにそのまま共有できます。" },
  { title: "ホーム画面ウィジェット", desc: "小サイズ・中サイズのウィジェットに対応しています。残り日数や経過率を常に確認できます。" },
  { title: "買い切り・広告なし", desc: "一度購入すれば追加課金なし。広告・サブスクリプションは一切ありません。" },
];

const howto = [
  { step: "1", title: "経過率を確認する", desc: "アプリを開くと今年の経過率が大きく表示されます。毎日少しずつ増える数字を眺めてください。" },
  { step: "2", title: "通知を設定する", desc: "メニュー → 設定 から毎日の通知をONにします。毎日同じ時刻、または曜日ごとに時間を設定できます。" },
  { step: "3", title: "今日の目標を書く", desc: "画面上部の「今日、何をやり切る？」をタップして目標を入力。SNSにそのまま投稿できます。" },
  { step: "4", title: "ウィジェットを追加する", desc: "ホーム画面を長押し → ウィジェットを追加 → 「生き急げ！」を選択。常に目に入る場所に置いてください。" },
];

const faqs = [
  {
    q: "通知が届きません。",
    a: "設定アプリ → 通知 → 生き急げ！ から通知が許可されているか確認してください。アプリ内の設定から通知をONにすると自動でスケジュールされます。",
  },
  {
    q: "通知は最大何日分届きますか？",
    a: "iOSの仕様上、最大64件まで事前登録できます。本アプリでは通常通知58件＋更新を促す通知6件の構成です。58日を超えると「アプリを開いて更新してください」という通知が届きます。アプリを開くと自動的に再登録されます。",
  },
  {
    q: "ウィジェットの更新頻度はどのくらいですか？",
    a: "ウィジェットは翌日0時に更新されます。リアルタイムの秒数はアプリ本体で確認してください。",
  },
  {
    q: "データはどこに保存されますか？",
    a: "通知設定などすべてのデータはお使いのデバイス内にのみ保存されます。外部サーバーへの送信は行いません。",
  },
  {
    q: "アプリを削除するとデータは消えますか？",
    a: "はい、アプリを削除すると通知設定などのデータも削除されます。",
  },
  {
    q: "SNS投稿機能で個人情報が収集されますか？",
    a: "いいえ。共有はiOS標準のシェア機能を使用しており、アプリ側でデータを収集・送信することはありません。",
  },
];

export default function IkiisougeSupportPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">サポートページ</h1>
        <p className="text-[#a3a3a3] text-sm mb-12">生き急げ！ — iOSアプリ</p>

        {/* 1. アプリ概要 */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">アプリ概要</h2>
          <p className="text-[#a3a3a3] text-sm leading-relaxed">
            「生き急げ！」は、今年が何%過ぎたかを毎日見せつける時間管理アプリです。
            焦りを可視化することで、今日を少しでも前に進めるきっかけを作ります。
            買い切り・広告なし・サブスクなし。
          </p>
        </section>

        {/* 2. 主な機能 */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">主な機能</h2>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f.title}>
                <p className="text-sm font-medium text-[#f5f5f5] mb-0.5">{f.title}</p>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{f.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. 使い方 */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">使い方</h2>
          <ol className="space-y-5">
            {howto.map((h) => (
              <li key={h.step} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#dc2626] text-white text-xs font-bold flex items-center justify-center">
                  {h.step}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#f5f5f5] mb-0.5">{h.title}</p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{h.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. よくある質問 */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">よくある質問</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <p className="text-sm font-medium text-[#f5f5f5] mb-1">Q. {faq.q}</p>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. お問い合わせ */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">お問い合わせ</h2>
          <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
            ご不明な点やご要望がございましたら、以下までお気軽にご連絡ください。
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              Mail:{" "}
              <a href="mailto:naoto.m.dev@gmail.com" className="text-[#f5f5f5] hover:underline">
                naoto.m.dev@gmail.com
              </a>
            </li>
            <li>
              X:{" "}
              <a
                href="https://x.com/naoto_dev_jp"
                className="text-[#f5f5f5] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                @naoto_dev_jp
              </a>
            </li>
          </ul>
        </section>

        <div className="mt-8 pt-8 border-t border-[#2a2a2a]">
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
