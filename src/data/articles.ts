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
    id: "intro",
    title: "自己紹介と、個人開発についてこれから書いていくこと",
    excerpt:
      "早稲田大学を卒業後、IT企業でエンジニアとして働きながら個人でアプリ制作に取り組んでいます。このnoteでは、個人開発のことや学んだこと、日々考えたことを少しずつ書いていきます。",
    category: "自己紹介",
    date: "2026-03-12",
    url: "https://note.com/naoto_dev_jp/n/nf3e0c56ebb95",
    readTime: "3分",
  },
];
