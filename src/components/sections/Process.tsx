import Section from '@/components/layout/Section';
import { processSteps } from '@/data';

const Process = () => {
  if (processSteps.length === 0) return null;

  return (
    <Section
      id="process"
      eyebrow="Process"
      title="How we'll work together"
      description="A predictable process, so you always know what's happening and what comes next."
    >
      <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <li key={step.id} className="border-t pt-5">
            <span className="text-xs font-semibold tabular-nums text-primary">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Process;
