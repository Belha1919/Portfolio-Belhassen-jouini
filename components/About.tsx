"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);

  // 3D tilt + magnetic motion values
  const rotateX = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
  const magX = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const magY = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 16);
    rotateX.set(-py * 16);
    magX.set(px * 14);
    magY.set(py * 8);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    magX.set(0);
    magY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.15 + index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 700,
        transformStyle: "preserve-3d",
      }}
      className="hoverable group relative flex items-center gap-4 overflow-hidden border-b border-line py-5 will-change-transform hover:z-10 hover:border-transparent hover:shadow-[0_18px_40px_-18px_rgba(255,74,28,0.45)]"
    >
      {/* Accent sweep fill */}
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
      <motion.span
        style={{ x: magX, y: magY, translateZ: 40 }}
        className="relative z-10 flex items-center gap-4"
      >
        <Icon className="h-6 w-6 shrink-0 text-accent transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:text-[#0c0c0b]" />
        <span className="font-display text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-[#0c0c0b] md:text-2xl">
          {skill.label}
        </span>
      </motion.span>
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
            Designer UX/UI et développeur front-end, je conçois et je
            développe des Design Systems de bout en bout&nbsp;: tokens et
            composants sous Figma, développement en Angular, documentation
            Storybook et distribution en packages versionnés. Expérience en
            environnement corporate exigeant (BNP Paribas Asset Management,
            AXA Investment Managers) sur des socles UI utilisés par une
            vingtaine d&apos;applications métier.
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
