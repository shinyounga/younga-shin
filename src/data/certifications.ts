export interface Certification {
  name: string;
  nameKr: string;
  issuer: string;
  issuerKr: string;
  year?: string;
}

export interface TestScore {
  name: string;
  score: string;
  detail?: string;
}

export const certifications: Certification[] = [
  {
    name: "Computer Specialist in Spreadsheet & Database Level 1",
    nameKr: "컴퓨터활용능력 1급",
    issuer: "National Technical Qualification",
    issuerKr: "국가기술자격증",
  },
  {
    name: "Engineer Information Processing",
    nameKr: "정보처리기사",
    issuer: "National Technical Qualification",
    issuerKr: "국가기술자격증",
  },
  {
    name: "Engineer Surveying & Geo-Spatial Information",
    nameKr: "측량및지형공간정보기사",
    issuer: "National Technical Qualification",
    issuerKr: "국가기술자격증",
  },
  {
    name: "Engineer Cadastral Survey",
    nameKr: "지적기사",
    issuer: "National Technical Qualification",
    issuerKr: "국가기술자격증",
  },
  {
    name: "Korean History Proficiency Test Level 1",
    nameKr: "한국사능력검정시험 1급",
    issuer: "National Institute of Korean History",
    issuerKr: "국사편찬위원회",
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
