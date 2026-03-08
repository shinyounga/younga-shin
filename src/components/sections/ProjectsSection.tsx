"use client";

import { projects } from "@/data/projects";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
