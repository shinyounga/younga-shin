"use client";

import { Trophy, FlaskConical } from "lucide-react";
import { awards, researchProjects } from "@/data/awards";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

export default function AwardsSection() {
  const { lang } = useLang();

  return (
    <section id="awards" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "수상 & 연구과제" : "Awards & Research"}
          subtitle={
            lang === "ko"
              ? "장학금, 수상, 연구 프로젝트"
              : "Scholarships, honors & research projects"
          }
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Awards & Scholarships */}
          <ScrollReveal>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <Trophy size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {lang === "ko" ? "장학금 & 수상" : "Scholarships & Awards"}
                </h3>
              </div>
              <ul className="space-y-3">
                {awards.map((award, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-gray-50"
                  >
                    <span className="mt-0.5 shrink-0 text-xs font-mono text-gray-400 w-16">
                      {award.year}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800">
                        {lang === "ko" ? award.titleKr : award.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {lang === "ko"
                          ? award.organizationKr
                          : award.organization}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Research Projects */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <FlaskConical size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {lang === "ko" ? "연구 프로젝트" : "Research Projects"}
                </h3>
              </div>
              <ul className="space-y-4">
                {researchProjects.map((project, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <p className="text-xs font-medium text-indigo-500">
                      {project.period}
                    </p>
                    <h4 className="mt-1 text-sm font-bold text-gray-900 leading-snug">
                      {lang === "ko" ? project.titleKr : project.title}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">
                      {lang === "ko" ? project.funderKr : project.funder}
                    </p>
                    <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                      {lang === "ko"
                        ? project.descriptionKr
                        : project.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
