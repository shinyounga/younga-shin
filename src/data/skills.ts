export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  categoryKr: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "AI / ML",
    categoryKr: "인공지능 / 머신러닝",
    icon: "Brain",
    skills: [
      { name: "Python", level: 5 },
      { name: "PyTorch", level: 4 },
      { name: "Deep Learning", level: 4 },
      { name: "NLP / RAG", level: 4 },
      { name: "Computer Vision", level: 4 },
      { name: "LLM Applications", level: 3 },
    ],
  },
  {
    category: "Engineering",
    categoryKr: "엔지니어링",
    icon: "Building",
    skills: [
      { name: "BIM / Revit", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Git / GitHub", level: 4 },
      { name: "Linux", level: 3 },
      { name: "Data Analysis", level: 4 },
      { name: "IoT Sensors", level: 3 },
    ],
  },
  {
    category: "Creative",
    categoryKr: "크리에이티브",
    icon: "Film",
    skills: [
      { name: "Final Cut Pro", level: 5 },
      { name: "Premiere Pro", level: 5 },
      { name: "After Effects", level: 4 },
      { name: "Photoshop", level: 4 },
      { name: "Video Production", level: 5 },
      { name: "Storytelling", level: 5 },
    ],
  },
  {
    category: "Web / Tools",
    categoryKr: "웹 / 도구",
    icon: "Code",
    skills: [
      { name: "Next.js", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Figma", level: 3 },
      { name: "LaTeX", level: 4 },
      { name: "Notion", level: 5 },
    ],
  },
];
