import type { Metadata } from "next";
import Link from "next/link";
import { FaqRow } from "@/app/FaqRow";
import {
  AlertIcon,
  LockIcon,
  ShieldIcon,
  DocIcon,
  CheckIcon,
  SparkleIcon,
} from "@/app/icons";

export const metadata: Metadata = {
  title: "IA générative et Barreau du Québec : conformité pour avocats en 2026 | Formio",
  description:
    "Le Barreau du Québec a publié son cadre sur l'IA générative. Les 10 obligations professionnelles touchées, les 5 risques identifiés, et comment structurer vos flux de travail pour rester conforme.",
  alternates: { canonical: "https://formio.ca/blog/barreau-qc-ia-generative" },
};

const faqItems = [
  {
    question: "L'utilisation de l'IA est-elle interdite par le Barreau du Québec ?",
    answer:
      "Non. Le Barreau ne l'interdit pas — il en encadre l'usage. L'IA générative peut servir à la recherche, à la rédaction ou à l'analyse, à condition que l'avocat supervise les résultats, maintienne sa responsabilité professionnelle et respecte les obligations de confidentialité et de transparence.",
    questionEn: "Is the use of AI prohibited by the Barreau du Québec?",
    answerEn:
      "No. The Barreau does not prohibit it — it regulates its use. Generative AI can be used for research, drafting, or analysis, provided the lawyer supervises the results, maintains professional responsibility, and complies with confidentiality and transparency obligations.",
  },
  {
    question: "Doit-on informer le client que l'on utilise l'IA ?",
    answer:
      "Oui. Le devoir de transparence du Barreau exige que le client comprenne comment ses renseignements sont utilisés. En pratique, cela signifie une divulgation claire dans le contrat de mandat ou dans un formulaire de consentement distinct, avant toute utilisation de l'IA sur son dossier.",
    questionEn: "Must the client be informed that AI is being used?",
    answerEn:
      "Yes. The Barreau's duty of transparency requires that the client understand how their information is used. In practice, this means a clear disclosure in the retainer agreement or a separate consent form before any AI use on their file.",
  },
  {
    question: "Qui est responsable si l'IA produit une erreur juridique ?",
    answer:
      "L'avocat — entièrement. Le Barreau est explicite : la responsabilité professionnelle ne peut pas être déléguée à un outil. C'est précisément pourquoi le cadre insiste sur la supervision obligatoire de tout résultat généré par l'IA avant qu'il soit soumis à un client ou à un tribunal.",
    questionEn: "Who is liable if AI produces a legal error?",
    answerEn:
      "The lawyer — entirely. The Barreau is explicit: professional liability cannot be delegated to a tool. This is precisely why the framework insists on mandatory review of any AI-generated output before it is submitted to a client or a court.",
  },
  {
    question: "Comment protéger la confidentialité du client quand on utilise l'IA ?",
    answer:
      "Ne soumettez jamais de données client identifiables à une plateforme IA externe sans garanties contractuelles claires. Privilégiez des déploiements sur serveurs privés ou des solutions qui anonymisent les données avant envoi. Documentez quels champs ont été traités par quel système. Formio vous permet de contrôler précisément ce qui atteint un service IA.",
    questionEn: "How do you protect client confidentiality when using AI?",
    answerEn:
      "Never submit identifiable client data to an external AI platform without clear contractual guarantees. Prefer private-server deployments or solutions that anonymize data before sending. Document which fields were processed by which system. Formio lets you control exactly what reaches an AI service.",
  },
  {
    question: "Formio est-il approuvé par le Barreau du Québec ?",
    answer:
      "Non. Aucun logiciel n'est officiellement homologué par le Barreau. Formio est un outil qui vous aide à structurer vos processus pour répondre aux obligations du Barreau. La conformité relève toujours de vous et de votre cabinet. Consultez un conseiller juridique pour toute question sur vos obligations spécifiques.",
    questionEn: "Is Formio approved by the Barreau du Québec?",
    answerEn:
      "No. No software is officially certified by the Barreau. Formio is a tool that helps you structure your processes to meet the Barreau's obligations. Compliance is always your and your firm's responsibility. Consult a legal advisor for questions about your specific obligations.",
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
  headline:
    "Generative AI and the Barreau du Québec: How lawyers can stay compliant in 2026",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  url: "https://formio.ca/blog/barreau-qc-ia-generative",
  author: { "@type": "Organization", name: "Formio", url: "https://formio.ca" },
  publisher: {
    "@type": "Organization",
    name: "Formio",
    url: "https://formio.ca",
    logo: { "@type": "ImageObject", url: "https://formio.ca/FormioTextBlue.svg" },
  },
  inLanguage: "fr-CA",
  articleSection: "Conformité",
  about: [
    {
      "@type": "Thing",
      name: "Barreau du Québec",
      sameAs: "https://www.barreau.qc.ca",
    },
    { "@type": "Thing", name: "Intelligence artificielle générative" },
    { "@type": "Thing", name: "Conformité professionnelle" },
  ],
};

const risks = [
  {
    Icon: AlertIcon,
    title: "Hallucinations",
    body: "L'IA invente de la jurisprudence, des citations ou des dispositions législatives qui n'existent pas. Un avocat qui soumet ces résultats sans vérification engage sa responsabilité.",
  },
  {
    Icon: LockIcon,
    title: "Violations de confidentialité",
    body: "Des données client identifiables soumises à une plateforme IA commerciale externe peuvent contrevenir au secret professionnel et à la Loi 25.",
  },
  {
    Icon: ShieldIcon,
    title: "Biais algorithmique",
    body: "Les systèmes IA peuvent produire des analyses juridiques biaisées selon les données d'entraînement, faussant l'évaluation de risques ou de chances de succès.",
  },
  {
    Icon: DocIcon,
    title: "Opacité du raisonnement",
    body: "L'impossibilité d'auditer le raisonnement d'un modèle IA contrevient aux exigences de traçabilité et rend la vérification du travail délicate.",
  },
  {
    Icon: CheckIcon,
    title: "Exposition à la responsabilité",
    body: "Des résultats IA non supervisés attribués à l'avocat sans documentation de révision constituent une faute professionnelle si ces résultats s'avèrent erronés.",
  },
];

const obligationsTable = [
  {
    obligation: "Compétence",
    risque: "Mécompréhension des limites et des biais de l'IA",
  },
  {
    obligation: "Non-discrimination",
    risque: "Biais algorithmique dans l'analyse ou la recommandation juridique",
  },
  {
    obligation: "Diligence et qualité",
    risque: "Résultats IA soumis sans supervision ni vérification",
  },
  {
    obligation: "Confidentialité",
    risque: "Données client transmises à des plateformes commerciales sans garanties",
  },
  {
    obligation: "Responsabilité de mandat",
    risque: "Dépendance aveugle aux résultats de l'IA sans jugement professionnel",
  },
  {
    obligation: "Transparence",
    risque: "Client non informé de l'utilisation de l'IA dans son dossier",
  },
  {
    obligation: "Honoraires justes",
    risque: "Gains d'efficacité IA non répercutés dans la facturation",
  },
  {
    obligation: "Obligations judiciaires",
    risque: "Contenus générés par l'IA soumis au tribunal sans divulgation",
  },
  {
    obligation: "Supervision du client",
    risque: "Client utilisant l'IA sur son propre dossier sans encadrement",
  },
  {
    obligation: "Équité procédurale",
    risque: "Parties non représentées désavantagées face à l'IA adverse",
  },
];

const coverageTable = [
  {
    obligation: "Confidentialité",
    formio:
      "Contrôle granulaire des champs transmis à l'IA. Déploiement sur serveur privé possible. Les données sensibles ne quittent pas votre périmètre.",
  },
  {
    obligation: "Transparence client",
    formio:
      "Écran de consentement IA obligatoire dans le flux de travail. Horodatage enregistré automatiquement. Aucun service IA ne démarre sans consentement documenté.",
  },
  {
    obligation: "Diligence et supervision",
    formio:
      "File d'approbation obligatoire : aucun résultat IA n'atteint le client ou le tribunal sans révision d'un avocat désigné. L'approbation est enregistrée.",
  },
  {
    obligation: "Responsabilité de mandat",
    formio:
      "Chaîne de custody complète : qui a approuvé quoi, quand, avec quelle annotation. Traçabilité intégrale par dossier.",
  },
  {
    obligation: "Honoraires justes",
    formio:
      "Timestamps à chaque étape du flux. Les équipes de facturation voient exactement où l'IA a accéléré le travail humain.",
  },
  {
    obligation: "Obligations judiciaires",
    formio:
      "Certificat de divulgation généré automatiquement : outil IA utilisé, superviseur responsable, date d'approbation. Prêt à joindre au dépôt.",
  },
];

const workflowChecklist = [
  "Déploiement IA sur serveur privé ou données anonymisées avant envoi externe",
  "Consentement client obtenu et horodaté avant tout traitement IA",
  "Aucun document IA n'atteint le client sans révision d'un avocat désigné",
  "Avocat superviseur identifié pour chaque tâche IA par dossier",
  "Mention d'utilisation de l'IA dans le contrat de mandat",
  "Certificat de divulgation joint à tout dépôt judiciaire IA",
  "Audit périodique des résultats IA pour détecter les biais systémiques",
  "Formation de base IA complétée par tous les avocats du cabinet",
];

export default function BarreauQcIaGenerativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* HERO */}
      <header className="bqia-hero section-cream">
        <div className="bqia-hero-inner container">
          <nav className="bqia-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>›</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden>›</span>
            <span>IA générative & Barreau du Québec</span>
          </nav>
          <p className="bqia-date">6 mai 2026 · 10 min de lecture</p>
          <h1 className="bqia-h1">
            IA générative et Barreau du Québec : comment les avocats peuvent rester{" "}
            <em className="bqia-accent">conformes</em>
          </h1>
          <p className="bqia-lead">
            Le Barreau du Québec a publié un cadre détaillé sur l&apos;usage de l&apos;IA générative.
            Voici les 10 obligations professionnelles touchées, les 5 risques identifiés,
            et comment structurer vos flux de travail pour vous protéger.
          </p>
        </div>
      </header>

      {/* ANCHOR NAV */}
      <nav className="bqia-anav" aria-label="Sections de la page">
        <div className="bqia-anav-inner">
          <a href="#cadre" className="bqia-anav-link">Cadre du Barreau</a>
          <a href="#risques" className="bqia-anav-link">5 risques identifiés</a>
          <a href="#obligations" className="bqia-anav-link">10 obligations</a>
          <a href="#formio" className="bqia-anav-link">Comment Formio couvre</a>
          <a href="#checklist" className="bqia-anav-link">Liste de conformité</a>
          <a href="#faq" className="bqia-anav-link">FAQ</a>
        </div>
      </nav>

      {/* SECTION 1: Cadre du Barreau */}
      <section id="cadre" className="bqia-section section-cream">
        <div className="bqia-narrow container">
          <h2 className="bqia-h2">Le Barreau du Québec a pris position.</h2>
          <p className="bqia-body">
            Le Barreau du Québec a publié un guide complet sur l&apos;intelligence artificielle générative
            (IAG), disponible dans l&apos;espace membres. Ce guide n&apos;est pas une interdiction —
            c&apos;est un cadre de gouvernance. Il couvre dix obligations professionnelles, identifie
            cinq catégories de risques, et met à disposition une boîte à outils pratique incluant
            des listes de vérification, une FAQ et des formations de niveau débutant à avancé.
          </p>
          <p className="bqia-body">
            Le message central est clair : <strong>l&apos;avocat demeure entièrement responsable</strong>.
            L&apos;IA peut assister, mais elle ne peut pas remplacer le jugement professionnel,
            et elle ne peut pas opérer en dehors d&apos;un processus documenté et vérifiable.
          </p>
          <div className="bqia-callout">
            <p>
              Le cadre du Barreau couvre dix devoirs professionnels et identifie cinq catégories
              de risques que chaque praticien doit comprendre avant de déployer tout outil IA
              dans son cabinet.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: 5 risques — dark panel */}
      <div className="bqia-panels-wrap">
        <section id="risques" className="bqia-dark-panel">
          <div className="bqia-dark-inner container">
            <div className="bqia-dark-copy">
              <h2>Les 5 risques identifiés par le Barreau.</h2>
              <p>
                Ce ne sont pas des mises en garde théoriques. Chacun de ces risques a déjà causé
                des incidents disciplinaires dans d&apos;autres barreaux. Le Barreau du Québec
                les documente pour que vous les anticipiez.
              </p>
            </div>
            <div className="bqia-risk-list">
              {risks.map(({ Icon, title, body }) => (
                <div key={title} className="bqia-risk-item">
                  <div className="bqia-risk-icon">
                    <Icon />
                  </div>
                  <div className="bqia-risk-copy">
                    <p className="bqia-risk-title">{title}</p>
                    <p className="bqia-risk-body">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: 10 obligations — table */}
      <section id="obligations" className="bqia-section section-cream">
        <div className="bqia-narrow container">
          <h2 className="bqia-h2">Les 10 obligations professionnelles touchées par l&apos;IA.</h2>
          <p className="bqia-body">
            Le Barreau a cartographié l&apos;IA générative contre l&apos;ensemble du spectre des devoirs
            de l&apos;avocat. Voici comment chaque obligation est exposée.
          </p>
          <div className="bqia-table-wrap">
            <table className="bqia-table">
              <thead>
                <tr>
                  <th className="bqia-th bqia-th-left">Obligation professionnelle</th>
                  <th className="bqia-th bqia-th-right">Risque IA associé</th>
                </tr>
              </thead>
              <tbody>
                {obligationsTable.map((row) => (
                  <tr key={row.obligation} className="bqia-tr">
                    <td className="bqia-td bqia-td-left">{row.obligation}</td>
                    <td className="bqia-td bqia-td-right">{row.risque}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="bqia-disclaimer">
            Source : Guide du Barreau du Québec sur l&apos;intelligence artificielle générative —
            espace membres, section Normes, outils et références.
          </p>
        </div>
      </section>

      {/* SECTION 4: Comment Formio couvre */}
      <section id="formio" className="bqia-section bqia-section-alt">
        <div className="bqia-narrow container">
          <h2 className="bqia-h2">Comment Formio répond à ces obligations.</h2>
          <p className="bqia-body">
            Formio est la couche de gouvernance qui s&apos;insère entre vos avocats, vos clients,
            vos outils IA et votre direction — transformant les processus IA invisibles en flux
            documentés, vérifiables et conformes.
          </p>
          <div className="bqia-table-wrap">
            <table className="bqia-table">
              <thead>
                <tr>
                  <th className="bqia-th bqia-th-left">Obligation</th>
                  <th className="bqia-th bqia-th-formio">Ce que Formio fait concrètement</th>
                </tr>
              </thead>
              <tbody>
                {coverageTable.map((row) => (
                  <tr key={row.obligation} className="bqia-tr">
                    <td className="bqia-td bqia-td-left">{row.obligation}</td>
                    <td className="bqia-td bqia-td-formio">{row.formio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="bqia-disclaimer">
            Formio ne certifie pas votre conformité au Barreau du Québec. Consultez votre
            conseiller juridique pour toute question sur vos obligations spécifiques.
          </p>
        </div>
      </section>

      {/* SECTION 5: Checklist */}
      <section id="checklist" className="bqia-checklist-section">
        <div className="bqia-narrow container">
          <h2 className="bqia-h2">Liste de conformité : workflow IA au cabinet.</h2>
          <p className="bqia-body">
            Avant de déployer l&apos;IA dans votre cabinet, passez cette liste en revue.
            Chaque élément correspond à une obligation concrète du cadre du Barreau.
          </p>
          <div className="bqia-check-list">
            {workflowChecklist.map((item, i) => (
              <label key={item} className="bqia-check-item">
                <input
                  type="checkbox"
                  className="bqia-check-input"
                  aria-label={item}
                />
                <span className="bqia-check-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="bqia-check-text">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bqia-section section-cream">
        <div className="bqia-narrow container">
          <h2 className="bqia-h2">Questions fréquentes.</h2>
          <div className="faq-list">
            {faqItems.map(({ question, answer }) => (
              <FaqRow key={question} question={question}>
                {answer}
              </FaqRow>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bqia-cta-section">
        <div className="container">
          <div className="bqia-cta-card">
            <div className="bqia-cta-glow" aria-hidden />
            <h2 className="bqia-cta-h2">
              Structurez vos flux IA.<br />Restez conforme.
            </h2>
            <p className="bqia-cta-sub">
              Consentement client, supervision avocat, certificat de divulgation — tout en un.
            </p>
            <Link href="/demo" className="btn-primary bqia-cta-btn">
              <SparkleIcon /> Voir Formio en action →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .bqia-hero { padding: 8rem 1.5rem 5rem; }
        .bqia-hero-inner { display: flex; flex-direction: column; gap: 1.75rem; max-width: 860px; }

        .bqia-breadcrumb {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.82rem; color: var(--gray-muted); font-weight: 500;
        }
        .bqia-breadcrumb a { color: var(--gray-muted); text-decoration: none; }
        .bqia-breadcrumb a:hover { color: var(--dark); }

        .bqia-date {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--gray-muted); margin: 0;
        }

        .bqia-h1 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          line-height: 1.06; letter-spacing: -0.025em;
          font-weight: 500; color: var(--dark); margin: 0; max-width: 24ch;
        }
        .bqia-accent { font-style: italic; color: var(--turquoise); }

        .bqia-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.15rem; color: var(--gray-text); line-height: 1.65;
          max-width: 60ch; margin: 0;
        }

        /* ── Anchor nav ── */
        .bqia-anav {
          background: var(--cream); border-bottom: 1px solid var(--border-soft);
          overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .bqia-anav::-webkit-scrollbar { display: none; }
        .bqia-anav-inner {
          display: flex; gap: 0.4rem; padding: 0.85rem 1.5rem;
          max-width: 1180px; margin: 0 auto; white-space: nowrap;
        }
        .bqia-anav-link {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.875rem; font-weight: 600; color: var(--gray-muted);
          padding: 0.45rem 1rem; border-radius: 999px;
          border: 1.5px solid var(--border-soft); display: inline-block;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .bqia-anav-link:hover { color: var(--dark); border-color: var(--dark); background: rgba(10,19,34,0.04); }

        /* ── Layout ── */
        .bqia-section { padding-top: 6rem; padding-bottom: 6rem; }
        .bqia-section-alt { background: #f8f8ee; }
        .bqia-narrow { max-width: 860px; margin: 0 auto; }

        .bqia-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.08; letter-spacing: -0.022em;
          font-weight: 500; color: var(--dark); margin: 0 0 1.5rem; max-width: 24ch;
        }
        .bqia-body {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--gray-text); line-height: 1.7;
          margin: 0 0 2rem;
        }
        .bqia-callout {
          background: rgba(14,116,144,0.06); border-left: 3px solid var(--turquoise);
          border-radius: 0 12px 12px 0; padding: 1rem 1.25rem;
        }
        .bqia-callout p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem; color: var(--gray-text); line-height: 1.65; margin: 0;
        }

        /* ── Dark panel ── */
        .bqia-panels-wrap { margin: 0 1rem; }
        @media (max-width: 700px) { .bqia-panels-wrap { margin: 0 0.5rem; } }
        .bqia-dark-panel {
          background: var(--dark); border-radius: 40px; padding: 7rem 2rem;
        }
        @media (max-width: 700px) { .bqia-dark-panel { border-radius: 28px; padding: 5rem 1.25rem; } }
        .bqia-dark-inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;
          max-width: 1100px; margin: 0 auto;
        }
        @media (max-width: 860px) { .bqia-dark-inner { grid-template-columns: 1fr; gap: 3rem; } }
        .bqia-dark-copy { display: flex; flex-direction: column; gap: 1.25rem; }
        .bqia-dark-copy h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 500; line-height: 1.1; letter-spacing: -0.02em;
          color: var(--cream-on-dark); margin: 0;
        }
        .bqia-dark-copy p { font-family: var(--font-figtree), sans-serif; font-size: 1.05rem; color: rgba(246,245,232,0.65); line-height: 1.7; margin: 0; }

        .bqia-risk-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .bqia-risk-item {
          display: flex; align-items: flex-start; gap: 1rem;
          background: rgba(246,245,232,0.05); border: 1px solid rgba(246,245,232,0.1);
          border-radius: 14px; padding: 1.1rem 1.25rem;
        }
        .bqia-risk-icon {
          width: 20px; height: 20px; color: rgba(14,200,230,0.8);
          flex-shrink: 0; margin-top: 2px;
        }
        .bqia-risk-icon svg { width: 100%; height: 100%; }
        .bqia-risk-copy { display: flex; flex-direction: column; gap: 0.3rem; }
        .bqia-risk-title {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.9rem; font-weight: 700; color: rgba(246,245,232,0.9);
          margin: 0; letter-spacing: 0.01em;
        }
        .bqia-risk-body {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.88rem; color: rgba(246,245,232,0.6); line-height: 1.55; margin: 0;
        }

        /* ── Tables ── */
        .bqia-table-wrap {
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          border-radius: 20px; border: 1px solid var(--border-soft);
          background: #ffffff; box-shadow: 0 4px 24px -12px rgba(10,19,34,0.08);
          margin-bottom: 1.25rem;
        }
        .bqia-table { width: 100%; border-collapse: collapse; font-family: var(--font-figtree), sans-serif; min-width: 480px; }
        .bqia-th {
          padding: 0.9rem 1.5rem; font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase; text-align: left;
          border-bottom: 2px solid var(--border-soft); white-space: nowrap;
        }
        .bqia-th-left { color: var(--gray-muted); width: 30%; }
        .bqia-th-right { color: var(--gray-muted); }
        .bqia-th-formio { color: var(--turquoise); background: rgba(14,116,144,0.04); }
        .bqia-tr:not(:last-child) .bqia-td { border-bottom: 1px solid var(--border-soft); }
        .bqia-td { padding: 0.85rem 1.5rem; font-size: 0.93rem; line-height: 1.55; vertical-align: top; }
        .bqia-td-left { font-weight: 600; color: var(--dark); }
        .bqia-td-right { color: var(--gray-text); }
        .bqia-td-formio { color: var(--gray-text); background: rgba(14,116,144,0.03); }
        .bqia-disclaimer {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.85rem; color: var(--gray-muted); line-height: 1.55; margin: 0;
          font-style: italic;
        }

        /* ── Checklist ── */
        .bqia-checklist-section {
          background: #f5f5e0;
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
          padding: 6rem 1.5rem;
        }
        .bqia-check-list { display: flex; flex-direction: column; gap: 0.6rem; margin-top: 2rem; }
        .bqia-check-item {
          display: flex; align-items: flex-start; gap: 1rem;
          padding: 1rem 1.25rem; border-radius: 14px;
          background: #ffffff; border: 1.5px solid var(--border-soft);
          cursor: pointer; transition: border-color 0.2s ease;
        }
        .bqia-check-item:hover { border-color: rgba(14,116,144,0.35); }
        .bqia-check-input {
          width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px;
          accent-color: var(--turquoise); cursor: pointer;
        }
        .bqia-check-num {
          font-family: var(--font-figtree), monospace;
          font-size: 0.75rem; font-weight: 700; color: var(--gray-muted);
          flex-shrink: 0; min-width: 2ch; margin-top: 1px;
        }
        .bqia-check-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: var(--dark); line-height: 1.5;
        }

        /* ── CTA ── */
        .bqia-cta-section { padding: 4rem 1.5rem 7rem; }
        .bqia-cta-card {
          max-width: 760px; margin: 0 auto;
          background: var(--dark); border-radius: 40px;
          padding: 5rem 3rem 4.5rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 1.5rem; text-align: center; position: relative; overflow: hidden;
        }
        .bqia-cta-glow {
          position: absolute; top: -40%; left: 20%; width: 60%; height: 100%;
          background: radial-gradient(ellipse at center, rgba(14,116,144,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .bqia-cta-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem); font-weight: 500;
          color: var(--cream-on-dark); line-height: 1.1;
          letter-spacing: -0.025em; margin: 0; position: relative; z-index: 1;
        }
        .bqia-cta-sub {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: rgba(246,245,232,0.45);
          margin: 0; position: relative; z-index: 1;
        }
        .bqia-cta-btn { position: relative; z-index: 1; }

        @media (max-width: 640px) {
          .bqia-hero { padding: 6rem 1.25rem 4rem; }
          .bqia-section { padding-top: 4.5rem; padding-bottom: 4.5rem; }
          .bqia-checklist-section { padding: 4.5rem 1.25rem; }
          .bqia-cta-card { border-radius: 28px; padding: 4rem 1.5rem 3.5rem; }
        }
      `}</style>
    </>
  );
}
