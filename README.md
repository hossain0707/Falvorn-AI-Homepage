# Falvorn AI company website

Public company homepage for Falvorn AI, owned by Md Najmul Hossain. Built with semantic HTML, CSS, and browser JavaScript. No dependencies or paid model calls are required.

## Development

Requires Node.js 20 or newer.

```sh
npm run check
npm run build
```

Vercel runs `npm run build` and serves `dist`. The `main` branch is the source of truth. The first Vercel production deployment was uploaded directly because the Vercel GitHub integration is not installed for this repository. Connect that integration to enable automatic code deployments. Until then, code changes require a new direct deployment.

## Products and journal

- `content/products.json` contains the reviewed product catalog and public product/demo destinations. Product cards open product details rather than repository links.
- `content/posts.json` contains news and engineering articles. Article bodies are paragraph arrays, rendered as text rather than executable HTML.
- The contributor studio provides a browser-only draft editor and JSON export. Publishing uses GitHub authentication and repository permissions: authorized collaborators edit `content/posts.json`, review, and commit or merge. The homepage reads published journal JSON from the public GitHub main branch (subject to CDN caching), falling back to the bundled copy when unavailable. Code/layout changes still require a deployment. There is no client-side admin password or unauthenticated write endpoint.
- Give publishing access only to intended contributors through GitHub repository settings. Enable branch protection/review rules if desired. Public fork pull requests are proposals, not publication rights.

## Interactive experiences

The memory calculator computes raw model weight size. Privacy redaction and task routing are simplified local pattern demonstrations. Product workflow walkthroughs are explicitly illustrative. External applications operate independently. Desktop software and browser-agent backends are not deployed by this homepage.

## Contact and privacy

The contact form opens an email draft; it does not send messages or store submissions. No analytics, tracking cookies, or external fonts are installed. Hosting providers may process request metadata. Contact: najmul.eee1996@gmail.com.

## Ownership

Copyright © 2026 Md Najmul Hossain. All rights reserved. Original site code, copy, branding, and supplied imagery are proprietary. Third-party products and trademarks retain their owners' rights. Independent projects are not represented as endorsed by NVIDIA or other vendors.


## Cinematic edition — 2026-10-29

- Locally drawn ocean wave canvas, four scroll-linked product chapters, seven visual motifs with product-specific accents, and animated product dialogs.
- No animation library, third-party font, video download or model API. Static product cards and article summaries are prerendered into the build for first-load resilience and indexing.
- Motion can be paused with a persistent browser preference. System reduced-motion settings disable animation and replace the long sticky presentation with selectable scenes. Mobile uses selectable scenes without the long scroll section.
- Canvas resolution is capped at 1.5 device pixel ratio, approximately 25 fps, with fewer lines on mobile. Canvas rendering stops offscreen and when the document is hidden. Product animations run only near the viewport. All CSS animation pauses when the page is hidden.
- Existing contact email-draft flow, journal permissions, and product maturity labels remain. This is a marketing-site release, not a production certification of the listed product backends.

### Release verification

Run `npm run check`, `node --check app.js`, `node --check motion.js`, and `npm run build`. Verify chapter selection, scroll transitions, pause/resume, filtered product artwork, dialogs, and playground controls in the browser. A private QA iframe can inspect the mobile layout without shipping a QA route.
