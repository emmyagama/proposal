import React from "react";

/* ============ Chrome Bar ============ */
export const ChromeBar: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 20,
      left: 19 * 3.78, // 19mm in px (approx)
      right: 19 * 3.78,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "8pt",
      fontFamily: "Inter, sans-serif",
      color: "#888",
      letterSpacing: "1.5px",
    }}
  >
    <span style={{ fontWeight: 500, textTransform: "uppercase" }}>
      PRIVATE &amp; CONFIDENTIAL
    </span>
    <img
      src="/images/goldenmuv_logo.png"
      alt="GMPC Logo"
      style={{ height: 26, width: "auto" }}
    />
  </div>
);

/* ============ GMPC Logo Image ============ */
export const GMPCWordmark: React.FC<{ size?: number; white?: boolean }> = ({
  size = 50,
}) => (
  <img
    src="/images/goldenmuv_logo.png"
    alt="GMPC Logo"
    style={{ height: size, width: "auto" }}
  />
);

/* ============ RMAFC Logo Image ============ */
export const RMAFCWordmark: React.FC<{ size?: number }> = ({ size = 50 }) => (
  <img
    src="/images/rmafc_logo.png"
    alt="RMAFC Logo"
    style={{ height: size, width: "auto" }}
  />
);

/* ============ Image with fallback placeholder ============ */
export const Img: React.FC<{
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  overlay?: boolean;
  overlayColor?: string;
  fallbackLabel?: string;
}> = ({
  src,
  alt,
  style,
  className,
  overlay = false,
  overlayColor = "rgba(139,111,71,0.08)",
  fallbackLabel,
}) => {
  const [failed, setFailed] = React.useState(false);
  if (failed) {
    return (
      <div
        className={`img-placeholder ${className || ""}`}
        style={style}
        aria-label={alt}
      >
        <div style={{ padding: 8 }}>
          <div style={{ fontSize: "8pt", marginBottom: 4, opacity: 0.7 }}>
            [ IMAGE ]
          </div>
          <div style={{ fontSize: "9pt", fontFamily: "monospace" }}>
            {fallbackLabel || src}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ position: "relative", ...style }} className={className}>
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: overlayColor,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

/* ============ Corner Brackets ============ */
export const CornerBrackets: React.FC<{ white?: boolean }> = ({
  white = false,
}) => (
  <>
    <div className={white ? "bracket-white-tl" : "bracket-tl"} />
    <div className={white ? "bracket-white-br" : "bracket-br"} />
  </>
);

/* ============ Eyebrow ============ */
export const Eyebrow: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="eyebrow">{children}</div>;

/* ============ Dot List ============ */
export const DotList: React.FC<{
  items: string[];
  color?: string;
  size?: string;
  gap?: number;
  markerSize?: number;
}> = ({ items, color = "var(--ink)", size = "10pt", gap = 6, markerSize = 6 }) => (
  <ul style={{ display: "flex", flexDirection: "column", gap }}>
    {items.map((item, i) => (
      <li
        key={i}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          fontFamily: "Inter, sans-serif",
          fontSize: size,
          color,
          lineHeight: 1.45,
        }}
      >
        <span
          style={{
            width: markerSize,
            height: markerSize,
            background: "var(--gold)",
            transform: "rotate(45deg)",
            flexShrink: 0,
            marginTop: 5,
          }}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/* ============ Gold Rule ============ */
export const GoldRule: React.FC<{ width?: string; height?: number }> = ({
  width = "40%",
  height = 2,
}) => (
  <div
    style={{
      width,
      height,
      background: "var(--gold)",
    }}
  />
);

/* ============ Section Header ============ */
export const PageHeader: React.FC<{
  eyebrow: string;
  title: string;
  subtitle?: React.ReactNode;
  numeral?: string;
}> = ({ eyebrow, title, subtitle, numeral }) => (
  <div style={{ marginBottom: 18 }}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 16,
        marginTop: 8,
      }}
    >
      {numeral && (
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "32pt",
            color: "var(--gold)",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {numeral}
        </div>
      )}
      <h1
        className="section-title"
        style={{ fontSize: "28pt", margin: 0, lineHeight: 1.1 }}
      >
        {title}
      </h1>
    </div>
    {subtitle && (
      <div className="body-sm" style={{ marginTop: 8, fontStyle: "italic" }}>
        {subtitle}
      </div>
    )}
    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
      <GoldRule width="40%" height={1} />
      <GoldRule width="15%" height={1} />
    </div>
  </div>
);

/* ============ Pillar Tag ============ */
export const PillarTag: React.FC<{ label: string; brown?: boolean }> = ({
  label,
  brown = false,
}) => (
  <span
    style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "7.5pt",
      fontWeight: 600,
      letterSpacing: "1.5px",
      padding: "3px 8px",
      color: brown ? "var(--brown)" : "var(--gold)",
      border: `1px solid ${brown ? "var(--border-subtle)" : "var(--gold)"}`,
      textTransform: "uppercase",
    }}
  >
    {label}
  </span>
);
