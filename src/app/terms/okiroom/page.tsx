import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | おきるーむ",
  description: "iOSアプリ「おきるーむ」の利用規約",
};

export default function OkiroomTermsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">利用規約</h1>
        <p className="text-[#a3a3a3] text-sm mb-1">おきるーむ</p>
        <p className="text-[#a3a3a3] text-sm mb-10">最終更新日：2026年3月23日</p>

        <div className="space-y-8 text-sm text-[#a3a3a3] leading-relaxed">

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第1条（適用）</h2>
            <p>本規約は、個人開発者 Naoto（以下「開発者」）が提供するiOSアプリ「おきるーむ」（以下「本アプリ」）の利用に関する条件を定めるものです。本アプリを利用した時点で、本規約に同意したものとみなします。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第2条（利用環境）</h2>
            <p>本アプリはiPhone専用です。推奨環境はiOS 17以降とします。推奨環境以外での動作は保証しません。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第3条（カメラ・通知の利用）</h2>
            <p>本アプリはQRコードのスキャンにカメラを使用します。また、アラーム機能のために通知権限を使用します。これらの権限はiOSの設定からいつでも変更できます。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第4条（禁止事項）</h2>
            <p>以下の行為を禁止します。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>本アプリのリバースエンジニアリング・改ざん・複製</li>
              <li>本アプリを利用した違法行為または他者への迷惑行為</li>
              <li>その他、開発者が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第5条（免責事項）</h2>
            <p>本アプリの利用により生じたいかなる損害についても、開発者は責任を負いません。また、予告なくアプリの内容を変更・停止する場合があります。アラーム機能はiOSの通知システムに依存するため、端末の設定状況によっては正常に動作しない場合があります。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第6条（規約の変更）</h2>
            <p>開発者は必要に応じて本規約を変更できるものとします。変更後も継続して本アプリを利用した場合、変更後の規約に同意したものとみなします。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第7条（準拠法）</h2>
            <p>本規約は日本法に準拠します。</p>
          </section>

          <section>
            <h2 className="text-[#f5f5f5] font-semibold mb-2">第8条（お問い合わせ）</h2>
            <p>本規約に関するお問い合わせは以下までご連絡ください。</p>
            <ul className="mt-2 space-y-1">
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
              <li>
                Mail:{" "}
                <a
                  href="mailto:naoto.m.dev@gmail.com"
                  className="text-[#f5f5f5] hover:underline"
                >
                  naoto.m.dev@gmail.com
                </a>
              </li>
            </ul>
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
