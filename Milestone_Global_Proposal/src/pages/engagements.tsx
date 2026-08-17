import { ChromeBar, SectionDivider } from "../components/Shared";

/* ============================================================
   PAGE 14 — SECTION DIVIDER 03
   ============================================================ */
export function PageDiv03() {
  return (
    <SectionDivider
      imagePath="/images/div03_engagement.jpg"
      sectionNumber="03"
      eyebrow="SECTION 03"
      title="WHAT MILESTONE"
      subtitle="Could Commission — Engagement Options"
      quote="You don't have to know exactly what you want from us today. These are the conversations we propose to have."
    />
  );
}

/* ============================================================
   PAGE 15 — RECOMMENDED SEQUENCE
   ============================================================ */
export function PageSequence() {
  const rows = [
    {
      n: "01",
      t: "Organisational Diagnostic",
      d: "4–6 weeks · Establishes the evidence base for everything that follows",
      path: "PATHWAY I",
      primary: true,
    },
    {
      n: "02",
      t: "Process & SOP Development",
      d: "6–10 weeks · Documented, owned, adopted procedures across priority functions",
      path: "PATHWAY II",
    },
    {
      n: "03",
      t: "Leadership & Management Development Programme",
      d: "Several weeks, modular · Equips managers to lead a new institution, not just a function",
      path: "PATHWAY III",
    },
    {
      n: "04",
      t: "Performance & Implementation Support",
      d: "Ongoing, phased over several months · Embeds accountability and sustains change",
      path: "PATHWAY IV",
      highlight: true,
    },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          03 · WHAT MILESTONE COULD COMMISSION
        </div>
        <h1
          className="font-display"
          style={{ fontSize: 32, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 6 }}
        >
          Recommended Sequence
        </h1>
        <div className="font-display" style={{ fontSize: "10.5pt", fontStyle: "italic", color: "var(--ink-light)", marginBottom: 22 }}>
          Each can be commissioned independently. The sequence below reflects our recommended progression.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {rows.map((r) => (
            <div
              key={r.n}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr 2fr 120px",
                alignItems: "center",
                padding: "18px 22px",
                background: r.primary
                  ? "var(--brown)"
                  : r.highlight
                  ? "var(--gold-wash)"
                  : "var(--warm-gray-light)",
                borderBottom: "1px solid var(--border-subtle)",
                borderTop: r.highlight ? "2px solid var(--gold)" : undefined,
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: r.primary ? "var(--gold)" : r.highlight ? "var(--brown)" : "var(--gold)",
                }}
              >
                {r.n}
              </div>
              <div
                style={{
                  fontSize: "14pt",
                  fontWeight: 700,
                  color: r.primary ? "#fff" : "var(--brown)",
                }}
              >
                {r.t}
              </div>
              <div
                style={{
                  fontSize: "10pt",
                  color: r.primary ? "rgba(255,255,255,0.7)" : "var(--ink-light)",
                }}
              >
                {r.d}
              </div>
              <div
                style={{
                  fontSize: "9pt",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: r.primary ? "var(--gold)" : "var(--gold)",
                  textAlign: "right",
                }}
              >
                {r.path}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ENGAGEMENT DETAIL CARD — shared for pages 16-17
   ============================================================ */
function EngagementCard({
  n,
  title,
  duration,
  scope,
  outputs,
  relevance,
  highlight,
}: {
  n: string;
  title: string;
  duration: string;
  scope: string[];
  outputs: string[];
  relevance: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        border: highlight ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
        borderTop: highlight ? "3px solid var(--gold)" : "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        flex: 1,
      }}
    >
      {/* Head */}
      <div style={{ background: "var(--brown)", padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
        <div
          className="font-display"
          style={{ fontSize: 26, color: "var(--gold)", fontWeight: 700, minWidth: 40 }}
        >
          {n}
        </div>
        <div style={{ flex: 1, color: "#fff", fontSize: "13pt", fontWeight: 700 }}>{title}</div>
        <div
          style={{
            background: "var(--gold-wash)",
            color: "var(--brown)",
            padding: "4px 10px",
            fontSize: "9pt",
            fontWeight: 700,
            letterSpacing: 1.2,
            borderRadius: 2,
          }}
        >
          {duration}
        </div>
      </div>
      {/* Body */}
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ width: "48%", padding: "14px 18px", borderRight: "1px solid var(--border-subtle)" }}>
          <div
            style={{
              fontSize: "9pt",
              fontWeight: 700,
              color: "var(--gold)",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Scope
          </div>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: "10pt", color: "var(--ink)", lineHeight: 1.55 }}>
            {scope.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div style={{ width: "52%", padding: "14px 18px" }}>
          <div
            style={{
              fontSize: "9pt",
              fontWeight: 700,
              color: "var(--gold)",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Outputs
          </div>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: "10pt", color: "var(--ink)", lineHeight: 1.55 }}>
            {outputs.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Footer */}
      <div style={{ borderTop: "2px solid var(--gold)", background: "var(--gold-wash)", padding: "10px 18px", fontSize: "9.5pt", fontStyle: "italic", color: "var(--ink)" }}>
        {relevance}
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 16 — ENGAGEMENT 01 & 02
   ============================================================ */
export function PageEngagements0102() {
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40, display: "flex", flexDirection: "column" }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          03 · WHAT MILESTONE COULD COMMISSION
        </div>
        <h1 className="font-display" style={{ fontSize: 28, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 20 }}>
          Engagement Detail — 01 &amp; 02
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, flex: 1 }}>
          <EngagementCard
            n="01"
            title="Organisational Diagnostic"
            duration="4–6 WEEKS"
            scope={[
              "Organisational structure",
              "Governance & decision rights",
              "Process effectiveness",
              "Capability assessment",
              "Performance systems",
              "Accountability frameworks",
            ]}
            outputs={[
              "Diagnostic report with prioritised findings",
              "Capability map",
              "Root-cause analysis",
              "Prioritised action agenda",
            ]}
            relevance="Pathway I — Establishes the evidence base for all subsequent engagement decisions."
          />
          <EngagementCard
            n="02"
            title="Process & SOP Development"
            duration="6–10 WEEKS"
            scope={[
              "Process mapping across priority functions",
              "SOP design & documentation",
              "Ownership assignment",
              "Adoption and rollout planning",
            ]}
            outputs={[
              "SOP library for priority areas",
              "Ownership matrix",
              "Rollout plan",
              "Process-owner briefing sessions",
            ]}
            relevance="Pathway II — Direct precedent in GMPC's Mangal Industries engagement."
          />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 17 — ENGAGEMENT 03 & 04
   ============================================================ */
export function PageEngagements0304() {
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40, display: "flex", flexDirection: "column" }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          03 · WHAT MILESTONE COULD COMMISSION
        </div>
        <h1 className="font-display" style={{ fontSize: 28, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 20 }}>
          Engagement Detail — 03 &amp; 04
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, flex: 1 }}>
          <EngagementCard
            n="03"
            title="Leadership & Management Development"
            duration="SEVERAL WEEKS, MODULAR"
            scope={[
              "Capability assessment of leaders",
              "Leadership curriculum design",
              "Workshop delivery",
              "Post-programme reinforcement",
            ]}
            outputs={[
              "Leadership curriculum",
              "Delivered workshops",
              "Management toolkit",
              "Reinforcement plan",
            ]}
            relevance="Pathway III — Direct precedent in GMPC's FUDMA leadership programme."
          />
          <EngagementCard
            n="04"
            title="Performance & Implementation Support"
            duration="ONGOING, PHASED"
            scope={[
              "KPI design",
              "Management review cadence",
              "Action tracking",
              "Implementation follow-through",
            ]}
            outputs={[
              "Performance management framework",
              "Management review cadence",
              "Action-tracking system",
              "Completed implementation support",
            ]}
            relevance="Pathway IV — Draws on GMPC's execution discipline demonstrated with Bank of Agriculture."
            highlight
          />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 18 — SECTION DIVIDER 04
   ============================================================ */
export function PageDiv04() {
  return (
    <SectionDivider
      imagePath="/images/div04_methodology.jpg"
      sectionNumber="04"
      eyebrow="SECTION 04"
      title="HOW WE WORK"
      subtitle="Delivery Methodology"
      quote="Institutional change only counts if it's still there after we leave."
    />
  );
}

/* ============================================================
   PAGE 19 — DELIVERY METHODOLOGY
   ============================================================ */
export function PageMethodology() {
  const stages = [
    { n: "01", t: "DIAGNOSE", d: "Evidence before prescription." },
    { n: "02", t: "DESIGN", d: "Build the specific solution for your context." },
    { n: "03", t: "BUILD", d: "Create the tools, documents, systems or capability required." },
    { n: "04", t: "INSTITUTIONALISE", d: "Stay until it's running on its own.", highlight: true },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 0, display: "flex", flexDirection: "column" }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          04 · HOW WE WORK
        </div>
        <h1 className="font-display" style={{ fontSize: 32, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 6 }}>
          Delivery Methodology
        </h1>
        <div className="font-display" style={{ fontSize: "10.5pt", fontStyle: "italic", color: "var(--ink-light)", marginBottom: 26 }}>
          Every GMPC engagement follows this four-stage approach, adapted to the specific scope of each assignment.
        </div>

        <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: 30, flex: 1 }}>
          {stages.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  border: "1px solid var(--border-subtle)",
                  borderRight: "none",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: s.highlight ? "var(--gold)" : "var(--brown)",
                    padding: "14px 18px",
                    color: s.highlight ? "var(--brown)" : "#fff",
                  }}
                >
                  <div style={{ fontSize: "9pt", fontWeight: 700, letterSpacing: 1.5, opacity: 0.8 }}>
                    STAGE {s.n}
                  </div>
                  <div className="font-display" style={{ fontSize: "16pt", fontWeight: 700, marginTop: 2 }}>
                    {s.t}
                  </div>
                </div>
                <div style={{ padding: "18px 18px", fontSize: "10.5pt", color: "var(--ink)", lineHeight: 1.5, flex: 1, background: s.highlight ? "var(--gold-wash)" : "#fff" }}>
                  {s.d}
                </div>
              </div>
              {i < stages.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 6px",
                    color: "var(--gold)",
                    fontSize: "20pt",
                    fontWeight: 700,
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer band */}
        <div
          style={{
            background: "var(--brown)",
            color: "#fff",
            padding: "20px 28px",
            textAlign: "center",
            marginLeft: -56,
            marginRight: -56,
            width: "calc(100% + 112px)",
          }}
        >
          <div className="font-display" style={{ fontSize: "18pt", fontStyle: "italic", lineHeight: 1.3 }}>
            &ldquo;We do not produce reports that sit on shelves. Every engagement is designed to produce institutional change that persists.&rdquo;
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 20 — ENGAGEMENT MODEL
   ============================================================ */
export function PageEngagementModel() {
  const chain = [
    { t: "Diagnostic Engagement", d: "Short. Focused. Evidence-based. Establishes shared understanding of priorities.", primary: true },
    { t: "Process / SOP Engagement", d: "Structured documentation assignment. Builds usable, adopted procedures." },
    { t: "Capability Building", d: "Leadership and management development. Individual and institutional growth." },
    { t: "Implementation Support", d: "Sustained follow-through on agreed action.", highlight: true },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          04 · HOW WE WORK
        </div>
        <h1 className="font-display" style={{ fontSize: 32, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 6 }}>
          Engagement Model
        </h1>
        <div className="font-display" style={{ fontSize: "10.5pt", fontStyle: "italic", color: "var(--ink-light)", marginBottom: 22, maxWidth: "70%" }}>
          Milestone does not need to determine the full scope of collaboration at the outset. GMPC is designed to engage at any point in this chain — and to scale as priorities become clearer.
        </div>

        <div style={{ display: "flex", gap: 24, height: "calc(100% - 110px)" }}>
          {/* LEFT chain */}
          <div style={{ width: "60%", display: "flex", flexDirection: "column", gap: 12 }}>
            {chain.map((c, i) => (
              <div
                key={i}
                style={{
                  background: c.highlight ? "var(--gold-wash)" : c.primary ? "var(--brown)" : "var(--warm-gray)",
                  borderLeft: c.highlight ? "4px solid var(--brown)" : "4px solid var(--gold)",
                  border: c.highlight ? "1px solid var(--gold)" : undefined,
                  borderLeftWidth: 4,
                  borderLeftColor: c.highlight ? "var(--brown)" : "var(--gold)",
                  padding: "14px 18px",
                  flex: 1,
                }}
              >
                <div style={{ fontSize: "12pt", fontWeight: 700, color: c.primary ? "#fff" : "var(--brown)", marginBottom: 4 }}>
                  {c.t}
                </div>
                <div style={{ fontSize: "10pt", color: c.primary ? "rgba(255,255,255,0.85)" : "var(--ink-light)", lineHeight: 1.45 }}>
                  {c.d}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div style={{ width: "40%", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "var(--brown)", color: "#fff", padding: "22px 22px", flex: 1 }}>
              <div style={{ color: "var(--gold)", fontSize: "10pt", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>
                Our Approach
              </div>
              <div className="font-display" style={{ fontSize: "17pt", fontStyle: "italic", lineHeight: 1.35, marginBottom: 14 }}>
                We engage at any point in the chain and scale as your priorities become clearer.
              </div>
              <div style={{ fontSize: "10pt", opacity: 0.85, lineHeight: 1.5 }}>
                A diagnostic is always a credible starting point — but it is not the only one.
              </div>
            </div>

            <div
              style={{
                borderLeft: "3px solid var(--gold)",
                padding: "14px 18px",
                background: "var(--warm-gray-light)",
              }}
            >
              <div style={{ fontSize: "10pt", color: "var(--ink)", lineHeight: 1.55 }}>
                No proposal can fully substitute for a direct conversation. Our proposed next step is designed to create that conversation efficiently — and to ensure that any subsequent engagement is precisely targeted.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 21 — SECTION DIVIDER 05
   ============================================================ */
export function PageDiv05() {
  return (
    <SectionDivider
      imagePath="/images/div05_gmpc.jpg"
      sectionNumber="05"
      eyebrow="SECTION 05"
      title="WHY GMPC"
      subtitle="Strategy · Execution · Capability"
      quote="Institutions, not just intentions, determine outcomes. We work to close that gap."
    />
  );
}
