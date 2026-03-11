"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, FileText } from "lucide-react";

export function Articles() {
  return (
    <section id="articles" className="py-20 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          en="Articles"
          ja="記事・発信"
          description="noteを中心に、作ったことや学んだことを発信していく予定です。"
        />

        {/* Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8 p-8 rounded-2xl bg-[#171717] border border-[#2a2a2a]"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0b0b0b] border border-[#2a2a2a] flex items-center justify-center">
            <FileText size={24} className="text-[#3a3a3a]" />
          </div>
          <div className="flex-1">
            <p className="text-[#f5f5f5] font-medium text-base mb-1">
              noteは準備中です。
            </p>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              近日中に2〜3本ほど記事を公開予定です。
              <br />
              制作中のアプリについてや、作りながら気づいたことを書いていく予定です。
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-[#2a2a2a] text-[#a3a3a3] rounded-lg text-sm hover:text-[#f5f5f5] hover:border-[#3a3a3a] transition-all duration-200"
          >
            noteを見る
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// 記事公開後は articles データを使ったカード表示に切り替えてください
// src/data/articles.ts にデータ構造があります
