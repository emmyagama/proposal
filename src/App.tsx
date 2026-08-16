import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

import {
  Cover,
  TableOfContents,
  ExecutiveProposition,
  Divider01,
  Divider02,
  Divider03,
  Divider04,
  Divider05,
  MandateSystem,
  FiveComplexity,
} from "./pages/pagesA";

import {
  FourPillarsOverview,
  PillarI,
  PillarII,
  PillarIII,
  PillarIV,
  TechPartnerModel,
} from "./pages/pagesB";

import {
  FiveEngagementsOverview,
  EngagementDetailsA,
  EngagementDetailsB,
  AllocationFormula,
  DeliveryMethodology,
  EngagementModel,
} from "./pages/pagesC";

import {
  AboutGMPC,
  SelectedExperience,
  SpecialistNetwork,
  TrustedBy,
  ProposedNextStep,
  Contact,
  BackCover,
} from "./pages/pagesD";

const App: React.FC = () => {
  const deckRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = async () => {
    if (!deckRef.current) return;
    setGenerating(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 8, 92));
    }, 250);

    try {
      const opt: any = {
        margin: 0,
        filename: "GMPC-RMAFC-Strategic-Collaboration-Proposal.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          logging: false,
          windowWidth: 1123, // 297mm @ 96dpi
          windowHeight: 794, // 210mm @ 96dpi
        },
        jsPDF: {
          unit: "mm",
          format: [297, 210],
          orientation: "landscape",
          compress: true,
        },
        pagebreak: { mode: ["css", "legacy"] },
      };

      await html2pdf().set(opt).from(deckRef.current).save();
      setProgress(100);
    } catch (err) {
      console.error("PDF generation failed", err);
      alert(
        "PDF generation failed. Please try the Print (Ctrl+P / Cmd+P) option and choose 'Save as PDF' instead."
      );
    } finally {
      clearInterval(interval);
      setTimeout(() => {
        setGenerating(false);
        setProgress(0);
      }, 800);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {/* ========= Floating Action Bar ========= */}
      <div
        className="no-print"
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: 12,
            padding: "14px 16px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            border: "1px solid #e8e4de",
            minWidth: 260,
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "13pt",
              color: "#8b6f47",
              marginBottom: 2,
            }}
          >
            GMPC × RMAFC
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "8.5pt",
              color: "#4a4a4a",
              marginBottom: 12,
              lineHeight: 1.4,
            }}
          >
            29-page Landscape A4 Proposal · 297 × 210 mm
          </div>

          <button
            onClick={handleDownload}
            disabled={generating}
            className={generating ? "" : "pulse-ring"}
            style={{
              width: "100%",
              background: "#8b6f47",
              color: "white",
              border: "none",
              padding: "11px 16px",
              borderRadius: 8,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "10.5pt",
              cursor: generating ? "progress" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              letterSpacing: "0.3px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              if (!generating) (e.currentTarget.style.background = "#6b5330");
            }}
            onMouseLeave={(e) => {
              if (!generating) (e.currentTarget.style.background = "#8b6f47");
            }}
          >
            {generating ? (
              <>
                <span
                  style={{
                    width: 14,
                    height: 14,
                    border: "2px solid rgba(255,255,255,0.4)",
                    borderTopColor: "white",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
                Building PDF · {Math.floor(progress)}%
              </>
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download as PDF
              </>
            )}
          </button>

          {generating && (
            <div
              style={{
                marginTop: 8,
                height: 3,
                background: "#f5f3ef",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #c5a55a, #8b6f47)",
                  transition: "width 0.25s",
                }}
              />
            </div>
          )}

          <button
            onClick={handlePrint}
            disabled={generating}
            style={{
              width: "100%",
              background: "transparent",
              color: "#8b6f47",
              border: "1px solid #8b6f47",
              padding: "9px 16px",
              borderRadius: 8,
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "9.5pt",
              cursor: "pointer",
              marginTop: 8,
            }}
          >
            Print (A4 Landscape)
          </button>

          <div
            style={{
              marginTop: 12,
              padding: "8px 10px",
              background: "#fbf7ef",
              borderLeft: "2px solid #c5a55a",
              fontFamily: "Inter, sans-serif",
              fontSize: "8pt",
              color: "#4a4a4a",
              lineHeight: 1.45,
            }}
          >
            <strong style={{ color: "#8b6f47" }}>Images:</strong> drop your
            files into <code style={{ fontSize: "8pt" }}>public/images/</code>{" "}
            (see README.md).
          </div>
        </div>
      </div>

      {/* ========= Hero bar (screen only) ========= */}
      <div
        className="no-print"
        style={{
          maxWidth: 1200,
          margin: "20px auto 0 auto",
          padding: "0 20px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#8b6f47",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              background: "#c5a55a",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ fontWeight: 700, letterSpacing: "3px", fontSize: "10pt" }}>
            GMPC × RMAFC — STRATEGIC COLLABORATION PROPOSAL
          </div>
        </div>
        <div
          style={{
            color: "#4a4a4a",
            fontSize: "10pt",
            marginTop: 6,
            marginLeft: 24,
          }}
        >
          Scroll to preview all 29 pages. Use the button on the right to download the final PDF.
        </div>
      </div>

      {/* ========= The Deck ========= */}
      <div ref={deckRef} style={{ marginTop: 20 }}>
        {/* 1 */}
        <Cover />
        {/* 2 */}
        <TableOfContents />
        {/* 3 */}
        <ExecutiveProposition />
        {/* 4 */}
        <Divider01 />
        {/* 5 */}
        <MandateSystem />
        {/* 6 */}
        <FiveComplexity />
        {/* 7 */}
        <Divider02 />
        {/* 8 */}
        <FourPillarsOverview />
        {/* 9 */}
        <PillarI />
        {/* 10 */}
        <PillarII />
        {/* 11 */}
        <PillarIII />
        {/* 12 */}
        <PillarIV />
        {/* 13 */}
        <TechPartnerModel />
        {/* 14 */}
        <Divider03 />
        {/* 15 */}
        <FiveEngagementsOverview />
        {/* 16 */}
        <EngagementDetailsA />
        {/* 17 */}
        <EngagementDetailsB />
        {/* 18 */}
        <AllocationFormula />
        {/* 19 */}
        <Divider04 />
        {/* 20 */}
        <DeliveryMethodology />
        {/* 21 */}
        <EngagementModel />
        {/* 22 */}
        <Divider05 />
        {/* 23 */}
        <AboutGMPC />
        {/* 24 */}
        <SelectedExperience />
        {/* 25 */}
        <SpecialistNetwork />
        {/* 26 */}
        <TrustedBy />
        {/* 27 */}
        <ProposedNextStep />
        {/* 28 */}
        <Contact />
        {/* 29 */}
        <BackCover />
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default App;
