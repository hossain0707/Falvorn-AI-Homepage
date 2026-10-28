# Falvorn AI company website

Public company homepage for Falvorn AI, owned by Md Najmul Hossain. Built with semantic HTML, CSS, and browser JavaScript. No dependencies or paid model calls are required.

## Development

Requires Node.js 20 or newer.

```sh
npm run check
npm run build
```

Vercel runs `npm run build` and serves `dist`. The connected `main` branch is the production source.

## Products and journal

- `content/products.json` contains the reviewed product catalog and public product/demo destinations. Product cards open product details rather than repository links.
- `content/posts.json` contains news and engineering articles. Article bodies are paragraph arrays, rendered as text rather than executable HTML.
- The contributor studio provides a browser-only draft editor and JSON export. Publishing uses GitHub authentication and repository permissions: authorized collaborators edit `content/posts.json`, review, and commit or merge. Vercel then deploys the new version. There is no client-side admin password or unauthenticated write endpoint.
- Give publishing access only to intended contributors through GitHub repository settings. Enable branch protection/review rules if desired. Public fork pull requests are proposals, not publication rights.

## Interactive experiences

The memory calculator computes raw model weight size. Privacy redaction and task routing are simplified local pattern demonstrations. Product workflow walkthroughs are explicitly illustrative. External applications operate independently. Desktop software and browser-agent backends are not deployed by this homepage.

## Contact and privacy

The contact form opens an email draft; it does not send messages or store submissions. No analytics, tracking cookies, or external fonts are installed. Hosting providers may process request metadata. Contact: najmul.eee1996@gmail.com.

## Ownership

Copyright © 2026 Md Najmul Hossain. All rights reserved. Original site code, copy, branding, and supplied imagery are proprietary. Third-party products and trademarks retain their owners' rights. Independent projects are not represented as endorsed by NVIDIA or other vendors.
