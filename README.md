# Nowshad Jawad — Portfolio

Minimal portfolio for a Builder-Writer focused on AI automation, WordPress plugins, and full-stack PHP/Python development.

## Development

```bash
npm install
cp .env.example .env.local   # optional, for TMDB movie posters
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

| File | What to edit |
|---|---|
| `src/data/profile.ts` | Bio, skills, focus, social links |
| `src/data/movies.ts` | Favorite films (TMDB IDs + your note) |
| `src/data/playlists.ts` | YouTube playlist IDs, titles, categories |

### Movies (TMDB)

1. Get a free API key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Add `TMDB_API_KEY=...` to `.env.local`
3. Edit `src/data/movies.ts` — find IDs on TMDB (e.g. `/movie/603` → `tmdbId: 603`)

### YouTube Playlists

1. Copy the `list=` value from any playlist URL
2. Add entries to `src/data/playlists.ts` with category: `teaching`, `tech`, `music`, or `other`
3. Visitors can play playlists on `/about`

### GitHub Projects

Public repos are fetched automatically from [@Jawad0501](https://github.com/Jawad0501) and refresh hourly.

## Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add `TMDB_API_KEY` in Vercel Environment Variables (optional)
4. Deploy

## Tech Stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS v4
- GitHub API, Medium RSS, TMDB API, YouTube embeds
- Light/dark mode via next-themes
