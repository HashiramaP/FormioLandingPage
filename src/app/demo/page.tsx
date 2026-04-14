import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voir Formio en action — Démo vidéo",
  description:
    "Découvrez comment Formio remplit vos formulaires IMM, Arrima et IRCC en quelques secondes.",
};

export default function DemoPage() {
  return (
    <main className="demo-page">
      <Link href="/" className="demo-back">
        ← Retour à l&apos;accueil
      </Link>

      <div className="demo-container">
        <h1 className="demo-title">
          Voir <span className="demo-title-brand">Formio</span> en action
        </h1>
        <p className="demo-sub">
          Un formulaire IMM rempli en 2 minutes au lieu de 45. Regardez par
          vous-même.
        </p>

        <div className="demo-video-frame">
          <video
            className="demo-video"
            controls
            playsInline
            preload="metadata"
            poster="/formio-logo.png"
          >
            <source src="/formio-demo.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>

        <div className="demo-cta-row">
          <Link href="/" className="btn-secondary">
            ← Retour
          </Link>
          <a href="https://formio.ca" className="btn-primary">
            Essayer gratuitement 30 jours
          </a>
        </div>
      </div>
    </main>
  );
}
