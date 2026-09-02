import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="clarity-analytics" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ybzq3s09tu");
          `}
        </Script>
      </body>
    </html>
  );
}
