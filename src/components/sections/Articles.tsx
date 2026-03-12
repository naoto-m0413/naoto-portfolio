"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Clock } from "lucide-react";
import { articles } from "@/data/articles";

export function Articles() {
  return (
    <section id="articles" className="py-20 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          en="Articles"
          ja="記事・発信"
          description="noteで、作ったことや学んだことを発信しています。"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col p-6 rounded-2xl bg-[#171717] border border-[#2a2a2a] hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300"
            >
              {/* Top: category + arrow */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full font-medium">
                  {article.category}
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-[#555] group-hover:text-[#a3a3a3] transition-colors"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#f5f5f5] font-semibold text-base leading-snug mb-3 group-hover:text-white transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#a3a3a3] text-sm leading-relaxed flex-1 mb-4">
                {article.excerpt}
              </p>

              {/* Bottom: date + read time */}
              <div className="flex items-center gap-3 text-xs text-[#555]">
                <span>{article.date.replace(/-/g, ".")}</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {article.readTime}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* note link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href="https://note.com/naoto_dev_jp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2a2a2a] text-[#a3a3a3] rounded-lg text-sm hover:text-[#f5f5f5] hover:border-[#3a3a3a] transition-all duration-200"
          >
            noteをもっと見る
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
