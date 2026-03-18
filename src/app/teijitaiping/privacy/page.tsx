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
              <li>広告配信のためのCookie情報（Google AdSense による）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">収集しない情報</h2>
            <p>本サービスは氏名・メールアドレスなどの個人を特定できる情報を収集しません。ユーザー登録やアカウント機能はありません。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">広告の配信について</h2>
            <p>本サービスはGoogle AdSenseを利用した広告を掲載しています。GoogleはCookieを使用して、ユーザーが本サービスや他のサイトを過去に訪問した際の情報に基づいて広告を配信します。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Googleが広告Cookieを使用することにより、ユーザーが本サービスや他のサイトにアクセスした際の情報に基づいて広告が表示されます。</li>
              <li>ユーザーはGoogleの広告設定ページからパーソナライズ広告を無効にできます。</li>
              <li>詳細はGoogleの<a href="https://policies.google.com/technologies/ads" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">広告ポリシー</a>をご確認ください。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">Cookieについて</h2>
            <p>本サービスはCookieを使用しています。CookieはWebサイトがお使いのブラウザに保存する小さなデータファイルです。Google AdSenseによる広告配信のために使用されます。ブラウザの設定からCookieを無効にすることができますが、一部機能が正常に動作しない場合があります。</p>
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
            <p>収集した情報を第三者に販売・提供することはありません。ただし、Google AdSenseの広告配信にあたり、Googleが定めるプライバシーポリシーに基づいてデータが処理される場合があります。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">お問い合わせ</h2>
            <p>本ポリシーに関するお問い合わせは以下までご連絡ください。</p>
            <ul className="mt-2 space-y-1">
              <li>X: <a href="https://x.com/naoto_dev_jp" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">@naoto_dev_jp</a></li>
              <li>Mail: <a href="mailto:naoto.m.dev@gmail.com" className="text-blue-400 hover:underline">naoto.m.dev@gmail.com</a></li>
            </ul>
          </section>
        </div>

        <p className="text-[#555] text-xs mt-12">最終更新：2026年3月（Google AdSense対応）</p>

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
