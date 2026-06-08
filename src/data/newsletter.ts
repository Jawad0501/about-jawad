export type NewsletterTopicId =
  | "movies"
  | "music"
  | "podcasts"
  | "writing"
  | "repos";

export type NewsletterTopic = {
  id: NewsletterTopicId;
  label: string;
  description: string;
};

export const newsletterTopics: NewsletterTopic[] = [
  {
    id: "movies",
    label: "Movies",
    description: "Weekly watchlist updates",
  },
  {
    id: "music",
    label: "Music",
    description: "New playlists and tracks",
  },
  {
    id: "podcasts",
    label: "Podcasts",
    description: "Shows and episodes I save",
  },
  {
    id: "writing",
    label: "Writing",
    description: "New Medium posts",
  },
  {
    id: "repos",
    label: "Repos",
    description: "New or notable GitHub projects",
  },
];

export const newsletterCopy = {
  title: "Subscribe",
  intro:
    "When I update my weekly movies, music, podcasts, writing, or repos — subscribers get a heads-up. If you find what I share useful, drop your email and pick what you want to hear about.",
  success:
    "You're on the list. I'll only email when something you've picked actually updates.",
  submitLabel: "Subscribe",
};
