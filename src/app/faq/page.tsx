import type { Metadata } from "next";
import Link from "next/link";
import { FaqRow } from "@/app/FaqRow";
import { SparkleIcon } from "@/app/icons";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes | Formio",
  description:
    "Toutes les réponses à vos questions sur Formio : sécurité, formulaires supportés, conformité CICC, intégration à votre workflow et plus.",
  alternates: { canonical: "https://formio.ca/faq" },
};

const sections = [
  {
    heading: "Général",
    items: [
      {
        question: "Qu'est-ce que Formio exactement ?",
        answer:
          "Formio est une plateforme qui automatise la collecte d'informations clients et le pré-remplissage des formulaires d'immigration. Vos clients répondent à un questionnaire intelligent depuis leur téléphone ; Formio extrait les données de leurs documents et génère automatiquement les formulaires IMM, Arrima et IRCC prêts à vérifier.",
      },
      {
        question: "À qui s'adresse Formio ?",
        answer:
          "Formio est conçu pour les consultants en immigration agréés (RCIC), les avocats en droit de l'immigration et les cabinets qui gèrent des volumes de dossiers récurrents. Si vous passez plus de 30 minutes par dossier à copier-coller des informations, Formio est fait pour vous.",
      },
      {
        question: "En combien de temps vais-je vraiment gagner du temps ?",
        answer:
          "Dès le premier dossier. Nos utilisateurs économisent en moyenne 3 à 4 heures par demande. Un formulaire IMM qui prenait 45 minutes se complète en moins de 10 minutes avec Formio.",
      },
    ],
  },
  {
    heading: "Formulaires et couverture",
    items: [
      {
        question: "Quels formulaires sont supportés ?",
        answer:
          "Formio supporte les formulaires IMM (immigration fédérale), le portail IRCC, Arrima (Québec), les permis de travail, les permis d'études et les visas visiteurs. De nouveaux formulaires sont ajoutés régulièrement selon les retours de nos utilisateurs.",
      },
      {
        question: "Formio fonctionne-t-il pour Express Entry et les PNP ?",
        answer:
          "Oui — Express Entry, tous les Programmes des candidats des provinces, Arrima (Québec), permis d'études, permis de travail et visas visiteurs sont tous pris en charge.",
      },
      {
        question: "Puis-je créer des questionnaires personnalisés par type de demande ?",
        answer:
          "Oui. Construisez des formulaires depuis zéro, clonez un modèle existant ou importez vos questionnaires Word ou PDF actuels via extraction par IA. Chaque type de visa peut avoir son propre questionnaire sur mesure.",
      },
    ],
  },
  {
    heading: "Sécurité et conformité",
    items: [
      {
        question: "Formio est-il conforme aux exigences de gestion de dossiers du CICC ?",
        answer:
          "Oui. Formio utilise un stockage chiffré sur des serveurs canadiens, enregistre le consentement client et maintient des pistes d'audit complètes qui répondent aux exigences du CICC.",
      },
      {
        question: "Où sont stockées les données de mes clients ?",
        answer:
          "Toutes les données sont chiffrées et hébergées sur des serveurs canadiens. Vous conservez la propriété complète de vos données et pouvez les exporter à tout moment. Formio ne revend ni ne partage aucune donnée client.",
      },
      {
        question: "Formio soumet-il les formulaires à ma place ?",
        answer:
          "Non. Formio pré-remplit les formulaires et vous laisse le contrôle total pour vérifier et soumettre vous-même. C'est votre expertise professionnelle qui finalise chaque dossier.",
      },
    ],
  },
  {
    heading: "Intégration et mise en place",
    items: [
      {
        question: "Combien de temps faut-il pour configurer Formio ?",
        answer:
          "La plupart des cabinets sont opérationnels en moins de 15 minutes. Il n'y a pas d'onboarding long ni de formation requise — si vous savez utiliser un formulaire en ligne, vous savez utiliser Formio.",
      },
      {
        question: "Est-ce que ça fonctionne avec mon workflow actuel ?",
        answer:
          "Oui. Formio remplace vos questionnaires Word et votre processus de copier-coller manuel. Vos clients remplissent un formulaire en ligne, et vous recevez les données structurées directement dans la plateforme — prêtes à être intégrées dans les formulaires officiels.",
      },
      {
        question: "Puis-je remplacer mes questionnaires Word existants ?",
        answer:
          "Oui. Vous pouvez importer vos questionnaires Word ou PDF existants via notre extraction par IA, qui les convertit automatiquement en formulaires interactifs. Vos clients obtiennent une expérience mobile moderne, vous recevez des données propres et structurées.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="faq-page">
      <div className="faq-page-hero">
        <span className="faq-eyebrow">FAQ</span>
        <h1>Questions fréquentes</h1>
        <p>Tout ce que vous voulez savoir sur Formio.</p>
      </div>

      <div className="faq-page-body">
        {sections.map((section) => (
          <div key={section.heading} className="faq-page-section">
            <h2 className="faq-page-section-heading">{section.heading}</h2>
            <div className="faq-list">
              {section.items.map((item) => (
                <FaqRow key={item.question} question={item.question}>
                  {item.answer}
                </FaqRow>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="faq-page-cta">
        <p>Vous ne trouvez pas la réponse que vous cherchez ?</p>
        <Link href="/book-call" className="btn-primary">
          <SparkleIcon /> Parler à l&apos;équipe
        </Link>
      </div>
    </main>
  );
}
