"use client"

import {
  SiJavascript,
  SiNodedotjs,
  SiGithub,
  SiReact,
  SiRedux,
  SiHtml5,
  SiVuedotjs,
  SiSass,
} from "react-icons/si";
import { useTranslations } from 'next-intl';
import { SkillCard } from "./SkillCard";
import { designTokens } from "../styles/design-tokens";

/**
 * Skills Section Component
 *
 * Displays technical skills in a grid layout.
 */
export function SkillsSection() {
  const t = useTranslations('skills');

  const skills = [
    {
      key: "javascript",
      icon: SiJavascript,
      ...designTokens.skills.javascript,
    },
    {
      key: "nodejs",
      icon: SiNodedotjs,
      ...designTokens.skills.nodejs,
    },
    {
      key: "github",
      icon: SiGithub,
      ...designTokens.skills.github,
    },
    {
      key: "react",
      icon: SiReact,
      ...designTokens.skills.react,
    },
    {
      key: "redux",
      icon: SiRedux,
      ...designTokens.skills.redux,
    },
    {
      key: "html",
      icon: SiHtml5,
      ...designTokens.skills.html,
    },
    {
      key: "vue",
      icon: SiVuedotjs,
      ...designTokens.skills.vue,
    },
    {
      key: "sass",
      icon: SiSass,
      ...designTokens.skills.sass,
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-powder-400 dark:bg-slate-900 px-4 sm:px-24 py-10 sm:py-20 z-10 relative"
    >
      <article className="flex flex-col items-center space-y-10 sm:rounded-3xl border-2 border-powder-600 dark:border-gold-500/30 bg-slate-900/20 dark:bg-navy/50 px-4 sm:px-16 py-10">
        <h3 id="skills-heading" className="text-4xl uppercase">
          {t('heading')}
        </h3>
        <hr className="w-5/6 border-y-2" />
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-x-24 sm:gap-y-12">
          {skills.map((skill) => (
            <SkillCard
              key={skill.key}
              name={t(skill.key)}
              icon={skill.icon}
              gradientFrom={skill.from}
              gradientTo={skill.to}
            />
          ))}
        </ul>
      </article>
    </section>
  );
}
