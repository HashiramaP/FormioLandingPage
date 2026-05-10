import Link from "next/link";
import type { Metadata } from "next";
import TrackEvent from "@/app/TrackEvent";

export const metadata: Metadata = {
  title: "Voir Formio en action — Démo vidéo",
  description:
    "Découvrez comment Formio remplit vos formulaires IMM, Arrima et IRCC en quelques secondes.",
};

export default function DemoPage() {
  return (
    <main className="demo-page">
      <TrackEvent
        event="ViewContent"
        params={{ content_name: "Demo Video", content_category: "demo" }}
      />
      <div className="demo-container">
        <h1 className="demo-title">
          Voir <span className="demo-title-brand">Formio</span> en action
        </h1>

        <div className="demo-video-frame">
          <video
            className="demo-video"
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/formio-logo.svg"
          >
            <source src="/formio-demo.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>

        <div className="demo-cta-row">
          <Link href="/book-call" className="btn-primary">
            Réserver un appel
          </Link>
        </div>
      </div>
    </main>
  );
}
