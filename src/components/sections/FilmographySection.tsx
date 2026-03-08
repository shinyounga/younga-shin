"use client";

import { useState } from "react";
import { filmography, professionalWork } from "@/data/filmography";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";
import { ExternalLink } from "lucide-react";

const categories = [
  { key: "all", en: "All", ko: "전체" },
  { key: "directing", en: "Directing", ko: "연출" },
  { key: "cinematography", en: "Cinematography", ko: "촬영" },
  { key: "lighting", en: "Lighting", ko: "조명" },
  { key: "editing", en: "Editing", ko: "편집" },
  { key: "production", en: "Production", ko: "제작" },
  { key: "professional", en: "Professional", ko: "상업작업" },
] as const;

export default function FilmographySection() {
  const { lang } = useLang();
  const [filter, setFilter] = useState<string>("all");

  const filteredFilms =
    filter === "all"
      ? filmography
      : filter === "professional"
        ? []
        : filmography.filter((f) => f.category === filter);

  const showProfessional = filter === "all" || filter === "professional";

  return (
    <section id="filmography" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "필모그래피" : "Filmography"}
          subtitle={
            lang === "ko"
              ? `단편영화 ${filmography.length}편 + 상업작업 ${professionalWork.length}편`
              : `${filmography.length} short films + ${professionalWork.length} professional works`
          }
        />

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === cat.key
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {lang === "ko" ? cat.ko : cat.en}
            </button>
          ))}
        </div>

        {/* Film list */}
        <ScrollReveal>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            {filteredFilms.length > 0 && (
              <div className="space-y-2">
                {filteredFilms.map((film, i) => (
                  <div
                    key={`${film.titleKr}-${film.role}-${i}`}
                    className="flex items-start gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
                  >
                    <span className="mt-0.5 shrink-0 text-sm font-mono text-gray-400 w-10">
                      {film.year}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-gray-800">
                        {lang === "ko" ? film.titleKr : film.title}
                      </span>
                      {film.notable && (
                        <p className="text-xs text-indigo-500 mt-0.5">
                          {lang === "ko" ? film.notableKr : film.notable}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
                      {lang === "ko" ? film.roleKr : film.role}
                    </span>
                    {film.link && (
                      <a
                        href={film.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-gray-400 hover:text-indigo-500"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {showProfessional && (
              <>
                {filter === "all" && filteredFilms.length > 0 && (
                  <div className="my-4 border-t border-gray-100" />
                )}
                <h4 className="mb-3 px-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {lang === "ko" ? "상업 / 광고 / MV" : "Commercial / Ad / MV"}
                </h4>
                <div className="space-y-2">
                  {professionalWork.map((work, i) => (
                    <div
                      key={`${work.titleKr}-${i}`}
                      className="flex items-start gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
                    >
                      <span className="mt-0.5 shrink-0 text-sm font-mono text-gray-400 w-10">
                        {work.year}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-semibold text-gray-800">
                          {lang === "ko" ? work.titleKr : work.title}
                        </span>
                      </div>
                      <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
                        {lang === "ko" ? work.roleKr : work.role}
                      </span>
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-gray-400 hover:text-indigo-500"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
