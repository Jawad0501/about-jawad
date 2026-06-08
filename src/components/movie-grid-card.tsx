import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MovieDetails } from "@/lib/tmdb";

export function MovieGridCard({ movie }: { movie: MovieDetails }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border">
      {movie.posterUrl ? (
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          width={240}
          height={360}
          className="h-44 w-full object-cover"
        />
      ) : (
        <div className="flex h-44 w-full items-center justify-center bg-border/40 text-sm text-muted">
          Poster unavailable
        </div>
      )}
      <div className="flex flex-1 flex-col p-3.5">
        <div className="mb-1.5 flex items-start justify-between gap-2">
          <h3 className="font-serif text-base leading-snug text-foreground">
            {movie.title}
            {movie.releaseYear && (
              <span className="text-muted"> ({movie.releaseYear})</span>
            )}
          </h3>
          <a
            href={movie.tmdbUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${movie.title} on TMDB`}
            className="shrink-0 text-muted transition-colors hover:text-accent"
          >
            <ArrowUpRight size={15} />
          </a>
        </div>
        {movie.genres.length > 0 && (
          <p className="text-xs text-muted">
            {movie.genres.slice(0, 3).join(" · ")}
            {movie.runtime ? ` · ${movie.runtime} min` : ""}
          </p>
        )}
        {movie.note ? (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {movie.note}
          </p>
        ) : null}
      </div>
    </article>
  );
}
