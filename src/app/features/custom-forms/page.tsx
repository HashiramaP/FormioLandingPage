import type { Metadata } from "next";
import Link from "next/link";
import { FeatureTabs } from "./FeatureTabs";
import { FaqRow } from "@/app/FaqRow";
import {
  SparkleIcon,
  CalendarIcon,
  FolderIcon,
  WandIcon,
  UploadIcon,
  BoltIcon,
  UsersIcon,
  CopyIcon,
  CheckIcon,
} from "@/app/icons";

export const metadata: Metadata = {
  title: "Questionnaires clients personnalisés pour cabinets d'immigration | Formio",
  description:
    "Construisez, importez ou modifiez vos questionnaires pour n'importe quelle demande fédérale ou québécoise. Formio s'adapte au flux de travail de votre cabinet.",
  alternates: { canonical: "https://formio.ca/features/custom-forms" },
};

const faqItems = [
  {
    question: "Formio supporte-t-il tous les types de demandes d'immigration ?",
    answer:
      "Oui. Formio couvre toutes les demandes fédérales et québécoises — résidence permanente, permis de travail, permis d'études, Arrima, Express Entry, regroupement familial, programmes provinciaux. Construisez un questionnaire distinct par programme ou partez d'un modèle et adaptez-le.",
  },
  {
    question: "Puis-je importer mon questionnaire Word existant ?",
    answer:
      "Oui. Téléversez votre fichier Word ou PDF. L'IA Gemini extrait chaque question, la mappe au bon type de champ, et construit un questionnaire numérique modifiable. Un questionnaire standard de 30 à 50 questions est prêt en moins de 3 minutes.",
  },
  {
    question: "Les questionnaires personnalisés génèrent-ils les documents IRCC automatiquement ?",
    answer:
      "Oui. La génération automatique de formulaires IMM, Arrima et IRCC fonctionne sur chaque questionnaire personnalisé sans configuration supplémentaire. Les données restent toujours structurées selon le système de types Formio.",
  },
  {
    question: "Les différents consultants de mon cabinet peuvent-ils utiliser le même questionnaire ?",
    answer:
      "Oui. Tous les questionnaires personnalisés sont partagés avec chaque consultant de votre équipe dès la publication. Créez le questionnaire une fois, il est disponible immédiatement pour tout le cabinet.",
  },
  {
    question: "Puis-je avoir des questionnaires différents pour différents types de demande ?",
    answer:
      "Oui. Créez un questionnaire distinct par programme, chacun avec ses propres questions et sections. Vous pouvez aussi créer un questionnaire de base pour le cabinet et le lier à vos questionnaires personnalisés avec un contrôle de basculement par section.",
  },
  {
    question: "Combien de temps prend l'import d'un questionnaire Word ?",
    answer:
      "Moins de 3 minutes pour un questionnaire standard. Gemini fait l'extraction, vous vérifiez les champs mappés et publiez. Aucune recopie manuelle, aucun paramétrage de type de champ à la main.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const capabilityCards = [
  {
    Icon: FolderIcon,
    heading: "Dupliquer un modèle existant",
    body: "Partez d'un modèle pré-construit pour n'importe quel type de demande. Renommez, reformulez, ajoutez des sections. Le modèle d'origine reste intact. 10 à 20 minutes, pas une après-midi.",
  },
  {
    Icon: WandIcon,
    heading: "Construire de zéro",
    body: "Composez votre questionnaire question par question depuis la bibliothèque de types Formio. Texte libre, oui/non, date, choix multiple, téléversement de document. Le type de champ est toujours contrôlé.",
  },
  {
    Icon: UploadIcon,
    heading: "Importer depuis Word ou PDF",
    body: "Téléversez votre fichier existant. Gemini extrait chaque question, la mappe au bon type de champ, et construit un questionnaire numérique modifiable. Moins de 3 minutes pour un questionnaire standard.",
  },
  {
    Icon: BoltIcon,
    heading: "Activer ou désactiver des sections",
    body: "Créez un questionnaire de base au niveau du cabinet. Liez-le à vos questionnaires personnalisés et activez ou désactivez des sections entières par programme, avec un contrôle de basculement par section.",
  },
];

const row3Items = [
  {
    Icon: UsersIcon,
    heading: "Créez une fois, tout le cabinet en bénéficie",
    body: "Chaque questionnaire publié est accessible immédiatement à tous les consultants de votre équipe. Aucune synchronisation manuelle, aucun partage de fichier.",
  },
  {
    Icon: CopyIcon,
    heading: "Aucune divergence de versions",
    body: "Un seul questionnaire par programme dans Formio. Plus de fichiers Word qui divergent entre collègues. Tous travaillent depuis la même source.",
  },
  {
    Icon: BoltIcon,
    heading: "Questionnaire de base partagé",
    body: "Créez une source commune pour les sections transversales de votre cabinet. Liez-la à vos questionnaires personnalisés avec un contrôle de basculement par section.",
  },
];

const beforeItems = [
  "Recopiez chaque question manuellement",
  "Choisissez le type de champ pour chaque question",
  "Configurez les dépendances conditionnelles",
  "Relisez l'ensemble pour détecter les erreurs de mapping",
  "Recommencez si le questionnaire évolue",
];

const afterItems = [
  "Téléversez votre fichier Word ou PDF",
  "Gemini extrait et mappe chaque question",
  "Vérifiez les champs mappés en 1 minute",
  "Publiez pour l'ensemble de votre cabinet",
];

export default function CustomFormsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <header className="cf2-hero section-cream">
        <div className="cf2-hero-inner container">
          <h1 className="cf2-h1">
            Des questionnaires conçus pour{" "}
            <em className="cf2-accent">votre</em> cabinet.
          </h1>
          <p className="cf2-lead">
            Chaque cabinet d&apos;immigration a ses propres pratiques. Formio s&apos;y adapte:
            partez d&apos;un modèle pré-construit, importez vos questionnaires Word existants,
            ou construisez le vôtre de zéro. Toutes les demandes fédérales et québécoises
            sont couvertes.
          </p>
          <div className="cf2-cta-row">
            <Link href="/book-call" className="btn-primary">
              <SparkleIcon /> Réserver une démo
            </Link>
            <Link href="/demo" className="btn-secondary">
              Voir Formio en action →
            </Link>
          </div>
        </div>
      </header>

      {/* ANCHOR NAV */}
      <nav className="cf2-anav" aria-label="Sections de la page">
        <div className="cf2-anav-inner">
          <a href="#ce-que" className="cf2-anav-link">Ce que vous pouvez faire</a>
          <a href="#demandes" className="cf2-anav-link">Toutes les demandes</a>
          <a href="#cabinet" className="cf2-anav-link">Partagé au cabinet</a>
          <a href="#construire" className="cf2-anav-link">Trois façons de construire</a>
          <a href="#comparaison" className="cf2-anav-link">Import vs manuel</a>
          <a href="#faq" className="cf2-anav-link">FAQ</a>
        </div>
      </nav>

      {/* SECTION 1 — 4-up icon card grid */}
      <section id="ce-que" className="cf2-section section-cream">
        <div className="container">
          <div className="cf2-section-head">
            <h2 className="cf2-h2">Quatre façons de prendre le contrôle.</h2>
          </div>
          <div className="cf2-grid4">
            {capabilityCards.map(({ Icon, heading, body }) => (
              <div key={heading} className="cf2-card">
                <div className="cf2-card-icon">
                  <Icon />
                </div>
                <h3 className="cf2-card-h">{heading}</h3>
                <p className="cf2-card-p">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — dark panel + turquoise panel, stacked card treatment */}
      <div className="cf2-panels-wrap">
      <section id="demandes" className="cf2-dark-panel">
        <div className="cf2-split container">
          <div className="cf2-split-copy">
            <h2>Adapté à n&apos;importe quelle demande fédérale ou québécoise.</h2>
            <p>
              Formio ne se limite pas à un ensemble fixe de programmes. Résidence
              permanente, permis de travail, permis d&apos;études, regroupement familial,
              Arrima, Express Entry, programmes provinciaux — construisez un questionnaire
              distinct pour chaque type de dossier que votre cabinet traite.
            </p>
            <p>
              Chaque questionnaire hérite des types de champs Formio. Les données restent
              toujours structurées, quelle que soit la personnalisation. La génération
              automatique de documents légaux fonctionne sur chaque questionnaire
              personnalisé, sans configuration supplémentaire.
            </p>
            <Link href="/book-call" className="btn-primary cf2-split-cta">
              <SparkleIcon /> Parler à l&apos;équipe
            </Link>
          </div>

          <div className="cf2-split-visual">
            <div className="cf2-mockup-wrap">
              <div className="cf2-mockup-chrome">
                <span className="cf2-chrome-dot" />
                <span className="cf2-chrome-dot" />
                <span className="cf2-chrome-dot" />
                <span className="cf2-chrome-url">formio.ca/constructeur</span>
              </div>
              <div className="cf2-mockup-layout">
                <div className="cf2-mockup-sidebar">
                  <div className="cf2-sidebar-label">Mes questionnaires</div>
                  {[
                    { name: "Résidence permanente", active: false },
                    { name: "Permis de travail", active: false },
                    { name: "Arrima — PEQ", active: true },
                    { name: "Regroupement familial", active: false },
                    { name: "Permis d'études", active: false },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className={`cf2-sidebar-item ${item.active ? "cf2-sidebar-item-active" : ""}`}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className="cf2-mockup-main">
                  <div className="cf2-mockup-main-header">
                    Arrima — PEQ
                    <span className="cf2-status-badge">Publié</span>
                  </div>
                  {[
                    { n: "01", q: "Quel est votre statut au Québec ?" },
                    { n: "02", q: "Date d'arrivée au Québec" },
                    { n: "03", q: "Avez-vous un diplôme québécois ?" },
                    { n: "04", q: "Employeur actuel au Québec" },
                    { n: "05", q: "Niveau de français (DELF/TEF)" },
                  ].map((row) => (
                    <div key={row.n} className="cf2-mockup-q-row">
                      <span className="cf2-q-num">{row.n}</span>
                      <span className="cf2-q-text">{row.q}</span>
                    </div>
                  ))}
                  <div className="cf2-mockup-add">+ Ajouter une question</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cf2-teal-panel">
        <div className="cf2-teal-inner">
          <h3 className="cf2-teal-h">Voyez Formio sur vos propres dossiers.</h3>
          <div className="cf2-prog-pills">
            <span className="cf2-prog-pill">Express Entry</span>
            <span className="cf2-prog-pill">PEQ</span>
            <span className="cf2-prog-pill">CSQ</span>
            <span className="cf2-prog-pill">Parrainage</span>
            <span className="cf2-prog-pill">Permis de travail</span>
          </div>
          <div className="cf2-teal-cta-wrap">
            <Link href="/book-call" className="btn-teal">
              <CalendarIcon /> Réserver une démo
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* SECTION 3 — horizontal 3-column feature row */}
      <section id="cabinet" className="cf2-section section-cream">
        <div className="container">
          <div className="cf2-section-head">
            <h2 className="cf2-h2">Partagé au sein de votre cabinet. Immédiatement.</h2>
          </div>
          <div className="cf2-row3">
            {row3Items.map(({ Icon, heading, body }) => (
              <div key={heading} className="cf2-row3-item">
                <div className="cf2-row3-icon">
                  <Icon />
                </div>
                <h3 className="cf2-row3-h">{heading}</h3>
                <p className="cf2-row3-p">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — tabbed: three ways to build */}
      <section id="construire" className="cf2-section cf2-tabs-section">
        <div className="container">
          <div className="cf2-section-head">
            <h2 className="cf2-h2">Trois façons de construire un questionnaire.</h2>
            <p className="cf2-section-lead">
              Choisissez la méthode qui correspond à votre situation. Les trois
              aboutissent au même résultat: un questionnaire numérique publié pour
              tout votre cabinet.
            </p>
          </div>
          <FeatureTabs />
        </div>
      </section>

      {/* SECTION 5 — before/after comparison */}
      <section id="comparaison" className="cf2-section section-cream">
        <div className="container">
          <div className="cf2-section-head">
            <h2 className="cf2-h2">La différence entre une après-midi et une pause-café.</h2>
          </div>
          <div className="cf2-compare">
            <div className="cf2-compare-col cf2-compare-before">
              <div className="cf2-compare-header">
                <span className="cf2-compare-label cf2-compare-label-before">Construction manuelle</span>
              </div>
              <ul className="cf2-compare-list">
                {beforeItems.map((item) => (
                  <li key={item} className="cf2-compare-item cf2-compare-item-before">
                    <span className="cf2-compare-x" aria-hidden>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="cf2-compare-time cf2-compare-time-before">
                <div className="cf2-compare-time-value">2 à 4 heures</div>
                <div className="cf2-compare-time-label">par questionnaire</div>
              </div>
            </div>

            <div className="cf2-compare-col cf2-compare-after">
              <div className="cf2-compare-header">
                <span className="cf2-compare-label cf2-compare-label-after">Import IA Gemini</span>
              </div>
              <ul className="cf2-compare-list">
                {afterItems.map((item) => (
                  <li key={item} className="cf2-compare-item cf2-compare-item-after">
                    <span className="cf2-compare-check" aria-hidden>
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="cf2-compare-time cf2-compare-time-after">
                <div className="cf2-compare-time-value">Moins de 3 min</div>
                <div className="cf2-compare-time-label">par questionnaire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA CARD */}
      <section className="cf2-cta-section">
        <div className="container">
          <div className="cf2-cta-card">
            <div className="cf2-cta-glow" aria-hidden />
            <h2 className="cf2-cta-h2">
              Commencer à construire vos questionnaires.
              <br />
              Sans engagement.
            </h2>
            <p className="cf2-cta-sub">Aucune carte de crédit requise. Configuré en 15 minutes.</p>
            <div className="cf2-cta-btns">
              <Link href="/book-call" className="btn-primary">
                <SparkleIcon /> Réserver une démo
              </Link>
              <Link href="/demo" className="cf2-cta-ghost">
                Voir Formio en action →
              </Link>
            </div>
            <div className="cf2-cta-stats">
              <div className="cf2-cta-stat">
                <div className="cf2-cta-stat-value">&lt; 3 min</div>
                <div className="cf2-cta-stat-label">Import Word</div>
              </div>
              <div className="cf2-cta-stat">
                <div className="cf2-cta-stat-value">4h</div>
                <div className="cf2-cta-stat-label">Économisées par demande</div>
              </div>
              <div className="cf2-cta-stat">
                <div className="cf2-cta-stat-value">100%</div>
                <div className="cf2-cta-stat-label">Fédéral et québécois</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="cf2-section cf2-faq-section section-cream">
        <div className="cf2-faq-inner container">
          <div className="cf2-faq-head">
            <h2 className="cf2-h2">Questions fréquentes.</h2>
          </div>
          <div className="faq-list cf2-faq-list">
            {faqItems.map(({ question, answer }) => (
              <FaqRow key={question} question={question}>
                {answer}
              </FaqRow>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Disable GSAP initial-state for elements without GSAP on this page */
        .anim-fade { opacity: 1 !important; transform: none !important; }
        .anim-word { opacity: 1 !important; transform: none !important; }

        /* ---- Hero ---- */
        .cf2-hero { padding: 8rem 1.5rem 5rem; }
        .cf2-hero-inner { display: flex; flex-direction: column; gap: 2rem; max-width: 860px; }
        .cf2-h1 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.8rem, 6.5vw, 5rem);
          line-height: 1.04;
          letter-spacing: -0.03em;
          font-weight: 500;
          color: var(--dark);
          margin: 0;
        }
        .cf2-accent {
          font-style: italic;
          color: var(--turquoise);
        }
        .cf2-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.15rem;
          color: var(--gray-text);
          line-height: 1.65;
          max-width: 62ch;
          margin: 0;
        }
        .cf2-cta-row {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        /* ---- Anchor nav ---- */
        .cf2-anav {
          background: var(--cream);
          border-bottom: 1px solid var(--border-soft);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .cf2-anav::-webkit-scrollbar { display: none; }
        .cf2-anav-inner {
          display: flex;
          gap: 0.4rem;
          padding: 0.85rem 1.5rem;
          max-width: 1180px;
          margin: 0 auto;
          white-space: nowrap;
        }
        .cf2-anav-link {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--gray-muted);
          padding: 0.45rem 1rem;
          border-radius: 999px;
          border: 1.5px solid var(--border-soft);
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          display: inline-block;
        }
        .cf2-anav-link:hover {
          color: var(--dark);
          border-color: var(--dark);
          background: rgba(10, 19, 34, 0.04);
        }

        /* ---- Section scaffold ---- */
        .cf2-section { padding-top: 6rem; padding-bottom: 6rem; }
        .cf2-section-head { margin-bottom: 3.5rem; display: flex; flex-direction: column; gap: 0.85rem; }
        .cf2-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          line-height: 1.08;
          letter-spacing: -0.022em;
          font-weight: 500;
          color: var(--dark);
          margin: 0;
          max-width: 20ch;
        }
        .cf2-section-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem;
          color: var(--gray-text);
          line-height: 1.65;
          max-width: 58ch;
          margin: 0;
        }

        /* ---- 4-up icon card grid ---- */
        .cf2-grid4 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 680px) { .cf2-grid4 { grid-template-columns: 1fr; } }
        .cf2-card {
          background: #ffffff;
          border: 1.5px solid var(--border-soft);
          border-radius: 24px;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .cf2-card:hover {
          box-shadow: 0 16px 48px -16px rgba(10, 19, 34, 0.14);
          transform: translateY(-2px);
        }
        .cf2-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(14, 116, 144, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--turquoise);
          flex-shrink: 0;
        }
        .cf2-card-icon svg { width: 22px; height: 22px; }
        .cf2-card-h {
          font-family: var(--font-garamond), serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--dark);
          letter-spacing: -0.01em;
          line-height: 1.25;
          margin: 0;
        }
        .cf2-card-p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem;
          color: var(--gray-text);
          line-height: 1.65;
          margin: 0;
        }

        /* ---- Section 2: dark side-by-side ---- */
        .cf2-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) { .cf2-split { grid-template-columns: 1fr; gap: 3rem; } }
        .cf2-split-copy { display: flex; flex-direction: column; gap: 1.5rem; }
        .cf2-split-copy p {
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .cf2-split-cta { align-self: flex-start; }

        /* Product mockup */
        .cf2-mockup-wrap {
          border: 1.5px solid rgba(246, 245, 232, 0.18);
          border-radius: 20px;
          overflow: hidden;
          background: rgba(246, 245, 232, 0.04);
        }
        .cf2-mockup-chrome {
          background: rgba(246, 245, 232, 0.07);
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border-bottom: 1px solid rgba(246, 245, 232, 0.1);
        }
        .cf2-chrome-dot {
          width: 10px; height: 10px; border-radius: 999px;
          background: rgba(246, 245, 232, 0.2);
          display: inline-block;
        }
        .cf2-chrome-url {
          font-size: 0.72rem;
          color: rgba(246, 245, 232, 0.35);
          font-family: var(--font-figtree), monospace;
          margin-left: 0.65rem;
        }
        .cf2-mockup-layout {
          display: grid;
          grid-template-columns: 160px 1fr;
          min-height: 280px;
        }
        .cf2-mockup-sidebar {
          border-right: 1px solid rgba(246, 245, 232, 0.1);
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .cf2-sidebar-label {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(246, 245, 232, 0.35);
          font-family: var(--font-figtree), sans-serif;
          margin-bottom: 0.35rem;
          padding: 0 0.25rem;
        }
        .cf2-sidebar-item {
          font-size: 0.8rem;
          font-family: var(--font-figtree), sans-serif;
          color: rgba(246, 245, 232, 0.45);
          padding: 0.4rem 0.5rem;
          border-radius: 8px;
          cursor: default;
        }
        .cf2-sidebar-item-active {
          color: rgba(246, 245, 232, 0.9);
          background: rgba(14, 116, 144, 0.3);
        }
        .cf2-mockup-main {
          padding: 1rem 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .cf2-mockup-main-header {
          font-size: 0.88rem;
          font-weight: 600;
          font-family: var(--font-figtree), sans-serif;
          color: rgba(246, 245, 232, 0.85);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.25rem;
        }
        .cf2-status-badge {
          font-size: 0.66rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          background: rgba(14, 116, 144, 0.35);
          color: rgba(14, 200, 230, 0.9);
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
        }
        .cf2-mockup-q-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.5rem 0.6rem;
          border-radius: 10px;
          background: rgba(246, 245, 232, 0.04);
          border: 1px solid rgba(246, 245, 232, 0.07);
        }
        .cf2-q-num {
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(246, 245, 232, 0.3);
          font-family: var(--font-figtree), monospace;
          flex-shrink: 0;
        }
        .cf2-q-text {
          font-size: 0.8rem;
          font-family: var(--font-figtree), sans-serif;
          color: rgba(246, 245, 232, 0.7);
          line-height: 1.35;
        }
        .cf2-mockup-add {
          font-size: 0.78rem;
          font-family: var(--font-figtree), sans-serif;
          color: rgba(14, 116, 144, 0.7);
          padding: 0.5rem 0.6rem;
          cursor: default;
        }

        /* ---- Stacked panels wrapper ---- */
        .cf2-panels-wrap {
          margin: 0 1rem;
          position: relative;
        }
        @media (max-width: 700px) { .cf2-panels-wrap { margin: 0 0.5rem; } }

        /* Dark panel — fully rounded card, sits on top so turquoise fills behind its bottom curves */
        .cf2-dark-panel {
          background: var(--dark);
          border-radius: 40px;
          padding: 7rem 2rem 7rem;
          position: relative;
          z-index: 2;
        }
        .cf2-dark-panel h2 { color: var(--cream-on-dark); }
        .cf2-dark-panel p { color: rgba(246, 245, 232, 0.7); }
        @media (max-width: 700px) {
          .cf2-dark-panel { border-radius: 28px; padding: 5rem 1.25rem 5rem; }
        }

        /* Turquoise panel — slides 40px up behind the navy, filling the concave corner space */
        .cf2-teal-panel {
          background: var(--turquoise);
          border-radius: 0 0 40px 40px;
          margin-top: -40px;
          padding: calc(40px + 5rem) 2rem 5rem;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 700px) {
          .cf2-teal-panel { border-radius: 0 0 28px 28px; margin-top: -28px; padding: calc(28px + 4rem) 1.25rem 4rem; }
        }
        .cf2-teal-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 860px) {
          .cf2-teal-inner { grid-template-columns: 1fr; gap: 1.75rem; }
          .cf2-teal-cta-wrap { justify-content: flex-start; }
        }
        .cf2-teal-h {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          font-weight: 500;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0;
        }
        .cf2-prog-pills {
          display: flex;
          gap: 0.55rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        @media (max-width: 860px) { .cf2-prog-pills { justify-content: flex-start; } }
        .cf2-prog-pill {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.9);
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          padding: 0.55rem 1.2rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
        }
        .cf2-teal-cta-wrap { display: flex; justify-content: flex-end; }
        .btn-teal {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: #ffffff;
          color: var(--dark);
          font-size: 1rem;
          font-weight: 600;
          padding: 0.95rem 1.65rem;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 3px 0 0 rgba(255, 255, 255, 0.35);
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease;
          white-space: nowrap;
        }
        .btn-teal:hover {
          background: #f0efe0;
          transform: translateY(-2px);
          box-shadow: 0 5px 0 0 rgba(255, 255, 255, 0.35);
        }
        .btn-teal svg { width: 16px; height: 16px; }

        /* ---- Section 3: horizontal row ---- */
        .cf2-row3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
        }
        @media (max-width: 860px) { .cf2-row3 { grid-template-columns: 1fr; gap: 2.5rem; } }
        .cf2-row3-item { display: flex; flex-direction: column; gap: 0.85rem; }
        .cf2-row3-icon {
          width: 40px; height: 40px;
          color: var(--turquoise);
        }
        .cf2-row3-icon svg { width: 100%; height: 100%; }
        .cf2-row3-h {
          font-family: var(--font-garamond), serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--dark);
          letter-spacing: -0.01em;
          line-height: 1.25;
          margin: 0;
        }
        .cf2-row3-p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem;
          color: var(--gray-text);
          line-height: 1.65;
          margin: 0;
        }

        /* ---- Section 4: tabs section background ---- */
        .cf2-tabs-section {
          background: #f5f5e0;
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
        }

        /* FeatureTabs component styles */
        .ft-wrap { max-width: 1180px; }
        .ft-nav {
          display: flex;
          gap: 0;
          border-bottom: 2px solid var(--border-soft);
          margin-bottom: 2.5rem;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .ft-nav::-webkit-scrollbar { display: none; }
        .ft-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.35rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--gray-muted);
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .ft-tab:hover { color: var(--dark); }
        .ft-tab-active {
          color: var(--dark);
          border-bottom-color: var(--turquoise);
        }
        .ft-tab-icon { width: 18px; height: 18px; display: flex; align-items: center; }
        .ft-tab-icon svg { width: 100%; height: 100%; }
        .ft-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 860px) { .ft-body { grid-template-columns: 1fr; gap: 2.5rem; } }
        .ft-steps-col { display: flex; flex-direction: column; gap: 1.5rem; }
        .ft-time-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--turquoise);
          background: rgba(14, 116, 144, 0.08);
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          align-self: flex-start;
        }
        .ft-time-icon { width: 15px; height: 15px; display: flex; }
        .ft-time-icon svg { width: 100%; height: 100%; }
        .ft-step-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
        .ft-step { display: flex; align-items: flex-start; gap: 0.9rem; }
        .ft-step-num {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 999px;
          background: rgba(14, 116, 144, 0.12);
          color: var(--turquoise);
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-figtree), sans-serif;
          margin-top: 1px;
        }
        .ft-step-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem;
          color: var(--dark);
          line-height: 1.55;
        }
        .ft-note {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.9rem;
          color: var(--gray-text);
          font-style: italic;
          line-height: 1.6;
          padding: 1rem 1.1rem;
          background: rgba(14, 116, 144, 0.05);
          border-left: 3px solid var(--turquoise);
          border-radius: 0 8px 8px 0;
          margin: 0;
        }

        /* Tab mockup */
        .ft-visual-col {}
        .ft-mockup {
          background: var(--dark);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px -20px rgba(10, 19, 34, 0.35);
        }
        .ft-mockup-bar {
          background: rgba(255, 255, 255, 0.04);
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .ft-dot {
          width: 10px; height: 10px; border-radius: 999px;
          background: rgba(255,255,255,0.15);
          display: inline-block;
        }
        .ft-mockup-title {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
          font-family: var(--font-figtree), sans-serif;
          margin-left: 0.5rem;
        }
        .ft-mockup-body { padding: 1.25rem; min-height: 300px; }

        /* Template mockup sub-styles */
        .ft-tpl { display: flex; flex-direction: column; gap: 0.35rem; }
        .ft-tpl-label {
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: rgba(255,255,255,0.3);
          font-family: var(--font-figtree), sans-serif;
          margin-bottom: 0.35rem;
        }
        .ft-tpl-row {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.55rem 0.65rem; border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          cursor: default;
        }
        .ft-tpl-row-active {
          background: rgba(14,116,144,0.25);
          border-color: rgba(14,116,144,0.4);
        }
        .ft-tpl-name { font-size: 0.82rem; color: rgba(255,255,255,0.72); font-family: var(--font-figtree), sans-serif; flex: 1; }
        .ft-tpl-tag {
          font-size: 0.67rem; font-weight: 600;
          color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.06);
          padding: 0.15rem 0.45rem; border-radius: 999px;
          font-family: var(--font-figtree), sans-serif;
        }
        .ft-tpl-action {
          font-size: 0.75rem; color: rgba(14,200,230,0.7);
          font-family: var(--font-figtree), sans-serif;
        }

        /* Scratch mockup sub-styles */
        .ft-scr { display: flex; flex-direction: column; gap: 0.35rem; }
        .ft-scr-label {
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: rgba(255,255,255,0.3);
          font-family: var(--font-figtree), sans-serif; margin-bottom: 0.35rem;
        }
        .ft-scr-row {
          display: flex; align-items: center; gap: 0.6rem;
          padding: 0.55rem 0.65rem; border-radius: 10px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
        }
        .ft-scr-type {
          font-size: 0.7rem; font-weight: 600;
          color: rgba(14,200,230,0.7); background: rgba(14,116,144,0.2);
          padding: 0.15rem 0.45rem; border-radius: 999px;
          font-family: var(--font-figtree), sans-serif; white-space: nowrap;
        }
        .ft-scr-q { font-size: 0.8rem; color: rgba(255,255,255,0.65); font-family: var(--font-figtree), sans-serif; }
        .ft-scr-add {
          font-size: 0.8rem; color: rgba(14,200,230,0.5);
          font-family: var(--font-figtree), sans-serif;
          padding: 0.5rem 0.65rem; cursor: default;
        }

        /* Import mockup sub-styles */
        .ft-imp { display: flex; flex-direction: column; gap: 0.85rem; }
        .ft-imp-file {
          display: flex; align-items: center; gap: 0.6rem;
          padding: 0.75rem 0.85rem; border-radius: 12px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
        }
        .ft-imp-file-icon { font-size: 1.2rem; }
        .ft-imp-file-name { font-size: 0.82rem; color: rgba(255,255,255,0.75); font-family: var(--font-figtree), sans-serif; flex: 1; }
        .ft-imp-file-size { font-size: 0.72rem; color: rgba(255,255,255,0.3); font-family: var(--font-figtree), sans-serif; }
        .ft-imp-progress { display: flex; flex-direction: column; gap: 0.4rem; }
        .ft-imp-progress-label { font-size: 0.78rem; color: rgba(255,255,255,0.45); font-family: var(--font-figtree), sans-serif; }
        .ft-imp-bar { height: 6px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden; }
        .ft-imp-bar-fill { height: 100%; width: 100%; background: var(--turquoise); border-radius: 999px; }
        .ft-imp-results { display: flex; flex-direction: column; gap: 0.35rem; }
        .ft-imp-results-label {
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.07em; color: rgba(255,255,255,0.3);
          font-family: var(--font-figtree), sans-serif; margin-bottom: 0.15rem;
        }
        .ft-imp-row {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.8rem; color: rgba(255,255,255,0.65);
          font-family: var(--font-figtree), sans-serif;
          padding: 0.35rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ft-imp-check { color: rgba(14,200,230,0.8); font-size: 0.85rem; }

        /* ---- Section 5: before/after comparison ---- */
        .cf2-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (max-width: 680px) { .cf2-compare { grid-template-columns: 1fr; } }
        .cf2-compare-col { border-radius: 24px; padding: 2.5rem; }
        .cf2-compare-before {
          background: #ffffff;
          border: 1.5px solid rgba(10, 19, 34, 0.1);
        }
        .cf2-compare-after {
          background: rgba(14, 116, 144, 0.05);
          border: 1.5px solid rgba(14, 116, 144, 0.25);
        }
        .cf2-compare-header { margin-bottom: 1.5rem; }
        .cf2-compare-label {
          font-family: var(--font-garamond), serif;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        .cf2-compare-label-before { color: var(--gray-muted); }
        .cf2-compare-label-after { color: var(--turquoise); }
        .cf2-compare-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem; }
        .cf2-compare-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem;
          line-height: 1.5;
        }
        .cf2-compare-item-before { color: var(--gray-muted); text-decoration: line-through; text-decoration-color: rgba(154,154,142,0.5); }
        .cf2-compare-item-after { color: var(--dark); }
        .cf2-compare-x {
          flex-shrink: 0;
          font-size: 0.85rem;
          color: rgba(154, 154, 142, 0.6);
          margin-top: 1px;
        }
        .cf2-compare-check {
          flex-shrink: 0;
          width: 18px; height: 18px;
          color: var(--turquoise);
          margin-top: 1px;
          display: flex;
        }
        .cf2-compare-check svg { width: 100%; height: 100%; }
        .cf2-compare-time {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-soft);
        }
        .cf2-compare-time-value {
          font-family: var(--font-garamond), serif;
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .cf2-compare-time-label {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }
        .cf2-compare-time-before .cf2-compare-time-value { color: var(--gray-muted); }
        .cf2-compare-time-before .cf2-compare-time-label { color: var(--gray-muted); }
        .cf2-compare-time-after .cf2-compare-time-value { color: var(--turquoise); }
        .cf2-compare-time-after .cf2-compare-time-label { color: var(--gray-text); }

        /* ---- CTA card ---- */
        .cf2-cta-section { padding: 4rem 1.5rem 7rem; }
        .cf2-cta-card {
          max-width: 1100px;
          margin: 0 auto;
          background: var(--dark);
          border-radius: 40px;
          padding: 6rem 3rem 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cf2-cta-glow {
          position: absolute;
          top: -40%;
          left: 20%;
          width: 60%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(14,116,144,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .cf2-cta-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.75rem);
          font-weight: 500;
          color: var(--cream-on-dark);
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .cf2-cta-sub {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem;
          color: rgba(246,245,232,0.45);
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .cf2-cta-btns {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .cf2-cta-ghost {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(246,245,232,0.65);
          padding: 0.95rem 1.65rem;
          border-radius: 999px;
          border: 1.5px solid rgba(246,245,232,0.2);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .cf2-cta-ghost:hover {
          color: rgba(246,245,232,0.95);
          border-color: rgba(246,245,232,0.45);
        }
        .cf2-cta-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 560px;
          position: relative;
          z-index: 1;
          padding-top: 1rem;
          border-top: 1px solid rgba(246,245,232,0.1);
        }
        .cf2-cta-stat { display: flex; flex-direction: column; gap: 0.25rem; }
        .cf2-cta-stat-value {
          font-family: var(--font-garamond), serif;
          font-size: 2rem;
          font-weight: 500;
          color: var(--turquoise);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .cf2-cta-stat-label {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.8rem;
          color: rgba(246,245,232,0.4);
          line-height: 1.3;
        }
        @media (max-width: 640px) {
          .cf2-cta-card { border-radius: 28px; padding: 4rem 1.5rem 3.5rem; }
          .cf2-cta-stats { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        }

        /* ---- FAQ section ---- */
        .cf2-faq-section { padding-bottom: 8rem; }
        .cf2-faq-inner { max-width: 860px; }
        .cf2-faq-head { margin-bottom: 2.5rem; display: flex; flex-direction: column; gap: 0.85rem; }
        .cf2-faq-list { margin-top: 0; }

        /* Mobile tweaks */
        @media (max-width: 640px) {
          .cf2-hero { padding: 6rem 1.25rem 4rem; }
          .cf2-section { padding-top: 4.5rem; padding-bottom: 4.5rem; }
        }
      `}</style>
    </>
  );
}
