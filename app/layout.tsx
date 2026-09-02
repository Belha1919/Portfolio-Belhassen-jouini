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
  title: "Belhassen Jouini — UX/UI Designer & Front-End Developer",
  description:
    "Portfolio de Belhassen Jouini — UX/UI Designer & Front-End Developer, spécialisé en Design System (Figma vers Angular / React, Storybook). Expérience en environnement corporate (BNP Paribas Asset Management, AXA Investment Managers).",
  keywords: [
    "Belhassen Jouini",
    "UX/UI Designer",
    "Front-End Developer",
    "Design System",
    "UX Design",
    "UI Design",
    "Angular",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Belhassen Jouini — UX/UI Designer & Front-End Developer",
    description:
      "Design System : Figma vers Angular / React, Storybook. Expérience BNP Paribas Asset Management & AXA Investment Managers.",
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
