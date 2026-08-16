import React from "react";
import { ChromeBar, Eyebrow, GoldRule, PageHeader, Img } from "../components/ui";

/* ========================================================================
   PAGE 23 — ABOUT GMPC + WHY PARTNER WITH US
   ======================================================================== */
const reasons = [
  {
    n: "01",
    title: "Public Sector Understanding",
    body: "We understand the specific constraints, governance requirements and political dynamics of Nigerian public institutions.",
  },
  {
    n: "02",
    title: "Demonstrated Diagnostic Capability",
    body: "Our work with NASIDA demonstrates a structured, rigorous approach to institutional assessment and transformation planning.",
  },
  {
    n: "03",
    title: "Executive Development Track Record",
    body: "FUDMA HODs, faculty leads and academic staff: structured programmes at institutional level, not generic workshops.",
  },
  {
    n: "04",
    title: "Financial & Debt Advisory Experience",
    body: "BOA debt recovery demonstrated combined financial analysis, portfolio assessment and structured advisory in a public institution context.",
  },
  {
    n: "05",
    title: "SOP & Institutionalisation Capability",
    body: "Mangal Industries work demonstrates GMPC's ability to move from training into embedded operational standards.",
    top: true,
  },
  {
    n: "06",
    title: "Integrated Specialist Network",
    body: "Full technical capability assembled around each engagement: forensic, econometric, oil and gas, data, legal, regulatory.",
    top: true,
  },
  {
    n: "07",
    title: "Implementation, Not Just Reports",
    body: "Our engagements are designed to produce institutional change that persists, not findings documents that are filed and forgotten.",
    top: true,
  },
  {
    n: "08",
    title: "Credibility Through Delivery",
    body: "Our proposal is itself a demonstration of how we think. Clearly structured. Precisely argued. Respectful of your time.",
    top: true,
  },
];

export const AboutGMPC: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 50px 32px 50px",
        display: "flex",
        gap: 28,
      }}
    >
      {/* LEFT — About */}
      <div
        style={{
          flex: "0 0 38%",
          paddingRight: 24,
          borderRight: "1px solid var(--border-subtle)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Eyebrow>ABOUT GMPC</Eyebrow>
        <h1
          className="section-title"
          style={{ fontSize: "26pt", marginTop: 10, marginBottom: 14 }}
        >
          Who We Are
        </h1>
        <p
          className="body-text"
          style={{ fontSize: "11pt", lineHeight: 1.5 }}
        >
          Goldenmuv Premium Consulting Limited (GMPC) is a Nigerian management
          consulting firm delivering strategy, institutional transformation,
          organisational development, capability building and financial advisory
          to public and private sector clients.
        </p>

        <div
          style={{
            background: "var(--brown)",
            padding: "14px 16px",
            marginTop: 14,
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontSize: "13pt",
              color: "white",
              lineHeight: 1.35,
            }}
          >
            "Institutions, not just policies, determine outcomes. The quality
            of an institution's structure, processes, leadership and
            capabilities is the primary variable between a mandate and its
            delivery. We work to close that gap."
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            marginTop: 16,
            textAlign: "center",
          }}
        >
          {[
            { n: "50+", l: "Clients served" },
            { n: "4", l: "Proven practice areas" },
            { n: "7+", l: "Specialist disciplines" },
          ].map((s) => (
            <div key={s.l}>
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "28pt",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "8.5pt",
                  color: "var(--ink-light)",
                  marginTop: 4,
                  letterSpacing: "0.5px",
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — 8 reasons */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Eyebrow>WHY PARTNER WITH US</Eyebrow>
        <h1
          className="section-title"
          style={{ fontSize: "22pt", marginTop: 8, marginBottom: 14 }}
        >
          Eight Reasons RMAFC Should Consider GMPC
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            flex: 1,
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.n}
              style={{
                background: r.top ? "var(--gold-wash)" : "var(--warm-gray-light)",
                borderTop: r.top ? "2px solid var(--gold)" : "1px solid var(--border-subtle)",
                border: r.top ? undefined : "1px solid var(--border-subtle)",
                padding: "10px 12px",
                display: "flex",
                gap: 10,
              }}
            >
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "16pt",
                  color: "var(--gold)",
                  lineHeight: 1,
                  minWidth: 26,
                }}
              >
                {r.n}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "10pt",
                    color: "var(--brown)",
                    marginBottom: 3,
                    lineHeight: 1.25,
                  }}
                >
                  {r.title}
                </div>
                <div
                  className="body-sm"
                  style={{ fontSize: "8.5pt", lineHeight: 1.4 }}
                >
                  {r.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 24 — SELECTED RELEVANT EXPERIENCE
   ======================================================================== */
const credentials = [
  {
    name: "NASIDA",
    full: "Nasarawa Investment & Development Agency",
    label: "DIAGNOSTIC",
    items: [
      "Full organisational diagnostic for Nasarawa's investment agency",
      "Structure, process, governance, capability, performance",
      "Prioritised findings and transformation roadmap",
    ],
    footer: "Pillar II · Engagement 01",
  },
  {
    name: "BANK OF AGRICULTURE",
    label: "DEBT RECOVERY",
    items: [
      "Debt recovery advisory for a key development finance institution",
      "Portfolio analysis, process assessment, recovery strategy",
      "Public finance systems and institutional constraints",
    ],
    footer: "Pillar IV · Engagement 05",
  },
  {
    name: "FUDMA",
    full: "Federal University Dutsin-Ma",
    label: "LEADERSHIP",
    items: [
      "Structured leadership programme for university leadership",
      "Heads of Department, Faculty and academic staff",
      "Context-specific design, not generic importation",
    ],
    footer: "Pillar III · Engagement 04",
  },
  {
    name: "MANGAL INDUSTRIES",
    label: "TRAINING & SOP",
    items: [
      "Workforce training and SOP development for industrial group",
      "Capability development into documented, repeatable processes",
      "Operational institutionalisation beyond the engagement",
    ],
    footer: "Pillar II · Pillar III",
    highlight: true,
  },
];

export const SelectedExperience: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 56px 32px 56px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeader
        eyebrow="05 · Why GMPC"
        title="Selected Relevant Experience"
        subtitle="Credibility from demonstrated work: each engagement maps to a proposed pillar."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
          flex: 1,
        }}
      >
        {credentials.map((c) => (
          <div
            key={c.name}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--border-subtle)",
              borderTop: `3px solid ${c.highlight ? "var(--gold)" : "var(--brown)"}`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "var(--brown)",
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "11pt",
                  color: "white",
                  letterSpacing: "0.5px",
                }}
              >
                {c.name}
              </div>
              {c.full && (
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "8pt",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 2,
                    lineHeight: 1.3,
                  }}
                >
                  {c.full}
                </div>
              )}
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "8.5pt",
                  color: "var(--gold)",
                  letterSpacing: "1.5px",
                  marginTop: 6,
                  textTransform: "uppercase",
                }}
              >
                {c.label}
              </div>
            </div>
            <div
              style={{
                padding: "12px 14px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                background: "var(--warm-gray-light)",
              }}
            >
              {c.items.map((it, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "9pt",
                    color: "var(--ink-light)",
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      background: "var(--gold)",
                      transform: "rotate(45deg)",
                      marginTop: 4,
                      flexShrink: 0,
                    }}
                  />
                  {it}
                </div>
              ))}
            </div>
            <div
              style={{
                background: "var(--gold-wash)",
                padding: "6px 12px",
                fontFamily: "Inter, sans-serif",
                fontSize: "7.5pt",
                fontWeight: 600,
                color: "var(--brown)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {c.footer}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 25 — TECHNICAL SPECIALIST NETWORK
   ======================================================================== */
const specialists = [
  {
    title: "Forensic Accounting & Revenue Forensics",
    body: "Independent revenue verification · forensic audit · leakage detection · reconciliation investigation.",
    brown: true,
  },
  {
    title: "Public Finance & Fiscal Policy",
    body: "Intergovernmental fiscal relations · expenditure analysis · fiscal frameworks · policy design.",
  },
  {
    title: "Econometrics & Quantitative Modelling",
    body: "Revenue forecasting models · allocation formula modelling · statistical analysis · scenario modelling.",
  },
  {
    title: "Oil, Gas & Extractives Revenue",
    body: "Production accounting · royalties and levies · NNPC/FIRS interface · extractives sector assessment.",
  },
  {
    title: "Data Analytics & Fiscal Intelligence",
    body: "Revenue data systems · dashboard development · anomaly detection · reporting architecture.",
  },
  {
    title: "Legal & Regulatory Advisory",
    body: "Constitutional and statutory interpretation · revenue law · intergovernmental fiscal agreements.",
  },
  {
    title: "Sector-Specific Revenue Specialists",
    body: "Customs · solid minerals · digital economy · investment income · subnational fiscal specialists.",
    gold: true,
  },
];

export const SpecialistNetwork: React.FC = () => (
  <div className="slide pattern-gold-diagonal">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 56px 32px 56px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeader
        eyebrow="05 · Why GMPC"
        title="Our Technical Specialist Network"
        subtitle="GMPC maintains an active network of specialist technical partners, enabling us to deploy domain-specific expertise for assignments that require it. This network is the operational basis of our integrated advisory model."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: 10,
          flex: 1,
        }}
      >
        {specialists.map((s, i) => (
          <div
            key={i}
            style={{
              background: s.brown
                ? "var(--brown)"
                : s.gold
                ? "var(--gold-wash)"
                : "var(--warm-gray-light)",
              border: s.gold ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "10pt",
                color: s.brown ? "white" : "var(--brown)",
                marginBottom: 6,
                lineHeight: 1.25,
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "8.5pt",
                color: s.brown ? "rgba(255,255,255,0.85)" : "var(--ink-light)",
                lineHeight: 1.4,
                flex: 1,
              }}
            >
              {s.body}
            </div>
          </div>
        ))}

        {/* Highlighted footer panel */}
        <div
          style={{
            background: "var(--brown)",
            gridColumn: "1 / -1",
            padding: "14px 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontSize: "15pt",
              color: "white",
              lineHeight: 1.3,
            }}
          >
            Technical credibility. Institutional depth. One relationship.
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div
        style={{
          marginTop: 12,
          borderLeft: "3px solid var(--gold)",
          background: "var(--gold-wash)",
          padding: "8px 14px",
          fontFamily: "Inter, sans-serif",
          fontSize: "9pt",
          color: "var(--ink)",
          lineHeight: 1.4,
        }}
      >
        <strong style={{ color: "var(--brown)" }}>How this works in practice: </strong>
        For each RMAFC engagement, GMPC identifies the technical disciplines
        required, assembles the appropriate specialist combination, and manages
        the integrated delivery. RMAFC engages one firm. That firm brings what
        the engagement needs.
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 26 — TRUSTED BY LEADING ORGANISATIONS
   ======================================================================== */
const logoFiles = Array.from({ length: 29 }, (_, i) => `Picture${i + 1}.png`);

export const TrustedBy: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 50px 32px 50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeader
        eyebrow="05 · Why GMPC"
        title="Trusted by Leading Organisations"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(5, 90px)",
          gap: 10,
          flex: 1,
        }}
      >
        {logoFiles.map((f, i) => (
          <div
            key={i}
            style={{
              background: "white",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px",
              overflow: "hidden",
            }}
          >
            <img
              src={`/images/${f}`}
              alt={`Client ${i + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const placeholder = document.createElement("div");
                  placeholder.textContent = f;
                  placeholder.style.cssText = `
                    font-size: 8pt;
                    font-family: monospace;
                    color: #aaa;
                    text-align: center;
                  `;
                  parent.appendChild(placeholder);
                }
              }}
            />
          </div>
        ))}
        {/* Empty slot */}
        <div
          style={{
            background: "var(--warm-gray-light)",
            border: "1px dashed var(--border-subtle)",
          }}
        />
      </div>

      <div
        className="caption"
        style={{
          marginTop: 14,
          textAlign: "center",
          fontStyle: "italic",
          fontSize: "9.5pt",
        }}
      >
        Over 50 clients served across government, private sector and NGO sectors.
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 27 — PROPOSED NEXT STEP
   ======================================================================== */
const entryPaths = [
  {
    q: "Not sure where to begin?",
    a: "Institutional Effectiveness Diagnostic: establishes the shared evidence base for everything that follows.",
  },
  {
    q: "Revenue is the priority?",
    a: "Revenue Mobilisation & Diversification Strategy: identifies the highest-impact opportunities across all streams.",
  },
  {
    q: "People and capability?",
    a: "Executive & Committee Capability Programme: foundation for the RMAFC Fiscal Governance Academy.",
  },
  {
    q: "Fiscal sustainability questions?",
    a: "Fiscal Efficiency & Debt Advisory Programme: assesses the revenue-debt interaction.",
  },
  {
    q: "Want to explore the full picture first?",
    a: "Strategic Working Session with GMPC: a focused, low-risk conversation to identify the highest-priority engagement and develop it in detail.",
    highlight: true,
  },
];

export const ProposedNextStep: React.FC = () => (
  <div className="slide pattern-gold-diagonal">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 56px 32px 56px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Eyebrow>Proposed Next Step</Eyebrow>
      <h1
        className="section-title"
        style={{ fontSize: "28pt", marginTop: 8, marginBottom: 20 }}
      >
        Where Would RMAFC Like to Start?
      </h1>

      <div style={{ display: "flex", gap: 28, flex: 1 }}>
        {/* LEFT */}
        <div style={{ flex: "0 0 58%", display: "flex", flexDirection: "column" }}>
          <p className="body-text" style={{ fontSize: "11pt", lineHeight: 1.5 }}>
            GMPC proposes an initial technical engagement with RMAFC to
            identify and prioritise the areas where external advisory and
            capability-building support can generate the greatest institutional
            impact.
          </p>
          <div
            className="body-sm"
            style={{ fontStyle: "italic", marginTop: 8, marginBottom: 14 }}
          >
            You do not need to have decided on the full scope. Any of the paths
            below is a credible starting point.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {entryPaths.map((e, i) => (
              <div
                key={i}
                style={{
                  borderLeft: `3px solid ${e.highlight ? "var(--gold)" : "var(--gold)"}`,
                  background: e.highlight
                    ? "var(--gold-wash)"
                    : "var(--warm-gray-light)",
                  border: e.highlight ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
                  borderLeftWidth: 3,
                  borderLeftColor: e.highlight ? "var(--brown)" : "var(--gold)",
                  padding: "9px 14px",
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "10pt",
                    color: "var(--brown)",
                    minWidth: 200,
                  }}
                >
                  {e.q}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "9.5pt",
                    color: "var(--ink)",
                    lineHeight: 1.4,
                  }}
                >
                  → {e.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              background: "var(--brown)",
              padding: "18px 20px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "9pt",
                color: "var(--gold)",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              GMPC Proposes
            </div>
            <div
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "15pt",
                color: "white",
                lineHeight: 1.25,
              }}
            >
              An initial technical engagement with RMAFC to identify and
              prioritise the areas where external advisory support can generate
              the greatest institutional impact.
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "9.5pt",
                color: "white",
                opacity: 0.85,
                lineHeight: 1.4,
              }}
            >
              This may take the form of a focused diagnostic, a strategic
              working session, or a priority-area assessment.
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "9.5pt",
                color: "white",
                opacity: 0.75,
                lineHeight: 1.4,
              }}
            >
              Following this, GMPC will develop a detailed, scoped
              implementation proposal with clear objectives, deliverables,
              timelines and commercial terms.
            </div>
          </div>

          <div
            style={{
              borderLeft: "3px solid var(--gold)",
              background: "var(--gold-wash)",
              padding: "14px 18px",
            }}
          >
            <div
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontSize: "15pt",
                color: "var(--brown)",
                lineHeight: 1.25,
              }}
            >
              "All paths begin with a conversation."
            </div>
            <div
              className="body-sm"
              style={{ marginTop: 6 }}
            >
              We are ready to begin at RMAFC's convenience.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 28 — CONTACT
   ======================================================================== */
export const Contact: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 60px 32px 60px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            width: 14,
            height: 14,
            background: "var(--gold)",
            transform: "rotate(45deg)",
          }}
        />
        <h1
          className="section-title"
          style={{ fontSize: "32pt", margin: 0 }}
        >
          LET'S CONNECT
        </h1>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 14, marginBottom: 20 }}>
        <GoldRule width="40%" height={1} />
        <GoldRule width="15%" height={1} />
      </div>

      <div style={{ display: "flex", gap: 40, flex: 1 }}>
        {/* LEFT */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "13pt",
              color: "var(--brown)",
              marginBottom: 10,
            }}
          >
            Office Address
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "11pt",
              color: "var(--ink)",
              marginBottom: 4,
            }}
          >
            Abuja (Head Office):
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12pt",
              color: "var(--ink)",
              lineHeight: 1.5,
            }}
          >
            Suite 301B DBM Plaza,
            <br />
            Aminu Kano Crescent, Wuse II,
            <br />
            Abuja, Nigeria
          </div>

          <div
            style={{
              height: 0.5,
              background: "var(--border-soft)",
              margin: "18px 0",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 20px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "8.5pt",
                  color: "var(--ink-light)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: 4,
                }}
              >
                📞 Phone
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11pt",
                  color: "var(--brown)",
                  fontWeight: 600,
                }}
              >
                +234 906 014 1044
                <br />
                +234 703 060 7589
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "8.5pt",
                  color: "var(--ink-light)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: 4,
                }}
              >
                ✉️ Email
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "10pt",
                  color: "var(--brown)",
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                info@goldenmuv.com
                <br />
                goldenmuvgroup@gmail.com
              </div>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "8.5pt",
                  color: "var(--ink-light)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: 4,
                }}
              >
                🌐 Website
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11pt",
                  color: "var(--brown)",
                  fontWeight: 600,
                }}
              >
                www.goldenmuv.com
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 20,
              borderLeft: "3px solid var(--gold)",
              background: "var(--gold-wash)",
              padding: "12px 16px",
            }}
          >
            <div
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontSize: "14pt",
                color: "var(--brown)",
                lineHeight: 1.3,
              }}
            >
              "We look forward to a conversation with the Revenue Mobilisation,
              Allocation and Fiscal Commission."
            </div>
          </div>
        </div>

        {/* RIGHT — Office photo */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              border: "1px solid var(--border-subtle)",
              padding: 12,
              background: "white",
              flex: 1,
              maxHeight: 280,
              display: "flex",
            }}
          >
            <Img
              src="/images/contact_office.jpg"
              alt="GMPC Office"
              style={{ width: "100%", height: "100%" }}
              fallbackLabel="contact_office.jpg"
            />
          </div>
          <div
            className="caption"
            style={{ marginTop: 8, textAlign: "center" }}
          >
            GMPC Head Office, Wuse II, Abuja
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 29 — BACK COVER
   ======================================================================== */
export const BackCover: React.FC = () => (
  <div
    className="slide"
    style={{
      background: "var(--brown)",
      color: "white",
    }}
  >
    {/* Corner brackets white */}
    <div
      style={{
        position: "absolute",
        top: 36,
        left: 36,
        width: 28,
        height: 28,
        borderTop: "1.5px solid #fff",
        borderLeft: "1.5px solid #fff",
        opacity: 0.3,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 36,
        right: 36,
        width: 28,
        height: 28,
        borderBottom: "1.5px solid #fff",
        borderRight: "1.5px solid #fff",
        opacity: 0.3,
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
        textAlign: "center",
        maxWidth: "65%",
        margin: "0 auto",
      }}
    >
      {/* White logo mark */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
        <div
          style={{
            width: 60,
            height: 60,
            border: "1.5px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              background: "var(--gold-pale)",
              transform: "rotate(45deg)",
            }}
          />
        </div>
        <div style={{ lineHeight: 1 }}>
          <div
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "38pt",
              color: "white",
              letterSpacing: "3px",
            }}
          >
            GMPC
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "10pt",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "2.5px",
              marginTop: 4,
            }}
          >
            PREMIUM CONSULTING
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: "Playfair Display, serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "30pt",
          color: "white",
          lineHeight: 1.2,
        }}
      >
        Bridging the Gap Between Strategy and Execution
      </div>

      <div
        style={{
          width: "35%",
          height: 2,
          background: "var(--gold)",
          margin: "28px 0",
        }}
      />

      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "18pt",
          color: "white",
          letterSpacing: "1px",
        }}
      >
        Goldenmuv Premium Consulting Limited
      </div>

      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "12pt",
          color: "rgba(255,255,255,0.75)",
          marginTop: 14,
          display: "flex",
          gap: 30,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <span>+234 906 014 1044</span>
        <span>info@goldenmuv.com</span>
        <span>www.goldenmuv.com</span>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: "9pt",
          color: "rgba(255,255,255,0.4)",
          padding: "0 10%",
          lineHeight: 1.5,
        }}
      >
        This document is private and confidential. It has been prepared
        exclusively for the Revenue Mobilisation, Allocation and Fiscal
        Commission and is intended solely for the Commission's consideration.
      </div>
    </div>
  </div>
);

/* silence unused warnings */
export { GoldRule };
