# Travel Blog

A simple, beautiful travel blog built with Astro and Tailwind CSS for sharing travel updates with friends and family.

## Features

- 📝 Markdown-based blog posts
- 📸 Photo gallery support
- 📡 RSS feed for subscriptions
- 🎨 Clean, responsive design
- 🚀 Fast static site generation
- 🌐 GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/travel-blog.git
cd travel-blog

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Writing Blog Posts

Create new markdown files in `src/content/posts/` with the following frontmatter:

```markdown
---
title: 'Your Post Title'
pubDate: 2024-03-15
description: 'A brief description of your post'
heroImage: '/images/your-image.jpg'
location: 'City, Country'
tags: ['travel', 'adventure']
---

Your post content here...
```

### Frontmatter Options

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `pubDate` | date | Yes | Publication date |
| `description` | string | Yes | Brief description |
| `heroImage` | string | No | Hero image path |
| `location` | string | No | Travel location |
| `tags` | array | No | Post tags |
| `updatedDate` | date | No | Last update date |

## Adding Photos

1. Place images in the `public/images/` directory
2. Reference them in your posts: `![Alt text](/images/photo.jpg)`
3. For the photo gallery, update `src/pages/gallery.astro`

## Deployment

### GitHub Pages (Recommended)

1. Push to GitHub
2. Go to repository Settings > Pages
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main

### Other Platforms

The blog generates static files in `dist/` that can be deployed anywhere:

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## Customization

### Site Settings

Edit `astro.config.mjs` to update:
- `site`: Your blog URL
- Integrations: Add/remove features

### Styling

Modify `src/styles/global.css` to customize:
- Colors
- Typography
- Layout

### Components

- `src/layouts/Layout.astro` - Main layout
- `src/components/` - Reusable components

## RSS Feed

The blog automatically generates an RSS feed at `/rss.xml`. Share this URL with friends and family who want to subscribe.

## License

MIT - Feel free to use this for your own travel blog!
