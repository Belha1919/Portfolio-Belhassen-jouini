"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#a-propos" },
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
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetSectionElement = document.querySelector(href);
    if (targetSectionElement) {
      targetSectionElement.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="hoverable text-lg font-semibold tracking-tight text-text-primary"
        >
          Belhassen Jouini
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`hoverable relative text-sm transition-colors duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-neon"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 h-px w-full bg-neon"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}

          <a
            href="/cv.pdf"
            download
            className="hoverable flex items-center gap-2 rounded-lg border border-neon/20 bg-neon/10 px-4 py-2 text-sm font-medium text-neon transition-all duration-200 hover:bg-neon/20 hover:shadow-[0_0_15px_rgba(0,255,136,0.15)]"
          >
            <HiDownload className="h-4 w-4" />
            Télécharger CV
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
            className="block h-px w-6 bg-text-primary"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-text-primary"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-text-primary"
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
            className="border-t border-white/[0.06] bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-neon"
                      : "text-text-secondary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 text-sm font-medium text-neon"
              >
                <HiDownload className="h-4 w-4" />
                Télécharger CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
