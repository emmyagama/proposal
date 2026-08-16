import React from "react";
import {
  ChromeBar,
  GMPCWordmark,
  RMAFCWordmark,
  CornerBrackets,
  Eyebrow,
  DotList,
  GoldRule,
  PageHeader,
  Img,
} from "../components/ui";

/* ========================================================================
   PAGE 1 — COVER
   ======================================================================== */
export const Cover: React.FC = () => (
  <div className="slide">
    {/* Left accent bar */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 6,
        background: "var(--brown)",
      }}
    />
    <CornerBrackets />

    {/* Centre content */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "78%",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Eyebrow>PRIVATE &amp; CONFIDENTIAL</Eyebrow>

      <div
        style={{
          marginTop: 24,
          fontSize: "14pt",
          color: "var(--ink-light)",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          letterSpacing: "0.5px",
        }}
      >
        A PROPOSAL FOR STRATEGIC COLLABORATION WITH
      </div>

      <div
        style={{
          marginTop: 14,
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
          fontSize: "16pt",
          color: "var(--brown)",
          letterSpacing: "1px",
        }}
      >
        THE REVENUE MOBILISATION, ALLOCATION AND FISCAL COMMISSION
      </div>

      <h1
        style={{
          marginTop: 28,
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
          fontSize: "34pt",
          color: "var(--brown)",
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        Strengthening Fiscal Governance,
        <br />
        Revenue Mobilisation &amp; Institutional Performance
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          marginTop: 28,
        }}
      >
        <GoldRule width="40%" height={1.5} />
        <GoldRule width="25%" height={1.5} />
      </div>

      {/* Logos */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 40,
          marginTop: 32,
        }}
      >
        <div style={{ height: 50, display: "flex", alignItems: "center" }}>
          <RMAFCWordmark size={50} />
        </div>
        <div
          style={{
            width: 1,
            height: 48,
            background: "var(--border-subtle)",
          }}
        />
        <div style={{ height: 50, display: "flex", alignItems: "center" }}>
          <GMPCWordmark size={50} />
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          fontSize: "12pt",
          color: "var(--ink)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Submitted by{" "}
        <strong style={{ color: "var(--brown)" }}>
          Goldenmuv Premium Consulting Limited (GMPC)
        </strong>
      </div>

      <div className="caption" style={{ marginTop: 8 }}>
        August 2026
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 2 — TABLE OF CONTENTS
   ======================================================================== */
const tocItems = [
  "Our Understanding of RMAFC",
  "The Proposed Collaboration — Four Pillars",
  "What RMAFC Could Commission — Five Engagements",
  "How We Work",
  "Why GMPC",
];

export const TableOfContents: React.FC = () => (
  <div className="slide">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 80px 40px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span className="geo-square" />
      </div>
      <h1
        className="section-title"
        style={{ fontSize: "32pt", marginTop: 12, marginBottom: 10 }}
      >
        TABLE OF CONTENTS
      </h1>
      <GoldRule width="55%" height={1} />

      <div style={{ marginTop: 36, display: "flex", flexDirection: "column" }}>
        {tocItems.map((item, i) => (
          <React.Fragment key={i}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 24,
                padding: "14px 0",
              }}
            >
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "28pt",
                  color: "var(--gold)",
                  minWidth: 44,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "16pt",
                  color: "var(--brown)",
                  letterSpacing: "0.3px",
                }}
              >
                {item}
              </div>
            </div>
            {i < tocItems.length - 1 && (
              <div
                style={{
                  height: 0.5,
                  background: "var(--border-subtle)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 3 — EXECUTIVE PROPOSITION
   ======================================================================== */
const pillarsShort = [
  { num: "I", name: "Fiscal Strategy & Revenue Mobilisation", primary: true },
  { num: "II", name: "Institutional Performance & Transformation", primary: false },
  { num: "III", name: "Executive & Technical Capability Building", primary: false },
  { num: "IV", name: "Fiscal & Debt Advisory", primary: false },
];

export const ExecutiveProposition: React.FC = () => (
  <div className="slide pattern-gold-diagonal">
    <ChromeBar />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "70px 60px 40px 60px",
        display: "flex",
        gap: 36,
      }}
    >
      {/* LEFT — Problem */}
      <div style={{ flex: "0 0 46%", paddingRight: 24, borderRight: "0.4pt solid var(--border-subtle)" }}>
        <Eyebrow>THE CONTEXT</Eyebrow>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "18pt",
            color: "var(--brown)",
            marginTop: 14,
            lineHeight: 1.2,
          }}
        >
          Nigeria's fiscal architecture is growing more complex.
        </h2>
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontStyle: "italic",
            fontSize: "13pt",
            color: "var(--ink-light)",
            marginTop: 10,
            lineHeight: 1.4,
          }}
        >
          RMAFC's institutional capabilities must grow with it.
        </div>

        <div style={{ marginTop: 24 }}>
          <DotList
            items={[
              "Revenue streams are multiplying: oil, gas, customs, CIT, VAT, minerals, investments; each with its own architecture and leakage points.",
              "Analytical and data demands are intensifying. Receiving data is no longer enough; RMAFC must interrogate and interpret it.",
              "The gap between mandate and delivery is the institutional risk.",
            ]}
            size="10.5pt"
          />
        </div>
      </div>

      {/* RIGHT — Proposition */}
      <div style={{ flex: 1, paddingLeft: 24 }}>
        <Eyebrow>THE GMPC PROPOSITION</Eyebrow>
        <p
          className="body-text"
          style={{ marginTop: 14, fontSize: "11.5pt" }}
        >
          A strategic collaboration in four areas: institutional
          transformation, plus a specialist technical network, to convert
          mandate into measurable outcomes.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginTop: 16,
          }}
        >
          {pillarsShort.map((p) => (
            <div
              key={p.num}
              style={{
                background: p.primary ? "var(--brown)" : "var(--warm-gray)",
                padding: "12px 14px",
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "22pt",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {p.num}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "10pt",
                  color: p.primary ? "white" : "var(--brown)",
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          style={{
            marginTop: 20,
            borderLeft: "3px solid var(--gold)",
            padding: "14px 18px",
            background: "var(--gold-wash)",
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
            "These people understand what we do."
          </div>
          <div
            className="body-sm"
            style={{ marginTop: 6 }}
          >
            That is the only conclusion this document should leave.
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 4 — SECTION DIVIDER 01
   ======================================================================== */
export const Divider: React.FC<{
  num: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  quote: string;
  image: string;
}> = ({ num, eyebrow, title, subtitle, quote, image }) => (
  <div className="slide">
    <CornerBrackets />
    {/* Left content */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "58%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px 70px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 16,
            height: 16,
            background: "var(--gold)",
            transform: "rotate(45deg)",
          }}
        />
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "10pt",
            color: "var(--gold)",
            letterSpacing: "2px",
          }}
        >
          {eyebrow}
        </span>
      </div>
      <div
        style={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
          fontSize: "72pt",
          color: "var(--gold)",
          opacity: 0.85,
          marginTop: 20,
          lineHeight: 1,
        }}
      >
        {num}
      </div>
      <h2
        className="section-title"
        style={{
          fontSize: "42pt",
          marginTop: 14,
          lineHeight: 1.05,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "26pt",
          color: "var(--brown)",
          marginTop: 8,
        }}
      >
        {subtitle}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
        <GoldRule width="40%" height={2} />
        <GoldRule width="25%" height={2} />
      </div>
      <div
        style={{
          fontFamily: "Playfair Display, serif",
          fontStyle: "italic",
          fontSize: "16pt",
          color: "var(--gold)",
          marginTop: 28,
          lineHeight: 1.4,
          maxWidth: "90%",
        }}
      >
        "{quote}"
      </div>
    </div>
    {/* Right photo */}
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "42%",
      }}
    >
      <Img
        src={`/images/${image}`}
        alt={title}
        overlay
        style={{ width: "100%", height: "100%" }}
        fallbackLabel={image}
      />
    </div>
  </div>
);

export const Divider01: React.FC = () => (
  <Divider
    num="01"
    eyebrow="SECTION 01"
    title="OUR UNDERSTANDING"
    subtitle="of RMAFC"
    quote="RMAFC occupies one of the most consequential positions in Nigeria's fiscal architecture."
    image="div01_institution.jpg"
  />
);
export const Divider02: React.FC = () => (
  <Divider
    num="02"
    eyebrow="SECTION 02"
    title="THE PROPOSED"
    subtitle="Collaboration — Four Pillars"
    quote="We don't produce reports that sit on shelves. Every engagement is designed to produce institutional change that persists."
    image="div02_strategy.jpg"
  />
);
export const Divider03: React.FC = () => (
  <Divider
    num="03"
    eyebrow="SECTION 03"
    title="WHAT RMAFC"
    subtitle="Could Commission — Five Engagements"
    quote="You don't have to know exactly what you want from us today. These are the conversations we propose to have."
    image="div03_engagement.jpg"
  />
);
export const Divider04: React.FC = () => (
  <Divider
    num="04"
    eyebrow="SECTION 04"
    title="HOW WE WORK"
    subtitle="Delivery Methodology"
    quote="Strategy is only as valuable as the institution's ability to implement it."
    image="div04_analysis.jpg"
  />
);
export const Divider05: React.FC = () => (
  <Divider
    num="05"
    eyebrow="SECTION 05"
    title="WHY GMPC"
    subtitle="Strategy · Transformation · Capability"
    quote="Institutions, not just policies, determine outcomes. We work to close that gap."
    image="div05_gmpc.jpg"
  />
);

/* ========================================================================
   PAGE 5 — MANDATE AS INTERCONNECTED SYSTEM
   ======================================================================== */
const mandateNodes = [
  {
    title: "Revenue Mobilisation",
    desc: "Identify, protect and grow Nigeria's consolidated revenue base.",
  },
  {
    title: "Revenue Monitoring & Verification",
    desc: "Independently validate Federation Account inflows.",
  },
  {
    title: "Fiscal Efficiency",
    desc: "Convert analysis into actionable recommendations for government.",
  },
  {
    title: "Revenue Allocation",
    desc: "Review and recommend formula revisions across the federation.",
  },
  {
    title: "Institutional Capability",
    desc:
      "The foundation that determines whether all four functions above succeed.",
    highlight: true,
  },
];

export const MandateSystem: React.FC = () => (
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
        eyebrow="01 · Our Understanding of RMAFC"
        title="RMAFC's Mandate as an Interconnected System"
        subtitle="Five functions. Not a hierarchy, but a system. A weakness in any one limits all the others."
      />

      <div style={{ display: "flex", gap: 32, flex: 1 }}>
        {/* LEFT — nodes */}
        <div
          style={{
            flex: "0 0 44%",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {mandateNodes.map((n, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  display: "flex",
                  background: n.highlight
                    ? "var(--gold-wash)"
                    : "var(--warm-gray)",
                  border: n.highlight
                    ? "1px solid var(--gold)"
                    : "1px solid transparent",
                  minHeight: 54,
                }}
              >
                <div
                  style={{
                    width: 4,
                    background: n.highlight
                      ? "var(--brown)"
                      : "var(--gold)",
                  }}
                />
                <div
                  style={{
                    padding: "10px 14px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "11pt",
                      color: "var(--brown)",
                      marginBottom: 3,
                    }}
                  >
                    {n.title}
                  </div>
                  <div
                    className="body-sm"
                    style={{ fontSize: "9pt" }}
                  >
                    {n.desc}
                  </div>
                </div>
              </div>
              {i < mandateNodes.length - 1 && (
                <div
                  style={{
                    width: 4,
                    height: 8,
                    background: "var(--gold)",
                    opacity: 0.4,
                    marginLeft: 28,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* RIGHT — text + brown panel */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <p
            className="body-text"
            style={{ fontSize: "12pt", lineHeight: 1.55 }}
          >
            These five functions are interdependent. A weakness in any one of
            them limits the effectiveness of all the others. They are not a
            hierarchy, but a system. And systems require not just policy
            expertise, but institutional infrastructure to sustain them.
          </p>

          <div
            style={{
              background: "var(--brown)",
              padding: "14px 18px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "11pt",
                color: "var(--gold)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              These functions increasingly require
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px 24px",
                flex: 1,
              }}
            >
              {[
                "Better and more timely data",
                "Stronger analytical capabilities",
                "Effective institutional processes",
                "Capable, well-developed leadership",
                "Cross-agency coordination",
                "Implementation discipline",
              ].map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                    color: "white",
                    opacity: 0.88,
                    fontSize: "9.5pt",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      background: "var(--gold)",
                      borderRadius: "50%",
                      marginTop: 6,
                      flexShrink: 0,
                    }}
                  />
                  {x}
                </div>
              ))}
            </div>
          </div>

          <div
            className="body-sm"
            style={{ fontStyle: "italic" }}
          >
            GMPC's proposed collaboration is structured around precisely these
            requirements.
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ========================================================================
   PAGE 6 — FIVE AREAS OF INCREASING COMPLEXITY
   ======================================================================== */
const challengeCards = [
  {
    n: "01",
    title: "Growing Complexity of Revenue Streams",
    body:
      "Oil, gas, customs, CIT, VAT, minerals, investments; each with its own architecture and leakage points.",
    impl: "Requires infrastructure beyond traditional reporting.",
  },
  {
    n: "02",
    title: "From Reporting to Intelligence",
    body:
      "Receiving data is not the same as interrogating and interpreting it. RMAFC must be an active intelligence centre.",
    impl: "Not a reporting function, but an analytical one.",
  },
  {
    n: "03",
    title: "Fiscal Efficiency into Outcomes",
    body:
      "Analysis leads to recommendation, which leads to implementation. Needs process and accountability.",
    impl: "As institutional as it is technical.",
  },
  {
    n: "04",
    title: "Coordinating Across Institutions",
    body:
      "Work cuts across FIRS, NNPC, NCS, CBN, states and ministries.",
    impl: "Needs frameworks and protocols, not just relationships.",
  },
  {
    n: "05",
    title: "Building & Sustaining Capability",
    body:
      "Analysts, economists, data specialists, strategists, and their leaders.",
    impl: "A persistent challenge, not a one-off course.",
    brown: true,
  },
];

export const FiveComplexity: React.FC = () => (
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
        eyebrow="01 · Our Understanding of RMAFC"
        title="Five Areas of Increasing Complexity"
        subtitle="Not institutional failure, but the rising sophistication of the fiscal environment."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 12,
          flex: 1,
        }}
      >
        {challengeCards.map((c) => (
          <div
            key={c.n}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "var(--warm-gray-light)",
              border: "1px solid var(--border-subtle)",
              borderTop: `3px solid ${c.brown ? "var(--brown)" : "var(--gold)"}`,
              padding: "14px 14px 16px 14px",
            }}
          >
            <div
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "18pt",
                color: c.brown ? "var(--brown)" : "var(--gold)",
                lineHeight: 1,
              }}
            >
              {c.n}
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "11pt",
                color: "var(--brown)",
                marginTop: 10,
                marginBottom: 8,
                lineHeight: 1.25,
              }}
            >
              {c.title}
            </div>
            <div
              className="body-sm"
              style={{ fontSize: "9pt", lineHeight: 1.35, flex: 1 }}
            >
              {c.body}
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontStyle: "italic",
                fontSize: "8.5pt",
                color: "var(--ink-light)",
                marginTop: 10,
                paddingTop: 10,
                borderTop: "1px solid var(--border-soft)",
                lineHeight: 1.35,
              }}
            >
              {c.impl}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
