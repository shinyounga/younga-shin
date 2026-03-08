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
  // === Education ===
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
      "TA Scholarship (2024-2): Engineering Information Processing (ENG1108)",
    ],
    detailsKr: [
      "GPA: 4.22 / 4.3",
      "연구 분야: 건설공학을 위한 AI 및 딥러닝",
      "연구 주제: 작업자 건강 모니터링, 수위 예측, RAG 시스템",
      "재학조교장학금(TA) (2024-2학기): 공학정보처리 (ENG1108)",
    ],
  },
  {
    type: "education",
    title: "B.A. in Film and Digital Media (Minor: Media Communication)",
    titleKr: "영화영상학과 학사 (부전공: 미디어커뮤니케이션학)",
    organization: "Dongguk University",
    organizationKr: "동국대학교",
    period: "2019 — 2024",
    description: "Summa Cum Laude, Advisor: Prof. Jongho Park",
    descriptionKr: "최우등 졸업, 지도교수: 박종호",
    details: [
      "GPA: 4.22 / 4.5",
      "Produced 40+ short films",
      "2021 College of Arts Student Council Secretary General",
      "2020-2021 Dongguk Film Festival Planning & Operations Team Leader",
    ],
    detailsKr: [
      "GPA: 4.22 / 4.5",
      "40편 이상 단편영화 제작",
      "2021 예술대학 학생회 사무국장",
      "2020-2021 동국영화제 기획운영팀장",
    ],
  },
  {
    type: "education",
    title: "Exchange Student — Media Communication",
    titleKr: "교환학생 — 미디어커뮤니케이션학",
    organization: "ISTC — Institut des Stratégies et Techniques de Communication, Lille, France",
    organizationKr: "ISTC — 커뮤니케이션 전략기술연구소, 프랑스 릴",
    period: "2023.08 — 2023.12",
    description:
      "Focus: Branding & Visual Identity, Intercultural Communication, Global Brand Strategy",
    descriptionKr:
      "전공: 브랜딩 & 비주얼 아이덴티티, 다문화 커뮤니케이션, 글로벌 브랜드 전략",
  },

  // === Work ===
  {
    type: "work",
    title: "Sub-filming PD",
    titleKr: "서브촬영 PD",
    organization: "SBS NEWS (스브스뉴스)",
    organizationKr: "SBS 뉴스 (스브스뉴스)",
    period: "2021.07 — 2024.02",
    description:
      "Digital content filming across multiple flagship programs",
    descriptionKr: "다수 대표 프로그램의 디지털 콘텐츠 서브촬영",
    details: [
      "Programs: Moonmyung Express, Seoul List, Gagya, SBS News Original, Omokgyo Electronics, Don Education, Jaesu Survival",
      "Sub-filming across 50+ episodes",
    ],
    detailsKr: [
      "프로그램: 문명특급, 서울리스, 가갸거겨고교, 스브스뉴스 오리지널, 오목교 전자상가, 돈높이교육, 재수서바이벌",
      "50회 이상 에피소드 서브촬영",
    ],
  },
  {
    type: "work",
    title: "Freelance Assistant Director & Camera Crew",
    titleKr: "프리랜서 연출부 & 촬영부",
    organization: "Various Productions",
    organizationKr: "다수 프로덕션",
    period: "2020 — 2022",
    description:
      "Worked on commercial ads, MVs, and promotional videos",
    descriptionKr:
      "광고, 뮤직비디오, 홍보영상 제작 참여",
    details: [
      "Fendi Renaissance - Anima Mundi: Seoul (AD)",
      "Hyundai Glovis New HQ Promotional Video (AD)",
      "Bling Bling - Oh MAMA MV (AD)",
      "Kakao Mini / Tina Home Party viral ads (AD)",
    ],
    detailsKr: [
      "Fendi Renaissance - Anima Mundi: Seoul (연출부)",
      "현대글로비스 신사옥 홍보영상 (연출부)",
      "블링블링 - Oh MAMA MV (연출부)",
      "카카오미니 / 티나 홈파티 바이럴 광고 (연출부)",
    ],
  },

  // === Activities ===
  {
    type: "activity",
    title: "National Supporters 'Land Lover' — Video Journalist",
    titleKr: "국민 서포터즈 '랜드러버' — 영상기자",
    organization: "LX Korea Land & Geospatial Informatix Corp.",
    organizationKr: "LX 한국국토정보공사",
    period: "2022",
    description: "Video planning, filming, and editing for promotional content",
    descriptionKr: "영상 기획, 촬영 및 편집",
    details: [
      "2022 World Smart City Expo coverage",
      "2022 Smart Land Expo coverage",
      "LX Space Dream Center promotional content",
      "3D Cultural Heritage Service introduction video",
    ],
    detailsKr: [
      "2022 월드 스마트시티 엑스포 취재",
      "2022 스마트국토 엑스포 취재",
      "LX공간드림센터 홍보 콘텐츠",
      "3D 문화유산 서비스 소개 영상",
    ],
  },

  // === Awards ===
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

  // === Volunteer ===
  {
    type: "volunteer",
    title: "Barrier-Free Film Education Volunteer",
    titleKr: "배리어프리 영화 교육봉사",
    organization: "Nanumelbag (Living Lab)",
    organizationKr: "나누멜바그 (리빙랩)",
    period: "2019 — 2020",
    description:
      "Taught youth to create barrier-free films; created audio descriptions for Seoul Senior Film Festival",
    descriptionKr:
      "청소년과 함께 배리어프리 영화를 만드는 교육봉사; 서울노인영화제 폐막작 배리어프리 화면해설 제작",
  },
];
