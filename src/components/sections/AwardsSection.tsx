"use client";

import { Trophy, GraduationCap } from "lucide-react";
import { scholarships, awards } from "@/data/awards";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

const basePath = process.env.NODE_ENV === "production" ? "/younga-shin" : "";

export default function AwardsSection() {
  const { lang } = useLang();

  return (
    <section id="awards" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "장학금 · 수상" : "Scholarships · Awards"}
          subtitle={
            lang === "ko"
              ? "장학금 및 수상 경력"
              : "Scholarships & honors"
          }
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Scholarships */}
          <ScrollReveal>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm h-full">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {lang === "ko" ? "장학금" : "Scholarships"}
                </h3>
              </div>
              <ul className="space-y-3">
                {scholarships.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-gray-50"
                  >
                    <span className="mt-0.5 shrink-0 text-xs font-mono text-gray-400 w-20">
                      {item.year}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800">
                        {lang === "ko" ? item.titleKr : item.title}
                      </p>
                      <div className="flex items-center gap-1.5">
                        {item.logo && (
                          <img
                            src={`${basePath}${item.logo}`}
                            alt={item.organization}
                            className="h-4 w-4 object-contain"
                          />
                        )}
                        <p className="text-xs text-gray-500">
                          {lang === "ko" ? item.organizationKr : item.organization}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Awards */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm h-full">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <Trophy size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {lang === "ko" ? "수상" : "Awards"}
                </h3>
              </div>
              <ul className="space-y-3">
                {awards.map((award, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-gray-50"
                  >
                    <span className="mt-0.5 shrink-0 text-xs font-mono text-gray-400 w-20">
                      {award.year}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800">
                        {lang === "ko" ? award.titleKr : award.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {lang === "ko" ? award.organizationKr : award.organization}
                      </p>
                    </div>
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
