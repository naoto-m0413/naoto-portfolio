"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe } from "lucide-react";
import Image from "next/image";
import { apps } from "@/data/apps";
import { works } from "@/data/works";

export function Hero() {
  return (
    <section className="relative min-h-[72vh] md:min-h-[88vh] flex flex-col justify-center overflow-hidden">

      {/* Background — animated drifting orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="hidden lg:block absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-blue-600/6 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 3 }}
          className="hidden lg:block absolute bottom-1/3 right-1/4 w-[320px] h-[320px] rounded-full bg-blue-800/5 blur-[90px]"
        />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-24 pb-6 md:pb-12 w-full">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">

          {/* Left: Main content */}
          <div className="max-w-xl lg:mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55 }}
              className="flex items-center gap-3 mb-5 md:mb-8"
            >
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-400 text-xs font-medium tracking-wider">
                  Portfolio
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6"
            >
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="inline-block bg-gradient-to-r from-blue-300 via-blue-500 to-blue-400 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%" }}
              >
                Naoto
              </motion.span>
            </motion.h1>

            {/* Main message */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="text-lg md:text-xl text-[#f5f5f5] leading-relaxed mb-6"
            >
              アイデアを形にし、改善し続ける。
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
              className="text-[#a3a3a3] text-sm md:text-base max-w-md leading-relaxed mb-8 md:mb-10 border-l-2 border-[#2a2a2a] pl-4"
            >
              iOSアプリやWebサイトを個人で制作しています。
              課題を見つけて形にし、使いながら改善していくことを大切にしています。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#apps"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/30"
              >
                <Smartphone size={15} />
                アプリを見る
              </motion.a>
              <motion.a
                href="#works"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] text-[#f5f5f5] rounded-lg text-sm font-medium hover:border-blue-500/40 hover:bg-white/5 transition-colors duration-200"
              >
                <Globe size={15} />
                Web を見る
              </motion.a>
            </motion.div>

            {/* Community banner — mobile only */}
            <motion.a
              href="/community"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.88, duration: 0.6, ease: "easeOut" }}
              whileHover={{ borderColor: "rgba(59,130,246,0.4)", backgroundColor: "rgba(59,130,246,0.05)" }}
              className="lg:hidden flex items-center gap-3 mt-5 px-4 py-3 rounded-xl border border-[#2a2a2a] bg-[#171717]/60 transition-colors duration-200 group w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="text-sm text-[#a3a3a3] group-hover:text-[#f5f5f5] transition-colors duration-200">
                <span className="text-[#f5f5f5] font-medium">アプリをよくする会</span>、構想中です
              </span>
              <span className="text-[#555] text-xs group-hover:text-blue-400 transition-colors duration-200">→</span>
            </motion.a>

          </div>

          {/* Right: App + Work previews — PC only */}
          <div className="hidden lg:flex flex-col gap-2.5">

            {/* Community card */}
            <motion.a
              href="/community"
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="block p-5 rounded-2xl bg-[#171717] border border-[#2a2a2a] hover:border-emerald-500/30 transition-colors duration-300 mb-1 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">構想中</span>
              </div>
              <p className="text-[#f5f5f5] font-bold text-lg leading-tight mb-2">
                アプリをよくする会
              </p>
              <p className="text-[#a3a3a3] text-xs leading-relaxed mb-3">
                作ったアプリを見せて、感想や改善案を持ち寄るオンラインの会。
                気軽に見せて、ちゃんと持ち帰れる場を目指しています。
              </p>
              <span className="text-xs text-[#555] group-hover:text-blue-400 transition-colors duration-200">
                詳細・参加申し込み →
              </span>
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="text-[#555] text-xs uppercase tracking-widest mb-2"
            >
              iOSアプリ
            </motion.p>

            {apps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.78 + i * 0.18,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5 + i * 0.9,
                    ease: "easeInOut",
                    delay: i * 1.6,
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-3.5 rounded-2xl bg-[#171717] border border-[#2a2a2a] hover:border-blue-500/30 transition-colors duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    {app.icon && (
                      <Image
                        src={app.icon}
                        alt={`${app.name} アイコン`}
                        width={40}
                        height={40}
                        className="rounded-xl flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[#f5f5f5] font-semibold text-sm truncate">{app.name}</p>
                        <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full border ${
                          app.status === "公開中" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" :
                          app.status === "審査中" ? "text-violet-400 bg-violet-500/10 border-violet-500/20" :
                          app.status === "β版"   ? "text-blue-400 bg-blue-500/10 border-blue-500/20" :
                          "text-amber-400 bg-amber-500/10 border-amber-500/20"
                        }`}>
                          {app.status}
                        </span>
                      </div>
                      <p className="text-[#a3a3a3] text-xs mt-0.5 truncate">{app.tagline}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    {app.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[#555] bg-[#0b0b0b] border border-[#2a2a2a] px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Divider + Web works */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.78 + apps.length * 0.18 + 0.1, duration: 0.5 }}
              className="text-[#555] text-xs uppercase tracking-widest mt-1 mb-0.5"
            >
              ブラウザゲーム
            </motion.p>

            {works.filter((w) => w.status === "公開中").map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.78 + apps.length * 0.18 + 0.2 + i * 0.18,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.a
                  href={work.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.2 + i * 0.9,
                    ease: "easeInOut",
                    delay: i * 2,
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="block p-3.5 rounded-2xl bg-[#171717] border border-[#2a2a2a] hover:border-amber-500/30 transition-colors duration-300 overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    {work.image && (
                      <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 relative">
                        <Image src={work.image} alt={work.title} fill className="object-cover object-top" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[#f5f5f5] font-semibold text-sm truncate">{work.title}</p>
                        <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                          {work.status}
                        </span>
                      </div>
                      <p className="text-[#a3a3a3] text-xs mt-0.5 truncate">{work.tagline ?? work.category}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    {work.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[#555] bg-[#0b0b0b] border border-[#2a2a2a] px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>


    </section>
  );
}
