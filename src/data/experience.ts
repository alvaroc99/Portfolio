export interface Experience {
  role: string;
  company: string;
  place: string;
  year: number;
  period: string;
}

const experience: Experience[] = [
  {
    role: "Desarrollador Web",
    company: "Youpal Group",
    place: "Remoto",
    year: 2025,
    period: "Mar – Jun",
  },
  {
    role: "Administrador de Sistemas",
    company: "Raini Computer S.A.",
    place: "Cádiz",
    year: 2022,
    period: "Mar – Jun",
  },
  {
    role: "Técnico de Instalaciones de Telecomunicaciones",
    company: "Circet",
    place: "Cádiz",
    year: 2019,
    period: "Mar – Jun",
  },
];

// Mas reciente primero
export const sortedExperience = [...experience].sort((a, b) => b.year - a.year);