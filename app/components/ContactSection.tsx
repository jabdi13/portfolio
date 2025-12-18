"use client"

import { useTranslations } from 'next-intl';
import { SocialLinks } from "./SocialLinks";
import { CopyableInfo } from "./CopyableInfo";
import { Button } from "./Button";

/**
 * Contact Section Component
 *
 * Displays contact information with copy-to-clipboard functionality,
 * CV download button, and social media links.
 */
export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="backgroundRadial dark:text-white space-y-12 px-4 sm:px-24 py-10 sm:py-20"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h3 id="contact-heading" className="text-center text-4xl uppercase">
          {t('heading')}
        </h3>

        <article className="flex sm:justify-between space-y-8 flex-col sm:flex-row">
          <CopyableInfo
            label={t('email')}
            value="jose.4.abdiel@gmail.com"
            type="email"
            copyLabel={t('copy')}
            copiedLabel={t('copied')}
          />
          <CopyableInfo
            label={t('phoneNumber')}
            value="(+52) 4492678272"
            type="phone"
            copyLabel={t('copy')}
            copiedLabel={t('copied')}
          />
        </article>

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            href="/cv/abdiel-ortega-cv.pdf"
            download
            icon={
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
            iconPosition="left"
          >
            {t('downloadCV')}
          </Button>
        </div>

        <SocialLinks className="flex justify-center" />
      </div>
    </section>
  );
}
