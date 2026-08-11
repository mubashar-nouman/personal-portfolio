import Section from '@/components/layout/Section';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data';

/**
 * Most recent first, on a single left rule. The previous version reversed into
 * chronological order, which buried the current role at the bottom.
 */
const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Where I've worked">
    <ol className="relative border-l pl-6 md:pl-8">
      {experiences.map((job) => (
        <li key={job.id} className="pb-10 last:pb-0">
          <span
            className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary"
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold tracking-tight">{job.position}</h3>
            <span className="text-sm text-muted-foreground">{job.duration}</span>
          </div>

          <p className="mt-1 text-sm font-medium text-primary">
            {job.company}
            {job.location && <span className="text-muted-foreground"> · {job.location}</span>}
          </p>

          <ul className="mt-4 space-y-2">
            {job.description.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {job.technologies.map((tech) => (
              <li key={tech}>
                <Badge variant="outline">{tech}</Badge>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
