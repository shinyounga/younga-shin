interface SkillBadgeProps {
  name: string;
  level: number;
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 transition-colors hover:bg-indigo-50">
      <span className="text-sm font-medium text-gray-700">{name}</span>
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
