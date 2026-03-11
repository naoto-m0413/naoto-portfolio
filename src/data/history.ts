export type HistoryItem = {
  id: string;
  period: string;
  title: string;
  description: string;
  tags?: string[];
};

export const historyItems: HistoryItem[] = [
  {
    id: "student",
    period: "〜2021年",
    title: "文系の大学へ進学",
    description:
      "文系の学部に進学。ITとは縁遠い学生生活を送っていたが、ふとしたきっかけでプログラミングに触れ、「これ、面白いかも」と思ったのが最初の一歩だった。",
    tags: ["文系出身", "独学スタート"],
  },
  {
    id: "first-job",
    period: "2021〜2022年",
    title: "就職しながら、独学を続ける",
    description:
      "技術職ではない仕事に就きながら、仕事の合間にプログラミングの勉強を続けた。HTMLとCSSから始めて、Reactに触れたあたりで「Webで動くものを作れる」という感覚が生まれた。",
    tags: ["HTML/CSS", "JavaScript", "独学継続"],
  },
  {
    id: "certifications",
    period: "2022〜2023年",
    title: "資格取得で基礎を固める",
    description:
      "独学だと知識に抜け漏れがある気がして、資格勉強を通じて基礎を整理することにした。ITパスポート・基本情報技術者試験を取得。簿記2級も合わせて取得し、ビジネス的な視点も意識するようになった。",
    tags: ["ITパスポート", "基本情報技術者", "日商簿記2級"],
  },
  {
    id: "indie-dev",
    period: "2023〜2024年",
    title: "個人開発をはじめる",
    description:
      "「自分が使いたいものを作ろう」と思い、はじめての個人開発に取り組んだ。Next.js と TypeScript を学びながら、少しずつ形にしていった。完成度より「動くものを公開する」ことを優先して進めた。",
    tags: ["Next.js", "TypeScript", "個人開発"],
  },
  {
    id: "now",
    period: "2024年〜現在",
    title: "制作と発信を、続けている",
    description:
      "アプリの開発とWeb制作の練習を続けながら、noteで学んだことを発信している。まだ学習中のことも多いが、手を動かし続けることを大切にしている。",
    tags: ["個人開発", "Web制作", "note", "継続中"],
  },
];
