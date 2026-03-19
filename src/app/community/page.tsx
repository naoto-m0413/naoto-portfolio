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

const notes = [
  "参加には事前申込をお願いします",
  "発表枠は最大5名の先着制です",
  "当日の進行によって、時間が多少前後することがあります",
  "開催はDiscordで行い、参加方法は申込後にご案内します",
];

const prohibited = [
  "他の参加者の作品やアイデアを無断で使用・転載すること",
  "相手が不快になる発言や誹謗中傷",
  "営業、勧誘、過度な宣伝",
  "許可のない録音・録画・内容の公開",
  "そのほか、運営が不適切と判断する行為",
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
            現在構想中です。内容は今後変わる可能性があります。
          </div>
          <p className="text-[#a3a3a3] text-base sm:text-lg leading-relaxed">
            自分のアプリやアイデアを持ち寄って、感想や改善案を出し合うオンラインの会です。次にやることが見えたり、個人開発者が気軽に交流できたりする場を目指しています。
          </p>
        </section>

        {/* Schedule */}
        <section className="space-y-5">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">次回開催予定</h2>
            <p className="text-sm text-[#a3a3a3]">※ 急遽中止になる場合があります</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#171717] border border-[#2a2a2a]">
              <div>
                <p className="text-sm font-medium text-[#f5f5f5]">3/25（水）20:00〜21:30</p>
                <p className="text-sm text-[#a3a3a3] mt-0.5">オンライン（Discord）</p>
              </div>
              <span className="text-sm text-[#a3a3a3] flex-shrink-0 ml-4">残り5枠</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#171717] border border-[#2a2a2a]">
              <div>
                <p className="text-sm font-medium text-[#f5f5f5]">3/28（土）14:00〜15:30</p>
                <p className="text-sm text-[#a3a3a3] mt-0.5">オンライン（Discord）</p>
              </div>
              <span className="text-sm text-[#a3a3a3] flex-shrink-0 ml-4">残り5枠</span>
            </div>
          </div>
          <p className="text-sm text-[#a3a3a3]">※ カメラ・音声・画面共有はすべて任意です。チャットのみの参加も歓迎です。</p>
        </section>

        {/* Details */}
        <section className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] space-y-1.5">
            <p className="text-xs text-[#a3a3a3] uppercase tracking-widest">開催候補</p>
            <p className="text-sm font-medium text-[#f5f5f5]">火・水・木 20:00〜21:30</p>
            <p className="text-sm font-medium text-[#f5f5f5]">土・日 14:00〜15:30</p>
          </div>
          <div className="p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] space-y-1.5">
            <p className="text-xs text-[#a3a3a3] uppercase tracking-widest">形式</p>
            <p className="text-sm font-medium text-[#f5f5f5]">オンライン</p>
            <p className="text-sm text-[#a3a3a3]">Discord</p>
          </div>
        </section>

        {/* Slots */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold">参加枠について</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#171717] border border-blue-500/20 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full font-medium">発表枠</span>
                <span className="text-xs text-[#555]">先着順</span>
              </div>
              <p className="text-sm font-medium text-[#f5f5f5]">最大5名</p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">アプリを見せてフィードバックをもらいたい方。1人あたり15〜20分程度。</p>
            </div>
            <div className="p-5 rounded-xl bg-[#171717] border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">参加枠</span>
                <span className="text-xs text-[#555]">事前申込制</span>
              </div>
              <p className="text-sm font-medium text-[#f5f5f5]">どなたでも</p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">発表せずに聞くだけでもOKです。インプット目的の参加も歓迎します。</p>
            </div>
          </div>
        </section>

        {/* Participation styles */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold">こんな方におすすめ</h2>
          <ul className="space-y-3">
            {participationStyles.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#f5f5f5] text-base">
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
          <h2 className="text-xl font-semibold">進行の流れ</h2>
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

        {/* Notes & Prohibited */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">注意事項</h2>
            <ul className="space-y-2">
              {notes.map((note, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#555] flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">禁止事項</h2>
            <ul className="space-y-2">
              {prohibited.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#555] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA section */}
        <section className="p-8 rounded-2xl bg-[#171717] border border-[#2a2a2a] text-center space-y-4">
          <p className="text-lg font-semibold">参加してみませんか？</p>
          <p className="text-sm text-[#a3a3a3]">
            発表・聞くだけ、どちらも事前申込が必要です。<br />
            申込後、登録したメールアドレス宛に参加方法（Discord）をご案内します。
          </p>
          <a
            href="https://forms.gle/vYoghyRrr6SUhArY8"
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
            href="https://forms.gle/vYoghyRrr6SUhArY8"
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
