import "./globals.css";
import { Inter } from "next/font/google";
import OmegaLogo from "../public/omega-logo.svg";
import Image from "next/image";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdiel's Portfolio",
  description:
    "Abdiel Ortega | Frontend developer with React.js | JavaScript Developer | CSS and HTML lover | 4 years of experience | Semi Senior developer | Software developer",
  robots: "index, follow",
  alternates: { canonical: "https://portfolio-abdieljortega.vercel.app/" },
  icons: { icon: "./omega-logo.svg", apple: "./omega-logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <header className="mainNav absolute left-2/4 top-6 z-10 flex -translate-x-2/4 justify-between rounded-3xl bg-white p-5 text-sky-700 shadow">
          <a href="" className="flex gap-4">
            <Image src={OmegaLogo} alt="page logo" priority />
            <h6 className="text-xl font-bold uppercase tracking-wider">
              J Abdi Dev
            </h6>
          </a>
          <nav>
            <ul>
              <li className="flex gap-5 text-lg font-medium">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="">{children}</main>
        <footer className="bg-sky-600 py-5">
          <p className="text-center">
            Layout and designed with 💛 by{" "}
            <strong>Abdiel Ortega and Esteban Ladino</strong> © 2023
          </p>
        </footer>
      </body>
    </html>
  );
}
