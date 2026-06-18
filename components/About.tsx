"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const designSkills = [
  "UX Research",
  "Wireframing",
  "Design Systems",
  "Prototypage",
  "Tests utilisateurs",
];

const devSkills = ["Next.js", "TypeScript", "Tailwind", "Angular", "React"];

function SkillRow({
  label,
  index,
  meta,
}: {
  label: string;
  index: number;
  meta: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="hoverable group flex items-center justify-between border-b border-line py-4 transition-colors hover:bg-ink/[0.02]"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[0.65rem] text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-display text-xl font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
          {label}
        </span>
      </div>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-dim">
        {meta}
      </span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="a-propos" className="relative py-28 md:py-40" ref={ref}>
      <div className="mx-auto max-w-[120rem] px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex items-center justify-between border-b border-line pb-5"
        >
          <span className="kicker">(À propos)</span>
          <span className="kicker">N° 02</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Lead statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <h2 className="font-display font-bold text-ink display-md">
              Designer numérique au croisement du{" "}
              <span className="font-serif-display italic text-accent">
                design
              </span>{" "}
              et du{" "}
              <span className="font-serif-display italic text-accent">code</span>
              .
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-dim md:text-lg">
              Spécialisé en UX/UI, je me concentre sur la création de systèmes de
              design robustes et évolutifs. Je fais le pont entre le design et
              l&apos;intégration front-end pour transformer des problématiques
              complexes en interfaces fluides. Mon objectif&nbsp;: livrer des
              produits digitaux qui allient exigence esthétique et rigueur
              technique.
            </p>
          </motion.div>

          {/* Skills tables */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="kicker text-ink">Design</span>
              <span className="kicker">05</span>
            </div>
            <div className="border-t border-line">
              {designSkills.map((label, i) => (
                <SkillRow key={label} label={label} index={i} meta="Discipline" />
              ))}
            </div>

            <div className="mt-12 mb-3 flex items-center justify-between">
              <span className="kicker text-ink">Développement</span>
              <span className="kicker">05</span>
            </div>
            <div className="border-t border-line">
              {devSkills.map((label, i) => (
                <SkillRow key={label} label={label} index={i} meta="Stack" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
