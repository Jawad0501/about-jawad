"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Headphones, Mic, X, Zap } from "lucide-react";
import type { ListenCategory, ListenCategoryId } from "@/data/playlists";

const categoryIcons: Record<ListenCategoryId, typeof Headphones> = {
  music: Headphones,
  podcast: Mic,
  spark: Zap,
};

function ListenItemCard({ item }: { item: ListenCategory["items"][number] }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 rounded-lg border border-border p-4 transition-colors hover:border-accent/40"
    >
      <div className="min-w-0">
        <h4 className="font-medium text-foreground group-hover:text-accent">
          {item.title}
        </h4>
        {item.description ? (
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        ) : null}
        <p className="mt-2 text-xs text-muted">Opens on YouTube</p>
      </div>
      <ArrowUpRight
        size={16}
        className="mt-1 shrink-0 text-muted group-hover:text-accent"
      />
    </a>
  );
}

export function ListenSection({
  categories,
}: {
  categories: ListenCategory[];
}) {
  const [active, setActive] = useState<ListenCategory | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {categories.map((category) => {
          const Icon = categoryIcons[category.id];

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category)}
              className="group flex flex-col rounded-lg border border-border p-5 text-left transition-colors hover:border-accent/40"
            >
              <Icon
                size={22}
                className="mb-4 text-muted transition-colors group-hover:text-accent"
              />
              <h3 className="font-serif text-xl text-foreground group-hover:text-accent">
                {category.cardLabel}
              </h3>
              <p className="mt-1 text-sm text-muted">{category.cardHint}</p>
              <p className="mt-4 text-xs text-muted transition-colors group-hover:text-accent">
                {category.items.length} saved · Browse →
              </p>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div className="flex min-h-full items-center justify-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="listen-modal-title"
            className="my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-lg sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
                  {active.cardLabel}
                </p>
                <h3
                  id="listen-modal-title"
                  className="font-serif text-2xl text-foreground"
                >
                  {active.subtitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {active.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="shrink-0 text-muted transition-colors hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              {active.items.map((item) => (
                <ListenItemCard key={`${item.url}-${item.title}`} item={item} />
              ))}
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
