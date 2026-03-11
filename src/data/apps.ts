export type App = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  challenge: string;
  techs: string[];
  status: "公開中" | "開発中" | "β版";
  icon?: string;
  links: {
    demo?: string;
    github?: string;
    detail?: string;
  };
};

export const apps: App[] = [
  {
    id: "atodevaru",
    name: "アトデヤル",
    tagline: "先延ばしを減らす、シンプルなToDoアプリ",
    description:
      "「今やること」を1つだけ前面に出すことで、タスクの多さに迷わず行動を始めやすくするiOSアプリ。タスク一覧を眺めて何もできない、という状況を減らしたくて作り始めた。",
    problem:
      "ToDoリストにタスクが並ぶほど、何から手をつけるか迷って先延ばしになってしまう。「今これをやる」の1点に絞る仕組みがあれば動きやすくなると思った。",
    challenge:
      "シンプルに見せながら、必要な情報を適切なタイミングで出す設計を意識している。起動してすぐ動けるUXを目指している。",
    techs: ["Swift", "SwiftUI"],
    status: "開発中",
    icon: "/apps/atodevaru.png",
    links: {},
  },
  {
    id: "ikiisouge",
    name: "生き急げ！",
    tagline: "時間の有限さを可視化して、行動を促すアプリ",
    description:
      "今年がどれくらい過ぎたのかを可視化することで、「まあいいか」ではなく「今やろう」と思えるきっかけをつくるiOSアプリ。時間の重みを自然に意識できるような仕掛けを、シンプルなUIで形にしたいと考えています。",
    problem:
      "時間は有限だと頭ではわかっていても、日々の中ではその重みを実感しづらく、「まだ大丈夫」と先延ばししてしまいがちです。今年がどれくらい過ぎたのかを可視化することで、感覚ではなく事実として時間を意識し、「今やろう」と思えるきっかけをつくりたいと考えました。",
    challenge:
      "ただ進捗を表示するだけでなく、少しの焦りや緊張感が自然に生まれる見せ方を意識しています。不快になりすぎないよう情報はシンプルに整理し、毎日見ても負担になりにくいミニマルなUIにまとめることを目指しています。",
    techs: ["Swift", "SwiftUI"],
    status: "開発中",
    icon: "/apps/ikiisouge.png",
    links: {},
  },
];
