"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

const HERO_LINE_1 = "Arrêtez d'envoyer";
const HERO_LINE_2A = "des";
const HERO_LINE_2B = "Word";
const HERO_LINE_2C = "à vos clients.";

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);
  const heroH1Ref = useRef<HTMLHeadingElement>(null);

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
      const heroWords = heroH1Ref.current?.querySelectorAll<HTMLElement>(".anim-word");
      if (heroWords && heroWords.length) {
        gsap.to(heroWords, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.1,
        });
      }

      // --- Hero supporting elements ---
      gsap.to(".hero-fade", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
        delay: 0.55,
      });

      // --- Stats breakdown: headline stagger + sequential bar fill + phone fade ---
      const statsWords = document.querySelectorAll<HTMLElement>(".stats-head .anim-word");
      if (statsWords.length) {
        gsap.to(statsWords, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".stats-head",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      const barTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".breakdown",
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
      barTl
        // bar segments fill top-to-bottom
        .to(".bar-seg-1", { scaleY: 1, duration: 0.6, ease: "power2.out" }, 0)
        .to(".bar-seg-2", { scaleY: 1, duration: 0.6, ease: "power2.out" }, 0.6)
        .to(".bar-seg-3", { scaleY: 1, duration: 0.4, ease: "power2.out" }, 1.2)
        // breakdown labels slide in alongside the bar
        .to(
          ".breakdown-label",
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", stagger: 0.12 },
          0
        )
        // Blue checklist rows — start when seg 1 begins, with checkmark flash
        .to(
          ".checklist-row.blue",
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.15,
          },
          0
        )
        .fromTo(
          ".checklist-row.blue .check-icon",
          { scale: 1.3 },
          { scale: 1, duration: 0.25, ease: "power2.out", stagger: 0.15 },
          0
        )
        // Purple checklist rows — start when seg 2 begins, with checkmark flash
        .to(
          ".checklist-row.teal",
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.2,
          },
          0.6
        )
        .fromTo(
          ".checklist-row.teal .check-icon",
          { scale: 1.3 },
          { scale: 1, duration: 0.25, ease: "power2.out", stagger: 0.2 },
          0.6
        )
        // Gray checklist rows — fade to 50% together when seg 3 begins
        .to(
          ".checklist-row.gray",
          {
            opacity: 0.5,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.08,
          },
          1.2
        );

      // --- 2-step "how it works" section timeline ---
      const howTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".how-section",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
      howTl
        .to(".how-eyebrow", {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          ".how-head .anim-word",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
            stagger: 0.06,
          },
          0.1
        )
        .to(
          ".how-step-1",
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          0.45
        )
        .to(
          ".how-step-2",
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          0.45
        )
        .to(
          ".how-arrow",
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.5,
            ease: "power2.out",
          },
          0.85
        );

      // --- Generic fade+slide on scroll ---
      (gsap.utils.toArray(".anim-fade") as HTMLElement[]).forEach((el: HTMLElement) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Dark "card" sections scale-up ---
      (gsap.utils.toArray(".section-dark") as HTMLElement[]).forEach((el: HTMLElement) => {
        gsap.fromTo(
          el,
          { scale: 0.97, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 50%",
              scrub: false,
            },
          }
        );
      });

      // --- Nav scrolled state ---
      ScrollTrigger.create({
        start: 30,
        end: 99999,
        onUpdate: (self: any) => {
          if (!navRef.current) return;
          if (self.scroll() > 30) navRef.current.classList.add("scrolled");
          else navRef.current.classList.remove("scrolled");
        },
      });
    };
    tryInit();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.14.2/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />

      {/* Announcement bar */}
      <div className="announce">
        Conçu avec et pour des cabinets en droit de l&apos;immigration au Québec.
        <Link href="/demo">Commencer mon essai →</Link>
      </div>

      {/* Floating nav */}
      <div className="nav-wrap">
        <nav className="nav" ref={navRef}>
          <a href="#" className="nav-brand">
            <img src="/formio-logo.svg" alt="Formio logo" width={26} height={26} />
            Formio
          </a>
          <div className="nav-center">
            <div className="nav-links">
              <a href="#platform">Plateforme</a>
              <a href="#how">Comment ça marche</a>
              <a href="#stats">Résultats</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="nav-right">
            <a href="#" className="nav-secondary">Connexion</a>
            <span className="nav-divider" aria-hidden />
            <Link href="/demo" className="nav-cta">
              <SparkleIcon /> Commencer mon essai
            </Link>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="container">
          <h1 ref={heroH1Ref}>
            <span className="head-muted">{splitWords(HERO_LINE_1)}</span>
            <span className="head-muted">
              {splitWords(HERO_LINE_2A)}{" "}
              <span className="head-brand">{splitWords(HERO_LINE_2B)}</span>{" "}
              {splitWords(HERO_LINE_2C)}
            </span>
          </h1>

          <p className="hero-sub hero-fade anim-fade">
            La plateforme qui collecte les informations de vos clients de
            manière plus intelligente et plus efficace, et génère automatiquement
            tous les documents légaux.
          </p>

          <div className="hero-cta-row hero-fade anim-fade">
            <a href="#cta" className="btn-primary">
              <SparkleIcon /> Essayer gratuitement 30 jours
            </a>
            <Link href="/demo" className="btn-secondary">
              Voir Formio en action →
            </Link>
          </div>

          <div className="trust-row hero-fade anim-fade">
            <div className="trust-dots">
              <span /><span /><span /><span />
            </div>
            Utilisé par des cabinets d&apos;immigration au Québec
          </div>
        </div>
      </header>

      {/* PLATFORM/INTEGRATIONS — dark, wisprflow-style layout */}
      <section className="section-dark platform-section">
        <div className="platform-container">
          <div className="platform-left">
            <div className="device-chips">
              <span className="device-chip"><GlobeIcon /> Web</span>
              <span className="device-chip"><PhoneIcon /> Mobile</span>
              <span className="device-chip"><TabletIcon /> Tablette</span>
            </div>

            <div className="platform-text">
              <h2 className="anim-fade">
                Vos clients remplissent leur dossier{" "}
                <span className="platform-em">où qu&apos;ils soient.</span>
              </h2>
              <p className="anim-fade">
                Web, mobile ou tablette — Formio s&apos;adapte à n&apos;importe
                quel appareil pour offrir à vos clients une expérience fluide et
                accessible.
              </p>
              <Link href="/demo" className="btn-ghost-dark anim-fade">
                <SparkleIcon /> Voir Formio en action →
              </Link>
            </div>
          </div>

          <div className="platform-right">
            {/* Decorative organic blob shapes behind the phone */}
            <svg
              className="blob blob-main"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 500"
              aria-hidden
            >
              <path
                fill="#0e7490"
                fillOpacity="1"
                d="M280,40 C340,10 420,30 460,80 C500,130 480,200 510,260 C545,325 600,340 590,410 C578,478 510,500 445,495 C385,490 355,530 290,518 C225,506 175,460 148,400 C120,338 145,275 118,215 C90,152 40,130 42,68 C44,8 110,-10 165,18 C210,42 220,70 280,40 Z"
              />
            </svg>
            <svg
              className="blob blob-echo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 500"
              aria-hidden
            >
              <path
                fill="#0e7490"
                fillOpacity="0.35"
                d="M280,40 C340,10 420,30 460,80 C500,130 480,200 510,260 C545,325 600,340 590,410 C578,478 510,500 445,495 C385,490 355,530 290,518 C225,506 175,460 148,400 C120,338 145,275 118,215 C90,152 40,130 42,68 C44,8 110,-10 165,18 C210,42 220,70 280,40 Z"
              />
            </svg>

            <div className="device-stack anim-fade">
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-status">
                    <span>9:41</span>
                    <span className="phone-status-icons">●●● ◐</span>
                  </div>
                  <div className="phone-app-header">
                    <div className="phone-logo-mark">F</div>
                    <div className="phone-app-title">
                      <strong>Formio</strong>
                      <span>Question 12 / 24</span>
                    </div>
                  </div>
                  <div className="phone-progress">
                    <div className="phone-progress-fill" />
                  </div>
                  <div className="phone-question">
                    <span className="phone-eyebrow">INFORMATIONS PERSONNELLES</span>
                    <h4>Quel est votre lieu de naissance&nbsp;?</h4>
                    <div className="phone-input">
                      <span>Montréal, Québec, Canada</span>
                      <span className="phone-check"><CheckIcon /></span>
                    </div>
                    <div className="phone-hint">Auto-rempli depuis votre passeport</div>
                  </div>
                  <div className="phone-cta">
                    Suivant <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / BREAKDOWN — cream */}
      <section id="stats" className="section-cream stats-section">
        <div className="container">
          <div className="stats-head">
            <h2>
              <span className="stats-line-1">
                <span className="stats-line-1-inner">
                  {splitWords("70% du dossier")}
                  <svg
                    className="headline-underline"
                    viewBox="0 0 400 18"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M 8 10 C 50 2, 95 16, 135 8 C 180 0, 220 15, 268 7 C 310 1, 355 13, 392 6"
                      stroke="#0e7490"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
              <span className="stats-line-2">
                {splitWords("déjà rempli avant que votre client commence.")}
              </span>
            </h2>
          </div>

          <div className="breakdown">
            {/* LEFT — segmented bar + labels */}
            <div className="breakdown-left">
              <div className="breakdown-bar">
                <div className="bar-seg bar-seg-1" />
                <div className="bar-seg bar-seg-2" />
                <div className="bar-seg bar-seg-3" />
              </div>
              <div className="breakdown-labels">
                <div className="breakdown-label breakdown-label-1">
                  <div className="bd-icon blue"><PassportIcon /></div>
                  <div className="bd-text">
                    <div className="bd-header">
                      <h3>Extrait automatiquement</h3>
                      <span className="bd-badge blue">~35%</span>
                    </div>
                    <p>
                      Depuis le passeport, CV, permis de séjour — nom, date de
                      naissance, adresse, historique…
                    </p>
                  </div>
                </div>
                <div className="breakdown-label breakdown-label-2">
                  <div className="bd-icon teal"><CheckIcon /></div>
                  <div className="bd-text">
                    <div className="bd-header">
                      <h3>Questions simples</h3>
                      <span className="bd-badge teal">~35%</span>
                    </div>
                    <p>
                      Oui / Non. Cases à cocher. Votre client répond en quelques
                      secondes.
                    </p>
                  </div>
                </div>
                <div className="breakdown-label breakdown-label-3">
                  <div className="bd-icon gray"><SparkleIcon /></div>
                  <div className="bd-text">
                    <div className="bd-header">
                      <h3>Ce qui reste</h3>
                      <span className="bd-badge gray">~30%</span>
                    </div>
                    <p>
                      Seulement les vraies questions complexes. Ce pour quoi vous
                      êtes payé.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — animated immigration checklist */}
            <div className="breakdown-right">
              <div className="checklist">
                <div className="checklist-header">
                  DOSSIER TYPE — RÉSIDENCE PERMANENTE
                </div>
                <ul>
                  {/* Blue — auto-extracted from documents */}
                  <li className="checklist-row blue">
                    <span className="check-icon blue"><CheckIcon /></span>
                    <span className="q-text">Nom complet</span>
                    <span className="q-badge blue">Passeport</span>
                  </li>
                  <li className="checklist-row blue">
                    <span className="check-icon blue"><CheckIcon /></span>
                    <span className="q-text">Date de naissance</span>
                    <span className="q-badge blue">Passeport</span>
                  </li>
                  <li className="checklist-row blue">
                    <span className="check-icon blue"><CheckIcon /></span>
                    <span className="q-text">Lieu de naissance</span>
                    <span className="q-badge blue">Passeport</span>
                  </li>
                  <li className="checklist-row blue">
                    <span className="check-icon blue"><CheckIcon /></span>
                    <span className="q-text">Nationalité</span>
                    <span className="q-badge blue">Passeport</span>
                  </li>
                  <li className="checklist-row blue">
                    <span className="check-icon blue"><CheckIcon /></span>
                    <span className="q-text">Historique professionnel</span>
                    <span className="q-badge blue">CV</span>
                  </li>

                  {/* Teal — simple yes/no */}
                  <li className="checklist-row teal">
                    <span className="check-icon teal"><CheckIcon /></span>
                    <span className="q-text">Avez-vous déjà été refusé&nbsp;?</span>
                    <span className="q-badge teal">Oui / Non</span>
                  </li>
                  <li className="checklist-row teal">
                    <span className="check-icon teal"><CheckIcon /></span>
                    <span className="q-text">Êtes-vous marié(e)&nbsp;?</span>
                    <span className="q-badge teal">Oui / Non</span>
                  </li>
                  <li className="checklist-row teal">
                    <span className="check-icon teal"><CheckIcon /></span>
                    <span className="q-text">Avez-vous des enfants&nbsp;?</span>
                    <span className="q-badge teal">Oui / Non</span>
                  </li>
                  <li className="checklist-row teal">
                    <span className="check-icon teal"><CheckIcon /></span>
                    <span className="q-text">Parlez-vous français ou anglais&nbsp;?</span>
                    <span className="q-badge teal">Oui / Non</span>
                  </li>

                  {/* Gray — complex, unchecked */}
                  <li className="checklist-row gray">
                    <span className="check-icon empty" />
                    <span className="q-text">Décrivez votre parcours d&apos;immigration</span>
                  </li>
                  <li className="checklist-row gray">
                    <span className="check-icon empty" />
                    <span className="q-text">Lettre de motivation</span>
                  </li>
                  <li className="checklist-row gray">
                    <span className="check-icon empty" />
                    <span className="q-text">Preuve de liens avec le pays d&apos;origine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="stats-microcopy">
            Conçu avec et pour des cabinets en droit de l&apos;immigration au
            Québec.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS — cream, 2-step */}
      <section id="platform" className="section-cream how-section">
        <div className="how-head">
          <span className="how-eyebrow">COMMENT ÇA MARCHE</span>
          <h2>
            <span className="how-line-1">{splitWords("Deux étapes,")}</span>
            {" "}
            <span className="how-line-2">{splitWords("c'est tout")}</span>
          </h2>
        </div>

        <div className="how-grid">
          {/* Step 1 */}
          <div className="how-step how-step-1">
            <div className="how-big-num">01</div>
            <div className="how-content">
              <h3>Le formulaire d&apos;accueil</h3>
              <p>
                Envoyez un lien à votre client. En quelques minutes, il répond
                à des questions simples depuis son téléphone — sans jargon
                juridique, sans PDF à imprimer.
              </p>
            </div>
          </div>

          {/* Connector — hand-drawn dashed arrow */}
          <div className="how-connector">
            <span className="how-connector-label">
              Formio s&apos;occupe du reste
            </span>
            <svg
              className="how-arrow"
              viewBox="0 0 300 60"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d="M 10 30 C 55 18, 110 44, 150 30 C 195 16, 240 44, 285 30 L 268 18 M 285 30 L 268 42" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="how-step how-step-2">
            <div className="how-big-num">02</div>
            <div className="how-content">
              <h3>Les documents légaux générés</h3>
              <p>
                Formio extrait les réponses, les croise avec les données des
                documents de votre client, et génère automatiquement les
                formulaires IMM, Arrima ou IRCC — pré-remplis, prêts à
                vérifier.
              </p>
            </div>
          </div>
        </div>

        <p className="how-microcopy">
          Conçu avec et pour des cabinets en droit de l&apos;immigration au
          Québec.
        </p>
      </section>

      {/* FAQ — cream, editorial */}
      <section id="faq" className="section-cream faq-section">
        <div className="faq-head">
          <span className="faq-eyebrow">FAQ</span>
          <h2>
            <span className="faq-line-1">Tout ce que vous</span>
            <br />
            <span className="faq-line-2">voulez savoir.</span>
          </h2>
        </div>

        <div className="faq-list">
          <FaqRow question="Formio est-il sécurisé pour les données de mes clients&nbsp;?">
            Oui. Formio <strong>ne soumet aucun document</strong> en votre nom
            et{" "}
            <strong>
              ne stocke aucune information client de façon permanente
            </strong>
            . Toutes les données sont chiffrées et traitées selon les normes
            de l&apos;industrie juridique.
          </FaqRow>
          <FaqRow question="Quels formulaires sont supportés&nbsp;?">
            Formio supporte les formulaires IMM (immigration fédérale), Arrima
            (Québec) et IRCC. De nouveaux formulaires sont ajoutés
            régulièrement.
          </FaqRow>
          <FaqRow question="Combien de temps vais-je réellement gagner&nbsp;?">
            Nos utilisateurs constatent jusqu&apos;à 80% de temps gagné par
            formulaire. Un formulaire qui prenait 45 minutes se complète en 2
            minutes avec Formio.
          </FaqRow>
          <FaqRow question="Est-ce que ça fonctionne avec mon workflow actuel&nbsp;?">
            Oui. Formio remplace vos questionnaires Word et votre copier-coller
            manuel. Vos clients remplissent un formulaire en ligne, et vous
            recevez les données structurées directement dans la plateforme.
          </FaqRow>
          <FaqRow question="Formio soumet-il les formulaires à ma place&nbsp;?">
            Non. Formio pré-remplit les formulaires et vous laisse le contrôle
            total pour vérifier et soumettre vous-même. C&apos;est votre
            expertise qui finalise le travail.
          </FaqRow>
        </div>
      </section>

      {/* FINAL CTA — turquoise bordered card with flat results layout */}
      <section id="cta" className="final-cta">
        <div className="final-cta-card anim-fade">
          <div className="final-cta-inner">
            <h2 className="anim-fade">
            Commencer à voir des résultats
            <br />
            dès votre premier mois.
          </h2>

          <div className="final-cta-row anim-fade">
            <a href="#" className="btn-primary">
              <SparkleIcon /> Réserver une démo
            </a>
            <span className="final-cta-note">
              Aucun engagement · Aucune carte requise
            </span>
          </div>

          <div className="final-stats anim-fade">
            <div className="final-stat">
              <div className="final-stat-value">4h</div>
              <div className="final-stat-label">Sauvées par demande</div>
            </div>
            <div className="final-stat">
              <div className="final-stat-value">70%+</div>
              <div className="final-stat-label">Automatisés</div>
            </div>
            <div className="final-stat">
              <div className="final-stat-value">0$</div>
              <div className="final-stat-label">Jusqu&apos;à la satisfaction</div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <h4>Entreprise</h4>
            <ul>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Carrières</a></li>
              <li><a href="#">Partenaires</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Produit</h4>
            <ul>
              <li><a href="#platform">Plateforme</a></li>
              <li><a href="#how">Comment ça marche</a></li>
              <li><a href="#stats">Résultats</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><Link href="/demo">Démo</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Ressources</h4>
            <ul>
              <li><a href="#">Guide d&apos;utilisation</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Tableau de bord</a></li>
              <li><a href="#">Connexion</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-mark">
          <img
            src="/formio-logo.svg"
            alt=""
            className="footer-mark-icon"
            aria-hidden
          />
          <span className="footer-mark-text">Formio</span>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© Formio {new Date().getFullYear()}</span>
            <a href="#">Conditions</a>
            <a href="#">Confidentialité</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/formioca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* -------- FAQ row -------- */
function FaqRow({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`faq-row anim-fade ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span dangerouslySetInnerHTML={{ __html: question }} />
        <span className="faq-plus" aria-hidden>
          <span />
          <span />
        </span>
      </button>
      <div
        className="faq-answer-wrap"
        style={{
          height: open ? contentRef.current?.scrollHeight ?? 0 : 0,
        }}
      >
        <div ref={contentRef} className="faq-answer">
          {children}
        </div>
      </div>
    </div>
  );
}

/* -------- helpers -------- */
function splitWords(text: string) {
  return text.split(" ").map((w, i) => (
    <span className="anim-word" key={`${w}-${i}`}>
      {w}
      {i < text.split(" ").length - 1 ? "\u00A0" : ""}
    </span>
  ));
}

/* -------- inline icons -------- */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function WandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M15 9h0M17.8 6.2 19 5M3 21l9-9M12.2 6.2 11 5" />
    </svg>
  );
}
function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
}
function TabletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="9" y1="6" x2="9" y2="6" />
      <line x1="15" y1="6" x2="15" y2="6" />
      <line x1="9" y1="10" x2="9" y2="10" />
      <line x1="15" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="9" y2="14" />
      <line x1="15" y1="14" x2="15" y2="14" />
      <path d="M10 22v-4h4v4" />
    </svg>
  );
}
function PassportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M8 18h8" />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
