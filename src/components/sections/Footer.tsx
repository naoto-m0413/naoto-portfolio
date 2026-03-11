"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#171717] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-[#f5f5f5] font-bold text-lg mb-1">Naoto</p>
            <p className="text-[#555] text-xs">
              小さくても、形にすることを続けています。
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-[#555] text-xs">
              © {new Date().getFullYear()} Naoto. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#2a2a2a] text-[#555] hover:text-[#f5f5f5] hover:border-[#3a3a3a] transition-all duration-200"
              aria-label="ページトップへ戻る"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
