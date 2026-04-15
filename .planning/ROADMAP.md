# Land Kings — Roadmap

**Project:** Land Kings Single-Page Marketing Website
**Last updated:** 2026-04-15

## Roadmap Summary

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 1 | Structure & Performance Foundation | Build the page skeleton and optimize for speed | STR-01, STR-02, STR-03, STR-04 | 4 criteria |
| 2 | Content & Messaging | Write all copy with trust-building specifics | CON-01, CON-02, CON-03, CON-04 | 4 criteria |
| 3 | Contact Forms | Build three tailored forms with Formspree | FRM-01, FRM-02, FRM-03, FRM-04 | 4 criteria |
| 4 | QA & Launch | Validate performance and form end-to-end | QA-01, QA-02, QA-03, QA-04 | 4 criteria |

**4 phases** | **16 requirements** | All v1 requirements covered ✓

---

## Phase 1: Structure & Performance Foundation

**Goal:** Build the page skeleton with responsive CSS, sticky anchor navigation, and sub-2-second load performance.

**Requirements:** STR-01, STR-02, STR-03, STR-04

**Success criteria:**
1. Single-page HTML skeleton renders all 7 sections (Hero, About, What We Buy, How It Works, For Sellers, For Birddogs, For Investors) with semantic HTML5 elements
2. Sticky header with anchor navigation to each section; hamburger menu on mobile; smooth scroll on nav click
3. Mobile-first responsive CSS renders correctly at 375px, 768px, and 1024px breakpoints
4. Lighthouse mobile performance score 90+ (WebP logo images, preconnected Google Fonts with `font-display: swap`, single CSS file, lazy loading, Cloudflare Pages edge deployment)

---

## Phase 2: Content & Messaging

**Goal:** Write all section copy with specific trust signals, defined criteria, and audience-specific CTAs.

**Requirements:** CON-01, CON-02, CON-03, CON-04

**Success criteria:**
1. All 7 sections have complete copy — no placeholder text, no lorem ipsum
2. "What We Buy" section lists specific acreage ranges (e.g., 20+ acres, 100+ acres for development) and names TX/Louisiana parishes/counties where Land Kings operates
3. "How It Works" displays a 4-step process with clear actions: Submit → Review → Offer → Close
4. Trust signals placed above the fold in Hero (years in business, transactions completed, or local presence language) and repeated in each audience section

---

## Phase 3: Contact Forms

**Goal:** Build three audience-specific forms integrated with Formspree, routed to offers@landkings.biz.

**Requirements:** FRM-01, FRM-02, FRM-03, FRM-04

**Success criteria:**
1. **Seller Form** fields: Full Name, Email, Phone, Property State (TX/LA), County, Property Address, Acreage, Estimated Value, Free & Clear (yes/no), Additional Notes — POSTs to Formspree, HTML5 validation
2. **Birddog Form** uses two-tier approach: Tier 1 (Name, Email, Phone, State, County, Acreage, "I have a deal to submit") → Tier 2 (APN, access type, utility type, asking price, referral fee %) — Tier 1 visible by default, Tier 2 revealed on intent
3. **Investor Form** fields: Full Name, Email, Investment Criteria (textarea — geography preference, acreage range, timeline), Preferred Contact Method — POSTs to Formspree
4. All forms show privacy assurance text, privacy policy link, and expected response time on confirmation screen

---

## Phase 4: QA & Launch

**Goal:** Validate everything works end-to-end before driving traffic.

**Requirements:** QA-01, QA-02, QA-03, QA-04

**Success criteria:**
1. PageSpeed Insights mobile score 90+; LCP < 2.5s, CLS < 0.1, INP < 200ms
2. All three Formspree forms tested end-to-end — confirmation email received at offers@landkings.biz for each form type
3. Real mobile device testing at 375px width — navigation works, all forms render and submit correctly, no horizontal overflow
4. Analytics installed (Cloudflare Analytics or simple alternative) — basic traffic overview available within 24 hours of launch

---

## Requirement Traceability

| REQ-ID | Requirement | Phase | Status |
|--------|-------------|-------|--------|
| STR-01 | Semantic HTML5 single-page skeleton with all 7 sections | 1 | — |
| STR-02 | Sticky header + anchor navigation + mobile hamburger | 1 | — |
| STR-03 | Mobile-first responsive CSS (375/768/1024px breakpoints) | 1 | — |
| STR-04 | Lighthouse 90+ mobile, sub-2s load, WebP assets, edge CDN | 1 | — |
| CON-01 | Complete copy for all 7 sections, no placeholders | 2 | — |
| CON-02 | "What We Buy" with specific acreage ranges and TX/LA counties | 2 | — |
| CON-03 | 4-step "How It Works" process visualization | 2 | — |
| CON-04 | Trust signals above the fold and in each audience section | 2 | — |
| FRM-01 | Seller lead form → Formspree → offers@landkings.biz | 3 | — |
| FRM-02 | Birddog two-tier deal submission form | 3 | — |
| FRM-03 | Investor inquiry form → Formspree → offers@landkings.biz | 3 | — |
| FRM-04 | Privacy assurance + expected response time on all forms | 3 | — |
| QA-01 | PageSpeed 90+ mobile, Core Web Vitals green | 4 | — |
| QA-02 | All 3 form types tested end-to-end | 4 | — |
| QA-03 | Real-device mobile testing at 375px | 4 | — |
| QA-04 | Analytics installed and functional | 4 | — |

---

## Out of Scope

- User accounts / login
- Backend / database
- Property listings / MLS search
- Blog / content marketing sections
- E-commerce / cart functionality
- Callback request feature
- "What is my land worth?" estimator

---
*Last updated: 2026-04-15 after roadmap creation*