import React from "react";
import { ChromeBar, Eyebrow, DotList, GoldRule, PageHeader, PillarTag } from "../components/ui";

/* ========================================================================
   PAGE 15 — FIVE ENGAGEMENTS OVERVIEW
   ======================================================================== */
const engagements = [
  {
    n: "01",
    title: "Institutional Effectiveness Diagnostic",
    duration: "8–12 weeks · foundation for everything after",
    pillar: "PILLAR II",
    brown: true,
  },
  {
    n: "02",
    title: "Revenue Mobilisation & Diversification Strategy",
    duration: "8–12 weeks · Revenue opportunity map, sector assessments, mobilisation strategy and roadmap",
    pillar: "PILLAR I",
  },
  {
    n: "03",
    title: "Revenue Intelligence & Monitoring Framework",
    duration: "12–16 weeks · Monitoring architecture, data requirements, reconciliation framework, KPIs, dashboard specifications",
    pillar: "PILLAR I",
  },
  {
    n: "04",
    title: "Executive & Committee Capability Programme",
    duration: "3–6 months · Executive leadership, technical masterclasses, committee effectiveness, academy foundation",
    pillar: "PILLAR III",
  },
  {
    n: "05",
    title: "Fiscal Efficiency & Debt Advisory Programme",
    duration: "8–16 weeks · Fiscal diagnostic, debt assessment, fiscal risk, improvement opportunities and roadmap",
    pillar: "PILLAR IV",
    gold: true,
  },
];

export const FiveEngagementsOverview: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 60px 36px 60px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeader
        eyebrow="03 · What RMAFC Could Commission"
        title="Five Illustrative Engagements"
        subtitle="Each can be commissioned independently. The sequence below represents our recommended progression."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1 }}>
        {engagements.map((e, i) => (
          <div
            key={e.n}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 110px",
              gap: 20,
              alignItems: "center",
              padding: "16px 20px",
              background: e.brown
                ? "var(--brown)"
                : e.gold
                ? "var(--gold-wash)"
                : i % 2 === 0
                ? "var(--warm-gray-light)"
                : "white",
              border: e.gold ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
              borderTop: i === 0 ? "1px solid var(--border-subtle)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "28pt",
                color: e.brown ? "var(--gold)" : e.gold ? "var(--brown)" : "var(--gold)",
                lineHeight: 1,
              }}
            >
              {e.n}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "12pt",
                  color: e.brown ? "white" : "var(--brown)",
                  lineHeight: 1.25,
                }}
              >
                {e.title}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "9pt",
                  color: e.brown ? "rgba(255,255,255,0.75)" : "var(--ink-light)",
                  marginTop: 4,
                  lineHeight: 1.35,
                }}
              >
                {e.duration}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <PillarTag label={e.pillar} brown={!e.brown && !e.gold} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ========================================================================
   Helper: Engagement Detail Card
   ======================================================================== */
const EngagementDetail: React.FC<{
  num: string;
  title: string;
  duration: string;
  scope: string[];
  outputs: string[];
  relevance: string;
  gold?: boolean;
}> = ({ num, title, duration, scope, outputs, relevance, gold }) => (
  <div
    style={{
      border: "1px solid var(--border-subtle)",
      borderTop: `3px solid ${gold ? "var(--gold)" : "var(--brown)"}`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      height: "100%",
    }}
  >
    {/* Head */}
    <div
      style={{
        background: "var(--brown)",
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
          fontSize: "20pt",
          color: "var(--gold)",
          lineHeight: 1,
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "11pt",
          color: "white",
          flex: 1,
          lineHeight: 1.2,
        }}
      >
        {title}
      </div>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "7.5pt",
          fontWeight: 600,
          letterSpacing: "1px",
          color: "var(--gold)",
          textTransform: "uppercase",
          border: "1px solid var(--gold)",
          padding: "2px 6px",
        }}
      >
        {duration}
      </span>
    </div>
    {/* Body */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        flex: 1,
      }}
    >
      <div style={{ padding: "10px 12px", borderRight: "1px solid var(--border-subtle)" }}>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "8.5pt",
            color: "var(--brown)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Scope
        </div>
        <DotList items={scope} size="8.5pt" gap={3} markerSize={4} />
      </div>
      <div style={{ padding: "10px 12px" }}>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "8.5pt",
            color: "var(--brown)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Key Outputs
        </div>
        <DotList items={outputs} size="8.5pt" gap={3} markerSize={4} />
      </div>
    </div>
    {/* Footer */}
    <div
      style={{
        background: "var(--gold-wash)",
        borderTop: "1.5px solid var(--gold)",
        padding: "6px 12px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: "8.5pt",
        color: "var(--brown)",
        lineHeight: 1.35,
      }}
    >
      {relevance}
    </div>
  </div>
);

/* ========================================================================
   PAGE 16 — ENGAGEMENT DETAILS 01 & 02
   ======================================================================== */
export const EngagementDetailsA: React.FC = () => (
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
        eyebrow="03 · What RMAFC Could Commission"
        title="Engagement Detail"
        subtitle="Engagements 01 and 02 — the foundational diagnostic and the revenue mobilisation strategy that follows from it."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
          flex: 1,
        }}
      >
        <EngagementDetail
          num="01"
          title="Institutional Effectiveness Diagnostic"
          duration="8–12 WEEKS"
          scope={[
            "Organisational structure",
            "Governance and committee effectiveness",
            "Process effectiveness",
            "Capability assessment",
            "Technology and information systems",
            "Performance management systems",
            "Accountability and reporting frameworks",
          ]}
          outputs={[
            "Organisational diagnostic report with prioritised findings",
            "Capability map across departments",
            "Process assessment",
            "KPI and performance management framework",
            "Governance and committee effectiveness assessment",
            "Phased transformation roadmap (0–90d · 3–12m · 12–36m)",
          ]}
          relevance="Pillar II — Establishes analytical foundation for all subsequent engagements"
        />

        <EngagementDetail
          num="02"
          title="Revenue Mobilisation & Diversification Strategy"
          duration="8–12 WEEKS"
          scope={[
            "Revenue landscape analysis",
            "Diversification opportunities",
            "Leakage points and vulnerability analysis",
            "Institutional constraints assessment",
            "Priority interventions with fiscal impact estimates",
          ]}
          outputs={[
            "Revenue opportunity map",
            "Sector and value-chain assessments",
            "Prioritisation model",
            "Revenue mobilisation strategy",
            "Implementation roadmap",
          ]}
          relevance="Pillar I — Technical partners in oil & gas, econometrics and data analytics deployed as required"
        />
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 17 — ENGAGEMENT DETAILS 03, 04, 05
   ======================================================================== */
export const EngagementDetailsB: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 40px 32px 40px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeader
        eyebrow="03 · What RMAFC Could Commission"
        title="Engagement Detail"
        subtitle="Engagements 03, 04 and 05 — intelligence infrastructure, capability, and fiscal & debt advisory."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 14,
          flex: 1,
        }}
      >
        <EngagementDetail
          num="03"
          title="Revenue Intelligence & Monitoring Framework"
          duration="12–16 WKS"
          scope={[
            "Revenue monitoring architecture design",
            "Data source mapping",
            "Reconciliation framework design",
            "Anomaly-detection protocols",
          ]}
          outputs={[
            "Revenue intelligence architecture",
            "KPI and reporting framework",
            "Dashboard specifications",
          ]}
          relevance="Pillar I — Data & analytics partners deployed"
        />
        <EngagementDetail
          num="04"
          title="Executive & Committee Capability Programme"
          duration="3–6 MOS"
          scope={[
            "Capability needs assessment",
            "Executive leadership workshops",
            "Technical masterclasses for analysts",
            "Committee effectiveness programme",
          ]}
          outputs={[
            "Post-training application support",
            "Impact assessment",
            "Academy design and curriculum",
          ]}
          relevance="Pillar III — Foundation for the RMAFC Fiscal Governance Academy"
        />
        <EngagementDetail
          num="05"
          title="Fiscal Efficiency & Debt Advisory Programme"
          duration="8–16 WKS"
          scope={[
            "Fiscal efficiency diagnostic",
            "Debt sustainability and portfolio review",
            "Fiscal risk identification",
            "Revenue-debt interaction modelling",
          ]}
          outputs={[
            "Improvement opportunities and recommendations",
            "Implementation roadmap",
            "Internal team capacity building component",
          ]}
          relevance="Pillar IV — Draws on GMPC's debt recovery experience with Bank of Agriculture"
          gold
        />
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 18 — SUPPORTING REVENUE ALLOCATION FORMULA REVIEW
   ======================================================================== */
const roleRows = [
  {
    domain: "Econometric & statistical modelling",
    gmpc: "Programme management and coordination",
    partner: "Econometricians, statisticians, public finance modellers",
    partnerLead: true,
  },
  {
    domain: "State-level fiscal data assembly",
    gmpc: "Data coordination and governance",
    partner: "Data analysts and fiscal data specialists",
    partnerLead: true,
  },
  {
    domain: "Stakeholder engagement",
    gmpc: "Lead — design, facilitation, management",
    partner: "—",
  },
  {
    domain: "Institutional coordination across government levels",
    gmpc: "Lead — process management and protocols",
    partner: "—",
  },
  {
    domain: "Implementation planning",
    gmpc: "Lead — sequencing, roadmap, governance",
    partner: "—",
  },
  {
    domain: "Change management",
    gmpc: "Lead",
    partner: "—",
  },
  {
    domain: "Communication strategy",
    gmpc: "Lead",
    partner: "—",
  },
  {
    domain: "Capability building for RMAFC teams",
    gmpc: "Lead — preparing internal teams for execution",
    partner: "—",
  },
];

export const AllocationFormula: React.FC = () => (
  <div className="slide pattern-gold-diagonal">
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
      <Eyebrow>03 · What RMAFC Could Commission</Eyebrow>
      <h1
        className="section-title"
        style={{ fontSize: "26pt", marginTop: 8, marginBottom: 10 }}
      >
        Supporting the Revenue Allocation Formula Review
      </h1>
      <div
        className="body-sm"
        style={{ fontStyle: "italic", maxWidth: "75%", lineHeight: 1.55 }}
      >
        GMPC does not propose to design the formula. That is a technical and
        political process that requires specialist econometric capability and
        the constitutional authority of the Commission. What GMPC proposes is a
        structured supporting role across the dimensions where our capabilities
        are most relevant.
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 14, marginBottom: 16 }}>
        <GoldRule width="40%" height={1} />
        <GoldRule width="15%" height={1} />
      </div>

      {/* Table */}
      <div style={{ display: "flex", flexDirection: "column", border: "1px solid var(--border-subtle)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1.6fr 1.6fr",
            background: "var(--brown)",
          }}
        >
          <div
            style={{
              padding: "10px 14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9.5pt",
              letterSpacing: "1px",
              textTransform: "uppercase",
              background: "var(--warm-gray)",
              color: "var(--brown)",
            }}
          >
            Domain
          </div>
          <div
            style={{
              padding: "10px 14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9.5pt",
              color: "white",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            GMPC Role
          </div>
          <div
            style={{
              padding: "10px 14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9.5pt",
              color: "white",
              letterSpacing: "1px",
              textTransform: "uppercase",
              background: "var(--gold)",
            }}
          >
            Technical Partner Support
          </div>
        </div>

        {roleRows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1.6fr 1.6fr",
              borderTop: "1px solid var(--border-subtle)",
              background: i % 2 === 0 ? "white" : "var(--warm-gray-light)",
            }}
          >
            <div
              style={{
                padding: "8px 14px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "9pt",
                color: "var(--brown)",
                lineHeight: 1.35,
              }}
            >
              {r.domain}
            </div>
            <div
              style={{
                padding: "8px 14px",
                fontFamily: "Inter, sans-serif",
                fontSize: "9pt",
                color: "var(--ink)",
                lineHeight: 1.35,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  color: "var(--brown)",
                }}
              >
                ✓
              </span>
              {r.gmpc}
            </div>
            <div
              style={{
                padding: "8px 14px",
                fontFamily: "Inter, sans-serif",
                fontSize: "9pt",
                color: r.partnerLead ? "var(--ink)" : "#aaa",
                lineHeight: 1.35,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {r.partnerLead && (
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    color: "var(--gold)",
                  }}
                >
                  ★
                </span>
              )}
              {r.partner}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div
        style={{
          marginTop: 14,
          borderLeft: "3px solid var(--gold)",
          background: "var(--gold-wash)",
          padding: "10px 14px",
        }}
      >
        <strong
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            color: "var(--brown)",
            fontSize: "9.5pt",
          }}
        >
          Our position —{" "}
        </strong>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "9.5pt",
            color: "var(--ink)",
            lineHeight: 1.4,
          }}
        >
          Credible. Honest. Ambitious without overclaiming. GMPC offers genuine
          strengths in the process, institutional and capability dimensions of
          the review — while being transparent that specialist econometric and
          statistical partners contribute the technical modelling.
        </span>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 20 — DELIVERY METHODOLOGY
   ======================================================================== */
const methodStages = [
  {
    n: "01",
    title: "DIAGNOSE",
    items: [
      "Data collection and analysis",
      "Structured interviews",
      "Document review",
      "Fieldwork and assessment",
      "Benchmarking",
      "Findings synthesis",
    ],
    highlight: false,
  },
  {
    n: "02",
    title: "DESIGN",
    items: [
      "Options development and analysis",
      "Stakeholder validation",
      "Solution design",
      "Technical modelling",
      "Framework development",
      "Iteration and refinement",
    ],
    highlight: false,
  },
  {
    n: "03",
    title: "BUILD",
    items: [
      "Implementation architecture",
      "Tool and system development",
      "Capability building",
      "Governance and process design",
      "Pilot and iteration",
      "Stakeholder communication",
    ],
    highlight: false,
  },
  {
    n: "04",
    title: "INSTITUTIONALISE",
    items: [
      "Implementation support",
      "Knowledge transfer",
      "Performance monitoring",
      "Sustainability planning",
      "Ongoing advisory",
      "Change that persists",
    ],
    highlight: true,
  },
];

export const DeliveryMethodology: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 56px 0 56px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeader
        eyebrow="04 · How We Work"
        title="Delivery Methodology"
        subtitle="Every GMPC engagement follows a structured four-stage approach — adapted to the specific scope and requirements of each assignment."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
          gap: 0,
          flex: 1,
          alignItems: "stretch",
        }}
      >
        {methodStages.map((s, i) => (
          <React.Fragment key={s.n}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--border-subtle)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: s.highlight ? "var(--gold)" : "var(--brown)",
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 700,
                    fontSize: "18pt",
                    color: s.highlight ? "var(--brown)" : "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "12pt",
                    color: s.highlight ? "var(--brown)" : "white",
                    letterSpacing: "1px",
                  }}
                >
                  {s.title}
                </div>
              </div>
              <div style={{ padding: "10px 14px", flex: 1 }}>
                {s.items.map((it) => (
                  <div
                    key={it}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                      fontSize: "9pt",
                      color: "var(--ink-light)",
                      lineHeight: 1.35,
                      marginBottom: 5,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        background: "var(--gold)",
                        marginTop: 4,
                        flexShrink: 0,
                      }}
                    />
                    {it}
                  </div>
                ))}
              </div>
            </div>
            {i < methodStages.length - 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "22pt",
                  color: "var(--gold)",
                  padding: "0 8px",
                }}
              >
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer band */}
      <div
        style={{
          background: "var(--brown)",
          margin: "18px -56px 0 -56px",
          padding: "16px 56px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontStyle: "italic",
            fontSize: "16pt",
            color: "white",
            lineHeight: 1.3,
          }}
        >
          "We do not produce reports that sit on shelves. Every engagement is
          designed to produce institutional change that persists."
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 21 — ENGAGEMENT MODEL
   ======================================================================== */
const chainItems = [
  {
    title: "Diagnostic Engagement",
    body: "Short. Focused. Evidence-based. Establishes shared understanding of priorities.",
    brown: true,
  },
  {
    title: "Transformation Programme",
    body: "Structured advisory assignment. Organisational, process or strategic improvement.",
  },
  {
    title: "Capability Building",
    body: "Training, workshops, academies. Individual and institutional development.",
  },
  {
    title: "Implementation Support",
    body: "PMO and advisory. Sustained institutional change.",
  },
  {
    title: "Specialist Technical Projects",
    body: "Revenue forensics, econometrics, data analytics — deployed through GMPC's specialist network as required.",
    gold: true,
  },
];

export const EngagementModel: React.FC = () => (
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
        eyebrow="04 · How We Work"
        title="Engagement Model"
        subtitle="RMAFC does not need to determine the full scope of collaboration at the outset. GMPC is designed to engage at any point in this chain — and to scale as institutional needs and priorities become clearer."
      />

      <div style={{ display: "flex", gap: 28, flex: 1 }}>
        {/* LEFT — Chain */}
        <div style={{ flex: "0 0 58%", display: "flex", flexDirection: "column", gap: 6 }}>
          {chainItems.map((c, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  display: "flex",
                  background: c.brown
                    ? "var(--brown)"
                    : c.gold
                    ? "var(--gold-wash)"
                    : "var(--warm-gray-light)",
                  border: c.gold ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
                  padding: "10px 14px",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 4,
                    background: c.brown
                      ? "var(--gold)"
                      : c.gold
                      ? "var(--brown)"
                      : "var(--gold)",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "11pt",
                      color: c.brown ? "white" : "var(--brown)",
                      marginBottom: 3,
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "9pt",
                      color: c.brown ? "rgba(255,255,255,0.8)" : "var(--ink-light)",
                      lineHeight: 1.4,
                    }}
                  >
                    {c.body}
                  </div>
                </div>
              </div>
              {i < chainItems.length - 1 && (
                <div
                  style={{
                    width: 4,
                    height: 10,
                    background: "var(--gold)",
                    marginLeft: 30,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              background: "var(--brown)",
              padding: "16px 18px",
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
              Our Approach
            </div>
            <div
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "17pt",
                color: "white",
                lineHeight: 1.25,
              }}
            >
              We engage at any point in the chain and scale as your priorities
              become clearer.
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10pt",
                color: "white",
                opacity: 0.7,
                lineHeight: 1.5,
              }}
            >
              A diagnostic is always a credible starting point. It establishes
              the evidence base for everything that follows — and gives both
              parties a shared understanding before committing to a larger
              programme.
            </div>
          </div>

          <div
            style={{
              borderLeft: "3px solid var(--gold)",
              background: "var(--gold-wash)",
              padding: "12px 16px",
              fontFamily: "Inter, sans-serif",
              fontSize: "10pt",
              color: "var(--ink)",
              lineHeight: 1.45,
            }}
          >
            This matters for RMAFC because no unsolicited proposal can fully
            substitute for a direct conversation. Our proposed next step is
            designed to create that conversation efficiently — and to ensure
            that any subsequent engagement is precisely targeted.
          </div>
        </div>
      </div>
    </div>
  </div>
);
