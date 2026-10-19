export interface Project {
  title: string;
  description: string;
  status?: string;
  year?: number;
  tech: { icon: string; name: string }[];
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "TestForge",
    description:
      "Aplicación que genera automáticamente tests unitarios JUnit 5 a partir de código Java, integrando Spring AI con Ollama.",
    status: "En desarrollo",
    year: 2026,
    tech: [
      { icon: "devicon-java-plain", name: "Java" },
      { icon: "devicon-spring-original", name: "Spring" },
      { icon: "devicon-junit-plain-wordmark", name: "JUnit 5" },
      { icon: "fa-solid fa-robot", name: "Ollama" },
    ],
    demo: "https://lnkd.in/p/eWjtq3xR",
  },
  {
    title: "Portfolio personal",
    description:
      "Esta web: un portfolio con navegación por mapa, construido con Astro y Bootstrap.",
    status: "Completado",
    year: 2026,
    tech: [
      { icon: "devicon-astro-plain", name: "Astro" },
      { icon: "devicon-bootstrap-plain", name: "Bootstrap" },
      { icon: "devicon-typescript-plain", name: "TypeScript" },
    ],
    repo: "https://github.com/alvaroc99/Portfolio",
  },
];