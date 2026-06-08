"use client";

import { useState } from "react";
import {
  newsletterCopy,
  newsletterTopics,
  type NewsletterTopicId,
} from "@/data/newsletter";

type FormStatus = "idle" | "loading" | "success" | "error";

export function SubscribeForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<NewsletterTopicId[]>([]);

  function toggleTopic(id: NewsletterTopicId) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((topic) => topic !== id)
        : [...current, id],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          website: formData.get("website"),
          interests: selected,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      setSelected([]);
      form.reset();
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong.",
      );
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg border border-border bg-border/20 px-4 py-3 text-sm leading-relaxed text-foreground">
        {newsletterCopy.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
            placeholder="Optional"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm text-muted">
          What do you want updates on?
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {newsletterTopics.map((topic) => {
            const checked = selected.includes(topic.id);

            return (
              <label
                key={topic.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-3 transition-colors ${
                  checked
                    ? "border-accent/40 bg-accent/5"
                    : "border-border hover:border-accent/30"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleTopic(topic.id)}
                  className="mt-0.5"
                />
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {topic.label}
                  </span>
                  <span className="block text-xs text-muted">
                    {topic.description}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading" || selected.length === 0}
        className="rounded-lg border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? "Subscribing..." : newsletterCopy.submitLabel}
      </button>
    </form>
  );
}
