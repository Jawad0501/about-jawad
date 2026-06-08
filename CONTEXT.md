# CONTEXT.md — Portfolio Glossary

## Positioning

**Builder-Writer** — Ships AI automation tools, WordPress plugins, and full-stack apps (Laravel, FastAPI, Flask), then writes about what they learn.

## Primary Focus

1. AI Automation
2. WordPress plugin development
3. Full-stack PHP & Python (Laravel, FastAPI, Flask, Django)

## Visitor Goals

- Browse public GitHub repositories
- Read Medium writing
- Explore shared movies and YouTube playlists

## Content Sections

| Section | Purpose |
|---|---|
| Hero | Name, focus, tagline, portrait, GitHub CTA |
| Skills & Stack | AI, WordPress, PHP, Python, frontend groupings |
| Projects | Live GitHub public repos (hourly revalidation) |
| Writing | Medium RSS feed |
| Contact | Social links |
| About (`/about`) | Bio, movies (TMDB), listen (YouTube playlists) |

## Movies

- Picks defined in `src/data/movies.ts` (TMDB IDs + personal note)
- Details fetched from TMDB API when `TMDB_API_KEY` is set
- Shown on `/about`

## Playlists

- Defined in `src/data/playlists.ts` (YouTube playlist ID, category, description)
- Categories: teaching, tech, music, other
- Embedded players on `/about` — visitors can listen in-browser

## Future: WordPress CRM Webhook (v2)

- `POST /api/contact` → forward to WordPress CRM webhook
- Env: `WORDPRESS_CRM_WEBHOOK_URL`, optional `WEBHOOK_SECRET`
