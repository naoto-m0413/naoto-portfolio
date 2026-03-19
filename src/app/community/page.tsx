import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アプリをよくする会（iOS） | Naoto",
  description:
    "アプリを見せながら、感想や改善案を持ち寄るオンラインの会です。気軽に見せて、気軽に話して、でもちゃんと持ち帰れる場を目指しています。",
};

const participationStyles = [
  "自分のアプリや制作中のものを見せて、意見や反応をもらいたい方",
  "これからアプリを作る前に、他の人のアプリに触れてインプットしたい方",
  "今回は発表せず、まずは聞くだけで参加してみたい方",
];

const values = [
  "良い点も改善点もどちらも扱う",
  "感想だけで終わらせず、次の行動につながる話にする",
  "初参加でも入りやすい雰囲気を大切にする",
];

const flow = [
  {
    step: "01",
    title: "オープニング",
    duration: "5分",
    description: "趣旨説明とルール説明を最初に行います。",
  },
  {
    step: "02",
    title: "アプリレビュー",
    duration: "メイン",
    description:
      "4〜5人を目安に、1アプリあたり15分前後で進めます。紹介（1分）→ 体験（5〜7分）→ 制作者の意図共有（2〜3分）→ フィードバック（5〜8分）",
  },
  {
    step: "03",
    title: "クロージング",
    duration: "5分",
    description: "感想を軽く共有して、次回案内で締めます。",
  },
  {
    step: "04",
    title: "雑談",
    duration: "自由",
    description: "終了後は自由に雑談できる時間にします。ここでゆるく関係を作れたら嬉しいです。",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      {/* Header nav */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#555] hover:text-[#a3a3a3] transition-colors duration-200"
        >
          ← ポートフォリオに戻る
        </Link>
      </div>

      {/* pb-28 to avoid content hidden behind sticky bar */}
      <main className="max-w-3xl mx-auto px-6 py-16 pb-28 space-y-16">

        {/* Hero */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-medium">
              構想中
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            アプリをよくする会（iOS）
          </h1>
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-sm text-amber-300/80 leading-relaxed">
            現在この会はまだ構想段階です。日程・形式などは検討中で、今後確定次第このページを更新します。
            興味があればぜひ申し込みフォームから登録しておいてください。
          </div>
          <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-xl">
            アプリを見せながら、率直な感想や改善案を持ち寄るオンラインの会です。
            良かった点だけでなく、「もっとよくするには？」という視点で意見を交換し、
            次に何をすべきかが見える状態を目指します。
          </p>
          <p className="text-[#f5f5f5] text-base leading-relaxed border-l-2 border-blue-500/40 pl-4">
            気軽に見せて、気軽に話して、<br />
            それでもしっかり次の一手を持ち帰れる。<br />
            そんな場にしたいと思っています。
          </p>
        </section>

        {/* Schedule */}
        <section className="space-y-5">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl font-semibold">次回開催予定</h2>
            <span className="text-xs text-[#555]">※ 急遽中止になる場合があります</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#171717] border border-[#2a2a2a]">
              <div>
                <p className="text-sm font-medium text-[#f5f5f5]">3/25（水）20:00〜21:30</p>
                <p className="text-sm text-[#a3a3a3] mt-0.5">オンライン（Discord または Google Meet）</p>
              </div>
              <span className="text-sm text-[#a3a3a3] flex-shrink-0 ml-4">残り5枠</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#171717] border border-[#2a2a2a]">
              <div>
                <p className="text-sm font-medium text-[#f5f5f5]">3/28（土）14:00〜15:30</p>
                <p className="text-sm text-[#a3a3a3] mt-0.5">オンライン（Discord または Google Meet）</p>
              </div>
              <span className="text-sm text-[#a3a3a3] flex-shrink-0 ml-4">残り5枠</span>
            </div>
          </div>
          <p className="text-xs text-[#555]">※ カメラ・音声・画面共有はすべて任意です。チャットのみの参加も歓迎です。</p>
        </section>

        {/* Details */}
        <section className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] space-y-1.5">
            <p className="text-xs text-[#a3a3a3] uppercase tracking-widest">形式</p>
            <p className="text-sm font-medium text-[#f5f5f5]">オンライン</p>
            <p className="text-sm text-[#a3a3a3]">Discord または Google Meet</p>
          </div>
          <div className="p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] space-y-1.5">
            <p className="text-xs text-[#a3a3a3] uppercase tracking-widest">開催候補</p>
            <p className="text-sm font-medium text-[#f5f5f5]">火・水・木 20:00〜21:30</p>
            <p className="text-sm font-medium text-[#f5f5f5]">土・日 14:00〜15:30</p>
          </div>
        </section>

        {/* Participation styles */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold">こんな方におすすめ</h2>
          <ul className="space-y-3">
            {participationStyles.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#a3a3a3] text-sm">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Flow */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold">会の進め方</h2>
          <div className="space-y-3">
            {flow.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 p-5 rounded-xl bg-[#171717] border border-[#2a2a2a]"
              >
                <span className="text-2xl font-bold text-blue-500 flex-shrink-0 leading-none mt-0.5">
                  {item.step}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#f5f5f5]">{item.title}</p>
                    <span className="text-xs text-[#555] bg-[#0b0b0b] border border-[#2a2a2a] px-2 py-0.5 rounded">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold">大事にしたいこと</h2>
          <ul className="space-y-2">
            {values.map((v, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#a3a3a3]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA section */}
        <section className="p-8 rounded-2xl bg-[#171717] border border-[#2a2a2a] text-center space-y-4">
          <p className="text-lg font-semibold">参加してみませんか？</p>
          <p className="text-sm text-[#a3a3a3]">
            発表・聞くだけ、どちらの場合も事前申し込みをお願いします。
            <br />申し込み後、記載の連絡先にご連絡します。
          </p>
          <a
            href="https://forms.gle/9tKN4TEdDfHcCNtR9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-200"
          >
            参加申し込みフォーム
          </a>
        </section>

      </main>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#2a2a2a] bg-[#0b0b0b]/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <p className="text-sm text-[#a3a3a3] hidden sm:block">
            <span className="text-[#f5f5f5] font-medium">アプリをよくする会（iOS）</span> — 参加募集中
          </p>
          <a
            href="https://forms.gle/9tKN4TEdDfHcCNtR9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-200"
          >
            参加申し込みフォーム
          </a>
        </div>
      </div>
    </div>
  );
}
