export interface Technology {
  icon: string;
  name: string;
}

export interface TechnologyGroup {
  title: string;
  items: Technology[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Lenguajes",
    items: [
      { icon: "fa-brands fa-java", name: "Java" },
      { icon: "devicon-html5-plain", name: "HTML5" },
      { icon: "devicon-css3-plain", name: "CSS3" },
      {icon: "devicon-dart-plain", name: "Dart"},
    ],
  },
  {
    title: "Frameworks",
    items: [
      { icon: "devicon-spring-original", name: "Spring" },
      { icon: "devicon-flutter-plain", name: "Flutter" },
      { icon: "devicon-bootstrap-plain", name: "Bootstrap" },
      { icon: "devicon-astro-plain", name: "Astro" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { icon: "devicon-postman-plain", name: "Postman" },
      { icon: "devicon-docker-plain", name: "Docker" },
      { icon: "devicon-maven-plain-wordmark", name: "Maven" },
      { icon: "devicon-git-plain", name: "Git" },
    ],
  },
  {
    title: "Testing",
    items: [
      { icon: "devicon-selenium-original", name: "Selenium" },
      { icon: "devicon-junit-plain-wordmark", name: "JUnit" },
    ],
  },
];