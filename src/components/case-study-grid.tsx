"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { CaseStudy, CaseStudyLink } from "@/data/case-studies";

function LinkButton({
  link,
  onConnect,
}: {
  link: CaseStudyLink;
  onConnect: () => void;
}) {
  if (link.type === "connect") {
    return (
      <button
        type="button"
        onClick={onConnect}
        className="rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
      >
        {link.label}
      </button>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
    >
      {link.label}
    </a>
  );
}

export function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState<CaseStudy | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  function scrollToContact() {
    setActive(null);
    window.location.href = "/#contact";
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {studies.map((study) => (
          <button
            key={study.slug}
            type="button"
            onClick={() => setActive(study)}
            className="group flex h-full flex-col rounded-lg border border-border p-5 text-left transition-colors hover:border-accent/40"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="font-medium text-foreground group-hover:text-accent">
                {study.title}
              </h3>
              {study.visibility === "private" && (
                <span className="shrink-0 rounded-full bg-border/60 px-2 py-0.5 text-xs text-muted">
                  Private
                </span>
              )}
            </div>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
              {study.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {study.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-border/60 px-2.5 py-0.5 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </button>
        ))}
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
            aria-labelledby="case-study-title"
            className="my-auto max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3
                  id="case-study-title"
                  className="font-serif text-2xl text-foreground"
                >
                  {active.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{active.role}</p>
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

            <p className="mb-6 leading-relaxed text-muted">
              {active.description}
            </p>

            <h4 className="mb-2 text-sm font-medium text-foreground">
              Highlights
            </h4>
            <ul className="mb-6 list-inside list-disc space-y-1 text-sm text-muted">
              {active.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mb-6 flex flex-wrap gap-2">
              {active.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {active.links.map((link) => (
                <LinkButton
                  key={link.label}
                  link={link}
                  onConnect={scrollToContact}
                />
              ))}
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
