# Feature Landscape: Land Buying Website

**Domain:** Land investing / we-buy-land marketing sites
**Researched:** 2026-04-15
**Overall confidence:** MEDIUM-HIGH (direct site analysis, some inferences from broker sites)

## Executive Summary

Land buying websites fall into two categories: marketplaces (LandHub, LandWatch, AcreValue) with broad inventory and "we buy land" direct buyers (CashForLand, LandWatch buyers). Land Kings is a direct buyer with three distinct audiences, which is uncommon in the space -- most sites focus on sellers only or treat birddogs/investors as secondary. The three-form approach is a differentiator if forms are tailored well.

## Table Stakes

Features users expect. Missing = product feels incomplete or unprofessional.

### Seller Lead Capture Form

| Field | Why Expected | Complexity |
|-------|--------------|------------|
| Name (first + last) | Basic identification | Low |
| Email | Primary follow-up channel | Low |
| Phone | Urgent communication | Low |
| Property state | Routing/qualification | Low |
| County | Local market knowledge signal | Low |
| Acreage (or sq ft) | Core qualifying info | Low |
| APN/Parcel Number | Speeds up research | Medium |
| Property address | Physical location | Medium |
| Free-and-clear status | Financing/seller situation | Medium |
| Back taxes owed | Deal complexity signal | Medium |
| Lien/loan balance | Deal complexity signal | Medium |
| How long owned | Seller motivation signal | Low |
| How acquired (inheritance, purchase, gift) | Title clarity signal | Medium |
| Estimated value | Initial valuation attempt | Low |

**Trust signals required:** Privacy policy link, Terms of Service, CAPTCHA or equivalent bot protection, submission confirmation.

### Birddog / Broker Deal Submission Form

| Field | Why Expected | Complexity |
|-------|--------------|------------|
| Contact name | Basic identification | Low |
| Email | Referral payout contact | Low |
| Phone | Urgent communication | Low |
| Property state + county | Routing | Low |
| Acreage | Core deal info | Low |
| APN | Research speed | Medium |
| Access type (paved road, dirt, easement) | Deal quality | Medium |
| Utilities present (water, electric, septic) | Development potential | Medium |
| Current use / improvements | Value signal | Medium |
| Asking price or offer range | Deal economics | Low |
| Owner situation (motivated, estate, etc.) | Deal quality | Medium |
| Referral fee expectation | Business clarity | Low |

**Trust signals required:** Referral program terms link, payment process explanation, confidentiality assurance.

### Investor Inquiry Form

| Field | Why Expected | Complexity |
|-------|--------------|------------|
| Name | Basic identification | Low |
| Email | Follow-up | Low |
| Phone | Seriousness signal | Low |
| Investment criteria text area | Qualification | Low |
| Preferred geography (state/county) | Deal matching | Low |
| Acreage range interest | Deal matching | Low |
| Budget / investment range | Qualification | Medium |
| Investment timeline | Urgency matching | Medium |

**Trust signals required:** Privacy policy, no spam assurance, how deals are sourced/exclusive explanation.

---

## Differentiators

Features that set products apart. Not expected, but build trust and conversion.

### Seller-Side Differentiators

| Feature | Value Proposition | Complexity |
|---------|-------------------|------------|
| "What is my land worth?" quick estimator | Low-friction value indication, builds trust before form submission | Medium |
| "We buy land in [county]" geographic specificity | Local expertise signal, filters tire-kickers | Low |
| Cash offer timeline (e.g., "close in 7 days") | Speed certainty is a major differentiator | Low |
| No-obligation quote CTA | Reduces friction for price-sensitive sellers | Low |
| "What we buy / don't buy" clear criteria | Sets expectations, avoids wasted inquiries | Low |
| Testimonials with specificity (named sellers, location, timeline) | Social proof for trust | Medium |
| Step-by-step process visualization (3-4 steps) | Reduces uncertainty about what happens after submission | Low |
| FAQ section addressing common concerns | Pre-qualification, reduces form abandonment | Medium |

### Birddog / Broker Differentiators

| Feature | Value Proposition | Complexity |
|---------|-------------------|------------|
| Explicit referral fee structure (% or $X per acre) | Without this, birddogs won't submit | Medium |
| Submit deal button prominent on its own section | Birddogs are not browsing for deals, they have deals ready | Low |
| Real examples of closed referral payouts | Proof the program actually works | Medium |
| "How referrals work" explanation (submit -> review -> close -> pay) | Reduces uncertainty about the process | Low |
| Exclusive territory protection (if applicable) | Professional birddogs want territory protection | Medium |
| Rapid response commitment ("we'll respond within X hours") | Birddogs work on tight deadlines | Low |

### Investor-Side Differentiators

| Feature | Value Proposition | Complexity |
|---------|-------------------|------------|
| Clear acquisition criteria (min/max acreage, geography, price) | Investors can self-qualify immediately | Low |
| Off-market deal access explanation | Exclusive deals are investor motivation | Medium |
| "What happens after inquiry" process clarity | Reduces investor uncertainty | Low |
| Deal flow communication preferences (email digest, SMS, etc.) | Investors want to control deal flow | Low |
| Performance track record (acres bought,closes completed) | Credentialing | Medium |

### Cross-Cutting Differentiators

| Feature | Value Proposition | Complexity |
|---------|-------------------|------------|
| Multiple contact options (form + phone + callback request) | Different buyers have preferences | Low |
| reCAPTCHA or equivalent (not hCaptcha) | Professionalism signal | Low |
| Texas + Louisiana specificity throughout | Competitors generic "we buy land anywhere" - local is stronger | Low |
| Large acreage specialization (20+ acres, not 1-5 lots) | Clear positioning filters right sellers | Low |
| Development / subdivision capability | Sets apart from commodity land buyers | Low |

---

## Anti-Features

Features to explicitly NOT build.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Property listings / MLS search | Out of scope per PROJECT.md; creates expectation of browseable inventory | Instead: "What We Buy" criteria section with specificity |
| User accounts / login | Unnecessary complexity for a single-page lead site | Instead: Form submission with email follow-up |
| Blog / content marketing | Out of scope; requires ongoing maintenance | Instead: FAQ addressing top seller questions |
| Inquiry form with 20+ required fields | Kills conversion; every field is friction | Instead: Minimize to essential qualification fields; gather details in follow-up call |
| Generic "we buy any land" messaging | Fails to differentiate; sounds like every competitor | Instead: Emphasize large acreage, development deals, Texas + Louisiana expertise |
| Contact form with no privacy policy / Terms link | Creates distrust; legally recommended anyway | Instead: Link to privacy policy and terms in form footer |
| Autoresponder-only confirmation | Users want human response; autoresponders feel dismissive | Instead: Show confirmation + indicate response timeline |

---

## Feature Dependencies

```
Hero CTA (Get Offer) → Seller Form
                          ↓
                    Follow-up Call (offline)

For Deal Sources Section → Birddog Form → Referral Agreement (offline)
                                                       ↓
                                               Payout Process (offline)

For Investors Section → Investor Form → Deal Flow (offline)
```

**Note:** All three forms feed offline processes. The website is a qualification and routing mechanism, not a transaction platform.

---

## MVP Recommendation

**Prioritize for launch:**

1. **Seller form** (primary audience) -- minimum viable: name, email, phone, state, county, acreage, property address, free-and-clear status, estimated value. Add APN, back taxes, lien balance as optional/in follow-up.

2. **Birddog form** (secondary audience) -- minimum viable: contact info, state/county/acreage, APN, access/utilities, asking price, referral fee expectation. MUST include explicit referral fee structure near the form.

3. **Investor form** (tertiary audience) -- minimum viable: name, email, investment criteria text area, geography preference.

**Trust signals on all forms:** Privacy policy link, CAPTCHA, confirmation message with expected response time.

**Defer:**
- "What is my land worth?" estimator (needs backend valuation logic)
- Deal flow SMS/notification preferences (email is sufficient for MVP)
- Testimonial section (can add after first closed deals)
- Callback request feature (phone number in footer is sufficient for MVP)

---

## Sources

- LandWatch.com -- general marketplace, lead capture patterns
- LandHub.com -- marketplace conversion elements, newsletter capture
- LandVest.com -- luxury brokerage, contact form structure, trust signals
- WhitetailProperties.com -- dedicated land site, licensing disclosure, professional associations
- NationalLand.com -- broker contact form, "What's My Land Worth?" pattern
- CashForLand.com -- detailed seller form fields, verification checkbox pattern
- AcreValue.com -- community "Post an Opportunity" pattern
- LandReport.com -- magazine/signature studies as trust signals
- LandQuote.com -- callback form, 3-step process visualization
- Landsource.com (Baton Rouge, LA) -- Louisiana-specific service, relevant to Texas+Louisiana operations
- FarmAndRanchRealty.com -- state-specific agents, multiple contact points

**Confidence:** MEDIUM-HIGH for seller forms (multiple direct examples). MEDIUM for birddog/investor forms (inferred from brokerage patterns, not all had dedicated birddog sections). LOW for specific conversion benchmarks (not publicly available).
