"use client"
import { BurgerIconMenu } from "./BurgerIconMenu"
import { CloseMenu } from "./CloseMenu"
import OmegaLogo from "../../public/omega-logo.svg";
import Image from "next/image";
import { useState } from "react";

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="mainNav absolute left-2/4 top-6 z-10 flex -translate-x-2/4 justify-between rounded-3xl bg-white p-5 text-sky-700 shadow">
      <a href="" className="flex gap-4">
        <Image src={OmegaLogo} alt="page logo" priority />
        <h6 className="text-xl font-bold uppercase tracking-wider">
          J Abdi Dev
        </h6>
      </a>
      {isOpen ? <CloseMenu fill="rgb(3, 105, 161)" hidden onClick={() => setIsOpen(!isOpen)} />
      : <BurgerIconMenu fill="rgb(3, 105, 161)" hidden onClick={() => setIsOpen(!isOpen)} />}
      <nav className={`transition-[max-height] absolute sm:static inset-x-0 top-[50px] text-center bg-white sm:bg-transparent rounded-b-3xl duration-[0.5s] overflow-hidden sm:overflow-visible ${isOpen ? 'max-h-[236px] py-2' : 'max-h-0 p-0'}`}>
        <ul className="flex flex-col gap-5 text-lg font-medium sm:flex-row">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}