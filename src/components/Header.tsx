"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Mail } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Apps", href: "#apps" },
  { label: "Web", href: "#works" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: <Github className="w-3.5 h-3.5" />,
  },
  {
    label: "note",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" style={{ color: "#41C9B4" }}>
        <path d="M18.5 0h-13C2.46 0 0 2.46 0 5.5v13C0 21.54 2.46 24 5.5 24h13c3.04 0 5.5-2.46 5.5-5.5v-13C24 2.46 21.54 0 18.5 0zm-2.1 13.28H7.6a.72.72 0 0 1 0-1.44h8.8a.72.72 0 0 1 0 1.44zm0-3.56H7.6a.72.72 0 0 1 0-1.44h8.8a.72.72 0 0 1 0 1.44z" />
      </svg>
    ),
  },
  {
    label: "Mail",
    href: "mailto:naoto@example.com",
    icon: <Mail className="w-3.5 h-3.5 text-blue-400" />,
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold text-[#f5f5f5] tracking-wider hover:text-blue-400 transition-colors"
        >
          Naoto
        </a>

        {/* Desktop Nav + Social */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors rounded-md hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}

          {/* Divider */}
          <div className="w-px h-4 bg-[#2a2a2a] mx-2" />

          {/* Social icons — improved visibility */}
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-8 h-8 flex items-center justify-center rounded-md text-[#888] hover:text-[#f5f5f5] hover:bg-white/8 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0b0b]/95 backdrop-blur-md border-t border-[#2a2a2a]">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-4 py-3 text-sm text-[#a3a3a3] hover:text-[#f5f5f5] hover:bg-white/5 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Social links in mobile menu — improved visibility */}
            <div className="flex items-center gap-2 px-4 pt-4 mt-2 border-t border-[#2a2a2a]">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  onClick={handleNavClick}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#3a3a3a] text-[#888] hover:text-[#f5f5f5] hover:border-[#555] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
