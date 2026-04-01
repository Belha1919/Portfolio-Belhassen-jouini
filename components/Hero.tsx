"use client";

import { motion } from "framer-motion";
import { HiArrowDown, HiDownload } from "react-icons/hi";

export default function Hero() {
  const handleScrollToProjects = () => {
    const projectsSectionElement = document.getElementById("projets");
    if (projectsSectionElement) projectsSectionElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0d1a12] to-[#0A0A0A] bg-[length:400%_400%]" />

      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4 text-sm font-medium tracking-[0.2em] text-neon uppercase"
        >
          Full-Stack Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Belhassen Jouini
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4 text-lg font-light text-text-secondary md:text-xl"
        >
          UX, UI &amp; Développement
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mb-10 max-w-lg text-base text-text-secondary/80"
        >
          Je conçois et développe des expériences digitales performantes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={handleScrollToProjects}
            className="hoverable rounded-lg bg-neon px-8 py-3 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
          >
            Voir les projets
          </button>
          <a
            href="/cv.pdf"
            download
            className="hoverable flex items-center gap-2 rounded-lg border border-white/10 px-8 py-3 text-sm font-medium text-text-primary transition-all duration-200 hover:border-white/20 hover:bg-white/[0.03]"
          >
            <HiDownload className="h-4 w-4" />
            Télécharger CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-text-secondary/60 uppercase">
            Scroll
          </span>
          <HiArrowDown className="h-4 w-4 text-neon/60" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </section>
  );
}
