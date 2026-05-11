import type { Metadata } from "next";
import Link from "next/link";
import { SparkleIcon } from "@/app/icons";

export const metadata: Metadata = {
  title: "Programmes d'immigration pris en charge | Formio",
  description:
    "Formio prend en charge toutes les demandes d'immigration au Canada : temporaires, permanentes et québécoises. Permis de travail, Express Entry, PEQ, Arrima, parrainage familial et plus.",
  alternates: { canonical: "https://formio.ca/programs" },
};

const categories = [
  {
    id: "temporaire",
    label: "Temporaire",
    color: "#0088ff",
    bg: "rgba(0,136,255,0.08)",
    intro: "Permis et visas pour les séjours temporaires au Canada : travail, études ou visite.",
    groups: [
      {
        title: "Permis de travail",
        programs: [
          { name: "Permis de travail post-diplôme (PGWP)", note: "Diplômés d'un établissement canadien désigné" },
          { name: "Programme des travailleurs étrangers temporaires (PTET)", note: "Avec étude d'impact sur le marché du travail (EIMT)" },
          { name: "Travailleurs agricoles saisonniers (PTAS)", note: "Mexique et pays des Caraïbes" },
          { name: "Aides familiaux résidants", note: "Soins aux enfants, aînés ou personnes handicapées" },
          { name: "Programme de mobilité internationale (PMI)", note: "Sans EIMT requis" },
          { name: "Expérience internationale Canada (EIC)", note: "Vacances-travail, jeunes professionnels, stages coop" },
          { name: "Transferts intraentreprises", note: "Cadres, spécialistes et travailleurs en formation" },
          { name: "Permis de travail CUSMA / ACEUM", note: "Professionnels canadiens, mexicains et américains" },
          { name: "Permis de travail ouvert pour conjoint(e)", note: "Conjoint de titulaire d'un permis valide" },
          { name: "Permis de travail humanitaire", note: "Situations exceptionnelles et vulnérabilité" },
        ],
      },
      {
        title: "Permis d'études",
        programs: [
          { name: "Permis d'études", note: "Établissement d'enseignement désigné (EED)" },
          { name: "Renouvellement de permis d'études", note: "Prolongation du statut d'étudiant" },
          { name: "Autorisation d'études hors campus", note: "Travail jusqu'à 24h/semaine durant les études" },
        ],
      },
      {
        title: "Visiteurs et résidents temporaires",
        programs: [
          { name: "Visa de résident temporaire (VRT)", note: "Pour les ressortissants de pays non exemptés" },
          { name: "Autorisation de voyage électronique (AVE)", note: "Pour les ressortissants exemptés de visa" },
          { name: "Super visa, parents et grands-parents", note: "Séjour jusqu'à 5 ans par visite" },
          { name: "Permis de séjour temporaire (PST)", note: "Pour personnes autrement inadmissibles" },
          { name: "Extension de statut de visiteur", note: "Prolongation au-delà des 6 mois initiaux" },
        ],
      },
    ],
  },
  {
    id: "permanente",
    label: "Permanente",
    color: "#0e7490",
    bg: "rgba(14,116,144,0.08)",
    intro: "Toutes les voies d'accès à la résidence permanente fédérale, des grandes villes aux communautés rurales.",
    groups: [
      {
        title: "Express Entry",
        programs: [
          { name: "Travailleurs qualifiés fédéraux (PTQF)", note: "Expérience de travail qualifié à l'étranger" },
          { name: "Travailleurs de métiers fédéraux (PTMF)", note: "Métiers spécialisés reconnus" },
          { name: "Expérience canadienne (CEC)", note: "Expérience de travail au Canada" },
          { name: "Tirage sectoriel", note: "Agriculture, soins de santé, STIM, transport et autres" },
          { name: "Tirage francophone hors Québec", note: "Résidence en dehors du Québec requise" },
        ],
      },
      {
        title: "Programmes des candidats des provinces (PCP)",
        programs: [
          { name: "Ontario (OINP)", note: "" },
          { name: "Colombie-Britannique (BC PNP)", note: "" },
          { name: "Alberta (AINP)", note: "" },
          { name: "Manitoba (MPNP)", note: "" },
          { name: "Saskatchewan (SINP)", note: "" },
          { name: "Nouvelle-Écosse (NSNP)", note: "" },
          { name: "Nouveau-Brunswick (NBPNP)", note: "" },
          { name: "Île-du-Prince-Édouard (PEI PNP)", note: "" },
          { name: "Terre-Neuve-et-Labrador (NLPNP)", note: "" },
          { name: "Territoires du Nord-Ouest (TNP)", note: "" },
          { name: "Yukon (YNP)", note: "" },
          { name: "Programme de l'Atlantique (PICA)", note: "Nouvelle-Écosse, N.-B., Î.-P.-É., T.-N.-L." },
          { name: "RNIP : Communautés rurales et du Nord", note: "11 communautés participantes" },
        ],
      },
      {
        title: "Parrainage familial",
        programs: [
          { name: "Parrainage d'époux et conjoints de fait", note: "Intérieur ou extérieur du Canada" },
          { name: "Parrainage d'enfants", note: "Enfants biologiques ou adoptés" },
          { name: "Parrainage de parents et grands-parents (PGP)", note: "Tirage annuel du bassin d'intérêt" },
        ],
      },
      {
        title: "Protection et humanitaire",
        programs: [
          { name: "Réfugiés pris en charge par le gouvernement (RPG)", note: "" },
          { name: "Réfugiés parrainés par le secteur privé (RPSP)", note: "" },
          { name: "Demande d'asile intérieure", note: "Commission de l'immigration et du statut de réfugié" },
          { name: "Évaluation des risques avant renvoi (ERAR)", note: "" },
          { name: "Motifs humanitaires et compassionnels (CH)", note: "" },
          { name: "Programme pilote agri-alimentaire", note: "Travailleurs de l'industrie agroalimentaire" },
        ],
      },
    ],
  },
  {
    id: "quebecoise",
    label: "Québécoise",
    color: "#ffa946",
    bg: "rgba(255,169,70,0.10)",
    intro: "Programmes de sélection du Québec via Arrima, PEQ et volets spécialisés pour immigrants économiques et familiaux.",
    groups: [
      {
        title: "Travailleurs qualifiés (Arrima)",
        programs: [
          { name: "Programme régulier des travailleurs qualifiés (PRTQ)", note: "Système de déclaration d'intérêt Arrima" },
          { name: "PEQ, volet travailleurs temporaires", note: "12 mois d'expérience au Québec + français" },
          { name: "PEQ, volet diplômés du Québec", note: "Diplôme québécois de niveau collégial ou universitaire" },
          { name: "Programme de mobilité francophone (PMF)", note: "Travailleurs francophones hors PEQ" },
          { name: "Programme des travailleurs de la construction (PITC)", note: "Métiers de la construction reconnus par la CCQ" },
        ],
      },
      {
        title: "Gens d'affaires immigrants",
        programs: [
          { name: "Investisseurs immigrants", note: "Apport net minimum de 2 M$" },
          { name: "Entrepreneurs immigrants", note: "Création ou reprise d'entreprise au Québec" },
          { name: "Travailleurs autonomes", note: "Profession libérale ou artistique" },
          { name: "Programme pilote pour entrepreneurs (PIE-Q)", note: "Démarrage de startup à fort potentiel" },
        ],
      },
      {
        title: "Regroupement familial (Québec)",
        programs: [
          { name: "Parrainage d'époux et conjoints de fait", note: "Sélection québécoise requise en plus du fédéral" },
          { name: "Parrainage d'enfants", note: "" },
          { name: "Parrainage de parents et grands-parents", note: "" },
        ],
      },
      {
        title: "Réfugiés et protection (Québec)",
        programs: [
          { name: "Convention des réfugiés à l'étranger", note: "Réfugiés sélectionnés à l'extérieur du Canada" },
          { name: "Personnes de pays d'accueil", note: "Personnes déracinées hors de leur pays" },
          { name: "Programme d'accueil et d'intégration", note: "Accompagnement à l'arrivée au Québec" },
        ],
      },
    ],
  },
];

export default function ProgramsPage() {
  const totalPrograms = categories.reduce(
    (acc, cat) => acc + cat.groups.reduce((a, g) => a + g.programs.length, 0),
    0
  );

  return (
    <>
      {/* HERO */}
      <header className="prog-hero section-cream">
        <div className="prog-hero-inner container">
          <nav className="prog-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>›</span>
            <span>Programmes</span>
          </nav>
          <h1 className="prog-h1">
            Tous les programmes{" "}
            <em className="prog-accent">pris en charge.</em>
          </h1>
          <p className="prog-lead">
            Formio prend en charge l&apos;ensemble des programmes d&apos;immigration canadiens et
            québécois : {totalPrograms} programmes au total, répartis en trois grandes catégories.
          </p>
          <div className="prog-hero-cta">
            <Link href="/book-call" className="btn-primary">
              <SparkleIcon /> Commencer gratuitement
            </Link>
            <Link href="/demo" className="btn-secondary">
              Voir une démo →
            </Link>
          </div>
        </div>
      </header>

      {/* CATEGORY TABS / JUMP LINKS */}
      <nav className="prog-anav" aria-label="Catégories">
        <div className="prog-anav-inner">
          {categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="prog-anav-link" style={{ "--cat-color": cat.color } as React.CSSProperties}>
              {cat.label}
            </a>
          ))}
        </div>
      </nav>

      {/* CATEGORIES */}
      {categories.map((cat, catIdx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`prog-cat-section ${catIdx % 2 === 1 ? "prog-cat-alt" : "section-cream"}`}
        >
          <div className="container">
            {/* Category header */}
            <div className="prog-cat-header">
              <div className="prog-cat-header-left">
                <span className="prog-cat-badge" style={{ color: cat.color, background: cat.bg }}>
                  {cat.label}
                </span>
                <h2 className="prog-cat-h2">
                  Demandes{" "}
                  <em className="prog-cat-accent" style={{ color: cat.color }}>
                    {cat.label.toLowerCase()}s
                  </em>
                </h2>
                <p className="prog-cat-intro">{cat.intro}</p>
              </div>
              <div className="prog-cat-header-right">
                <div className="prog-cat-stat">
                  <span className="prog-cat-stat-num" style={{ color: cat.color }}>
                    {cat.groups.reduce((a, g) => a + g.programs.length, 0)}
                  </span>
                  <span className="prog-cat-stat-label">programmes</span>
                </div>
              </div>
            </div>

            {/* Groups grid */}
            <div className="prog-groups-grid">
              {cat.groups.map((group) => (
                <div key={group.title} className="prog-group-card">
                  <div className="prog-group-header" style={{ borderLeftColor: cat.color }}>
                    <p className="prog-group-title">{group.title}</p>
                    <span className="prog-group-count">{group.programs.length}</span>
                  </div>
                  <ul className="prog-list">
                    {group.programs.map((prog) => (
                      <li key={prog.name} className="prog-item">
                        <span className="prog-dot" style={{ background: cat.color }} />
                        <span className="prog-item-name">{prog.name}</span>
                        {prog.note && (
                          <span className="prog-item-note">{prog.note}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="prog-cta-section">
        <div className="container">
          <div className="prog-cta-card">
            <div className="prog-cta-glow" aria-hidden />
            <h2 className="prog-cta-h2">
              Votre programme est ici.<br />
              Commençons.
            </h2>
            <p className="prog-cta-sub">
              Formio génère les formulaires, collecte les informations et tient les dossiers à jour, pour chacun de ces {totalPrograms} programmes.
            </p>
            <Link href="/book-call" className="btn-primary prog-cta-btn">
              <SparkleIcon /> Réserver une démo gratuite →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .prog-hero { padding: 8rem 1.5rem 5rem; }
        .prog-hero-inner {
          display: flex; flex-direction: column; gap: 1.75rem; max-width: 760px;
        }
        .prog-breadcrumb {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.82rem; color: var(--gray-muted); font-weight: 500;
        }
        .prog-breadcrumb a { color: var(--gray-muted); text-decoration: none; }
        .prog-breadcrumb a:hover { color: var(--dark); }
        .prog-h1 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          line-height: 1.06; letter-spacing: -0.025em;
          font-weight: 500; color: var(--dark); margin: 0; max-width: 20ch;
        }
        .prog-accent { font-style: italic; color: var(--turquoise); }
        .prog-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.1rem; color: var(--gray-text); line-height: 1.65;
          max-width: 56ch; margin: 0;
        }
        .prog-hero-cta { display: flex; gap: 0.85rem; flex-wrap: wrap; }

        /* ── Anchor nav ── */
        .prog-anav {
          background: var(--cream); border-bottom: 1px solid var(--border-soft);
          overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .prog-anav::-webkit-scrollbar { display: none; }
        .prog-anav-inner {
          display: flex; gap: 0.4rem; padding: 0.85rem 1.5rem;
          max-width: 1180px; margin: 0 auto; white-space: nowrap;
        }
        .prog-anav-link {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.875rem; font-weight: 700;
          color: var(--cat-color, var(--gray-muted));
          padding: 0.45rem 1.1rem; border-radius: 999px;
          border: 1.5px solid currentColor; display: inline-block;
          opacity: 0.55;
          transition: opacity 0.2s ease, background 0.2s ease;
        }
        .prog-anav-link:hover { opacity: 1; background: rgba(0,0,0,0.04); }

        /* ── Category sections ── */
        .prog-cat-section { padding: 6rem 1.5rem 7rem; background: var(--cream); }
        .prog-cat-alt { background: #f8f8ee; }

        .prog-cat-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 2rem; margin-bottom: 3rem; flex-wrap: wrap;
        }
        .prog-cat-header-left { display: flex; flex-direction: column; gap: 0.85rem; max-width: 600px; }
        .prog-cat-badge {
          display: inline-block;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; border-radius: 999px;
          padding: 0.3rem 0.85rem;
        }
        .prog-cat-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.08; letter-spacing: -0.022em;
          font-weight: 500; color: var(--dark); margin: 0;
        }
        .prog-cat-accent { font-style: italic; }
        .prog-cat-intro {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: var(--gray-text); line-height: 1.65; margin: 0;
        }
        .prog-cat-header-right { flex-shrink: 0; text-align: right; }
        .prog-cat-stat { display: flex; flex-direction: column; align-items: flex-end; gap: 0.15rem; }
        .prog-cat-stat-num {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: 3.5rem; font-weight: 500; line-height: 1;
          letter-spacing: -0.03em;
        }
        .prog-cat-stat-label {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.78rem; color: var(--gray-muted); font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        /* ── Groups grid ── */
        .prog-groups-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
          align-items: start;
        }
        .prog-group-card {
          background: #ffffff;
          border: 1px solid var(--border-soft);
          border-radius: 20px;
          overflow: hidden;
        }
        .prog-group-header {
          display: flex; align-items: center; justify-content: space-between;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-soft);
          border-left: 3px solid transparent;
        }
        .prog-group-title {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em;
          text-transform: uppercase; color: var(--dark); margin: 0;
        }
        .prog-group-count {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.72rem; font-weight: 700; color: var(--gray-muted);
          background: var(--cream); border: 1px solid var(--border-soft);
          border-radius: 999px; padding: 0.15rem 0.55rem; flex-shrink: 0;
        }

        .prog-list {
          list-style: none; padding: 0.75rem 1.25rem 1rem; margin: 0;
          display: flex; flex-direction: column; gap: 0;
        }
        .prog-item {
          display: grid;
          grid-template-columns: 8px 1fr;
          column-gap: 0.65rem;
          row-gap: 0.1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-soft);
        }
        .prog-item:last-child { border-bottom: none; }
        .prog-dot {
          width: 5px; height: 5px; border-radius: 999px;
          margin-top: 0.52em; flex-shrink: 0; grid-row: 1; grid-column: 1;
          align-self: start; justify-self: center;
        }
        .prog-item-name {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.9rem; font-weight: 500; color: var(--dark);
          line-height: 1.4; grid-column: 2; grid-row: 1;
        }
        .prog-item-note {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.78rem; color: var(--gray-muted);
          line-height: 1.4; grid-column: 2; grid-row: 2;
        }

        /* ── CTA ── */
        .prog-cta-section { padding: 4rem 1.5rem 7rem; background: var(--cream); }
        .prog-cta-card {
          max-width: 860px; margin: 0 auto;
          background: var(--dark); border-radius: 40px;
          padding: 5rem 3rem 4.5rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 1.5rem; text-align: center; position: relative; overflow: hidden;
        }
        .prog-cta-glow {
          position: absolute; top: -40%; left: 20%; width: 60%; height: 100%;
          background: radial-gradient(ellipse at center, rgba(14,116,144,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .prog-cta-h2 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem); font-weight: 500;
          color: var(--cream-on-dark); line-height: 1.1;
          letter-spacing: -0.025em; margin: 0; position: relative; z-index: 1;
        }
        .prog-cta-sub {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: rgba(246,245,232,0.5);
          margin: 0; position: relative; z-index: 1; max-width: 50ch;
        }
        .prog-cta-btn { position: relative; z-index: 1; }

        @media (max-width: 640px) {
          .prog-hero { padding: 6rem 1.25rem 4rem; }
          .prog-cat-section { padding: 4.5rem 1.25rem 5rem; }
          .prog-groups-grid { grid-template-columns: 1fr; }
          .prog-cat-header { flex-direction: column; }
          .prog-cat-header-right { display: none; }
          .prog-cta-card { border-radius: 28px; padding: 4rem 1.5rem 3.5rem; }
        }
      `}</style>
    </>
  );
}
