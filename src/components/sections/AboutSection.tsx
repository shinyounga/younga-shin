"use client";

import { MapPin, GraduationCap, Film, Mail, Github, Linkedin, BookOpen, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

const socialLinks = [
  { key: "email", icon: Mail, label: "Email", href: `mailto:${siteConfig.email}`, display: siteConfig.email },
  { key: "github", icon: Github, label: "GitHub", href: siteConfig.social.github },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  { key: "scholar", icon: BookOpen, label: "Google Scholar", href: siteConfig.social.scholar },
  { key: "orcid", icon: ExternalLink, label: "ORCID", href: siteConfig.social.orcid },
  { key: "imdb", icon: Film, label: "IMDb", href: siteConfig.social.imdb },
  { key: "blog", icon: ExternalLink, label: "Blog", href: siteConfig.social.blog },
  { key: "instagram", icon: ExternalLink, label: "Instagram", href: siteConfig.social.instagram },
];

export default function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "소개" : "About Me"}
          subtitle={lang === "ko" ? "배경 & 관심사" : "Background & Interests"}
        />

        {/* Contact & Social Links */}
        <ScrollReveal>
          <div className="mb-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <MapPin size={16} className="text-gray-500" />
              <span className="text-sm text-gray-700">{siteConfig.location}</span>
              <span className="text-gray-300 mx-1">|</span>
              <Mail size={16} className="text-gray-500" />
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-indigo-600 hover:underline">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {socialLinks.filter(s => s.key !== "email").map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-indigo-300 hover:text-indigo-600"
                  >
                    <Icon size={14} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {lang === "ko" ? "연구자" : "Researcher"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {lang === "ko"
                  ? "연세대학교 스마트인프라연구실 석사과정. 건설공학을 위한 AI 솔루션을 개발합니다 — 작업자 안전 모니터링부터 딥러닝 기반 홍수 위험 예측까지."
                  : "M.S. student at Yonsei University's Smart Infrastructure Lab. I develop AI solutions for construction engineering — from worker safety monitoring to flood risk prediction using deep learning."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Film size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {lang === "ko" ? "크리에이티브 프로듀서" : "Creative Producer"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {lang === "ko"
                  ? "동국대 영화영상학과 졸업, SBS 뉴스에서 3년간 서브촬영. 문명특급, 서울리스, 가갸거겨고교 등 다수 프로그램 참여. 40편 이상 단편영화 제작 및 수상 경력."
                  : "With a B.A. in Film & Digital Media and 3 years at SBS NEWS, I bring visual storytelling expertise to technical research. Produced 40+ short films and award-winning documentaries."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {lang === "ko" ? "글로벌 시각" : "Global Perspective"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {lang === "ko"
                  ? "서울 기반, 프랑스 릴 ISTC 교환학생 경험. 기술, 창의성, 그리고 다문화 커뮤니케이션의 교차점에서 성장합니다."
                  : "Based in Seoul, with study abroad experience at ISTC in Lille, France. I thrive at the intersection of technology, creativity, and cross-cultural communication."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
