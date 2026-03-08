export interface SbsEpisode {
  program: string;
  programKr: string;
  title: string;
  year: number;
  youtubeUrl: string;
  videoId: string;
}

export const sbsPrograms = [
  { id: "moonmyung", name: "Moonmyung Express", nameKr: "문명특급" },
  { id: "gagya", name: "Gagya", nameKr: "가갸거겨고교" },
  { id: "seoul-list", name: "Seoul List", nameKr: "서울리스" },
  { id: "sbs-original", name: "SBS News Original", nameKr: "스브스뉴스 오리지널" },
  { id: "omokgyo", name: "Omokgyo Electronics", nameKr: "오목교 전자상가" },
  { id: "jaesu", name: "Jaesu Survival", nameKr: "재수서바이벌" },
] as const;

export const sbsEpisodes: SbsEpisode[] = [
  // === 문명특급 ===
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 201화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=G-bkOP6YSD4", videoId: "G-bkOP6YSD4" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 204화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=6uuIXobmqTo", videoId: "6uuIXobmqTo" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 208화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=cVIGSyz4IY0", videoId: "cVIGSyz4IY0" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 211화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=T99Xc-2d0cs", videoId: "T99Xc-2d0cs" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 216화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=4eJyKLMe2g4", videoId: "4eJyKLMe2g4" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 217화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=fjJ6V0UIFDY", videoId: "fjJ6V0UIFDY" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 219화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=AvKajvNREKM", videoId: "AvKajvNREKM" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 221화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=nzOdX8k3hTs", videoId: "nzOdX8k3hTs" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 222화", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=WbA74l8gH7s", videoId: "WbA74l8gH7s" },
  { program: "moonmyung", programKr: "문명특급", title: "크리스마스이브 라이브", year: 2021, youtubeUrl: "https://www.youtube.com/watch?v=YbpXciwW4_E", videoId: "YbpXciwW4_E" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 228화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=uRrXefxacW8", videoId: "uRrXefxacW8" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 229화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=RAbzGvmkRjM", videoId: "RAbzGvmkRjM" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 232화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=-wDEE8gOv1w", videoId: "-wDEE8gOv1w" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 233화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=IzRK7gQPXBc", videoId: "IzRK7gQPXBc" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 235화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=PhU9fDz06jI", videoId: "PhU9fDz06jI" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 236화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=MprPLQk7Xq8", videoId: "MprPLQk7Xq8" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 239화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=RQfyyMdw8Ds", videoId: "RQfyyMdw8Ds" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 241화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=3SYthj0-d_s", videoId: "3SYthj0-d_s" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 243화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=OOO6IyRPJq0", videoId: "OOO6IyRPJq0" },
  { program: "moonmyung", programKr: "문명특급", title: "문명특급 244화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=OmdHjssZSUE", videoId: "OmdHjssZSUE" },

  // === 가갸거겨고교 ===
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 20화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=8vfocnl59ME", videoId: "8vfocnl59ME" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 24화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=kzFgNF1TvE0", videoId: "kzFgNF1TvE0" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 23화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=YXaqIKByxKc", videoId: "YXaqIKByxKc" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 35화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=2klyWEGgoBs", videoId: "2klyWEGgoBs" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 36화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=jjWF983yN6Q", videoId: "jjWF983yN6Q" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 37화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=RYww0Q9qA8E", videoId: "RYww0Q9qA8E" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 38화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=v3vXQfkvWvc", videoId: "v3vXQfkvWvc" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 41화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=CmzyWPOcVDk", videoId: "CmzyWPOcVDk" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 47화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=6pJbtVX9j2Y", videoId: "6pJbtVX9j2Y" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 52화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=72rVRc0FE7g", videoId: "72rVRc0FE7g" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 54화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=R8HqwmsgqM8", videoId: "R8HqwmsgqM8" },
  { program: "gagya", programKr: "가갸거겨고교", title: "가갸거겨고교 56화", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=0zJxDNV3XOA", videoId: "0zJxDNV3XOA" },

  // === 서울리스 ===
  { program: "seoul-list", programKr: "서울리스", title: "서울리스 1화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=ofIc3AYoBVM", videoId: "ofIc3AYoBVM" },
  { program: "seoul-list", programKr: "서울리스", title: "서울리스 2화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=jtRQK0_kI40", videoId: "jtRQK0_kI40" },
  { program: "seoul-list", programKr: "서울리스", title: "서울리스 3화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=KBThjy_OOfU", videoId: "KBThjy_OOfU" },
  { program: "seoul-list", programKr: "서울리스", title: "서울리스 4화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=3V_adJg3Tdo", videoId: "3V_adJg3Tdo" },
  { program: "seoul-list", programKr: "서울리스", title: "서울리스 6화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=NfZu8bRGVoI", videoId: "NfZu8bRGVoI" },
  { program: "seoul-list", programKr: "서울리스", title: "서울리스 14화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=xxErMAwTHAI", videoId: "xxErMAwTHAI" },

  // === 스브스뉴스 오리지널 ===
  { program: "sbs-original", programKr: "스브스뉴스 오리지널", title: "스브스뉴스 오리지널 (1)", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=XGwgeBRwwkI", videoId: "XGwgeBRwwkI" },
  { program: "sbs-original", programKr: "스브스뉴스 오리지널", title: "스브스뉴스 오리지널 (2)", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=io3jNKW4UIc", videoId: "io3jNKW4UIc" },
  { program: "sbs-original", programKr: "스브스뉴스 오리지널", title: "스브스뉴스 오리지널 (3)", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=tC4VMxLsQ-8", videoId: "tC4VMxLsQ-8" },
  { program: "sbs-original", programKr: "스브스뉴스 오리지널", title: "스브스뉴스 오리지널 (4)", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=S8ZJOnCeF14", videoId: "S8ZJOnCeF14" },
  { program: "sbs-original", programKr: "돈높이교육", title: "돈높이교육 7편", year: 2023, youtubeUrl: "https://www.youtube.com/watch?v=CkHlk6o4Rps", videoId: "CkHlk6o4Rps" },

  // === 오목교 전자상가 ===
  { program: "omokgyo", programKr: "오목교 전자상가", title: "오목교 전자상가 76화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=jwEQKwblulc", videoId: "jwEQKwblulc" },
  { program: "omokgyo", programKr: "오목교 전자상가", title: "오목교 전자상가 81화", year: 2022, youtubeUrl: "https://www.youtube.com/watch?v=PUj21XGzaxs", videoId: "PUj21XGzaxs" },

  // === 재수서바이벌 ===
  { program: "jaesu", programKr: "재수서바이벌", title: "재수서바이벌 4-1화", year: 2024, youtubeUrl: "https://www.youtube.com/watch?v=cBtL5u7P3q4", videoId: "cBtL5u7P3q4" },
];
