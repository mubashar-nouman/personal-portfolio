import { ArrowUpRight, Code2, Layers3, MapPin, MessageSquare } from 'lucide-react';
import Section from '../ui/Section';

const About = () => {
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

  return (
    <Section
      id="about"
      title="Who You'd Be Working With"
      subtitle="Senior Full Stack Engineer specializing in AI-powered SaaS applications"
      className="bg-zinc-100 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="relative overflow-hidden rounded-2xl bg-zinc-900 p-8 text-white dark:border dark:border-zinc-700">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-500/20 blur-2xl" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold shadow-lg shadow-orange-950/30">
                  MN
                </div>
                <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>

              <h3 className="text-xl font-bold">Mubashar Nouman</h3>
              <p className="mt-1 text-sm font-medium text-orange-400">Senior Full Stack Engineer</p>

              <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <MapPin size={17} className="flex-shrink-0 text-orange-400" />
                  Lahore, Pakistan — working across US & EU hours
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <Code2 size={17} className="flex-shrink-0 text-orange-400" />
                  4+ years of experience
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <Layers3 size={17} className="flex-shrink-0 text-orange-400" />
                  AI-powered SaaS products
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <MessageSquare size={17} className="flex-shrink-0 text-orange-400" />
                  Fluent English, weekly demos
                </div>
              </div>

              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-400">
                Start a conversation <ArrowUpRight size={15} />
              </a>
            </div>
          </aside>

          <div className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 lg:col-span-2">
            <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-orange-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-400">
              Professional profile
            </p>
            <h3 className="mt-3 text-xl font-bold leading-snug text-zinc-900 dark:text-white">
              One engineer who can take your product from idea to production.
            </h3>

            <div className="mt-5 space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
              <p>
                Over 4+ years I've built AI SaaS platforms, web apps and mobile apps end to end — most recently
                SkillPet, a gamified learning platform with streaks, achievements and subscription billing.
              </p>
              <p>
                You don't need to assemble a team. I cover architecture, AI integrations, APIs, authentication,
                subscriptions, dashboards, performance and deployment — and I write code your next developer can
                actually pick up.
              </p>
              <p>
                I work in weekly sprints with a demo at the end of each one, so you see real progress instead of
                status updates.
              </p>
            </div>

            <div className="mt-7 border-t border-zinc-200 pt-6 dark:border-zinc-700">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Core toolkit</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span key={technology} className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
