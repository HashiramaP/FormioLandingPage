"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef } from "react";

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
            <img src="/formio-logo.png" alt="Formio logo" width={26} height={26} />
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

      {/* PLATFORM — cream */}
      <section id="platform" className="section-cream">
        <div className="container">
          <div className="section-head">
            <h2 className="anim-fade">
              <span style={{ color: "var(--gray-muted)" }}>Une seule plateforme. </span>
              <span>Zéro copier-coller.</span>
            </h2>
            <p className="anim-fade">
              De la collecte d&apos;information client à la génération automatique de
              formulaires gouvernementaux, Formio gère tout.
            </p>
          </div>

          <div className="pillars">
            <article className="pillar anim-fade">
              <div className="pillar-icon"><ChatIcon /></div>
              <h3>Collecte intelligente</h3>
              <p>
                Envoyez un questionnaire en ligne à vos clients. Les réponses arrivent
                structurées, complètes et prêtes à utiliser.
              </p>
              <ul>
                <li>Questionnaires personnalisables</li>
                <li>Réponses structurées automatiquement</li>
                <li>Suivi des réponses en temps réel</li>
              </ul>
            </article>

            <article className="pillar anim-fade">
              <div className="pillar-icon amber"><FolderIcon /></div>
              <h3>Gestion de dossiers</h3>
              <p>
                Tous vos clients, leurs documents et l&apos;état de leurs dossiers
                dans un seul tableau de bord.
              </p>
              <ul>
                <li>Vue complète de chaque client</li>
                <li>Historique des formulaires générés</li>
                <li>Statut de chaque dossier</li>
              </ul>
            </article>

            <article className="pillar anim-fade">
              <div className="pillar-icon navy"><WandIcon /></div>
              <h3>Génération automatique</h3>
              <p>
                En un clic, Formio génère vos formulaires IMM, Arrima et IRCC
                pré-remplis avec les données du client.
              </p>
              <ul>
                <li>IMM, Arrima, IRCC supportés</li>
                <li>PDF prêt à vérifier et soumettre</li>
                <li>Précision garantie</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — dark */}
      <section id="how" className="section-dark">
        <div className="container">
          <div className="section-head">
            <h2 className="anim-fade">De zéro à formulaire rempli en 3 étapes</h2>
          </div>

          <div className="steps">
            <div className="step anim-fade">
              <div className="step-num">01</div>
              <h3>Envoyez le questionnaire</h3>
              <p>
                Créez un dossier client et envoyez-lui un questionnaire en ligne. Il
                le remplit depuis son navigateur.
              </p>
            </div>
            <div className="step anim-fade">
              <div className="step-num">02</div>
              <h3>Formio structure les données</h3>
              <p>
                Les réponses du client sont automatiquement organisées et validées.
                Plus de Word incomplets.
              </p>
            </div>
            <div className="step anim-fade">
              <div className="step-num">03</div>
              <h3>Générez les formulaires</h3>
              <p>
                En un clic, obtenez vos IMM, Arrima ou IRCC pré-remplis. Il ne reste
                qu&apos;à vérifier et soumettre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — cream */}
      <section id="stats" className="section-cream">
        <div className="container">
          <div className="section-head">
            <h2 className="anim-fade">
              <span style={{ color: "var(--gray-muted)" }}>Des chiffres qui parlent </span>
              <span>d&apos;eux-mêmes.</span>
            </h2>
          </div>

          <div className="stats-row">
            <div className="stat anim-fade">
              <div className="stat-value">80%</div>
              <div className="stat-label">de temps gagné</div>
              <div className="stat-desc">sur le remplissage de formulaires</div>
            </div>
            <div className="stat anim-fade">
              <div className="stat-value">2 min</div>
              <div className="stat-label">par formulaire</div>
              <div className="stat-desc">au lieu de 45+ minutes manuellement</div>
            </div>
            <div className="stat anim-fade">
              <div className="stat-value">0</div>
              <div className="stat-label">erreurs de saisie</div>
              <div className="stat-desc">les données viennent directement du client</div>
            </div>
          </div>
          <p className="stats-microcopy anim-fade">
            Conçu avec et pour des cabinets en droit de l&apos;immigration au Québec.
          </p>
        </div>
      </section>

      {/* FAQ — dark */}
      <section id="faq" className="section-dark">
        <div className="container">
          <div className="section-head">
            <h2 className="anim-fade">Tout ce que vous devez savoir sur Formio</h2>
          </div>

          <div className="faq-list">
            <details className="faq-item anim-fade">
              <summary>Formio est-il sécurisé pour les données de mes clients ?</summary>
              <p className="faq-answer">
                Oui. Formio <strong>ne soumet aucun document</strong> en votre nom et{" "}
                <strong>ne stocke aucune information client de façon permanente</strong>.
                Toutes les données sont chiffrées et traitées selon les normes de
                l&apos;industrie juridique.
              </p>
            </details>
            <details className="faq-item anim-fade">
              <summary>Quels formulaires sont supportés ?</summary>
              <p className="faq-answer">
                Formio supporte les formulaires IMM (immigration fédérale), Arrima
                (Québec) et IRCC. De nouveaux formulaires sont ajoutés régulièrement.
              </p>
            </details>
            <details className="faq-item anim-fade">
              <summary>Combien de temps vais-je réellement gagner ?</summary>
              <p className="faq-answer">
                Nos utilisateurs constatent jusqu&apos;à 80% de temps gagné par
                formulaire. Un formulaire qui prenait 45 minutes se complète en 2
                minutes avec Formio.
              </p>
            </details>
            <details className="faq-item anim-fade">
              <summary>Est-ce que ça fonctionne avec mon workflow actuel ?</summary>
              <p className="faq-answer">
                Oui. Formio remplace vos questionnaires Word et votre copier-coller
                manuel. Vos clients remplissent un formulaire en ligne, et vous
                recevez les données structurées directement dans la plateforme.
              </p>
            </details>
            <details className="faq-item anim-fade">
              <summary>Formio soumet-il les formulaires à ma place ?</summary>
              <p className="faq-answer">
                Non. Formio pré-remplit les formulaires et vous laisse le contrôle
                total pour vérifier et soumettre vous-même. C&apos;est votre
                expertise qui finalise le travail.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="final-cta">
        <div className="container">
          <h2 className="anim-fade">Prêt à moderniser votre cabinet ?</h2>
          <p className="anim-fade">
            Rejoignez les cabinets d&apos;immigration qui ont déjà éliminé le
            copier-coller de leur quotidien.
          </p>
          <div className="hero-cta-row anim-fade">
            <Link href="/demo" className="btn-primary">
              <SparkleIcon /> Voir Formio en action
            </Link>
          </div>
          <div className="final-features anim-fade">
            <span><CheckIcon /> Démonstration personnalisée</span>
            <span><CheckIcon /> Aucun engagement</span>
            <span><CheckIcon /> Support dédié</span>
          </div>
          <div className="final-trust anim-fade">
            Aucun engagement. Démonstration personnalisée de 15 minutes.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-brand">
              <img src="/formio-logo.png" alt="Formio logo" width={32} height={32} />
              Formio
            </a>
            <p>La plateforme moderne pour les professionnels de l&apos;immigration.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Produit</h4>
              <ul>
                <li><a href="#platform">Plateforme</a></li>
                <li><a href="#how">Comment ça marche</a></li>
                <li><a href="#stats">Résultats</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Compte</h4>
              <ul>
                <li><Link href="/demo">Voir Formio en action</Link></li>
                <li><a href="#cta">Essai gratuit</a></li>
                <li><a href="#">Connexion</a></li>
                <li><a href="#">Tableau de bord</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Légal</h4>
              <ul>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Formio. Tous droits réservés.</span>
          <span>Fait au Québec</span>
        </div>
      </footer>
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
