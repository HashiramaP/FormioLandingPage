import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Ressources pour RCIC et avocats en immigration | Formio",
  description:
    "Guides pratiques sur la conformité CICC, la gestion de dossiers clients et les outils pour cabinets d'immigration au Canada.",
  alternates: { canonical: "https://formio.ca/blog" },
};

const posts = [
  {
    href: "/blog/barreau-qc-ia-generative",
    date: "6 mai 2026",
    category: "Conformité IA",
    title: "IA générative et Barreau du Québec : comment les avocats peuvent rester conformes en 2026",
    excerpt:
      "Le Barreau du Québec a publié son cadre sur l'IA générative. Les 10 obligations professionnelles touchées, les 5 risques identifiés, et comment Formio structure vos flux de travail pour vous protéger.",
    readingTime: "10 min",
  },
  {
    href: "/blog/cicc-client-file-management-requirements",
    date: "6 mai 2026",
    category: "Conformité",
    title: "Exigences du CICC en gestion de dossiers : ce que tout RCIC doit savoir en 2026",
    excerpt:
      "Le CICC peut auditer votre cabinet sans préavis. Voici les 6 exigences concrètes en matière de gestion de dossiers clients, les 4 erreurs fréquentes et comment choisir un logiciel conforme.",
    readingTime: "9 min",
  },
  {
    href: "/blog/cicc-compliance",
    date: "1 mai 2026",
    category: "Conformité",
    title: "Ce que le CICC vérifie : comment rester conforme en 2026",
    excerpt:
      "Un guide complet sur les exigences d'audit du CICC : consentement client, historique des dossiers, contrôle d'accès et liste de vérification pré-audit.",
    readingTime: "7 min",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <header className="blog-hero section-cream">
        <div className="blog-hero-inner container">
          <h1 className="blog-h1">
            Ressources pour <em className="blog-accent">consultants</em> en immigration
          </h1>
          <p className="blog-lead">
            Guides pratiques sur la conformité CICC, la gestion de dossiers et les outils pour cabinets d&apos;immigration au Canada.
          </p>
        </div>
      </header>

      <section className="blog-list-section section-cream">
        <div className="blog-list-inner container">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="blog-card">
              <div className="blog-card-meta">
                <span className="blog-card-category">{post.category}</span>
                <span className="blog-card-sep" aria-hidden>·</span>
                <span className="blog-card-date">{post.date}</span>
                <span className="blog-card-sep" aria-hidden>·</span>
                <span className="blog-card-time">{post.readingTime} de lecture</span>
              </div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <span className="blog-card-cta">Lire l&apos;article →</span>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .blog-hero { padding: 9rem 1.5rem 5rem; }
        .blog-hero-inner { max-width: 760px; display: flex; flex-direction: column; gap: 1.5rem; }
        .blog-h1 {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          line-height: 1.06; letter-spacing: -0.025em;
          font-weight: 500; color: var(--dark); margin: 0; max-width: 22ch;
        }
        .blog-accent { font-style: italic; color: var(--turquoise); }
        .blog-lead {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1.15rem; color: var(--gray-text); line-height: 1.65;
          max-width: 58ch; margin: 0;
        }

        .blog-list-section { padding-bottom: 9rem; }
        .blog-list-inner {
          max-width: 860px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 1.25rem;
        }

        .blog-card {
          display: flex; flex-direction: column; gap: 0.9rem;
          padding: 2.25rem 2rem 2.5rem;
          background: #ffffff;
          border: 1px solid var(--border-soft);
          border-radius: 24px;
          box-shadow: 0 2px 12px -6px rgba(10, 19, 34, 0.08);
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .blog-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px -12px rgba(10, 19, 34, 0.16);
        }

        .blog-card-meta {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.8rem; color: var(--gray-muted);
        }
        .blog-card-category { font-weight: 700; color: var(--turquoise); text-transform: uppercase; letter-spacing: 0.06em; }
        .blog-card-sep { color: var(--border-soft); }

        .blog-card-title {
          font-family: var(--font-garamond), Georgia, serif;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          line-height: 1.12; letter-spacing: -0.018em;
          font-weight: 500; color: var(--dark); margin: 0; max-width: 38ch;
        }
        .blog-card-excerpt {
          font-family: var(--font-figtree), sans-serif;
          font-size: 1rem; color: var(--gray-text); line-height: 1.65;
          margin: 0; max-width: 62ch;
        }
        .blog-card-cta {
          font-family: var(--font-figtree), sans-serif;
          font-size: 0.9rem; font-weight: 600; color: var(--dark);
        }

        @media (max-width: 640px) {
          .blog-hero { padding: 7rem 1.25rem 4rem; }
          .blog-card { padding: 2rem 0; }
        }
      `}</style>
    </>
  );
}
