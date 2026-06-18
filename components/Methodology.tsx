"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "UX Research",
    description:
      "Analyse des besoins, du contexte, du marché et des utilisateurs pour cadrer les objectifs du projet.",
  },
  {
    number: "02",
    title: "UI Design",
    description:
      "Conception de l'interface, du design system et des maquettes haute fidélité pour préparer l'implémentation.",
  },
  {
    number: "03",
    title: "Test prototype",
    description:
      "Prototypage interactif et premiers tests pour valider les parcours, les interactions et les choix de design.",
  },
  {
    number: "04",
    title: "Développement front-end",
    description:
      "Intégration front-end du produit en respectant le design, la qualité du code et la réactivité de l'interface.",
  },
  {
    number: "05",
    title: "Optimisation",
    description:
      "Amélioration des performances, de l'accessibilité et de la qualité globale avant validation finale.",
  },
  {
    number: "06",
    title: "Tests utilisateurs",
    description:
      "Tests finaux avec les utilisateurs pour collecter les retours, corriger les derniers points et confirmer l'expérience.",
  },
];

function Step({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="hoverable group relative grid grid-cols-1 gap-4 border-b border-line py-8 transition-colors hover:bg-ink/[0.02] md:grid-cols-12 md:items-center md:gap-8 md:py-10 md:pl-12"
    >
      {/* Giant outlined numeral */}
      <span
        className="font-display text-6xl font-extrabold leading-none text-transparent transition-all duration-500 group-hover:text-accent md:col-span-3 md:text-8xl"
        style={{ WebkitTextStroke: "1px var(--color-ink-dim)" }}
      >
        {step.number}
      </span>

      <h3 className="font-display text-2xl font-semibold text-ink md:col-span-4 md:text-3xl">
        {step.title}
      </h3>

      <p className="max-w-md text-sm leading-relaxed text-ink-dim md:col-span-5 md:text-base">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="methodologie"
      className="relative py-28 md:py-40"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-[120rem] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex items-end justify-between border-b border-line pb-5"
        >
          <div>
            <span className="kicker">(Méthodologie)</span>
            <h2 className="mt-4 font-display font-bold text-ink display-md">
              Mon processus
            </h2>
          </div>
          <span className="kicker">N° 03</span>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Progress line (desktop) */}
          <div className="absolute top-0 left-4 hidden h-full w-px bg-line md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent"
            />
          </div>

          <div>
            {steps.map((step, i) => (
              <Step key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
