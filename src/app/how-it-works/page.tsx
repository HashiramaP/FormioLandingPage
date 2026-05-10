import type { Metadata } from "next";
import { HowItWorksClient } from "./HowItWorksClient";

export const metadata: Metadata = {
  title: "How Formio Works, Automate Immigration Forms in 6 Steps",
  description:
    "See exactly how Formio automates client intake and IRCC form filling for Quebec immigration lawyers. Simple 6-step process.",
  alternates: { canonical: "https://formio.ca/how-it-works" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment Formio automatise les formulaires d'immigration",
  url: "https://formio.ca/how-it-works",
  step: [
    { "@type": "HowToStep", position: 1, name: "Vous envoyez un lien",                         text: "Générez un lien depuis votre tableau de bord. Envoyez-le par e-mail ou texto. Votre client n'a pas besoin de créer un compte." },
    { "@type": "HowToStep", position: 2, name: "Votre client téléverse ses documents",          text: "Passeport, CV, pièces d'identité. Depuis son téléphone, en 5 minutes." },
    { "@type": "HowToStep", position: 3, name: "Formio extrait les données automatiquement",    text: "L'IA lit les documents et pré-remplit le formulaire. Nom, date de naissance, numéro de passeport, historique professionnel." },
    { "@type": "HowToStep", position: 4, name: "Votre client répond aux questions restantes",   text: "Questions simples. Oui/Non, cases à cocher. Depuis n'importe quel appareil." },
    { "@type": "HowToStep", position: 5, name: "Les formulaires officiels sont générés",        text: "Tous les IMMs, le portail IRCC, Arrima, remplis automatiquement, en français et en anglais, prêts à vérifier." },
    { "@type": "HowToStep", position: 6, name: "Vous vérifiez et soumettez",                   text: "Vous gardez le contrôle total. Vous vérifiez, vous corrigez, vous soumettez." },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HowItWorksClient />
    </>
  );
}
