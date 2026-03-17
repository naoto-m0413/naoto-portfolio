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
    id: "teijitaiping",
    title: "【初めてのゲーム開発】「定時退ピング」を作りました！",
    excerpt:
      "「定時で帰りたい...」そんな切実な願いを、そのままタイピングゲームに昇華させました。その名も、「定時退ピング(定時退勤×タイピング)」です。タイピングで仕事をさばき、最速退勤を目指す社会人ネタのブラウザゲームです。",
    category: "ゲーム開発",
    date: "2026-03-17",
    url: "https://note.com/naoto_dev_jp/n/n79a6379b8d64",
    readTime: "5分",
  },
  {
    id: "intro",
    title: "自己紹介と、個人開発についてこれから書いていくこと",
    excerpt:
      "大学を卒業後、IT企業でエンジニアとして働きながら個人でアプリ制作に取り組んでいます。このnoteでは、個人開発のことや学んだこと、日々考えたことを少しずつ書いていきます。",
    category: "自己紹介",
    date: "2026-03-12",
    url: "https://note.com/naoto_dev_jp/n/nf3e0c56ebb95",
    readTime: "3分",
  },
];
