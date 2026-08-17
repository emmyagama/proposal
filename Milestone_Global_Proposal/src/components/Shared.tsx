import React from "react";

/* ============================================================
   GMPC Logo (SVG fallback — used when /images/goldenmuv_logo.png missing)
   A sober wordmark + mark in brown. Designed to render credibly
   out-of-the-box; replace with the real logo file when available.
   ============================================================ */
export function GmpcLogo({
  height = 55,
  variant = "brown",
}: {
  height?: number;
  variant?: "brown" | "white";
}) {
  const ink = variant === "white" ? "#ffffff" : "#8b6f47";
  const accent = variant === "white" ? "#E8D9A0" : "#C5A55A";
  return (
    <img
      src="/images/goldenmuv_logo.png"
      alt="GMPC"
      style={{ height, objectFit: "contain" }}
      onError={(e) => {
        // Fallback to inline SVG wordmark if file missing
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="60" viewBox="0 0 260 60">
          <g fill="none">
            <rect x="2" y="10" width="40" height="40" rx="4" stroke="${ink}" stroke-width="2"/>
            <path d="M12 30 L22 18 L32 30 L22 42 Z" fill="${accent}"/>
            <text x="54" y="28" font-family="Playfair Display, serif" font-size="19" font-weight="700" fill="${ink}">GMPC</text>
            <text x="54" y="46" font-family="Inter, sans-serif" font-size="8" letter-spacing="2" fill="${ink}" opacity="0.8">GOLDENMUV PREMIUM CONSULTING</text>
          </g>
        </svg>`;
        (e.currentTarget as HTMLImageElement).src =
          "data:image/svg+xml;utf8," + encodeURIComponent(svg);
      }}
    />
  );
}

/* ============================================================
   Milestone logo (optional — falls back to styled wordmark)
   ============================================================ */
export function MilestoneLogo({ height = 50 }: { height?: number }) {
  return (
    <img
      src="/images/milestone_logo.png"
      alt="Milestone Global Bank"
      style={{ height, objectFit: "contain" }}
      onError={(e) => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="60" viewBox="0 0 260 60">
          <g>
            <rect x="2" y="14" width="34" height="32" rx="3" fill="#8b6f47"/>
            <path d="M19 18 L30 32 L8 32 Z" fill="#C5A55A"/>
            <text x="46" y="30" font-family="Playfair Display, serif" font-size="15" font-weight="700" fill="#2B2B2B">MILESTONE</text>
            <text x="46" y="46" font-family="Inter, sans-serif" font-size="8" letter-spacing="3" fill="#4A4A4A">GLOBAL BANK LIMITED</text>
          </g>
        </svg>`;
        (e.currentTarget as HTMLImageElement).src =
          "data:image/svg+xml;utf8," + encodeURIComponent(svg);
      }}
    />
  );
}

/* ============================================================
   Chrome Bar — top of every content slide
   ============================================================ */
export function ChromeBar() {
  return (
    <div className="chrome">
      <span>Private &amp; Confidential</span>
      <GmpcLogo height={22} />
    </div>
  );
}

/* ============================================================
   Corner brackets
   ============================================================ */
export function Corners({
  white = false,
  only,
}: {
  white?: boolean;
  only?: "cover" | "left";
}) {
  const cls = `corner${white ? " white" : ""}`;
  if (only === "cover") {
    return (
      <>
        <div className={`${cls} tl`} />
        <div className={`${cls} br`} />
      </>
    );
  }
  if (only === "left") {
    return (
      <>
        <div className={`${cls} tl`} />
        <div className={`${cls} bl`} />
      </>
    );
  }
  return (
    <>
      <div className={`${cls} tl`} />
      <div className={`${cls} tr`} />
      <div className={`${cls} bl`} />
      <div className={`${cls} br`} />
    </>
  );
}

/* ============================================================
   Section divider — reusable for pages 4, 8, 14, 18, 21
   ============================================================ */
export function SectionDivider({
  imagePath,
  sectionNumber,
  eyebrow,
  title,
  subtitle,
  quote,
}: {
  imagePath: string;
  sectionNumber: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  quote: string;
}) {
  return (
    <div className="slide">
      <Corners only="left" />
      {/* Content left 58% */}
      <div
        style={{
          position: "absolute",
          left: "56px",
          top: "42px",
          width: "56%",
          bottom: "42px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <span className="geo-square-xl" />
          <span style={{ color: "var(--gold)", fontSize: "10pt", letterSpacing: 2, fontWeight: 600 }}>
            {eyebrow}
          </span>
        </div>
        <div
          className="font-display"
          style={{
            fontSize: 72,
            color: "var(--gold)",
            opacity: 0.85,
            lineHeight: 1,
            marginBottom: 8,
            fontWeight: 700,
          }}
        >
          {sectionNumber}
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: 42,
            color: "var(--brown)",
            fontWeight: 700,
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {title}
        </h1>
        <h2
          style={{
            fontSize: 32,
            color: "var(--brown)",
            fontWeight: 600,
            margin: 0,
            marginBottom: 18,
          }}
        >
          {subtitle}
        </h2>
        <div className="gold-rule-2" style={{ width: "40%", marginBottom: 8 }} />
        <div className="gold-rule-2" style={{ width: "25%", marginBottom: 28 }} />
        <div
          className="font-display"
          style={{
            fontStyle: "italic",
            fontSize: 18,
            color: "var(--gold)",
            lineHeight: 1.35,
            maxWidth: "88%",
          }}
        >
          &ldquo;{quote}&rdquo;
        </div>
      </div>
      {/* Photo right 42% */}
      <div
        className="img-overlay-brown"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "42%",
          height: "100%",
        }}
      >
        <img
          src={imagePath}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            (e.currentTarget.parentElement as HTMLElement).style.background =
              "linear-gradient(135deg,#a68b5e 0%,#6b5330 100%)";
          }}
        />
      </div>
    </div>
  );
}

/* ============================================================
   Reusable card primitives
   ============================================================ */

export function GoldPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: "var(--gold-wash)",
        color: "var(--brown)",
        border: "1px solid var(--gold-pale)",
        fontSize: "9.5pt",
        fontWeight: 600,
        padding: "4px 12px",
        borderRadius: 999,
        letterSpacing: 0.3,
      }}
    >
      {children}
    </span>
  );
}

export function PathwayTag({ roman, small }: { roman: string; small?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: small ? "8.5pt" : "9pt",
        letterSpacing: 1.8,
        fontWeight: 700,
        color: "var(--gold)",
        padding: "3px 10px",
        border: "1px solid var(--gold-pale)",
        background: "var(--gold-wash)",
        borderRadius: 2,
      }}
    >
      PATHWAY {roman}
    </span>
  );
}

/* ============================================================
   Image with brown overlay — used on section dividers and contact
   ============================================================ */
export function BrownPhoto({
  src,
  fallbackGradient = "linear-gradient(135deg,#a68b5e,#6b5330)",
  style,
}: {
  src: string;
  fallbackGradient?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="img-overlay-brown" style={{ position: "relative", ...style }}>
      <img
        src={src}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          (e.currentTarget.parentElement as HTMLElement).style.background =
            fallbackGradient;
        }}
      />
    </div>
  );
}
