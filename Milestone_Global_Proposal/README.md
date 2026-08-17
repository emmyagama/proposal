# GMPC Proposal — Milestone Global Bank Limited

A 27-page landscape A4 proposal deck (210 × 297 mm) built as a React web application.
Use the in-browser **"Download PDF"** button to export a print-ready PDF after you have
placed your image assets in the `public/images/` folder.

---

## 🖨️ Generating the PDF

1. **Place your images** in `public/images/` (see table below).
2. **Run the app locally:**
   ```bash
   npm install
   npm run dev
   ```
3. Open the URL shown in your terminal (usually `http://localhost:5173`).
4. Click **"All Pages"** so every page is visible.
5. Click the yellow **"Download PDF"** button (top-right).
6. Your browser's print dialog opens. Select **Save as PDF**.
   - Destination: **Save as PDF**
   - Layout: **Landscape**
   - Paper size: **A4**
   - Margins: **None**
   - Scale: **Default** (or 100%)
   - ✅ **Background graphics** must be turned **ON**
7. Save — you now have the final PDF.

> Alternatively you can use `npm run build` and open `dist/index.html` — the app works as a
> single-file static bundle.

---

## 🖼️ Image Placement

Create a `public/images/` folder (it may already exist) and drop your image files in it
with the exact filenames below. Every image path is optional — the app renders graceful
fallbacks when a file is missing, so you can preview the layout before sourcing imagery.

| Filename                   | Used on                          | Description                                                      |
|----------------------------|----------------------------------|------------------------------------------------------------------|
| `goldenmuv_logo.png`       | Cover, Chrome Bar, Back Cover    | GMPC logo (PNG with transparency preferred)                      |
| `milestone_logo.png`       | Cover (optional)                 | Milestone Global Bank logo. Layout adapts if absent              |
| `div01_bank.jpg`           | Page 4 (Section 01)              | Modern banking / financial institution environment               |
| `div02_collaboration.jpg`  | Page 8 (Section 02)              | Collaborative working / meeting context                          |
| `div03_engagement.jpg`     | Page 14 (Section 03)             | Meeting / engagement context                                     |
| `div04_methodology.jpg`    | Page 18 (Section 04)             | Analysis / process / working-session context                     |
| `div05_gmpc.jpg`           | Page 21 (Section 05)             | GMPC team or working context                                     |
| `contact_office.jpg`       | Page 26 (Contact)                | GMPC office or team photo                                        |
| `Picture1.png` … `Picture29.png` | Page 24 (Trusted By)       | Client logos (transparent PNG preferred, max 64px tall)          |

### Image specifications

- **Photographs**: monochrome or warm-toned, professional / institutional feel.
- **Aspect**: divider photos are displayed in a 42%-wide portrait strip — landscape photos
  work fine (they'll be cropped); portrait or square images crop best.
- **Format**: `.jpg`, `.jpeg`, or `.png`.
- **Recommended resolution**: at least 1600 × 1100 px for divider photos;
  logos at 2× the display size (e.g. 300px wide for a 150px display slot).

---

## 🎨 Design DNA (locked in)

- **Page size**: 210 × 297 mm landscape
- **Typography**: Playfair Display (headings), Inter (body)
- **Primary colour**: `#8B6F47` brown
- **Accent colour**: `#C5A55A` gold
- **Canvas**: `#FFFFFF` white

All tokens are defined in `src/index.css` as CSS variables.

---

## 📁 Project structure

```
.
├── index.html                 # Fonts + document title
├── public/
│   └── images/                # ← place your images here
├── src/
│   ├── App.tsx                # Main preview shell + download button
│   ├── index.css              # Design tokens, @page rules, print styles
│   ├── components/
│   │   └── Shared.tsx         # ChromeBar, Corners, GmpcLogo, SectionDivider
│   └── pages/
│       ├── opening.tsx        # Pages 1–3
│       ├── understanding.tsx  # Pages 4–8
│       ├── pathways.tsx       # Pages 9–13
│       ├── engagements.tsx    # Pages 14–21
│       └── closing.tsx        # Pages 22–27
└── README.md                  # This file
```

---

## ⌨️ Keyboard shortcuts (preview)

- `→` next page
- `←` previous page

---

## 🔒 Confidentiality

This document is private and confidential. Prepared exclusively for
**Milestone Global Bank Limited**.
