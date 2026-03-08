export interface ExperienceItem {
  type: "education" | "work" | "award" | "volunteer" | "activity";
  title: string;
  titleKr?: string;
  organization: string;
  organizationKr?: string;
  period: string;
  description?: string;
  descriptionKr?: string;
  details?: string[];
  detailsKr?: string[];
}

export const experience: ExperienceItem[] = [
  {
    type: "education",
    title: "M.S. in Civil and Environmental Engineering",
    titleKr: "토목환경공학과 석사과정",
    organization: "Yonsei University",
    organizationKr: "연세대학교",
    period: "2024 — Present",
    description: "Smart Infrastructure Laboratory, advised by Prof. Hongjo Kim",
    descriptionKr: "스마트인프라연구실, 김홍조 교수 지도",
    details: [
      "GPA: 4.22 / 4.3",
      "Focus: AI & Deep Learning for Construction Engineering",
      "Research: Worker health monitoring, Water level forecasting, RAG systems",
    ],
    detailsKr: [
      "GPA: 4.22 / 4.3",
      "연구 분야: 건설공학을 위한 AI 및 딥러닝",
      "연구 주제: 작업자 건강 모니터링, 수위 예측, RAG 시스템",
    ],
  },
  {
    type: "work",
    title: "Videographing Producer (Sub-cameraman)",
    titleKr: "영상 프로듀서 (서브촬영)",
    organization: "SBS NEWS",
    organizationKr: "SBS 뉴스",
    period: "2021 — 2024",
    description:
      "Digital content production across multiple flagship programs",
    descriptionKr: "다수 대표 프로그램의 디지털 콘텐츠 제작",
    details: [
      "Programs: Moonmyung Express, Seoul List, Gagya, SBS News Original, Omokgyo Electronics, etc.",
      "Sub-filming and post-production across 50+ episodes",
      "Collaborated with PDs, journalists, and editors",
    ],
    detailsKr: [
      "프로그램: 문명특급, 서울리스, 가갸거겨고교, 스브스뉴스, 오목교 전자상가, 재수서바이벌, 돈높이교육",
      "50회 이상 에피소드 서브촬영 및 후반작업",
      "PD, 기자, 편집자와 협업",
    ],
  },
  {
    type: "education",
    title: "B.A. in Film and Digital Media",
    titleKr: "영화영상학과 학사",
    organization: "Dongguk University",
    organizationKr: "동국대학교",
    period: "2019 — 2024",
    description: "Summa Cum Laude",
    descriptionKr: "수석 졸업 (최우등)",
    details: [
      "GPA: 4.22 / 4.5",
      "Produced 40+ short films",
    ],
    detailsKr: [
      "GPA: 4.22 / 4.5",
      "40편 이상 단편영화 제작",
    ],
  },
  {
    type: "education",
    title: "Exchange Student — Media Communication",
    titleKr: "교환학생 — 미디어커뮤니케이션학",
    organization: "ISTC, Lille, France",
    organizationKr: "ISTC, 프랑스 릴",
    period: "2023.08 — 2023.12",
    description:
      "Studied media communication in France, gaining global perspective on visual storytelling",
    descriptionKr:
      "프랑스에서 미디어커뮤니케이션학 수학, 글로벌 시각적 스토리텔링 역량 강화",
  },
  {
    type: "activity",
    title: "National Supporters 'Land Lover' — Video Journalist",
    titleKr: "국민 서포터즈 '랜드러버' — 영상기자",
    organization: "LX Korea Land & Geospatial Informatix Corp.",
    organizationKr: "LX 한국국토정보공사",
    period: "2022",
    description: "Video planning and production for promotional content",
    descriptionKr: "영상 기획 및 제작",
  },
  {
    type: "award",
    title: "Cultural Heritage Video Contest — Idea Bank Award",
    titleKr: "문화유산채널 영상공모전 — 아이디어뱅크상 수상",
    organization: "Korea Cultural Heritage Foundation",
    organizationKr: "문화유산채널",
    period: "2020",
    description:
      "Award-winning short film <At Changgyeonggung Palace> — Filming & planning",
    descriptionKr:
      "수상작 <창경궁에서> — 촬영 및 기획",
  },
  {
    type: "volunteer",
    title: "Barrier-Free Film Education Volunteer",
    titleKr: "배리어프리 영화 교육봉사",
    organization: "Nanumelbag (Living Lab)",
    organizationKr: "나누멜바그 (리빙랩)",
    period: "2019 — 2020",
    description:
      "Taught youth to create barrier-free films as part of an educational volunteering club",
    descriptionKr:
      "청소년과 함께 배리어프리 영화를 만드는 교육봉사 동아리",
  },
];
