# Portfolio Site — Developer Guide

## Content Schemas

Each page file (`js/pages/*.js`) has a `content` variable at the top. Edit that to change what the page shows.

### Projects — `js/pages/projects.js`

```js
{
  title: '',            // Project name
  description: '',      // One-liner about what it does
  tech: [],             // Array of tech tags shown as badges
  links: {
    github: '',         // GitHub repo URL
    demo: '',           // Optional: live demo URL
  },
}
```

### Experience — `js/pages/experience.js`

```js
{
  company: '',          // Company name
  role: '',             // Your job title
  period: '',           // e.g. '2024 — Present'
  bullets: [],          // Array of strings; leave empty [] for no details
}
```

### Blog — `js/pages/blog.js`

```js
// In content.posts array:
{
  slug: '',             // Must match the .md filename in content/blog/
  title: '',            // Post title shown on listing and post page
  date: '',             // e.g. '2026-04-01'
  summary: '',          // One-liner shown on the listing page
}
```

Then create `content/blog/<slug>.md` with the actual post content (standard markdown).

### About — `js/pages/about.js`

- `content.bio` — array of paragraph strings
- `content.skills` — array of `{ category: '', items: [] }`

### Contact — `js/pages/contact.js`

Add a key to `content` (e.g. `twitter: 'https://...'`), then add a matching line in the `items` array inside `renderContact`.

### Nav — `js/config.js`

```js
// Internal page link:
{ label: 'About', route: '#/about' }

// External link (opens new tab):
{ label: 'CV', href: 'https://...', external: true }
```

## Quick Reference

| Task | File to edit |
|------|-------------|
| Site name / footer | `js/config.js` |
| Nav links | `js/config.js` |
| Colors / theme | `css/variables.css` |
| Home text | `js/pages/home.js` |
| Bio / skills | `js/pages/about.js` |
| Work history | `js/pages/experience.js` |
| Project cards | `js/pages/projects.js` |
| Blog posts | `js/pages/blog.js` + `content/blog/<slug>.md` |
| Contact links | `js/pages/contact.js` |

## Adding a New Page

1. Create `js/pages/mypage.js` with a `content` variable and exported render function
2. In `js/app.js`, import it and add `Router.route(/^\/mypage$/, () => setPage(renderMyPage))`
3. In `js/config.js`, add `{ label: 'My Page', route: '#/mypage' }` to the `nav` array

## Running Locally

```sh
python3 -m http.server
# Open http://localhost:8000
```

`file://` won't work — ES modules need a server.

## Deploying

Push to `main`. GitHub Pages serves from root. `.nojekyll` disables Jekyll.
