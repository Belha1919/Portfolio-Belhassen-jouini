"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#a-propos" },
  { label: "Projets", href: "#projets" },
  { label: "Méthodologie", href: "#methodologie" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "a-propos", "projets", "methodologie", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[120rem] items-center justify-between px-6 py-4 md:px-10">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="hoverable group flex items-baseline gap-2"
        >
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            Belhassen Jouini
          </span>
          <span className="font-mono text-[0.65rem] text-accent">®</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => {
            const active = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`hoverable group flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200 ${
                  active
                    ? "bg-accent text-[#0c0c0b]"
                    : "text-ink-dim hover:text-ink"
                }`}
              >
                <span
                  className={`text-[0.6rem] ${
                    active ? "text-[#0c0c0b]/70" : "text-accent"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            );
          })}

          <a
            href="/images/Belhassen%20Jouini%20cv.pdf"
            download
            className="hoverable ml-3 flex items-center gap-2 border border-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:bg-ink hover:text-[#0c0c0b]"
            title="Télécharger CV"
          >
            CV
            <HiArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hoverable flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-7 bg-ink"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-7 bg-ink"
          />
          <motion.span
            animate={
              mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block h-0.5 w-7 bg-ink"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line bg-paper/97 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link, i) => {
                const active = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center gap-3 border-b border-line py-4 font-mono text-sm uppercase tracking-[0.1em] transition-colors ${
                      active ? "text-accent" : "text-ink-dim"
                    }`}
                  >
                    <span className="text-[0.65rem] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/images/Belhassen%20Jouini%20cv.pdf"
                download
                className="mt-5 flex items-center justify-center gap-2 border border-ink py-3 font-mono text-xs uppercase tracking-[0.12em] text-ink"
              >
                Télécharger CV
                <HiArrowDown className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
