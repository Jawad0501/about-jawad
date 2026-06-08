import { favoriteMovies, type MoviePick } from "@/data/movies";

export type MovieDetails = MoviePick & {
  title: string;
  overview: string;
  releaseYear: string;
  posterUrl: string | null;
  tmdbUrl: string;
  runtime: number | null;
  genres: string[];
};

type TmdbResponse = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  runtime: number | null;
  genres: { name: string }[];
};

async function fetchMovie(
  pick: MoviePick,
  apiKey: string,
): Promise<MovieDetails | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${pick.tmdbId}?api_key=${apiKey}`,
      { next: { revalidate: 86400 } },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as TmdbResponse;

    return {
      ...pick,
      title: data.title,
      overview: data.overview,
      releaseYear: data.release_date?.slice(0, 4) ?? "",
      posterUrl: data.poster_path
        ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
        : null,
      tmdbUrl: `https://www.themoviedb.org/movie/${pick.tmdbId}`,
      runtime: data.runtime,
      genres: data.genres.map((g) => g.name),
    };
  } catch {
    return null;
  }
}

function fallbackMovie(pick: MoviePick): MovieDetails {
  return {
    ...pick,
    title: `TMDB #${pick.tmdbId}`,
    overview: "Add TMDB_API_KEY to .env.local to load poster and synopsis.",
    releaseYear: "",
    posterUrl: null,
    tmdbUrl: `https://www.themoviedb.org/movie/${pick.tmdbId}`,
    runtime: null,
    genres: [],
  };
}

export async function getMovies(picks: MoviePick[]): Promise<MovieDetails[]> {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return picks.map(fallbackMovie);
  }

  const results = await Promise.all(
    picks.map((pick) => fetchMovie(pick, apiKey)),
  );

  return results.map((movie, i) => movie ?? fallbackMovie(picks[i]));
}

export async function getFavoriteMovies(): Promise<MovieDetails[]> {
  return getMovies(favoriteMovies);
}
