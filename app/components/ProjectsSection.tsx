"use client"

import { useTranslations } from 'next-intl';
import project1 from "../../public/images/project-1.jpg";
import project2 from "../../public/images/project-2.jpg";
import project3 from "../../public/images/project-3.jpg";
import project4 from "../../public/images/project-4.jpg";
import project5 from "../../public/images/project-5.jpg";
import project6 from "../../public/images/project-6.jpg";
import { ProjectCard } from "./ProjectCard";

/**
 * Projects Section Component
 *
 * Showcases portfolio projects in a grid layout.
 */
export function ProjectsSection() {
  const t = useTranslations('projects');

  const projects = [
    {
      key: "augmentedStaffing",
      image: project1,
      technologies: ["React", "Node.js", "Sass"],
      liveUrl: undefined,
      githubUrl: undefined,
      priority: true,
    },
    {
      key: "crossclave",
      image: project2,
      technologies: ["React.js", "Ionic", "Electron", "Sass", "GraphQL"],
      liveUrl: "https://crossclave.com/",
      githubUrl: undefined,
    },
    {
      key: "neobit",
      image: project3,
      technologies: ["React", "Redux", "Sass"],
      liveUrl: undefined,
      githubUrl: "#",
    },
    {
      key: "yelpcamp",
      image: project4,
      technologies: ["Node.js", "Express", "MongoDB"],
      liveUrl: undefined,
      githubUrl: "#",
    },
    {
      key: "hisitter",
      image: project5,
      technologies: ["React", "Tailwind", "Spring"],
      liveUrl: undefined,
      githubUrl: "#",
    },
    {
      key: "wawa",
      image: project6,
      technologies: ["Next.js", "Spring", "Java", "React.js"],
      liveUrl: undefined,
      githubUrl: undefined,
    },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-powder-400 dark:bg-slate-900 px-4 sm:px-24 py-10 sm:py-20"
    >
      <article className="flex flex-col items-center space-y-10 sm:rounded-3xl border-2 border-powder-600 dark:border-gold-500/30 bg-slate-900/20 dark:bg-navy/50 px-4 sm:px-16 py-10">
        <h3 id="projects-heading" className="text-4xl uppercase">
          {t('heading')}
        </h3>
        <hr className="w-5/6 border-y-2" />
        <ul className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.key}
              title={t(`${project.key}.title`)}
              description={t(`${project.key}.description`)}
              image={project.image}
              imageAlt={t(`${project.key}.title`)}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              priority={project.priority}
              viewLiveLabel={t('viewLive')}
              githubLabel={t('github')}
            />
          ))}
        </ul>
      </article>
    </section>
  );
}
