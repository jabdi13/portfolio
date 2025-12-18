"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

const locales = [
  { code: 'en', label: 'EN', fullLabel: 'English' },
  { code: 'es', label: 'ES', fullLabel: 'Español' }
] as const;

type LocaleCode = typeof locales[number]['code'];

/**
 * Language Switcher Component
 *
 * Allows users to toggle between English and Spanish.
 * Uses next-intl routing for seamless locale switching.
 */
export function LanguageSwitcher() {
  const locale = useLocale() as LocaleCode;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: LocaleCode) => {
    if (newLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className="flex items-center gap-1 rounded-lg bg-powder-600/50 dark:bg-powder-800/50 p-1"
      role="radiogroup"
      aria-label="Select language"
    >
      {locales.map(({ code, label, fullLabel }) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            onClick={() => handleLocaleChange(code)}
            disabled={isPending}
            role="radio"
            aria-checked={isActive}
            aria-label={fullLabel}
            className={`
              px-2 py-1 text-sm font-medium rounded-md transition-all duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-1
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isActive
                ? 'bg-gold-500 text-powder-900 shadow-sm'
                : 'text-white/80 hover:text-white hover:bg-powder-500/50 dark:hover:bg-powder-700/50'
              }
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
