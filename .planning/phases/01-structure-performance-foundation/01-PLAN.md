---
phase: "01"
plan: "01"
type: "build"
wave: "1"
depends_on: ""
files_modified:
  - "index.html"
  - "styles.css"
  - "main.js"
autonomous: false
requirements:
  - "STR-01"
  - "STR-02"
  - "STR-03"
  - "STR-04"
---

# Phase 1 Plan: Structure & Performance Foundation

## Objective

Build the page skeleton with responsive CSS, sticky anchor navigation, and sub-2-second load performance. All 7 sections + footer with brand colors applied.

## Files to Create

- `index.html` — Full HTML skeleton, all sections
- `styles.css` — Mobile-first responsive CSS, brand colors
- `main.js` — Mobile nav toggle, smooth scroll

## Tasks

### 1. HTML Skeleton (STR-01)

**Action:**
- Create `index.html` with semantic HTML5 structure
- 7 sections + footer: Hero, About, What We Buy, How It Works, For Sellers, For Birddogs, For Investors
- Each section wrapped in `<section id="section-name">`
- Sticky header with `<header><nav>` anchor links
- Footer with company info placeholder
- Include meta viewport, Google Fonts preconnect links

**Verify:** Open in browser, all sections render

**Acceptance:** All 7 sections present with semantic HTML5 elements, no placeholder text yet

---

### 2. Brand CSS System (STR-03)

**Action:**
- Create `styles.css` with CSS custom properties for brand colors:
  - `--gold: #C19A50` (Royal Gold)
  - `--black: #1A1A1A` (Regal Black)
  - `--forest: #305032` (Deep Forest Green)
  - `--earth: #3D6C3A` (Rich Earth Green)
  - `--shadow: #6B4C20` (Metallic Shadow)
- Inter font for body, Space Grotesk for headings
- Mobile-first breakpoints: 375px base, 768px tablet, 1024px desktop
- Section spacing, typography scale, button styles

**Verify:** CSS loads, colors correct, fonts load

**Acceptance:** Mobile-first CSS at 375px correct; brand colors applied to buttons/accents

---

### 3. Sticky Navigation (STR-02)

**Action:**
- Header: fixed/sticky position, logo left, nav links right
- Desktop: horizontal nav links
- Mobile: hamburger icon, collapsible menu
- Nav links: anchor to each section (#hero, #about, etc.)
- Smooth scroll via CSS `scroll-behavior: smooth`

**Verify:** Nav sticky on scroll, hamburger works on mobile, smooth scroll works

**Acceptance:** Sticky header + hamburger menu functional, all anchor links work

---

### 4. Performance Optimization (STR-04)

**Action:**
- Optimize logo as WebP (or reference the PNG with proper sizing)
- Google Fonts: preconnect to fonts.googleapis.com, `font-display: swap`
- Lazy loading attribute on logo image
- Single CSS file, minimal JS (no frameworks)
- CSS: minimal, no Tailwind

**Verify:** Lighthouse mobile score 90+

**Acceptance:** Lighthouse mobile 90+, LCP < 2.5s

---

## Success Criteria

1. Single-page HTML skeleton renders all 7 sections with semantic HTML5 elements
2. Sticky header with anchor navigation; hamburger menu on mobile; smooth scroll on nav click
3. Mobile-first responsive CSS renders correctly at 375px, 768px, and 1024px breakpoints
4. Lighthouse mobile performance score 90+; WebP logo; preconnected fonts with `font-display: swap`; single CSS file; lazy loading

---

## Verification

1. Open `index.html` in browser — all 7 sections visible
2. Resize to 375px — hamburger menu appears, layout correct
3. Click nav links — smooth scroll to sections
4. Run Lighthouse — mobile score 90+
5. Check fonts — Inter + Space Grotesk load with no FOUT

---

## Notes

- No forms yet (Phase 3)
- No actual copy yet (Phase 2) — sections can have placeholder H2s
- Logo: use `landkings_logo_transparent.png` from source folder
- Forms use Formspree → offers@landkings.biz (configured later)