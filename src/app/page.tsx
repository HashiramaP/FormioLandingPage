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

      // --- Floating chips drift in ---
      gsap.to(".float-chip", {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.9,
      });
      // Continuous gentle bob
      gsap.utils.toArray<HTMLElement>(".float-chip").forEach((el, i) => {
        gsap.to(el, {
          y: "+=12",
          duration: 3 + i * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1.2 + i * 0.2,
        });
      });

      // --- Generic fade+slide on scroll ---
      gsap.utils.toArray<HTMLElement>(".anim-fade").forEach((el) => {
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
      gsap.utils.toArray<HTMLElement>(".section-dark").forEach((el) => {
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
        <span>✦</span>
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

      {/* PAIN — dark */}
      <section className="section-dark">
        <div className="container">
          <div className="section-head">
            <h2 className="anim-fade">
              Vous perdez encore des heures à recopier les mêmes informations
            </h2>
          </div>

          <div className="pain-grid">
            <div className="pain-card anim-fade">
              <div className="pain-icon"><MailIcon /></div>
              <h3>Questionnaires Word envoyés par email</h3>
              <p>Des fichiers incomplets, mal formatés, perdus dans les courriels.</p>
            </div>
            <div className="pain-card anim-fade">
              <div className="pain-icon"><CopyIcon /></div>
              <h3>Copier-coller dans chaque formulaire</h3>
              <p>Les mêmes données retapées dans IMM, Arrima, IRCC… à chaque dossier.</p>
            </div>
            <div className="pain-card anim-fade">
              <div className="pain-icon"><AlertIcon /></div>
              <h3>Erreurs qui coûtent cher</h3>
              <p>Une faute de frappe peut retarder un dossier de plusieurs semaines.</p>
            </div>
            <div className="pain-card anim-fade">
              <div className="pain-icon"><UsersIcon /></div>
              <h3>Impossible de prendre plus de clients</h3>
              <p>Le remplissage manuel est votre goulot d&apos;étranglement.</p>
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
          <span>Fait au Québec ✦</span>
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
