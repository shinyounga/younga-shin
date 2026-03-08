"use client";

import { GraduationCap, Briefcase, Award, Heart, Megaphone } from "lucide-react";
import type { ExperienceItem } from "@/data/experience";
import ScrollReveal from "./ScrollReveal";
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

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = iconMap[item.type];
  const { lang } = useLang();

  const title = lang === "ko" ? (item.titleKr ?? item.title) : item.title;
  const org = lang === "ko" ? (item.organizationKr ?? item.organization) : item.organization;
  const desc = lang === "ko" ? (item.descriptionKr ?? item.description) : item.description;
  const details = lang === "ko" ? (item.detailsKr ?? item.details) : item.details;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative flex gap-6 pb-10 last:pb-0">
        {/* Timeline line */}
        <div className="flex flex-col items-center">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorMap[item.type]} text-white shadow-md`}
          >
            <Icon size={18} />
          </div>
          <div className="w-px flex-1 bg-gray-200" />
        </div>

        {/* Content */}
        <div className="pb-4">
          <span className="text-sm font-medium text-gray-400">
            {item.period}
          </span>
          <h3 className="mt-1 text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm font-medium text-indigo-600">{org}</p>
          {desc && (
            <p className="mt-1 text-sm text-gray-500">{desc}</p>
          )}
          {details && (
            <ul className="mt-2 space-y-1">
              {details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
