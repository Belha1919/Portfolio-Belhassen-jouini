"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
  badgeText?: string;
}

export default function ProfileImage({
  src = "/images/profile.png",
  alt = "Belhassen Jouini",
  size = 180,
  badgeText = "Full-Stack Designer",
}: ProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: -200, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.1,
        type: "spring",
        bounce: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative mx-auto mb-8 flex items-center justify-center"
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          type: "spring",
          bounce: 0.5,
        }}
        className="absolute -top-2 -right-2 z-10"
      >
        <motion.div
          animate={
            isHovered
              ? {
                  boxShadow: [
                    "0 0 15px rgba(0, 255, 136, 0.3)",
                    "0 0 25px rgba(0, 255, 136, 0.5)",
                    "0 0 15px rgba(0, 255, 136, 0.3)",
                  ],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          className="rounded-full border border-neon/30 bg-[#0A0A0A] px-3 py-1.5 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
        >
          <span className="text-[10px] font-semibold tracking-wider text-neon uppercase">
            {badgeText}
          </span>
        </motion.div>
      </motion.div>

      {/* Outer glow ring - animated */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: "0 0 40px rgba(0, 255, 136, 0.3)",
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Middle ring with border */}
      <motion.div
        animate={
          isHovered
            ? {
                scale: 1.08,
                boxShadow: "0 0 50px rgba(0, 255, 136, 0.5)",
              }
            : {
                scale: 1,
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.25)",
              }
        }
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full border-2 border-neon/20"
      />

      {/* Image container with hover effects */}
      <motion.div
        animate={
          isHovered
            ? {
                scale: 1.03,
                rotate: [0, -1, 1, 0],
              }
            : {
                scale: 1,
                rotate: 0,
              }
        }
        transition={{ duration: 0.4 }}
        className="hoverable relative overflow-hidden rounded-full"
        style={{
          width: size - 12,
          height: size - 12,
          boxShadow: "0 0 20px rgba(0, 255, 136, 0.15)",
        }}
      >
        {/* Inner glow border */}
        <div className="absolute inset-0 z-10 rounded-full border border-neon/10" />

        {/* Profile Image */}
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full rounded-full object-cover"
          priority
        />

        {/* Hover overlay */}
        <motion.div
          animate={
            isHovered
              ? {
                  opacity: 0.15,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-neon"
        />
      </motion.div>

      {/* Subtle pulse animation on idle */}
      {!isHovered && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full border-2 border-neon"
        />
      )}
    </motion.div>
  );
}
