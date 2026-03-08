export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string; // devicon class name or CDN URL
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
      { name: "Python", level: 5, icon: "python" },
      { name: "PyTorch", level: 4, icon: "pytorch" },
      { name: "Deep Learning", level: 4 },
      { name: "NLP / RAG", level: 4 },
      { name: "Computer Vision", level: 4 },
    ],
  },
  {
    category: "Engineering",
    categoryKr: "엔지니어링",
    icon: "Building",
    skills: [
      { name: "BIM / Revit", level: 4, icon: "revit" },
      { name: "Docker", level: 3, icon: "docker" },
      { name: "Git / GitHub", level: 4, icon: "git" },
      { name: "Linux", level: 3, icon: "linux" },
      { name: "Data Analysis", level: 4 },
    ],
  },
  {
    category: "Creative",
    categoryKr: "크리에이티브",
    icon: "Film",
    skills: [
      { name: "Final Cut Pro", level: 5, icon: "finalcutpro" },
      { name: "Premiere Pro", level: 5, icon: "premierepro" },
      { name: "After Effects", level: 4, icon: "aftereffects" },
      { name: "Photoshop", level: 4, icon: "photoshop" },
      { name: "Video Production", level: 5 },
      { name: "Storytelling", level: 5 },
    ],
  },
  {
    category: "Web / Tools",
    categoryKr: "웹 / 도구",
    icon: "Code",
    skills: [
      { name: "Figma", level: 3, icon: "figma" },
      { name: "Notion", level: 5, icon: "notion" },
    ],
  },
];
