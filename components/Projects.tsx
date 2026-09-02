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
Type : Alternance UX/UI Designer & Front-End — 10/2025 – 08/2026
Mon Rôle : UX/UI Designer & Front-End Developer

🎯 Le Contexte
En alternance chez BNP Paribas Asset Management, je conçois et développe des composants UI du Design System, distribués via le framework front-end interne ngfx et utilisés par une vingtaine d'applications métier.

🎨 Contribution Design & Tokens
• Migration du Design System vers l'identité visuelle BNP Paribas Asset Management : refonte de la palette et de l'architecture de tokens UI
• Conception et développement d'un système de thématisation light / dark reposant sur les design tokens
• Harmonisation des tokens à travers tous les produits pour garantir une cohérence visuelle maximale

🛠️ Conception & Évolution des Composants
• Conception et développement de 24 composants UI du Design System, en garantissant leur cohérence et leur scalabilité
• Composants développés en Angular / TypeScript au sein du framework interne, avec workflow Git et revue de code
• Documentation des composants via Storybook, avec spécifications de design et variantes

🤖 Serveur MCP & IA interne
• Développement d'un serveur MCP connecté à Storybook : les assistants IA internes (chat VS Code) génèrent des pages et des écrans directement à partir des composants du Design System

📦 Distribution & Maintenance
• Publication des composants en packages internes versionnés, livrés via Azure DevOps
• Mise en place d'un workflow de versioning et de publication des composants

✨ Impact & Résultats
• Amélioration de la cohérence et de la standardisation des interfaces au sein des projets
• Réduction du temps de développement des nouvelles interfaces grâce aux composants standardisés
• Augmentation de la maintenabilité et de la scalabilité du système de design`,
    stack: ["Figma", "Design System", "Angular", "TypeScript", "Storybook", "UI Tokens", "Light/Dark Mode", "MCP"],
    role: "UX/UI Designer & Front-End Developer",
    image: "/images/BNP1920-1024x576.jpg",
    link: "#",
  },
  {
    title: "AIBA Technologie – Site Web pour Startup IA",
    description: `Projet : AIBA Technologie – Site vitrine d'une startup spécialisée en IA & solutions digitales
Type : Projet Web Complet (UX/UI Design & Développement Front-end)
Mon Rôle : UX/UI Designer & Développeur Front-end

Le Projet
AIBA Technologie est une startup qui accompagne les entreprises dans leur transformation digitale grâce à des solutions IA (chatbots, agents IA, automatisation) et des produits digitaux (sites vitrines, e-commerce, applications mobiles, SaaS). J'ai conçu et développé le site vitrine complet, bilingue FR/EN, destiné à présenter l'offre et convertir les prospects.

✨ L'approche UX/UI Design
Identité Visuelle Tech & IA : Interface sombre avec dégradés bleu/violet et effets lumineux (aurora, glow) pour incarner une image innovante et technologique, tout en gardant une hiérarchie de lecture claire.
Structure orientée conversion : Hero avec proposition de valeur immédiate, double appel à l'action (réserver un appel / demander un devis), sections services (IA & création digitale), références projets, processus en 5 étapes et formulaire de contact.
Bilingue FR/EN : Système de bascule de langue intégré à l'ensemble du contenu et de la navigation.

💻 L'approche Développement Front-end
Stack Moderne : Développement avec Next.js, TypeScript et Tailwind CSS, animations et micro-interactions (reveal au scroll, compteurs animés, barre de progression de scroll, spotlight au survol des cartes).
Navigation avancée : Mise en place d'une navigation "notch" avec scroll-spy pour mettre en évidence la section active.
Chatbot IA intégré : Intégration d'un widget de chat connecté à un modèle IA local (Ollama), avec repli automatique si le service n'est pas disponible.
Performance & Accessibilité : Interface responsive, réduction de mouvement respectée (prefers-reduced-motion), SEO optimisé.`,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "UX/UI Design", "Chatbot IA"],
    role: "UX/UI Designer & Développeur Front-end",
    image: "/images/aiba-screenshot.png",
    link: "https://github.com/Belha1919/aiba-technologie",
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

function ProjectEntry({
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
  const reversed = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Voir l'étude de cas : ${project.title}`}
      className="hoverable group grid grid-cols-1 items-center gap-6 border-b border-line py-10 md:grid-cols-2 md:gap-12 md:py-16"
    >
      {/* Screenshot — always visible */}
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden border border-line ${
          reversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          unoptimized
        />
        {/* Index badge */}
        <span className="absolute left-0 top-0 bg-accent px-3 py-1.5 font-mono text-xs font-semibold text-[#0c0c0b]">
          {String(index + 1).padStart(2, "0")} / 0{projects.length}
        </span>
        {/* Hover scrim + cue */}
        <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-[#0c0c0b]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="m-4 inline-flex items-center gap-2 border border-ink bg-paper/80 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink backdrop-blur-sm">
            Étude de cas
            <HiArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "md:order-1" : "md:order-2"}>
        <span className="kicker text-accent">{project.role}</span>
        <h3 className="mt-3 font-display text-3xl font-semibold leading-[1.05] text-ink transition-colors duration-300 group-hover:text-accent md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 line-clamp-3 max-w-md text-sm leading-relaxed text-ink-dim md:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-ink-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink">
          Voir le projet
          <HiArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </motion.article>
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
      <section id="projets" className="relative py-28 md:py-40" ref={ref}>
        <div className="mx-auto max-w-[120rem] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex items-end justify-between border-b border-line pb-5"
          >
            <div>
              <span className="kicker">(Projets sélectionnés)</span>
              <h2 className="mt-4 font-display font-bold text-ink display-md">
                Travaux récents
              </h2>
            </div>
            <span className="kicker">N° 04</span>
          </motion.div>

          <div className="border-t border-line">
            {projects.map((project, i) => (
              <ProjectEntry
                key={project.title}
                project={project}
                index={i}
                onOpen={setSelectedProject}
              />
            ))}
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
                      {selectedProject.link.includes("figma.com")
                        ? "Voir sur Figma"
                        : selectedProject.link.includes("github.com")
                          ? "Voir sur GitHub"
                          : "Voir le projet"}
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
