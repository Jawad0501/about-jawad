"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { hallOfFameMeta } from "@/data/movies";
import type { MovieDetails } from "@/lib/tmdb";
import { MovieGridCard } from "@/components/movie-grid-card";

export function MoviesSection({
  weeklyMovies,
  hallOfFameMovies,
}: {
  weeklyMovies: MovieDetails[];
  hallOfFameMovies: MovieDetails[];
}) {
  const [showHallOfFame, setShowHallOfFame] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showHallOfFame ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showHallOfFame]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {weeklyMovies.map((movie) => (
          <MovieGridCard key={movie.tmdbId} movie={movie} />
        ))}

        <button
          type="button"
          onClick={() => setShowHallOfFame(true)}
          className="group flex min-h-[220px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-border/20 p-5 text-center transition-colors hover:border-accent/50 hover:bg-border/30"
        >
          <Sparkles
            size={22}
            className="mb-3 text-muted transition-colors group-hover:text-accent"
          />
          <span className="font-serif text-xl text-foreground">
            {hallOfFameMeta.cardLabel}
          </span>
          <span className="mt-2 text-sm text-muted">
            {hallOfFameMeta.cardHint}
          </span>
          <span className="mt-4 text-xs text-muted transition-colors group-hover:text-accent">
            View all-time picks →
          </span>
        </button>
      </div>

      {showHallOfFame && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setShowHallOfFame(false)}
        >
          <div className="flex min-h-full items-center justify-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="hall-of-fame-title"
            className="my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-lg sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
                  <Sparkles size={14} />
                  {hallOfFameMeta.title}
                </p>
                <h3
                  id="hall-of-fame-title"
                  className="font-serif text-2xl text-foreground sm:text-3xl"
                >
                  {hallOfFameMeta.subtitle}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {hallOfFameMeta.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowHallOfFame(false)}
                aria-label="Close"
                className="shrink-0 text-muted transition-colors hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {hallOfFameMovies.map((movie) => (
                <MovieGridCard key={movie.tmdbId} movie={movie} />
              ))}
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
