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
    terms?: string;
    privacy?: string;
  };
};

export const apps: App[] = [
  {
    id: "atodevaru",
    name: "アトデヤル",
    tagline: "行動できるToDoリスト",
    description:
      "大学生活の中で感じていた「やることはあるのに、なかなか動けない」という悩みをきっかけに作ったiOS向けToDoアプリです。「今やること」を1つだけ前に出し、カードUIとタイマーによって迷わず着手しやすくすることを目指しています。",
    problem:
      "一般的なToDoアプリでは、タスクを整理できても自分はなかなか動けませんでした。一覧で見えている状態そのものが心理的な負担になり、何から始めるか考えているうちに止まってしまうことが多かったため、やることを1つだけ見せ、制限時間を設けることで着手しやすくする設計にしています。",
    challenge:
      "最前面には常に1つのタスクだけを表示するカードUIを採用し、まず行動できることを重視しました。また、時間・分・秒で設定できるタイマー、テンプレート機能、今日できたことの記録、ウィジェット対応などを組み合わせ、始めやすさと続けやすさの両立を意識しています。",
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
    status: "公開中",
    icon: "/apps/ikiisouge.png",
    links: {
      demo: "https://apps.apple.com/jp/app/%E7%94%9F%E3%81%8D%E6%80%A5%E3%81%92/id6760989995",
    },
  },
];
