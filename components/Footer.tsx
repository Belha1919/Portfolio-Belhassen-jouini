"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Belhassen Jouini. Tous droits réservés.
        </p>
        <p className="text-xs text-text-secondary/50">
          Conçu et développé avec Next.js, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
