import Link from "next/link";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>Produit</h4>
          <ul>
            <li><a href="/#how">Comment ça marche</a></li>
            <li><a href="/#stats">Résultats</a></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/how-it-works">Guide détaillé</Link></li>
            <li><Link href="/features/custom-forms">Formulaires personnalisés</Link></li>
            <li><Link href="/demo">Démo</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Comparatifs</h4>
          <ul>
            <li><Link href="/vs/caseeasy">Formio vs CaseEasy</Link></li>
            <li><Link href="/vs/visto">Formio vs Visto</Link></li>
            <li><Link href="/vs/visaflo">Formio vs VisaFlo</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Ressources</h4>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/book-call">Réserver un appel</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-mark">
        <img
          src="/formio-logo.svg"
          alt=""
          className="footer-mark-icon"
          aria-hidden
        />
        <span className="footer-mark-text">Formio</span>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <span>© Formio {new Date().getFullYear()}</span>
          <a href="#">Conditions</a>
          <a href="#">Confidentialité</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/formioca/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
