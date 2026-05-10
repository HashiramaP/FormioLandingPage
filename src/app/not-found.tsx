import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        gap: "1.5rem",
      }}
    >
      <p
        style={{
          fontSize: "6rem",
          fontWeight: 700,
          lineHeight: 1,
          color: "var(--brand)",
          margin: 0,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
          fontWeight: 600,
          margin: 0,
        }}
      >
        Oups&nbsp;! Nous n&apos;avons pas trouvé cette page.
      </h1>
      <p style={{ color: "var(--muted, #6b7280)", margin: 0 }}>
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn-primary" style={{ marginTop: "0.5rem" }}>
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
