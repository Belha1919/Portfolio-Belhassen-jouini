"use client";

import { motion, type Variants } from "framer-motion";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import ProfileImage from "./ProfileImage";

const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.85,
      delay: 0.15 + i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projets");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28 pb-0"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mx-auto flex w-full max-w-[120rem] items-center justify-between px-6 md:px-10"
      >
        <span className="kicker">Portfolio — 2026</span>
        <span className="kicker hidden sm:block">
          UX/UI · Design System · Front-End
        </span>
        <span className="kicker">N° 01</span>
      </motion.div>

      {/* Main editorial block */}
      <div className="relative z-10 mx-auto grid w-full max-w-[120rem] grid-cols-1 items-end gap-10 px-6 py-10 md:grid-cols-12 md:px-10">
        {/* Headline */}
        <div className="md:col-span-8">
          <h1 className="font-display font-extrabold text-ink display-xl">
            <span className="block overflow-hidden">
              <motion.span
                variants={lineReveal}
                initial="hidden"
                animate="show"
                custom={0}
                className="block"
              >
                Belhassen
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={lineReveal}
                initial="hidden"
                animate="show"
                custom={1}
                className="block"
              >
                Jouini
                <span className="font-serif-display italic text-accent">.</span>
              </motion.span>
            </span>
          </h1>

          <div className="mt-8 overflow-hidden">
            <motion.p
              variants={lineReveal}
              initial="hidden"
              animate="show"
              custom={2}
              className="max-w-xl text-base leading-relaxed text-ink-dim md:text-lg"
            >
              Je conçois et{" "}
              <span className="font-serif-display italic text-ink">
                développe
              </span>{" "}
              des systèmes de design et des interfaces — du token Figma au
              composant en production.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <button
              onClick={handleScrollToProjects}
              className="hoverable group inline-flex items-center gap-3 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[#0c0c0b] transition-colors duration-200 hover:bg-ink"
            >
              Voir les projets
              <HiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hoverable font-mono text-xs uppercase tracking-[0.14em] text-ink underline-kinetic"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="md:col-span-4">
          <div className="mx-auto max-w-[20rem] md:ml-auto md:mr-0">
            <ProfileImage
              src="/images/profile.png"
              alt="Belhassen Jouini — UX/UI Design System & Front-End Developer"
              badgeText="Disponible"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-[120rem] items-center justify-between px-6 py-5 md:px-10"
      >
        <span className="kicker">Scroll pour explorer</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <HiArrowDown className="h-4 w-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
