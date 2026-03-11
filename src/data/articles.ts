export type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  url: string;
  readTime: string;
};

export const articles: Article[] = [
  {
    id: "first-release",
    title: "はじめてアプリを公開するまでにやったこと",
    excerpt:
      "個人開発をはじめてから、最初の公開までに詰まったこと・調べたこと・諦めたことをそのまま記録した記事。きれいな話ではないけど、同じように悩んでいる人の参考になれば。",
    category: "個人開発",
    date: "2025-11-20",
    url: "#",
    readTime: "5分",
  },
  {
    id: "nextjs-app-router",
    title: "Next.js の App Router に切り替えて困ったこと",
    excerpt:
      "Pages RouterからApp Routerに移行したときに詰まった箇所を、自分の言葉でまとめた記事。公式ドキュメントだけでは理解しきれなかった部分を中心に書いた。",
    category: "学習メモ",
    date: "2025-10-08",
    url: "#",
    readTime: "6分",
  },
  {
    id: "design-basics",
    title: "コードは書けても、見た目がダサい問題と向き合った",
    excerpt:
      "機能は動くのに、なんかダサい。そう感じた時期に読んだもの・試したことを書いた記事。デザインの基礎を少しずつ学び始めたきっかけにもなった話。",
    category: "デザイン",
    date: "2025-08-15",
    url: "#",
    readTime: "5分",
  },
  {
    id: "why-i-started",
    title: "文系出身がプログラミングを始めた理由",
    excerpt:
      "特に技術的な背景もなく、何となく始めたプログラミング。なぜ続けているのか、いつから本気になったのかを振り返って書いた記事。",
    category: "雑記",
    date: "2025-07-02",
    url: "#",
    readTime: "4分",
  },
];
