import type { Metadata } from "next";
import Link from "next/link";
import { FaqRow } from "@/app/FaqRow";
import { CheckIcon, ShieldIcon, FolderIcon, LockIcon, DocIcon, SparkleIcon } from "@/app/icons";

export const metadata: Metadata = {
  title: "CICC Compliance Guide for Immigration Lawyers & RCICs 2026 | Formio",
  description:
    "What the CICC actually checks during an audit, and how to make sure your immigration software keeps you compliant.",
  alternates: { canonical: "https://formio.ca/blog/cicc-compliance" },
};

const faqItems = [
  {
    question: "Quelles sont les conséquences d'une non-conformité au CICC ?",
    answer:
      "Le CICC commence généralement par un avertissement ou une mise en demeure. Il peut exiger une formation obligatoire ou une période de supervision. La suspension ou la révocation du permis est réservée aux cas graves ou répétés. La plupart des manquements sont corrigibles si vous agissez dès que vous les détectez.",
    questionEn: "What are the consequences of non-compliance with the CICC?",
    answerEn:
      "The CICC typically starts with a warning or a notice of non-compliance. It may require mandatory training or a supervised period. Suspension or licence revocation is reserved for serious or repeated violations. Most infractions are correctable if you address them promptly.",
  },
  {
    question: "Formio stocke-t-il les données de façon sécurisée ?",
    answer:
      "Oui. Les données sont chiffrées en transit et au repos. Elles sont hébergées sur des serveurs canadiens. L'accès est limité par cabinet. Chaque cabinet accède uniquement à ses propres données.",
    questionEn: "Does Formio store data securely?",
    answerEn:
      "Yes. Data is encrypted in transit and at rest. It is hosted on Canadian servers. Access is restricted by firm. Each firm only accesses its own data.",
  },
  {
    question: "Comment Formio gère-t-il le consentement client ?",
    answer:
      "Chaque questionnaire Formio inclut une case de consentement CASL. Le client la coche avant de commencer. Ce consentement est enregistré et horodaté automatiquement dans le dossier. Vous avez une preuve documentée pour chaque client, sans effort supplémentaire.",
    questionEn: "How does Formio handle client consent?",
    answerEn:
      "Every Formio questionnaire includes a CASL consent checkbox. The client checks it before starting. This consent is automatically recorded and timestamped in the file. You have documented proof for every client, with no extra effort.",
  },
  {
    question: "Puis-je utiliser Formio comme preuve lors d'un audit ?",
    answer:
      "Formio conserve un historique complet des réponses par client. Ces données peuvent appuyer votre dossier lors d'un audit. Ce n'est pas une garantie juridique. Chaque auditeur a ses propres critères. Consultez un conseiller juridique pour savoir ce que votre auditeur acceptera.",
    questionEn: "Can I use Formio as evidence during a CICC audit?",
    answerEn:
      "Formio keeps a complete response history per client. This data can support your case during an audit. It is not a legal guarantee. Every auditor has their own criteria. Consult a legal advisor to understand what your auditor will accept.",
  },
  {
    question: "À quelle fréquence le CICC effectue-t-il des audits ?",
    answer:
      "Le CICC ne publie pas de calendrier fixe. Les audits peuvent être déclenchés par une plainte, par une sélection aléatoire, ou si votre dossier présente des anomalies. La plupart des membres passent plusieurs années sans audit. Le risque réel est faible. Les conséquences d'un audit mal préparé le sont moins.",
    questionEn: "How often does the CICC conduct audits?",
    answerEn:
      "The CICC does not publish a fixed schedule. Audits can be triggered by a complaint, random selection, or irregularities in your file. Most members go several years without an audit. The actual risk is low. But the consequences of being unprepared are not.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ questionEn, answerEn }) => ({
    "@type": "Question",
    name: questionEn,
    acceptedAnswer: { "@type": "Answer", text: answerEn },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CICC Compliance Guide for Immigration Lawyers & RCICs 2026",
  datePublished: "2026-05-01",
  url: "https://formio.ca/blog/cicc-compliance",
  author: { "@type": "Organization", name: "Formio" },
  publisher: { "@type": "Organization", name: "Formio", url: "https://formio.ca" },
};

const ciccRequirements = [
  "Conserver les dossiers clients pendant 6 ans minimum.",
  "Documenter chaque échange important avec le client.",
  "Enregistrer le consentement écrit du client avant de collecter ses données.",
  "Protéger l'accès aux dossiers. Seules les personnes autorisées peuvent y accéder.",
  "Tenir les dossiers de chaque client séparément des autres.",
];

const softwareChecklist = [
  { Icon: CheckIcon, text: "Enregistrer le consentement du client à chaque formulaire" },
  { Icon: FolderIcon, text: "Conserver un historique complet des réponses" },
  { Icon: LockIcon, text: "Protéger les données avec chiffrement" },
  { Icon: ShieldIcon, text: "Restreindre l'accès par cabinet" },
  { Icon: DocIcon, text: "Permettre l'export des dossiers" },
];

const complianceTable = [
  {
    requirement: "Consentement client documenté",
    formio: "Case CASL intégrée à chaque questionnaire. Horodatée.",
  },
  {
    requirement: "Historique des réponses",
    formio: "Toutes les réponses client conservées par dossier dans la base de données.",
  },
  {
    requirement: "Accès restreint par cabinet",
    formio: "Chaque cabinet accède uniquement à ses propres données (firm_id isolé).",
  },
  {
    requirement: "Export des dossiers",
    formio: "Export disponible pour chaque dossier client.",
  },
];

const auditChecklist = [
  "Consentement client enregistré pour chaque dossier",
  "Historique des échanges documenté",
  "Dossiers conservés depuis au moins 6 ans",
  "Accès aux fichiers limité aux personnes autorisées",
  "Données clients stockées séparément par client",
  "Politique de confidentialité remise au client",
  "Procédure de traitement des plaintes en place",
  "Mise à jour annuelle de vos obligations CICC complétée",
];

export default function CICCCompliancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* HERO */}
      <header className="cicc-hero section-cream">
        <div className="cicc-hero-inner container">
          <nav className="cicc-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>›</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden>›</span>
            <span>Conformité CICC</span>
          </nav>
          <p className="cicc-date">Mis à jour : mai 2026</p>
          <h1 className="cicc-h1">
            Ce que le CICC vérifie : comment rester{" "}
            <em className="cicc-accent">conforme</em> en 2026
          </h1>
          <p className="cicc-lead">
            Le CICC peut vous auditer à tout moment. Voici ce qu&apos;il vérifie.
            Voici comment Formio vous prépare.
          </p>
        </div>
      </header>

      {/* ANCHOR NAV */}
      <nav className="cicc-anav" aria-label="Sections de la page">
        <div className="cicc-anav-inner">
          <a href="#exigences" className="cicc-anav-link">Exigences CICC</a>
          <a href="#logiciel" className="cicc-anav-link">Votre logiciel</a>
          <a href="#formio" className="cicc-anav-link">Comment Formio couvre</a>
          <a href="#audit" className="cicc-anav-link">Liste d&apos;audit</a>
          <a href="#faq" className="cicc-anav-link">FAQ</a>
        </div>
      </nav>

      {/* SECTION 1: CICC Requirements */}
      <section id="exigences" className="cicc-section section-cream">
        <div className="cicc-narrow container">
          <h2 className="cicc-h2">Les exigences concrètes du CICC.</h2>
          <p className="cicc-body">
            Le CICC ne publie pas de liste exhaustive. Mais voici ce qu&apos;il vérifie en pratique.
          </p>
          <ul className="cicc-req-list">
            {ciccRequirements.map((req) => (
              <li key={req} className="cicc-req-item">
                <span className="cicc-req-dot" aria-hidden />
                {req}
              </li>
            ))}
          </ul>
          <div className="cicc-callout">
            <p>
              Ces obligations viennent du Règlement sur les consultants en immigration du Canada (RCIC) et
              des règles professionnelles du CICC. Elles s&apos;appliquent à tous les membres actifs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Software checklist — dark panel */}
      <div className="cicc-panels-wrap">
        <section id="logiciel" className="cicc-dark-panel">
          <div className="cicc-dark-inner container">
            <div className="cicc-dark-copy">
              <h2>Ce que votre logiciel doit faire pour vous.</h2>
              <p>
                Un logiciel conforme ne garantit pas votre conformité. Mais un logiciel mal conçu
                vous expose. Voici ce que votre outil doit faire.
              </p>
            </div>
            <div className="cicc-checklist">
              {softwareChecklist.map(({ Icon, text }) => (
                <div key={text} className="cicc-check-item">
                  <div className="cicc-check-icon"><Icon /></div>
                  <p className="cicc-check-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: How Formio covers — table */}
      <section id="formio" className="cicc-section section-cream">
        <div className="cicc-narrow container">
          <h2 className="cicc-h2">Comment Formio couvre ces exigences.</h2>
          <p className="cicc-body">
            Voici ce que Formio fait réellement, sans exagération.
          </p>
          <div className="cicc-table-wrap">
            <table className="cicc-table">
              <thead>
                <tr>
                  <th className="cicc-th cicc-th-req">Exigence</th>
                  <th className="cicc-th cicc-th-formio">Ce que Formio fait</th>
                </tr>
              </thead>
              <tbody>
                {complianceTable.map((row) => (
                  <tr key={row.requirement} className="cicc-tr">
                    <td className="cicc-td cicc-td-req">{row.requirement}</td>
                    <td className="cicc-td cicc-td-formio">{row.formio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cicc-disclaimer">
            Formio ne certifie pas votre conformité CICC. Consultez un conseiller juridique pour
            toute question sur vos obligations spécifiques.
          </p>
        </div>
      </section>

      {/* SECTION 4: Audit checklist */}
      <section id="audit" className="cicc-audit-section">
        <div className="cicc-narrow container">
          <h2 className="cicc-h2">Liste de vérification : audit CICC.</h2>
          <p className="cicc-body">
            Passez cette liste en revue avant tout audit. Imprimez-la si besoin.
          </p>
          <div className="cicc-audit-list">
            {auditChecklist.map((item, i) => (
              <label key={item} className="cicc-audit-item">
                <input type="checkbox" className="cicc-audit-check" aria-label={item} />
                <span className="cicc-audit-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="cicc-audit-text">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="cicc-faq-section section-cream">
        <div className="cicc-narrow container">
          <h2 className="cicc-h2">Questions fréquentes.</h2>
          <div className="faq-list cicc-faq-list">
            {faqItems.map(({ question, answer }) => (
              <FaqRow key={question} question={question}>{answer}</FaqRow>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cicc-cta-section">
        <div className="container">
          <div className="cicc-cta-card">
            <div className="cicc-cta-glow" aria-hidden />
            <h2 className="cicc-cta-h2">
              Voir comment Formio<br />gère la conformité.
            </h2>
            <p className="cicc-cta-sub">Consentement CASL, historique des dossiers, accès par cabinet.</p>
            <Link href="/demo" className="btn-primary cicc-cta-btn">
              <SparkleIcon /> Voir Formio en action →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .anim-fade { opacity: 1 !important; transform: none !important; }

        /* ── Hero ── */
        .cicc-hero { padding: 8rem 1.5rem 5rem; }
        .cicc-hero-inner { display: flex; flex-direction: column; gap: 1.75rem; max-width: 860px; }

        .cicc-breadcrumb {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.82rem; color: var(--gray-muted); font-weight: 500;
        }
        .cicc-breadcrumb a { color: var(--gray-muted); text-decoration: none; }
        .cicc-breadcrumb a:hover { color: var(--dark); }

        .cicc-date {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--gray-muted); margin: 0;
        }

        .cicc-h1 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          line-height: 1.06; letter-spacing: -0.025em;
          font-weight: 500; color: var(--dark); margin: 0;
          max-width: 22ch;
        }
        .cicc-accent { font-style: italic; color: var(--turquoise); }

        .cicc-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.15rem; color: var(--gray-text); line-height: 1.65;
          max-width: 58ch; margin: 0;
        }

        /* ── Anchor nav ── */
        .cicc-anav {
          background: var(--cream); border-bottom: 1px solid var(--border-soft);
          overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .cicc-anav::-webkit-scrollbar { display: none; }
        .cicc-anav-inner {
          display: flex; gap: 0.4rem; padding: 0.85rem 1.5rem;
          max-width: 1180px; margin: 0 auto; white-space: nowrap;
        }
        .cicc-anav-link {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.875rem; font-weight: 600; color: var(--gray-muted);
          padding: 0.45rem 1rem; border-radius: 999px;
          border: 1.5px solid var(--border-soft); display: inline-block;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .cicc-anav-link:hover { color: var(--dark); border-color: var(--dark); background: rgba(10,19,34,0.04); }

        /* ── Layout ── */
        .cicc-section { padding-top: 6rem; padding-bottom: 6rem; }
        .cicc-narrow { max-width: 860px; margin: 0 auto; }
        .cicc-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.08; letter-spacing: -0.022em;
          font-weight: 500; color: var(--dark); margin: 0 0 1.5rem; max-width: 22ch;
        }
        .cicc-body {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--gray-text); line-height: 1.7;
          margin: 0 0 2rem;
        }

        /* Requirements list */
        .cicc-req-list { list-style: none; padding: 0; margin: 0 0 2rem; display: flex; flex-direction: column; gap: 0.85rem; }
        .cicc-req-item {
          display: flex; align-items: flex-start; gap: 0.85rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--dark); line-height: 1.55;
        }
        .cicc-req-dot {
          flex-shrink: 0; width: 7px; height: 7px; border-radius: 999px;
          background: var(--turquoise); margin-top: 0.45rem;
        }
        .cicc-callout {
          background: rgba(14,116,144,0.06); border-left: 3px solid var(--turquoise);
          border-radius: 0 12px 12px 0; padding: 1rem 1.25rem;
        }
        .cicc-callout p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem; color: var(--gray-text); line-height: 1.65; margin: 0;
        }

        /* ── Dark panel ── */
        .cicc-panels-wrap { margin: 0 1rem; }
        @media (max-width: 700px) { .cicc-panels-wrap { margin: 0 0.5rem; } }
        .cicc-dark-panel {
          background: var(--dark); border-radius: 40px; padding: 7rem 2rem;
        }
        @media (max-width: 700px) { .cicc-dark-panel { border-radius: 28px; padding: 5rem 1.25rem; } }
        .cicc-dark-inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;
          max-width: 1100px; margin: 0 auto;
        }
        @media (max-width: 860px) { .cicc-dark-inner { grid-template-columns: 1fr; gap: 3rem; } }
        .cicc-dark-copy { display: flex; flex-direction: column; gap: 1.25rem; }
        .cicc-dark-copy h2 { color: var(--cream-on-dark); line-height: 1.1; margin: 0; }
        .cicc-dark-copy p { font-size: 1.05rem; color: rgba(246,245,232,0.7); line-height: 1.7; margin: 0; }

        .cicc-checklist { display: flex; flex-direction: column; gap: 0.75rem; }
        .cicc-check-item {
          display: flex; align-items: flex-start; gap: 1rem;
          background: rgba(246,245,232,0.05); border: 1px solid rgba(246,245,232,0.1);
          border-radius: 14px; padding: 1rem 1.25rem;
        }
        .cicc-check-icon {
          width: 22px; height: 22px; color: rgba(14,200,230,0.8);
          flex-shrink: 0; margin-top: 1px;
        }
        .cicc-check-icon svg { width: 100%; height: 100%; }
        .cicc-check-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem; color: rgba(246,245,232,0.82); line-height: 1.55; margin: 0;
        }

        /* ── Compliance table ── */
        .cicc-table-wrap {
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          border-radius: 20px; border: 1px solid var(--border-soft);
          background: #ffffff; box-shadow: 0 4px 24px -12px rgba(10,19,34,0.08);
          margin-bottom: 1.25rem;
        }
        .cicc-table { width: 100%; border-collapse: collapse; font-family: var(--font-figtree), sans-serif; min-width: 480px; }
        .cicc-th {
          padding: 0.9rem 1.5rem; font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase; text-align: left;
          border-bottom: 2px solid var(--border-soft); white-space: nowrap;
        }
        .cicc-th-req { color: var(--gray-muted); width: 36%; }
        .cicc-th-formio { color: var(--turquoise); background: rgba(14,116,144,0.04); }
        .cicc-tr:not(:last-child) .cicc-td { border-bottom: 1px solid var(--border-soft); }
        .cicc-td { padding: 0.85rem 1.5rem; font-size: 0.93rem; line-height: 1.5; vertical-align: top; }
        .cicc-td-req { font-weight: 600; color: var(--dark); }
        .cicc-td-formio { color: var(--gray-text); background: rgba(14,116,144,0.03); }
        .cicc-disclaimer {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.85rem; color: var(--gray-muted); line-height: 1.55; margin: 0;
          font-style: italic;
        }

        /* ── Audit checklist ── */
        .cicc-audit-section {
          background: #f5f5e0;
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
          padding: 6rem 1.5rem;
        }
        .cicc-audit-list { display: flex; flex-direction: column; gap: 0.6rem; }
        .cicc-audit-item {
          display: flex; align-items: flex-start; gap: 1rem;
          padding: 1rem 1.25rem; border-radius: 14px;
          background: #ffffff; border: 1.5px solid var(--border-soft);
          cursor: pointer;
          transition: border-color 0.2s ease;
        }
        .cicc-audit-item:hover { border-color: rgba(14,116,144,0.35); }
        .cicc-audit-check {
          width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px;
          accent-color: var(--turquoise); cursor: pointer;
        }
        .cicc-audit-num {
          font-family: var(--font-figtree), monospace;
          font-size: 0.75rem; font-weight: 700; color: var(--gray-muted);
          flex-shrink: 0; min-width: 2ch; margin-top: 1px;
        }
        .cicc-audit-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: var(--dark); line-height: 1.5;
        }

        /* ── FAQ ── */
        .cicc-faq-section { padding-bottom: 8rem; }
        .cicc-faq-list { margin-top: 0; }

        /* ── CTA ── */
        .cicc-cta-section { padding: 4rem 1.5rem 7rem; }
        .cicc-cta-card {
          max-width: 760px; margin: 0 auto;
          background: var(--dark); border-radius: 40px;
          padding: 5rem 3rem 4.5rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 1.5rem; text-align: center; position: relative; overflow: hidden;
        }
        .cicc-cta-glow {
          position: absolute; top: -40%; left: 20%; width: 60%; height: 100%;
          background: radial-gradient(ellipse at center, rgba(14,116,144,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .cicc-cta-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem); font-weight: 500;
          color: var(--cream-on-dark); line-height: 1.1;
          letter-spacing: -0.025em; margin: 0; position: relative; z-index: 1;
        }
        .cicc-cta-sub {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: rgba(246,245,232,0.45);
          margin: 0; position: relative; z-index: 1;
        }
        .cicc-cta-btn { position: relative; z-index: 1; }

        @media (max-width: 640px) {
          .cicc-hero { padding: 6rem 1.25rem 4rem; }
          .cicc-section { padding-top: 4.5rem; padding-bottom: 4.5rem; }
          .cicc-audit-section { padding: 4.5rem 1.25rem; }
          .cicc-cta-card { border-radius: 28px; padding: 4rem 1.5rem 3.5rem; }
        }
      `}</style>
    </>
  );
}
