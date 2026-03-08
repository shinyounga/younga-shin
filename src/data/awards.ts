export interface AwardItem {
  year: string;
  title: string;
  titleKr: string;
  organization: string;
  organizationKr: string;
}

export const awards: AwardItem[] = [
  {
    year: "2026.02",
    title: "Jongno-gu Scholarship Foundation Scholarship",
    titleKr: "종로구장학회 장학금 (2026-1학기)",
    organization: "Jongno-gu Scholarship Foundation",
    organizationKr: "종로구장학회",
  },
  {
    year: "2025.08",
    title: "Jongno-gu Scholarship Foundation Scholarship",
    titleKr: "종로구장학회 장학금 (2025-2학기)",
    organization: "Jongno-gu Scholarship Foundation",
    organizationKr: "종로구장학회",
  },
  {
    year: "2025.02",
    title: "Jongno-gu Scholarship Foundation Scholarship",
    titleKr: "종로구장학회 장학금 (2025-1학기)",
    organization: "Jongno-gu Scholarship Foundation",
    organizationKr: "종로구장학회",
  },
  {
    year: "2023-2",
    title: "Exchange Student Scholarship (Outbound 30%)",
    titleKr: "교환학생장학 (outbound 30% 학비감면)",
    organization: "Dongguk University",
    organizationKr: "동국대학교",
  },
  {
    year: "2023-1,2",
    title: "Dongguk Talent Development Scholarship (Excellence)",
    titleKr: "동국인재육성장학 (우수)",
    organization: "Dongguk University",
    organizationKr: "동국대학교",
  },
  {
    year: "2019-2024",
    title: "Shimmyung Cultural Foundation Scholarship (Full 4 years)",
    titleKr: "심명문화재단 장학금 (대학 4년 전액)",
    organization: "Shimmyung Cultural Foundation",
    organizationKr: "심명문화재단",
  },
  {
    year: "2020-1, 2021-1",
    title: "Academic Excellence Scholarship",
    titleKr: "성적우수장학 (학비감면)",
    organization: "Dongguk University",
    organizationKr: "동국대학교",
  },
  {
    year: "2020-1",
    title: "Top Student in Course Scholarship (Aesthetics of Film)",
    titleKr: "강좌별수석장학 (영상미학분석)",
    organization: "Dongguk University",
    organizationKr: "동국대학교",
  },
  {
    year: "2020.11",
    title: "Cultural Heritage Video Contest — Idea Bank Award",
    titleKr: "문화유산채널 영상공모전 — 아이디어뱅크상",
    organization: "Cultural Heritage Administration",
    organizationKr: "문화재청",
  },
];

export interface ResearchProject {
  title: string;
  titleKr: string;
  period: string;
  funder: string;
  funderKr: string;
  description: string;
  descriptionKr: string;
}

export const researchProjects: ResearchProject[] = [
  {
    title:
      "Autonomous Evolutionary AI-Based Smart Sensing Platform for Early Detection and Proactive Response to Levee Failures",
    titleKr:
      "자율진화형 AI 기반 스마트 센싱 플랫폼을 통한 제방 파괴 조기탐지 및 선제적 대응",
    period: "Aug. 2024 — Present",
    funder: "National Research Foundation of Korea",
    funderKr: "한국연구재단",
    description:
      "Developing AI-driven systems for real-time levee failure monitoring and early warning",
    descriptionKr:
      "실시간 제방 파괴 모니터링 및 조기 경보를 위한 AI 기반 시스템 개발",
  },
  {
    title:
      "Vision-Based Safety Securing Technology for Temporary Structure Installation and Dismantlement",
    titleKr:
      "가시설 설치·해체를 위한 비전 기반 안전 확보 기술",
    period: "May 2024 — Present",
    funder: "Korea Agency for Infrastructure Technology Advancement",
    funderKr: "국토교통과학기술진흥원",
    description:
      "Development of a dataset for object detection of PPE (Personal Protective Equipment)",
    descriptionKr:
      "개인보호장비(PPE) 객체 감지를 위한 데이터셋 구축",
  },
  {
    title:
      "Development of Intelligent CCTV-AI-Based Construction Site Video Analysis Technology",
    titleKr:
      "지능형 CCTV-AI 기반 건설현장 영상 분석 기술 개발",
    period: "May 2024 — Present",
    funder: "Kumho Engineering & Construction",
    funderKr: "금호건설",
    description:
      "Producing technical demonstration and promotional videos for AI model validation and stakeholder presentation",
    descriptionKr:
      "AI 모델 검증 및 이해관계자 발표를 위한 기술 시연 및 홍보 영상 제작",
  },
];
