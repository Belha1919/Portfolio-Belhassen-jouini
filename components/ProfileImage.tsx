"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  badgeText?: string;
}

export default function ProfileImage({
  src = "/images/profile.png",
  alt = "Belhassen Jouini",
  badgeText = "Disponible",
}: ProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
      transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rotated mono badge */}
      <div className="absolute -top-3 -left-3 z-20 hidden md:block">
        <span className="inline-flex -rotate-6 items-center gap-2 border border-accent bg-paper px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {badgeText}
        </span>
      </div>

      {/* Framed editorial portrait */}
      <div className="hoverable group relative overflow-hidden border border-line">
        <motion.div
          animate={{ scale: isHovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 80vw, 28rem"
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            priority
          />
          {/* Duotone wash */}
          <div
            className="absolute inset-0 mix-blend-color transition-opacity duration-500 group-hover:opacity-0"
            style={{ background: "var(--color-accent)", opacity: 0.18 }}
          />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-paper/80 to-transparent" />
        </motion.div>

        {/* Corner caption */}
        <div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-line bg-paper/70 px-3 py-2 backdrop-blur-sm">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-dim">
            Fig. 01
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-dim">
            Tunis · FR
          </span>
        </div>
      </div>
    </motion.div>
  );
}
