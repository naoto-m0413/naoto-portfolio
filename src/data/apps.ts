export type App = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  challenge: string;
  techs: string[];
  status: "公開中" | "開発中" | "β版" | "審査中";
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
    name: "今やる",
    tagline: "行動できるToDoリスト",
    description:
      "「今やること」を1つだけ前に出し、迷わず着手しやすくするiOS向けToDoアプリ。タスクをただ並べるのではなく、カードUIとタイマーによって、先延ばししがちな人でも行動を始めやすい設計にしている。",
    problem:
      "ToDoリストは便利な一方で、やることが増えるほど「何から手をつけるか」で止まりやすい。アトデヤルは、その迷いを減らすために、今やることを1つだけ見せる形に絞り、さらに制限時間を設けることで着手のハードルを下げることを目的としている。",
    challenge:
      "一覧で管理するよりも、まず行動できることを重視し、最前面には常に1つのタスクだけを表示するカードUIを採用した。また、時間・分・秒で設定できるタイマー、テンプレート機能、今日できたことの記録、ウィジェット対応などを組み合わせ、始めやすさと続けやすさの両立を意識している。",
    techs: ["Swift", "SwiftUI"],
    status: "審査中",
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
