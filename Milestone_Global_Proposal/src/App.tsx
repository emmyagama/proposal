import { useEffect, useMemo, useState } from "react";
import {
  PageCover,
  PageTOC,
  PageContextProposition,
} from "./pages/opening";
import {
  PageDiv01,
  PageSystemMap,
  PageFiveChallenges,
  PageWhyMatters,
  PageDiv02,
} from "./pages/understanding";
import {
  PagePathwayOverview,
  PagePathwayI,
  PagePathwayII,
  PagePathwayIII,
  PagePathwayIV,
} from "./pages/pathways";
import {
  PageDiv03,
  PageSequence,
  PageEngagements0102,
  PageEngagements0304,
  PageDiv04,
  PageMethodology,
  PageEngagementModel,
  PageDiv05,
} from "./pages/engagements";
import {
  PageAboutGmpc,
  PageExperience,
  PageTrustedBy,
  PageNextStep,
  PageContact,
  PageBackCover,
} from "./pages/closing";

type PageDef = { label: string; section?: string; Component: React.FC };

const PAGES: PageDef[] = [
  { label: "Cover", section: "—", Component: PageCover },
  { label: "Table of Contents", section: "—", Component: PageTOC },
  { label: "The Context + GMPC Proposition", section: "—", Component: PageContextProposition },
  { label: "Section 01 — Our Understanding", section: "01", Component: PageDiv01 },
  { label: "Interconnected System", section: "01", Component: PageSystemMap },
  { label: "Five Areas of Complexity", section: "01", Component: PageFiveChallenges },
  { label: "Why This Matters Now", section: "01", Component: PageWhyMatters },
  { label: "Section 02 — Collaboration", section: "02", Component: PageDiv02 },
  { label: "Four Pathways Overview", section: "02", Component: PagePathwayOverview },
  { label: "Pathway I — Diagnostic", section: "02", Component: PagePathwayI },
  { label: "Pathway II — Process & SOP", section: "02", Component: PagePathwayII },
  { label: "Pathway III — Leadership", section: "02", Component: PagePathwayIII },
  { label: "Pathway IV — Performance", section: "02", Component: PagePathwayIV },
  { label: "Section 03 — Commissions", section: "03", Component: PageDiv03 },
  { label: "Recommended Sequence", section: "03", Component: PageSequence },
  { label: "Engagements 01 & 02", section: "03", Component: PageEngagements0102 },
  { label: "Engagements 03 & 04", section: "03", Component: PageEngagements0304 },
  { label: "Section 04 — How We Work", section: "04", Component: PageDiv04 },
  { label: "Delivery Methodology", section: "04", Component: PageMethodology },
  { label: "Engagement Model", section: "04", Component: PageEngagementModel },
  { label: "Section 05 — Why GMPC", section: "05", Component: PageDiv05 },
  { label: "About GMPC", section: "05", Component: PageAboutGmpc },
  { label: "Relevant Experience", section: "05", Component: PageExperience },
  { label: "Trusted By", section: "05", Component: PageTrustedBy },
  { label: "Proposed Next Step", section: "—", Component: PageNextStep },
  { label: "Contact", section: "—", Component: PageContact },
  { label: "Back Cover", section: "—", Component: PageBackCover },
];

export default function App() {
  const [mode, setMode] = useState<"single" | "all">("single");
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  // Compute scale so the slide fits the viewport width with padding
  useEffect(() => {
    function compute() {
      const vw = window.innerWidth;
      const available = vw - 64; // 32px padding each side
      // 297mm ≈ 1122.5px at 96dpi; CSS mm ≈ 3.78px
      const slidePx = 297 * 3.78;
      const s = Math.min(1, available / slidePx);
      setScale(s);
    }
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (mode !== "single") return;
      if (e.key === "ArrowRight") setCurrent((c) => Math.min(PAGES.length - 1, c + 1));
      if (e.key === "ArrowLeft") setCurrent((c) => Math.max(0, c - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode]);

  const page = useMemo(() => PAGES[current], [current]);

  const downloadPDF = () => {
    // Switch to all-pages view momentarily then print
    setMode("all");
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <div className="min-h-screen" style={{ background: "#eeeae3" }}>
      {/* ============================================================
          CONTROL BAR (hidden in print)
          ============================================================ */}
      <header
        className="no-print"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(43,43,43,0.96)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ padding: "12px 24px", display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                background: "var(--gold)",
                transform: "rotate(45deg)",
              }}
            />
            <div>
              <div style={{ fontSize: "11pt", fontWeight: 700, letterSpacing: 0.3, lineHeight: 1 }}>
                GMPC × Milestone Global Bank
              </div>
              <div style={{ fontSize: "8.5pt", color: "var(--gold-pale)", letterSpacing: 1.5, marginTop: 2 }}>
                PROPOSAL · 27 PAGES · LANDSCAPE A4
              </div>
            </div>
          </div>

          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
            {/* View mode toggle */}
            <div
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6,
                padding: 2,
              }}
            >
              <button
                onClick={() => setMode("single")}
                style={{
                  padding: "6px 14px",
                  fontSize: "10pt",
                  fontWeight: 600,
                  background: mode === "single" ? "var(--gold)" : "transparent",
                  color: mode === "single" ? "#2B2B2B" : "#fff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                Single Page
              </button>
              <button
                onClick={() => setMode("all")}
                style={{
                  padding: "6px 14px",
                  fontSize: "10pt",
                  fontWeight: 600,
                  background: mode === "all" ? "var(--gold)" : "transparent",
                  color: mode === "all" ? "#2B2B2B" : "#fff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                All Pages
              </button>
            </div>

            <button
              onClick={downloadPDF}
              style={{
                background: "var(--gold)",
                color: "#2B2B2B",
                border: "none",
                padding: "10px 20px",
                borderRadius: 6,
                fontSize: "11pt",
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 2px 8px rgba(197,165,90,0.35)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
                <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* Page navigator for single-page mode */}
        {mode === "single" && (
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "8px 24px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                padding: "5px 12px",
                fontSize: "10pt",
                cursor: current === 0 ? "not-allowed" : "pointer",
                opacity: current === 0 ? 0.4 : 1,
              }}
            >
              ← Prev
            </button>

            <div style={{ fontSize: "10pt", color: "#fff", minWidth: 60, textAlign: "center" }}>
              <span style={{ fontWeight: 700 }}>{current + 1}</span>
              <span style={{ opacity: 0.5 }}> / {PAGES.length}</span>
            </div>

            <button
              onClick={() => setCurrent((c) => Math.min(PAGES.length - 1, c + 1))}
              disabled={current === PAGES.length - 1}
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                padding: "5px 12px",
                fontSize: "10pt",
                cursor: current === PAGES.length - 1 ? "not-allowed" : "pointer",
                opacity: current === PAGES.length - 1 ? 0.4 : 1,
              }}
            >
              Next →
            </button>

            <div style={{ fontSize: "10pt", color: "var(--gold-pale)", marginLeft: 6 }}>
              <span style={{ opacity: 0.7, marginRight: 6 }}>
                {page.section !== "—" ? `Section ${page.section} ·` : ""}
              </span>
              <span style={{ fontWeight: 600, color: "#fff" }}>{page.label}</span>
            </div>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                marginLeft: "auto",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                padding: "5px 14px",
                fontSize: "10pt",
                cursor: "pointer",
              }}
            >
              {menuOpen ? "Close" : "Jump to page ▾"}
            </button>
          </div>
        )}

        {menuOpen && mode === "single" && (
          <div
            style={{
              position: "absolute",
              right: 24,
              top: "100%",
              width: 420,
              maxHeight: 520,
              overflowY: "auto",
              background: "#2B2B2B",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              padding: 6,
            }}
          >
            {PAGES.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setMenuOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  textAlign: "left",
                  padding: "9px 14px",
                  background: i === current ? "var(--brown)" : "transparent",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontSize: "10pt",
                }}
              >
                <span
                  className="font-display"
                  style={{ minWidth: 28, fontWeight: 700, color: "var(--gold)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.section !== "—" && (
                  <span
                    style={{
                      fontSize: "8pt",
                      fontWeight: 700,
                      letterSpacing: 1,
                      color: "var(--gold-pale)",
                      opacity: 0.7,
                    }}
                  >
                    §{p.section}
                  </span>
                )}
                <span style={{ fontWeight: i === current ? 700 : 500 }}>{p.label}</span>
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ============================================================
          PREVIEW AREA
          ============================================================ */}
      {mode === "single" ? (
        <div
          style={{
            minHeight: "calc(100vh - 120px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "32px 32px 64px",
          }}
        >
          <div
            className="slide-scale-wrap"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
            }}
          >
            <page.Component />
          </div>
        </div>
      ) : (
        <div
          className="slide-stack"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            padding: "40px 32px 80px",
          }}
        >
          {PAGES.map((p, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div
                className="no-print"
                style={{
                  position: "absolute",
                  top: -28,
                  left: 0,
                  fontSize: "9pt",
                  color: "#666",
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                PAGE {i + 1} · {p.label.toUpperCase()}
              </div>
              <div
                className="slide-scale-wrap"
                style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
              >
                <p.Component />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ============================================================
          PRINT-ONLY VIEW — all pages at native size, no scaling
          ============================================================ */}
      <div style={{ position: "absolute", left: -99999, top: 0 }} aria-hidden>
        {/* We render this only when printing via the print media query hiding the above.
            Simpler approach: when user clicks Download, switch mode to "all" which renders
            all pages already. The @media print rule hides the control bar. */}
      </div>
    </div>
  );
}
