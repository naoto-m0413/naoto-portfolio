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
    tagline: "時間の有限さを意識して、動くためのアプリ",
    description:
      "人生や1日の残り時間を可視化することで、「まあいいか」ではなく「今やろう」と思えるようにするiOSアプリ。時間への意識を高める仕掛けをシンプルなUIで実現したい。",
    problem:
      "時間は有限とわかっていても、なかなか実感しにくい。数字や視覚的な表現で「残り時間」をリアルに感じられる仕組みがあれば行動が変わると思った。",
    challenge:
      "焦らせすぎず、でも時間の感覚を適切に刺激するバランスのUI設計が難しい。使うたびに少しだけ意識が変わる体験を目指している。",
    techs: ["Swift", "SwiftUI"],
    status: "開発中",
    icon: "/apps/ikiisouge.png",
    links: {},
  },
];
