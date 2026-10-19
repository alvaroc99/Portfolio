export interface Education {
  type: "academic" | "course";
  title: string;
  center: string;       
  place?: string; // solo si es presencial
  certificate?: string;
  start: number;
  end: number;
}

const education: Education[] = [
    {
        type: "academic",
        title: "CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)",
        center: "Salesianos San Ignacio",
        place: "Cádiz",
        start: 2023,
        end: 2025,
    },
    {
        type: "academic",
        title: "Curso de Especialización en Desarrollo de Videojuegos y Realidad Virtual",
        center: "IES Rafael Alberti",
        place: "Cádiz",
        start: 2022,
        end: 2023,
    },
    {
        type: "academic",
        title: "CFGS Administración de Sistemas Informáticos en Red (ASIR)",
        center: "Salesianos San Ignacio",
        place: "Cádiz",
        start: 2019,
        end: 2022,
    },
    {
        type: "academic",
        title: "CFGM Técnico en Instalaciones de Telecomunicaciones",
        center: "Salesianos San Ignacio",
        place: "Cádiz",
        start: 2017,
        end: 2019,
    },
    {
        type: "course",
        title: "n8n + MCP: Automatización y agente de IA inteligentes",
        center: "Udemy",
        certificate: "https://www.udemy.com/certificate/UC-89ebb2b7-8efb-4550-b91c-8a2913b9a6b6/",
        start: 2026,
        end: 2026,
    },
    {
        type: "course",
        title: "Google AI Essentials",
        center: "Google",
        certificate: "https://www.coursera.org/account/accomplishments/specialization/certificate/1DSH7TFPIXIT",
        start: 2026,
        end: 2026,
    },
    {
        type: "course",
        title: "Curso de introducción al testing",
        center: "OpenWebinars",
        certificate: "https://openwebinars.net/cert/g4IK",
        start: 2025,
        end: 2025,
    },
];

const byRecent = (a: Education, b: Education) =>
  b.end - a.end || b.start - a.start;

export const academicEducation = education
  .filter((e) => e.type === "academic")
  .sort(byRecent);

export const onlineCourses = education
  .filter((e) => e.type === "course")
  .sort(byRecent);