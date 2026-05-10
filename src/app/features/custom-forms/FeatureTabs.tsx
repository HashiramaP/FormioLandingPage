"use client";

import { useState } from "react";
import { ClockIcon, FolderIcon, WandIcon, UploadIcon } from "@/app/icons";

const TABS = [
  {
    id: "template",
    label: "Depuis un modèle",
    Icon: FolderIcon,
    time: "10 à 20 min",
    steps: [
      "Choisissez un point de départ dans la bibliothèque Formio",
      "Renommez ou reformulez chaque question selon vos formulations",
      "Ajoutez vos propres sections depuis la bibliothèque de types de champs",
      "Supprimez ce qui ne s'applique pas à votre programme",
      "Publiez pour l'ensemble de votre cabinet en un clic",
    ],
    note: "Le modèle d'origine reste intact. Votre version est entièrement indépendante.",
    mockup: "template",
  },
  {
    id: "scratch",
    label: "De zéro",
    Icon: WandIcon,
    time: "1 à 3 heures",
    steps: [
      "Ouvrez le constructeur de questionnaire Formio",
      "Ajoutez des questions une par une depuis la bibliothèque de types",
      "Choisissez le type de champ: texte libre, oui/non, date, choix multiple, téléversement",
      "Configurez les dépendances conditionnelles entre questions",
      "Testez le questionnaire client avant publication",
    ],
    note: "Le type de champ est toujours contrôlé par Formio. Les données restent structurées et compatibles avec la génération automatique de documents légaux.",
    mockup: "scratch",
  },
  {
    id: "import",
    label: "Import Word ou PDF",
    Icon: UploadIcon,
    time: "Moins de 3 min",
    steps: [
      "Téléversez votre fichier Word ou PDF existant",
      "Gemini extrait chaque question et mappe le type de champ automatiquement",
      "Vérifiez les champs mappés, corrigez si nécessaire",
      "Publiez pour l'ensemble de votre cabinet en un clic",
    ],
    note: "Un questionnaire standard de 30 à 50 questions est prêt en moins de 3 minutes. Aucune recopie manuelle.",
    mockup: "import",
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div className="ft-wrap">
      <div className="ft-nav" role="tablist">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={i === active}
            className={`ft-tab ${i === active ? "ft-tab-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="ft-tab-icon">
              <t.Icon />
            </span>
            {t.label}
          </button>
        ))}
      </div>

      <div className="ft-body" role="tabpanel">
        <div className="ft-steps-col">
          <div className="ft-time-badge">
            <span className="ft-time-icon"><ClockIcon /></span>
            {tab.time}
          </div>
          <ol className="ft-step-list">
            {tab.steps.map((step, i) => (
              <li key={i} className="ft-step">
                <span className="ft-step-num">{i + 1}</span>
                <span className="ft-step-text">{step}</span>
              </li>
            ))}
          </ol>
          <p className="ft-note">{tab.note}</p>
        </div>

        <div className="ft-visual-col">
          <div className="ft-mockup">
            <div className="ft-mockup-bar">
              <span className="ft-dot" />
              <span className="ft-dot" />
              <span className="ft-dot" />
              <span className="ft-mockup-title">Formio</span>
            </div>
            <div className="ft-mockup-body">
              {active === 0 && <TemplateMockup />}
              {active === 1 && <ScratchMockup />}
              {active === 2 && <ImportMockup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateMockup() {
  const items = [
    { name: "Résidence permanente", tag: "Fédéral" },
    { name: "Permis de travail ouvert", tag: "Fédéral" },
    { name: "Permis d'études", tag: "Fédéral" },
    { name: "Arrima : PEQ", tag: "Québec", active: true },
    { name: "Regroupement familial", tag: "Fédéral" },
  ];
  return (
    <div className="ft-tpl">
      <div className="ft-tpl-label">Bibliothèque de modèles</div>
      {items.map((item) => (
        <div key={item.name} className={`ft-tpl-row ${item.active ? "ft-tpl-row-active" : ""}`}>
          <span className="ft-tpl-name">{item.name}</span>
          <span className="ft-tpl-tag">{item.tag}</span>
          <span className="ft-tpl-action">Dupliquer →</span>
        </div>
      ))}
    </div>
  );
}

function ScratchMockup() {
  const questions = [
    { type: "Texte libre", label: "Quel est votre pays de naissance ?" },
    { type: "Oui / Non", label: "Avez-vous déjà été refusé ?" },
    { type: "Date", label: "Date d'expiration du passeport" },
    { type: "Choix multiple", label: "Statut civil actuel" },
  ];
  return (
    <div className="ft-scr">
      <div className="ft-scr-label">Nouveau questionnaire</div>
      {questions.map((q) => (
        <div key={q.label} className="ft-scr-row">
          <span className="ft-scr-type">{q.type}</span>
          <span className="ft-scr-q">{q.label}</span>
        </div>
      ))}
      <div className="ft-scr-add">+ Ajouter une question</div>
    </div>
  );
}

function ImportMockup() {
  const extracted = [
    "Nom complet → Texte libre",
    "Date de naissance → Date",
    "Êtes-vous marié(e) ? → Oui/Non",
    "Historique de voyages → Tableau",
    "Pays de résidence → Texte libre",
  ];
  return (
    <div className="ft-imp">
      <div className="ft-imp-file">
        <span className="ft-imp-file-icon">📄</span>
        <span className="ft-imp-file-name">questionnaire_RP_2024.docx</span>
        <span className="ft-imp-file-size">42 Ko</span>
      </div>
      <div className="ft-imp-progress">
        <div className="ft-imp-progress-label">Extraction terminée</div>
        <div className="ft-imp-bar"><div className="ft-imp-bar-fill" /></div>
      </div>
      <div className="ft-imp-results">
        <div className="ft-imp-results-label">32 questions extraites</div>
        {extracted.map((row) => (
          <div key={row} className="ft-imp-row">
            <span className="ft-imp-check">✓</span>
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
