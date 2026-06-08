import { ArrowUpRight } from "lucide-react";
import { getMediumArticles } from "@/lib/medium";
import { profile } from "@/data/profile";

export async function Writing() {
  const articles = await getMediumArticles();

  return (
    <section id="writing" className="py-24">
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="font-serif text-2xl text-foreground">Writing</h2>
        <a
          href={profile.links.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          All posts →
        </a>
      </div>
      <ul className="divide-y divide-border">
        {articles.map((article) => (
          <li key={article.link + article.title}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 py-5 transition-colors"
            >
              <div className="min-w-0">
                <h3 className="font-medium text-foreground group-hover:text-accent">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2 pt-0.5">
                {article.pubDate && (
                  <span className="text-xs text-muted">{article.pubDate}</span>
                )}
                <ArrowUpRight
                  size={14}
                  className="text-muted group-hover:text-accent"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
