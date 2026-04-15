# Land Kings — Requirements

**Project:** Land Kings Single-Page Marketing Website
**Last updated:** 2026-04-15

---

## Validated

(None yet — ship to validate)

---

## Active

### Phase 1: Structure & Performance Foundation

- [ ] **STR-01**: Semantic HTML5 single-page skeleton with all 7 sections (Hero, About, What We Buy, How It Works, For Sellers, For Birddogs, For Investors)
- [ ] **STR-02**: Sticky header with anchor navigation to each section; hamburger menu on mobile; smooth scroll on nav click
- [ ] **STR-03**: Mobile-first responsive CSS renders correctly at 375px, 768px, and 1024px breakpoints
- [ ] **STR-04**: Lighthouse mobile performance score 90+; WebP logo images, preconnected Google Fonts with `font-display: swap`, single CSS file, lazy loading, Cloudflare Pages edge deployment

### Phase 2: Content & Messaging

- [ ] **CON-01**: Complete copy for all 7 sections — no placeholder text, no lorem ipsum
- [ ] **CON-02**: "What We Buy" section lists specific acreage ranges and names TX/Louisiana parishes/counties where Land Kings operates
- [ ] **CON-03**: "How It Works" displays a 4-step process: Submit → Review → Offer → Close
- [ ] **CON-04**: Trust signals placed above the fold in Hero (years in business, transactions, or local presence) and repeated in each audience section

### Phase 3: Contact Forms

- [ ] **FRM-01**: Seller lead form — fields: Full Name, Email, Phone, Property State (TX/LA), County, Property Address, Acreage, Estimated Value, Free & Clear (yes/no), Additional Notes — POSTs to Formspree → offers@landkings.biz
- [ ] **FRM-02**: Birddog two-tier deal submission form — Tier 1 visible by default (Name, Email, Phone, State, County, Acreage, "I have a deal"), Tier 2 revealed on intent (APN, access type, utility type, asking price, referral fee %)
- [ ] **FRM-03**: Investor inquiry form — fields: Full Name, Email, Investment Criteria (textarea — geography preference, acreage range, timeline), Preferred Contact Method — POSTs to Formspree → offers@landkings.biz
- [ ] **FRM-04**: All forms show privacy assurance text, privacy policy link, and expected response time on confirmation screen

### Phase 4: QA & Launch

- [ ] **QA-01**: PageSpeed Insights mobile score 90+; LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] **QA-02**: All three Formspree forms tested end-to-end — confirmation email received at offers@landkings.biz for each form type
- [ ] **QA-03**: Real mobile device testing at 375px width — navigation works, all forms render and submit correctly, no horizontal overflow
- [ ] **QA-04**: Analytics installed (Cloudflare Analytics or simple alternative) — basic traffic overview functional

---

## Out of Scope

- **User accounts / login** — Simple marketing site, no authenticated users
- **Backend / database** — Formspree handles form data, no server-side logic needed
- **Property listings / MLS search** — Creates wrong expectations; Land Kings buys, doesn't list
- **Blog / content marketing sections** — Not in initial scope; add later if SEO strategy develops
- **E-commerce / cart functionality** — N/A for lead generation site
- **Callback request feature** — Phone number in footer sufficient for v1
- **"What is my land worth?" estimator** — Needs valuation logic; defer to v2

---

## Traceability

| REQ-ID | Description | Phase |
|--------|-------------|-------|
| STR-01 | HTML5 skeleton | 1 |
| STR-02 | Sticky nav | 1 |
| STR-03 | Responsive CSS | 1 |
| STR-04 | Performance optimization | 1 |
| CON-01 | All section copy | 2 |
| CON-02 | What We Buy specifics | 2 |
| CON-03 | 4-step process | 2 |
| CON-04 | Trust signals | 2 |
| FRM-01 | Seller form | 3 |
| FRM-02 | Birddog two-tier form | 3 |
| FRM-03 | Investor form | 3 |
| FRM-04 | Form privacy/response | 3 |
| QA-01 | PageSpeed | 4 |
| QA-02 | Form testing | 4 |
| QA-03 | Mobile testing | 4 |
| QA-04 | Analytics | 4 |

---
*Last updated: 2026-04-15 after requirements definition*