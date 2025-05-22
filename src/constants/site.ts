import { projects } from "./projects";

export const title = "Anna Hilla · Frontend Web Developer";
export const description =
  "Welcome. I am Anna Hilla, a Frontend Web Developer based in Barcelona. I am specialized in React and Next.js, TailwindCSS and Typescript.";
export const previewImage = "https://annahilla.com/preview.png";
export const url = "https://annahilla.com";

export const githubLink = "https://github.com/annahilla";
export const linkedinLink = "https://www.linkedin.com/in/anna-hilla";
export const mail = "annahilla21@gmail.com";

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anna Hilla",
  url,
  image: `${url}profile.png`,
  jobTitle: "Frontend Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  sameAs: [githubLink, linkedinLink],
  worksOn: projects.map(project => ({
    "@type": "CreativeWork",
    name: project.name,
    url: project.link,
    description: project.description || ""
  }))
};