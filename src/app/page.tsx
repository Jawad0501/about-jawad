import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Writing } from "@/components/writing";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6">
        <Hero />
        <Writing />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
