import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サポート | 今やる",
  description: "iOSアプリ「今やる」のサポートページです。使い方やよくある質問をご確認いただけます。",
};

const features = [
  { title: "タスク作成", desc: "やることをすばやく登録できます。" },
  { title: "「今やるタスク」のカード表示", desc: "1つのタスクだけを大きく表示し、迷わず着手できる画面設計になっています。" },
  { title: "タイマー機能", desc: "時間・分・秒単位で制限時間を設定できます。タイマーがあることで、まず始めるハードルを下げます。" },
  { title: "タスクの延長・保留・完了", desc: "状況に合わせてタスクの進め方を柔軟に変更できます。" },
  { title: "テンプレート機能", desc: "よく使うタスクのセットをテンプレートとして保存し、かんたんに呼び出せます。" },
  { title: "完了タスクの確認", desc: "その日に完了したタスクを振り返ることができます。" },
  { title: "ウィジェット対応", desc: "ホーム画面やロック画面に現在のタスクと残り時間を表示できます。" },
];

const howto = [
  { step: "1", title: "タスクを作成する", desc: "「＋」ボタンからタスク名とタイマーを設定して追加します。" },
  { step: "2", title: "「今やるタスク」を確認する", desc: "メイン画面に1つのタスクが大きく表示されます。これが今取り組むタスクです。" },
  { step: "3", title: "タイマーをスタートする", desc: "カードのスタートボタンを押してタイマーを開始します。時間内にタスクを進めましょう。" },
  { step: "4", title: "完了・保留・延長を選ぶ", desc: "タスクが終わったら「完了」、続きは後でやる場合は「保留」、もう少し時間が必要なら「延長」を選択します。" },
  { step: "5", title: "次のタスクへ", desc: "完了または保留にすると、次のタスクが表示されます。1つずつ積み重ねましょう。" },
];

const faqs = [
  {
    q: "タスクの順番を変えることはできますか？",
    a: "タスク一覧画面で並び替えが可能です。",
  },
  {
    q: "タイマーなしでタスクを使えますか？",
    a: "はい、タイマーを設定しないままタスクを作成することもできます。",
  },
  {
    q: "ウィジェットはどうやって追加しますか？",
    a: "iOSのホーム画面またはロック画面を長押しして編集モードに入り、「今やる」のウィジェットを追加してください。",
  },
  {
    q: "データはどこに保存されますか？",
    a: "すべてのデータはお使いのデバイス内にのみ保存されます。外部サーバーへの送信は行いません。",
  },
  {
    q: "アプリを削除するとデータは消えますか？",
    a: "はい、アプリを削除するとデータも削除されます。事前にご注意ください。",
  },
];

export default function AtodeyaruSupportPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">サポートページ</h1>
        <p className="text-[#a3a3a3] text-sm mb-12">今やる — iOSアプリ</p>

        {/* 1. アプリ概要 */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4 text-[#f5f5f5]">アプリ概要</h2>
          <p className="text-[#a3a3a3] text-sm leading-relaxed">
            「今やる」は、先延ばしを減らしてタスクを始めやすくするToDoアプリです。
            やることを一覧で並べるのではなく、「今やるタスク」を1つだけ表示することで、
            迷わず行動を開始できるように設計されています。
          </p>
        </section>

        {/* 2. 主な機能 */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4 text-[#f5f5f5]">主な機能</h2>
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
          <h2 className="text-lg font-semibold mb-4 text-[#f5f5f5]">使い方（基本操作）</h2>
          <ol className="space-y-5">
            {howto.map((h) => (
              <li key={h.step} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3b82f6] text-white text-xs font-bold flex items-center justify-center">
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
          <h2 className="text-lg font-semibold mb-4 text-[#f5f5f5]">よくある質問</h2>
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
          <h2 className="text-lg font-semibold mb-4 text-[#f5f5f5]">お問い合わせ</h2>
          <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
            ご不明な点やご要望がございましたら、以下のメールアドレスまでお気軽にお問い合わせください。
          </p>
          <a
            href="mailto:naoto.m.dev@gmail.com"
            className="text-[#3b82f6] text-sm hover:underline"
          >
            naoto.m.dev@gmail.com
          </a>
        </section>

        <div className="mt-8 pt-8 border-t border-[#2a2a2a]">
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
