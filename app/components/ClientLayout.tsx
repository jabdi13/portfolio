"use client"

import { ReactNode } from 'react';
import { DarkModeProvider } from '../context/DarkModeContext';
import { NavHeader } from './NavHeader';

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <DarkModeProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gold-500 focus:text-navy focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-4 focus:ring-gold-600"
      >
        Skip to main content
      </a>
      <NavHeader />
      {children}
      <footer className="bg-powder-500 dark:bg-navy py-5">
        <p className="text-center dark:text-white">
          Layout and designed with 💛 by{" "}
          <strong>Abdiel Ortega and Esteban Ladino</strong> © 2023
        </p>
      </footer>
    </DarkModeProvider>
  );
}
