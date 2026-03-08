export interface Certification {
  name: string;
  nameKr: string;
  issuer: string;
  issuerKr: string;
  date: string;
  credentialId?: string;
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
    issuer: "HRD Korea",
    issuerKr: "한국산업인력공단",
    date: "2024.06",
    credentialId: "24201020496G",
  },
  {
    name: "Korean History Proficiency Test — Level 1",
    nameKr: "한국사능력검정시험 1급",
    issuer: "National Institute of Korean History",
    issuerKr: "국사편찬위원회",
    date: "2024.05",
    credentialId: "70-101286",
  },
  {
    name: "Engineer Cadastral Surveying",
    nameKr: "지적기사",
    issuer: "HRD Korea",
    issuerKr: "한국산업인력공단",
    date: "2023.09",
    credentialId: "23202020726H",
  },
  {
    name: "Engineer Surveying & Geo-Spatial Information",
    nameKr: "측량및지형공간정보기사",
    issuer: "HRD Korea",
    issuerKr: "한국산업인력공단",
    date: "2022.12",
    credentialId: "22204020388Y",
  },
  {
    name: "Computer Specialist in Spreadsheet & Database Level 1",
    nameKr: "컴퓨터활용능력 1급",
    issuer: "Korea Chamber of Commerce and Industry",
    issuerKr: "대한상공회의소",
    date: "2022.03",
    credentialId: "22-K9-022518",
  },
  {
    name: "Driver's License (1st Class — Ordinary)",
    nameKr: "1종 보통 운전면허",
    issuer: "National Police Agency",
    issuerKr: "경찰청",
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
