import { ArrowUpRight } from "lucide-react";
import { getMediumArticles } from "@/lib/medium";
import { profile } from "@/data/profile";

export async function Writing() {
  const articles = await getMediumArticles();

  return (
    <section id="writing" className="py-24">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-2xl text-foreground">Writings</h2>
        <a
          href={profile.links.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm text-muted transition-colors hover:text-accent"
        >
          All posts →
        </a>
      </div>
      <ul className="divide-y divide-border">
        {articles.map((article) => (
          <li key={article.link + article.title} className="py-5">
            <h3 className="font-medium text-foreground">{article.title}</h3>
            {article.excerpt ? (
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {article.excerpt}
              </p>
            ) : null}
            <div className="mt-3 flex items-center justify-between gap-4">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent"
              >
                Read More
                <ArrowUpRight size={14} />
              </a>
              {article.pubDate ? (
                <span className="text-xs text-muted">{article.pubDate}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
