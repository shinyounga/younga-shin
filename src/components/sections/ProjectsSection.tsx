"use client";

import { projects } from "@/data/projects";
import { researchProjects } from "@/data/awards";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import ScrollReveal from "../ui/ScrollReveal";
import { FlaskConical } from "lucide-react";
import { useLang } from "@/lib/useLang";

export default function ProjectsSection() {
  const { lang } = useLang();

  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title={lang === "ko" ? "프로젝트" : "Projects"}
          subtitle={lang === "ko" ? "연구 & 크리에이티브 작업" : "Research & creative work"}
        />

        {/* Research Projects */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <FlaskConical size={18} className="text-indigo-500" />
            <h3 className="text-base font-bold text-gray-800">
              {lang === "ko" ? "연구 프로젝트" : "Research Projects"}
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchProjects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 h-full">
                  <p className="text-xs font-medium text-indigo-500">
                    {project.period}
                  </p>
                  <h4 className="mt-1.5 text-sm font-bold text-gray-900 leading-snug">
                    {lang === "ko" ? project.titleKr : project.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-gray-500">
                    {lang === "ko" ? project.funderKr : project.funder}
                  </p>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    {lang === "ko" ? project.descriptionKr : project.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Individual Projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
