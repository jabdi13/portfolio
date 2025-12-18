"use client"

import Image from "next/image";
import { useTranslations } from 'next-intl';
import photoBG from "../../public/photo-bg.png";
import { SocialLinks } from "./SocialLinks";

/**
 * Hero Section Component
 *
 * Landing section with main title, introduction, CTAs, and social links.
 */
export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="backgroundRadial relative sm:h-screen flex flex-col items-center justify-center sm:justify-start dark:text-white py-10 sm:py-0"
    >
      <h1 className="mainTitle sm:absolute sm:right-8 sm:top-14 text-center text-9xl w-full sm:w-auto mb-8 mt-24 sm:mb-0">
        {t('title')}
      </h1>

      <figure className="hidden sm:block sm:absolute sm:bottom-0 sm:right-0 sm:w-1/3">
        <Image
          className="saturate-0 w-full"
          src={photoBG}
          alt={t('photoAlt')}
        />
      </figure>

      <article className="sm:absolute sm:left-28 sm:top-2/4 sm:w-5/12 sm:-translate-y-2/4 space-y-5 sm:space-y-10 px-5 sm:p-0 max-w-lg sm:max-w-none">
        <h2 className="text-6xl">
          {t('role').split(' ').map((word, idx) => (
            <span key={idx}>
              {word}
              {idx === 0 && <br />}
              {idx > 0 && ' '}
            </span>
          ))}
        </h2>
        <p>
          {t.rich('description', {
            strong: (chunks) => <strong>{chunks}</strong>
          })}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-xl text-navy font-semibold shadow-lg hover:shadow-xl hover:bg-gold-600 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-gold-400"
          >
            <span>{t('letsTalk')}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-3.5 text-xl font-semibold hover:bg-white hover:text-powder-600 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-white"
          >
            {t('viewProjects')}
          </a>
        </div>
      </article>

      <SocialLinks className="hidden sm:block absolute bottom-14 left-28" />
    </section>
  );
}
