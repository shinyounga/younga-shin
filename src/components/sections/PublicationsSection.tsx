"use client";

import { BookOpen, Presentation } from "lucide-react";
import { publications, conferences } from "@/data/publications";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

export default function PublicationsSection() {
  const { lang } = useLang();

  return (
    <section id="publications" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          title={lang === "ko" ? "논문 & 발표" : "Publications"}
          subtitle={
            lang === "ko"
              ? "학술 논문 및 학회 발표"
              : "Journal papers & conference presentations"
          }
        />

        {/* Journal */}
        <ScrollReveal>
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-500" />
              <h3 className="text-base font-bold text-gray-900">
                {lang === "ko" ? "학술 논문" : "Papers"}
              </h3>
            </div>
            <ul className="space-y-4">
              {publications.map((pub, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <p className="text-sm leading-relaxed text-gray-700">
                    {pub.authors} ({pub.year}).{" "}
                    <span className="font-semibold">&ldquo;{pub.title}&rdquo;</span>.{" "}
                    <em className="text-gray-500">{pub.venue}</em>.
                  </p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-indigo-500 hover:underline"
                    >
                      {lang === "ko" ? "논문 보기" : "View Paper"} &rarr;
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Conference */}
        <ScrollReveal delay={0.1}>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Presentation size={18} className="text-emerald-500" />
              <h3 className="text-base font-bold text-gray-900">
                {lang === "ko" ? "학회 발표" : "Conference Presentations"}
              </h3>
            </div>
            <ul className="space-y-4">
              {conferences.map((conf, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <p className="text-sm leading-relaxed text-gray-700">
                    {conf.authors} ({conf.year}).{" "}
                    <span className="font-semibold">&ldquo;{conf.title}&rdquo;</span>.{" "}
                    <em className="text-gray-500">{conf.venue}</em>
                    {conf.pages && `, ${conf.pages}`}.
                  </p>
                  {conf.doi && (
                    <a
                      href={`https://doi.org/${conf.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-indigo-500 hover:underline"
                    >
                      DOI: {conf.doi}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
