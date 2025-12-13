import "./globals.css";
import { Inter } from "next/font/google";
import { NavHeader } from "./components/NavHeader"
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
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gold-500 focus:text-navy focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-4 focus:ring-gold-600"
        >
          Skip to main content
        </a>
        <NavHeader />
        {children}
        <footer className="bg-powder-500 py-5">
          <p className="text-center">
            Layout and designed with 💛 by{" "}
            <strong>Abdiel Ortega and Esteban Ladino</strong> © 2023
          </p>
        </footer>
      </body>
    </html>
  );
}
