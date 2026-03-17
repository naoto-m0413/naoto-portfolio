export const metadata = {
  title: "利用規約 | 定時退ピング",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5] py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">利用規約</h1>
        <p className="text-[#555] text-sm mb-10">定時退ピング</p>

        <div className="space-y-8 text-sm text-[#a3a3a3] leading-relaxed">
          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第1条（適用）</h2>
            <p>本規約は、個人開発者 Naoto（以下「開発者」）が提供するブラウザゲーム「定時退ピング」（以下「本サービス」）の利用に関する条件を定めるものです。本サービスを利用した時点で、本規約に同意したものとみなします。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第2条（利用環境）</h2>
            <p>本サービスはPCブラウザ（Google Chrome・Safari・Edge 最新版）を推奨環境とします。推奨環境以外での動作は保証しません。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第3条（禁止事項）</h2>
            <p>以下の行為を禁止します。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>本サービスのコンテンツを無断で複製・転載・二次配布すること</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>その他、開発者が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第4条（免責事項）</h2>
            <p>本サービスは無償で提供されます。開発者は、本サービスの利用により生じたいかなる損害についても責任を負いません。また、予告なくサービスを変更・停止する場合があります。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第5条（規約の変更）</h2>
            <p>開発者は必要に応じて本規約を変更できるものとします。変更後は本ページに掲載した時点から効力を生じるものとします。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第6条（お問い合わせ）</h2>
            <p>本規約に関するお問い合わせは以下までご連絡ください。</p>
            <ul className="mt-2 space-y-1">
              <li>X: <a href="https://x.com/naoto_dev_jp" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">@naoto_dev_jp</a></li>
              <li>Mail: <a href="mailto:naoto.m.dev@gmail.com" className="text-blue-400 hover:underline">naoto.m.dev@gmail.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第7条（準拠法）</h2>
            <p>本規約は日本法に準拠します。</p>
          </section>
        </div>

        <p className="text-[#555] text-xs mt-12">最終更新：2026年3月</p>

        <div className="mt-8">
          <a
            href="https://naoto-dev.vercel.app"
            className="inline-flex items-center gap-2 text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
          >
            ← ポートフォリオに戻る
          </a>
        </div>
      </div>
    </div>
  );
}
