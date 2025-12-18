"use client"

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { BurgerIconMenu } from "./BurgerIconMenu";
import { CloseMenu } from "./CloseMenu";
import { DarkModeToggle } from "./DarkModeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useActiveSection } from "../hooks/useActiveSection";
import OmegaDark from "../../public/images/omega-dark-200.webp";
import OmegaPowder from "../../public/images/omega-powder-200.webp";

/**
 * Navigation Header Component
 *
 * Features:
 * - Responsive mobile hamburger menu
 * - Active section highlighting based on scroll position
 * - Dark mode toggle
 * - Logo with dark/light mode variants
 */
export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const t = useTranslations('nav');
  const tAria = useTranslations('aria');

  // Auto-close menu on mobile after navigation
  const handleNavClick = () => {
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  // Navigation links configuration
  const navLinks = [
    { href: "#home", label: t('home') },
    { href: "#about", label: t('about') },
    { href: "#skills", label: t('skills') },
    { href: "#projects", label: t('projects') },
    { href: "#contact", label: t('contact') },
  ];

  return (
    <header className="mainNav absolute left-2/4 top-6 z-10 flex -translate-x-2/4 justify-between items-center rounded-3xl bg-powder-500 dark:bg-powder-900 p-5 text-white dark:text-powder-50 shadow-lg dark:shadow-gold-500/20 border border-powder-600 dark:border-powder-700">
      <a href="" className="flex gap-4 items-center z-20 relative">
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src={OmegaPowder}
            alt="page logo"
            priority
            width={40}
            height={40}
            className="absolute inset-0 dark:hidden"
          />
          <Image
            src={OmegaDark}
            alt="page logo"
            priority
            width={40}
            height={40}
            className="absolute inset-0 hidden dark:block"
          />
        </div>
        <h6 className="text-xl font-bold uppercase tracking-wider">
          J Abdi Dev
        </h6>
      </a>

      {/* Mobile: DarkMode + Burger */}
      <div className="flex items-center gap-4 z-20 sm:hidden">
        <DarkModeToggle />
        {isOpen ? (
          <CloseMenu
            fill="currentColor"
            hidden
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(false);
              }
            }}
            tabIndex={0}
            role="button"
            ariaLabel={tAria('closeMenu')}
          />
        ) : (
          <BurgerIconMenu
            fill="currentColor"
            hidden
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(!isOpen);
              }
              if (e.key === 'Escape') {
                setIsOpen(false);
              }
            }}
            tabIndex={0}
            role="button"
            ariaLabel={isOpen ? tAria('closeMenu') : tAria('openMenu')}
            ariaExpanded={isOpen}
          />
        )}
      </div>

      {/* Desktop: Nav Links + DarkMode */}
      <nav className={`transition-[max-height] absolute sm:static inset-x-0 top-[50px] text-center bg-powder-500 dark:bg-powder-900 sm:bg-transparent dark:sm:bg-transparent rounded-b-3xl duration-[0.5s] overflow-hidden sm:overflow-visible ${isOpen ? 'max-h-[400px] py-4' : 'max-h-0 p-0'} sm:max-h-none sm:py-0`}>
        <ul className="flex flex-col gap-5 text-lg font-medium sm:flex-row sm:items-center text-white dark:text-powder-50">
          {navLinks.map(({ href, label }) => {
            const sectionId = href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className={`hover:text-gold-500 transition-all pb-1 ${
                    isActive
                      ? 'text-gold-500 border-b-2 border-gold-500'
                      : 'border-b-2 border-transparent'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li className="sm:hidden">
            <LanguageSwitcher />
          </li>
          <li className="hidden sm:block">
            <DarkModeToggle />
          </li>
          <li className="hidden sm:block">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
