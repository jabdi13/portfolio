"use client"

import Image from "next/image";
import { useTranslations } from 'next-intl';
import omegaInclinedIcon from "../../public/omega-inclined.svg";

/**
 * About Section Component
 *
 * Brief bio section with background information.
 */
export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex sm:flex-row flex-col gap-8 items-center justify-around bg-powder-500 dark:bg-navy relative px-4 sm:px-16 py-8 sm:py-16 dark:text-white"
    >
      <h3 id="about-heading" className="text-4xl uppercase z-10">
        {t('heading')}
      </h3>
      <p className="sm:w-2/5 text-start z-10">
        {t.rich('description', {
          strong: (chunks) => <strong>{chunks}</strong>,
          em: (chunks) => <em>{chunks}</em>
        })}
      </p>
      <Image
        src={omegaInclinedIcon}
        alt=""
        aria-hidden="true"
        className="absolute sm:static z-0"
      />
    </section>
  );
}
