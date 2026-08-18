import { ArrowUpRight, Clock, Code2, MapPin, MessageSquare } from 'lucide-react';

import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'OpenAI API',
  'PostgreSQL',
  'MongoDB',
];

const facts = [
  { icon: MapPin, label: 'Based in Lahore', value: 'Working across US & EU hours' },
  { icon: Code2, label: '4+ years', value: 'Building production software' },
  { icon: Clock, label: 'Weekly sprints', value: 'A working demo at the end of each' },
  { icon: MessageSquare, label: 'Fluent English', value: 'Direct, no-jargon updates' },
];

const stats = [
  { value: '9', label: 'Products shipped' },
  { value: '4+', label: 'Years experience' },
  { value: '24h', label: 'Reply time' },
];

/**
 * Type sits on the site's standard scale — 14px body, 12px labels — rather
 * than the 12-18px spread the previous version used.
 */
const About = () => (
  <Section
    id="about"
    title="Who You'd Be Working With"
    subtitle="Senior Full Stack Engineer specializing in AI-powered SaaS applications"
    className="bg-zinc-100 dark:bg-zinc-950"
  >
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        {/* Profile */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-sm font-bold text-white dark:bg-orange-500">
              MN
            </span>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Mubashar Nouman</h3>
              <p className="text-xs font-medium text-orange-600 dark:text-orange-400">
                Senior Full Stack Engineer
              </p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available
            </span>
          </div>

          <div className="mt-5 space-y-3 border-t border-zinc-200 pt-5 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
            <p>
              Over the past four years I've built AI SaaS platforms, web apps and mobile apps end to end — most
              recently ZygenAI, a support automation product answering marketplace buyer messages from live order
              data.
            </p>
            <p>
              You don't need to assemble a team. I cover architecture, AI integrations, APIs, authentication,
              billing, dashboards and deployment — and I write code your next developer can actually pick up.
            </p>
          </div>

          <div className="mt-5 border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Core toolkit
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {technologies.map((technology) => (
                <li key={technology}>
                  <Badge variant="secondary">{technology}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <Button asChild size="sm">
              <a href="#contact">
                Start a conversation
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>

        {/* Facts + stats */}
        <div className="space-y-5">
          <ul className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {facts.map((fact, index) => (
              <li
                key={fact.label}
                className={
                  index === 0
                    ? 'flex items-start gap-3'
                    : 'mt-4 flex items-start gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800'
                }
              >
                <fact.icon size={15} className="mt-0.5 shrink-0 text-orange-500" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{fact.label}</p>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{fact.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <dl className="grid grid-cols-3 gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xs">
                  <span className="block text-lg font-bold text-zinc-900 dark:text-white">{stat.value}</span>
                  <span className="mt-0.5 block leading-tight text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
