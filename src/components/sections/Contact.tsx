"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Github, Mail, ArrowUpRight, Copy, Check } from "lucide-react";

const EMAIL = "naoto@example.com";

const contacts = [
  {
    label: "X",
    handle: "@naoto_dev",
    description: "日々の制作や気になったことをつぶやいています。",
    href: "#",
    color: "hover:border-[#3a3a3a] hover:bg-white/5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#f5f5f5]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "naoto",
    description: "個人開発のコードを公開しています。",
    href: "#",
    color: "hover:border-[#3a3a3a] hover:bg-white/5",
    icon: <Github size={16} className="text-[#f5f5f5]" />,
  },
  {
    label: "note",
    handle: "naoto_note",
    description: "制作の記録を書いていく予定です。",
    href: "#",
    color: "hover:border-emerald-500/30 hover:bg-emerald-500/5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#41C9B4" }}>
        <path d="M18.5 0h-13C2.46 0 0 2.46 0 5.5v13C0 21.54 2.46 24 5.5 24h13c3.04 0 5.5-2.46 5.5-5.5v-13C24 2.46 21.54 0 18.5 0zm-2.1 13.28H7.6a.72.72 0 0 1 0-1.44h8.8a.72.72 0 0 1 0 1.44zm0-3.56H7.6a.72.72 0 0 1 0-1.44h8.8a.72.72 0 0 1 0 1.44z" />
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
          className="flex items-center gap-1 text-xs text-[#555] hover:text-[#a3a3a3] transition-colors"
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
        className="text-[#555] text-xs mb-1 font-mono hover:text-[#a3a3a3] transition-colors"
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
              アプリのことや個人制作についてなど、気軽にご連絡いただけるとうれしいです。
            </p>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              いただいたメッセージにはできる限りお返事します。
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
