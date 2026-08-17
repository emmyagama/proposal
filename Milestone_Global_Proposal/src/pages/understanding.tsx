import { ChromeBar, SectionDivider } from "../components/Shared";

/* ============================================================
   PAGE 4 — SECTION DIVIDER 01
   ============================================================ */
export function PageDiv01() {
  return (
    <SectionDivider
      imagePath="/images/div01_bank.jpg"
      sectionNumber="01"
      eyebrow="SECTION 01"
      title="OUR UNDERSTANDING"
      subtitle="of Milestone"
      quote="Milestone occupies a rare position: a bank being built, in real time, by people who already know banking."
    />
  );
}

/* ============================================================
   PAGE 5 — MILESTONE'S BUILD-OUT AS AN INTERCONNECTED SYSTEM
   ============================================================ */
export function PageSystemMap() {
  const nodes = [
    { n: "01", t: "Leadership & Governance", d: "Senior banking leadership and board oversight already in motion" },
    { n: "02", t: "People & Talent", d: "An expanding workforce, drawn from multiple established institutions" },
    { n: "03", t: "Technology & Operations", d: "Core banking, NIBSS integration and automation being configured" },
    { n: "04", t: "Customer Proposition", d: "A non-interest digital banking model taking shape" },
    {
      n: "05",
      t: "Organisational Execution Capability",
      d: "The foundation that determines whether all four components above actually work together",
      highlight: true,
    },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          01 · OUR UNDERSTANDING OF MILESTONE
        </div>
        <h1
          className="font-display"
          style={{ fontSize: 28, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 24 }}
        >
          Milestone&rsquo;s Build-Out as an Interconnected System
        </h1>

        <div style={{ display: "flex", gap: 28, height: "calc(100% - 80px)" }}>
          {/* LEFT — chain */}
          <div style={{ width: "44%", display: "flex", flexDirection: "column", gap: 10 }}>
            {nodes.map((n, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <div
                  style={{
                    display: "flex",
                    background: n.highlight ? "var(--gold-wash)" : "var(--warm-gray)",
                    border: n.highlight ? "1px solid var(--gold)" : "1px solid transparent",
                    borderLeft: n.highlight
                      ? "4px solid var(--brown)"
                      : "4px solid var(--gold)",
                    padding: "10px 14px",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: n.highlight ? "var(--brown)" : "var(--gold)",
                      minWidth: 28,
                    }}
                  >
                    {n.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "10.5pt",
                        fontWeight: 700,
                        color: "var(--brown)",
                        marginBottom: 2,
                      }}
                    >
                      {n.t}
                    </div>
                    <div style={{ fontSize: "9pt", color: "var(--ink-light)", lineHeight: 1.35 }}>
                      {n.d}
                    </div>
                  </div>
                </div>
                {i < nodes.length - 1 && (
                  <div
                    style={{
                      width: 4,
                      height: 8,
                      background: "var(--gold)",
                      opacity: 0.4,
                      marginLeft: 14,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT — text */}
          <div style={{ width: "56%", display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontSize: "12.5pt", color: "var(--ink)", lineHeight: 1.55, margin: 0 }}>
              These components are interdependent. Strength in leadership, technology or talent alone
              does not guarantee a coherent, repeatable way of operating. That capability has to be
              built deliberately.
            </p>

            <div style={{ background: "var(--brown)", padding: "16px 20px", color: "#fff" }}>
              <div
                style={{
                  color: "var(--gold)",
                  fontWeight: 700,
                  fontSize: "11pt",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                This stage increasingly requires
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px 22px",
                }}
              >
                {[
                  "Clear ownership and accountability",
                  "Documented, repeatable processes",
                  "Managers who can build, not just run, functions",
                  "Cross-functional coordination",
                  "Consistent onboarding and performance practices",
                  "Follow-through from design to daily habit",
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                      fontSize: "10pt",
                      opacity: 0.9,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--gold)",
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="font-display"
              style={{
                fontStyle: "italic",
                fontSize: "10.5pt",
                color: "var(--ink-light)",
                marginTop: "auto",
              }}
            >
              GMPC&rsquo;s proposed collaboration is structured around precisely these requirements.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 6 — FIVE AREAS OF INCREASING COMPLEXITY
   ============================================================ */
export function PageFiveChallenges() {
  const cards = [
    {
      n: "01",
      t: "Many Backgrounds, One Organisation",
      b: "People arriving from different institutions bring different habits, systems and expectations.",
      i: "Needs deliberate alignment, not assumption.",
    },
    {
      n: "02",
      t: "Processes Built Alongside the Business",
      b: "Procedures and controls are still catching up to the systems being configured.",
      i: "Design and adoption must happen together.",
    },
    {
      n: "03",
      t: "Managers Becoming Builders",
      b: "Experienced functional experts are being asked to build an organisation, not just run a department.",
      i: "A different skill from what got them here.",
    },
    {
      n: "04",
      t: "Cross-Functional Execution",
      b: "Technology, operations, risk and customer-facing teams must work as one system.",
      i: "Needs structure, not just goodwill.",
    },
    {
      n: "05",
      t: "Growing Headcount, Evolving Systems",
      b: "Onboarding, performance expectations and culture must keep pace with hiring.",
      i: "A persistent challenge, not a one-off fix.",
      highlight: true,
    },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          01 · OUR UNDERSTANDING OF MILESTONE
        </div>
        <h1
          className="font-display"
          style={{ fontSize: 32, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 6 }}
        >
          Five Areas of Increasing Complexity
        </h1>
        <div
          className="font-display"
          style={{ fontSize: "10.5pt", fontStyle: "italic", color: "var(--ink-light)", marginBottom: 22 }}
        >
          Not institutional weakness — the natural demands of building at pace.
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 12,
            height: "calc(100% - 100px)",
          }}
        >
          {cards.map((c) => (
            <div
              key={c.n}
              style={{
                borderTop: c.highlight ? "3px solid var(--brown)" : "3px solid var(--gold)",
                background: c.highlight ? "var(--gold-wash)" : "#fff",
                border: c.highlight ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
                borderTopWidth: 3,
                borderTopColor: c.highlight ? "var(--brown)" : "var(--gold)",
                padding: "14px 14px 16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "15pt",
                  fontWeight: 700,
                  color: c.highlight ? "var(--brown)" : "var(--gold)",
                  marginBottom: 10,
                }}
              >
                {c.n}
              </div>
              <div
                style={{
                  fontSize: "12.5pt",
                  fontWeight: 700,
                  color: "var(--brown)",
                  lineHeight: 1.2,
                  marginBottom: 10,
                }}
              >
                {c.t}
              </div>
              <div style={{ fontSize: "9.5pt", color: "var(--ink-light)", lineHeight: 1.35, marginBottom: 10 }}>
                {c.b}
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: "8.5pt",
                  fontStyle: "italic",
                  color: "var(--ink-light)",
                  marginTop: "auto",
                  borderTop: "1px solid var(--border-subtle)",
                  paddingTop: 8,
                }}
              >
                {c.i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 7 — WHY THIS MATTERS NOW
   ============================================================ */
export function PageWhyMatters() {
  const points = [
    "Fixing a process before launch costs a fraction of fixing it after customers are using it.",
    "Clarifying ownership before departments harden into fixed habits is easier than untangling disputes later.",
    "Building management capability before scale prevents the same problems multiplying across a larger workforce.",
    "Establishing culture and standards early is far more effective than correcting culture after it has already formed.",
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div
        style={{
          position: "absolute",
          top: 70,
          left: 56,
          right: 56,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
            01 · OUR UNDERSTANDING OF MILESTONE
          </div>
          <h1
            className="font-display"
            style={{ fontSize: 32, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 8 }}
          >
            Why This Matters Now
          </h1>
          <div
            className="font-display"
            style={{ fontSize: "10.5pt", fontStyle: "italic", color: "var(--ink-light)" }}
          >
            The cost of waiting is higher than the cost of alignment.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 }}>
          {points.map((p, i) => (
            <div
              key={i}
              style={{
                background: "var(--warm-gray)",
                borderLeft: "3px solid var(--gold)",
                padding: "14px 16px",
                fontSize: "10.5pt",
                color: "var(--ink)",
                lineHeight: 1.45,
              }}
            >
              {p}
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          style={{
            background: "var(--brown)",
            color: "#fff",
            padding: "22px 28px",
            textAlign: "center",
            marginTop: "auto",
            marginLeft: -56,
            marginRight: -56,
            width: "calc(100% + 112px)",
          }}
        >
          <div
            className="font-display"
            style={{ fontSize: "20pt", fontStyle: "italic", fontWeight: 500, lineHeight: 1.25 }}
          >
            &ldquo;This is the window in which the right groundwork pays the highest dividends.&rdquo;
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 8 — SECTION DIVIDER 02
   ============================================================ */
export function PageDiv02() {
  return (
    <SectionDivider
      imagePath="/images/div02_collaboration.jpg"
      sectionNumber="02"
      eyebrow="SECTION 02"
      title="THE PROPOSED"
      subtitle="Collaboration — Four Pathways"
      quote="We don't hand over a report and disappear. Every engagement is designed to produce a way of working that outlasts our presence."
    />
  );
}
