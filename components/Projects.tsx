"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
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
    title: "Design System BNP Paribas Asset Management",
    description: `Projet : Migration du Design System vers l'Identité Visuelle BNP Paribas Asset Management
Type : Alternance - Project Design System & Component Library
Mon Rôle : UX/UI Designer

🎯 Le Contexte
En alternance chez BNP Paribas Asset Management, j'ai contribué à la refonte complète du Design System pour aligner tous les produits digitaux sur l'identité visuelle corporate du groupe. Un projet stratégique combinant design system, composants UI et infrastructure interne.

🎨 Contribution Design & Tokens
• Contribution à la migration du Design System vers l'identité visuelle BNP Paribas Asset Management
• Conception et définition d'une palette de couleurs cohérente et des tokens UI (espacements, typographie, ombres, etc.)
• Conception et implémentation d'un système de thématisation (light/dark mode) basé sur des tokens UI réutilisables
• Harmonisation des tokens à travers tous les produits pour garantir une cohérence visuelle maximale

🛠️ Conception & Évolution des Composants
• Conception et évolution de composants UI sous Figma, en garantissant leur cohérence et leur scalabilité
• Documentation détaillée des composants avec spécifications de design et variantes
• Gestion de la scalabilité des composants face à la croissance du système

⚙️ Intégration & Implémentation
• Intégration et adaptation des composants dans un environnement Angular, basé sur un framework interne (in-house)
• Mise en place de composants réutilisables et maintenables en TypeScript/Angular
• Gestion des dépendances internes et coordination avec les équipes de développement

📦 Distribution & Maintenance
• Migration des composants vers la charte graphique BNPP et mise à disposition via Storybook
• Utilisation et gestion de packages internes pour la distribution et la maintenance des composants UI
• Mise en place d'un workflow de versioning et de publication des composants

✨ Impact & Résultats
• Amélioration de la cohérence et de la standardisation des interfaces au sein des projets
• Réduction du temps de développement des nouvelles interfaces grâce aux composants standardisés
• Augmentation de la maintenabilité et de la scalabilité du système de design`,
    stack: ["Figma", "Design System", "Angular", "TypeScript", "Storybook", "UI Tokens", "Light/Dark Mode"],
    role: "UX/UI Designer",
    image: "/images/BNP1920-1024x576.jpg",
    link: "#",
  },
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
    link: "https://www.figma.com/design/PVvH57YuSwM8WdTD8OXZAR/MAX?node-id=2-2&t=kBP4DGmQBDEf0iJ3-1",
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
    link: "https://www.figma.com/design/E1ih0VrSYmxw5LR87S3Dk6/Tanit-site-web?node-id=0-1&t=kFBbys6Qa1BLyprN-1",
  },
];

function ProjectRow({
  project,
  index,
  onOpen,
  onHover,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
  onHover: (index: number | null) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      role="button"
      tabIndex={0}
      className="hoverable group relative block border-b border-line py-8 transition-colors hover:bg-ink/[0.02] md:py-12"
    >
      <div className="grid grid-cols-1 items-baseline gap-4 md:grid-cols-12 md:gap-8">
        <span className="font-mono text-xs text-accent md:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="md:col-span-7">
          <h3 className="font-display text-2xl font-semibold text-ink transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-dim">
            {project.role}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:col-span-3">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ink-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="md:col-span-1 md:justify-self-end">
          <HiArrowUpRight className="h-6 w-6 text-ink-dim transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      {/* Inline image reveal (mobile/tablet) */}
      <div className="mt-5 aspect-video w-full overflow-hidden border border-line md:hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="h-full w-full object-cover grayscale"
          unoptimized
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      <section id="projets" className="relative py-28 md:py-40" ref={ref}>
        <div className="mx-auto max-w-[120rem] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 flex items-end justify-between border-b border-line pb-5"
          >
            <div>
              <span className="kicker">(Projets sélectionnés)</span>
              <h2 className="mt-4 font-display font-bold text-ink display-md">
                Travaux récents
              </h2>
            </div>
            <span className="kicker">N° 04</span>
          </motion.div>

          {/* Floating hover preview (desktop) */}
          <div className="relative">
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute top-1/2 left-1/2 z-20 hidden h-64 w-96 -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-accent shadow-2xl md:block"
                >
                  <Image
                    src={projects[hoveredIndex].image}
                    alt={projects[hoveredIndex].title}
                    fill
                    sizes="24rem"
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-line">
              {projects.map((project, i) => (
                <ProjectRow
                  key={project.title}
                  project={project}
                  index={i}
                  onOpen={setSelectedProject}
                  onHover={setHoveredIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Details du projet ${selectedProject.title}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              className="max-h-[90vh] w-full max-w-4xl touch-pan-y overflow-y-auto overscroll-contain border border-line bg-paper-raised p-5 sm:p-8"
              onClick={(event) => event.stopPropagation()}
              onWheel={(event) => event.stopPropagation()}
            >
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-line pb-5">
                <div>
                  <span className="kicker">Étude de cas</span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-dim">
                    {selectedProject.role}
                  </p>
                  {selectedProject.link !== "#" ? (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hoverable mt-4 inline-flex items-center gap-2 border border-accent px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent hover:text-[#0c0c0b]"
                    >
                      Voir sur Figma
                      <HiArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="hoverable shrink-0 border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-dim transition-colors hover:border-accent hover:text-accent"
                >
                  Fermer ✕
                </button>
              </div>

              <div className="relative mb-6 aspect-video overflow-hidden border border-line">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  unoptimized
                />
              </div>

              <p className="mb-6 text-sm leading-relaxed whitespace-pre-line text-ink-dim sm:text-base">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-line pt-5">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-line px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-ink-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
