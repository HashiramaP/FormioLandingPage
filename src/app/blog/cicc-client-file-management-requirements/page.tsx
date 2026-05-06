import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exigences du CICC en gestion de dossiers : ce que tout RCIC doit savoir en 2026 | Formio",
  description:
    "Le CICC peut auditer votre cabinet sans préavis. Les 6 exigences concrètes en matière de gestion de dossiers clients, les erreurs fréquentes et comment choisir un logiciel conforme.",
  alternates: { canonical: "https://formio.ca/blog/cicc-client-file-management-requirements" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Exigences du CICC en gestion de dossiers : ce que tout RCIC doit savoir en 2026",
  description:
    "Le CICC peut auditer votre cabinet sans préavis. Voici les 6 exigences concrètes en matière de gestion de dossiers clients, les erreurs fréquentes et comment choisir un logiciel conforme.",
  keywords:
    "exigences gestion dossiers clients CICC, RCIC conformité, gestion dossiers immigration, audit CICC, logiciel immigration conforme",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Organization", name: "Formio", url: "https://formio.ca" },
  publisher: {
    "@type": "Organization",
    name: "Formio",
    url: "https://formio.ca",
    logo: { "@type": "ImageObject", url: "https://formio.ca/FormioTextBlue.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://formio.ca/blog/cicc-client-file-management-requirements",
  },
  articleSection: "Conformité",
  inLanguage: "fr-CA",
  about: [
    { "@type": "Thing", name: "Conseil de réglementation des consultants en immigration du Canada", sameAs: "https://www.cicc.ca" },
    { "@type": "Thing", name: "Gestion de dossiers clients" },
    { "@type": "Thing", name: "Conformité RCIC" },
  ],
};

const requirements = [
  {
    num: "01",
    title: "Conservation des dossiers pendant au moins 6 ans",
    body: "Le CICC exige que les dossiers clients soient conservés pendant un minimum de 6 ans après la clôture du dossier. Ce délai court à partir de la date de fin du mandat, pas de son ouverture. Les documents d'un client dont le dossier s'est terminé en 2020 doivent être accessibles et lisibles jusqu'en 2026 au moins. La conservation s'applique à l'ensemble des documents : formulaires gouvernementaux, correspondance, pièces justificatives, reçus d'honoraires, notes internes et tout échange écrit avec le client. Un fichier corrompu ou un disque dur défaillant ne constituent pas une défense valable lors d'un audit.",
  },
  {
    num: "02",
    title: "Stockage sécurisé des données sensibles",
    body: "Les dossiers clients contiennent des données personnelles protégées : numéros de passeport, statuts migratoires, antécédents, informations financières. Le CICC exige que ces données soient stockées dans un environnement sécurisé, avec un accès contrôlé. Pour les cabinets utilisant des outils numériques, cela implique un chiffrement des données au repos et en transit, ainsi qu'une authentification à deux facteurs sur tous les systèmes contenant des dossiers. Le stockage dans des dossiers partagés non protégés, des boîtes courriel non sécurisées ou des clés USB sans chiffrement ne satisfait pas cette exigence.",
  },
  {
    num: "03",
    title: "Consentement éclairé documenté",
    body: "Avant d'entreprendre tout mandat, le RCIC doit obtenir un consentement écrit et signé du client. Ce consentement doit couvrir la nature des services, les honoraires, les conditions de résiliation et l'utilisation des données personnelles. Un simple échange de courriels où le client dit \"oui, allez-y\" ne suffit pas. Le CICC s'attend à trouver dans le dossier un document de mandat signé, daté, et rédigé dans une langue que le client comprend. Le consentement au traitement des données personnelles doit être distinct et explicite, conformément également aux obligations de la Loi 25 au Québec.",
  },
  {
    num: "04",
    title: "Traçabilité de chaque action au dossier",
    body: "Le CICC exige une traçabilité claire de toutes les actions importantes menées sur un dossier : soumissions gouvernementales, demandes de renseignements, décisions reçues, communications avec le client. Chaque entrée doit être horodatée. En pratique, cela ressemble à un journal de bord chronologique intégré au dossier. Si un inspecteur consulte un dossier et constate un écart de 4 mois entre deux entrées sans aucune note explicative, il peut conclure à une absence de suivi. Les notes doivent être factuelles, brèves et régulières, un enregistrement systématique.",
  },
  {
    num: "05",
    title: "Organisation structurée des fichiers",
    body: "Le CICC ne prescrit pas un système de classement unique, mais il exige que les dossiers soient organisés de façon à permettre à un tiers de comprendre rapidement l'état du mandat et de retrouver n'importe quel document sans assistance. Cela signifie une nomenclature cohérente des fichiers, une séparation claire entre les types de documents (pièces justificatives, formulaires, correspondance) et une logique de classement qui reste stable d'un dossier à l'autre. Un cabinet où chaque consultant range les fichiers à sa façon ne satisfait pas cette exigence.",
  },
  {
    num: "06",
    title: "Contrôle d'accès et journaux d'accès",
    body: "Qui peut consulter les dossiers de vos clients ? Le CICC exige que l'accès aux dossiers soit restreint aux personnes autorisées et que les accès soient enregistrés. Un consultant junior ne devrait pas avoir accès aux dossiers qui ne lui sont pas assignés. Les cabinets qui utilisent des espaces de stockage partagés sans gestion des droits d'accès présentent une vulnérabilité directe à cet égard. Les journaux d'accès, c'est-à-dire les enregistrements automatiques de qui a consulté quoi et quand, sont une preuve directe de conformité lors d'un audit.",
  },
];

const errors = [
  {
    title: "Confondre la messagerie électronique avec un système de gestion de dossiers",
    body: "Beaucoup de consultants utilisent leur boîte courriel comme référence principale pour retracer les communications avec les clients. Les courriels ne sont pas classés par dossier client, ils sont classés chronologiquement ou par expéditeur. Retrouver tous les échanges liés à un dossier spécifique lors d'un audit prend du temps et présente un risque d'omission. Les boîtes courriel standard ne satisfont pas non plus les exigences de sécurité du CICC : elles ne sont généralement pas chiffrées de bout en bout et n'offrent pas de contrôle d'accès par dossier.",
  },
  {
    title: "Ne pas documenter les décisions de non-intervention",
    body: "Quand un client vous pose une question et que vous choisissez de ne pas agir, ou d'attendre avant de déposer une demande, cette décision doit être documentée. Un dossier qui montre seulement les actions positives, sans trace des moments où vous avez conseillé au client de patienter ou d'adopter une stratégie alternative, est un dossier incomplet aux yeux du CICC.",
  },
  {
    title: "Stocker des copies papier sans équivalent numérique sécurisé",
    body: "Des cabinets qui travaillent encore avec des dossiers physiques courent un risque important : incendie, dégât des eaux, perte ou vol. Le CICC n'interdit pas le papier, mais en cas de sinistre, \"les documents ont brûlé\" n'est pas une justification acceptable. Une copie numérique sécurisée, en parallèle des documents physiques, est une précaution élémentaire que beaucoup de cabinets n'ont toujours pas mise en place.",
  },
  {
    title: "Ne pas mettre à jour les dossiers après la clôture",
    body: "Un dossier se clôture quand le mandat prend fin, pas quand le client arrête de vous écrire. Certains consultants laissent des dossiers dans un état \"en cours\" pendant des mois après la fin réelle du mandat, ce qui fausse leur registre actif et complique la gestion des délais de conservation. Le CICC s'attend à trouver une date de clôture claire sur chaque dossier terminé, ainsi qu'une note de clôture résumant le résultat final.",
  },
];

const softwareChecklist = [
  { label: "Chiffrement des données", detail: "Au repos et en transit. Demandez une documentation sur les pratiques de sécurité. Un fournisseur qui ne peut pas répondre clairement ne convient pas à un usage professionnel réglementé." },
  { label: "Contrôle d'accès granulaire", detail: "Droits différents selon le rôle (consultant principal, assistant, stagiaire). Journaux d'accès automatiques. Sans ces journaux, vous ne pouvez pas prouver qui a consulté quoi lors d'un audit." },
  { label: "Organisation des dossiers par client", detail: "Tous les documents d'un client regroupés dans un dossier unique et structuré, pas dispersés entre courriels et partages de fichiers." },
  { label: "Traçabilité intégrée", detail: "Enregistrement automatique des actions sur chaque dossier. Une entrée de journal automatique pour chaque soumission ou modification remplace avantageusement une tenue de notes manuelle." },
  { label: "Conformité à la Loi 25 (Québec)", detail: "Recueil et documentation du consentement explicite au traitement des données personnelles. Capacité à répondre aux demandes d'accès ou de suppression des données clients." },
  { label: "Sauvegarde automatique et rétention configurable", detail: "Configuration pour respecter le délai de conservation de 6 ans du CICC, avec sauvegardes automatiques et politique de rétention documentée." },
];

export default function CICCFileManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* HERO */}
      <header className="art-hero section-cream">
        <div className="art-hero-inner container">
          <nav className="art-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>›</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden>›</span>
            <span>Exigences CICC</span>
          </nav>
          <div className="art-meta">
            <span className="art-category">Conformité</span>
            <span className="art-sep" aria-hidden>·</span>
            <time dateTime="2026-05-06" className="art-date">6 mai 2026</time>
            <span className="art-sep" aria-hidden>·</span>
            <span className="art-time">9 min de lecture</span>
          </div>
          <h1 className="art-h1">
            Exigences du CICC en gestion de dossiers : ce que tout RCIC doit savoir en{" "}
            <em className="art-accent">2026</em>
          </h1>
          <p className="art-lead">
            Le Conseil de réglementation des consultants en immigration du Canada peut lancer un audit de votre cabinet sans vous en aviser à l&apos;avance. Il examine vos dossiers clients : leur organisation, leur sécurité, leur exhaustivité et la façon dont vous documentez chaque étape du mandat. Voici ce qu&apos;il vérifie concrètement.
          </p>
        </div>
      </header>

      {/* ANCHOR NAV */}
      <nav className="art-anav" aria-label="Sections de l'article">
        <div className="art-anav-inner">
          <a href="#cicc" className="art-anav-link">Le CICC</a>
          <a href="#exigences" className="art-anav-link">Les 6 exigences</a>
          <a href="#erreurs" className="art-anav-link">Erreurs fréquentes</a>
          <a href="#logiciel" className="art-anav-link">Choisir un logiciel</a>
        </div>
      </nav>

      {/* SECTION 1: What is CICC */}
      <section id="cicc" className="art-section section-cream">
        <div className="art-prose container">
          <h2 className="art-h2">Qu&apos;est-ce que le CICC ?</h2>
          <p className="art-body">
            Le Conseil de réglementation des consultants en immigration du Canada est l&apos;organisme qui encadre les consultants en immigration agréés (RCIC) au Canada. Il délivre les permis d&apos;exercice, établit les normes professionnelles et mène des enquêtes en cas de plainte ou d&apos;infraction soupçonnée. Depuis 2021, le CICC opère sous un cadre législatif renforcé qui lui confère des pouvoirs d&apos;inspection élargis, y compris des audits non annoncés. Environ 8 000 RCIC sont actuellement actifs au Canada. Chacun est soumis aux mêmes obligations de tenue de dossiers, qu&apos;il travaille seul ou dans un grand cabinet.
          </p>
        </div>
      </section>

      {/* SECTION 2: The 6 requirements */}
      <section id="exigences" className="art-reqs-section">
        <div className="art-prose container">
          <h2 className="art-h2">Les 6 exigences concrètes</h2>
          <div className="art-req-list">
            {requirements.map((req) => (
              <div key={req.num} className="art-req-item">
                <div className="art-req-num">{req.num}</div>
                <div className="art-req-body">
                  <h3 className="art-req-title">{req.title}</h3>
                  <p className="art-req-text">{req.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Common errors — dark panel */}
      <div className="art-dark-wrap">
        <section id="erreurs" className="art-dark-section">
          <div className="art-prose container">
            <h2 className="art-dark-h2">Les erreurs fréquentes que font les cabinets</h2>
            <div className="art-error-list">
              {errors.map((err, i) => (
                <div key={i} className="art-error-item">
                  <div className="art-error-num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="art-error-title">{err.title}</h3>
                    <p className="art-error-text">{err.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 4: Software checklist */}
      <section id="logiciel" className="art-section section-cream">
        <div className="art-prose container">
          <h2 className="art-h2">Comment choisir un logiciel conforme</h2>
          <p className="art-body">
            Le marché propose de nombreux outils de gestion de dossiers, mais peu sont conçus avec les obligations spécifiques du CICC en tête. Voici les critères concrets à évaluer avant de choisir un système.
          </p>
          <div className="art-checklist">
            {softwareChecklist.map((item) => (
              <div key={item.label} className="art-check-item">
                <div className="art-check-dot" aria-hidden />
                <div>
                  <p className="art-check-label">{item.label}</p>
                  <p className="art-check-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="art-callout">
            <p>
              Formio est conçu autour de ces contraintes. Les questionnaires clients sont structurés, les dossiers sont organisés par client et par type de demande, et la traçabilité des réponses est intégrée par défaut. Les cabinets qui utilisent Formio pour collecter les informations clients peuvent réduire le temps de préparation à un audit, parce que les données sont déjà organisées et horodatées au moment de leur saisie.
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="art-conclusion-section section-cream">
        <div className="art-prose container">
          <h2 className="art-h2">En résumé</h2>
          <p className="art-body">
            La gestion de dossiers n&apos;est pas une formalité administrative, c&apos;est une exigence professionnelle réglementée avec des conséquences réelles en cas de manquement. Le CICC audite des cabinets chaque année, et les consultants sanctionnés ne manquent pas nécessairement de compétences techniques, ils manquent de rigueur documentaire.
          </p>
          <p className="art-body">
            Les 6 exigences décrites dans cet article, conservation sur 6 ans, sécurité du stockage, consentement documenté, traçabilité, organisation structurée et contrôle d&apos;accès, ne sont pas optionnelles. Elles définissent le standard minimum attendu de tout RCIC actif au Canada.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="art-cta-section">
        <div className="container">
          <div className="art-cta-card">
            <div className="art-cta-glow" aria-hidden />
            <h2 className="art-cta-h2">
              Voir comment Formio<br />structure vos dossiers.
            </h2>
            <p className="art-cta-sub">Consentement CASL, historique des réponses, accès par cabinet.</p>
            <Link href="/book-call" className="btn-primary art-cta-btn">
              Réserver une démonstration →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .art-hero { padding: 8rem 1.5rem 5rem; }
        .art-hero-inner { max-width: 860px; display: flex; flex-direction: column; gap: 1.75rem; }

        .art-breadcrumb {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.82rem; color: var(--gray-muted); font-weight: 500;
        }
        .art-breadcrumb a { color: var(--gray-muted); text-decoration: none; }
        .art-breadcrumb a:hover { color: var(--dark); }

        .art-meta {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.8rem; color: var(--gray-muted);
        }
        .art-category { font-weight: 700; color: var(--turquoise); text-transform: uppercase; letter-spacing: 0.06em; }
        .art-sep { color: var(--border-soft); }

        .art-h1 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          line-height: 1.06; letter-spacing: -0.025em;
          font-weight: 500; color: var(--dark); margin: 0; max-width: 26ch;
        }
        .art-accent { font-style: italic; color: var(--turquoise); }
        .art-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.15rem; color: var(--gray-text); line-height: 1.65;
          max-width: 62ch; margin: 0;
        }

        /* ── Anchor nav ── */
        .art-anav {
          background: var(--cream); border-bottom: 1px solid var(--border-soft);
          overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .art-anav::-webkit-scrollbar { display: none; }
        .art-anav-inner {
          display: flex; gap: 0.4rem; padding: 0.85rem 1.5rem;
          max-width: 1180px; margin: 0 auto; white-space: nowrap;
        }
        .art-anav-link {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.875rem; font-weight: 600; color: var(--gray-muted);
          padding: 0.45rem 1rem; border-radius: 999px;
          border: 1.5px solid var(--border-soft);
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .art-anav-link:hover { color: var(--dark); border-color: var(--dark); background: rgba(10,19,34,0.04); }

        /* ── Prose layout ── */
        .art-section { padding: 6rem 1.5rem; }
        .art-prose { max-width: 860px; margin: 0 auto; }
        .art-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(1.9rem, 3.5vw, 2.75rem);
          line-height: 1.1; letter-spacing: -0.022em;
          font-weight: 500; color: var(--dark); margin: 0 0 1.75rem;
        }
        .art-body {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--gray-text); line-height: 1.75;
          margin: 0 0 1.25rem;
        }

        /* ── Requirements ── */
        .art-reqs-section { padding: 6rem 1.5rem; background: #fff; }
        .art-req-list { display: flex; flex-direction: column; gap: 2.5rem; }
        .art-req-item { display: flex; gap: 2rem; align-items: flex-start; }
        @media (max-width: 600px) { .art-req-item { flex-direction: column; gap: 0.75rem; } }
        .art-req-num {
          font-family: var(--font-figtree), monospace;
          font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
          color: var(--turquoise); padding-top: 0.35rem;
          flex-shrink: 0; min-width: 2.5ch;
        }
        .art-req-body { display: flex; flex-direction: column; gap: 0.6rem; }
        .art-req-title {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.08rem; font-weight: 700; color: var(--dark); margin: 0;
        }
        .art-req-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: var(--gray-text); line-height: 1.7; margin: 0;
        }

        /* ── Dark panel ── */
        .art-dark-wrap { margin: 0 1rem; }
        @media (max-width: 700px) { .art-dark-wrap { margin: 0 0.5rem; } }
        .art-dark-section {
          background: var(--dark); border-radius: 40px;
          padding: 7rem 2rem;
        }
        @media (max-width: 700px) { .art-dark-section { border-radius: 28px; padding: 5rem 1.25rem; } }
        .art-dark-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(1.9rem, 3.5vw, 2.75rem);
          line-height: 1.1; letter-spacing: -0.022em;
          font-weight: 500; color: var(--cream-on-dark); margin: 0 0 2rem;
        }
        .art-error-list { display: flex; flex-direction: column; gap: 2rem; }
        .art-error-item {
          display: flex; gap: 1.5rem; align-items: flex-start;
          padding: 1.5rem; border-radius: 18px;
          background: rgba(246,245,232,0.05); border: 1px solid rgba(246,245,232,0.1);
        }
        .art-error-num {
          font-family: var(--font-figtree), monospace;
          font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
          color: rgba(14,200,230,0.7); flex-shrink: 0; padding-top: 0.2rem;
        }
        .art-error-title {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; font-weight: 700; color: var(--cream-on-dark);
          margin: 0 0 0.5rem;
        }
        .art-error-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem; color: rgba(246,245,232,0.7); line-height: 1.7; margin: 0;
        }

        /* ── Software checklist ── */
        .art-checklist { display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2rem; }
        .art-check-item { display: flex; gap: 1rem; align-items: flex-start; }
        .art-check-dot {
          flex-shrink: 0; width: 7px; height: 7px; border-radius: 999px;
          background: var(--turquoise); margin-top: 0.5rem;
        }
        .art-check-label {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0 0 0.25rem;
        }
        .art-check-detail {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem; color: var(--gray-text); line-height: 1.65; margin: 0;
        }
        .art-callout {
          background: rgba(14,116,144,0.06); border-left: 3px solid var(--turquoise);
          border-radius: 0 12px 12px 0; padding: 1.25rem 1.5rem;
        }
        .art-callout p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem; color: var(--gray-text); line-height: 1.7; margin: 0;
        }

        /* ── Conclusion ── */
        .art-conclusion-section { padding: 6rem 1.5rem; border-top: 1px solid var(--border-soft); }

        /* ── CTA ── */
        .art-cta-section { padding: 4rem 1.5rem 7rem; }
        .art-cta-card {
          max-width: 760px; margin: 0 auto;
          background: var(--dark); border-radius: 40px;
          padding: 5rem 3rem 4.5rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 1.5rem; text-align: center; position: relative; overflow: hidden;
        }
        .art-cta-glow {
          position: absolute; top: -40%; left: 20%; width: 60%; height: 100%;
          background: radial-gradient(ellipse at center, rgba(14,116,144,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .art-cta-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem); font-weight: 500;
          color: var(--cream-on-dark); line-height: 1.1;
          letter-spacing: -0.025em; margin: 0; position: relative; z-index: 1;
        }
        .art-cta-sub {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: rgba(246,245,232,0.45);
          margin: 0; position: relative; z-index: 1;
        }
        .art-cta-btn { position: relative; z-index: 1; }

        @media (max-width: 640px) {
          .art-hero { padding: 6rem 1.25rem 4rem; }
          .art-section, .art-reqs-section, .art-conclusion-section { padding: 4.5rem 1.25rem; }
          .art-cta-card { border-radius: 28px; padding: 4rem 1.5rem 3.5rem; }
        }
      `}</style>
    </>
  );
}
