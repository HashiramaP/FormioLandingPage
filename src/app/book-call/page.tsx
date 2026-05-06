import Link from "next/link";
import type { Metadata } from "next";
import CalendlyEmbed from "./CalendlyEmbed";

export const metadata: Metadata = {
  title: "Réserver un appel — Formio",
  description:
    "Planifiez un appel de 30 minutes avec l'équipe Formio pour découvrir comment automatiser vos formulaires d'immigration.",
};

export default function BookCallPage() {
  return (
    <main className="demo-page">
      <div className="demo-container">
        <h1 className="demo-title">
          Réserver un <span className="demo-title-brand">appel</span>
        </h1>
        <p className="demo-sub">
          30 minutes pour voir comment Formio peut transformer votre pratique.
          Sans engagement.
        </p>

        <CalendlyEmbed />

        <div className="demo-cta-row">
          <Link href="/" className="btn-secondary">
            ← Retour
          </Link>
          <Link href="/demo" className="btn-primary">
            Voir la démo vidéo
          </Link>
        </div>
      </div>
    </main>
  );
}
