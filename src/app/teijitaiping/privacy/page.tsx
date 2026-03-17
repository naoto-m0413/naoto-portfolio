export const metadata = {
  title: "プライバシーポリシー | 定時退ピング",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5] py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">プライバシーポリシー</h1>
        <p className="text-[#555] text-sm mb-10">定時退ピング</p>

        <div className="space-y-8 text-sm text-[#a3a3a3] leading-relaxed">
          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">収集する情報</h2>
            <p>本サービスは以下の情報を収集します。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>アクセス解析情報（Vercel Analytics による匿名の利用統計）</li>
              <li>ゲームの自己ベスト・プレイ記録（お使いのブラウザの localStorage に保存）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">収集しない情報</h2>
            <p>本サービスは氏名・メールアドレスなどの個人を特定できる情報を収集しません。ユーザー登録やアカウント機能はありません。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">アクセス解析について</h2>
            <p>本サービスはVercel Analyticsを利用しています。収集されるデータは匿名化された利用統計（ページビュー・使用ブラウザなど）であり、個人を特定するものではありません。詳細はVercelのプライバシーポリシーをご確認ください。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">localStorageについて</h2>
            <p>ゲームの記録（自己ベストスコア・最速退勤時刻など）はお使いのブラウザのlocalStorageにのみ保存されます。このデータは外部サーバーには送信されません。ブラウザのデータを削除することで消去できます。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第三者への提供</h2>
            <p>収集した情報を第三者に販売・提供することはありません。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">お問い合わせ</h2>
            <p>本ポリシーに関するお問い合わせは、開発者（X: <a href="https://x.com/naoto_dev_jp" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">@naoto_dev_jp</a>）までご連絡ください。</p>
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
