import { otherExperience } from "@/data/case-studies";

export function OtherExperience() {
  return (
    <section className="mt-16 border-t border-border pt-16">
      <h3 className="mb-3 font-serif text-xl text-foreground">
        Other Experience
      </h3>
      <p className="mb-8 text-sm leading-relaxed text-muted">
        {otherExperience.intro}
      </p>
      <div className="space-y-8">
        {otherExperience.groups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted">
              {group.title}
            </h4>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['–']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
