import "../globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ClientLayout } from "../components/ClientLayout";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdiel's Portfolio",
  description:
    "Abdiel Ortega | Frontend developer with React.js | JavaScript Developer | CSS and HTML lover | 6 years of experience | Senior developer | Software developer",
  robots: "index, follow",
  alternates: { canonical: "https://portfolio-abdieljortega.vercel.app/" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
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
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
