"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { sbsEpisodes, sbsPrograms } from "@/data/sbsWorks";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

export default function SbsWorksSection() {
  const { lang } = useLang();
  const [activeProgram, setActiveProgram] = useState<string>("all");

  const filtered =
    activeProgram === "all"
      ? sbsEpisodes
      : sbsEpisodes.filter((ep) => ep.program === activeProgram);

  return (
    <section id="sbs-works" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "스브스뉴스 : 서브촬영" : "SBS NEWS: Sub-filming"}
          subtitle={
            lang === "ko"
              ? `총 ${sbsEpisodes.length}개 에피소드 서브촬영 참여`
              : `Sub-filming across ${sbsEpisodes.length} episodes`
          }
        />

        {/* Program filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveProgram("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeProgram === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {lang === "ko" ? "전체" : "All"} ({sbsEpisodes.length})
          </button>
          {sbsPrograms.map((prog) => {
            const count = sbsEpisodes.filter(
              (ep) => ep.program === prog.id
            ).length;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveProgram(prog.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeProgram === prog.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {lang === "ko" ? prog.nameKr : prog.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Episode grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((ep, i) => (
            <ScrollReveal key={`${ep.videoId}-${i}`} delay={i * 0.03}>
              <a
                href={ep.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={`https://img.youtube.com/vi/${ep.videoId}/mqdefault.jpg`}
                    alt={ep.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                    <Play
                      size={40}
                      className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                      fill="white"
                    />
                  </div>
                  <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white">
                    {ep.year}
                  </span>
                </div>
                {/* Info */}
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:text-indigo-600">
                    {ep.title}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-500">
                    {ep.programKr}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100" />
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
