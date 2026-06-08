import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="mb-8 font-serif text-2xl text-foreground">Experience</h2>
      <div className="space-y-8">
        {profile.experience.map((job) => (
          <div key={job.role + job.company} className="flex flex-col gap-1">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-medium text-foreground">
                {job.role}
                <span className="text-muted"> · {job.company}</span>
              </h3>
              <span className="shrink-0 text-sm text-muted">{job.period}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {job.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t border-border pt-8">
        <h3 className="mb-1 font-medium text-foreground">Education</h3>
        <p className="text-sm text-muted">
          {profile.education.degree} — {profile.education.school} (
          {profile.education.year})
        </p>
      </div>
    </section>
  );
}
