"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineSearch,
  HiOutlineTemplate,
  HiOutlineColorSwatch,
  HiOutlineCube,
  HiOutlineUserGroup,
} from "react-icons/hi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiReact,
} from "react-icons/si";

type Skill = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const designSkills: Skill[] = [
  { icon: HiOutlineSearch, label: "UX Research" },
  { icon: HiOutlineTemplate, label: "Wireframing" },
  { icon: HiOutlineColorSwatch, label: "Design Systems" },
  { icon: HiOutlineCube, label: "Prototypage" },
  { icon: HiOutlineUserGroup, label: "Tests utilisateurs" },
];

const devSkills: Skill[] = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiAngular, label: "Angular" },
  { icon: SiReact, label: "React" },
];

function SkillItem({
  skill,
  index,
  inView,
}: {
  skill: Skill;
  index: number;
  inView: boolean;
}) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.15 + index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="hoverable group relative flex items-center gap-4 overflow-hidden border-b border-line py-5"
    >
      {/* Accent sweep fill */}
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
      <Icon className="relative z-10 h-6 w-6 shrink-0 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-[#0c0c0b]" />
      <span className="relative z-10 font-display text-xl font-semibold text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0c0c0b] md:text-2xl">
        {skill.label}
      </span>
      <span className="relative z-10 ml-auto font-mono text-[0.7rem] tracking-[0.12em] text-ink-dim transition-colors duration-300 group-hover:text-[#0c0c0b]/70">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

function SkillGroup({
  title,
  meta,
  skills,
  inView,
}: {
  title: string;
  meta: string;
  skills: Skill[];
  inView: boolean;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="font-display text-lg font-bold tracking-tight text-ink">
          {title}
        </h3>
        <span className="kicker">{meta}</span>
      </div>
      <div className="border-t border-line">
        {skills.map((skill, i) => (
          <SkillItem key={skill.label} skill={skill} index={i} inView={inView} />
        ))}
      </div>
    </div>
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

        {/* Lead statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-4xl"
        >
          <h2 className="font-display font-bold text-ink display-md">
            Designer numérique au croisement du{" "}
            <span className="font-serif-display italic text-accent">design</span>{" "}
            et du{" "}
            <span className="font-serif-display italic text-accent">code</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg">
            Spécialisé en UX/UI, je me concentre sur la création de systèmes de
            design robustes et évolutifs. Je fais le pont entre le design et
            l&apos;intégration front-end pour transformer des problématiques
            complexes en interfaces fluides. Mon objectif&nbsp;: livrer des
            produits digitaux qui allient exigence esthétique et rigueur
            technique.
          </p>
        </motion.div>

        {/* Competences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-end justify-between border-b border-line pb-4"
        >
          <span className="kicker">Compétences</span>
          <span className="kicker hidden sm:block">10 / Disciplines &amp; Stack</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <SkillGroup
            title="Design"
            meta="05"
            skills={designSkills}
            inView={isInView}
          />
          <SkillGroup
            title="Développement"
            meta="05"
            skills={devSkills}
            inView={isInView}
          />
        </div>
      </div>
    </section>
  );
}
