"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
    title: "MAX – Assistant IA de Soutien et d'Écoute",
    description: `Projet : MAX – Assistant IA de Soutien et d'Écoute
Type : Projet Académique Complet (UX/UI Design & Développement)
Mon Rôle Principal : UX Research, UI Design, Tests Utilisateurs

Le Défi
Comment concevoir un outil numérique basé sur l'IA qui offre un véritable soutien émotionnel tout en garantissant un environnement sûr, confidentiel et dénué de jugement ?

Mon Approche
1. UX Research :
J'ai mené des recherches approfondies pour comprendre les besoins des utilisateurs en matière de bien-être mental, identifiant les freins liés à la stigmatisation, à la confidentialité et à la peur du jugement. Ces recherches ont permis de définir l'ADN de MAX.

2. UI Design & Identité Visuelle :
J'ai conçu une interface épurée et rassurante. Le choix d'un violet profond instaure un climat de confiance et d'intimité, contrasté par des accents jaunes néon pour guider l'action. L'utilisation du glassmorphism apporte une touche de modernité technologique tout en maintenant le focus sur la conversation.

3. Tests Utilisateurs :
Des itérations basées sur des retours utilisateurs ont été cruciales pour affiner le ton de l'IA, le flux de conversation et la clarté de l'offre freemium, assurant une expérience utilisateur fluide et empathique.

La Solution (L'ADN de MAX)
« Je suis là pour vous écouter, vous soutenir et vous aider à avancer. Grâce à l’intelligence artificielle, je vous propose des conseils adaptés pour gérer le stress, l’anxiété ou les moments difficiles. Vos échanges restent confidentiels et sécurisés. Je ne remplace pas un professionnel, mais je suis là pour vous accompagner, sans jugement, à chaque étape. »`,
    stack: ["Next.js", "Tailwind CSS", "UX/UI Design"],
    role: "UX Research, UI Design, Tests Utilisateurs",
    image: "/images/max mockup.jpg",
    link: "#",
  },
  {
    title: "TANIT – E-commerce & Challenge Communautaire",
    description: `Projet : TANIT – E-commerce & Challenge Communautaire
Type : Projet Web Complet
Mon Rôle : UX/UI Designer & Développeur Front-end

Le Projet
TANIT est une plateforme web dédiée à la valorisation de l'huile d'olive de haute qualité. Plus qu'une simple vitrine e-commerce, le site propose une immersion dans le processus de fabrication (storytelling) et intègre un aspect communautaire fort à travers l'organisation d'un concours annuel récompensant les meilleurs producteurs.

✨ L'approche UX/UI Design
Identité Visuelle Organique & Premium : Développement d'une interface épurée s'appuyant sur une palette de couleurs naturelles (nuances de vert olive, blanc cassé et touches de doré). Cette charte graphique évoque la pureté et le haut de gamme, tout en sublimant les photographies des produits.

Storytelling & Réassurance : Conception de pages dédiées à "La Fabrication" et "La Qualité" pour rassurer le consommateur sur les méthodes de production, grâce à une mise en page aérée et une typographie claire.

Parcours "Challenge" Optimisé : Création d'une page événementielle engageante pour le concours, intégrant une hiérarchie visuelle claire pour les récompenses et une section "Gagnants" pour apporter de la preuve sociale.

💻 L'approche Développement Front-end
Intégration Pixel-Perfect : Traduction fidèle du design organique en code, en respectant minutieusement les espacements, les jeux typographiques et les nuances de couleurs pour conserver l'aspect premium de la marque.

Composants et Formulaires Interactifs : Mise en place d'une interface utilisateur réactive, notamment via le développement du formulaire d'inscription au challenge, structuré en plusieurs étapes (Détails, Envoi, Médias) pour fluidifier l'expérience et réduire la charge cognitive.

Navigation Fluide : Création d'une structure front-end solide permettant de naviguer sans accroc entre la vitrine e-commerce, les pages informatives et la section événementielle.`,
    stack: ["UX/UI Design", "Front-end Development", "E-commerce"],
    role: "UX/UI Designer & Développeur Front-end",
    image: "/images/tanit mockup.jpg",
    link: "#",
  },
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
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
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
      role="button"
      tabIndex={0}
      className="hoverable group overflow-hidden rounded-xl border border-white/[0.06] bg-bg-secondary/30 transition-all duration-300 hover:border-neon/15 hover:shadow-[0_0_20px_rgba(0,255,136,0.04)]"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/60" />
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-text-primary">
            {project.title}
          </h3>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onOpen(project);
            }}
            className="hoverable rounded-full border border-white/10 p-2 text-text-secondary transition-all duration-200 hover:border-neon/30 hover:text-neon"
            aria-label={`Voir ${project.title}`}
          >
            <HiArrowUpRight className="h-4 w-4" />
          </button>
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <>
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
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
        </div>
      </section>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Details du projet ${selectedProject.title}`}
        >
          <div
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#111214] p-5 touch-pan-y sm:p-6"
            onClick={(event) => event.stopPropagation()}
            onWheel={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-medium tracking-[0.16em] text-neon uppercase">
                  Details du projet
                </p>
                <h3 className="text-xl font-bold text-text-primary sm:text-2xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary/80">
                  {selectedProject.role}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-neon/40 hover:text-neon"
              >
                Fermer
              </button>
            </div>

            <div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-bg-secondary">
              {selectedProject.image ? (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  unoptimized
                />
              ) : null}
            </div>

            <p className="mb-5 whitespace-pre-line text-sm leading-relaxed text-text-secondary sm:text-base">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-white/[0.05] px-3 py-1.5 text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
