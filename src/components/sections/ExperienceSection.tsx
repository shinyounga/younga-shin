"use client";

import { GraduationCap, Briefcase, Award, Heart, Megaphone } from "lucide-react";
import { experience } from "@/data/experience";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  award: Award,
  volunteer: Heart,
  activity: Megaphone,
};

const colorMap = {
  education: "bg-indigo-500",
  work: "bg-emerald-500",
  award: "bg-amber-500",
  volunteer: "bg-rose-500",
  activity: "bg-sky-500",
};

const borderColorMap = {
  education: "border-indigo-500",
  work: "border-emerald-500",
  award: "border-amber-500",
  volunteer: "border-rose-500",
  activity: "border-sky-500",
};

export default function ExperienceSection() {
  const { lang } = useLang();

  return (
    <section id="experience" className="bg-gray-50 py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "경력" : "Experience"}
          subtitle={
            lang === "ko"
              ? "학력, 경력 & 활동"
              : "Education, work & achievements"
          }
        />

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-[52px] h-0.5 bg-gray-200" />

          {/* Scrollable container */}
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max px-2">
              {experience.map((item, i) => {
                const Icon = iconMap[item.type];
                const title =
                  lang === "ko"
                    ? (item.titleKr ?? item.title)
                    : item.title;
                const org =
                  lang === "ko"
                    ? (item.organizationKr ?? item.organization)
                    : item.organization;
                const desc =
                  lang === "ko"
                    ? (item.descriptionKr ?? item.description)
                    : item.description;
                const details =
                  lang === "ko"
                    ? (item.detailsKr ?? item.details)
                    : item.details;

                return (
                  <ScrollReveal key={item.title} delay={i * 0.08}>
                    <div className="flex flex-col items-center w-64">
                      {/* Period */}
                      <span className="mb-3 text-xs font-semibold text-gray-400 tracking-wide">
                        {item.period}
                      </span>

                      {/* Circle on timeline */}
                      <div
                        className={`z-10 flex h-10 w-10 items-center justify-center rounded-full ${colorMap[item.type]} text-white shadow-md`}
                      >
                        <Icon size={18} />
                      </div>

                      {/* Card below */}
                      <div
                        className={`mt-4 w-full rounded-xl border-t-2 ${borderColorMap[item.type]} bg-white p-4 shadow-sm`}
                      >
                        <h3 className="text-sm font-bold text-gray-900 leading-snug">
                          {title}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-indigo-600">
                          {org}
                        </p>
                        {desc && (
                          <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                            {desc}
                          </p>
                        )}
                        {details && (
                          <ul className="mt-2 space-y-1">
                            {details.map((d, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-1.5 text-xs text-gray-600"
                              >
                                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gray-300" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Scroll hint */}
          <p className="mt-2 text-center text-xs text-gray-400">
            {lang === "ko" ? "← 좌우로 스크롤 →" : "← Scroll horizontally →"}
          </p>
        </div>
      </div>
    </section>
  );
}
