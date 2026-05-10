"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaqRow } from "@/app/FaqRow";
import {
  CheckIcon,
  SparkleIcon,
  BoltIcon,
  ShieldIcon,
  ClockIcon,
  MailIcon,
  CopyIcon,
  AlertIcon,
  UsersIcon,
  ChatIcon,
  FolderIcon,
  WandIcon,
  FileIcon,
  DocIcon,
  GlobeIcon,
  PhoneIcon,
  TabletIcon,
  BuildingIcon,
  PassportIcon,
  UploadIcon,
  BellIcon,
  LockIcon,
} from "@/app/icons";

gsap.registerPlugin(ScrollTrigger);

const clientLogos = [
  { src: "/clients/mbb-avocats.png",   alt: "MBB Avocats",   width: 600, height: 357, wide: false },
  { src: "/clients/tugps-latino.png",  alt: "TUGPS Latino",  width: 600, height: 135, wide: true  },
  { src: "/clients/krishna-gagne.png", alt: "Krishna Gagné", width: 484, height: 363, wide: false },
];

const demandesCategories = [
  {
    id: "temporaire",
    label: "Temporaire",
    colorVar: "#0088ff",
    bgVar: "rgba(0,136,255,0.08)",
    description: "Permis de travail, permis d'études et visas pour séjours temporaires au Canada",
    programs: [
      "Permis de travail post-diplôme (PGWP)",
      "Travailleurs étrangers temporaires (PTET)",
      "Permis de travail ouvert pour conjoint(e)",
      "Permis d'études",
      "Visa de résident temporaire (VRT)",
      "Super visa — parents et grands-parents",
    ],
  },
  {
    id: "permanente",
    label: "Permanente",
    colorVar: "#0e7490",
    bgVar: "rgba(14,116,144,0.08)",
    description: "Toutes les voies d'accès à la résidence permanente fédérale, y compris les PCP",
    programs: [
      "Express Entry — Travailleurs qualifiés (PTQF)",
      "Express Entry — Expérience canadienne (CEC)",
      "Programmes des candidats des provinces (PCP)",
      "Parrainage d'époux et conjoints de fait",
      "Parrainage de parents et grands-parents (PGP)",
      "Motifs humanitaires (CH)",
    ],
  },
  {
    id: "quebecoise",
    label: "Québécoise",
    colorVar: "#ffa946",
    bgVar: "rgba(255,169,70,0.10)",
    description: "Sélection du Québec via Arrima, PEQ et programmes provinciaux exclusifs",
    programs: [
      "Programme régulier des travailleurs qualifiés (PRTQ)",
      "PEQ — volet travailleurs temporaires",
      "PEQ — volet diplômés du Québec",
      "Entrepreneurs et investisseurs immigrants",
      "Regroupement familial (Québec)",
    ],
  },
];

const HERO_LINE_1 = "Arrêtez d'envoyer";
const HERO_LINE_2A = "des";
const HERO_LINE_2B = "Word";
const HERO_LINE_2C = "à vos clients.";

export default function Home() {
  const heroH1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
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
      .to(".bar-seg-1", { scaleY: 1, duration: 0.6, ease: "power2.out" }, 0)
      .to(".bar-seg-2", { scaleY: 1, duration: 0.6, ease: "power2.out" }, 0.6)
      .to(".bar-seg-3", { scaleY: 1, duration: 0.4, ease: "power2.out" }, 1.2)
      .to(
        ".breakdown-label",
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", stagger: 0.12 },
        0
      )
      .to(
        ".checklist-row.blue",
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out", stagger: 0.15 },
        0
      )
      .fromTo(
        ".checklist-row.blue .check-icon",
        { scale: 1.3 },
        { scale: 1, duration: 0.25, ease: "power2.out", stagger: 0.15 },
        0
      )
      .to(
        ".checklist-row.teal",
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out", stagger: 0.2 },
        0.6
      )
      .fromTo(
        ".checklist-row.teal .check-icon",
        { scale: 1.3 },
        { scale: 1, duration: 0.25, ease: "power2.out", stagger: 0.2 },
        0.6
      )
      .to(
        ".checklist-row.gray",
        { opacity: 0.5, x: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 },
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
      .to(".how-eyebrow", { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" })
      .to(
        ".how-head .anim-word",
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.06 },
        0.1
      )
      .to(".how-step-1", { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }, 0.45)
      .to(".how-step-2", { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }, 0.45)
      .to(".how-arrow", { clipPath: "inset(0 0% 0 0)", duration: 0.5, ease: "power2.out" }, 0.85);

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
        const nav = document.querySelector(".nav");
        if (!nav) return;
        if (self.scroll() > 30) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
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
            <Link href="/book-call" className="btn-primary">
              <SparkleIcon /> Commencer mon essai gratuit
            </Link>
            <Link href="/demo" className="btn-secondary">
              Voir Formio en action →
            </Link>
          </div>

        </div>
      </header>

      {/* CLIENTS — hidden until written permission is collected from each cabinet to display their logo */}
      {false && (
      <div className="clients-wrap">
        <section className="clients-panel" aria-labelledby="clients-heading">
          <div className="clients-inner">
            <h2 id="clients-heading" className="clients-h2">
              Utilisé par des avocats en immigration{" "}
              <em className="clients-accent">partout au Québec.</em>
            </h2>

            <div className="clients-row">
              {/* Desktop: static centered list */}
              <ul className="clients-logos clients-static" aria-label="Cabinets clients">
                {clientLogos.map((logo) => (
                  <li key={logo.alt} className="clients-logo-item">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={`clients-logo-img${logo.wide ? " clients-logo-wide" : ""}`}
                    />
                  </li>
                ))}
              </ul>

              {/* Mobile: infinite marquee — logos rendered twice for seamless loop */}
              <div className="clients-marquee" aria-hidden="true">
                <div className="clients-marquee-track">
                  {[...clientLogos, ...clientLogos].map((logo, i) => (
                    <div key={`m-${i}`} className="clients-marquee-item">
                      <Image
                        src={logo.src}
                        alt=""
                        width={logo.width}
                        height={logo.height}
                        className={`clients-logo-img${logo.wide ? " clients-logo-wide" : ""}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <p className="clients-more">et bien d&apos;autres</p>
            </div>
          </div>
        </section>
      </div>
      )}

      {/* PLATFORM/INTEGRATIONS — dark, wisprflow-style layout */}
      <section id="platform" className="section-dark platform-section">
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
              <div className="platform-actions anim-fade">
                <Link href="/book-call" className="btn-ghost-dark">
                  <SparkleIcon /> Voir une démo →
                </Link>
                <Link href="/features/custom-forms" className="btn-link-dark">
                  En savoir plus →
                </Link>
              </div>
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

          <div className="section-cta anim-fade">
            <Link href="/book-call" className="btn-primary">
              <SparkleIcon /> Gagner du temps dès maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — cream, 2-step */}
      <section id="how" className="section-cream how-section">
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
              <h3>Le questionnaire client</h3>
              <p>
                Envoyez un lien à votre client. En quelques minutes, il répond
                à des questions simples depuis son téléphone — sans jargon
                juridique, sans PDF à imprimer.
              </p>
            </div>
          </div>

          {/* Connector — hand-drawn dashed arrow (horizontal on desktop, vertical on mobile) */}
          <div className="how-connector">
            <span className="how-connector-label">
              Formio s&apos;occupe du reste
            </span>
            <svg
              className="how-arrow how-arrow-h"
              viewBox="0 0 300 60"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d="M 10 30 C 55 18, 110 44, 150 30 C 195 16, 240 44, 285 30 L 268 18 M 285 30 L 268 42" />
            </svg>
            <svg
              className="how-arrow-v"
              viewBox="0 0 60 120"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <path d="M 30 6 C 48 26, 12 50, 30 70 C 48 88, 18 102, 30 112 L 22 102 M 30 112 L 38 102" />
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

        <div className="section-cta anim-fade">
          <Link href="/book-call" className="btn-primary">
            <SparkleIcon /> Parler à l&apos;équipe
          </Link>
          <Link href="/how-it-works" className="btn-secondary">
            En voir plus →
          </Link>
        </div>
      </section>

      {/* DEMANDES SUPPORTÉES */}
      <section id="demandes" className="section-cream demandes-section">
        <div className="container">
          <div className="demandes-head anim-fade">
            <span className="demandes-eyebrow">COUVERTURE COMPLÈTE</span>
            <h2 className="demandes-h2">
              Toutes les demandes que{" "}
              <em className="demandes-accent">Formio prend en charge.</em>
            </h2>
            <p className="demandes-lead">
              Temporaires, permanentes ou québécoises — peu importe le type de demande,
              Formio collecte les informations, génère les formulaires et tient les dossiers à jour.
            </p>
          </div>

          <div className="demandes-grid">
            {demandesCategories.map((cat) => (
              <div key={cat.id} className="demandes-card">
                <div className="demandes-card-header" style={{ borderTopColor: cat.colorVar }}>
                  <span className="demandes-cat-label" style={{ color: cat.colorVar }}>
                    {cat.label}
                  </span>
                  <p className="demandes-cat-desc">{cat.description}</p>
                </div>
                <ul className="demandes-prog-list">
                  {cat.programs.map((prog) => (
                    <li key={prog} className="demandes-prog-item">
                      <span className="demandes-prog-dot" style={{ background: cat.colorVar }} />
                      {prog}
                    </li>
                  ))}
                </ul>
                <Link href="/programs" className="demandes-card-footer" style={{ color: cat.colorVar }}>
                  Voir tous les programmes →
                </Link>
              </div>
            ))}
          </div>

          <div className="section-cta anim-fade">
            <Link href="/book-call" className="btn-primary">
              <SparkleIcon /> Voir Formio en action
            </Link>
            <Link href="/programs" className="btn-secondary">
              Tous les programmes →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — hidden until real testimonials are available */}
      {false && <section id="testimonials" className="section-cream testimonials-section">
        <div className="container">
          <div className="testimonials-head anim-fade">
            <span className="testimonials-eyebrow">TÉMOIGNAGES</span>
            <h2>
              <span className="testimonials-line-1">Ce qu&apos;ils</span>
              <br />
              <span className="testimonials-line-2">en disent.</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            <figure className="testimonial-card anim-fade">
              <blockquote>
                <p>&ldquo;Avec Formio, je traite 12&nbsp;dossiers par semaine au lieu de&nbsp;7. J&apos;économise en moyenne 3h30&nbsp;par dossier — c&apos;est l&apos;outil qui a le plus transformé ma pratique.&rdquo;</p>
              </blockquote>
              <figcaption>
                <strong>Marie-Ève Bergeron</strong>
                <span>RCIC · Cabinet Bergeron Immigration · Montréal, QC</span>
              </figcaption>
            </figure>

            <figure className="testimonial-card anim-fade">
              <blockquote>
                <p>&ldquo;Le pré-remplissage automatique m&apos;a fait gagner 4&nbsp;heures par demande. Mes clients soumettent leurs documents depuis leur téléphone en&nbsp;5&nbsp;minutes.&rdquo;</p>
              </blockquote>
              <figcaption>
                <strong>Karim Benali</strong>
                <span>Consultant en immigration agréé · Benali Immigration Services · Toronto, ON</span>
              </figcaption>
            </figure>

            <figure className="testimonial-card anim-fade">
              <blockquote>
                <p>&ldquo;Mes formulaires Arrima sont prêts en 8&nbsp;minutes au lieu de&nbsp;50. En trois mois, j&apos;ai pu accepter deux fois plus de clients.&rdquo;</p>
              </blockquote>
              <figcaption>
                <strong>Isabelle Roy</strong>
                <span>Avocate en immigration · Roy &amp; Associés · Québec, QC</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>}

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
          <FaqRow question="Formio fonctionne-t-il pour Express Entry et les PNP&nbsp;?">
            Oui — Express Entry, tous les Programmes des candidats des provinces, Arrima (Québec), permis d&apos;études, permis de travail et visas visiteurs sont tous pris en charge.
          </FaqRow>
          <FaqRow question="Formio est-il conforme aux exigences du CICC&nbsp;?">
            Oui. Formio utilise un stockage chiffré sur des serveurs canadiens, enregistre le consentement client et maintient des pistes d&apos;audit complètes qui répondent aux exigences du CICC.
          </FaqRow>
          <FaqRow question="Puis-je créer des questionnaires personnalisés par type de demande&nbsp;?">
            Oui — construisez des formulaires depuis zéro, clonez un modèle existant ou importez vos questionnaires Word ou PDF actuels via extraction par IA.
          </FaqRow>
          <FaqRow question="Combien de temps faut-il pour configurer Formio&nbsp;?">
            La plupart des cabinets sont opérationnels en moins de 15 minutes. Pas d&apos;onboarding long ni de formation requise.
          </FaqRow>
          <FaqRow question="Que se passe-t-il avec les données de mes clients&nbsp;?">
            Toutes les données sont chiffrées et hébergées sur des serveurs canadiens. Vous conservez la propriété complète de vos données et pouvez les exporter à tout moment.
          </FaqRow>
          <FaqRow question="Formio peut-il remplacer mes questionnaires Word&nbsp;?">
            Oui. Vos clients remplissent un formulaire interactif depuis leur téléphone, et vous recevez des données structurées prêtes à intégrer dans les formulaires IRCC — plus de pièces jointes Word par courriel.
          </FaqRow>
        </div>

        <div className="section-cta anim-fade">
          <Link href="/book-call" className="btn-primary">
            <SparkleIcon /> Réserver un appel gratuit
          </Link>
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
            <Link href="/book-call" className="btn-primary">
              <SparkleIcon /> Réserver une démo
            </Link>
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

    </>
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

