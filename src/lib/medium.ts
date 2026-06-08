export type MediumArticle = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
};

const MEDIUM_FEED_URL = "https://medium.com/feed/@anmjawad007";
const PREVIEW_WORD_LIMIT = 80;
const ARTICLE_LIMIT = 5;

const FALLBACK_ARTICLES: MediumArticle[] = [
  {
    title:
      "Virtual Try-On in 2026: How CatVTON and IDM-VTON Work, What I Learned on a MacBook M1 Pro",
    link: "https://medium.com/@anmjawad007",
    pubDate: "2026-06-06",
    excerpt:
      "CatVTON and IDM-VTON explained for shoppers and developers, with a case study on FluentCart.",
  },
  {
    title:
      "The Complete Engineering Loop: A WordPress Developer in the AI Era",
    link: "https://medium.com/@anmjawad007",
    pubDate: "2026-05-30",
    excerpt:
      "Synthesizing AI-era engineering essays through the lens of WordPress development.",
  },
  {
    title:
      "I Got Tired of Debugging WordPress REST APIs Outside WordPress",
    link: "https://medium.com/@anmjawad007",
    pubDate: "2026-05-10",
    excerpt:
      "If you build headless WordPress apps, you've probably lived through this pain.",
  },
];

function stripHtml(html: string): string {
  return html
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function extractTag(xml: string, tag: string): string {
  const cdataMatch = xml.match(
    new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`),
  );
  if (cdataMatch) return cdataMatch[1].trim();

  const plainMatch = xml.match(
    new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`),
  );
  return plainMatch ? plainMatch[1].trim() : "";
}

function extractContentEncoded(xml: string): string {
  const cdataMatch = xml.match(
    /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/,
  );
  if (cdataMatch) return cdataMatch[1].trim();

  const plainMatch = xml.match(
    /<content:encoded>([\s\S]*?)<\/content:encoded>/,
  );
  return plainMatch ? plainMatch[1].trim() : "";
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function truncateWords(text: string, limit: number): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= limit) return words.join(" ");
  return `${words.slice(0, limit).join(" ")}...`;
}

function toPreview(html: string): string {
  const plain = normalizeWhitespace(stripHtml(html));
  if (!plain) return "";
  return truncateWords(plain, PREVIEW_WORD_LIMIT);
}

function parseRssItems(xml: string): MediumArticle[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items.slice(0, ARTICLE_LIMIT).map((item) => {
    const title = stripHtml(extractTag(item, "title"));
    const link = extractTag(item, "link");
    const pubDate = extractTag(item, "pubDate");
    const content =
      extractContentEncoded(item) || extractTag(item, "description");

    return {
      title,
      link,
      pubDate: pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "",
      excerpt: toPreview(content),
    };
  });
}

export async function getMediumArticles(): Promise<MediumArticle[]> {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return FALLBACK_ARTICLES;
    }

    const xml = await response.text();
    const articles = parseRssItems(xml);

    return articles.length > 0 ? articles : FALLBACK_ARTICLES;
  } catch {
    return FALLBACK_ARTICLES;
  }
}
