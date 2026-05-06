"use client";

import Link from "next/link";
import Image from "next/image";

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="announce">
        Conçu avec et pour des cabinets en droit de l&apos;immigration au Québec.
        <Link href="/book-call">Réserver un appel →</Link>
      </div>

      <div className="nav-wrap">
        <nav className="nav">
          <Link href="/" className="nav-brand">
            <Image src="/formio-logo.svg" alt="Formio logo" width={26} height={26} />
            Formio
          </Link>
          <div className="nav-center">
            <div className="nav-links">
              <a href="/#stats">Résultats</a>
              <a href="/#how">Features</a>
              <Link href="/programs">Programmes</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/blog">Ressources</Link>
            </div>
          </div>
          <div className="nav-right">
            <a href="https://console.formio.ca" className="nav-secondary">Connexion</a>
            <span className="nav-divider" aria-hidden />
            <Link href="/book-call" className="nav-cta">
              <SparkleIcon /> Commencer mon essai gratuit
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
