/**
 * Three movies you plan to watch this week — update weekly.
 * Find TMDB IDs at https://www.themoviedb.org — e.g. /movie/603 → tmdbId: 603
 * Set TMDB_API_KEY in .env.local for posters and overviews.
 */
export type MoviePick = {
  tmdbId: number;
  note: string;
};

export const favoriteMovies: MoviePick[] = [
  {
    tmdbId: 1339713,
    note: "",
  },
  {
    tmdbId: 1430077,
    note: "",
  },
  {
    tmdbId: 1083381,
    note: "",
  },
];

export const hallOfFameMovies: MoviePick[] = [
  {
    tmdbId: 603,
    note: "Still the clearest film about questioning the systems we build inside.",
  },
  {
    tmdbId: 157336,
    note: "Time, love, and engineering trade-offs — all in one soundtrack.",
  },
  {
    tmdbId: 27205,
    note: "Layers within layers. Good reminder that architecture is narrative.",
  },
];

export const hallOfFameMeta = {
  cardLabel: "Hall of Fame",
  cardHint: "All-time favourites",
  title: "Hall of Fame",
  subtitle: "The films I never stop recommending",
  description:
    "These aren't this week's watchlist — they're the stories I return to. Films that shaped how I think about people, systems, and the trade-offs we make. Open this when you want the long list, not the current queue.",
};

export const moviesTitle = "Movies This Week";

export const moviesIntro =
  "Three films I'm planning to watch this week. I update this list regularly — so I don't forget what I wanted to see, and so I don't forget to come back and maintain this site.";
