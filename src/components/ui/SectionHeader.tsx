"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  en: string;
  ja: string;
  description?: string;
};

export function SectionHeader({ en, ja, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-8 bg-blue-500" />
        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
          {ja}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] tracking-tight">
        {en}
      </h2>
      {description && (
        <p className="mt-4 text-[#a3a3a3] text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
