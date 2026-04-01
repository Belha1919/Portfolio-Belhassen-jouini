"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Analyse approfondie des besoins, du marché et des utilisateurs cibles. Définition des objectifs et des contraintes du projet.",
  },
  {
    number: "02",
    title: "UX Strategy",
    description:
      "Architecture de l'information, parcours utilisateurs et wireframes. Validation des hypothèses par des tests rapides.",
  },
  {
    number: "03",
    title: "UI Design",
    description:
      "Création de l'identité visuelle, du design system et des maquettes haute fidélité. Prototypage interactif.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Développement front-end et back-end avec les technologies modernes. Intégration pixel-perfect et code maintenable.",
  },
  {
    number: "05",
    title: "Optimization",
    description:
      "Tests de performance, accessibilité et SEO. Itérations basées sur les retours utilisateurs et les métriques.",
  },
];

function TimelineStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeftAligned = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`relative flex items-center ${
        isLeftAligned ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Content */}
      <div
        className={`w-full pl-12 md:w-1/2 md:pl-0 ${
          isLeftAligned ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
        }`}
      >
        <span className="mb-2 block text-sm font-medium text-neon">
          {step.number}
        </span>
        <h3 className="mb-2 text-xl font-semibold text-text-primary">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">
          {step.description}
        </p>
      </div>

      {/* Center dot (visible only on desktop) */}
      <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center md:static md:left-auto">
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
          <div className="absolute h-3 w-3 rounded-full bg-neon shadow-[0_0_10px_rgba(0,255,136,0.3)]" />
          <div className="h-8 w-8 rounded-full border border-neon/20" />
        </div>
      </div>

      {/* Empty space for other side */}
      <div className="hidden w-1/2 md:block" />
    </motion.div>
  );
}

export default function Methodology() {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const methodologySectionRef = useRef(null);
  const isInView = useInView(methodologySectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="methodologie"
      className="relative min-h-screen py-32"
      ref={methodologySectionRef}
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-neon uppercase">
            Méthodologie
          </p>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Mon processus
          </h2>
        </motion.div>

        <div ref={timelineContainerRef} className="relative">
          {/* Vertical line - mobile: left, desktop: center */}
          <div className="absolute top-0 left-4 h-full w-px bg-white/[0.06] md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-neon/50 to-neon/10"
            />
          </div>

          <div className="flex flex-col gap-16">
            {steps.map((step, stepIndex) => (
              <TimelineStep key={step.number} step={step} index={stepIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
