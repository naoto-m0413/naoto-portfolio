"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

const EMAIL = "naoto.m.dev@gmail.com";

const contacts = [
  {
    label: "X",
    handle: "@naoto_dev_jp",
    description: "日々の制作や気になったことをつぶやいています。",
    href: "https://x.com/naoto_dev_jp?s=21",
    color: "hover:border-[#3a3a3a] hover:bg-white/5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#f5f5f5]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "note",
    handle: "naoto_dev_jp",
    description: "作ったことや学んだことを発信しています。",
    href: "https://note.com/naoto_dev_jp",
    color: "hover:border-emerald-500/30 hover:bg-emerald-500/5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <circle cx="12" cy="12" r="12" fill="white" />
        <path d="M6.5 18V7.5h3.1l.3 1.4c.6-1.05 1.65-1.65 2.95-1.65 2.2 0 3.45 1.35 3.45 3.65V18h-3.1v-6c0-1.05-.46-1.72-1.28-1.72-.9 0-1.55.72-1.55 1.82V18H6.5z" fill="#000" />
      </svg>
    ),
  },
];

function MailCard({ index }: { index: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex flex-col p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <Mail size={16} className="text-blue-400" />
          <span className="text-[#f5f5f5] font-medium text-sm">Mail</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-[#777] hover:text-[#f5f5f5] transition-colors"
          aria-label="メールアドレスをコピー"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span className="text-emerald-400">コピー済み</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              コピー
            </>
          )}
        </button>
      </div>
      <a
        href={`mailto:${EMAIL}`}
        className="text-[#999] text-xs mb-1 font-mono hover:text-[#f5f5f5] transition-colors"
      >
        {EMAIL}
      </a>
      <p className="text-[#a3a3a3] text-xs leading-relaxed">
        ご連絡はメールでも受け付けています。
      </p>
    </motion.div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader en="Contact" ja="連絡先" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-[#f5f5f5] text-xl leading-relaxed font-light">
              気軽にご連絡ください。
            </p>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              アプリや個人制作のこと、お仕事のご依頼など、なんでもどうぞ。お返事します。
            </p>
          </motion.div>

          {/* Right: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contacts.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group flex flex-col p-5 rounded-xl bg-[#171717] border border-[#2a2a2a] transition-all duration-300 ${contact.color}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    {contact.icon}
                    <span className="text-[#f5f5f5] font-medium text-sm">
                      {contact.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-[#555] group-hover:text-[#a3a3a3] transition-colors"
                  />
                </div>
                <p className="text-[#555] text-xs mb-1 font-mono">
                  {contact.handle}
                </p>
                <p className="text-[#a3a3a3] text-xs leading-relaxed">
                  {contact.description}
                </p>
              </motion.a>
            ))}

            {/* Mail card with copy button */}
            <MailCard index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
