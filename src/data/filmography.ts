export interface FilmWork {
  year: number;
  title: string;
  titleKr: string;
  role: string;
  roleKr: string;
  category: "directing" | "cinematography" | "lighting" | "editing" | "production" | "other";
  link?: string;
  notable?: string;
  notableKr?: string;
}

export const filmography: FilmWork[] = [
  // Directing
  { year: 2020, title: "Perfect Birthday", titleKr: "완벽한 생일", role: "Director / Cinematographer", roleKr: "연출 / 촬영", category: "directing" },
  { year: 2020, title: "Sign", titleKr: "sign", role: "Director / Cinematographer / Editor", roleKr: "연출 / 촬영 / 편집", category: "directing", link: "https://youtu.be/gUHmJ-cCZSo" },
  { year: 2020, title: "The Best Poem", titleKr: "최고의 시", role: "Assistant Director", roleKr: "연출부", category: "directing", notable: "11th Seoul Metro Intl. Subway Film Festival Pre-production Support / 12th SISFF Opening Film", notableKr: "제11회 서울교통공사 국제지하철영화제 사전제작지원작 / 제12회 서울국제초단편영화제 개막작" },
  { year: 2020, title: "Three Cues", titleKr: "쓰리쿠", role: "Scripter", roleKr: "스크립터", category: "directing" },
  { year: 2021, title: "Shelf Life of a Peach", titleKr: "복숭아의 유통기한", role: "Assistant Director", roleKr: "조연출", category: "directing", notable: "26th City Film Festival Competition", notableKr: "제26회 도시영화제 경쟁부문" },
  { year: 2021, title: "Lee Chunja", titleKr: "이춘자씨", role: "Documentary Director", roleKr: "다큐 연출", category: "directing" },
  { year: 2022, title: "Not an Angel", titleKr: "천사가 아니야", role: "Assistant Director", roleKr: "조연출", category: "directing" },
  { year: 2025, title: "Haenam Cabbage", titleKr: "해남배추", role: "Script & Continuity", roleKr: "스크립터", category: "directing", link: "https://www.imdb.com/name/nm17437797/", notable: "IMDb / Sokcho Intl. Food Film Festival / World Culture Film Festival / 12th Incheon Independent Film Festival / Indie Shorts Fest Semi-Finalist (17min, Fiction)", notableKr: "IMDb / 속초국제음식영화제 / World Culture Film Festival / 제12회 인천독립영화제 / Indie Shorts Fest Semi-Finalist (17분, 픽션)" },

  // Cinematography
  { year: 2020, title: "Just Take a Dump", titleKr: "일단 똥을 싸라", role: "Cinematographer", roleKr: "촬영", category: "cinematography" },
  { year: 2020, title: "At Changgyeonggung", titleKr: "창경궁에서", role: "Cinematographer / Planner", roleKr: "촬영 / 기획", category: "cinematography", link: "https://www.youtube.com/watch?v=rFpjk3HAqvM" },
  { year: 2021, title: "Deliver Love with Flowers", titleKr: "꽃으로 마음을 전해요", role: "Cinematographer / Editor", roleKr: "촬영 / 편집", category: "cinematography", link: "https://youtu.be/9juBCtMlNB8" },
  { year: 2021, title: "Dot", titleKr: "점", role: "Camera Crew", roleKr: "촬영부", category: "cinematography" },

  // Lighting
  { year: 2019, title: "When Looking into the Abyss", titleKr: "심연을 들여다볼 때", role: "Lighting Crew", roleKr: "조명부", category: "lighting" },
  { year: 2024, title: "Suddenly, Home", titleKr: "갑자기 분위기 스파시바", role: "Lighting Crew", roleKr: "조명부", category: "lighting", link: "https://www.imdb.com/name/nm17437797/", notable: "IMDb / KOFIC Independent Art Film Production Support 2020 (Short Film)", notableKr: "IMDb / 2020 상반기 독립예술영화제작지원사업 단편부문 선정 (영화진흥위원회)" },
  { year: 2020, title: "Plant", titleKr: "식물", role: "Lighting", roleKr: "조명", category: "lighting" },
  { year: 2020, title: "Jeans", titleKr: "청바지", role: "Lighting", roleKr: "조명", category: "lighting" },
  { year: 2021, title: "Film", titleKr: "필름", role: "Lighting Crew", roleKr: "조명부", category: "lighting" },
  { year: 2021, title: "Looking for Artists", titleKr: "예술인을 찾습니다", role: "Lighting", roleKr: "조명", category: "lighting" },
  { year: 2021, title: "My Shadow", titleKr: "나의 그림자", role: "Lighting / Sound", roleKr: "조명 / 사운드", category: "lighting" },

  // Editing
  { year: 2020, title: "IBS (Irritable Bowel Syndrome)", titleKr: "과민성대장증후군", role: "Editor", roleKr: "편집", category: "editing", link: "https://youtu.be/BoAMHCoQeio" },
  { year: 2021, title: "IBS 2", titleKr: "과민성대장증후군2", role: "Editor", roleKr: "편집", category: "editing", link: "https://youtu.be/Q92EW0TRliQ" },

  // Other roles
  { year: 2019, title: "Picnic", titleKr: "소풍", role: "Production", roleKr: "제작부", category: "production" },
  { year: 2024, title: "Suddenly, Home", titleKr: "갑자기 분위기 스파시바", role: "Title Design", roleKr: "타이틀 디자인", category: "other", link: "https://www.imdb.com/name/nm17437797/", notable: "IMDb / KOFIC Independent Art Film Production Support 2020 (Short Film)", notableKr: "IMDb / 2020 상반기 독립예술영화제작지원사업 단편부문 선정 (영화진흥위원회)" },
  { year: 2020, title: "Complete Warmth", titleKr: "온전한 온기", role: "Producer", roleKr: "제작", category: "production" },
  { year: 2020, title: "Interview", titleKr: "인터뷰", role: "Sound", roleKr: "사운드", category: "other" },
  { year: 2020, title: "Complex", titleKr: "콤플렉스", role: "Actor", roleKr: "배우", category: "other" },
  { year: 2022, title: "For Age 12 Level 1", titleKr: "12세용 1단계", role: "Boom Operator", roleKr: "붐 오퍼레이터", category: "other" },
  { year: 2022, title: "Beyond the Frame", titleKr: "프레임너머", role: "Directing Support", roleKr: "연출지원", category: "other" },
];

export const professionalWork = [
  {
    year: 2020,
    titleKr: "티나 홈파티 키트 바이럴 광고",
    title: "Tina Home Party Kit Viral Ad",
    role: "Assistant Director",
    roleKr: "연출부",
    link: "https://youtu.be/jKDWQ3JAk1c",
  },
  {
    year: 2020,
    titleKr: "드로마 메리메이드 영상",
    title: "Droma Mermaid Video",
    role: "Assistant Director",
    roleKr: "연출부",
  },
  {
    year: 2020,
    titleKr: "세가지비디오 Fendi Renaissance - Anima Mundi: Seoul",
    title: "Fendi Renaissance - Anima Mundi: Seoul",
    role: "Assistant Director",
    roleKr: "연출부",
    link: "https://vimeo.com/489244278",
  },
  {
    year: 2020,
    titleKr: "카카오미니 바이럴 광고",
    title: "Kakao Mini Viral Ad",
    role: "Assistant Director",
    roleKr: "연출부",
    link: "https://youtu.be/8NwgJZIULBo",
  },
  {
    year: 2021,
    titleKr: "현대글로비스 신사옥 홍보영상",
    title: "Hyundai Glovis New HQ Promotional Video",
    role: "Assistant Director",
    roleKr: "연출부",
    link: "https://vimeo.com/515632630",
  },
  {
    year: 2021,
    titleKr: "뮤직비디오 Bling Bling(블링블링) - Oh MAMA",
    title: "MV: Bling Bling - Oh MAMA",
    role: "Assistant Director",
    roleKr: "연출부",
    link: "https://youtu.be/LJ07w2qbfqk",
  },
  {
    year: 2022,
    titleKr: "연극 <돌아온다> 홍보영상 제작부",
    title: "Theater <Coming Back> Promotional Video",
    role: "Production",
    roleKr: "제작부",
  },
  {
    year: 2020,
    titleKr: "중구 사회적 경제홍보영상",
    title: "Jung-gu Social Economy Promotional Video",
    role: "Camera Crew",
    roleKr: "촬영부",
  },
  {
    year: 2020,
    titleKr: "동국대학교 스포츠문화학과 연무제 영상 - 축구부",
    title: "Dongguk Univ. Sports Culture Dept. Festival - Soccer",
    role: "Camera Crew",
    roleKr: "촬영부",
    link: "https://youtu.be/avmO3l70ug4",
  },
  {
    year: 2021,
    titleKr: "옥상달빛 - 인턴 MV",
    title: "Rooftop Moonlight - Intern MV",
    role: "Cinematographer / Editor",
    roleKr: "촬영 / 편집",
    link: "https://youtu.be/placeholder", // placeholder
  },
];
