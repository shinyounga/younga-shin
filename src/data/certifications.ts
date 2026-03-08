export interface Certification {
  name: string;
  nameKr: string;
  issuer: string;
  issuerKr: string;
  date: string;
}

export interface TestScore {
  name: string;
  score: string;
  detail?: string;
}

export const certifications: Certification[] = [
  {
    name: "Engineer Information Processing",
    nameKr: "정보처리기사",
    issuer: "National Technical Qualification",
    issuerKr: "국가기술자격증",
    date: "2024.06",
  },
  {
    name: "Korean History Proficiency Test — Level 1",
    nameKr: "한국사능력검정시험 1급",
    issuer: "National Institute of Korean History (Credential ID: 70-101286)",
    issuerKr: "국사편찬위원회 (자격번호: 70-101286)",
    date: "2024.05",
  },
  {
    name: "Engineer Cadastral Surveying",
    nameKr: "지적기사",
    issuer: "National Technical Qualification",
    issuerKr: "국가기술자격증",
    date: "2023.09",
  },
  {
    name: "Engineer Surveying & Geo-Spatial Information",
    nameKr: "측량및지형공간정보기사",
    issuer: "National Technical Qualification",
    issuerKr: "국가기술자격증",
    date: "2022.12",
  },
  {
    name: "Computer Specialist in Spreadsheet & Database Level 1",
    nameKr: "컴퓨터활용능력 1급",
    issuer: "National Technical Qualification",
    issuerKr: "국가기술자격증",
    date: "2022.03",
  },
  {
    name: "Driver's License (Class 1 Regular)",
    nameKr: "1종 보통 운전면허",
    issuer: "Seoul Metropolitan Police Agency",
    issuerKr: "서울특별시경찰청",
    date: "2021.02",
  },
];

export const testScores: TestScore[] = [
  {
    name: "TOEIC",
    score: "925",
    detail: "LC 460 / RC 465",
  },
  {
    name: "TOEIC Speaking",
    score: "Advanced Low (160)",
  },
];

export const languages = [
  { name: "Korean", nameKr: "한국어", level: "Native" },
  { name: "English", nameKr: "영어", level: "TOEIC 925 / Speaking Advanced Low" },
  { name: "French", nameKr: "프랑스어", level: "Basic conversational" },
];
