"use client"

import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { DarkModeProvider } from '../context/DarkModeContext';
import { NavHeader } from './NavHeader';

export function ClientLayout({ children }: { children: ReactNode }) {
  const tFooter = useTranslations('footer');
  const tA11y = useTranslations('a11y');

  return (
    <DarkModeProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gold-500 focus:text-navy focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-4 focus:ring-gold-600"
      >
        {tA11y('skipToContent')}
      </a>
      <NavHeader />
      {children}
      <footer className="bg-powder-500 dark:bg-navy py-5">
        <p className="text-center dark:text-white">
          {tFooter.rich('text', {
            strong: (chunks) => <strong>{chunks}</strong>
          })}
        </p>
      </footer>
    </DarkModeProvider>
  );
}
