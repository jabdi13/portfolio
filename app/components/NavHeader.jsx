"use client"
import { BurgerIconMenu } from "./BurgerIconMenu"
import { CloseMenu } from "./CloseMenu"
import { DarkModeToggle } from "./DarkModeToggle"
import OmegaLogo from "../../public/omega-logo.svg";
import Image from "next/image";
import { useState } from "react";

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-close menu on mobile after navigation
  const handleNavClick = () => {
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  return (
    <header className="mainNav absolute left-2/4 top-6 z-10 flex -translate-x-2/4 justify-between items-center rounded-3xl bg-white dark:bg-navy p-5 text-powder-900 dark:text-white shadow-lg dark:shadow-gold-500/20">
      <a href="" className="flex gap-4 items-center z-20 relative">
        <Image src={OmegaLogo} alt="page logo" priority className="flex-shrink-0" />
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
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(false);
              }
            }}
            tabIndex={0}
            role="button"
            ariaLabel="Close navigation menu"
          />
        ) : (
          <BurgerIconMenu
            fill="currentColor"
            hidden
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => {
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
            ariaLabel={isOpen ? "Close navigation menu" : "Open navigation menu"}
            ariaExpanded={isOpen}
          />
        )}
      </div>

      {/* Desktop: Nav Links + DarkMode */}
      <nav className={`transition-[max-height] absolute sm:static inset-x-0 top-[50px] text-center bg-white dark:bg-navy sm:bg-transparent dark:sm:bg-transparent rounded-b-3xl duration-[0.5s] overflow-hidden sm:overflow-visible ${isOpen ? 'max-h-[400px] py-4' : 'max-h-0 p-0'} sm:max-h-none sm:py-0`}>
        <ul className="flex flex-col gap-5 text-lg font-medium sm:flex-row sm:items-center dark:text-white">
          <li><a href="#home" onClick={handleNavClick} className="hover:text-gold-500 transition-colors">Home</a></li>
          <li><a href="#about" onClick={handleNavClick} className="hover:text-gold-500 transition-colors">About</a></li>
          <li><a href="#skills" onClick={handleNavClick} className="hover:text-gold-500 transition-colors">Skills</a></li>
          <li><a href="#projects" onClick={handleNavClick} className="hover:text-gold-500 transition-colors">Projects</a></li>
          <li><a href="#contact" onClick={handleNavClick} className="hover:text-gold-500 transition-colors">Contact</a></li>
          <li className="hidden sm:block"><DarkModeToggle /></li>
        </ul>
      </nav>
    </header>
  )
}