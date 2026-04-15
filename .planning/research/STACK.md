# Technology Stack

**Project:** Land Kings Marketing Site
**Researched:** 2026-04-15
**Confidence:** MEDIUM-HIGH

## Recommended Stack

### Core Approach: Plain HTML/CSS/JS

For a single-page marketing site with no backend requirements, **plain HTML/CSS/JS is the optimal choice**. No framework overhead, fastest possible load times, simplest deployment.

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Markup | HTML5 | Living standard | Semantic page structure |
| Styling | Custom CSS | Modern (no preprocessor needed) | Brand styling, responsive layout |
| Interactivity | Vanilla JavaScript | ES2022+ | Form validation, smooth scroll, subtle animations |
| Fonts | Space Grotesk + Inter | Via Google Fonts | Brand typography |

**Why not a static site generator (Astro, Eleventy, Hugo)?**
- Overkill for a single static page
- Adds build step complexity
- Plain HTML/CSS/JS achieves 100/100 Lighthouse with zero tooling
- Faster initial development, simpler deployment

**Why not Tailwind CSS?**
- Adds build tooling and CDN delivery overhead
- Plain CSS with custom properties is lighter and sufficient
- 2025 CSS features (grid, container queries, :has()) eliminate most Tailwind use cases

### Form Handling: Formspree

| Service | Free Tier | Paid Tier | Notes |
|---------|-----------|-----------|-------|
| **Formspree** | 50 submissions/mo, 1 form | $20/mo unlimited forms | Best overall DX, 25+ integrations |
| Netlify Forms | Unlimited | Requires paid Netlify | Tied to Netlify hosting |
| Basin | 50/mo, 1 form | $12.50/mo starter | Good features, pricier |
| FormInit (Getform) | 50/mo, 1 form | $19/mo pro | Solid option, less mature |

**Recommendation: Formspree**

- Simple `<form action="https://formspree.io/f/YOUR_ID" method="POST">` integration
- No JavaScript required for basic functionality
- AJAX submission with fallback
- reCAPTCHA and honeypot spam protection built-in
- Email notifications, webhooks, Slack/Notion/Airtable integrations
- Most recognized brand in the form-as-a-service space (500K+ users)

**Implementation pattern:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Three separate forms for: sellers, birddogs, investors -->
</form>
```

**Spam protection:** Formspree's Formshield (ML-based) + honeypot field + reCAPTCHA v3.

### Hosting

| Provider | Free Tier | Notes |
|----------|-----------|-------|
| **Cloudflare Pages** | 500 builds/mo, 1 concurrent | Fastest edge network, HTTP/3, QUIC |
| **Netlify** | 300 mins build, 100GB bandwidth | Best developer experience, built-in forms |
| **Vercel** | 100GB bandwidth, 100K requests | Excellent for Next.js but overkill for static |
| GitHub Pages | Unlimited | No form handling, limited customization |

**Recommendation: Cloudflare Pages** (primary) or **Netlify** (secondary)

**Cloudflare Pages advantages:**
- 200+ edge locations globally (fastest TTFB)
- HTTP/3 and QUIC support
- Free built-in analytics
- Unlimited seats on free tier
- Workers integration for future extensibility
- Zero cold starts

**Netlify advantages:**
- Native form handling (if using Netlify Forms)
- More mature static hosting ecosystem
- Better-documented for non-technical users
- Instant previews for PRs

**For this project:** Cloudflare Pages recommended because:
1. Superior edge performance for a marketing site (conversion-critical)
2. Generous free tier for a single static page
3. Workers provide extensibility path without backend
4. Simple Git-based deployment (GitHub/GitLab)

### Performance Stack

| Concern | Solution |
|---------|----------|
| Font loading | `font-display: swap`, preconnect to Google Fonts |
| CSS delivery | Single minified CSS file, critical CSS inline |
| JavaScript | Defer non-critical JS, minimal vanilla JS |
| Images | WebP format, explicit width/height to prevent CLS |
| Caching | Cloudflare edge caching, cache-control headers |

**Core Web Vitals targets (2026):**
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

For a pure HTML/CSS/JS page served from Cloudflare Pages, these are trivially achievable.

### External Dependencies (Minimal)

| Resource | Purpose | Load Strategy |
|----------|---------|---------------|
| Google Fonts (Space Grotesk, Inter) | Typography | `preconnect` + `font-display: swap` |
| Formspree endpoint | Form submission | Standard form POST, AJAX optional |
| No JS frameworks | N/A | Not needed |

### What NOT to Use and Why

| Technology | Why Avoid |
|------------|-----------|
| React/Vue/Angular | Orders of magnitude overhead for a static page |
| Next.js | Requires Node.js, overkill for single static page |
| Tailwind CSS | Build step required, heavier than vanilla CSS |
| WordPress/CMS | Backend database, security patches, hosting complexity |
| Webflow | Proprietary, expensive, limits portability |
| PHP/ASP backends | Unnecessary complexity for static lead capture |
| Firebase/Supabase | Database = overengineering for form-to-email |
| Stripe/PayPal | No e-commerce in scope |

---

## Installation

No npm packages or build tools required for Phase 1.

**For local development:**
```bash
# Open index.html directly in browser
# Or use a simple HTTP server
npx serve .
```

**For deployment to Cloudflare Pages:**
```bash
# Connect GitHub repo to Cloudflare Pages
# Set build command: (none - pure HTML)
# Set output directory: /
```

---

## Sources

- [Formspree Documentation](https://formspree.io/docs/introduction) — MEDIUM confidence
- [Cloudflare Pages Pricing](https://pages.cloudflare.com/) — HIGH confidence
- [Netlify Pricing](https://www.netlify.com/pricing/) — HIGH confidence
- [Vercel Pricing](https://vercel.com/pricing) — HIGH confidence
- [Basin Pricing](https://usebasin.com/pricing) — MEDIUM confidence
- [FormInit (Getform) Pricing](https://forminit.com/pricing/) — MEDIUM confidence
- [Astro Framework](https://astro.build/blog/astro-5/) — MEDIUM confidence
- [Eleventy Documentation](https://www.11ty.dev/docs/) — MEDIUM confidence
- [MDN Web Forms Best Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) — HIGH confidence
- [Core Web Vitals (Google)](https://web.dev/articles/vitals) — HIGH confidence
