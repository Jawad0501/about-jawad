export const profile = {
  name: "Nowshad Jawad",
  fullName: "Abu Nowshad Md Jawad",
  title: "Software Engineer - Writer",
  focus:
    "AI automation and WordPress plugins — with full-stack PHP and Python when the problem needs it.",
  tagline:
    "I automate workflows, build WordPress plugins, and ship with Laravel, FastAPI, and Flask.",
  bio: "Software Engineer at AuthLab, where I work on WordPress products used by over a million businesses. My day-to-day centers on AI automation and plugin development; when a problem outgrows WordPress, I reach for Laravel, FastAPI, or Flask. I write about what I learn on Medium and share open repos on GitHub.",
  about: [
    "I'm a software engineer in Sylhet, building WordPress plugins at AuthLab — products that real businesses rely on every day. Most of my work sits at the intersection of WordPress, AI automation, and the occasional Laravel or Python side quest when a problem outgrows the CMS.",
    "Away from the keyboard, I'm usually watching a film properly, queueing music for a long coding session, or saving a podcast or YouTube talk for later. This page is where I keep track of that stuff — the homepage is the résumé, down here is the personal side.",
  ],
  location: "Sylhet, Bangladesh",
  githubUsername: "Jawad0501",
  contactMessage:
    "Questions, collabs, or just want to say hi — I read everything. Subscribe below if you'd rather get a ping when I share something new.",
  links: {
    github: "https://github.com/Jawad0501",
    linkedin:
      "https://www.linkedin.com/in/abu-nowshad-md-jawad-5b0473206/",
    medium: "https://medium.com/@anmjawad007",
    email: "mailto:anmjawad007@gmail.com",
  },
  skills: [
    {
      category: "AI & Automation",
      items: [
        "AI agent workflows",
        "IDE rules & skills",
        "Coordinator architectures",
        "Local LLMs (Ollama)",
      ],
    },
    {
      category: "WordPress",
      items: [
        "Plugin development",
        "REST API",
        "WPFluent / Fluent ecosystem",
        "Headless WordPress",
      ],
    },
    {
      category: "PHP Stack",
      items: ["Laravel", "WordPress / PHP", "Blade", "MySQL"],
    },
    {
      category: "Python Stack",
      items: ["FastAPI", "Flask", "Django", "Streamlit"],
    },
    {
      category: "Frontend",
      items: ["Vue.js", "React", "Tailwind CSS", "TypeScript"],
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "AuthLab",
      period: "Sep 2024 — Present",
      description:
        "Building WordPress plugins and products for small businesses — part of the team behind Fluent Forms, FluentCRM, FluentSupport, and the WPManageNinja ecosystem.",
    },
    {
      role: "Technical Lead",
      company: "Lilliput Digital",
      period: "Jan 2024 — Sep 2024",
      description:
        "Led full-stack development, system architecture, and Agile delivery for real estate, restaurant, and e-commerce platforms.",
    },
    {
      role: "Software Engineer",
      company: "Lilliput Digital",
      period: "Feb 2023 — Dec 2023",
      description:
        "Developed full-stack solutions for real estate, restaurant, and e-commerce management platforms.",
    },
    {
      role: "Software Developer",
      company: "UI Lib",
      period: "Feb 2022 — Feb 2023",
      description:
        "Built web applications, UI kits, templates, and themes with Vue.js, Laravel, and modern frontend tooling.",
    },
  ],
  education: {
    degree: "BSc (Engg) in Computer Science & Engineering",
    school: "North East University Bangladesh",
    year: "2022",
  },
} as const;
