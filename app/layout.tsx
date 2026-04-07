import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
