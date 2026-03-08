"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useLang } from "@/lib/useLang";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle } = useLang();

  const navLabels: Record<string, { en: string; ko: string }> = {
    "#about": { en: "About", ko: "소개" },
    "#experience": { en: "Experience", ko: "경력" },
    "#skills": { en: "Skills", ko: "기술" },
    "#projects": { en: "Research", ko: "연구" },
    "#publications": { en: "Papers", ko: "논문" },
    "#sbs-works": { en: "SBS", ko: "스브스뉴스" },
    "#filmography": { en: "Films", ko: "필모그래피" },
    "#contact": { en: "Contact", ko: "연락처" },
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold tracking-tight text-gray-900">
          {siteConfig.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
            >
              {navLabels[link.href]?.[lang] ?? link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-indigo-300 hover:text-indigo-600"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            {lang === "ko" ? "EN" : "KO"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            {lang === "ko" ? "EN" : "KO"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    {navLabels[link.href]?.[lang] ?? link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
