"use client";

/* eslint-disable @next/next/no-img-element */

interface SkillBadgeProps {
  name: string;
  level: number;
  icon?: string;
}

export default function SkillBadge({ name, level, icon }: SkillBadgeProps) {
  const basePath = process.env.NODE_ENV === "production" ? "/younga-shin" : "";
  const iconUrl = icon ? `${basePath}/icons/${icon}.svg` : null;

  return (
    <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-2.5 transition-colors hover:bg-indigo-50">
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={name}
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
          loading="lazy"
        />
      ) : (
        <div className="h-5 w-5 shrink-0" />
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
