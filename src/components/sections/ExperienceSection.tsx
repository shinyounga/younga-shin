"use client";

import { GraduationCap, Briefcase, Award, Heart, Megaphone } from "lucide-react";
import { experience, ExperienceItem } from "@/data/experience";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

const basePath = process.env.NODE_ENV === "production" ? "/younga-shin" : "";

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

function ExperienceCard({
  item,
  lang,
  featured,
}: {
  item: ExperienceItem;
  lang: string;
  featured?: boolean;
}) {
  const title = lang === "ko" ? (item.titleKr ?? item.title) : item.title;
  const org =
    lang === "ko"
      ? (item.organizationKr ?? item.organization)
      : item.organization;
  const desc =
    lang === "ko"
      ? (item.descriptionKr ?? item.description)
      : item.description;
  const details =
    lang === "ko" ? (item.detailsKr ?? item.details) : item.details;

  return (
    <div
      className={`rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
        featured ? "ring-2 ring-emerald-200 border border-emerald-100" : "border border-gray-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
            {item.period}
          </span>
          <h4
            className={`mt-2 font-bold text-gray-900 leading-snug ${
              featured ? "text-lg" : "text-base"
            }`}
          >
            {title}
          </h4>
          <div className="mt-1 flex items-center gap-2">
            {item.logo && (
              <img
                src={`${basePath}${item.logo}`}
                alt={item.organization}
                className="h-5 w-5 object-contain"
              />
            )}
            <p className="text-sm font-medium text-indigo-600">{org}</p>
          </div>
        </div>
      </div>
      {desc && (
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{desc}</p>
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
  );
}

export default function ExperienceSection() {
  const { lang } = useLang();

  // Separate by type
  const education = experience.filter((e) => e.type === "education");
  const work = experience.filter((e) => e.type === "work");
  const activities = experience.filter(
    (e) => e.type === "activity" || e.type === "award" || e.type === "volunteer"
  );

  // Sort newest first
  const sortByYear = (a: ExperienceItem, b: ExperienceItem) =>
    (b.sortYear ?? 0) - (a.sortYear ?? 0);

  const master = education.find((e) =>
    e.title.toLowerCase().includes("master")
  );
  const bachelor = education.find((e) =>
    e.title.toLowerCase().includes("bachelor")
  );
  const exchange = education.find((e) =>
    e.title.toLowerCase().includes("exchange")
  );
  const highSchool = education.find((e) =>
    e.title.toLowerCase().includes("high school")
  );

  const sortedWork = [...work].sort(sortByYear);
  const sortedActivities = [...activities].sort(sortByYear);

  // SBS is the featured work item
  const sbsWork = sortedWork.find((w) =>
    w.organization.includes("SBS")
  );

  return (
    <section id="experience" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          title={lang === "ko" ? "경력" : "Experience"}
          subtitle={
            lang === "ko"
              ? "학력, 경력 & 활동"
              : "Education, work & achievements"
          }
        />

        {/* === Education === */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
              <GraduationCap size={18} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {lang === "ko" ? "학력" : "Education"}
            </h3>
          </div>

          <div className="space-y-4">
            {/* Master */}
            {master && (
              <ScrollReveal>
                <ExperienceCard item={master} lang={lang} />
              </ScrollReveal>
            )}

            {/* Bachelor + Exchange (nested) */}
            {bachelor && (
              <ScrollReveal delay={0.05}>
                <ExperienceCard item={bachelor} lang={lang} />
                {exchange && (
                  <div className="ml-6 mt-3 border-l-2 border-indigo-200 pl-4">
                    <div className="mb-1 text-xs font-medium text-indigo-400 uppercase tracking-wide">
                      {lang === "ko" ? "교환학생" : "Exchange Program"}
                    </div>
                    <ExperienceCard item={exchange} lang={lang} />
                  </div>
                )}
              </ScrollReveal>
            )}

            {/* High School */}
            {highSchool && (
              <ScrollReveal delay={0.1}>
                <div className="flex items-center gap-3 rounded-xl bg-white border border-gray-100 px-5 py-3 shadow-sm">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                    {highSchool.period}
                  </span>
                  <p className="text-sm font-semibold text-gray-800">
                    {lang === "ko"
                      ? (highSchool.titleKr ?? highSchool.title)
                      : highSchool.title}
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>

        {/* === Work === */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <Briefcase size={18} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {lang === "ko" ? "경력" : "Work Experience"}
            </h3>
          </div>

          <div className="space-y-4">
            {sortedWork.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <ExperienceCard
                  item={item}
                  lang={lang}
                  featured={item === sbsWork}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* === Activities, Awards, Volunteer === */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
              <Megaphone size={18} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              {lang === "ko" ? "활동 & 수상" : "Activities & Awards"}
            </h3>
          </div>

          <div className="space-y-4">
            {sortedActivities.map((item, i) => {
              const Icon = iconMap[item.type];
              return (
                <ScrollReveal key={`${item.type}-${item.title}`} delay={i * 0.05}>
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${colorMap[item.type]} text-white`}
                    >
                      <Icon size={14} />
                    </div>
                    <ExperienceCard item={item} lang={lang} />
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
