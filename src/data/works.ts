export type Work = {
  id: string;
  title: string;
  category: "LP" | "ポートフォリオ" | "UIデザイン" | "Webサイト" | "ゲーム";
  description: string;
  challenge: string;
  techs: string[];
  status: "制作予定" | "制作中" | "開発中" | "公開中";
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
    status: "開発中",
    image: "/works/teijitaiping.png",
    description:
      "仕事をタイピングで片付けて、定時退社を目指す社会人ネタのブラウザゲーム。難易度はホワイト企業・ふつう企業・ブラック企業の3段階。ランダムイベントや称号など、ネタ性と達成感を両立させた設計。",
    challenge:
      "かなエンジンによる柔軟なローマ字入力対応と、タイピング成績をゲーム内時間に変換する時間計算ロジックの設計が核になった。結果画面をスクリーンショットでシェアしたくなる構成にすることも意識した。",
    techs: ["HTML", "CSS", "JavaScript"],
    links: {},
  },
];
