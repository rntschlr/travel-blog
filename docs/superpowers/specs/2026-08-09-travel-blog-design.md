# Travel Blog — Design Spec (approved 2026-08-09)

## Goal

Turn the existing Astro scaffold into a fully self-run travel blog that a
non-developer can operate from a phone: write posts, upload photos, and grow a
small mailing list — with zero hosting bills and no servers to maintain.

## Decisions (made with Jack)

| Decision | Choice |
|---|---|
| Posting workflow | **Pages CMS** (pagescms.org) — hosted web editor that commits to GitHub |
| Mailing list | **Buttondown** — free ≤100 subscribers; RSS-to-email automation is an optional +$9/mo add-on (verified on buttondown.com/pricing) |
| URL | **GitHub Pages now** at `rntschlr.github.io/travel-blog`; blog gets its own domain later (explicitly separate from johnkrentschler.me) |
| Sample content | Replace fake Kyoto posts with one starter post |
| Subscribe form | Homepage strip + compact footer form; no popups |
| Portfolio | Add a project card on johnkrentschler.me linking to the GitHub repo and live site |

## Architecture

Static Astro 7 site (existing), Tailwind 4, deployed by the existing GitHub
Actions workflow to GitHub Pages (Node bumped to 22 to match `engines`).

### Content model
- `posts` collection (existing markdown schema, unchanged): title, pubDate,
  description, optional heroImage/location, tags.
- **New** `photos` collection: one small YAML file per gallery photo —
  `image`, `alt`, optional `location`, `caption`, `date`. Gallery page renders
  this collection (newest first) instead of a hardcoded array; friendly empty
  state when there are no photos yet.
- **New** `src/data/site.json` singleton: site title, description, author,
  `buttondownUsername`. Read by layout, RSS, and the subscribe form; editable
  in Pages CMS so Jack can rename the blog without touching code.

### Base-path strategy (the subtle part)
`site: 'https://rntschlr.github.io'`, `base: '/travel-blog'`. A single helper
`withBase(path)` prefixes internal URLs *unless already prefixed*, so values
saved by the CMS (which include the base via the media `output` setting) and
hand-written paths both work. Used for nav, favicon, RSS link tag, post links,
hero images, gallery images, and RSS item links. When the blog later gets its
own domain, migration = remove `base`, set media `output: /images`, and
search-replace `/travel-blog/images` → `/images` in content.

### Pages CMS
`.pages.yml` defines: media folder (`public/images` → output
`/travel-blog/images`), the two collections (posts as `yaml-frontmatter` with a
`rich-text` body; photos as pure `yaml`), and the site-settings file. Jack
connects pagescms.org to the repo once via GitHub login (his action).

### Mailing list
`Subscribe.astro` posts to Buttondown's embed endpoint
(`https://buttondown.com/api/emails/embed-subscribe/<username>`). No secrets in
the repo. While `buttondownUsername` is empty the component renders an RSS
fallback line instead of a broken form. Free workflow: publish post → send a
short email from the Buttondown dashboard; optional +$9/mo add-on automates
this from the RSS feed.

## Deliverables
1. Working site, built and verified locally under the base path.
2. Public repo `rntschlr/travel-blog`, GitHub Pages enabled, deploy green,
   live URL returning 200.
3. `HOW-TO-POST.md` — ELI5 step-by-step guide: connecting Pages CMS, writing a
   post, adding photos, creating the Buttondown account, and sending the
   newsletter (honest about what's free vs paid).
4. Rewritten `README.md` reflecting the real stack and workflow.
5. Project card on johnkrentschler.me (both languages) linking to repo + live
   site, deployed via Cloudflare Pages.

## Verification
- `npm run build` clean; `astro preview` + curl checks: nav links, gallery,
  RSS item URLs, subscribe fallback all correct under `/travel-blog/`.
- Small adversarial review workflow over base-path handling, `.pages.yml`
  validity, and guide clarity before publishing.
- Post-deploy: workflow green, `curl` live URL, portfolio card visible.

## Out of scope (for now)
Custom domain purchase/DNS, comments, analytics, image resizing pipeline,
multi-author support.
