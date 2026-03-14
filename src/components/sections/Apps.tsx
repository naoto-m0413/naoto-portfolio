"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { apps } from "@/data/apps";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const statusStyles: Record<string, string> = {
  公開中: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  審査中: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  開発中: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  β版: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const statusLinkLabel: Record<string, string> = {
  公開中: "App Storeで公開中",
  審査中: "審査中につきリンク準備中",
  開発中: "開発中につきリンク準備中",
  β版: "準備中",
};

function AppCard({ app }: { app: (typeof apps)[number] }) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#171717] border border-[#2a2a2a] hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 h-full">
      <div className="flex flex-col flex-1 p-6 gap-5">

        {/* Top: icon + name + status */}
        <div className="flex items-start gap-4">
          {app.icon ? (
            <Image
              src={app.icon}
              alt={`${app.name} アイコン`}
              width={80}
              height={80}
              className="rounded-2xl flex-shrink-0 shadow-lg"
            />
          ) : (
            <div className="w-[80px] h-[80px] rounded-2xl bg-blue-500/10 border border-blue-500/20 flex-shrink-0" />
          )}
          <div className="flex-1 min-w-0 pt-1">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-[#f5f5f5] font-bold text-lg leading-tight">{app.name}</h3>
              <span className={`flex-shrink-0 px-2.5 py-1 text-xs rounded-full border font-medium ${statusStyles[app.status]}`}>
                {app.status}
              </span>
            </div>
            <p className="text-blue-400 text-sm font-medium leading-snug">{app.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#a3a3a3] text-sm leading-relaxed">{app.description}</p>

        {/* Details */}
        <div className="space-y-3 border-t border-[#2a2a2a] pt-4">
          <div>
            <p className="text-xs text-[#555] uppercase tracking-wider mb-1.5 font-medium">課題・目的</p>
            <p className="text-[#a3a3a3] text-xs leading-relaxed">{app.problem}</p>
          </div>
          <div>
            <p className="text-xs text-[#555] uppercase tracking-wider mb-1.5 font-medium">工夫した点</p>
            <p className="text-[#a3a3a3] text-xs leading-relaxed">{app.challenge}</p>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {app.techs.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs bg-[#0b0b0b] border border-[#2a2a2a] rounded-full text-[#a3a3a3]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-2 border-t border-[#2a2a2a]">
          {app.links.demo || app.links.github ? (
            <>
              {app.links.demo && (
                <a
                  href={app.links.demo}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-500 transition-colors"
                >
                  <ExternalLink size={13} />
                  App Store
                </a>
              )}
              {app.links.github && (
                <a
                  href={app.links.github}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-[#2a2a2a] text-[#a3a3a3] rounded-lg text-xs font-medium hover:text-[#f5f5f5] hover:border-[#3a3a3a] transition-colors"
                >
                  <Github size={13} />
                  GitHub
                </a>
              )}
            </>
          ) : (
            <span className="text-xs text-[#3a3a3a]">{statusLinkLabel[app.status] ?? "準備中"}</span>
          )}
        </div>

      </div>
    </div>
  );
}

export function Apps() {
  return (
    <section id="apps" className="py-20 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto">
        <div className="px-6">
          <SectionHeader
            en="Apps"
            ja="アプリ"
            description="個人で開発しているiOSアプリです。"
          />
        </div>

        {/* Horizontal scroll — all devices */}
        <div
          className="flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory
            [scrollbar-width:thin] [scrollbar-color:#2a2a2a_transparent]
            [-webkit-overflow-scrolling:touch]"
        >
          {apps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[440px] snap-start"
            >
              <AppCard app={app} />
            </motion.div>
          ))}
          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-2" />
        </div>

        {/* Scroll dots */}
        <div className="flex items-center justify-center gap-1.5 mt-1 px-6">
          {apps.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]" />
          ))}
        </div>
      </div>
    </section>
  );
}
