import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ClientLayout } from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdiel's Portfolio",
  description:
    "Abdiel Ortega | Frontend developer with React.js | JavaScript Developer | CSS and HTML lover | 4 years of experience | Semi Senior developer | Software developer",
  robots: "index, follow",
  alternates: { canonical: "https://portfolio-abdieljortega.vercel.app/" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedMode = localStorage.getItem('darkMode');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedMode === 'true' || (savedMode === null && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
