# Land Kings Website — Project Instructions

## Project

Single-page marketing website for Land Kings, a land investing company operating in Texas and Louisiana. The site serves three distinct audiences (land sellers, birddog/broker deal sources, land investors) and drives contact form submissions from each.

**Core Value:** A professional, trust-building presence that converts landowners, deal sources, and investors into qualified contacts.

**Stack:** Static HTML/CSS/JS only — no framework needed for a single page. Formspree for form handling. Cloudflare Pages for hosting. All forms route to offers@landkings.biz.

## Key Decisions

- Single-page anchor navigation (no routing, no SPA)
- Three separate contact forms (seller, birddog, investor — each tailored)
- Large acreage + development specialization (differentiates from commodity buyers)
- Texas + Louisiana geographic focus
- GitHub repo to be created under offers@landkings.biz account

## Constraints

- Static HTML/CSS/JS only — no backend, no framework
- Space Grotesk + Inter via Google Fonts (Inter for all body copy)
- Brand colors: Royal Gold `#C19A50`, Regal Black `#1A1A1A`, Deep Forest Green `#305032`, Rich Earth Green `#3D6C3A`, Metallic Shadow `#6B4C20`
- Use provided logo assets (transparent PNGs in source folder)
- Forms: Formspree → offers@landkings.biz
- Response time commitment: 48 hours (on all forms)
- Birddog commission: 10% of gross sale price, paid at closing

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-plan-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.

## Architecture

Single-page marketing site with 8 sections + footer:
1. Hero (with trust signals above the fold) — "Claim Your Crown. Build a Land Legacy."
2. About — "Built by Operators, Not Theorists"
3. What We Buy (large acreage, subdivisions, development deals — TX Triangle + Lubbock County)
4. How It Works (4-step process: Submit → Review → Two Offers → Close)
5. For Sellers (dual-offer method, cash + seller-finance)
6. For Birddogs/Brokers ("Bring Us the Hairy Ones", 10% commission, fast ICs)
7. For Investors ("How We De-Risk Dirt", milestone funding, quarterly reporting)
8. FAQ (speed, liens/taxes, landlocked, out-of-state, guarantees)
9. Footer

Sticky header with anchor navigation. Mobile hamburger menu. Smooth scroll.

## Out of Scope

- User accounts / login
- Backend / database
- Property listings / MLS
- Blog / content marketing
- E-commerce / cart
- Callback feature

## Skills Available

| Skill | Description | Path |
|-------|-------------|------|
| owasp-security | Use when reviewing code for security vulnerabilities | `.claude/skills/owasp-security/SKILL.md` |
| ui-ux-pro-max | UI/UX design intelligence | `.claude/skills/ui-ux-pro-max/SKILL.md` |

---
*Generated: 2026-04-15*