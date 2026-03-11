export type Work = {
  id: string;
  title: string;
  category: "LP" | "ポートフォリオ" | "UIデザイン" | "Webサイト" | "ゲーム";
  description: string;
  challenge: string;
  techs: string[];
  status: "制作予定" | "制作中" | "公開中";
  links: {
    site?: string;
    github?: string;
  };
};

export const works: Work[] = [
  {
    id: "typing-game",
    title: "ネットミーム タイピングゲーム",
    category: "ゲーム",
    status: "制作予定",
    description:
      "インターネットで広まったフレーズやネットスラングをタイピングするゲーム。問題の構成やテンポ感など、細部の設計を含めて企画段階。",
    challenge:
      "タイピング精度・スピードの計測ロジックと、テンポよく次の問題へ進む操作感が鍵になる。問題データの設計や選定も含めて検討中。",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {},
  },
];
