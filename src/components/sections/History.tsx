"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { historyItems } from "@/data/history";

export function History() {
  return (
    <section id="history" className="py-28 bg-[#171717]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          en="History"
          ja="経歴・ストーリー"
          description="履歴書ではなく、ひとつのストーリーとして。"
        />

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-[#2a2a2a] to-transparent" />

          <div className="space-y-10">
            {historyItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                    i === historyItems.length - 1
                      ? "border-blue-500 bg-blue-500/30"
                      : "border-[#2a2a2a] bg-[#171717]"
                  }`}
                />

                {/* Content */}
                <div className="group p-5 rounded-xl bg-[#0b0b0b] border border-[#2a2a2a] hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-blue-400 text-xs font-mono font-medium bg-blue-500/10 px-2.5 py-1 rounded-full">
                      {item.period}
                    </span>
                    {i === historyItems.length - 1 && (
                      <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        現在
                      </span>
                    )}
                  </div>

                  <h3 className="text-[#f5f5f5] font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs text-[#555] bg-[#171717] border border-[#2a2a2a] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
