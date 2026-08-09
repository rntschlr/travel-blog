# Travel Blog

A simple, self-run travel blog for sharing stories and photos with friends and
family. Live at **https://rntschlr.github.io/travel-blog/**.

Built with [Astro](https://astro.build) and Tailwind CSS, edited through
[Pages CMS](https://pagescms.org), mailing list by
[Buttondown](https://buttondown.com), hosted free on GitHub Pages.

**Just want to post?** Read [HOW-TO-POST.md](HOW-TO-POST.md) — no technical
knowledge needed.

## How it works

- Posts are markdown files in `src/content/posts/`; gallery photos are small
  YAML files in `src/content/photos/` plus images in `public/images/`.
- Pages CMS (configured by `.pages.yml`) provides a browser editor that
  commits straight to this repo — including from a phone.
- Every push to `main` triggers `.github/workflows/deploy.yml`, which builds
  the site and publishes it to GitHub Pages. A post is live ~2–3 minutes
  after saving.
- The subscribe form posts to Buttondown; no server, no secrets in the repo.
  Site name, description, and the Buttondown username live in
  `src/data/site.json` (editable in Pages CMS under "Site settings").

## Development

```bash
npm install
npm run dev      # dev server at localhost:4321/travel-blog/
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

Requires Node 22+.

### Things to know when editing code

- The site is served under the `/travel-blog` base path (see
  `astro.config.mjs`). Always build internal links with `withBase()` from
  `src/lib/url.ts` — plain `/blog/...` hrefs break on GitHub Pages.
- Content schemas live in `src/content.config.ts`. If you add a field there,
  add it to `.pages.yml` too so it shows up in the editor.
- When the blog moves to its own domain: remove `base` from
  `astro.config.mjs`, change the media `output` in `.pages.yml` to `/images`,
  and search-replace `/travel-blog/images` → `/images` in existing content.

## License

MIT
