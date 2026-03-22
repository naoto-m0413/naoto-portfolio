"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Smartphone, Pencil, Lightbulb, Repeat2 } from "lucide-react";

const traits = [
  {
    icon: Smartphone,
    title: "個人開発に取り組む",
    description:
      "自分が使いたいと思ったものを、実際に作ることが一番の動機です。アイデアが形になっていく過程が好きで、それが続けるエネルギーになっています。",
  },
  {
    icon: Pencil,
    title: "発信しながら整理する",
    description:
      "noteに、作ったり試したりしながら気づいたことを書いています。文章にすることで、自分の理解が整理されると感じています。",
  },
  {
    icon: Lightbulb,
    title: "使いやすさを意識する",
    description:
      "UIや操作感も自分で考えるようにしています。見た目だけでなく、使うときの流れや分かりやすさも意識しながら設計しています。",
  },
  {
    icon: Repeat2,
    title: "まず作って改善する",
    description:
      "完成度よりも、動くものを作って使いながら直していくスタイルが自分に合っています。小さく始めて少しずつ育てることを意識しています。",
  },
];

const certifications = [
  "基本情報技術者試験",
  "AWS Certified Cloud Practitioner",
  "日商簿記2級",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-[#171717]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          en="About"
          ja="自己紹介"
          description="IT企業でエンジニアとして働きながら、個人でアプリ制作やWeb制作にも取り組んでいます。"
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Main text + Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-[#a3a3a3] leading-relaxed text-sm md:text-base"
          >
            <p>
              早稲田大学を卒業後、2026年4月からIT企業でエンジニアとして働いています。業務のかたわら、個人でもiOSアプリやWebページの制作に取り組んでいます。
            </p>
            <p>
              日々の不便や気になることをきっかけに、アイデアを少しずつ形にしていくことが好きです。まず動くものを作って、使いながら直していくスタイルで進めています。
            </p>
            <p>
              見た目だけでなく使いやすさも意識していて、UIの流れや操作感も自分で考えるようにしています。
            </p>

            {/* Certifications */}
            <div className="pt-4 border-t border-[#2a2a2a]">
              <p className="text-[#555] text-xs uppercase tracking-wider mb-4 font-medium">
                保有資格
              </p>
              <ul className="space-y-2.5">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-[#a3a3a3] text-sm">{cert}</span>
                  </li>
                ))}
                <li className="flex justify-end">
                  <span className="text-[#555] text-xs">など</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Traits */}
          <div className="grid gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-[#0b0b0b] border border-[#2a2a2a] hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <trait.icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-[#f5f5f5] font-medium text-sm mb-1.5">
                    {trait.title}
                  </h3>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
