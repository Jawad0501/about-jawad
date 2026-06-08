import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { MoviesSection } from "@/components/movies-section";
import { Contact } from "@/components/contact";
import { ListenSection } from "@/components/listen-section";
import { profile } from "@/data/profile";
import { hallOfFameMovies, moviesIntro, moviesTitle } from "@/data/movies";
import {
  listenCategories,
  listenIntro,
  listenTitle,
} from "@/data/playlists";
import { getFavoriteMovies, getMovies } from "@/lib/tmdb";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: profile.about[0],
};

export default async function AboutPage() {
  const [weeklyMovies, hallOfFame] = await Promise.all([
    getFavoriteMovies(),
    getMovies(hallOfFameMovies),
  ]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <section className="mb-24">
          <p className="mb-1 text-sm text-muted">{profile.title}</p>
          <h1 className="mb-6 font-serif text-3xl text-foreground">About</h1>
          <p className="leading-relaxed text-muted">{profile.about[0]}</p>
          <Image
            src="/portrait.png"
            alt={profile.name}
            width={140}
            height={186}
            priority
            className="mx-auto my-8 rounded-2xl object-cover"
          />
          <p className="leading-relaxed text-muted">{profile.about[1]}</p>
          <p className="mt-6 text-sm text-muted">{profile.location}</p>
        </section>

        <section className="mb-24">
          <h2 className="mb-3 font-serif text-2xl text-foreground">
            {moviesTitle}
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted">
            {moviesIntro}
          </p>
          <MoviesSection
            weeklyMovies={weeklyMovies}
            hallOfFameMovies={hallOfFame}
          />
        </section>

        <section className="mb-24">
          <h2 className="mb-3 font-serif text-2xl text-foreground">
            {listenTitle}
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted">
            {listenIntro}
          </p>
          <ListenSection categories={listenCategories} />
        </section>

        <Contact showCopyright={false} className="pb-8" />
      </main>
    </>
  );
}
