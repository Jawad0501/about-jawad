export type CaseStudyLink =
  | { type: "repo"; url: string; label: string }
  | { type: "live"; url: string; label: string }
  | { type: "connect"; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  highlights: string[];
  tech: string[];
  links: CaseStudyLink[];
  visibility: "public" | "private";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rest-api-route-tester",
    title: "REST API Route Tester",
    summary:
      "Test WordPress REST endpoints from inside wp-admin — no Postman tab required.",
    description:
      "A WordPress plugin that provides a user-friendly admin interface to test REST API endpoints directly from your WordPress panel. Built for headless setups and plugin developers who were tired of context-switching to external API clients. Inspired by Postman's workflow but integrated natively into WordPress.",
    role: "Solo builder — plugin architecture, REST routing, admin UI",
    highlights: [
      "In-admin REST testing without leaving WordPress",
      "Supports authenticated and public endpoint probing",
      "Written about on Medium after shipping the first stable release",
    ],
    tech: ["WordPress", "PHP", "REST API", "JavaScript"],
    links: [
      {
        type: "live",
        url: "https://wordpress.org/plugins/rest-api-route-tester/",
        label: "WordPress.org",
      },
      {
        type: "repo",
        url: "https://github.com/Jawad0501/rest-api-route-tester",
        label: "View on GitHub",
      },
    ],
    visibility: "public",
  },
  {
    slug: "fluent-mcp-agent",
    title: "Fluent MCP Agent",
    summary:
      "AI agent for WordPress that speaks MCP and executes site abilities through chat.",
    description:
      "An intelligent WordPress plugin integrating the Model Context Protocol (MCP) to provide chat capabilities and execute WordPress abilities through AI assistants. Supports multiple providers including Ollama (local), OpenAI, and Anthropic — bridging the Fluent ecosystem with agentic workflows.",
    role: "Lead developer — MCP integration, provider adapters, WordPress abilities API",
    highlights: [
      "MCP server inside a WordPress plugin",
      "Multi-provider AI support (local + cloud)",
      "Coordinator-style agent architecture for reliable tool execution",
    ],
    tech: ["WordPress", "JavaScript", "MCP", "AI Agents", "Ollama"],
    links: [{ type: "connect", label: "Connect with me" }],
    visibility: "private",
  },
  {
    slug: "ai-tool",
    title: "AI Project Analyzer",
    summary:
      "Drop a codebase path — get framework detection, file relevance, and AI-powered analysis.",
    description:
      "A Python-based AI-powered project analysis tool using Qwen2.5-Coder. Identifies frameworks from directory structure, determines relevant files for analysis based on user queries, and reads project context to answer engineering questions about unfamiliar codebases.",
    role: "Solo builder — Python tooling, LLM integration, CLI UX",
    highlights: [
      "Framework detection from directory structure",
      "Query-driven file relevance scoring",
      "Local LLM workflow for private codebases",
    ],
    tech: ["Python", "Qwen2.5-Coder", "AI", "CLI"],
    links: [
      {
        type: "repo",
        url: "https://github.com/Jawad0501/ai-tool",
        label: "View on GitHub",
      },
    ],
    visibility: "public",
  },
  {
    slug: "saas-portfolio",
    title: "SaaS Portfolio",
    summary:
      "Nuxt 3 portfolio with SEO, dynamic OG images, and a polished product-style layout.",
    description:
      "A full-stack personal portfolio built with Nuxt 3, Composition API, and TypeScript. Features Tailwind CSS, @nuxtjs/seo for metadata, @nuxt/icon for Heroicons, and a deploy-ready Vercel setup. An experiment in treating a developer portfolio like a SaaS landing page.",
    role: "Solo builder — Nuxt 3, SEO, deployment pipeline",
    highlights: [
      "Nuxt 3 + TypeScript + Tailwind",
      "Schema-driven SEO and OG image generation",
      "Deployed on Vercel with environment-based config",
    ],
    tech: ["Nuxt 3", "TypeScript", "Tailwind CSS", "Vercel"],
    links: [
      {
        type: "live",
        url: "https://saas-portfolio-pi.vercel.app",
        label: "Live demo",
      },
    ],
    visibility: "private",
  },
  {
    slug: "cozy-movie",
    title: "Cozy Movie",
    summary:
      "Private movie and TV recommendations for small, trusted friend groups.",
    description:
      "A Nuxt app for sharing movie and TV picks in small trusted spaces — not a public review site, but a cozy recommendation layer between friends. Backed by Supabase for auth and data, with live-mode defaults and a setup flow for seeding your own watchlist.",
    role: "Solo builder — Nuxt, Supabase, recommendation UX",
    highlights: [
      "Trusted-space recommendations, not public reviews",
      "Supabase auth and schema migrations",
      "Live demo deployed on Vercel",
    ],
    tech: ["Nuxt", "JavaScript", "Supabase", "Vercel"],
    links: [
      {
        type: "live",
        url: "https://cozy-movie-orcin.vercel.app",
        label: "Live demo",
      },
    ],
    visibility: "private",
  },
  {
    slug: "ecg-simulator",
    title: "ECG Simulator",
    summary:
      "Interactive electrocardiogram waveform simulator for learning and demos.",
    description:
      "A browser-based ECG waveform simulator built with HTML, JavaScript, and Canvas. The idea came from my friend Dr. Ahnaf Md Ishmamuzzaman Chowdhury (JRRMC 24) — useful for visualizing heart rhythm patterns and demonstrating signal concepts without medical hardware.",
    role: "Solo builder — canvas rendering, waveform logic",
    highlights: [
      "Real-time waveform visualization",
      "Zero-backend, runs entirely in the browser",
      "Lightweight demo suitable for teaching contexts",
    ],
    tech: ["HTML", "JavaScript", "Canvas"],
    links: [
      {
        type: "live",
        url: "https://jawad0501.github.io/ecg-simulator/",
        label: "Live demo",
      },
      {
        type: "repo",
        url: "https://github.com/Jawad0501/ecg-simulator",
        label: "View on GitHub",
      },
    ],
    visibility: "public",
  },
];

export const otherExperience = {
  intro:
    "Beyond the case studies above, most of my production work lives in Laravel, WordPress, and Python stacks — often simultaneously.",
  groups: [
    {
      title: "Laravel & PHP",
      items: [
        "Charity platform — full org management with campaigns, zakat calculator, HRM, accounting, and CMS (Laravel + Vue.js)",
        "POS & inventory system with roles, permissions, stock adjustment, and reporting (Laravel + Blade)",
        "Immersive Brands — quotations, order flow, delivery tracking, and internal file manager",
        "Real estate, restaurant, and e-commerce platforms at Lilliput Digital",
      ],
    },
    {
      title: "WordPress",
      items: [
        "Fluent ecosystem plugins at AuthLab",
        "Gemini AI WordPress plugin — early admin AI integration",
        "Agent IDE rules for WordPress — Cursor/Claude skills for plugin dev",
        "REST API tooling for headless and hybrid WordPress apps",
      ],
    },
    {
      title: "Python",
      items: [
        "PVIS — Product Validation Intelligence System",
        "Jarvis — local automation agent",
        "FastAPI and Flask services for APIs and internal tooling",
        "Streamlit prototypes for quick data and ML demos",
      ],
    },
    {
      title: "Frontend & Full-Stack",
      items: [
        "Vue.js SPAs and dashboards — pixel-perfect Figma implementations",
        "Terminal portfolio experiment — command-line style site navigation",
        "TypeScript/React and Nuxt apps deployed on Vercel",
      ],
    },
  ],
};
