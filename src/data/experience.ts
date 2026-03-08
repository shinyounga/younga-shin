export interface ExperienceItem {
  type: "education" | "work" | "award" | "volunteer" | "activity";
  title: string;
  titleKr?: string;
  organization: string;
  organizationKr?: string;
  period: string;
  sortYear?: number; // for chronological sorting (higher = more recent)
  logo?: string; // path to logo image (relative to basePath)
  description?: string;
  descriptionKr?: string;
  details?: string[];
  detailsKr?: string[];
}

export const experience: ExperienceItem[] = [
  // === Education (newest first) ===
  {
    type: "education",
    title: "Master of Engineering, Civil and Environmental Engineering",
    titleKr: "토목환경공학과 석사과정",
    organization: "Yonsei University",
    organizationKr: "연세대학교",
    period: "2024.09 — Present",
    sortYear: 2026,
    logo: "/images/logos/yonsei.png",
    description: "Smart Infrastructure Laboratory, advised by Prof. Hongjo Kim",
    descriptionKr: "스마트인프라연구실, 김홍조 교수 지도",
    details: [
      "GPA: 4.22 / 4.3",
      "Focus: AI & Deep Learning for Construction Engineering",
      "Research: Worker health monitoring, Water level forecasting, RAG systems",
      "Teaching Assistant (2024-2): Engineering Information Processing (ENG1108)",
    ],
    detailsKr: [
      "GPA: 4.22 / 4.3",
      "연구 분야: 건설공학을 위한 AI 및 딥러닝",
      "연구 주제: 작업자 건강 모니터링, 수위 예측, RAG 시스템",
      "재학조교(TA) (2024-2학기): 공학정보처리 (ENG1108)",
    ],
  },
  {
    type: "education",
    title: "Exchange Student — Media Communication",
    titleKr: "교환학생 — 미디어커뮤니케이션학",
    organization: "ISTC — Institut des Stratégies et Techniques de Communication, Lille, France",
    organizationKr: "ISTC — 커뮤니케이션 전략기술연구소, 프랑스 릴",
    period: "2023.08 — 2024.01",
    sortYear: 2024,
    logo: "/images/logos/istc.png",
    description:
      "Studied Photoshop & Illustrator for content planning/production, consumer behavior theory for global brand strategy analysis, and era-specific brand communication strategy research with content creation",
    descriptionKr:
      "포토샵·일러스트레이터를 활용한 콘텐츠 기획·제작, 소비자 행동 이론 기반 글로벌 브랜드 전략 분석·평가·제안, 시대별 브랜드 커뮤니케이션 전략 연구 및 콘텐츠 제작 등 다양한 수업 수강",
  },
  {
    type: "education",
    title: "Bachelor of Arts, Film and Digital Media (Minor: Media Communication)",
    titleKr: "영화영상학과 학사 (부전공: 미디어커뮤니케이션학)",
    organization: "Dongguk University",
    organizationKr: "동국대학교",
    period: "2019.03 — 2024.08",
    sortYear: 2024,
    logo: "/images/logos/dongguk.png",
    description: "Summa Cum Laude, Advisor: Prof. Jongho Park",
    descriptionKr: "최우등 졸업, 지도교수: 박종호",
    details: [
      "GPA: 4.22 / 4.5",
      "Produced 40+ short films",
      "Chief of General Affairs, College of Arts Student Council (2021)",
      "Planning & Operations Team Leader, Dongguk Film Festival (2021)",
      "Technical Team, Dongguk Small Film Festival (2021)",
      "Welfare Officer, Dept. of Film and Digital Media Student Council (2020)",
      "Planning & Operations Team Member, Dongguk Film Festival (2020)",
      "NANUMELVAGUE (Living Lab) — Volunteer club creating barrier-free films with secondary school students (2019–2020)",
    ],
    detailsKr: [
      "GPA: 4.22 / 4.5",
      "40편 이상 단편영화 제작",
      "제35대 예술대학 학생회 'YELLOW' 사무국장 (2021)",
      "동국영화제 기획운영팀장 (2021)",
      "동국소영화제 기술팀 (2021)",
      "영화영상학과 학생회 복지국장 (2020)",
      "동국영화제 기획운영팀원 (2020)",
      "나누멜바그 (리빙랩) — 중고등학생과 배리어프리 영화 제작 봉사 동아리 (2019–2020)",
    ],
  },
  {
    type: "education",
    title: "Baehwa Girls' High School (Liberal Arts Track)",
    titleKr: "배화여자고등학교 (인문계)",
    organization: "Baehwa Girls' High School, Seoul",
    organizationKr: "배화여자고등학교, 서울특별시",
    period: "2016.03 — 2019.02",
    sortYear: 2019,
  },

  // === Work (newest first) ===
  {
    type: "work",
    title: "Lab & Experiment Video Content Production TA",
    titleKr: "실험·실습 동영상 제작 교과목 조교",
    organization: "Yonsei University — Center for Teaching & Learning Innovation",
    organizationKr: "연세대학교 교무처 교수학습혁신센터",
    period: "2024-2",
    sortYear: 2024,
    description:
      "Content production assistant for Engineering Information Processing (ENG1108) lab/experiment video course",
    descriptionKr:
      "공학정보처리(ENG1108) 실험·실습 동영상 콘텐츠 제공 강좌의 효과적 운영을 위한 콘텐츠 제작 조교",
  },
  {
    type: "work",
    title: "Videographing PD, Freelance",
    titleKr: "서브촬영 PD, 프리랜서",
    organization: "SBS NEWS (스브스뉴스)",
    organizationKr: "SBS 뉴스 (스브스뉴스)",
    period: "2021.07 — 2024.02",
    sortYear: 2024,
    logo: "/images/logos/sbs.svg",
    description:
      "Covered a wide range of locations including indoor studios, outdoor events, festivals, university campuses, city centers, e-sports venues, and museums, handling interviews, live streaming, and on-site sketch filming",
    descriptionKr: "실내 스튜디오, 야외 행사장, 페스티벌, 대학가, 시내, e-스포츠, 박물관 등 다양한 현장에서 취재 및 인터뷰, 실시간 라이브 스트리밍, 현장 스케치 촬영",
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
    period: "2019 — 2024",
    sortYear: 2024,
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

  // === Activities (newest first) ===
  {
    type: "activity",
    title: "National Supporters 'Land Lover' — Video Journalist",
    titleKr: "국민 서포터즈 '랜드러버' — 영상기자",
    organization: "LX Korea Land & Geospatial Informatix Corp.",
    organizationKr: "LX 한국국토정보공사",
    period: "2022",
    sortYear: 2022,
    logo: "/images/logos/lx.svg",
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
  {
    type: "activity",
    title: "Guest Writer — Indie Magazine 'Short Bus'",
    titleKr: "객원필진 — 인디매거진 숏버스",
    organization: "Funnycon — Indie Magazine Short Bus",
    organizationKr: "퍼니콘 — 인디매거진 숏버스",
    period: "2021.03",
    sortYear: 2021,
    description:
      "Contributing writer for an indie magazine introducing independent short films to the public, covering domestic and international short films and film festival issues",
    descriptionKr:
      "독립 단편영화를 대중에게 소개하며 국내외 단편영화 및 영화제와 관련된 이슈들을 다루는 인디매거진 객원필진 활동",
    details: [
      "Magazine: https://post.naver.com/funnycon",
      "Article: https://m.post.naver.com/viewer/postView.nhn?volumeNo=30979715&memberNo=16396899",
    ],
    detailsKr: [
      "매거진: https://post.naver.com/funnycon",
      "기고글: https://m.post.naver.com/viewer/postView.nhn?volumeNo=30979715&memberNo=16396899",
    ],
  },

  // === Awards ===
  {
    type: "award",
    title: "Cultural Heritage Video Contest — Idea Bank Award",
    titleKr: "문화유산채널 영상공모전 — 아이디어뱅크상 수상",
    organization: "Korea Cultural Heritage Foundation",
    organizationKr: "한국문화재재단",
    period: "2020.12",
    sortYear: 2020,
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
    organization: "Dongguk University Film & Digital Media — Nanumelbag",
    organizationKr: "동국대학교 영화영상학과 나누멜바그",
    period: "2019.03 — 2020.12",
    sortYear: 2020,
    description:
      "Barrier-free filmmaking Living Lab — Partnered with local community children's centers to provide barrier-free filmmaking education for underprivileged youth, offering opportunities for talent discovery and career exploration while fostering disability awareness",
    descriptionKr:
      "배리어프리 영화제작 리빙랩 — 지역아동센터 연계 저소득층 아이들을 대상으로 배리어프리 영화제작 교육을 통해 특기 적성 및 진로 탐색의 기회 뿐만 아니라 장애인식 개선 계기 마련",
    details: [
      "Selected for Irueeo DREAM Project (Goyang Youth Career Center) — Co-produced barrier-free short film <Dot> with Iruda School, Goyang",
      "Produced non-profit barrier-free short films with student teams",
      "Film <Dot>: https://youtu.be/hcUzDc-gZUc",
    ],
    detailsKr: [
      "고양시청소년진로센터 이루어DREAM 프로젝트 선정 — 고양시 소재 이루다학교와 공동제작한 배리어프리 단편영화 <점>",
      "비영리 목적의 배리어프리 단편영화 제작",
      "단편영화 <점>: https://youtu.be/hcUzDc-gZUc",
    ],
  },
];
