# GMPC × RMAFC Strategic Collaboration Proposal

A 29-page landscape A4 (297 × 210 mm) proposal deck for Goldenmuv Premium Consulting's strategic collaboration with Nigeria's Revenue Mobilisation, Allocation and Fiscal Commission.

Built with **React + Vite + Tailwind**, exports to **PDF** via the floating Download button.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your images (see below)

# 3. Run the dev server
npm run dev

# 4. Open http://localhost:5173
# 5. Click the floating "Download as PDF" button (top-right)
```

---

## 📁 Where To Place Your Images

Drop all image files into the folder:

```
public/images/
```

That folder doesn't exist yet — create it, then add the files below.

### Required image files

| # | Filename | Used on | Notes |
|---|----------|---------|-------|
| 1 | `div01_institution.jpg` | Page 4 — Section 01 divider (right panel) | Monochrome or warm-toned institutional photo |
| 2 | `div02_strategy.jpg` | Page 7 — Section 02 divider | Strategy / planning context |
| 3 | `div03_engagement.jpg` | Page 14 — Section 03 divider | Meeting / engagement context |
| 4 | `div04_analysis.jpg` | Page 19 — Section 04 divider | Analysis / process context |
| 5 | `div05_gmpc.jpg` | Page 22 — Section 05 divider | GMPC team / working context |
| 6 | `contact_office.jpg` | Page 28 — Contact page | GMPC office or team photo |
| 7 | `Picture1.png` | Page 26 — Trusted-by grid (client 1) | Logos work best as transparent PNGs |
| 8 | `Picture2.png` | Page 26 — Trusted-by grid (client 2) | |
| 9 | `Picture3.jpg` | Page 26 — Trusted-by grid (client 3) | |
| 10 | `Picture4.png` | Page 26 — Trusted-by grid | |
| 11 | `Picture5.png` | Page 26 — Trusted-by grid | |
| 12 | `Picture6.png` | Page 26 — Trusted-by grid | |
| 13 | `Picture7.png` | Page 26 — Trusted-by grid | |
| 14 | `Picture8.png` | Page 26 — Trusted-by grid | |
| 15 | `Picture9.png` | Page 26 — Trusted-by grid | |
| 16 | `Picture10.png` | Page 26 — Trusted-by grid | |
| 17 | `Picture11.png` | Page 26 — Trusted-by grid | |
| 18 | `Picture12.png` | Page 26 — Trusted-by grid | |
| 19 | `Picture13.png` | Page 26 — Trusted-by grid | |
| 20 | `Picture14.png` | Page 26 — Trusted-by grid | |
| 21 | `Picture15.jpg` | Page 26 — Trusted-by grid | |
| 22 | `Picture16.png` | Page 26 — Trusted-by grid | |
| 23 | `Picture17.png` | Page 26 — Trusted-by grid | |
| 24 | `Picture18.png` | Page 26 — Trusted-by grid | |
| 25 | `Picture19.png` | Page 26 — Trusted-by grid | |
| 26 | `Picture20.png` | Page 26 — Trusted-by grid | |
| 27 | `Picture21.png` | Page 26 — Trusted-by grid | |
| 28 | `Picture22.jpg` | Page 26 — Trusted-by grid | |
| 29 | `Picture23.jpg` | Page 26 — Trusted-by grid | |
| 30 | `Picture24.jpg` | Page 26 — Trusted-by grid | |
| 31 | `Picture25.png` | Page 26 — Trusted-by grid | |
| 32 | `Picture26.png` | Page 26 — Trusted-by grid | |
| 33 | `Picture27.png` | Page 26 — Trusted-by grid | |
| 34 | `Picture28.jpg` | Page 26 — Trusted-by grid | |
| 35 | `Picture29.png` | Page 26 — Trusted-by grid | |

> **Important:** File names are case-sensitive. Use the exact names above.

### Optional logo overrides (currently using wordmarks)

The cover (Page 1) and back cover (Page 29) currently use typographic wordmarks. If you want to swap in actual logos:

1. Place `rmafc_logo.png` and `goldenmuv_logo.png` in `public/images/`
2. Edit `src/components/ui.tsx` — swap the `RMAFCWordmark` and `GMPCWordmark` components for `<img>` tags pointing at `/images/rmafc_logo.png` and `/images/goldenmuv_logo.png`.

---

## 📐 Page Size

Every slide is exactly **297 × 210 mm** (landscape A4). The PDF is exported at the same dimensions — no scaling issues.

The @page CSS rule also sets print output to the same size, so **File → Print → Save as PDF** works as a fallback.

---

## 🎨 Design System

| Token | Hex | Role |
|-------|-----|------|
| `--brown` | `#8B6F47` | Primary — headings, dark panels, table headers |
| `--brown-deep` | `#6B5330` | Borders on dark elements |
| `--brown-light` | `#A68B5E` | Secondary accents |
| `--gold` | `#C5A55A` | Accent — eyebrows, rules, numerals |
| `--gold-bright` | `#D4B96A` | Highlight |
| `--gold-pale` | `#E8D9A0` | Soft accent |
| `--gold-wash` | `#FBF7EF` | Emphasis card fills |
| `--ink` | `#2B2B2B` | Body text |
| `--ink-light` | `#4A4A4A` | Body text secondary |
| `--warm-gray` | `#F5F3EF` | Neutral card fills |
| `--warm-gray-light` | `#FAF8F5` | Neutral card fills light |
| `--border-subtle` | `#E8E4DE` | Hairlines |
| `--border-soft` | `#DDD8D0` | Hairlines |
| `--white` | `#FFFFFF` | Canvas |

**Typography:** Playfair Display (headings) + Inter (body)

---

## 📄 PDF Generation

The floating **"Download as PDF"** button uses `html2pdf.js` (which internally uses `html2canvas` + `jsPDF`). It:

1. Rasterises each slide at 2× resolution for crisp text
2. Stitches the 29 pages into a single landscape A4 PDF
3. Saves as `GMPC-RMAFC-Strategic-Collaboration-Proposal.pdf`

**If generation is slow or the PDF looks soft**, use the **Print** button (or Ctrl/Cmd + P) and choose "Save as PDF" with **Landscape** orientation and **A4** paper — the print CSS is already configured.

---

## 📂 Project Structure

```
.
├── public/
│   └── images/          ← PUT YOUR IMAGES HERE
├── src/
│   ├── App.tsx          ← Main app + download button
│   ├── index.css        ← Design tokens, @page rules, utilities
│   ├── components/
│   │   └── ui.tsx       ← Shared components (ChromeBar, Img, etc.)
│   └── pages/
│       ├── pagesA.tsx   ← Cover, TOC, Exec, Section 1 (Pages 1-6)
│       ├── pagesB.tsx   ← Section 2 — Pillars (Pages 7-13)
│       ├── pagesC.tsx   ← Section 3 + 4 (Pages 14-21)
│       └── pagesD.tsx   ← Section 5 + Back Cover (Pages 22-29)
├── index.html
├── package.json
└── README.md
```

---

## ✅ Build for Production

```bash
npm run build
```

Output in `dist/` — deploy anywhere (Netlify, Vercel, static host).
