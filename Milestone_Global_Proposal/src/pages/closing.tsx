import { ChromeBar, Corners, GmpcLogo } from "../components/Shared";

/* ============================================================
   PAGE 22 — ABOUT GMPC + WHY PARTNER WITH US
   ============================================================ */
export function PageAboutGmpc() {
  const reasons = [
    {
      n: "01",
      t: "Institution-Building Understanding",
      d: "We understand what it takes to build an organisation, not just run one — structure, process and leadership from first principles.",
    },
    {
      n: "02",
      t: "Demonstrated Diagnostic Capability",
      d: "Our work with NASIDA shows a structured, rigorous approach to organisational assessment and transformation planning.",
    },
    {
      n: "03",
      t: "Leadership Development Track Record",
      d: "FUDMA's HODs, faculty and non-academic heads: senior, experienced people developed to lead more effectively — not generic workshops.",
    },
    {
      n: "04",
      t: "Financial-Sector Delivery Experience",
      d: "Our debt recovery engagement with Bank of Agriculture demonstrated the execution discipline required inside a financial institution.",
    },
    {
      n: "05",
      t: "SOP & Institutionalisation Capability",
      d: "Mangal Industries shows our ability to move from training into embedded, repeatable operating standards.",
      highlight: true,
    },
    {
      n: "06",
      t: "Implementation, Not Just Reports",
      d: "Every engagement is designed to produce change that persists — not a document that gets filed and forgotten.",
      highlight: true,
    },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          05 · WHY GMPC
        </div>
        <h1
          className="font-display"
          style={{ fontSize: 30, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 20 }}
        >
          About GMPC &amp; Why Partner With Us
        </h1>

        <div style={{ display: "flex", gap: 28, height: "calc(100% - 90px)" }}>
          {/* LEFT 38% */}
          <div style={{ width: "38%", display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontSize: "11pt", color: "var(--ink)", lineHeight: 1.55, margin: 0 }}>
              Goldenmuv Premium Consulting Limited (GMPC) is a Nigerian management consulting firm
              delivering strategy, institutional transformation, organisational development,
              capability building and financial advisory to public and private sector clients.
            </p>

            <div style={{ background: "var(--brown)", color: "#fff", padding: "18px 20px", flex: 1 }}>
              <div className="font-display" style={{ fontSize: "15pt", fontStyle: "italic", lineHeight: 1.4 }}>
                &ldquo;Institutions, not just policies, determine outcomes. The quality of an
                institution&rsquo;s structure, processes, leadership and capabilities is the primary
                variable between a mandate and its delivery. We work to close that gap.&rdquo;
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[
                { n: "50+", t: "Clients served" },
                { n: "4", t: "Proven practice areas" },
                { n: "7+", t: "Specialist disciplines" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "2px solid var(--gold)",
                    padding: "10px 8px 0",
                  }}
                >
                  <div className="font-display" style={{ fontSize: 26, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "var(--ink-light)", marginTop: 4 }}>
                    {s.t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT 62% — 6 reasons */}
          <div style={{ width: "62%", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr 1fr", gap: 12 }}>
            {reasons.map((r) => (
              <div
                key={r.n}
                style={{
                  borderTop: r.highlight ? "3px solid var(--gold)" : "1px solid var(--border-subtle)",
                  border: "1px solid var(--border-subtle)",
                  borderTopWidth: r.highlight ? 3 : 1,
                  borderTopColor: r.highlight ? "var(--gold)" : "var(--border-subtle)",
                  padding: "12px 14px",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span className="font-display" style={{ color: "var(--gold)", fontWeight: 700, fontSize: "14pt" }}>
                    {r.n}
                  </span>
                  <span style={{ fontSize: "11pt", fontWeight: 700, color: "var(--brown)", lineHeight: 1.2 }}>
                    {r.t}
                  </span>
                </div>
                <div style={{ fontSize: "9.5pt", color: "var(--ink-light)", lineHeight: 1.45 }}>
                  {r.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 23 — SELECTED RELEVANT EXPERIENCE
   ============================================================ */
export function PageExperience() {
  const creds = [
    {
      client: "NASIDA",
      tag: "ORGANISATIONAL DIAGNOSTIC",
      d: "Full organisational diagnostic assessing structure, systems, management practices and execution capacity, delivering a prioritised improvement agenda.",
      path: "Supports: Pathway I",
    },
    {
      client: "BANK OF AGRICULTURE",
      tag: "DEBT RECOVERY",
      d: "Strengthened recovery strategy and instilled a more disciplined, structured process for pursuing outstanding portfolios.",
      path: "Supports: Pathway IV",
    },
    {
      client: "FUDMA",
      tag: "LEADERSHIP DEVELOPMENT",
      d: "Delivered a leadership programme for Heads of Department, Heads of Faculty and Non-Academic Heads, covering leadership fundamentals, self-leadership and time management.",
      path: "Supports: Pathway III",
    },
    {
      client: "MANGAL INDUSTRIES",
      tag: "SOP & TRAINING",
      d: "Developed SOPs and delivered process-execution training for mid-level staff, alongside a separate leadership programme for management.",
      path: "Supports: Pathways II & III",
      highlight: true,
    },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          05 · WHY GMPC
        </div>
        <h1 className="font-display" style={{ fontSize: 32, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 6 }}>
          Selected Relevant Experience
        </h1>
        <div className="font-display" style={{ fontSize: "10.5pt", fontStyle: "italic", color: "var(--ink-light)", marginBottom: 22 }}>
          Credibility from demonstrated work — each engagement maps to a proposed pathway.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, height: "calc(100% - 100px)" }}>
          {creds.map((c) => (
            <div
              key={c.client}
              style={{
                border: "1px solid var(--border-subtle)",
                borderTop: c.highlight ? "3px solid var(--gold)" : "3px solid var(--brown)",
                display: "flex",
                flexDirection: "column",
                background: c.highlight ? "var(--gold-wash)" : "#fff",
              }}
            >
              <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="font-display" style={{ fontSize: "13pt", fontWeight: 700, color: "var(--brown)", marginBottom: 4 }}>
                  {c.client}
                </div>
                <div style={{ fontSize: "8.5pt", fontWeight: 700, letterSpacing: 1.5, color: "var(--gold)" }}>
                  {c.tag}
                </div>
              </div>
              <div style={{ padding: "14px 18px", fontSize: "10pt", color: "var(--ink)", lineHeight: 1.5, flex: 1 }}>
                {c.d}
              </div>
              <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "10px 18px", background: "var(--gold-wash)", fontSize: "9pt", fontStyle: "italic", color: "var(--brown)", fontWeight: 600 }}>
                {c.path}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   PAGE 26 — TRUSTED BY LEADING ORGANISATIONS
   ======================================================================== */
const logoFiles = [
  "Picture1.png",
  "Picture2.png",
  "Picture3.jpg",
  "Picture4.png",
  "Picture5.png",
  "Picture6.png",
  "Picture7.png",
  "Picture8.png",
  "Picture9.png",
  "Picture10.png",
  "Picture11.png",
  "Picture12.png",
  "Picture13.png",
  "Picture14.png",
  "Picture15.jpg",
  "Picture16.png",
  "Picture17.png",
  "Picture18.png",
  "Picture19.png",
  "Picture20.png",
  "Picture21.png",
  "Picture22.jpg",
  "Picture23.jpg",
  "Picture24.jpg",
  "Picture25.png",
  "Picture26.png",
  "Picture27.png",
  "Picture28.jpg",
  "Picture29.png",
];

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

/* ============================================================
   PAGE 25 — PROPOSED NEXT STEP
   ============================================================ */
export function PageNextStep() {
  const paths = [
    { c: "Not sure where the biggest gaps are?", a: "→ Organisational Diagnostic — establishes the shared evidence base for everything that follows" },
    { c: "Your issue is people capability?", a: "→ Leadership & Management Development" },
    { c: "You need your processes documented?", a: "→ Process & SOP Development" },
    { c: "Your managers need to perform better?", a: "→ Leadership + Performance Management" },
    { c: "You already know your problem?", a: "→ Targeted Advisory Support", highlight: true },
  ];
  return (
    <div className="slide">
      <ChromeBar />
      <div className="gold-diag" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div className="eyebrow-sm" style={{ marginBottom: 8 }}>
          PROPOSED NEXT STEP
        </div>
        <h1 className="font-display" style={{ fontSize: 30, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 20 }}>
          Where Would Milestone Like to Start?
        </h1>

        <div style={{ display: "flex", gap: 28, height: "calc(100% - 90px)" }}>
          {/* LEFT 60% */}
          <div style={{ width: "60%", display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontSize: "11.5pt", color: "var(--ink)", lineHeight: 1.55, margin: 0 }}>
              GMPC proposes an initial scoping conversation with Milestone to identify and prioritise the areas where support can generate the greatest institutional impact.
            </p>
            <p className="font-display" style={{ fontSize: "10.5pt", fontStyle: "italic", color: "var(--ink-light)", margin: 0, marginBottom: 8 }}>
              You do not need to have decided on the full scope. Any of the paths below is a credible starting point.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {paths.map((p, i) => (
                <div
                  key={i}
                  style={{
                    borderLeft: "3px solid var(--gold)",
                    background: p.highlight ? "var(--gold-wash)" : "var(--warm-gray-light)",
                    border: p.highlight ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
                    borderLeftWidth: 3,
                    borderLeftColor: "var(--gold)",
                    padding: "10px 14px",
                    display: "grid",
                    gridTemplateColumns: "2fr 3fr",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "10.5pt", fontWeight: 600, color: "var(--brown)" }}>
                    {p.c}
                  </div>
                  <div style={{ fontSize: "10pt", color: "var(--ink)", lineHeight: 1.45 }}>
                    {p.a}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT 40% */}
          <div style={{ width: "40%", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "var(--brown)", color: "#fff", padding: "22px 22px", flex: 1 }}>
              <div style={{ color: "var(--gold)", fontSize: "10pt", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>
                GMPC Proposes
              </div>
              <div className="font-display" style={{ fontSize: "16pt", fontStyle: "italic", lineHeight: 1.35 }}>
                An initial scoping conversation with Milestone — to confirm priorities, agree the right starting point, and work through scope and commercial terms together.
              </div>
            </div>

            <div style={{ borderLeft: "3px solid var(--gold)", padding: "14px 18px", background: "var(--warm-gray-light)" }}>
              <div className="font-display" style={{ fontSize: "16pt", fontStyle: "italic", color: "var(--brown)", lineHeight: 1.3, marginBottom: 6 }}>
                All paths begin with a conversation.
              </div>
              <div style={{ fontSize: "10pt", color: "var(--ink-light)" }}>
                We are ready to begin at Milestone&rsquo;s convenience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 26 — CONTACT
   ============================================================ */
export function PageContact() {
  return (
    <div className="slide">
      <ChromeBar />
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, bottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <span className="geo-square-lg" />
        </div>
        <h1 className="font-display" style={{ fontSize: 32, color: "var(--brown)", fontWeight: 700, margin: 0, marginBottom: 28 }}>
          Let&rsquo;s Connect
        </h1>

        <div style={{ display: "flex", gap: 40, height: "calc(100% - 110px)" }}>
          {/* LEFT */}
          <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ fontSize: "14pt", fontWeight: 700, color: "var(--brown)", marginBottom: 8 }}>
                Office Address
              </div>
              <div style={{ fontSize: "12pt", fontWeight: 600, color: "var(--ink)" }}>Abuja (Head Office):</div>
              <div style={{ fontSize: "11pt", color: "var(--ink-light)", lineHeight: 1.5 }}>
                Suite 301B DBM Plaza, Aminu Kano Crescent, Wuse II, Abuja, Nigeria
              </div>
            </div>

            <div style={{ height: 0.5, background: "var(--border-soft)" }} />

            <div style={{ fontSize: "10.5pt", color: "var(--ink)", lineHeight: 1.8 }}>
              <div>📞 +234 906 014 1044 · +234 703 060 7589</div>
              <div>✉️ info@goldenmuv.com · goldenmuvgroup@gmail.com</div>
              <div>🌐 www.goldenmuv.com</div>
            </div>

            <div
              className="font-display"
              style={{
                fontSize: "16pt",
                fontStyle: "italic",
                color: "var(--brown)",
                lineHeight: 1.35,
                borderLeft: "3px solid var(--gold)",
                paddingLeft: 16,
                marginTop: "auto",
              }}
            >
              &ldquo;We look forward to a conversation with Milestone Global Bank Limited.&rdquo;
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div
            style={{
              width: "50%",
              border: "1px solid var(--border-subtle)",
              padding: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/contact_office.jpg"
              alt="GMPC Office"
              style={{ maxHeight: 280, width: "100%", objectFit: "cover" }}
              onError={(e) => {
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="280" viewBox="0 0 500 280">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stop-color="#a68b5e"/>
                      <stop offset="1" stop-color="#6b5330"/>
                    </linearGradient>
                  </defs>
                  <rect width="500" height="280" fill="url(#g)"/>
                  <text x="250" y="145" font-family="Playfair Display, serif" font-size="22" fill="#FBF7EF" text-anchor="middle" font-style="italic">GMPC Office</text>
                  <text x="250" y="170" font-family="Inter, sans-serif" font-size="11" fill="#E8D9A0" text-anchor="middle">contact_office.jpg</text>
                </svg>`;
                (e.currentTarget as HTMLImageElement).src =
                  "data:image/svg+xml;utf8," + encodeURIComponent(svg);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE 27 — BACK COVER
   ============================================================ */
export function PageBackCover() {
  return (
    <div className="slide" style={{ background: "var(--brown)" }}>
      <Corners white />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          padding: "0 18%",
        }}
      >
        <div style={{ filter: "brightness(0) invert(1)", marginBottom: 32 }}>
          <GmpcLogo height={72} variant="white" />
        </div>

        <div className="font-display" style={{ fontSize: 30, fontStyle: "italic", fontWeight: 500, lineHeight: 1.25, marginBottom: 26 }}>
          Bridging the Gap Between Strategy and Execution
        </div>

        <div style={{ width: "35%", height: 2, background: "var(--gold)", marginBottom: 26 }} />

        <div style={{ fontSize: "20pt", fontWeight: 700, letterSpacing: 0.5, marginBottom: 22 }}>
          Goldenmuv Premium Consulting Limited
        </div>

        <div style={{ fontSize: "12pt", opacity: 0.75, lineHeight: 1.7 }}>
          +234 906 014 1044 · +234 703 060 7589<br />
          info@goldenmuv.com · goldenmuvgroup@gmail.com<br />
          www.goldenmuv.com
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: 56,
            right: 56,
            fontSize: "9.5pt",
            opacity: 0.45,
            lineHeight: 1.5,
          }}
        >
          This document is private and confidential. It has been prepared exclusively for Milestone
          Global Bank Limited and is intended solely for the institution&rsquo;s consideration.
        </div>
      </div>
    </div>
  );
}
