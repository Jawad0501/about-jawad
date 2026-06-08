/**
 * Listen section — three categories, each with YouTube links (opens on YouTube).
 *
 * To add a link, paste any YouTube URL:
 *   https://www.youtube.com/watch?v=VIDEO_ID
 *   https://youtu.be/VIDEO_ID
 *   https://www.youtube.com/playlist?list=PLAYLIST_ID
 */
export type ListenItem = {
  title: string;
  url: string;
  description?: string;
};

export type ListenCategoryId = "music" | "podcast" | "spark";

export type ListenCategory = {
  id: ListenCategoryId;
  cardLabel: string;
  cardHint: string;
  subtitle: string;
  description: string;
  items: ListenItem[];
};

export const listenTitle = "Listen";

export const listenIntro =
  "Music for focus, podcasts for walks, and videos that sparked something — saved here so I can find them again. Tap a category to browse; links open on YouTube.";

export const listenCategories: ListenCategory[] = [
  {
    id: "music",
    cardLabel: "Music",
    cardHint: "What I code to",
    subtitle: "Background tracks for long sessions",
    description:
      "Albums, playlists, and live sets I put on when I need to stay in the zone. Nothing fancy — just what actually works.",
    items: [
      {
        title: "AC/DC, Led Zeppelin & Guns N' Roses – Powerhouse Hard Rock with Head-Banging Riffs | AI Mix",
        url: "https://www.youtube.com/watch?v=euDiWvtTWSk",
        description: "Blues Rock Jam Radio",
      },
      {
        title: "Wake up to the rhythm of pure joy: Smooth Samurai Reggae Jazz for a bright start | 50min",
        url: "https://www.youtube.com/watch?v=7Y5n4D98EpY",
        description: "SamuraiWorkTunes",
      },
    ],
  },
  {
    id: "podcast",
    cardLabel: "Podcasts",
    cardHint: "For walks and downtime",
    subtitle: "Conversations worth replaying",
    description:
      "Episodes and channels I listen to when I'm away from the desk — cooking, walking, or winding down after a build.",
    items: [
      {
        title: "Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan",
        url: "https://www.youtube.com/watch?v=96jN2OCOfLs",
        description: "Andrej Karpathy (co-founder of OpenAI, former head of AI at Tesla, and now founder of Eureka Labs) talks with Sequoia partner Stephanie Zhan at AI Ascent 2026 about what's changed in the year since he coined vibe coding. He explains why he's never felt more behind as a programmer, why agentic engineering is the more serious discipline taking shape on top of vibe coding, and why we should think of LLMs not as animals but as ghosts: jagged, statistical, summoned entities that require a new kind of taste and judgment to direct. He also touches on Software 3.0, the limits of verifiability, and why you can outsource your thinking but never your understanding.",
      },
      {
        title: "Ex-Google Exec: How to Position Yourself Now Before the Next AI Phase (2026–2027) | Mo Gawdat",
        url: "https://www.youtube.com/watch?v=E0Q96IKXx6Q",
        description: "Mo Gawdat spent 12 years at Google, wrote Scary Smart, and now predicts 12–15 years of disruption before things get better. In this episode, he breaks down the 7 forces already reshaping jobs and power, why 23–30% of new grad hiring has collapsed, and how he built an AI startup in 6 weeks instead of 4 years. Mo Gawdat is former Chief Business Officer at Google X and one of the few tech insiders saying out loud what most are only thinking.",
      },
    ],
  },
  // {
  //   id: "spark",
  //   cardLabel: "What Sparked My Interest",
  //   cardHint: "Talks, ideas, rabbit holes",
  //   subtitle: "Videos that changed how I think",
  //   description:
  //     "Conference talks, tutorials, and random deep dives that sent me down a new path. The stuff I'd send a friend at 11pm with 'you need to watch this.'",
  //   items: [
  //     {
  //       title: "Replace with your pick",
  //       url: "https://www.youtube.com/watch?v=REPLACE_ME",
  //       description: "Paste a YouTube video or playlist URL above.",
  //     },
  //   ],
  // },
];
