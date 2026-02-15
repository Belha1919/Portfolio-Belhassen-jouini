"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const socialLinks = [
  {
    icon: HiOutlineMail,
    label: "Email",
    href: "mailto:contact@belhassenjouini.com",
    display: "contact@belhassenjouini.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/belhassenjouini",
    display: "linkedin.com/in/belhassenjouini",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/belhassenjouini",
    display: "github.com/belhassenjouini",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-neon uppercase">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            Travaillons ensemble
          </h2>
          <p className="mx-auto max-w-md text-text-secondary">
            Un projet en tête ? N&apos;hésitez pas à me contacter pour en
            discuter.
          </p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col gap-6"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="hoverable group flex items-center gap-4 rounded-lg border border-white/[0.06] bg-bg-secondary/30 px-5 py-4 transition-all duration-300 hover:border-neon/20 hover:shadow-[0_0_15px_rgba(0,255,136,0.05)]"
              >
                <link.icon className="h-5 w-5 text-neon/70 transition-colors group-hover:text-neon" />
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {link.label}
                  </p>
                  <p className="text-xs text-text-secondary">{link.display}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col gap-5"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm text-text-secondary">
                Nom
              </Label>
              <Input
                id="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                className="border-white/[0.08] bg-bg-secondary/50 text-text-primary placeholder:text-text-secondary/40 focus:border-neon/30 focus:ring-neon/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-text-secondary">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                className="border-white/[0.08] bg-bg-secondary/50 text-text-primary placeholder:text-text-secondary/40 focus:border-neon/30 focus:ring-neon/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm text-text-secondary">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Décrivez votre projet..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                required
                rows={5}
                className="resize-none border-white/[0.08] bg-bg-secondary/50 text-text-primary placeholder:text-text-secondary/40 focus:border-neon/30 focus:ring-neon/20"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="hoverable mt-2 w-full bg-neon font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-neon/90 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] disabled:opacity-50"
            >
              {isSubmitting
                ? "Envoi en cours..."
                : submitted
                  ? "Message envoyé !"
                  : "Envoyer le message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
