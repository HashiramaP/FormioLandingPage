"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="announce">
        Conçu avec et pour des cabinets en droit de l&apos;immigration au Québec.
        <Link href="/book-call">Réserver un appel →</Link>
      </div>

      <div className="nav-wrap">
        <nav className="nav">
          <Link href="/" className="nav-brand" onClick={close}>
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

          <button
            type="button"
            className="nav-hamburger"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {open && (
          <div
            id="mobile-menu"
            className="nav-mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <a href="/#stats" className="nav-mobile-link" onClick={close}>
              Résultats
            </a>
            <a href="/#how" className="nav-mobile-link" onClick={close}>
              Features
            </a>
            <Link href="/programs" className="nav-mobile-link" onClick={close}>
              Programmes
            </Link>
            <Link href="/faq" className="nav-mobile-link" onClick={close}>
              FAQ
            </Link>
            <Link href="/blog" className="nav-mobile-link" onClick={close}>
              Ressources
            </Link>

            <div className="nav-mobile-sep" aria-hidden />

            <a
              href="https://console.formio.ca"
              className="nav-mobile-secondary"
              onClick={close}
            >
              Connexion
            </a>
            <Link
              href="/book-call"
              className="nav-mobile-cta"
              onClick={close}
            >
              <SparkleIcon /> Commencer mon essai gratuit
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
