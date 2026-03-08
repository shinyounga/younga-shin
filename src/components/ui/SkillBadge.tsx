"use client";

/* eslint-disable @next/next/no-img-element */

interface SkillBadgeProps {
  name: string;
  level: number;
  icon?: string;
}

const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const iconPaths: Record<string, string> = {
  python: `${DEVICON_CDN}/python/python-original.svg`,
  pytorch: `${DEVICON_CDN}/pytorch/pytorch-original.svg`,
  docker: `${DEVICON_CDN}/docker/docker-original.svg`,
  git: `${DEVICON_CDN}/git/git-original.svg`,
  linux: `${DEVICON_CDN}/linux/linux-original.svg`,
  typescript: `${DEVICON_CDN}/typescript/typescript-original.svg`,
  nextjs: `${DEVICON_CDN}/nextjs/nextjs-original.svg`,
  figma: `${DEVICON_CDN}/figma/figma-original.svg`,
  photoshop: `${DEVICON_CDN}/photoshop/photoshop-original.svg`,
  premierepro: `${DEVICON_CDN}/premierepro/premierepro-original.svg`,
  aftereffects: `${DEVICON_CDN}/aftereffects/aftereffects-original.svg`,
  notion: `${DEVICON_CDN}/notion/notion-original.svg`,
  tailwindcss: `${DEVICON_CDN}/tailwindcss/tailwindcss-original.svg`,
  latex: `${DEVICON_CDN}/latex/latex-original.svg`,
};

export default function SkillBadge({ name, level, icon }: SkillBadgeProps) {
  const iconUrl = icon ? iconPaths[icon] : null;

  return (
    <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 transition-colors hover:bg-indigo-50">
      {iconUrl && (
        <img
          src={iconUrl}
          alt={name}
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
          loading="lazy"
        />
      )}
      <span className="flex-1 text-sm font-medium text-gray-700">{name}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < level ? "bg-indigo-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
