import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Belhassen Jouini — Full-Stack Designer",
  description:
    "Portfolio de Belhassen Jouini — Full-Stack Designer spécialisé en UX, UI & Développement. Conception et développement d'expériences digitales performantes.",
  keywords: [
    "Belhassen Jouini",
    "Full-Stack Designer",
    "UX Design",
    "UI Design",
    "Développeur",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Belhassen Jouini — Full-Stack Designer",
    description:
      "Conception et développement d'expériences digitales performantes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${display.variable} ${serif.variable} ${body.variable} ${mono.variable} relative font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
