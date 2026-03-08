"use client";

import { Github, Mail, Linkedin, Film } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useLang } from "@/lib/useLang";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}.{" "}
          {lang === "ko" ? "All rights reserved." : "All rights reserved."}
        </p>
        <div className="flex gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-700"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-700"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={siteConfig.social.imdb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-700"
            aria-label="IMDb"
          >
            <Film size={20} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-gray-400 transition-colors hover:text-gray-700"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
