import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アプリをよくする会 | Naoto",
  description:
    "アプリを見せながら、感想や改善案を持ち寄るオンラインの会です。気軽に見せて、気軽に話して、でもちゃんと持ち帰れる場を目指しています。",
};

const participationStyles = [
  "いま作っているアプリを見せて意見をもらいたい",
  "すでに出しているアプリを見せて反応を聞きたい",
  "これから作る前に、他の人のアプリを見てインプットしたい",
  "今回は発表せず、聞くだけで参加したい",
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

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* Hero */}
        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">参加募集中</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            アプリをよくする会
          </h1>
          <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-xl">
            アプリを見せながら、感想や改善案を持ち寄るオンラインの会です。
            良かった点だけでなく、もっとよくするための視点も交換しながら、
            次の一手が見える場を目指しています。
          </p>
          <p className="text-[#f5f5f5] text-base leading-relaxed border-l-2 border-blue-500/40 pl-4">
            気軽に見せて、気軽に話して、でもちゃんと持ち帰れる。
            <br />そんな場にしたいと思っています。
          </p>
        </section>

        {/* Details */}
        <section className="grid sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] space-y-1.5">
            <p className="text-xs text-[#555] uppercase tracking-widest">形式</p>
            <p className="text-sm text-[#f5f5f5]">オンライン</p>
            <p className="text-xs text-[#a3a3a3]">Discord または Google Meet</p>
          </div>
          <div className="p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] space-y-1.5">
            <p className="text-xs text-[#555] uppercase tracking-widest">開催候補</p>
            <p className="text-sm text-[#f5f5f5]">火・水・木 20:00〜21:30</p>
            <p className="text-xs text-[#a3a3a3]">土・日 14:00〜15:30</p>
          </div>
          <div className="p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] space-y-1.5">
            <p className="text-xs text-[#555] uppercase tracking-widest">1人あたり</p>
            <p className="text-sm text-[#f5f5f5]">15〜20分</p>
            <p className="text-xs text-[#a3a3a3]">カメラ・音声は自由</p>
          </div>
        </section>

        {/* Participation styles */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold">こんな参加ができます</h2>
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
                <span className="text-2xl font-bold text-[#2a2a2a] flex-shrink-0 leading-none mt-0.5">
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

        {/* CTA */}
        <section className="p-8 rounded-2xl bg-[#171717] border border-[#2a2a2a] text-center space-y-4">
          <p className="text-lg font-semibold">参加してみませんか？</p>
          <p className="text-sm text-[#a3a3a3]">
            発表する方は事前フォームの提出をお願いします。
            <br />聞くだけの参加も大歓迎です。
          </p>
          <a
            href="https://x.com/naoto_dev_jp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-200"
          >
            X (Twitter) で声をかける
          </a>
        </section>

      </main>
    </div>
  );
}
