export interface Project {
  title: string;
  titleKr?: string;
  description: string;
  descriptionKr?: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "AI-Based Worker Health Framework",
    titleKr: "AI 기반 건설 근로자 건강 모니터링 프레임워크",
    description:
      "Developed a deep learning framework for monitoring construction worker health using wearable sensor data and environmental factors. Integrates real-time IoT data streams for proactive safety alerts.",
    descriptionKr:
      "웨어러블 센서 데이터와 환경 요인을 활용한 건설 근로자 건강 모니터링 딥러닝 프레임워크 개발. 실시간 IoT 데이터 스트림을 통한 선제적 안전 경고 시스템 구현.",
    tags: ["PyTorch", "IoT", "Deep Learning", "Safety"],
    featured: true,
  },
  {
    title: "Water Level Forecasting System",
    titleKr: "수위 예측 시스템",
    description:
      "Built a time-series prediction model for levee monitoring and water level forecasting, presented at ISARC 2025. Combines hydrological data with deep learning for flood risk assessment.",
    descriptionKr:
      "제방 모니터링 및 수위 예측을 위한 시계열 예측 모델 구축 (ISARC 2025 발표). 수문학적 데이터와 딥러닝을 결합한 홍수 위험 평가.",
    tags: ["Time-Series", "PyTorch", "Hydrology", "Prediction"],
    featured: true,
  },
  {
    title: "RAG for Construction Documents",
    titleKr: "건설 문서를 위한 RAG 시스템",
    description:
      "Implemented a Retrieval-Augmented Generation system tailored for construction engineering documents. Enables intelligent Q&A over technical specifications and standards.",
    descriptionKr:
      "건설공학 문서에 특화된 검색 증강 생성(RAG) 시스템 구현. 기술 사양 및 표준에 대한 지능형 Q&A 지원.",
    tags: ["LLM", "RAG", "NLP", "Construction"],
    featured: true,
  },
  {
    title: "PPE Detection in Site Imagery",
    titleKr: "건설 현장 안전장비 감지 시스템",
    description:
      "Computer vision model for detecting Personal Protective Equipment (PPE) compliance on construction sites using object detection and image classification.",
    descriptionKr:
      "객체 감지 및 이미지 분류를 활용한 건설 현장 개인보호장비(PPE) 착용 여부 감지 컴퓨터 비전 모델.",
    tags: ["Computer Vision", "Object Detection", "Safety", "YOLO"],
  },
  {
    title: "SBS NEWS — Digital Content Production",
    titleKr: "SBS 뉴스 — 디지털 콘텐츠 제작",
    description:
      "Produced and filmed content for SBS NEWS flagship programs including Moonmyung Express, Seoul List, Gagya, and more. Managed sub-filming across 50+ episodes over 3 years.",
    descriptionKr:
      "문명특급, 서울리스, 가갸거겨고교, 스브스뉴스, 오목교 전자상가 등 SBS 대표 프로그램의 서브촬영 및 콘텐츠 제작. 3년간 50회 이상 참여.",
    tags: ["Video Production", "Broadcasting", "Storytelling", "SBS"],
  },
  {
    title: "Cultural Heritage Documentary — <At Changgyeonggung>",
    titleKr: "문화유산 다큐멘터리 — <창경궁에서>",
    description:
      "Award-winning documentary on Korean cultural heritage (2020 Idea Bank Award). Combined cinematic storytelling with historical research.",
    descriptionKr:
      "2020 문화유산채널 영상공모전 아이디어뱅크상 수상작. 영화적 스토리텔링과 역사 연구를 결합한 문화유산 다큐멘터리.",
    tags: ["Documentary", "Film", "Award-Winning", "Cultural Heritage"],
    link: "https://www.youtube.com/watch?v=rFpjk3HAqvM",
  },
];
