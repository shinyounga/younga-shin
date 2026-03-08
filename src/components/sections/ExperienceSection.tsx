"use client";

import { experience } from "@/data/experience";
import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";
import { useLang } from "@/lib/useLang";

export default function ExperienceSection() {
  const { lang } = useLang();

  return (
    <section id="experience" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          title={lang === "ko" ? "경력" : "Experience"}
          subtitle={
            lang === "ko"
              ? "학력, 경력 & 활동"
              : "Education, work & achievements"
          }
        />

        <div>
          {experience.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
