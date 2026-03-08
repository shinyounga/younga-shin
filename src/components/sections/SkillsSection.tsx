"use client";

import { Brain, Building, Film, Code } from "lucide-react";
import { skills } from "@/data/skills";
import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Brain,
  Building,
  Film,
  Code,
};

export default function SkillsSection() {
  const { lang } = useLang();

  return (
    <section id="skills" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "기술 스택" : "Skills"}
          subtitle={
            lang === "ko"
              ? "활용하는 기술과 도구"
              : "Technologies & tools I work with"
          }
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <ScrollReveal key={category.category} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    {Icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <Icon size={20} />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900">
                      {lang === "ko" ? category.categoryKr : category.category}
                    </h3>
                  </div>
                  <div className="grid gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        icon={skill.icon}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
