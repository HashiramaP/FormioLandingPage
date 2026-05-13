import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Formio — la plateforme qui collecte les informations de vos clients et génère automatiquement vos documents légaux.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#ffffeb";
const DARK = "#0a1322";
const BRAND = "#0088ff";
const MUTED = "#5a5a52";
const BORDER = "rgba(10,19,34,0.08)";

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="117 91 192 236" fill="${DARK}">
  <path d="M262 177C262 183.566 260.707 190.068 258.194 196.134C255.681 202.2 251.998 207.712 247.355 212.355C242.712 216.998 237.2 220.681 231.134 223.194C225.068 225.707 218.566 227 212 227L212 177H262Z"/>
  <path d="M308.5 91C308.5 97.5661 307.207 104.068 304.694 110.134C302.181 116.2 298.498 121.712 293.855 126.355C289.212 130.998 283.7 134.681 277.634 137.194C271.568 139.707 265.066 141 258.5 141L258.5 91H308.5Z"/>
  <path d="M167 277C167 283.566 165.707 290.068 163.194 296.134C160.681 302.2 156.998 307.712 152.355 312.355C147.712 316.998 142.2 320.681 136.134 323.194C130.068 325.707 123.566 327 117 327L117 277H167Z"/>
  <path d="M117 141C117 134.434 118.293 127.932 120.806 121.866C123.319 115.8 127.002 110.288 131.645 105.645C136.288 101.002 141.8 97.3188 147.866 94.806C153.932 92.2933 160.434 91 167 91L167 141H117Z"/>
  <path d="M117 227C117 220.434 118.293 213.932 120.806 207.866C123.319 201.8 127.002 196.288 131.645 191.645C136.288 187.002 141.8 183.319 147.866 180.806C153.932 178.293 160.434 177 167 177L167 227H117Z"/>
  <rect x="166" y="91" width="94" height="50"/>
  <rect x="166" y="177" width="47" height="50"/>
</svg>`;

const LOGO_DATA_URL = `data:image/svg+xml;base64,${Buffer.from(LOGO_SVG).toString(
  "base64"
)}`;

async function loadLocalFont(file: string): Promise<Buffer> {
  return readFile(path.join(process.cwd(), "public", "fonts", file));
}

const HEADLINE_PART_1 = "Arrêtez d'envoyer des";
const HEADLINE_ACCENT = "Word";
const HEADLINE_PART_2 = "à vos clients.";

const SUBTITLE =
  "Plateforme qui collecte les informations de vos clients de manière plus intelligente et plus efficace, et génère automatiquement tous les documents légaux.";

const BRAND_NAME = "Formio";
const URL_TEXT = "formio.ca";

export default async function OpengraphImage() {
  const [figtreeBold, figtreeMedium, garamondItalic] = await Promise.all([
    loadLocalFont("Figtree-700.ttf"),
    loadLocalFont("Figtree-500.ttf"),
    loadLocalFont("EBGaramond-700italic.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: CREAM,
          padding: "72px 88px",
          fontFamily: "Figtree",
          position: "relative",
        }}
      >
        {/* Soft decorative gradient corner */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 520,
            height: 520,
            borderRadius: 520,
            background:
              "radial-gradient(circle at center, rgba(0,136,255,0.12), rgba(0,136,255,0) 65%)",
          }}
        />

        {/* Top bar: logo + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={LOGO_DATA_URL} width={56} height={68} alt="" />
            <span
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: DARK,
                letterSpacing: "-0.02em",
              }}
            >
              {BRAND_NAME}
            </span>
          </div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: MUTED,
              letterSpacing: "0.02em",
            }}
          >
            {URL_TEXT}
          </span>
        </div>

        {/* Spacer to push the headline toward the middle */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 96,
            fontWeight: 700,
            color: DARK,
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            maxWidth: 1024,
          }}
        >
          <span style={{ display: "flex" }}>{HEADLINE_PART_1}&nbsp;</span>
          <span
            style={{
              display: "flex",
              fontFamily: "EB Garamond",
              fontStyle: "italic",
              fontWeight: 700,
              color: BRAND,
              marginRight: "0.18em",
            }}
          >
            {HEADLINE_ACCENT}
          </span>
          <span style={{ display: "flex" }}>{HEADLINE_PART_2}</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            fontWeight: 500,
            color: MUTED,
            lineHeight: 1.35,
            maxWidth: 960,
          }}
        >
          {SUBTITLE}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Bottom hairline accent */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            width: "100%",
          }}
        >
          <div
            style={{
              width: 64,
              height: 4,
              borderRadius: 4,
              background: BRAND,
            }}
          />
          <div
            style={{
              flex: 1,
              height: 1,
              background: BORDER,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Figtree", data: figtreeBold, weight: 700, style: "normal" },
        { name: "Figtree", data: figtreeMedium, weight: 500, style: "normal" },
        {
          name: "EB Garamond",
          data: garamondItalic,
          weight: 700,
          style: "italic",
        },
      ],
    }
  );
}
