"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

interface Project {
  title: string;
  description: string;
  stack: string[];
  role: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "FinFlow Dashboard",
    description:
      "Application de gestion financière avec tableaux de bord interactifs et visualisation de données en temps réel.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    role: "UX/UI Design & Développement Front-end",
    image: "/images/project-1.svg",
    link: "#",
  },
  {
    title: "Medicore Health",
    description:
      "Plateforme de télémédecine offrant une expérience patient fluide et une interface médecin complète.",
    stack: ["React", "Node.js", "PostgreSQL", "Figma"],
    role: "Lead Designer & Front-end Developer",
    image: "/images/project-2.svg",
    link: "#",
  },
  {
    title: "Artisan Marketplace",
    description:
      "Place de marché pour artisans locaux avec système de commande, paiement et suivi intégrés.",
    stack: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    role: "Full-Stack Design & Développement",
    image: "/images/project-3.svg",
    link: "#",
  },
  {
    title: "EcoTrack Analytics",
    description:
      "Outil de suivi d'empreinte carbone pour entreprises avec rapports automatisés et recommandations IA.",
    stack: ["TypeScript", "Python", "D3.js", "AWS"],
    role: "UX Research & Front-end Development",
    image: "/images/project-4.svg",
    link: "#",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="hoverable group overflow-hidden rounded-xl border border-white/[0.06] bg-bg-secondary/30 transition-all duration-300 hover:border-neon/15 hover:shadow-[0_0_20px_rgba(0,255,136,0.04)]"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/60" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-text-primary">
            {project.title}
          </h3>
          <a
            href={project.link}
            className="hoverable rounded-full border border-white/10 p-2 text-text-secondary transition-all duration-200 hover:border-neon/30 hover:text-neon"
            aria-label={`Voir ${project.title}`}
          >
            <HiArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <p className="mb-3 text-xs text-text-secondary/70">
          {project.role}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projets" className="relative min-h-screen py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-neon uppercase">
            Projets
          </p>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Travaux récents
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
