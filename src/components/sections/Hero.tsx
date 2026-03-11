"use client";

import { motion } from "framer-motion";
import { ArrowDown, Smartphone, Globe } from "lucide-react";
import Image from "next/image";
import { apps } from "@/data/apps";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] flex flex-col justify-center overflow-hidden">

      {/* Background — animated drifting orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-blue-600/6 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/3 right-1/4 w-[320px] h-[320px] rounded-full bg-blue-800/5 blur-[90px]"
        />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Main content */}
          <div className="max-w-xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55 }}
              className="flex items-center gap-3 mb-8"
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
              className="text-[#a3a3a3] text-sm md:text-base max-w-md leading-relaxed mb-10 border-l-2 border-[#2a2a2a] pl-4"
            >
              iOSアプリとWebを個人で制作しています。
              課題を見つけてプロダクトを作り、使いながら改善することを習慣にしています。
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
                Apps を見る
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

          </div>

          {/* Right: App previews — PC only */}
          <div className="hidden lg:flex flex-col gap-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="text-[#555] text-xs uppercase tracking-widest mb-2"
            >
              開発中のアプリ
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
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5 + i * 0.9,
                    ease: "easeInOut",
                    delay: i * 1.6,
                  }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="p-4 rounded-2xl bg-[#171717] border border-[#2a2a2a] hover:border-blue-500/30 transition-colors duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {app.icon && (
                      <Image
                        src={app.icon}
                        alt={`${app.name} アイコン`}
                        width={48}
                        height={48}
                        className="rounded-xl flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[#f5f5f5] font-semibold text-sm truncate">{app.name}</p>
                        <span className="flex-shrink-0 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
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
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[#3a3a3a]" />
        </motion.div>
      </motion.div>

    </section>
  );
}
