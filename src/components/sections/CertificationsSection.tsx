"use client";

import { Award, Languages, Globe } from "lucide-react";
import { certifications, testScores, languages } from "@/data/certifications";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

export default function CertificationsSection() {
  const { lang } = useLang();

  return (
    <section id="certifications" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "자격증 & 어학" : "Certifications & Languages"}
          subtitle={
            lang === "ko"
              ? "국가자격증 및 어학 능력"
              : "Professional certifications & language proficiency"
          }
        />

        <div className="grid gap-8 md:grid-cols-3">
          {/* Certifications */}
          <ScrollReveal>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {lang === "ko" ? "자격증" : "Certifications"}
                </h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.nameKr} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-xs font-mono text-gray-400 w-16">
                      {cert.date}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {lang === "ko" ? cert.nameKr : cert.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {lang === "ko" ? cert.issuerKr : cert.issuer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Test Scores */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                  <Languages size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {lang === "ko" ? "어학 성적" : "Test Scores"}
                </h3>
              </div>
              <ul className="space-y-4">
                {testScores.map((test) => (
                  <li
                    key={test.name}
                    className="rounded-xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-gray-800">
                        {test.name}
                      </span>
                      <span className="text-xl font-extrabold text-indigo-600">
                        {test.score}
                      </span>
                    </div>
                    {test.detail && (
                      <p className="mt-1 text-xs text-gray-500">
                        {test.detail}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <Globe size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {lang === "ko" ? "언어" : "Languages"}
                </h3>
              </div>
              <ul className="space-y-4">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="rounded-xl bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-gray-800">
                      {lang === "ko" ? l.nameKr : l.name}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">{l.level}</p>
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
