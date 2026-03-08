export interface Publication {
  type: "journal" | "conference";
  authors: string;
  year: number;
  title: string;
  venue: string;
  pages?: string;
  doi?: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    type: "journal",
    authors: "Choi, K., Jeong, M., Shin, Y., won Ma, J., Kim, K., & Kim, H.",
    year: 2026,
    title:
      "Retrieval optimization for construction documents in low-resource languages using contrastive sentence generation and matryoshka representation learning",
    venue: "Automation in Construction, 182, 106749",
    doi: "10.1016/j.autcon.2025.106749",
    link: "https://doi.org/10.1016/j.autcon.2025.106749",
  },
];

export const conferences: Publication[] = [
  {
    type: "conference",
    authors: "Shin, Y., Choi, K., Kim, Y., & Kim, H.",
    year: 2025,
    title:
      "Comparative Analysis of Short-Term Water Level Forecasting in Ungauged River Systems",
    venue:
      "Proceedings of the Creative Construction Conference (CCC 2025), Zadar, Croatia",
    pages: "pp. 416-424",
    doi: "10.22260/CCC2025/0050",
  },
  {
    type: "conference",
    authors: "Shin, Y., & Kim, H.",
    year: 2024,
    title:
      "[P-008] Sensor Network-Based Monitoring Research Trends for Levee Failure Risk Assessment (Poster Presentation)",
    venue:
      "Proceedings of the Korea Institute of Construction Engineering and Management Conference (KICEM 2024-11)",
    pages: "pp. 134-135 (2 pages)",
    link: "https://www.auric.or.kr/user/rdoc/DocRdoc.aspx?returnVal=RD_R&dn=432803",
  },
];
