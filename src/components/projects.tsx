import { caseStudies } from "@/data/case-studies";
import { CaseStudyGrid } from "@/components/case-study-grid";
import { OtherExperience } from "@/components/other-experience";

export function Projects() {
  return (
    <section id="work" className="py-24">
      <div className="mb-8">
        <h2 className="font-serif text-2xl text-foreground">Case Studies</h2>
        <p className="mt-2 text-sm text-muted">
          Selected work across AI automation, WordPress, and full-stack builds.
          Click a card for details.
        </p>
      </div>
      <CaseStudyGrid studies={caseStudies} />
      <OtherExperience />
    </section>
  );
}
