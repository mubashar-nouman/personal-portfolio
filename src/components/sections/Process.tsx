import Section from '../ui/Section';
import { processSteps } from '../../data';

const Process = () => {
  if (processSteps.length === 0) return null;

  return (
    <Section
      id="process"
      title="How We'll Work Together"
      subtitle="A predictable process, so you always know what's happening and what comes next."
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl">
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.id}
              className="relative rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800"
            >
              {/* Connector line between steps on large screens */}
              {index < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-11 hidden h-px w-6 translate-x-full bg-orange-200 dark:bg-orange-500/30 lg:block"
                />
              )}

              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white shadow-sm">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-4 font-bold text-zinc-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Process;
