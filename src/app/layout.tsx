import type { Metadata } from "next";
import { EB_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MetaPixel from "./MetaPixel";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formio, Immigration Software for Canadian Consultants & RCICs",
  description: "Automate IRCC form filling, client intake, and document generation. Built for Canadian RCICs and immigration lawyers. Free trial, no credit card required.",
  alternates: { canonical: "https://formio.ca" },
  openGraph: {
    title: "Formio, Immigration Software for Canadian Consultants",
    description: "Automate your intake forms, IRCC pre-fill, and legal docs.",
    url: "https://formio.ca",
    siteName: "Formio",
    locale: "fr_CA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Formio", description: "Immigration software for Canadian consultants" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Formio",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Logiciel de gestion de cabinet pour avocats et consultants en immigration au Québec. Automatise les formulaires clients, génère les documents IRCC officiels, et offre un CRM, des analyses de cabinet et des relances automatiques par e-mail.",
    url: "https://formio.ca",
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: "0",
      description: "Free trial available",
    },
    featureList: [
      "IRCC form autofill",
      "Custom intake form builder",
      "AI document extraction",
      "IMM form generation (5710, 1294, 5707)",
      "Client CRM and progress tracking",
      "Firm analytics and forecasting",
      "Automated branded email follow-ups",
      "CASL-compliant consent tracking",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Formio",
    url: "https://formio.ca",
    description:
      "Canadian immigration software for RCICs, immigration lawyers, and consultants in Quebec and Canada.",
    addressCountry: "CA",
    addressRegion: "QC",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Formio est-il sécurisé pour les données de mes clients ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Formio ne soumet aucun document en votre nom et ne stocke aucune information client de façon permanente. Toutes les données sont chiffrées et traitées selon les normes de l'industrie juridique.",
        },
      },
      {
        "@type": "Question",
        name: "Quels formulaires sont supportés ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Formio supporte les formulaires IMM (immigration fédérale), Arrima (Québec) et IRCC. De nouveaux formulaires sont ajoutés régulièrement.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps vais-je réellement gagner ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos utilisateurs constatent jusqu'à 80% de temps gagné par formulaire. Un formulaire qui prenait 45 minutes se complète en 2 minutes avec Formio.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que ça fonctionne avec mon workflow actuel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Formio remplace vos questionnaires Word et votre copier-coller manuel. Vos clients remplissent un formulaire en ligne, et vous recevez les données structurées directement dans la plateforme.",
        },
      },
      {
        "@type": "Question",
        name: "Formio soumet-il les formulaires à ma place ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Formio pré-remplit les formulaires et vous laisse le contrôle total pour vérifier et soumettre vous-même. C'est votre expertise qui finalise le travail.",
        },
      },
      {
        "@type": "Question",
        name: "How is Formio different from CaseEasy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Formio focuses on custom intake form building with no application caps, while CaseEasy is a comprehensive legacy CRM. Setup takes hours not weeks, and Formio includes a full form builder for creating custom questionnaires per visa type.",
        },
      },
      {
        "@type": "Question",
        name: "Does Formio work for Express Entry and PNP applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes: Express Entry, all Provincial Nominee Programs, Arrima (Quebec), study permits, work permits, and visitor visas are all supported.",
        },
      },
      {
        "@type": "Question",
        name: "Is Formio compliant with CICC client file management requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Formio uses encrypted storage on Canadian servers, tracks client consent, and maintains complete audit trails that meet CICC requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can I create custom intake forms for different visa types?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes: build forms from scratch, fork existing templates, or import your existing Word or PDF intake forms via AI extraction.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to set up Formio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most firms are up and running in under 15 minutes. No lengthy onboarding or training required.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to client data? Where is it stored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All client data is encrypted and stored on Canadian servers. You retain full data ownership and can export at any time.",
        },
      },
      {
        "@type": "Question",
        name: "Can Formio replace my existing Word questionnaire process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Clients complete a mobile-friendly intake form, and you receive structured data ready for IRCC pre-filling, no more Word attachments by email.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${garamond.variable} ${figtree.variable}`}>
      <head>
        <link rel="alternate" hrefLang="fr-CA" href="https://formio.ca" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <MetaPixel />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
