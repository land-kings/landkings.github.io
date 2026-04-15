# Architecture Patterns

**Domain:** Single-page marketing website for land investing
**Project:** Land Kings
**Researched:** 2026-04-15
**Confidence:** MEDIUM (based on WebFetch of industry sources; not Land Kings-specific)

---

## Recommended Architecture

### Page Model

Single-page application with **anchor-based section navigation**. All content lives on one page; users scroll or click navigation to jump to relevant sections. Each audience (sellers, birddogs, investors) gets a dedicated section with tailored messaging and a distinct contact form.

**Rationale:** Keeps mobile experience fluid (no page reloads), enables fast navigation between audiences, and maintains single-focus conversion paths per section. This matches the "single-page layout" decision in PROJECT.md and aligns with standard marketing site patterns.

---

### Component Boundaries

| Component | Responsibility | Receives From | Sends To |
|-----------|---------------|--------------|----------|
| **Header/Nav** | Fixed navigation bar; links to page sections | User clicks | Scrolls to target section |
| **Hero** | Brand statement, primary value prop, primary CTA | Static content | Form section (via CTA click) |
| **About** | Company story, credibility, specialization | Static content | None |
| **What We Buy** | Property types accepted (large acreage, subdivisions, development) | Static content | None |
| **How It Works** | 3-4 step process for sellers | Static content | Seller form (via CTA) |
| **For Sellers** | Tailored pitch + seller contact form | Form inputs | Formspree/Netlify Forms |
| **For Birddogs** | Referral program explanation + deal submission form | Form inputs | Formspree/Netlify Forms |
| **For Investors** | Acquisition criteria + investor inquiry form | Form inputs | Formspree/Netlify Forms |
| **Footer** | Company info, disclaimers, secondary links | Static content | None |

**Communication pattern:** User scrolls or clicks nav → page jumps to section. Forms POST directly to form service (Formspree, Netlify Forms, or similar) with no intermediate API layer.

---

### Section Flow (Recommended Build Order)

```
[Header - sticky nav with section links]
    |
    v
[Hero] --> [About] --> [What We Buy] --> [How It Works]
    |           |              |              |
    |           |              |              +--> [For Sellers Section + Form]
    |           |              |
    |           |              +--> [For Birddogs Section + Form]
    |           |
    |           +--> [For Investors Section + Form]
    |
    v
[Footer]
```

**Section ordering rationale:**
- Hero first: captures attention, establishes who/why
- About second: builds trust after initial hook
- What We Buy third: concrete details after trust establishment
- How It Works fourth: process clarity after knowing what is bought
- Audience-specific sections (For Sellers / For Birddogs / For Investors): personalized conversion paths after general context is set
- Footer last: standard closure with legal/disclaimer content

---

### Data Flow

**Form submission flow:**

```
User fills form
    |
    v
Client-side validation (HTML5 attributes + JS)
    |
    v
POST to form service (Formspree / Netlify Forms / Formcarry)
    |
    v
Form service sends email to Land Kings inbox
    |
    v
Optional: Form service webhook → CRM (future enhancement)
```

**No backend required** for initial launch. Static HTML form POSTs directly to a form service endpoint. This aligns with the "no server" constraint in PROJECT.md.

---

### Navigation Architecture

**Fixed/sticky header** with anchor links:
- Logo (top-left) → scrolls to top (Hero)
- Nav links: About | What We Buy | How It Works | For Sellers | For Birddogs | For Investors | Contact

**Mobile nav behavior:**
- Desktop: horizontal nav bar
- Mobile: hamburger menu → slide-out or dropdown with same anchor links

**Anchor link implementation:**
```html
<nav>
  <a href="#hero">Home</a>
  <a href="#about">About</a>
  <a href="#what-we-buy">What We Buy</a>
  <a href="#how-it-works">How It Works</a>
  <a href="#for-sellers">Sellers</a>
  <a href="#for-birddogs">Birddogs</a>
  <a href="#for-investors">Investors</a>
  <a href="#contact">Contact</a>
</nav>
```

**Scroll behavior:**
```css
html {
  scroll-behavior: smooth;
}
```

---

### Form Architecture

**Three separate forms, one per audience:**

| Form | Fields (Suggested) | Action |
|------|-------------------|--------|
| **Seller Form** | Name, Email, Phone, Property Address, Acreage, Best time to call, Additional info | POST to form service |
| **Birddog/Deal Form** | Name, Email, Phone, Property Address, APN, Acreage, Utilities, Access, Asking price, Referral fee expectation, Additional notes | POST to form service |
| **Investor Form** | Name, Email, Phone, Investment range, Preferred geography (TX/LA), Investment timeline, Additional info | POST to form service |

**Field grouping:** Group related fields visually (Property Info, Contact Info, Additional Details) using `<fieldset>` and `<legend>` for semantic grouping and accessibility.

**Validation approach:**
- HTML5 validation attributes (`required`, `type="email"`, `type="tel"`, `pattern`)
- CSS pseudo-classes for visual feedback (`:valid`, `:invalid`, `:focus`)
- Optional: JavaScript for custom error messaging and formatting

**Form submission:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- fields -->
</form>
```

Or via Netlify Forms (if hosted on Netlify):
```html
<form name="seller-form" method="POST" data-netlify="true">
```

---

### Responsive Design Approach

**Mobile-first** implementation:
1. Design and build for mobile viewport first
2. Add breakpoints for tablet (768px) and desktop (1024px+) as enhancements

**Layout strategy:**
- **Flexbox** for: navigation, button groups, card layouts, form field alignment
- **CSS Grid** for: page section layouts, multi-column content areas

**Viewport meta (required):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**Responsive breakpoints:**
```css
/* Mobile (default) */
.container { width: 100%; padding: 0 16px; }

/* Tablet */
@media (min-width: 768px) {
  .container { width: 720px; margin: 0 auto; padding: 0 24px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { width: 960px; margin: 0 auto; padding: 0 32px; }
}
```

**Touch targets:** Minimum 44x44px for buttons and form controls on mobile.

---

### Performance Architecture

**Critical path optimizations:**
1. **Single CSS file** (or two: critical inline, async load for rest)
2. **Single JS file** (minimal; only for form validation and mobile nav toggle)
3. **External fonts via Google Fonts** with `display=swap`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
   ```
4. **No render-blocking resources**: async JS, preload critical CSS
5. **Lazy load images** below the fold:
   ```html
   <img src="image.jpg" loading="lazy" alt="description">
   ```

**Target metrics:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total page weight: < 500KB (excluding images)

---

### Component Dependency Graph

```
Header (depends on nothing)
  |
  v
Hero (depends on: Header CSS for positioning)
  |
  v
About (depends on: nothing - standalone)
What We Buy (depends on: nothing - standalone)
How It Works (depends on: nothing - standalone)
  |
  v
For Sellers Section + Form (depends on: global CSS/forms)
For Birddogs Section + Form (depends on: global CSS/forms)
For Investors Section + Form (depends on: global CSS/forms)
  |
  v
Footer (depends on: nothing - standalone)
```

**Build order:** Header → Hero → About/WhatWeBuy/HowItWorks → Audience sections → Footer. No cross-section dependencies; sections are independently renderable.

---

### Anti-Patterns to Avoid

1. **Parallax scrolling effects** — Adds complexity without conversion benefit; harms mobile performance.
2. **Multiple form services on one page** — Use one form provider consistently; simplifies configuration and debugging.
3. **Heavy JavaScript frameworks** — This is a static single page. Vanilla HTML/CSS/JS is sufficient and faster.
4. **Auto-playing media** — Distracting, accessibility issues, performance hit.
5. **Modal overlays for primary CTAs** — For a link-in-bio style site, inline section CTAs reduce friction vs. modals.

---

## Scalability Considerations

| Scale | At 100 users/day | At 10K users/day | At 100K users/day |
|-------|------------------|------------------|-------------------|
| **Hosting** | GitHub Pages / Netlify (free) | Netlify (paid tier) | Cloudflare Pages + CDN |
| **Forms** | Formspree free tier | Formspree paid or Netlify Forms | Formspree Enterprise or custom backend |
| **Images** | External URLs (no hosting cost) | Same | Same with CDN |
| **Performance** | No concerns | No concerns | Monitor Core Web Vitals |

---

## Sources

- [Instapage: Landing Page Structure](https://instapage.com/blog/landing-page-structure/) — Section order, conversion components (imagery, headlines, testimonials, CTAs)
- [GrowthMarketingPro.com: Landing Page Architecture](https://www.growthmarketingpro.com/landing-page-structure/) — Section structure, social proof, navigation hierarchy
- [Shopify: How to Create a Landing Page](https://www.shopify.com/blog/how-to-create-a-landing-page) — Landing page best practices
- [MDN: Web Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) — Form handling, validation, semantic structure
- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_design) — Viewport, mobile-first, flexbox/grid patterns
- [CSS-Tricks: Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — Flexbox for component layouts
- [OrbitMedia: Responsive Web Design Best Practices](https://www.orbitmedia.com/blog/responsive-web-design/) — Unified experience, practical customization
