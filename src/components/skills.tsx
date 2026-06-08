import { profile } from "@/data/profile";

export function Skills() {
  return (
    <section id="stack" className="py-0">
      <h2 className="mb-3 font-serif text-2xl text-foreground">
        Skills & Stack
      </h2>
      <p className="mb-8 text-muted">{profile.focus}</p>
      <div className="space-y-8">
        {profile.skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
