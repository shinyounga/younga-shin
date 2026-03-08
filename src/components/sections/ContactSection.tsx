"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { useLang } from "@/lib/useLang";

export default function ContactSection() {
  const { lang } = useLang();

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionTitle
          title={lang === "ko" ? "연락처" : "Get in Touch"}
          subtitle={
            lang === "ko"
              ? "협업 제안이나 인사 환영합니다"
              : "Feel free to reach out for collaborations or just to say hi"
          }
        />

        <ScrollReveal>
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-sm sm:p-12">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-indigo-500" />
                <span>{siteConfig.location}</span>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl"
              >
                <Mail size={20} />
                {siteConfig.email}
              </a>

              <div className="flex flex-wrap justify-center gap-5">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.social.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  <ScholarIcon />
                  Google Scholar
                </a>
                <a
                  href={siteConfig.social.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  <OrcidIcon />
                  ORCID
                </a>
                <a
                  href={siteConfig.social.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  <BlogIcon />
                  {lang === "ko" ? "블로그" : "Blog"}
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ScholarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function OrcidIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">iD</text>
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
