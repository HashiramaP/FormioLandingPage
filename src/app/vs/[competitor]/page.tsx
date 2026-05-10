import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqRow } from "@/app/FaqRow";
import { VsSectionTabs } from "./VsSectionTabs";
import { GlobeIcon, WandIcon, ChatIcon, CheckIcon, SparkleIcon } from "@/app/icons";
import TrackEvent from "@/app/TrackEvent";

type Slug = "caseeasy" | "visto" | "visaflo";

type TableRow = {
  feature: string;
  formio: string;
  them: string;
  formioStyle: "good" | "neutral";
  themStyle: "good" | "neutral" | "bad";
};

type BuyerScenario = {
  scenario: string;
  recommendation: "formio" | "them";
  rationale: string;
};

type FaqItem = {
  qFr: string;
  aFr: string;
  qEn: string;
  aEn: string;
};

type CompetitorData = {
  name: string;
  intro: string[];
  verdictFormio: string;
  verdictThem: string;
  tableRows: TableRow[];
  sectionForms: string;
  sectionAutofill: string;
  sectionCrm: string;
  sectionPricing: string;
  sectionOnboarding: string;
  buyerScenarios: BuyerScenario[];
  faqMigration: FaqItem;
  faqCustomForms: FaqItem;
};

const FAQ_ARRIMA: FaqItem = {
  qFr: "Formio génère-t-il les formulaires Arrima et IRCC automatiquement ?",
  aFr: "Oui, les deux. Formio remplit le portail Arrima et le portail IRCC. Il génère aussi tous les formulaires IMM en français et en anglais. Aucun autre outil de cette comparaison ne supporte Arrima.",
  qEn: "Does Formio automatically generate Arrima and IRCC forms?",
  aEn: "Yes, both. Formio auto-fills the Quebec Arrima portal and the IRCC portal. It also generates all official IMM forms in French and English. No other tool in this comparison supports Arrima natively.",
};

const FAQ_TRIAL: FaqItem = {
  qFr: "Y a-t-il une période d'essai gratuite ?",
  aFr: "Oui. 30 jours, sans carte de crédit. Vous vous inscrivez et commencez le jour même. Pas d'appel commercial obligatoire.",
  qEn: "Is there a free trial period?",
  aEn: "Yes. 30 days, no credit card required. You sign up and start the same day. No mandatory sales call.",
};

const competitors: Record<Slug, CompetitorData> = {
  caseeasy: {
    name: "CaseEasy",
    intro: [
      "CaseEasy existe depuis 2017. C'est l'outil de gestion d'immigration le plus ancien sur le marché canadien.",
      "Les deux outils ne font pas la même chose. CaseEasy gère facturation, agenda et dossiers. Formio collecte les informations clients et produit les documents officiels.",
      "Pour les dossiers Arrima et les formulaires IMM bilingues, Formio est le bon choix. Pour la facturation et l'agenda intégrés, CaseEasy fait ça depuis 2017.",
    ],
    verdictFormio:
      "Vous êtes au Québec. Vous avez des dossiers Arrima. Vous voulez une interface en français et les formulaires IMM prêts à envoyer.",
    verdictThem:
      "Vous cherchez un outil tout-en-un avec facturation et agenda. CaseEasy fait ça depuis 2017.",
    tableRows: [
      { feature: "Formulaires pour chaque programme d'immigration", formio: "✓ Complet", them: "Limité", formioStyle: "good", themStyle: "bad" },
      { feature: "Constructeur de formulaires personnalisés", formio: "✓ Fork, édition, import Word/PDF", them: "Non", formioStyle: "good", themStyle: "bad" },
      { feature: "Extraction IA des documents (passeport, pièces)", formio: "✓ Gemini AI", them: "Non confirmé", formioStyle: "good", themStyle: "bad" },
      { feature: "Formulaires adaptés mobile", formio: "✓", them: "✓", formioStyle: "good", themStyle: "good" },
      { feature: "Auto-remplissage portail Arrima", formio: "✓", them: "✗", formioStyle: "good", themStyle: "bad" },
      { feature: "Auto-remplissage portail IRCC", formio: "✓", them: "✓", formioStyle: "good", themStyle: "good" },
      { feature: "Génération formulaires IMM (FR + EN)", formio: "✓ Complet, bilingue", them: "Partiel", formioStyle: "good", themStyle: "neutral" },
      { feature: "Relances automatiques par e-mail (marque cabinet)", formio: "✓", them: "Partiel", formioStyle: "good", themStyle: "neutral" },
      { feature: "Statistiques cabinet et prévisions", formio: "✓", them: "Partiel", formioStyle: "good", themStyle: "neutral" },
      { feature: "Interface en français", formio: "✓", them: "Partiel", formioStyle: "good", themStyle: "neutral" },
      { feature: "Prix de départ", formio: "Sur demande", them: "~79 $/utilisateur/mois", formioStyle: "neutral", themStyle: "neutral" },
      { feature: "Essai gratuit", formio: "30 jours", them: "7 jours", formioStyle: "good", themStyle: "bad" },
    ],
    sectionForms:
      "Formio inclut des formulaires pré-construits pour toutes les demandes fédérales et québécoises : Arrima, résidence permanente, parrainage, permis d'études et plus. Chacun est modifiable. Vous pouvez importer vos propres questionnaires Word via extraction IA. CaseEasy couvre les programmes courants. Il n'y a pas d'outil pour créer ou modifier les formulaires existants.",
    sectionAutofill:
      "Formio remplit automatiquement le portail Arrima et le portail IRCC. CaseEasy supporte le portail IRCC, mais pas Arrima. Formio génère l'ensemble des formulaires IMM en français et en anglais. CaseEasy n'en couvre qu'une partie, principalement en anglais.",
    sectionCrm:
      "Formio vous montre l'avancement de chaque client en temps réel. Vous voyez qui est bloqué, sans avoir à les appeler. Des rappels partent automatiquement par courriel, avec le nom et le logo de votre cabinet. CaseEasy fait du suivi de dossiers. Mais pas de rappels automatiques avec votre marque.",
    sectionPricing:
      "CaseEasy coûte environ 79 $ par utilisateur par mois, ce chiffre n'est pas affiché sur leur site. Deux consultants, c'est environ 158 $ par mois. Leur essai dure 7 jours. Formio offre 30 jours sans carte de crédit.",
    sectionOnboarding:
      "Formio est entièrement en français : les boutons, les messages, le support. CaseEasy est principalement en anglais. Formio se configure en moins de 15 minutes. CaseEasy demande plusieurs semaines de mise en place.",
    buyerScenarios: [
      {
        scenario: "Cabinet francophone au Québec avec des dossiers Arrima et résidence permanente",
        recommendation: "formio",
        rationale: "Arrima est inclus. L'interface est en français. Les programmes québécois sont préconfigurés.",
      },
      {
        scenario: "Cabinet qui veut un outil établi avec beaucoup d'utilisateurs et un long historique de support",
        recommendation: "them",
        rationale: "CaseEasy existe depuis 2017 avec une grande communauté d'utilisateurs.",
      },
      {
        scenario: "Cabinet qui doit gérer la facturation et l'agenda dans le même outil",
        recommendation: "them",
        rationale: "CaseEasy gère la facturation. Formio ne le fait pas.",
      },
      {
        scenario: "Cabinet qui veut les formulaires IMM prêts sans ressaisie manuelle",
        recommendation: "formio",
        rationale: "Formio remplit tous les IMMs en deux langues. Aucune ressaisie.",
      },
    ],
    faqMigration: {
      qFr: "Peut-on migrer depuis CaseEasy vers Formio ?",
      aFr: "Oui. CaseEasy exporte vos données en CSV. Notre équipe les importe dans Formio lors de la mise en place. Contactez support@formio.ca avant la fin de votre essai.",
      qEn: "Is it possible to migrate from CaseEasy to Formio?",
      aEn: "Yes. CaseEasy exports data as CSV. Our team imports it into Formio during onboarding. Contact support@formio.ca before your trial ends.",
    },
    faqCustomForms: {
      qFr: "CaseEasy propose-t-il un constructeur de formulaires personnalisés ?",
      aFr: "Non. CaseEasy n'a pas d'outil pour créer vos propres formulaires. Vous utilisez ce qui est disponible. Formio vous laisse modifier, copier ou importer vos questionnaires Word.",
      qEn: "Does CaseEasy offer a custom form builder?",
      aEn: "No. CaseEasy has no tool to create custom forms. You use what is available. Formio lets you edit, fork, or import your existing Word questionnaires.",
    },
  },

  visto: {
    name: "Visto",
    intro: [
      "Visto est fondé par un avocat en immigration. L'interface est moderne, le positionnement IA est fort.",
      "Les dossiers sont plafonnés selon le forfait. Dépasser la limite coûte 29 $ par dossier supplémentaire.",
      "Formio n'a aucun plafond de dossiers. Et il supporte Arrima. Visto ne le fait pas.",
    ],
    verdictFormio:
      "Vous avez plus de 15 dossiers par mois. Ou vous avez des dossiers Arrima. Ou vous avez besoin d'une interface en français.",
    verdictThem:
      "Vous avez moins de 10 dossiers par mois. Vous êtes à l'aise en anglais. Le modèle à plafond correspond à votre volume.",
    tableRows: [
      { feature: "Formulaires pour chaque programme d'immigration", formio: "✓ Complet", them: "Limité", formioStyle: "good", themStyle: "bad" },
      { feature: "Constructeur de formulaires personnalisés", formio: "✓ Fork, édition, import Word/PDF", them: "Non", formioStyle: "good", themStyle: "bad" },
      { feature: "Extraction IA des documents (passeport, pièces)", formio: "✓ Gemini AI", them: "Partiel", formioStyle: "good", themStyle: "neutral" },
      { feature: "Formulaires adaptés mobile", formio: "✓", them: "✓", formioStyle: "good", themStyle: "good" },
      { feature: "Auto-remplissage portail Arrima", formio: "✓", them: "✗", formioStyle: "good", themStyle: "bad" },
      { feature: "Auto-remplissage portail IRCC", formio: "✓", them: "✓", formioStyle: "good", themStyle: "good" },
      { feature: "Génération formulaires IMM (FR + EN)", formio: "✓ Complet, bilingue", them: "Partiel", formioStyle: "good", themStyle: "neutral" },
      { feature: "Relances automatiques par e-mail (marque cabinet)", formio: "✓", them: "Non confirmé", formioStyle: "good", themStyle: "bad" },
      { feature: "Statistiques cabinet et prévisions", formio: "✓", them: "Limité", formioStyle: "good", themStyle: "neutral" },
      { feature: "Interface en français", formio: "✓", them: "✗", formioStyle: "good", themStyle: "bad" },
      { feature: "Prix de départ", formio: "Sur demande", them: "199 $/mois", formioStyle: "neutral", themStyle: "neutral" },
      { feature: "Essai gratuit", formio: "30 jours", them: "30 jours", formioStyle: "good", themStyle: "good" },
    ],
    sectionForms:
      "Formio inclut des formulaires pré-construits pour toutes les demandes fédérales et québécoises. Chacun est modifiable. Vous pouvez aussi importer vos questionnaires Word via extraction IA. Visto couvre les programmes fédéraux courants. Il n'y a pas d'outil pour créer ou modifier les formulaires.",
    sectionAutofill:
      "Formio remplit le portail Arrima. Visto ne le supporte pas. Les deux remplissent le portail IRCC. Formio génère tous les formulaires IMM en français et en anglais. Visto n'en couvre qu'une sélection, principalement en anglais.",
    sectionCrm:
      "Formio vous montre l'avancement de chaque client en temps réel. Des rappels partent automatiquement avec le nom et le logo de votre cabinet. Vous voyez aussi vos statistiques par programme et les prévisions du mois. Visto a un CRM de base. Les rappels automatiques avec votre marque ne sont pas confirmés.",
    sectionPricing:
      "Visto coûte entre 199 $ et 999 $ par mois selon le forfait. Chaque dossier au-delà du plafond coûte 29 $. Sur le forfait de base, c'est 10 dossiers par mois. Ajoutez 29 $ pour chaque dossier supplémentaire. Formio n'a pas de plafond. Le coût est fixe, peu importe votre volume.",
    sectionOnboarding:
      "Visto est en anglais. Pour un cabinet francophone au Québec, ça crée une friction. Formio est entièrement en français, de l'interface au support. Les deux offrent 30 jours d'essai. Formio se configure en moins de 15 minutes.",
    buyerScenarios: [
      {
        scenario: "Cabinet québécois avec des dossiers Arrima ou PRTQ",
        recommendation: "formio",
        rationale: "Formio supporte Arrima. Visto ne le fait pas.",
      },
      {
        scenario: "Cabinet avec plus de 15 dossiers par mois",
        recommendation: "formio",
        rationale: "Avec Visto, chaque dossier en surplus coûte 29 $. Formio n'a pas de plafond.",
      },
      {
        scenario: "Consultant indépendant, moins de 10 dossiers par mois, à l'aise en anglais",
        recommendation: "them",
        rationale: "Le forfait de base à 199 $/mois peut convenir. La perspective d'avocat dans le design est un vrai avantage.",
      },
      {
        scenario: "Cabinet qui veut des rappels automatiques avec son nom et logo",
        recommendation: "formio",
        rationale: "Les rappels avec votre marque sont inclus dans Formio. Pas confirmé chez Visto.",
      },
    ],
    faqMigration: {
      qFr: "Peut-on migrer depuis Visto vers Formio ?",
      aFr: "Oui. Visto exporte vos données clients. Notre équipe les importe dans Formio lors de la mise en place. Contactez-nous avant la fin de votre essai.",
      qEn: "Is it possible to migrate from Visto to Formio?",
      aEn: "Yes. Visto exports client data. Our team imports it into Formio during onboarding. Contact us before your trial ends.",
    },
    faqCustomForms: {
      qFr: "Visto propose-t-il un constructeur de formulaires personnalisés ?",
      aFr: "Non. Visto n'a pas d'outil pour créer vos propres formulaires. Vous ne pouvez pas modifier les formulaires existants. Formio vous laisse copier, modifier ou importer vos questionnaires Word et PDF.",
      qEn: "Does Visto offer a custom form builder?",
      aEn: "No. Visto has no custom form builder. You cannot modify existing forms. Formio lets you copy, edit, or import your existing Word and PDF questionnaires.",
    },
  },

  visaflo: {
    name: "VisaFlo",
    intro: [
      "VisaFlo existe depuis environ 2024. L'accès se fait uniquement sur invitation.",
      "Il n'y a pas de tarif public. Pas d'avis sur Capterra ou G2.",
      "Formio est disponible maintenant. Vous créez un compte et commencez le jour même.",
    ],
    verdictFormio:
      "Vous avez besoin d'un outil cette semaine. Vous voulez connaître le prix avant de vous engager. Formio est en libre-service. Aucune liste d'attente.",
    verdictThem:
      "Vous êtes déjà sur la liste d'attente de VisaFlo. Vous êtes à l'aise avec un processus sur invitation. Vous pouvez attendre.",
    tableRows: [
      { feature: "Formulaires pour chaque programme d'immigration", formio: "✓ Complet", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Constructeur de formulaires personnalisés", formio: "✓ Fork, édition, import Word/PDF", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Extraction IA des documents (passeport, pièces)", formio: "✓ Gemini AI", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Formulaires adaptés mobile", formio: "✓", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Auto-remplissage portail Arrima", formio: "✓", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Auto-remplissage portail IRCC", formio: "✓", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Génération formulaires IMM (FR + EN)", formio: "✓ Complet, bilingue", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Relances automatiques par e-mail (marque cabinet)", formio: "✓", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Statistiques cabinet et prévisions", formio: "✓", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Interface en français", formio: "✓", them: "Inconnu", formioStyle: "good", themStyle: "bad" },
      { feature: "Prix de départ", formio: "Sur demande", them: "Non public", formioStyle: "neutral", themStyle: "bad" },
      { feature: "Essai gratuit", formio: "30 jours", them: "4 sem. (si approuvé)", formioStyle: "good", themStyle: "neutral" },
    ],
    sectionForms:
      "Formio inclut des formulaires pré-construits couvrant l'ensemble des programmes québécois et fédéraux. Le constructeur de formulaires est inclus dès le premier jour. VisaFlo ne publie pas ses fonctionnalités. Impossible de comparer avant d'avoir été approuvé.",
    sectionAutofill:
      "Formio remplit le portail Arrima et le portail IRCC. Tous les formulaires IMM sont générés en français et en anglais. Ces fonctionnalités sont disponibles dès l'inscription. VisaFlo ne publie rien sur ce sujet. Vous ne saurez qu'après avoir été approuvé.",
    sectionCrm:
      "Formio inclut un suivi de progression, des statistiques par programme et des rappels par courriel. Tout est disponible dès le premier jour. VisaFlo ne publie rien sur son CRM. Ces fonctionnalités sont inconnues avant d'avoir accès au produit.",
    sectionPricing:
      "VisaFlo n'affiche aucun tarif. Vous ne pouvez pas budgétiser avant d'être approuvé. Formio affiche ses tarifs sur demande. L'essai dure 30 jours, sans carte de crédit.",
    sectionOnboarding:
      "VisaFlo nécessite une invitation. Le délai d'approbation n'est pas communiqué. Formio est en libre-service. Vous vous inscrivez et commencez le jour même. Tout est en français.",
    buyerScenarios: [
      {
        scenario: "Cabinet qui a besoin d'un outil cette semaine",
        recommendation: "formio",
        rationale: "Formio est en libre-service. Aucune liste d'attente, aucune approbation.",
      },
      {
        scenario: "Cabinet qui veut connaître le tarif avant de s'engager",
        recommendation: "formio",
        rationale: "VisaFlo ne publie aucun tarif. Formio affiche les siens sur demande.",
      },
      {
        scenario: "Cabinet avec des dossiers Arrima ou une clientèle francophone au Québec",
        recommendation: "formio",
        rationale: "Le support Arrima et l'interface française de Formio sont disponibles dès l'inscription.",
      },
      {
        scenario: "Cabinet déjà approuvé par VisaFlo et prêt à évaluer le produit",
        recommendation: "them",
        rationale: "Si vous avez déjà accès et que le produit correspond à vos besoins, VisaFlo peut être un bon choix.",
      },
    ],
    faqMigration: {
      qFr: "Peut-on migrer depuis VisaFlo vers Formio ?",
      aFr: "VisaFlo ne publie pas de politique d'export. Contactez notre équipe support si vous voulez passer à Formio. Nous vous aidons à importer vos données depuis votre outil actuel.",
      qEn: "Is it possible to migrate from VisaFlo to Formio?",
      aEn: "VisaFlo does not publish a data export policy. Contact our support team if you want to switch to Formio. We will help you import your existing client data.",
    },
    faqCustomForms: {
      qFr: "VisaFlo propose-t-il un constructeur de formulaires personnalisés ?",
      aFr: "Impossible à confirmer. VisaFlo ne documente pas ses fonctionnalités publiquement. Formio a un constructeur complet disponible dès le premier jour. Vous pouvez copier, modifier ou importer vos questionnaires Word et PDF.",
      qEn: "Does VisaFlo offer a custom form builder?",
      aEn: "Impossible to confirm. VisaFlo does not publicly document its features. Formio provides a full form builder from day one: copy, edit, or import your existing Word and PDF questionnaires.",
    },
  },
};

export function generateStaticParams() {
  return (Object.keys(competitors) as Slug[]).map((competitor) => ({ competitor }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>;
}): Promise<Metadata> {
  const { competitor } = await params;
  const c = competitors[competitor as Slug];
  if (!c) return {};
  return {
    title: `Formio vs ${c.name}: Which Immigration Software to Choose in 2026`,
    description: `Honest comparison of Formio and ${c.name} for Quebec immigration lawyers and RCICs. Features, pricing, IMM auto-fill, and key differences.`,
    alternates: { canonical: `https://formio.ca/vs/${competitor}` },
  };
}

const DIFFS = [
  {
    Icon: GlobeIcon,
    heading: "Arrima et IRCC. Les deux portails.",
    body: "Formio remplit le portail Arrima et le portail IRCC. Aucun autre outil de cette comparaison ne supporte Arrima.",
  },
  {
    Icon: WandIcon,
    heading: "Constructeur de formulaires inclus.",
    body: "Modifiez, dupliquez ou importez vos questionnaires Word. Le constructeur est disponible dès le premier jour, sans surcoût.",
  },
  {
    Icon: ChatIcon,
    heading: "Interface entièrement en français.",
    body: "Les boutons, les messages, le support. Conçu pour les cabinets francophones au Québec.",
  },
];

export default async function CompetitorPage({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  const { competitor } = await params;
  const c = competitors[competitor as Slug];
  if (!c) notFound();

  const faqItems: FaqItem[] = [c.faqMigration, FAQ_ARRIMA, c.faqCustomForms, FAQ_TRIAL];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ qEn, aEn }) => ({
      "@type": "Question",
      name: qEn,
      acceptedAnswer: { "@type": "Answer", text: aEn },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://formio.ca" },
      { "@type": "ListItem", position: 2, name: "Comparatifs", item: "https://formio.ca/vs" },
      { "@type": "ListItem", position: 3, name: `Formio vs ${c.name}`, item: `https://formio.ca/vs/${competitor}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TrackEvent
        event="ViewContent"
        params={{
          content_name: `Comparison: Formio vs ${c.name}`,
          content_category: "comparison",
          content_ids: [competitor],
        }}
      />

      {/* ── HERO ── */}
      <header className="vs2-hero section-cream">
        <div className="vs2-hero-inner container">
          <nav className="vs2-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>›</span>
            <span>Comparatifs</span>
            <span aria-hidden>›</span>
            <span>Formio vs {c.name}</span>
          </nav>

          <p className="vs2-date">Dernière mise à jour : mai 2026</p>

          <h1 className="vs2-h1">
            Formio vs {c.name} : lequel{" "}
            <em className="vs2-accent">choisir</em> en 2026 ?
          </h1>

          <div className="vs2-intro">
            {c.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="vs2-verdict">
            <p className="vs2-verdict-label">Verdict</p>
            <div className="vs2-verdict-grid">
              <div className="vs2-verdict-formio">
                <p className="vs2-verdict-choice">Choisissez Formio si…</p>
                <p className="vs2-verdict-text">{c.verdictFormio}</p>
              </div>
              <div className="vs2-verdict-them">
                <p className="vs2-verdict-choice">Choisissez {c.name} si…</p>
                <p className="vs2-verdict-text">{c.verdictThem}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── ANCHOR NAV ── */}
      <nav className="vs2-anav" aria-label="Sections de la page">
        <div className="vs2-anav-inner">
          <a href="#tableau" className="vs2-anav-link">Tableau</a>
          <a href="#avantages" className="vs2-anav-link">Avantages clés</a>
          <a href="#portails" className="vs2-anav-link">Portails officiels</a>
          <a href="#details" className="vs2-anav-link">Comparaison détaillée</a>
          <a href="#profil" className="vs2-anav-link">Profil de cabinet</a>
          <a href="#faq" className="vs2-anav-link">FAQ</a>
        </div>
      </nav>

      {/* ── SECTION 1: Comparison table ── */}
      <section id="tableau" className="vs2-section section-cream">
        <div className="container">
          <h2 className="vs2-h2">Comparaison fonctionnelle.</h2>
          <div className="vs2-table-wrap">
            <table className="vs2-table">
              <thead>
                <tr>
                  <th className="vs2-th vs2-th-feat">Critère</th>
                  <th className="vs2-th vs2-th-formio">Formio</th>
                  <th className="vs2-th vs2-th-them">{c.name}</th>
                </tr>
              </thead>
              <tbody>
                {c.tableRows.map((row) => (
                  <tr key={row.feature} className="vs2-tr">
                    <td className="vs2-td vs2-td-feat">{row.feature}</td>
                    <td className={`vs2-td vs2-td-val vs2-${row.formioStyle}`}>{row.formio}</td>
                    <td className={`vs2-td vs2-td-val vs2-${row.themStyle}`}>{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: 3-up differentiators ── */}
      <section id="avantages" className="vs2-diff-section">
        <div className="container">
          <h2 className="vs2-h2">Trois avantages qui font la différence.</h2>
          <div className="vs2-diff-row">
            {DIFFS.map(({ Icon, heading, body }) => (
              <div key={heading} className="vs2-diff-item">
                <div className="vs2-diff-icon"><Icon /></div>
                <h3 className="vs2-diff-h">{heading}</h3>
                <p className="vs2-diff-p">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Dark autofill panel ── */}
      <div className="vs2-panels-wrap">
        <section id="portails" className="vs2-dark-panel">
          <div className="vs2-dark-inner container">
            <div className="vs2-dark-copy">
              <h2>Arrima et IRCC.<br />Zéro ressaisie.</h2>
              <p>
                Formio prend les données de votre questionnaire client et les injecte dans le portail
                Arrima et le portail IRCC. Les données sont structurées dès la collecte.
              </p>
              <p>
                Tous les formulaires IMM sont générés en français et en anglais.
                Un dossier Arrima complet en 8 minutes, pas 45.
              </p>
              <Link href="/demo" className="btn-primary vs2-dark-cta">
                <SparkleIcon /> Voir la démo →
              </Link>
            </div>

            <div className="vs2-dark-visual">
              <div className="vs2-portal-wrap">
                <div className="vs2-portal-chrome">
                  <span className="vs2-p-dot" /><span className="vs2-p-dot" /><span className="vs2-p-dot" />
                  <span className="vs2-p-url">Arrima, Portail gouvernemental du Québec</span>
                </div>
                <div className="vs2-portal-body">
                  <div className="vs2-portal-title">Dossier PEQ : Informations personnelles</div>
                  {[
                    { label: "Nom de famille", value: "Tremblay" },
                    { label: "Prénom", value: "Marie-Claude" },
                    { label: "Date de naissance", value: "15 avril 1988" },
                    { label: "Statut actuel", value: "Diplômée québécoise" },
                    { label: "Employeur (Québec)", value: "Intact Assurance" },
                    { label: "Niveau de français", value: "DELF B2" },
                  ].map(({ label, value }) => (
                    <div key={label} className="vs2-portal-row">
                      <span className="vs2-portal-label">{label}</span>
                      <span className="vs2-portal-val">
                        {value}
                        <span className="vs2-portal-check" aria-hidden>✓</span>
                      </span>
                    </div>
                  ))}
                  <div className="vs2-portal-badge">
                    <span className="vs2-portal-badge-icon" aria-hidden>
                      <CheckIcon />
                    </span>
                    6 champs auto-remplis depuis Formio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION 4: Tabbed deep-dive ── */}
      <section id="details" className="vs2-tabs-section">
        <div className="container">
          <div className="vs2-section-head">
            <h2 className="vs2-h2">Comparaison en détail.</h2>
            <p className="vs2-section-lead">Cinq critères. Une réponse claire pour chacun.</p>
          </div>
          <VsSectionTabs
            forms={c.sectionForms}
            autofill={c.sectionAutofill}
            crm={c.sectionCrm}
            pricing={c.sectionPricing}
            onboarding={c.sectionOnboarding}
          />
        </div>
      </section>

      {/* ── SECTION 5: Buyer scenarios ── */}
      <section id="profil" className="vs2-section section-cream">
        <div className="container">
          <h2 className="vs2-h2">Quel outil correspond à votre cabinet ?</h2>
          <div className="vs2-scenarios">
            {c.buyerScenarios.map((s, i) => (
              <div key={i} className={`vs2-scenario vs2-scenario-${s.recommendation}`}>
                <p className="vs2-scenario-label">
                  {s.recommendation === "formio" ? "→ Formio" : `→ ${c.name}`}
                </p>
                <p className="vs2-scenario-case">{s.scenario}</p>
                <p className="vs2-scenario-why">{s.rationale}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="vs2-faq-section section-cream">
        <div className="vs2-faq-inner container">
          <h2 className="vs2-h2">Questions fréquentes.</h2>
          <div className="faq-list vs2-faq-list">
            {faqItems.map(({ qFr, aFr }) => (
              <FaqRow key={qFr} question={qFr}>{aFr}</FaqRow>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER COMPARISONS ── */}
      {(() => {
        const others = (Object.entries(competitors) as [Slug, CompetitorData][]).filter(([slug]) => slug !== competitor);
        return (
          <section className="vs2-others-section section-cream">
            <div className="container">
              <p className="vs2-others-label">Comparez aussi</p>
              <div className="vs2-others-grid">
                {others.map(([slug, other]) => (
                  <Link key={slug} href={`/vs/${slug}`} className="vs2-other-card">
                    <span className="vs2-other-title">Formio vs {other.name}</span>
                    <p className="vs2-other-excerpt">{other.intro[0]}</p>
                    <span className="vs2-other-cta">Voir la comparaison →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── CTA ── */}
      <section className="vs2-cta-section">
        <div className="container">
          <div className="vs2-cta-card">
            <div className="vs2-cta-glow" aria-hidden />
            <h2 className="vs2-cta-h2">
              Essayez Formio gratuitement.<br />30 jours.
            </h2>
            <p className="vs2-cta-sub">Sans carte de crédit. Opérationnel en 15 minutes.</p>
            <div className="vs2-cta-btns">
              <Link href="/book-call" className="btn-primary">
                <SparkleIcon /> Réserver une démo
              </Link>
              <Link href="/demo" className="vs2-cta-ghost">
                Voir Formio en action →
              </Link>
            </div>
            <div className="vs2-cta-stats">
              <div className="vs2-cta-stat">
                <div className="vs2-cta-stat-val">8 min</div>
                <div className="vs2-cta-stat-lbl">Un dossier Arrima complet</div>
              </div>
              <div className="vs2-cta-stat">
                <div className="vs2-cta-stat-val">4h</div>
                <div className="vs2-cta-stat-lbl">Économisées par demande</div>
              </div>
              <div className="vs2-cta-stat">
                <div className="vs2-cta-stat-val">30j</div>
                <div className="vs2-cta-stat-lbl">Essai gratuit sans carte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* disable GSAP initial-state */
        .anim-fade { opacity: 1 !important; transform: none !important; }
        .anim-word { opacity: 1 !important; transform: none !important; }

        /* ── Hero ── */
        .vs2-hero { padding: 8rem 1.5rem 5rem; }
        .vs2-hero-inner {
          display: flex; flex-direction: column; gap: 2rem; max-width: 860px;
        }

        .vs2-breadcrumb {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.82rem; color: var(--gray-muted); font-weight: 500;
        }
        .vs2-breadcrumb a { color: var(--gray-muted); text-decoration: none; }
        .vs2-breadcrumb a:hover { color: var(--dark); }

        .vs2-date {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--gray-muted); margin: -0.75rem 0 0;
        }

        .vs2-h1 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          line-height: 1.04; letter-spacing: -0.03em;
          font-weight: 500; color: var(--dark); margin: 0;
        }
        .vs2-accent { font-style: italic; color: var(--turquoise); }

        .vs2-intro { display: flex; flex-direction: column; gap: 0.6rem; }
        .vs2-intro p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--gray-text); line-height: 1.65; margin: 0;
        }

        .vs2-verdict {
          background: #ffffff; border: 1px solid var(--border-soft);
          border-radius: 20px; padding: 1.5rem 2rem;
          box-shadow: 0 4px 24px -12px rgba(10,19,34,0.08);
        }
        .vs2-verdict-label {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--brand); margin: 0 0 1rem;
        }
        .vs2-verdict-grid {
          display: grid; grid-template-columns: 1fr; gap: 1rem;
        }
        @media (min-width: 600px) { .vs2-verdict-grid { grid-template-columns: 1fr 1fr; } }
        .vs2-verdict-formio, .vs2-verdict-them {
          padding: 1.1rem 1.25rem; border-radius: 14px;
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .vs2-verdict-formio { background: rgba(0,136,255,0.05); border: 1px solid rgba(0,136,255,0.15); }
        .vs2-verdict-them { background: rgba(10,19,34,0.03); border: 1px solid var(--border-soft); }
        .vs2-verdict-choice {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.78rem; font-weight: 800; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--brand); margin: 0;
        }
        .vs2-verdict-them .vs2-verdict-choice { color: var(--gray-muted); }
        .vs2-verdict-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.95rem; color: var(--gray-text); line-height: 1.6; margin: 0;
        }

        /* ── Anchor nav ── */
        .vs2-anav {
          background: var(--cream); border-bottom: 1px solid var(--border-soft);
          overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .vs2-anav::-webkit-scrollbar { display: none; }
        .vs2-anav-inner {
          display: flex; gap: 0.4rem; padding: 0.85rem 1.5rem;
          max-width: 1180px; margin: 0 auto; white-space: nowrap;
        }
        .vs2-anav-link {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.875rem; font-weight: 600; color: var(--gray-muted);
          padding: 0.45rem 1rem; border-radius: 999px;
          border: 1.5px solid var(--border-soft);
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          display: inline-block;
        }
        .vs2-anav-link:hover { color: var(--dark); border-color: var(--dark); background: rgba(10,19,34,0.04); }

        /* ── Section scaffold ── */
        .vs2-section { padding-top: 6rem; padding-bottom: 6rem; }
        .vs2-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          line-height: 1.08; letter-spacing: -0.022em;
          font-weight: 500; color: var(--dark); margin: 0 0 2.5rem; max-width: 22ch;
        }
        .vs2-section-head { margin-bottom: 3rem; display: flex; flex-direction: column; gap: 0.85rem; }
        .vs2-section-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.05rem; color: var(--gray-text); line-height: 1.65;
          max-width: 58ch; margin: 0;
        }

        /* ── Table ── */
        .vs2-table-wrap {
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          border-radius: 20px; border: 1px solid var(--border-soft);
          background: #ffffff;
          box-shadow: 0 4px 24px -12px rgba(10,19,34,0.08);
        }
        .vs2-table { width: 100%; border-collapse: collapse; font-family: var(--font-figtree), sans-serif; min-width: 520px; }
        .vs2-th {
          padding: 1rem 1.5rem; font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase; text-align: left;
          border-bottom: 2px solid var(--border-soft); white-space: nowrap;
        }
        .vs2-th-feat { color: var(--gray-muted); width: 44%; }
        .vs2-th-formio { color: var(--brand); background: rgba(0,136,255,0.03); }
        .vs2-th-them { color: var(--gray-muted); }
        .vs2-tr:not(:last-child) .vs2-td { border-bottom: 1px solid var(--border-soft); }
        .vs2-td { padding: 0.85rem 1.5rem; font-size: 0.93rem; line-height: 1.45; vertical-align: middle; }
        .vs2-td-feat { font-weight: 600; color: var(--dark); }
        .vs2-td-val { font-weight: 500; }
        .vs2-th-formio, .vs2-td:nth-child(2) { background: rgba(0,136,255,0.03); }
        .vs2-good    { color: #0a7a4b; }
        .vs2-neutral { color: var(--gray-text); }
        .vs2-bad     { color: var(--gray-muted); }

        /* ── 3-up differentiators ── */
        .vs2-diff-section {
          background: #f5f5e0;
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
          padding: 6rem 1.5rem;
        }
        .vs2-diff-row {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 3.5rem;
        }
        @media (max-width: 860px) { .vs2-diff-row { grid-template-columns: 1fr; gap: 2.5rem; } }
        .vs2-diff-item { display: flex; flex-direction: column; gap: 0.85rem; }
        .vs2-diff-icon { width: 40px; height: 40px; color: var(--turquoise); }
        .vs2-diff-icon svg { width: 100%; height: 100%; }
        .vs2-diff-h {
          font-family: var(--font-garamond), serif;
          font-size: 1.35rem; font-weight: 500; color: var(--dark);
          letter-spacing: -0.01em; line-height: 1.25; margin: 0;
        }
        .vs2-diff-p {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.97rem; color: var(--gray-text); line-height: 1.65; margin: 0;
        }

        /* ── Dark autofill panel ── */
        .vs2-panels-wrap { margin: 0 1rem; }
        @media (max-width: 700px) { .vs2-panels-wrap { margin: 0 0.5rem; } }

        .vs2-dark-panel {
          background: var(--dark); border-radius: 40px;
          padding: 7rem 2rem; position: relative;
        }
        @media (max-width: 700px) { .vs2-dark-panel { border-radius: 28px; padding: 5rem 1.25rem; } }

        .vs2-dark-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: center;
        }
        @media (max-width: 900px) { .vs2-dark-inner { grid-template-columns: 1fr; gap: 3rem; } }

        .vs2-dark-copy { display: flex; flex-direction: column; gap: 1.5rem; }
        .vs2-dark-copy h2 { color: var(--cream-on-dark); line-height: 1.1; }
        .vs2-dark-copy p { font-size: 1.05rem; line-height: 1.7; color: rgba(246,245,232,0.7); }
        .vs2-dark-cta { align-self: flex-start; }

        /* Portal mockup */
        .vs2-portal-wrap {
          border: 1.5px solid rgba(246,245,232,0.15);
          border-radius: 18px; overflow: hidden;
          background: rgba(246,245,232,0.04);
        }
        .vs2-portal-chrome {
          background: rgba(246,245,232,0.06); padding: 0.6rem 1rem;
          display: flex; align-items: center; gap: 0.4rem;
          border-bottom: 1px solid rgba(246,245,232,0.08);
        }
        .vs2-p-dot {
          width: 9px; height: 9px; border-radius: 999px;
          background: rgba(246,245,232,0.18); display: inline-block;
        }
        .vs2-p-url {
          font-size: 0.7rem; color: rgba(246,245,232,0.3);
          font-family: var(--font-figtree), sans-serif; margin-left: 0.6rem;
        }
        .vs2-portal-body { padding: 1.25rem 1.25rem 1rem; display: flex; flex-direction: column; gap: 0.4rem; }
        .vs2-portal-title {
          font-size: 0.82rem; font-weight: 600;
          font-family: var(--font-figtree), sans-serif;
          color: rgba(246,245,232,0.8); margin-bottom: 0.5rem;
        }
        .vs2-portal-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.45rem 0.6rem; border-radius: 8px;
          background: rgba(246,245,232,0.04); border: 1px solid rgba(246,245,232,0.07);
          gap: 0.5rem;
        }
        .vs2-portal-label {
          font-size: 0.75rem; color: rgba(246,245,232,0.4);
          font-family: var(--font-figtree), sans-serif; flex-shrink: 0;
        }
        .vs2-portal-val {
          font-size: 0.8rem; color: rgba(246,245,232,0.82);
          font-family: var(--font-figtree), sans-serif;
          display: flex; align-items: center; gap: 0.4rem;
        }
        .vs2-portal-check { font-size: 0.7rem; color: rgba(14,200,230,0.8); }
        .vs2-portal-badge {
          display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;
          font-size: 0.78rem; font-weight: 600;
          font-family: var(--font-figtree), sans-serif;
          color: rgba(14,200,230,0.85);
          background: rgba(14,116,144,0.2); border-radius: 8px; padding: 0.5rem 0.75rem;
        }
        .vs2-portal-badge-icon { width: 14px; height: 14px; display: flex; flex-shrink: 0; color: rgba(14,200,230,0.85); }
        .vs2-portal-badge-icon svg { width: 100%; height: 100%; }

        /* ── Tabbed sections ── */
        .vs2-tabs-section {
          background: #f5f5e0;
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
          padding: 6rem 1.5rem;
        }
        .vst-wrap { max-width: 860px; }
        .vst-nav {
          display: flex; gap: 0;
          border-bottom: 2px solid var(--border-soft);
          margin-bottom: 2.5rem; overflow-x: auto; scrollbar-width: none;
        }
        .vst-nav::-webkit-scrollbar { display: none; }
        .vst-btn {
          display: inline-flex; align-items: center;
          padding: 0.85rem 1.35rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.95rem; font-weight: 600; color: var(--gray-muted);
          background: none; border: none; border-bottom: 3px solid transparent;
          margin-bottom: -2px; cursor: pointer; white-space: nowrap;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .vst-btn:hover { color: var(--dark); }
        .vst-btn-on { color: var(--dark); border-bottom-color: var(--turquoise); }
        .vst-body { padding: 0; }
        .vst-text {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.1rem; color: var(--gray-text); line-height: 1.7; margin: 0;
          border-left: 3px solid var(--turquoise);
          padding-left: 1.5rem;
        }

        /* ── Buyer scenarios ── */
        .vs2-scenarios {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }
        @media (max-width: 700px) { .vs2-scenarios { grid-template-columns: 1fr; } }
        .vs2-scenario {
          border-radius: 18px; padding: 1.5rem;
          display: flex; flex-direction: column; gap: 0.55rem;
        }
        .vs2-scenario-formio {
          background: rgba(0,136,255,0.05); border: 1px solid rgba(0,136,255,0.15);
        }
        .vs2-scenario-them {
          background: #ffffff; border: 1px solid var(--border-soft);
        }
        .vs2-scenario-label {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.75rem; font-weight: 800; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--brand); margin: 0;
        }
        .vs2-scenario-them .vs2-scenario-label { color: var(--gray-muted); }
        .vs2-scenario-case {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.95rem; font-weight: 600; color: var(--dark);
          line-height: 1.45; margin: 0;
        }
        .vs2-scenario-why {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.9rem; color: var(--gray-text); line-height: 1.55; margin: 0;
        }

        /* ── FAQ ── */
        .vs2-faq-section { padding-bottom: 8rem; }
        .vs2-faq-inner { max-width: 860px; }
        .vs2-faq-list { margin-top: 0; }

        /* ── CTA card ── */
        .vs2-cta-section { padding: 4rem 1.5rem 7rem; }
        .vs2-cta-card {
          max-width: 1100px; margin: 0 auto;
          background: var(--dark); border-radius: 40px;
          padding: 6rem 3rem 5rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 2rem; text-align: center; position: relative; overflow: hidden;
        }
        .vs2-cta-glow {
          position: absolute; top: -40%; left: 20%; width: 60%; height: 100%;
          background: radial-gradient(ellipse at center, rgba(14,116,144,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .vs2-cta-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.75rem); font-weight: 500;
          color: var(--cream-on-dark); line-height: 1.1;
          letter-spacing: -0.025em; margin: 0; position: relative; z-index: 1;
        }
        .vs2-cta-sub {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: rgba(246,245,232,0.45);
          margin: 0; position: relative; z-index: 1;
        }
        .vs2-cta-btns {
          display: flex; gap: 0.85rem; flex-wrap: wrap;
          justify-content: center; position: relative; z-index: 1;
        }
        .vs2-cta-ghost {
          display: inline-flex; align-items: center;
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; font-weight: 600;
          color: rgba(246,245,232,0.65);
          padding: 0.95rem 1.65rem; border-radius: 999px;
          border: 1.5px solid rgba(246,245,232,0.2);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .vs2-cta-ghost:hover { color: rgba(246,245,232,0.95); border-color: rgba(246,245,232,0.45); }
        .vs2-cta-stats {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem; width: 100%; max-width: 560px;
          position: relative; z-index: 1;
          padding-top: 1rem; border-top: 1px solid rgba(246,245,232,0.1);
        }
        .vs2-cta-stat { display: flex; flex-direction: column; gap: 0.25rem; }
        .vs2-cta-stat-val {
          font-family: var(--font-garamond), serif;
          font-size: 2rem; font-weight: 500; color: var(--turquoise);
          letter-spacing: -0.02em; line-height: 1;
        }
        .vs2-cta-stat-lbl {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.8rem; color: rgba(246,245,232,0.4); line-height: 1.3;
        }

        /* ── Other comparisons ── */
        .vs2-others-section { padding-top: 0; padding-bottom: 5rem; }
        .vs2-others-label {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--gray-muted);
          margin: 0 0 1.25rem;
        }
        .vs2-others-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }
        .vs2-other-card {
          display: flex; flex-direction: column; gap: 0.65rem;
          padding: 1.75rem 1.75rem 2rem;
          background: #ffffff; border: 1px solid var(--border-soft);
          border-radius: 20px;
          box-shadow: 0 2px 12px -6px rgba(10,19,34,0.08);
          text-decoration: none;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .vs2-other-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px -10px rgba(10,19,34,0.15);
        }
        .vs2-other-title {
          font-family: var(--font-garamond), serif;
          font-size: 1.3rem; font-weight: 500; color: var(--dark);
          letter-spacing: -0.01em;
        }
        .vs2-other-excerpt {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.9rem; color: var(--gray-text); line-height: 1.6; margin: 0;
          flex: 1;
        }
        .vs2-other-cta {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.88rem; font-weight: 600; color: var(--turquoise);
        }

        @media (max-width: 640px) {
          .vs2-cta-card { border-radius: 28px; padding: 4rem 1.5rem 3.5rem; }
          .vs2-hero { padding: 6rem 1.25rem 4rem; }
          .vs2-section { padding-top: 4.5rem; padding-bottom: 4.5rem; }
          .vs2-diff-section { padding: 4.5rem 1.25rem; }
          .vs2-tabs-section { padding: 4.5rem 1.25rem; }
        }
      `}</style>
    </>
  );
}
