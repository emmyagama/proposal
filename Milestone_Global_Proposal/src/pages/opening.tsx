import { ChromeBar, Corners, GmpcLogo, MilestoneLogo } from "../components/Shared";

/* ============================================================
   PAGE 1 — COVER
   ============================================================ */
export function PageCover() {
  return (
    <div className="slide" style={{ background: "#fff" }}>
      <Corners only="cover" />
      {/* Left brown accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 6,
          height: "100%",
          background: "var(--brown)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 11%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "11pt",
            fontWeight: 600,
            letterSpacing: 2.5,
            color: "var(--gold)",
            marginBottom: 28,
          }}
        >
          PRIVATE &amp; CONFIDENTIAL
        </div>
        <div style={{ fontSize: "16pt", color: "var(--ink-light)", marginBottom: 14 }}>
          A PROPOSAL FOR STRATEGIC COLLABORATION WITH
        </div>
        <div
          className="font-display"
          style={{
            fontSize: "18pt",
            color: "var(--brown)",
            fontWeight: 700,
            letterSpacing: 1,
            marginBottom: 36,
          }}
        >
          MILESTONE GLOBAL BANK LIMITED
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: 38,
            color: "var(--brown)",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Building the Organisation
        </h1>
        <h1
          className="font-display"
          style={{
            fontSize: 38,
            color: "var(--brown)",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 26,
          }}
        >
          Behind the Bank
        </h1>
        <div
          className="gold-rule-2"
          style={{ width: "40%", marginBottom: 6 }}
        />
        <div
          className="gold-rule-2"
          style={{ width: "25%", marginBottom: 36 }}
        />

        {/* Logos — side-by-side if milestone supplied, else centred GMPC */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 60,
            marginBottom: 28,
          }}
        >
          <GmpcLogo height={55} />
          <div
            style={{
              width: 1,
              height: 50,
              background: "var(--border-subtle)",
            }}
          />
          <MilestoneLogo height={50} />
        </div>

        <div style={{ fontSize: "14pt", color: "var(--ink)" }}>
          Submitted by Goldenmuv Premium Consulting Limited (GMPC)
        </div>
        <div
          style={{
            fontSize: "10pt",
            color: "#999",
            marginTop: 10,
            letterSpacing: 1.5,
          }}
        >
          2026
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 2 — TABLE OF CONTENTS
   ============================================================ */
export function PageTOC() {
  const items = [
    "Our Understanding of Milestone",
    "The Proposed Collaboration — Four Pathways",
    "What Milestone Could Commission — Engagement Options",
    "How We Work",
    "Why GMPC",
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div
        style={{
          position: "absolute",
          inset: "56px 56px 40px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 820,
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <span className="geo-square-lg" />
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: 32,
            color: "var(--brown)",
            fontWeight: 700,
            margin: 0,
            marginBottom: 14,
          }}
        >
          Table of Contents
        </h1>
        <div className="gold-rule" style={{ width: "55%", marginBottom: 32 }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((title, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px 0",
                borderBottom: "0.5px solid var(--border-subtle)",
                gap: 20,
              }}
            >
              <div
                className="font-display"
                style={{
                  minWidth: 44,
                  fontSize: 32,
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontSize: "20pt",
                  fontWeight: 600,
                  color: "var(--brown)",
                }}
              >
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 3 — THE CONTEXT + THE GMPC PROPOSITION
   ============================================================ */
export function PageContextProposition() {
  return (
    <div className="slide">
      <ChromeBar />
      {/* subtle gold diag texture */}
      <div className="gold-diag" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Vertical divider */}
      <div
        style={{
          position: "absolute",
          top: 56,
          bottom: 40,
          left: "48%",
          width: 0.4,
          background: "var(--border-subtle)",
        }}
      />

      {/* LEFT — THE CONTEXT */}
      <div
        style={{
          position: "absolute",
          top: 70,
          bottom: 40,
          left: 56,
          width: "calc(48% - 84px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          THE CONTEXT
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "15pt",
            fontWeight: 700,
            color: "var(--brown)",
            lineHeight: 1.25,
            margin: 0,
            marginBottom: 10,
          }}
        >
          Milestone is building a bank from the ground up.
        </h2>
        <p
          className="font-display"
          style={{
            fontSize: "13pt",
            fontStyle: "italic",
            color: "var(--ink-light)",
            lineHeight: 1.4,
            margin: 0,
            marginBottom: 26,
          }}
        >
          Its institutional capability must be built with the same rigour as its balance sheet.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            "Senior leadership is in place; the surrounding organisation is still being assembled.",
            "Technology, governance and people are being built in parallel, increasing the risk of misalignment.",
            "The gap between designed systems and consistent daily execution is the real institutional risk.",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span
                className="geo-square"
                style={{ marginTop: 8, flexShrink: 0 }}
              />
              <span style={{ fontSize: "10.5pt", color: "var(--ink)", lineHeight: 1.55 }}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — THE GMPC PROPOSITION */}
      <div
        style={{
          position: "absolute",
          top: 70,
          bottom: 40,
          left: "calc(48% + 28px)",
          right: 56,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          THE GMPC PROPOSITION
        </div>
        <p style={{ fontSize: "11.5pt", color: "var(--ink)", lineHeight: 1.55, margin: 0, marginBottom: 22 }}>
          A structured collaboration across four pathways — diagnosis, process, leadership and
          performance — to help Milestone convert institutional design into institutional execution.
        </p>

        {/* Four pathways */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
          {[
            { roman: "I", name: "Organisational Diagnostic", primary: true },
            { roman: "II", name: "Process & SOP Development", primary: false },
            { roman: "III", name: "Leadership & Management Development", primary: false },
            { roman: "IV", name: "Performance & Implementation Support", primary: false },
          ].map((p) => (
            <div
              key={p.roman}
              style={{
                padding: "12px 14px",
                background: p.primary ? "var(--brown)" : "var(--warm-gray)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {p.roman}
              </span>
              <span
                style={{
                  fontSize: "10.5pt",
                  fontWeight: 600,
                  color: p.primary ? "#fff" : "var(--brown)",
                  lineHeight: 1.25,
                }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          style={{
            borderLeft: "3px solid var(--gold)",
            background: "var(--gold-wash)",
            padding: "16px 18px",
            marginTop: "auto",
          }}
        >
          <div
            className="font-display"
            style={{
              fontStyle: "italic",
              fontSize: "12pt",
              color: "var(--brown)",
              lineHeight: 1.4,
              marginBottom: 6,
            }}
          >
            &ldquo;They understand exactly what we&rsquo;re building.&rdquo;
          </div>
          <div style={{ fontSize: "9.5pt", color: "var(--ink-light)" }}>
            That&rsquo;s the only reaction this document needs to earn.
          </div>
        </div>
      </div>
    </div>
  );
}
