export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
};

const GITHUB_USER = "Jawad0501";

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    name: "rest-api-route-tester",
    description:
      "Debug WordPress REST APIs inside WordPress — no more context-switching to Postman.",
    html_url: "https://github.com/Jawad0501/rest-api-route-tester",
    language: "HTML",
    updated_at: "2026-05-21",
    stargazers_count: 0,
  },
  {
    name: "agent-ide-rules-wordpress",
    description: "A set of rules defined for IDE Agents working on WordPress.",
    html_url: "https://github.com/Jawad0501/agent-ide-rules-wordpress",
    language: null,
    updated_at: "2026-02-01",
    stargazers_count: 0,
  },
  {
    name: "ecg-simulator",
    description: "Interactive electrocardiogram waveform simulator.",
    html_url: "https://github.com/Jawad0501/ecg-simulator",
    language: "HTML",
    updated_at: "2026-06-08",
    stargazers_count: 0,
  },
];

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );

    if (!response.ok) return FALLBACK_REPOS;

    const data = (await response.json()) as Array<{
      name: string;
      description: string | null;
      html_url: string;
      language: string | null;
      updated_at: string;
      stargazers_count: number;
      fork: boolean;
    }>;

    const repos = data
      .filter((repo) => !repo.fork)
      .map(({ name, description, html_url, language, updated_at, stargazers_count }) => ({
        name,
        description,
        html_url,
        language,
        updated_at,
        stargazers_count,
      }));

    return repos.length > 0 ? repos : FALLBACK_REPOS;
  } catch {
    return FALLBACK_REPOS;
  }
}
