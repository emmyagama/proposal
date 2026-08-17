import { ChromeBar, GoldPill, PathwayTag } from "../components/Shared";

/* ============================================================
   PAGE 9 — THE FOUR PATHWAYS OVERVIEW
   ============================================================ */
export function PagePathwayOverview() {
  const pathways = [
    {
      roman: "I",
      name: "Organisational Diagnostic",
      items: ["Readiness Assessment", "Gap & Root-Cause Analysis", "Prioritised Action Agenda", "Risk & Dependency Mapping"],
      primary: true,
    },
    {
      roman: "II",
      name: "Process & SOP Development",
      items: ["Process Mapping", "SOP Design & Documentation", "Ownership Assignment", "Adoption & Rollout Planning"],
    },
    {
      roman: "III",
      name: "Leadership & Management Development",
      items: ["Capability Assessment", "Leadership Curriculum Design", "Workshop Delivery", "Post-Programme Reinforcement"],
    },
    {
      roman: "IV",
      name: "Performance & Implementation Support",
      items: ["KPI & Review Design", "Management Routine Embedding", "Action Tracking", "Implementation Follow-Through"],
    },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          02 · THE PROPOSED COLLABORATION
        </div>
        <h1
          className="font-display"
          style={{ fontSize: 30, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 6 }}
        >
          The Four Pathways of GMPC&rsquo;s Proposed Collaboration
        </h1>
        <div className="font-display" style={{ fontSize: "10.5pt", fontStyle: "italic", color: "var(--ink-light)", marginBottom: 22 }}>
          Each pathway can be engaged independently or as part of an integrated programme.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, height: "calc(100% - 100px)" }}>
          {pathways.map((p) => (
            <div
              key={p.roman}
              style={{
                border: "1px solid var(--border-subtle)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: p.primary ? "var(--brown)" : "var(--warm-gray)",
                  padding: "16px 18px",
                  borderBottom: "2px solid var(--gold)",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {p.roman}
                </div>
                <div
                  style={{
                    fontSize: "13pt",
                    fontWeight: 700,
                    color: p.primary ? "#fff" : "var(--brown)",
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </div>
              </div>
              <div style={{ padding: "14px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                {p.items.map((it, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        background: "var(--gold)",
                        transform: "rotate(45deg)",
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "10pt", color: "var(--ink)", lineHeight: 1.4 }}>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PATHWAY DETAIL — shared layout for pages 10-13
   ============================================================ */
function PathwayDetail({
  roman,
  title,
  eyebrow,
  logic,
  bodyText,
  components,
  credibility,
  duration,
  outputs,
}: {
  roman: string;
  title: string;
  eyebrow: string;
  logic: string[];
  bodyText: string;
  components: { t: string; d: string; highlight?: boolean }[];
  credibility: string;
  duration: string;
  outputs: string[];
}) {
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 14 }}>
          <div className="font-display roman" style={{ fontSize: 32, fontWeight: 700 }}>
            {roman}
          </div>
          <h1 className="font-display" style={{ fontSize: 30, color: "var(--brown)", fontWeight: 700, margin: 0 }}>
            {title}
          </h1>
        </div>

        {/* Logic strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 20 }}>
          {logic.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  background: "var(--warm-gray)",
                  border: "1px solid var(--border-subtle)",
                  padding: "8px 18px",
                  fontSize: "10pt",
                  fontWeight: 600,
                  color: "var(--brown)",
                  letterSpacing: 1,
                }}
              >
                {step}
              </div>
              {i < logic.length - 1 && (
                <div style={{ color: "var(--gold)", fontSize: "16pt", fontWeight: 700, padding: "0 10px" }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 24, height: "calc(100% - 130px)" }}>
          {/* LEFT 60% */}
          <div style={{ width: "60%", display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontSize: "12.5pt", color: "var(--ink)", lineHeight: 1.55, margin: 0 }}>{bodyText}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {components.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: c.highlight ? "var(--gold-wash)" : "var(--warm-gray-light)",
                    borderLeft: c.highlight ? "3px solid var(--brown)" : "3px solid var(--gold)",
                    border: c.highlight ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
                    borderLeftWidth: 3,
                    borderLeftColor: c.highlight ? "var(--brown)" : "var(--gold)",
                    padding: "12px 14px",
                  }}
                >
                  <div style={{ fontSize: "11pt", fontWeight: 700, color: "var(--brown)", marginBottom: 4 }}>
                    {c.t}
                  </div>
                  <div style={{ fontSize: "9.5pt", color: "var(--ink-light)", lineHeight: 1.4 }}>
                    {c.d}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                borderLeft: "3px solid var(--gold)",
                background: "var(--gold-wash)",
                padding: "12px 14px",
                fontSize: "10pt",
                fontStyle: "italic",
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              {credibility}
            </div>
          </div>

          {/* RIGHT 40% — Output band */}
          <div
            style={{
              width: "40%",
              background: "var(--warm-gray-light)",
              border: "1px solid var(--border-subtle)",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ marginBottom: 4 }}>
              <GoldPill>{duration}</GoldPill>
            </div>
            <div
              style={{
                fontSize: "10pt",
                fontWeight: 700,
                color: "var(--brown)",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Engagement Outputs
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {outputs.map((o, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      background: "var(--gold)",
                      transform: "rotate(45deg)",
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "10pt", color: "var(--ink)", lineHeight: 1.45 }}>{o}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "auto", paddingTop: 10, borderTop: "1px solid var(--border-subtle)" }}>
              <PathwayTag roman={roman} small />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 10 — PATHWAY I: Organisational Diagnostic
   ============================================================ */
export function PagePathwayI() {
  return (
    <PathwayDetail
      roman="I"
      title="Organisational Diagnostic"
      eyebrow="02 · THE PROPOSED COLLABORATION"
      logic={["ASSESS", "INTERVIEW", "ANALYSE", "PRIORITISE"]}
      bodyText="This is the recommended starting point. It gives management an evidence base before any larger programme is designed."
      components={[
        { t: "Leadership & Structure Review", d: "Roles, reporting lines and decision rights" },
        { t: "Process & Systems Review", d: "Documentation, consistency and control" },
        { t: "Capability & Performance Review", d: "Management practices and readiness" },
        { t: "Root-Cause & Dependency Analysis", d: "What's driving what, and what to fix first" },
      ]}
      credibility="This pathway draws on GMPC's organisational diagnostic work with NASIDA, where structure, governance, capability and performance were assessed and translated into a prioritised action agenda."
      duration="Indicative Duration: 4–6 weeks"
      outputs={[
        "Organisational diagnostic report with prioritised findings",
        "Capability and gap map",
        "Root-cause and dependency analysis",
        "Prioritised action agenda (immediate / 90-day / medium-term)",
        "Basis for follow-on engagement design",
      ]}
    />
  );
}

/* ============================================================
   PAGE 11 — PATHWAY II: Process & SOP Development
   ============================================================ */
export function PagePathwayII() {
  return (
    <PathwayDetail
      roman="II"
      title="Process & SOP Development"
      eyebrow="02 · THE PROPOSED COLLABORATION"
      logic={["MAP", "DESIGN", "VALIDATE", "EMBED"]}
      bodyText="Procedures and controls are still catching up to the systems being configured. This pathway turns how work should happen into procedures people actually follow."
      components={[
        { t: "Customer & Front-Office Processes", d: "Customer onboarding, service standards and escalation" },
        { t: "Operations & Control Processes", d: "Transaction flow, reconciliation and controls" },
        { t: "HR & People Processes", d: "Onboarding, performance, progression and exit" },
        { t: "Management & Reporting Processes", d: "Routines, reviews and decision-making cadence" },
      ]}
      credibility="This pathway draws directly on GMPC's SOP development and training work with Mangal Industries Limited, where process documentation was paired with staff training to drive consistent execution."
      duration="Indicative Duration: 6–10 weeks"
      outputs={[
        "SOP library for prioritised process areas",
        "Process ownership matrix",
        "Adoption and rollout plan",
        "Process-owner briefing sessions",
      ]}
    />
  );
}

/* ============================================================
   PAGE 12 — PATHWAY III: Leadership & Management Development
   ============================================================ */
export function PagePathwayIII() {
  return (
    <PathwayDetail
      roman="III"
      title="Leadership & Management Development"
      eyebrow="02 · THE PROPOSED COLLABORATION"
      logic={["ASSESS", "DESIGN", "DELIVER", "REINFORCE"]}
      bodyText="Built for experienced bankers who now need to lead a new institution — not learn banking."
      components={[
        { t: "Accountability & Decision-Making", d: "Clear ownership of outcomes and decision rights" },
        { t: "Performance Conversations", d: "Candid, structured feedback and expectation-setting" },
        { t: "Cross-Functional Execution", d: "Leading across teams and silos with intent" },
        { t: "Culture & Standards Alignment", d: "Modelling the standards the institution is built on" },
      ]}
      credibility="This pathway draws on GMPC's leadership development programme for FUDMA's Heads of Department, Heads of Faculty and Non-Academic Heads — senior, experienced people learning to lead differently inside a complex institution."
      duration="Indicative Duration: Several weeks, modular"
      outputs={[
        "Leadership capability assessment",
        "Structured leadership curriculum",
        "Delivered leadership workshops",
        "Practical management toolkit",
        "Post-programme reinforcement plan",
      ]}
    />
  );
}

/* ============================================================
   PAGE 13 — PATHWAY IV: Performance & Implementation Support
   ============================================================ */
export function PagePathwayIV() {
  return (
    <PathwayDetail
      roman="IV"
      title="Performance & Implementation Support"
      eyebrow="02 · THE PROPOSED COLLABORATION"
      logic={["DEFINE", "BUILD", "TRACK", "SUSTAIN"]}
      bodyText="Design of practical KPI and review structures connecting strategy to daily delivery — with support through to completed implementation."
      components={[
        { t: "KPI & Scorecard Design", d: "Measures that connect strategy to daily delivery" },
        { t: "Management Review Routines", d: "Cadence, content and accountability of reviews" },
        { t: "Action & Follow-Through Tracking", d: "A visible record of what is being done, and by whom" },
        { t: "Embedded Implementation Support", d: "Hands-on support through to completed execution", highlight: true },
      ]}
      credibility="This pathway draws on GMPC's debt recovery engagement with Bank of Agriculture, where structured process discipline and accountability were used to drive sustained execution against a defined portfolio."
      duration="Indicative Duration: Ongoing, phased over several months"
      outputs={[
        "KPI and performance management framework",
        "Management review cadence",
        "Action-tracking system",
        "Implementation support through to completion",
      ]}
    />
  );
}
