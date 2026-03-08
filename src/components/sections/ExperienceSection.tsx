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

const typeOrder = ["education", "work", "activity", "award", "volunteer"] as const;

export default function ExperienceSection() {
  const { lang } = useLang();

  const sorted = [...experience].sort((a, b) => {
    const typeA = typeOrder.indexOf(a.type);
    const typeB = typeOrder.indexOf(b.type);
    if (typeA !== typeB) return typeA - typeB;
    // Within same type, newest first
    return (b.sortYear ?? 0) - (a.sortYear ?? 0);
  });

  return (
    <section id="experience" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          title={lang === "ko" ? "경력" : "Experience"}
          subtitle={
            lang === "ko"
              ? "학력, 경력 & 활동"
              : "Education, work & achievements"
          }
        />

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 md:left-8" />

          <div className="space-y-8">
            {sorted.map((item, i) => {
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
                <ScrollReveal key={`${item.type}-${item.title}`} delay={i * 0.05}>
                  <div className="relative flex gap-4 pl-2 md:gap-6 md:pl-0">
                    {/* Icon circle */}
                    <div
                      className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorMap[item.type]} text-white shadow-md md:h-12 md:w-12`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 rounded-xl border-l-4 ${borderColorMap[item.type]} bg-white p-5 shadow-sm transition-shadow hover:shadow-md`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="mt-2 text-base font-bold text-gray-900 leading-snug md:text-lg">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-indigo-600">
                        {org}
                      </p>
                      {desc && (
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                          {desc}
                        </p>
                      )}
                      {details && (
                        <ul className="mt-3 space-y-1.5">
                          {details.map((d, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
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
      </div>
    </section>
  );
}
