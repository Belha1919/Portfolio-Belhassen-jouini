"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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

const designSkills = [
  { icon: HiOutlineSearch, label: "UX Research" },
  { icon: HiOutlineTemplate, label: "Wireframing" },
  { icon: HiOutlineColorSwatch, label: "Design Systems" },
  { icon: HiOutlineCube, label: "Prototypage" },
  { icon: HiOutlineUserGroup, label: "Tests utilisateurs" },
];

const devSkills = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiAngular, label: "Angular" },
  { icon: SiReact, label: "React" },
];

function SkillCard({
  icon: Icon,
  label,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="hoverable group flex items-center gap-3 rounded-full border border-white/[0.06] bg-bg-secondary/50 px-4 py-3 transition-all duration-300 hover:border-neon/20 hover:shadow-[0_0_15px_rgba(0,255,136,0.05)]"
    >
      <Icon className="h-5 w-5 text-neon/70 transition-colors group-hover:text-neon" />
      <span className="text-sm text-text-primary">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="a-propos"
      className="relative min-h-screen py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-neon uppercase">
            À propos
          </p>
          <h2 className="mb-8 text-3xl font-bold text-text-primary md:text-4xl">
            Qui suis-je ?
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
            Designer et développeur full-stack, je combine expertise UX/UI et
            compétences techniques pour créer des produits digitaux cohérents,
            performants et centrés sur l&apos;utilisateur. Mon approche allie
            rigueur méthodologique, sensibilité esthétique et maîtrise du code
            pour livrer des expériences abouties de bout en bout.
          </p>
        </motion.div>

        {/* Skills columns */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="mb-6 text-lg font-semibold text-text-primary">
              Design
            </h3>
            <div className="flex flex-col gap-3">
              {designSkills.map((skill, i) => (
                <SkillCard key={skill.label} {...skill} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="mb-6 text-lg font-semibold text-text-primary">
              Développement
            </h3>
            <div className="flex flex-col gap-3">
              {devSkills.map((skill, i) => (
                <SkillCard key={skill.label} {...skill} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
