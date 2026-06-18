"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";

const socialLinks = [
  {
    icon: FiPhone,
    label: "Téléphone",
    href: "tel:0768325194",
    display: "0768325194",
  },
  {
    icon: HiOutlineMail,
    label: "Email",
    href: "mailto:belhassen.jouini1919@gmail.com",
    display: "belhassen.jouini1919@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/belhassen-jouini",
    display: "linkedin.com/in/belhassen-jouini",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/Belha1919",
    display: "github.com/Belha1919",
  },
];

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 font-body text-base text-ink placeholder:text-ink-dim/50 outline-none transition-colors focus:border-accent";

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
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let payload: { error?: string; message?: string } | null = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok) {
        setError(
          payload?.error ||
            payload?.message ||
            "Erreur lors de l'envoi du message. Veuillez reessayer."
        );
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur lors de l'envoi du message";
      setError(errorMessage);
      console.error("Erreur:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-40" ref={ref}>
      <div className="mx-auto max-w-[120rem] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex items-end justify-between border-b border-line pb-5"
        >
          <span className="kicker">(Contact)</span>
          <span className="kicker">N° 05</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Statement + social */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6"
          >
            <h2 className="font-display font-bold text-ink display-lg">
              Travaillons{" "}
              <span className="font-serif-display italic text-accent">
                ensemble
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-dim">
              Vous avez un projet&nbsp;? N&apos;hésitez pas à me contacter pour
              en discuter.
            </p>

            <div className="mt-12 border-t border-line">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="hoverable group flex items-center justify-between border-b border-line py-4 transition-colors hover:bg-ink/[0.02]"
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="h-4 w-4 text-accent" />
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-dim">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-sm text-ink transition-transform duration-300 group-hover:-translate-x-1">
                    {link.display}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 md:col-span-6"
          >
            {error && (
              <div
                role="alert"
                className="border border-accent bg-accent/10 px-4 py-3 font-mono text-xs text-accent"
              >
                {error}
              </div>
            )}
            {submitted && (
              <div
                role="status"
                className="border border-ink bg-ink/10 px-4 py-3 font-mono text-xs text-ink"
              >
                ✓ Message envoyé avec succès — je vous répondrai bientôt.
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="kicker mb-2 block text-ink-dim"
              >
                01 / Nom
              </label>
              <input
                id="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="kicker mb-2 block text-ink-dim"
              >
                02 / Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="kicker mb-2 block text-ink-dim"
              >
                03 / Message
              </label>
              <textarea
                id="message"
                placeholder="Décrivez votre projet..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                required
                rows={5}
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="hoverable group mt-2 inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-[#0c0c0b] transition-colors duration-200 hover:bg-ink disabled:opacity-50"
            >
              {isSubmitting
                ? "Envoi en cours..."
                : submitted
                  ? "Message envoyé ✓"
                  : "Envoyer le message →"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
