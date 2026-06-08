import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MovieDetails } from "@/lib/tmdb";

export function MovieCard({ movie }: { movie: MovieDetails }) {
  return (
    <article className="rounded-lg border border-border p-5">
      <div className="flex flex-col gap-5 sm:flex-row">
        {movie.posterUrl ? (
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            width={160}
            height={240}
            className="shrink-0 rounded-md object-cover sm:w-40"
          />
        ) : (
          <div className="flex h-60 w-full shrink-0 items-center justify-center rounded-md bg-border/40 text-sm text-muted sm:w-40">
            Poster unavailable
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-start justify-between gap-3">
            <h2 className="font-serif text-xl text-foreground">
              {movie.title}
              {movie.releaseYear && (
                <span className="text-muted"> ({movie.releaseYear})</span>
              )}
            </h2>
            <a
              href={movie.tmdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${movie.title} on TMDB`}
              className="shrink-0 text-muted transition-colors hover:text-accent"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
          {movie.genres.length > 0 && (
            <p className="mb-3 text-xs text-muted">
              {movie.genres.join(" · ")}
              {movie.runtime ? ` · ${movie.runtime} min` : ""}
            </p>
          )}
          {movie.overview && (
            <p className="mb-4 text-sm leading-relaxed text-muted">
              {movie.overview}
            </p>
          )}
          <blockquote className="border-l-2 border-accent/40 pl-4 text-sm italic leading-relaxed text-foreground">
            {movie.note}
          </blockquote>
        </div>
      </div>
    </article>
  );
}
