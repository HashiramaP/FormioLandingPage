"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  SparkleIcon,
  MailIcon,
  UploadIcon,
  WandIcon,
  CheckIcon,
  DocIcon,
  ShieldIcon,
  BellIcon,
  UsersIcon,
  BuildingIcon,
} from "@/app/icons";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

const steps = [
  {
    num: "01",
    Icon: MailIcon,
    title: "Vous envoyez un lien",
    body: "Générez un lien depuis votre tableau de bord. Envoyez-le par e-mail ou texto. Votre client n'a pas besoin de créer un compte.",
  },
  {
    num: "02",
    Icon: UploadIcon,
    title: "Votre client téléverse ses documents",
    body: "Passeport, CV, pièces d'identité. Depuis son téléphone, en 5 minutes.",
  },
  {
    num: "03",
    Icon: WandIcon,
    title: "Formio extrait les données automatiquement",
    body: "L'IA lit les documents et pré-remplit le formulaire. Nom, date de naissance, numéro de passeport, historique professionnel.",
  },
  {
    num: "04",
    Icon: CheckIcon,
    title: "Votre client répond aux questions restantes",
    body: "Questions simples. Oui/Non, cases à cocher. Depuis n'importe quel appareil.",
  },
  {
    num: "05",
    Icon: DocIcon,
    title: "Les formulaires officiels sont générés",
    body: "Tous les IMMs, le portail IRCC, Arrima — remplis automatiquement, en français et en anglais, prêts à vérifier.",
  },
  {
    num: "06",
    Icon: ShieldIcon,
    title: "Vous vérifiez et soumettez",
    body: "Vous gardez le contrôle total. Vous vérifiez, vous corrigez, vous soumettez.",
  },
];

const managedItems = [
  { Icon: BellIcon, label: "Relances automatiques si le client n'a pas terminé" },
  { Icon: UsersIcon, label: "Suivi en temps réel de la progression" },
  { Icon: BuildingIcon, label: "Statistiques de cabinet et prévisions" },
  { Icon: MailIcon, label: "E-mails de rappel avec la marque de votre cabinet" },
];

function splitWords(text: string) {
  return text.split(" ").map((w, i, arr) => (
    <span className="hiw-word" key={`${w}-${i}`}>
      {w}{i < arr.length - 1 ? " " : ""}
    </span>
  ));
}

export function HowItWorksClient() {
  useEffect(() => {
    let cancelled = false;

    const tryInit = () => {
      if (cancelled) return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger) {
        window.setTimeout(tryInit, 60);
        return;
      }
      gsap.registerPlugin(ScrollTrigger);

      // --- Hero headline word stagger ---
      const heroWords = document.querySelectorAll<HTMLElement>(".hiw-hero .hiw-word");
      if (heroWords.length) {
        gsap.to(heroWords, {
          opacity: 1, y: 0,
          duration: 0.9, ease: "power3.out",
          stagger: 0.09, delay: 0.15,
        });
      }
      gsap.to(".hiw-hero-fade", {
        opacity: 1, y: 0,
        duration: 0.9, ease: "power2.out",
        stagger: 0.12, delay: 0.6,
      });

      // --- Steps: each step fires a short timeline ---
      document.querySelectorAll<HTMLElement>(".hiw-step").forEach((step) => {
        const circle = step.querySelector<HTMLElement>(".hiw-step-circle");
        const line   = step.querySelector<HTMLElement>(".hiw-step-line");
        const body   = step.querySelector<HTMLElement>(".hiw-step-body");
        const bignum = step.querySelector<HTMLElement>(".hiw-step-bignum");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });

        if (bignum) tl.to(bignum, { opacity: 0.065, x: 0, duration: 0.6, ease: "power2.out" }, 0);
        if (circle) tl.to(circle, {
          opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.5)",
          backgroundColor: "rgba(14,116,144,0.18)",
          borderColor: "rgba(14,116,144,0.55)",
        }, 0.05);
        if (body)   tl.to(body,   { opacity: 1, x: 0, duration: 0.65, ease: "power3.out" }, 0.12);
        if (line)   tl.to(line,   { scaleY: 1,        duration: 0.85, ease: "power2.out" }, 0.28);
      });

      // --- Callout ---
      gsap.fromTo(".hiw-callout-inner",
        { scale: 0.95, opacity: 0, y: 18 },
        {
          scale: 1, opacity: 1, y: 0,
          duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: ".hiw-callout", start: "top 82%", toggleActions: "play none none none" },
        }
      );

      // --- Managed section ---
      gsap.to(".hiw-managed-left", {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".hiw-managed-left", start: "top 82%", toggleActions: "play none none none" },
      });
      gsap.to(".hiw-managed-row", {
        opacity: 1, x: 0, duration: 0.55, ease: "power2.out", stagger: 0.1,
        scrollTrigger: { trigger: ".hiw-managed-right", start: "top 80%", toggleActions: "play none none none" },
      });

      // --- CTA card ---
      gsap.fromTo(".hiw-cta-card",
        { scale: 0.97, opacity: 0.75 },
        {
          scale: 1, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".hiw-cta-card", start: "top 88%", toggleActions: "play none none none" },
        }
      );
    };

    tryInit();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <Script src="https://cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.prod.website-files.com/gsap/3.14.2/ScrollTrigger.min.js" strategy="afterInteractive" />

      {/* HERO */}
      <header className="hiw-hero section-cream">
        <div className="hiw-hero-inner container">
          <h1 className="hiw-h1">
            {splitWords("Comment ça")}{" "}
            <em className="hiw-accent">
              <span className="hiw-word">marche</span>
            </em>
          </h1>
          <p className="hiw-lead hiw-hero-fade">
            Six étapes. Votre client téléverse ses documents, Formio remplit les
            formulaires, vous vérifiez et soumettez. Chaque dossier prend des
            minutes, pas des heures.
          </p>
          <div className="hiw-cta-row hiw-hero-fade">
            <Link href="/demo" className="btn-secondary">Voir une démo →</Link>
            <Link href="/book-call" className="btn-primary">
              <SparkleIcon /> Commencer l&apos;essai gratuit de 30 jours
            </Link>
          </div>
        </div>
      </header>

      {/* ANCHOR NAV */}
      <nav className="hiw-anav" aria-label="Sections de la page">
        <div className="hiw-anav-inner">
          <a href="#etapes"  className="hiw-anav-link">Les 6 étapes</a>
          <a href="#gestion" className="hiw-anav-link">Ce que Formio gère</a>
          <a href="#demo"    className="hiw-anav-link">Voir une démo</a>
        </div>
      </nav>

      {/* STEPS */}
      <section id="etapes" className="hiw-section section-cream">
        <div className="container">
          <div className="hiw-section-head">
            <h2 className="hiw-h2">
              Six étapes, de l&apos;envoi du lien à la soumission.
            </h2>
          </div>

          <ol className="hiw-timeline">
            {steps.map((step, index) => (
              <li
                key={step.num}
                className={`hiw-step${index === 2 ? " hiw-step-with-callout" : ""}`}
              >
                {/* Left: icon + connector line */}
                <div className="hiw-step-num-col">
                  <div className="hiw-step-circle">
                    <step.Icon />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hiw-step-line" aria-hidden />
                  )}
                </div>

                {/* Right: content + optional callout */}
                <div className="hiw-step-content-col">
                  <div className="hiw-step-bignum" aria-hidden>{step.num}</div>
                  <div className="hiw-step-body">
                    <span className="hiw-step-num-label">{step.num}</span>
                    <h3 className="hiw-step-title">{step.title}</h3>
                    <p className="hiw-step-p">{step.body}</p>
                  </div>

                  {index === 2 && (
                    <div className="hiw-callout">
                      <div className="hiw-callout-inner">
                        <div className="hiw-callout-num">70%</div>
                        <p className="hiw-callout-text">
                          du formulaire est déjà rempli avant que votre client
                          commence à répondre aux questions.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MANAGED */}
      <section id="gestion" className="hiw-managed-section section-cream">
        <div className="container">
          <div className="hiw-managed-inner">
            <div className="hiw-managed-left">
              <h2 className="hiw-managed-h2">Ce que Formio gère pour vous.</h2>
              <p className="hiw-managed-lead">
                Pendant que vous travaillez sur vos dossiers, Formio s&apos;occupe du reste.
              </p>
            </div>
            <div className="hiw-managed-right">
              {managedItems.map(({ Icon, label }) => (
                <div key={label} className="hiw-managed-row">
                  <div className="hiw-managed-row-icon"><Icon /></div>
                  <p className="hiw-managed-row-label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="hiw-cta-section">
        <div className="container">
          <div className="hiw-cta-card">
            <div className="hiw-cta-glow" aria-hidden />
            <h2 className="hiw-cta-h2">
              Voyez Formio sur vos propres dossiers.
              <br />Sans engagement.
            </h2>
            <p className="hiw-cta-sub">Aucune carte de crédit requise. Configuré en 15 minutes.</p>
            <div className="hiw-cta-btns">
              <Link href="/demo" className="hiw-cta-ghost">Voir une démo →</Link>
              <Link href="/book-call" className="btn-primary">
                <SparkleIcon /> Commencer l&apos;essai gratuit de 30 jours →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── GSAP initial states ───────────────────────────────── */
        .hiw-word {
          opacity: 0;
          transform: translateY(20px);
          display: inline-block;
          will-change: opacity, transform;
        }
        .hiw-hero-fade {
          opacity: 0;
          transform: translateY(16px);
          will-change: opacity, transform;
        }
        .hiw-step-circle {
          opacity: 0;
          transform: scale(0.6);
          will-change: opacity, transform, background-color, border-color;
        }
        .hiw-step-line {
          transform: scaleY(0);
          transform-origin: top;
          will-change: transform;
        }
        .hiw-step-body {
          opacity: 0;
          transform: translateX(28px);
          will-change: opacity, transform;
        }
        .hiw-step-bignum {
          opacity: 0;
          transform: translateX(18px);
          will-change: opacity, transform;
        }
        .hiw-callout-inner {
          opacity: 0;
          will-change: opacity, transform;
        }
        .hiw-managed-left {
          opacity: 0;
          transform: translateY(20px);
          will-change: opacity, transform;
        }
        .hiw-managed-row {
          opacity: 0;
          transform: translateX(24px);
          will-change: opacity, transform;
        }

        /* ── Hero ─────────────────────────────────────────────── */
        .hiw-hero { padding: 8rem 1.5rem 5rem; }
        .hiw-hero-inner {
          display: flex; flex-direction: column; gap: 2rem; max-width: 860px;
        }
        .hiw-h1 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(3.5rem, 9vw, 7rem);
          line-height: 0.96;
          letter-spacing: -0.04em;
          font-weight: 500; color: var(--dark); margin: 0;
        }
        .hiw-accent { font-style: italic; color: var(--turquoise); }
        .hiw-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.15rem; color: var(--gray-text);
          line-height: 1.65; max-width: 58ch; margin: 0;
        }
        .hiw-cta-row { display: flex; gap: 0.85rem; flex-wrap: wrap; }

        /* ── Anchor nav ───────────────────────────────────────── */
        .hiw-anav {
          background: var(--cream);
          border-bottom: 1px solid var(--border-soft);
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .hiw-anav::-webkit-scrollbar { display: none; }
        .hiw-anav-inner {
          display: flex; gap: 0.4rem; padding: 0.85rem 1.5rem;
          max-width: 1180px; margin: 0 auto; white-space: nowrap;
        }
        .hiw-anav-link {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.875rem; font-weight: 600; color: var(--gray-muted);
          padding: 0.45rem 1rem; border-radius: 999px;
          border: 1.5px solid var(--border-soft);
          transition: color .2s, border-color .2s, background .2s;
          display: inline-block;
        }
        .hiw-anav-link:hover {
          color: var(--dark); border-color: var(--dark);
          background: rgba(10,19,34,.04);
        }

        /* ── Steps section ────────────────────────────────────── */
        .hiw-section { padding: 7rem 0 5rem; overflow-x: hidden; }
        .hiw-section-head { margin-bottom: 4.5rem; }
        .hiw-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          line-height: 1.08; letter-spacing: -0.022em;
          font-weight: 500; color: var(--dark); margin: 0; max-width: 26ch;
        }

        /* Timeline list */
        .hiw-timeline {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column;
        }
        .hiw-step {
          display: grid;
          grid-template-columns: 76px 1fr;
          gap: 0 2.75rem;
        }

        /* Left col */
        .hiw-step-num-col {
          display: flex; flex-direction: column; align-items: center;
        }
        .hiw-step-circle {
          width: 58px; height: 58px; border-radius: 999px;
          background: rgba(14,116,144,.08);
          border: 2px solid rgba(14,116,144,.18);
          display: flex; align-items: center; justify-content: center;
          color: var(--turquoise); flex-shrink: 0; z-index: 1;
        }
        .hiw-step-circle svg { width: 24px; height: 24px; }
        .hiw-step-line {
          flex: 1; width: 2px; min-height: 2rem;
          background: linear-gradient(to bottom, rgba(14,116,144,.45), rgba(14,116,144,.08));
          margin: 5px 0;
        }

        /* Right col */
        .hiw-step-content-col { position: relative; overflow: clip; }

        .hiw-step-bignum {
          position: absolute;
          top: -0.75rem; right: -1rem;
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(5.5rem, 11vw, 9.5rem);
          font-weight: 500; line-height: 1;
          color: var(--dark);
          pointer-events: none; user-select: none; z-index: 0;
        }

        .hiw-step-body {
          position: relative; z-index: 1;
          padding: 0.5rem 0 3.75rem;
          display: flex; flex-direction: column; gap: 0.65rem;
        }
        .hiw-step-with-callout .hiw-step-body { padding-bottom: 1.5rem; }

        .hiw-step-num-label {
          font-family: var(--font-figtree), monospace;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.14em; color: var(--turquoise);
          text-transform: uppercase;
        }
        .hiw-step-title {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(1.65rem, 3.5vw, 2.3rem);
          font-weight: 500; letter-spacing: -0.02em;
          line-height: 1.1; color: var(--dark); margin: 0;
        }
        .hiw-step-p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--gray-text);
          line-height: 1.65; margin: 0; max-width: 50ch;
        }

        /* Callout (after step 3) */
        .hiw-callout {
          position: relative; z-index: 1; padding-bottom: 3.75rem;
        }
        .hiw-callout-inner {
          background: var(--dark);
          border-radius: 26px;
          padding: 2.75rem 3rem;
          display: flex; align-items: center; gap: 2.5rem;
        }
        .hiw-callout-num {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(3.5rem, 7vw, 5rem);
          font-weight: 500; color: var(--turquoise);
          letter-spacing: -0.04em; line-height: 1;
          flex-shrink: 0;
        }
        .hiw-callout-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.1rem; color: var(--cream-on-dark);
          line-height: 1.65; margin: 0; max-width: 36ch;
        }

        /* ── Managed section ──────────────────────────────────── */
        .hiw-managed-section { padding: 6rem 1.5rem 7rem; }
        .hiw-managed-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 860px) {
          .hiw-managed-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
        .hiw-managed-left {
          display: flex; flex-direction: column; gap: 1rem;
          position: sticky; top: 6rem;
        }
        @media (max-width: 860px) {
          .hiw-managed-left { position: static; }
        }
        .hiw-managed-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 500; letter-spacing: -0.025em;
          line-height: 1.07; color: var(--dark); margin: 0;
          max-width: 14ch;
        }
        .hiw-managed-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--gray-text);
          line-height: 1.65; margin: 0; max-width: 34ch;
        }
        .hiw-managed-right {
          display: flex; flex-direction: column;
          border-top: 1px solid var(--border-soft);
        }
        .hiw-managed-row {
          display: flex; align-items: center; gap: 1.25rem;
          padding: 1.75rem 0;
          border-bottom: 1px solid var(--border-soft);
          transition: background .15s ease;
        }
        .hiw-managed-row-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(14,116,144,.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--turquoise); flex-shrink: 0;
          transition: background .2s ease;
        }
        .hiw-managed-row:hover .hiw-managed-row-icon {
          background: rgba(14,116,144,.2);
        }
        .hiw-managed-row-icon svg { width: 20px; height: 20px; }
        .hiw-managed-row-label {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--dark);
          line-height: 1.55; margin: 0;
        }

        /* ── CTA card ─────────────────────────────────────────── */
        .hiw-cta-section { padding: 4rem 1.5rem 7rem; }
        .hiw-cta-card {
          max-width: 1100px; margin: 0 auto;
          background: var(--turquoise);
          border-radius: 40px;
          padding: 6rem 3rem 5rem;
          display: flex; flex-direction: column;
          align-items: center; gap: 2rem;
          text-align: center; position: relative; overflow: hidden;
        }
        .hiw-cta-glow {
          position: absolute; top: -40%; left: 15%;
          width: 70%; height: 120%;
          background: radial-gradient(ellipse at center, rgba(0,136,255,.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .hiw-cta-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.75rem);
          font-weight: 500; color: #fff;
          line-height: 1.1; letter-spacing: -0.025em; margin: 0;
          position: relative; z-index: 1;
        }
        .hiw-cta-sub {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: rgba(255,255,255,.65);
          margin: 0; position: relative; z-index: 1;
        }
        .hiw-cta-btns {
          display: flex; gap: .85rem; flex-wrap: wrap;
          justify-content: center; position: relative; z-index: 1;
        }
        .hiw-cta-ghost {
          display: inline-flex; align-items: center;
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; font-weight: 600;
          color: rgba(255,255,255,.9);
          padding: .95rem 1.65rem; border-radius: 999px;
          border: 1.5px solid rgba(255,255,255,.45);
          background: rgba(255,255,255,.1);
          transition: background .2s ease, border-color .2s ease;
        }
        .hiw-cta-ghost:hover {
          background: rgba(255,255,255,.18);
          border-color: rgba(255,255,255,.7);
        }

        /* ── Mobile ───────────────────────────────────────────── */
        @media (max-width: 640px) {
          .hiw-hero { padding: 6rem 1.25rem 4rem; }
          .hiw-section { padding: 5rem 0 3rem; }
          .hiw-step { grid-template-columns: 52px 1fr; gap: 0 1.5rem; }
          .hiw-step-circle { width: 44px; height: 44px; }
          .hiw-step-circle svg { width: 18px; height: 18px; }
          .hiw-callout-inner { flex-direction: column; gap: 1rem; padding: 2rem 1.5rem; }
          .hiw-managed-section { padding: 4.5rem 1.25rem 5rem; }
          .hiw-cta-card { border-radius: 28px; padding: 4rem 1.5rem 3.5rem; }
        }
      `}</style>
    </>
  );
}
