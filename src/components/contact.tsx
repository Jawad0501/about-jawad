import { profile } from "@/data/profile";
import { newsletterCopy } from "@/data/newsletter";
import { SubscribeForm } from "@/components/subscribe-form";
import { MailIcon } from "@/components/icons";

type ContactProps = {
  id?: string;
  showCopyright?: boolean;
  className?: string;
};

export function Contact({
  id = "contact",
  showCopyright = true,
  className = "py-24",
}: ContactProps) {
  return (
    <section id={id} className={className}>
      <h2 className="mb-4 font-serif text-2xl text-foreground">Contact</h2>
      <p className="mb-10 text-lg leading-relaxed text-muted">
        {profile.contactMessage}
      </p>

      <div className="mb-12 rounded-xl border border-border p-5 sm:p-6">
        <h3 className="mb-2 font-serif text-xl text-foreground">
          {newsletterCopy.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted">
          {newsletterCopy.intro}
        </p>
        <SubscribeForm />
      </div>

      <a
        href={profile.links.email}
        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
      >
        <MailIcon size={16} />
        Email me directly
      </a>

      {showCopyright ? (
        <p className="mt-12 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      ) : null}
    </section>
  );
}
