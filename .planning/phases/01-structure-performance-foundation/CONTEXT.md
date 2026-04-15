# Phase 1: Structure & Performance Foundation - Context

**Gathered:** 2026-04-15
**Status:** Ready for planning
**Source:** Direct from user + reviewed source materials

## Phase Boundary

Build the page skeleton with responsive CSS, sticky anchor navigation, and sub-2-second load performance. This is the foundation for all subsequent phases.

## Implementation Decisions

### Brand & Visual
- **Font:** Inter (Google Fonts) — all body copy
- **Primary font:** Space Grotesk — headings
- **Color palette:**
  - Royal Gold: `#C19A50` (accents, borders, buttons, crown edges)
  - Regal Black: `#1A1A1A` (headings, main crown body, background contrast)
  - Deep Forest Green: `#305032` (CTAs, highlights, leaf shapes)
  - Rich Earth Green: `#3D6C3A` (secondary accents, buttons)
  - Metallic Shadow: `#6B4C20` (outlines, button borders, subtle accents)

### Site Structure (7 sections + footer)
1. **Hero** — "Claim Your Crown. Build a Land Legacy."
2. **About** — "Built by Operators, Not Theorists"
3. **What We Buy** — Large acreage, subdivisions, development deals
4. **How It Works** — 4-step process (Submit → Review → Two Offers → Close)
5. **For Sellers** — Dual-offer method
6. **For Birddogs/Brokers** — "Bring Us the Hairy Ones", 10% commission
7. **For Investors** — "How We De-Risk Dirt"
8. **Footer** — Contact, disclaimers

### Technical
- Static HTML/CSS/JS — no framework
- Formspree for form handling → offers@landkings.biz
- Cloudflare Pages for hosting
- Single CSS file (mobile-first)
- Google Fonts via preconnect + font-display: swap
- WebP logo images
- Lazy loading for images
- Target: Lighthouse 90+ mobile, sub-2s load

### Navigation
- Sticky header with anchor links
- Mobile hamburger menu
- Smooth scroll on nav click

## Canonical References

**Downstream agents MUST read these before planning:**
- `.planning/PROJECT.md` — Full project context
- `.planning/STATE.md` — Current state and decisions
- `.planning/REQUIREMENTS.md` — All requirements (STR-01 through STR-04 in scope)
- `.planning/research/STACK.md` — Technology recommendations
- `.planning/research/ARCHITECTURE.md` — Page structure guidance

---

*Phase: 01-structure-performance-foundation*
*Context gathered: 2026-04-15*