"use client";

import { HiArrowUp } from "react-icons/hi2";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-line">
      {/* Oversized wordmark */}
      <div className="mx-auto max-w-[120rem] px-6 pt-16 md:px-10">
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display font-extrabold leading-[0.85] tracking-tight text-ink display-lg">
            Parlons-en
            <span className="text-accent">.</span>
          </h2>
          <button
            onClick={scrollTop}
            className="hoverable group flex shrink-0 items-center gap-2 border border-line px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-dim transition-colors hover:border-accent hover:text-accent"
            aria-label="Retour en haut"
          >
            Haut
            <HiArrowUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Fine print */}
      <div className="mx-auto mt-16 flex max-w-[120rem] flex-col gap-3 border-t border-line px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-dim">
          © {new Date().getFullYear()} Belhassen Jouini — Tous droits réservés
        </p>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-dim/70">
          Next.js · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
