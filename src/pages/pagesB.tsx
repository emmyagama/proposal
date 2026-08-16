import React from "react";
import {
  ChromeBar,
  CornerBrackets,
  Eyebrow,
  DotList,
  GoldRule,
  PageHeader,
  Img,
} from "../components/ui";

/* ========================================================================
   PAGE 8 — FOUR PILLARS OVERVIEW
   ======================================================================== */
const pillarData = [
  {
    num: "I",
    title: "Fiscal Strategy & Revenue Mobilisation",
    items: [
      "Revenue Mobilisation Strategy",
      "Revenue Opportunity Assessment",
      "Fiscal Efficiency Diagnostics",
      "Revenue Mobilisation Roadmaps",
      "Revenue Intelligence Framework",
      "Leakage & Vulnerability Analysis",
    ],
  },
  {
    num: "II",
    title: "Institutional Performance & Transformation",
    items: [
      "Organisational Diagnostic",
      "Operating Model Review",
      "Process Improvement",
      "Performance Management Framework",
      "Committee Effectiveness",
      "Transformation Roadmap",
    ],
  },
  {
    num: "III",
    title: "Executive & Technical Capability Building",
    items: [
      "Executive Leadership Programme",
      "Fiscal & Revenue Technical Programme",
      "Committee Effectiveness Programme",
      "Custom Masterclasses",
      "RMAFC Fiscal Governance Academy",
    ],
    highlight: 4,
  },
  {
    num: "IV",
    title: "Fiscal & Debt Advisory",
    items: [
      "Debt Sustainability Analysis",
      "Debt Portfolio Review",
      "Borrowing Strategy Advisory",
      "Debt-Service Analysis",
      "Fiscal Risk Assessment",
      "Revenue-Debt Interaction Modelling",
    ],
  },
];

export const FourPillarsOverview: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 56px 36px 56px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PageHeader
        eyebrow="02 · The Proposed Collaboration"
        title="The Four Pillars of GMPC's Proposed Collaboration"
        subtitle="Each pillar can be engaged independently or as part of an integrated programme."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
          flex: 1,
        }}
      >
        {pillarData.map((p) => (
          <div
            key={p.num}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid var(--border-subtle)",
              overflow: "hidden",
            }}
          >
            {/* Head */}
            <div
              style={{
                background: "var(--brown)",
                padding: "14px 16px",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "24pt",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {p.num}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "12pt",
                  color: "white",
                  lineHeight: 1.25,
                  flex: 1,
                }}
              >
                {p.title}
              </div>
            </div>
            {/* Items */}
            <div
              style={{
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 7,
                flex: 1,
                background: "var(--warm-gray-light)",
              }}
            >
              {p.items.map((item, i) => {
                const isHighlight = p.highlight === i;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "9.5pt",
                      color: "var(--ink-light)",
                      lineHeight: 1.35,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: isHighlight
                          ? "var(--gold-bright)"
                          : "var(--gold)",
                        transform: "rotate(45deg)",
                        marginTop: 4,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontWeight: isHighlight ? 700 : 400,
                        color: isHighlight
                          ? "var(--brown)"
                          : "var(--ink-light)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ========================================================================
   Helper: Pillar deep-dive page
   ======================================================================== */
const LogicStrip: React.FC<{ stages: string[] }> = ({ stages }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 14,
      marginBottom: 14,
      flexWrap: "wrap",
    }}
  >
    {stages.map((s, i) => (
      <React.Fragment key={i}>
        <div
          style={{
            background: "var(--warm-gray)",
            border: "1px solid var(--border-subtle)",
            padding: "7px 14px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "9.5pt",
            color: "var(--brown)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {s}
        </div>
        {i < stages.length - 1 && (
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              color: "var(--gold)",
              fontWeight: 700,
              fontSize: "14pt",
            }}
          >
            →
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

const EngagementCard: React.FC<{
  title: string;
  body: string;
  highlight?: boolean;
}> = ({ title, body, highlight }) => (
  <div
    style={{
      background: highlight ? "var(--gold-wash)" : "var(--warm-gray-light)",
      borderLeft: `3px solid ${highlight ? "var(--brown)" : "var(--gold)"}`,
      padding: "12px 14px",
    }}
  >
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        fontSize: "11pt",
        color: "var(--brown)",
        marginBottom: 5,
        lineHeight: 1.25,
      }}
    >
      {title}
    </div>
    <div
      className="body-sm"
      style={{ fontSize: "9pt", lineHeight: 1.4 }}
    >
      {body}
    </div>
  </div>
);

const CredibilityNote: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    style={{
      borderLeft: "3px solid var(--gold)",
      background: "var(--gold-wash)",
      padding: "10px 14px",
      fontFamily: "Inter, sans-serif",
      fontSize: "9pt",
      color: "var(--ink)",
      fontStyle: "italic",
      lineHeight: 1.4,
      marginTop: 10,
    }}
  >
    {children}
  </div>
);

/* ========================================================================
   PAGE 9 — PILLAR I
   ======================================================================== */
export const PillarI: React.FC = () => (
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
      <Eyebrow>02 · The Proposed Collaboration</Eyebrow>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 6 }}>
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "36pt",
            color: "var(--gold)",
            lineHeight: 1,
          }}
        >
          I
        </div>
        <h2
          className="section-title"
          style={{ fontSize: "26pt", margin: 0 }}
        >
          Fiscal Strategy &amp; Revenue Mobilisation
        </h2>
      </div>

      <LogicStrip
        stages={["Identify", "Assess", "Prioritise", "Mobilise", "Monitor"]}
      />

      <div style={{ display: "flex", gap: 22, flex: 1 }}>
        {/* LEFT */}
        <div style={{ flex: "0 0 58%", paddingRight: 18, borderRight: "1px solid var(--border-subtle)" }}>
          <p className="body-text" style={{ fontSize: "11pt", lineHeight: 1.55 }}>
            This is the hero pillar. It addresses RMAFC's core fiscal mandate
            directly — helping the Commission identify, protect and grow
            Nigeria's consolidated revenue base.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginTop: 14,
            }}
          >
            <EngagementCard
              title="Revenue Mobilisation Strategy"
              body="Revenue opportunities · diversification · institutional constraints · leakage points · priority interventions."
            />
            <EngagementCard
              title="Revenue Opportunity Assessment"
              body="Sector and value-chain analysis · solid minerals · digital economy · investment income · cross-sector flows."
            />
            <EngagementCard
              title="Fiscal Efficiency Diagnostics"
              body="Revenue performance vs potential · fiscal operations assessment · opportunities for efficiency improvement."
            />
            <EngagementCard
              title="Revenue Intelligence Framework"
              body="From passive receipt of data to active intelligence centre. Data architecture · reconciliation · anomaly detection."
              highlight
            />
          </div>

          <CredibilityNote>
            <strong style={{ color: "var(--brown)" }}>Technical Partner Note — </strong>
            Where engagements require forensic accounting, oil and gas revenue
            analysis, econometrics or data analytics depth, GMPC deploys
            specialist partners alongside its institutional and strategic
            advisory work.
          </CredibilityNote>
        </div>

        {/* RIGHT — Output band */}
        <div style={{ flex: 1, paddingLeft: 4, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9pt",
              color: "var(--brown)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Revenue Mobilisation Roadmaps Deliver
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginTop: 8,
            }}
          >
            {[
              "Specific initiatives",
              "Institutional owners",
              "KPIs",
              "Timelines",
              "Implementation mechanisms",
              "Monitoring frameworks",
            ].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "8pt",
                  padding: "4px 8px",
                  border: "1px solid var(--gold)",
                  color: "var(--brown)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  background: "white",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div style={{ height: 1, background: "var(--gold)", margin: "14px 0 10px 0" }} />

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9pt",
              color: "var(--brown)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Engagement Outputs
          </div>
          <DotList
            items={[
              "Revenue opportunity map across existing and emerging streams",
              "Sector-level assessments and prioritisation model",
              "Leakage and vulnerability analysis",
              "Revenue intelligence architecture design",
              "Implementation roadmap with owners and milestones",
            ]}
            size="9.5pt"
            gap={6}
          />
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 10 — PILLAR II
   ======================================================================== */
export const PillarII: React.FC = () => (
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
      <Eyebrow>02 · The Proposed Collaboration</Eyebrow>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 6 }}>
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "36pt",
            color: "var(--gold)",
            lineHeight: 1,
          }}
        >
          II
        </div>
        <h2
          className="section-title"
          style={{ fontSize: "26pt", margin: 0 }}
        >
          Institutional Performance &amp; Transformation
        </h2>
      </div>

      <LogicStrip
        stages={["Diagnose", "Design", "Restructure", "Implement", "Embed"]}
      />

      <div style={{ display: "flex", gap: 22, flex: 1 }}>
        <div style={{ flex: "0 0 58%", paddingRight: 18, borderRight: "1px solid var(--border-subtle)" }}>
          <p className="body-text" style={{ fontSize: "10.5pt", lineHeight: 1.5 }}>
            The institutional machinery that executes RMAFC's mandate — its
            structures, processes, governance, and performance systems —
            determines whether policy expertise translates into outcomes. This
            pillar addresses that machinery directly.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginTop: 12,
            }}
          >
            <EngagementCard
              title="Organisational Diagnostic"
              body="Strategy · structure · processes · governance · roles · accountability · technology · performance."
            />
            <EngagementCard
              title="Operating Model Review"
              body="How RMAFC translates mandate into departmental and committee-level execution."
            />
            <EngagementCard
              title="Process Improvement"
              body="Information → Analysis → Committee → Decision → Action → Monitoring."
            />
            <EngagementCard
              title="Performance Management"
              body="Departmental KPIs · committee metrics · strategic scorecards · reporting · review mechanisms."
            />
          </div>

          {/* Phase ladder */}
          <div
            style={{
              marginTop: 12,
              border: "1px solid var(--border-subtle)",
              background: "var(--warm-gray-light)",
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "9pt",
                color: "var(--brown)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "8px 12px",
                background: "var(--warm-gray)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              Transformation Roadmap
            </div>
            <div style={{ padding: "8px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { p: "0–90 Days", c: "Quick wins · Immediate visibility · Early stakeholder confidence.", hl: false },
                { p: "3–12 Months", c: "Structural reform · Process improvement · Capability building.", hl: false },
                { p: "12–36 Months", c: "Embedding reforms · Sustaining performance · Institutionalisation.", hl: true },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 10,
                    background: r.hl ? "var(--gold-wash)" : "transparent",
                    borderLeft: `3px solid ${r.hl ? "var(--brown)" : "var(--gold)"}`,
                    padding: "5px 8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "9pt",
                      color: "var(--brown)",
                      minWidth: 90,
                    }}
                  >
                    {r.p}
                  </div>
                  <div className="body-sm" style={{ fontSize: "9pt" }}>
                    {r.c}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CredibilityNote>
            This pillar draws on GMPC's demonstrated organisational diagnostic
            work across Nigerian public institutions, including{" "}
            <strong style={{ color: "var(--brown)" }}>NASIDA</strong> — where
            structure, governance, capability and performance were all assessed
            and a transformation roadmap produced.
          </CredibilityNote>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, paddingLeft: 4, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9pt",
              color: "var(--brown)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Engagement Outputs
          </div>
          <DotList
            items={[
              "Organisational diagnostic report",
              "Capability map",
              "Process assessment",
              "Operating model design",
              "KPI framework",
              "Performance scorecard",
              "Transformation roadmap",
              "Implementation governance",
            ]}
            size="9.5pt"
            gap={6}
          />
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 11 — PILLAR III
   ======================================================================== */
export const PillarIII: React.FC = () => (
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
      <Eyebrow>02 · The Proposed Collaboration</Eyebrow>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 6 }}>
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "36pt",
            color: "var(--gold)",
            lineHeight: 1,
          }}
        >
          III
        </div>
        <h2
          className="section-title"
          style={{ fontSize: "26pt", margin: 0 }}
        >
          Executive &amp; Technical Capability Building
        </h2>
      </div>

      <LogicStrip
        stages={["Assess", "Design", "Deliver", "Apply", "Institutionalise"]}
      />

      <div style={{ display: "flex", gap: 22, flex: 1 }}>
        <div style={{ flex: "0 0 58%", paddingRight: 18, borderRight: "1px solid var(--border-subtle)" }}>
          <p className="body-text" style={{ fontSize: "10.5pt", lineHeight: 1.5 }}>
            The sophistication of RMAFC's mandate requires sophisticated
            people. Commissioners, Directors, senior managers, technical
            officers and committee members — each with different development
            needs and the same institutional objective: converting analytical
            input into institutional action.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginTop: 12,
            }}
          >
            <EngagementCard
              title="Executive Leadership Programme"
              body="Commissioners · Directors · Senior Management. Strategic leadership · transformation · decision-making · stakeholder management."
            />
            <EngagementCard
              title="Fiscal & Revenue Technical Programme"
              body="Technical officers and analysts. Fiscal analysis · revenue modelling · forecasting · variance analysis · data interpretation."
            />
            <EngagementCard
              title="Committee Effectiveness Programme"
              body="Evidence-based decision-making · analytical challenge · recommendation quality · action tracking · oversight."
            />
            <EngagementCard
              title="★ RMAFC Fiscal Governance Academy"
              body="A structured, recurring capability platform — not a one-off workshop. Could extend to subnational fiscal institutions within RMAFC's mandate."
              highlight
            />
          </div>

          <CredibilityNote>
            <strong style={{ color: "var(--brown)" }}>GMPC has designed and delivered structured leadership and technical programmes for:</strong>{" "}
            FUDMA — HODs, Heads of Faculty, lecturers. Mangal Industries — workforce training and SOPs.
          </CredibilityNote>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, paddingLeft: 4, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9pt",
              color: "var(--brown)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Engagement Outputs
          </div>
          <DotList
            items={[
              "Capability needs assessment",
              "Executive workshops",
              "Technical masterclasses",
              "Committee programme",
              "Post-training application",
              "Impact assessment",
              "Academy design & curriculum",
            ]}
            size="9.5pt"
            gap={6}
          />
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 12 — PILLAR IV
   ======================================================================== */
export const PillarIV: React.FC = () => (
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
      <Eyebrow>02 · The Proposed Collaboration</Eyebrow>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 6 }}>
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "36pt",
            color: "var(--gold)",
            lineHeight: 1,
          }}
        >
          IV
        </div>
        <h2
          className="section-title"
          style={{ fontSize: "26pt", margin: 0 }}
        >
          Fiscal &amp; Debt Advisory
        </h2>
      </div>

      <LogicStrip
        stages={["Assess", "Model", "Advise", "Recommend", "Build Capacity"]}
      />

      <div style={{ display: "flex", gap: 22, flex: 1 }}>
        <div style={{ flex: "0 0 58%", paddingRight: 18, borderRight: "1px solid var(--border-subtle)" }}>
          <p className="body-text" style={{ fontSize: "10.5pt", lineHeight: 1.5 }}>
            Revenue performance and debt dynamics are not independent
            variables. Nigeria's fiscal sustainability depends on the
            interaction between what government earns and what it owes.
            RMAFC's oversight of the revenue side makes its understanding of
            the debt side essential — not peripheral.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginTop: 12,
            }}
          >
            <EngagementCard
              title="Debt Sustainability Analysis"
              body="Assessment of Nigeria's debt trajectory in relation to revenue performance and available fiscal space."
            />
            <EngagementCard
              title="Debt Portfolio Review"
              body="Structure, cost and risk profile of current debt obligations relative to revenue."
            />
            <EngagementCard
              title="Fiscal Risk Assessment"
              body="Contingent liabilities and fiscal risks relevant to the Commission's oversight function."
            />
            <EngagementCard
              title="Revenue-Debt Interaction Modelling"
              body="Analysing the relationship between revenue performance, debt levels and fiscal sustainability scenarios."
              highlight
            />
          </div>

          <CredibilityNote>
            <strong style={{ color: "var(--brown)" }}>GMPC's existing debt advisory capability</strong> was demonstrated
            through its debt recovery engagement with the Bank of Agriculture —
            where financial analysis, portfolio assessment and structured
            recovery strategy were combined into a single advisory programme.
          </CredibilityNote>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, paddingLeft: 4, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9pt",
              color: "var(--brown)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Engagement Outputs
          </div>
          <DotList
            items={[
              "Fiscal efficiency diagnostic",
              "Debt sustainability assessment",
              "Portfolio analysis",
              "Fiscal risk analysis",
              "Revenue-debt interaction model",
              "Improvement opportunities",
              "Implementation roadmap",
              "Internal team capacity building",
            ]}
            size="9.5pt"
            gap={6}
          />
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 13 — THE TECHNICAL PARTNER MODEL
   ======================================================================== */
export const TechPartnerModel: React.FC = () => (
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
        eyebrow="02 · The Proposed Collaboration"
        title="The Technical Partner Model"
        subtitle="GMPC does not claim to be everything. What we claim is this: we know how to diagnose institutional problems, design solutions and assemble the specialist technical expertise that complex fiscal assignments require."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr auto 1fr",
          gap: 12,
          alignItems: "stretch",
          flex: 1,
        }}
      >
        {/* GMPC Core */}
        <div
          style={{
            background: "var(--warm-gray)",
            border: "1px solid var(--border-subtle)",
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9pt",
              color: "var(--brown)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            GMPC Core Capabilities
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: 8, margin: 0, padding: 0 }}>
            {[
              "Strategy & Institutional Advisory",
              "Organisational Transformation",
              "Organisational Diagnostics",
              "Capability Building & Executive Development",
              "Debt Advisory & Financial Analysis",
              "Programme Management",
              "SOP Development & Institutionalisation",
              "Stakeholder Engagement",
            ].map((x) => (
              <li
                key={x}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  fontSize: "9.5pt",
                  color: "var(--ink-light)",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.35,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "var(--gold)",
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                {x}
              </li>
            ))}
          </ul>
        </div>

        {/* + */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "42pt",
            color: "var(--gold)",
          }}
        >
          +
        </div>

        {/* Specialist Network */}
        <div
          style={{
            background: "var(--gold-wash)",
            border: "1px solid var(--gold)",
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "9pt",
              color: "var(--brown)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Specialist Technical Network
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: 8, margin: 0, padding: 0 }}>
            {[
              "Forensic Accounting & Revenue Forensics",
              "Public Finance & Fiscal Policy",
              "Econometrics & Quantitative Modelling",
              "Oil, Gas & Extractives Revenue",
              "Data Analytics & Fiscal Intelligence",
              "Legal & Regulatory Advisory",
              "Sector-Specific Revenue Specialists",
            ].map((x) => (
              <li
                key={x}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  fontSize: "9.5pt",
                  color: "var(--ink-light)",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.35,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "var(--brown)",
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                {x}
              </li>
            ))}
          </ul>
        </div>

        {/* = */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "42pt",
            color: "var(--gold)",
          }}
        >
          =
        </div>

        {/* Result */}
        <div
          style={{
            background: "var(--brown)",
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
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
              marginBottom: 12,
            }}
          >
            The Result
          </div>
          <div
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "16pt",
              color: "white",
              lineHeight: 1.25,
            }}
          >
            Institutional depth. Technical credibility. One coordinated advisory
            relationship.
          </div>
          <div
            style={{
              height: 1,
              background: "var(--gold)",
              opacity: 0.4,
              margin: "12px 0",
            }}
          />
          <div
            style={{
              fontSize: "10pt",
              color: "white",
              opacity: 0.65,
              lineHeight: 1.45,
              fontFamily: "Inter, sans-serif",
            }}
          >
            RMAFC gains access — through a single, coordinated relationship —
            to the full range of technical capabilities its mandate may require.
          </div>
          <div
            style={{
              height: 1,
              background: "var(--gold)",
              opacity: 0.4,
              margin: "12px 0",
            }}
          />
          <div
            style={{
              fontSize: "10pt",
              color: "var(--gold-pale)",
              fontStyle: "italic",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.45,
            }}
          >
            GMPC manages the institutional complexity. Our partners deliver the
            technical depth.
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* Silence unused imports warning helper */
export { CornerBrackets, GoldRule, Img };
