"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowDown, Linkedin, Film } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useLang } from "@/lib/useLang";

export default function HeroSection() {
  const { lang } = useLang();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 animate-gradient" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300"
        >
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          {lang === "ko" ? "AI와 인프라의 만남" : siteConfig.heroTagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl"
        >
          {lang === "ko" ? siteConfig.nameKr : siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-2 text-lg text-gray-400"
        >
          {lang === "ko" ? siteConfig.name : siteConfig.nameKr}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl font-medium text-indigo-300 sm:text-2xl"
        >
          {lang === "ko"
            ? "AI 연구자 & 크리에이티브 테크놀로지스트"
            : siteConfig.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300/80"
        >
          {lang === "ko"
            ? "사진과 영상으로 기록합니다. 연세대학교 석사과정에서 AI와 딥러닝을 건설공학에 적용하는 연구를 하고 있습니다."
            : "M.S. student at Yonsei University, applying AI and deep learning to construction engineering. Bridging creative media and intelligent infrastructure."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-400 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            <Mail size={18} />
            {lang === "ko" ? "연락하기" : "Get in Touch"}
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={siteConfig.social.imdb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <Film size={18} />
            IMDb
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "40+", label: lang === "ko" ? "영화작업" : "Films" },
            { value: "50+", label: lang === "ko" ? "SBS 에피소드" : "SBS Episodes" },
            { value: "5", label: lang === "ko" ? "국가자격증" : "Certifications" },
            { value: "925", label: "TOEIC" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={24} className="text-gray-400" />
        </motion.div>
      </motion.a>
    </section>
  );
}
