"use client";

import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/lib/useLang";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { lang } = useLang();

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
        {project.featured && (
          <span className="absolute -top-2.5 right-4 rounded-full bg-indigo-500 px-3 py-0.5 text-xs font-semibold text-white">
            Featured
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900">
          {lang === "ko" ? (project.titleKr ?? project.title) : project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {lang === "ko"
            ? (project.descriptionKr ?? project.description)
            : project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600"
            >
              {tag}
            </span>
          ))}
        </div>
        {(project.link || project.github) && (
          <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-indigo-600"
              >
                <ExternalLink size={16} />
                {lang === "ko" ? "보기" : "View"}
              </a>
            )}
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
