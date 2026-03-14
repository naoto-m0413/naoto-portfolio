"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { works } from "@/data/works";
import Image from "next/image";
import { ExternalLink, Github, ImageIcon } from "lucide-react";

const categoryColors: Record<string, string> = {
  LP: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  ポートフォリオ: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  UIデザイン: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  Webサイト: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  ゲーム: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

const statusStyles: Record<string, string> = {
  制作予定: "bg-[#1a1a1a] text-[#555] border-[#2a2a2a]",
  制作中: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  開発中: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  公開中: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  審査中: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

function WorkCard({ work }: { work: (typeof works)[number] }) {
  const isPublished = work.status === "公開中";
  const hasLinks = work.links.site || work.links.github;

  const inner = (
    <div
      className={`flex flex-col rounded-2xl bg-[#0b0b0b] border border-[#2a2a2a] transition-all duration-300 overflow-hidden h-full ${
        isPublished
          ? "hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-900/10 cursor-pointer"
          : ""
      }`}
    >
      {/* Tags */}
      <div className="flex gap-2 px-4 pt-4">
        <span className={`px-2.5 py-1 text-xs rounded-full border font-medium ${categoryColors[work.category] ?? "text-[#a3a3a3] bg-[#1a1a1a] border-[#2a2a2a]"}`}>
          {work.category}
        </span>
        <span className={`px-2.5 py-1 text-xs rounded-full border font-medium ${statusStyles[work.status] ?? "bg-[#1a1a1a] text-[#555] border-[#2a2a2a]"}`}>
          {work.status}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="relative h-44 bg-[#111] border-b border-[#2a2a2a] overflow-hidden flex-shrink-0 mt-3">
        <div className="absolute inset-0 flex items-center justify-center">
          {work.image ? (
            <Image src={work.image} alt={work.title} fill className="object-cover object-top" />
          ) : (
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mx-auto mb-3">
                <ImageIcon size={22} className="text-[#3a3a3a]" />
              </div>
              <span className="text-[#3a3a3a] text-xs">Preview</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-[#f5f5f5] font-bold text-lg mb-2">{work.title}</h3>
          <p className="text-[#a3a3a3] text-sm leading-relaxed">{work.description}</p>
        </div>

        <div>
          <p className="text-xs text-[#555] uppercase tracking-wider mb-1.5 font-medium">考えていること</p>
          <p className="text-[#a3a3a3] text-xs leading-relaxed">{work.challenge}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {work.techs.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs bg-[#171717] border border-[#2a2a2a] rounded-full text-[#a3a3a3]">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-2 border-t border-[#2a2a2a]">
          {hasLinks ? (
            <>
              {work.links.site && (
                <a
                  href={work.links.site}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-500 transition-colors"
                >
                  <ExternalLink size={13} />
                  サイトを見る
                </a>
              )}
              {work.links.github && (
                <a
                  href={work.links.github}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-[#2a2a2a] text-[#a3a3a3] rounded-lg text-xs font-medium hover:text-[#f5f5f5] hover:border-[#3a3a3a] transition-colors"
                >
                  <Github size={13} />
                  GitHub
                </a>
              )}
            </>
          ) : (
            <span className="text-xs text-[#3a3a3a]">
              {work.status !== "公開中" && "準備中"}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return isPublished && work.links.site ? (
    <a href={work.links.site} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
      {inner}
    </a>
  ) : (
    <div className="flex flex-col h-full">{inner}</div>
  );
}

export function Works() {
  return (
    <section id="works" className="py-20 bg-[#171717]">
      <div className="max-w-7xl mx-auto">
        <div className="px-6">
          <SectionHeader
            en="Web"
            ja="Works"
            description="Webページや小さなプロダクトを個人で作っています。"
          />
        </div>

        {/* Horizontal scroll — all devices */}
        <div
          className="flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory
            [scrollbar-width:thin] [scrollbar-color:#2a2a2a_transparent]
            [-webkit-overflow-scrolling:touch]"
        >
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] snap-start"
            >
              <WorkCard work={work} />
            </motion.div>
          ))}
          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-2" />
        </div>

        {/* Scroll dots */}
        <div className="flex items-center justify-center gap-1.5 mt-1 px-6">
          {works.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]" />
          ))}
        </div>
      </div>
    </section>
  );
}
