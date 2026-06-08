import Image from "next/image";
import { profile } from "@/data/profile";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MediumIcon,
} from "@/components/icons";

const socialLinks = [
  { href: profile.links.github, label: "GitHub", icon: GitHubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: profile.links.medium, label: "Medium", icon: MediumIcon },
  { href: profile.links.email, label: "Email", icon: MailIcon },
];

export function Hero() {
  return (
    <section className="py-24">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <Image
          src="/portrait.png"
          alt={profile.name}
          width={120}
          height={120}
          priority
          className="rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-3">
          <p className="text-sm text-muted">{profile.title}</p>
          <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
            {profile.name}
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-sm text-accent transition-colors hover:underline"
          >
            Browse my public repos →
          </a>
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
