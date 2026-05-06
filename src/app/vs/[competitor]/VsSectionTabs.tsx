"use client";

import { useState } from "react";

const TABS = [
  { id: "forms" as const, label: "Formulaires" },
  { id: "autofill" as const, label: "Auto-remplissage" },
  { id: "crm" as const, label: "Gestion cabinet" },
  { id: "pricing" as const, label: "Tarification" },
  { id: "onboarding" as const, label: "Prise en main" },
];

type TabId = "forms" | "autofill" | "crm" | "pricing" | "onboarding";

export function VsSectionTabs({
  forms,
  autofill,
  crm,
  pricing,
  onboarding,
}: Record<TabId, string>) {
  const [active, setActive] = useState<TabId>("forms");
  const texts: Record<TabId, string> = { forms, autofill, crm, pricing, onboarding };

  return (
    <div className="vst-wrap">
      <div className="vst-nav">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`vst-btn ${active === t.id ? "vst-btn-on" : ""}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="vst-body">
        <p className="vst-text">{texts[active]}</p>
      </div>
    </div>
  );
}
