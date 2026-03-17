export type Work = {
  id: string;
  title: string;
  category: "LP" | "ポートフォリオ" | "UIデザイン" | "Webサイト" | "ゲーム";
  tagline?: string;
  description: string;
  problem: string;
  challenge: string;
  techs: string[];
  status: "制作予定" | "制作中" | "開発中" | "公開中";
  badge?: string;
  image?: string;
  links: {
    site?: string;
    github?: string;
  };
};

export const works: Work[] = [
  {
    id: "teijitaiping",
    title: "定時退ピング",
    category: "ゲーム",
    status: "公開中",
    tagline: "タイピングで仕事をさばいて、最速退勤を目指すゲーム",
    image: "/works/teijitaiping.png",
    description:
      "タイピングで仕事をさばいて、最速退勤を目指す社会人ネタのブラウザゲームです。難易度はホワイト企業・ふつう企業・ブラック企業の3段階で、称号やシェア機能を備えています。",
    problem:
      "タイピングゲームに「仕事をこなしていく感覚」と「定時に帰れるかという緊張感」を組み合わせることで、普通の速度練習とは違う体験を作りたいと考えました。難易度ごとに業務メッセージの雰囲気や文章量を変え、各職場の空気感を出しています。",
    challenge:
      "かなエンジンによる柔軟なローマ字入力と、タイピング成績をゲーム内時間に変換する時間計算ロジックの実装が核になりました。結果画面はスクリーンショットでシェアしたくなる構成を意識しています。",
    badge: "試作版",
    techs: ["HTML", "CSS", "JavaScript"],
    links: {
      site: "https://teijitaiping.vercel.app",
    },
  },
];
