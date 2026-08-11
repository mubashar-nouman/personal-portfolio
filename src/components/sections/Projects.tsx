import { ArrowUpRight, ExternalLink, Github, Lock, Zap } from 'lucide-react';

import { projects } from '@/data';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/** How many projects get the full-width showcase treatment. */
const SHOWCASE_COUNT = 3;

const ProjectLinks = ({ project, size = 'sm' }: { project: Project; size?: 'sm' | 'default' }) => (
  <div className="flex flex-wrap items-center gap-2">
    {project.demoLink ? (
      <Button asChild size={size}>
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          <ExternalLink />
          Live demo
        </a>
      </Button>
    ) : (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        <Lock size={13} />
        Client project
      </span>
    )}

    {project.codeLink && (
      <Button asChild size={size} variant="outline">
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          <Github />
          Code
        </a>
      </Button>
    )}
  </div>
);

const Meta = ({ project }: { project: Project }) => (
  <div className="flex items-center gap-2">
    <Badge className="bg-orange-600 text-white dark:bg-orange-500">{project.category}</Badge>
    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{project.year}</span>
  </div>
);

/**
 * Screenshots are cropped from the top-left, where product logos and navigation
 * usually sit, so a card stays identifiable even at small sizes.
 */
const Shot = ({ project, className }: { project: Project; className?: string }) => (
  <img
    src={project.image}
    alt={`${project.title} — ${project.tagline}`}
    loading="lazy"
    decoding="async"
    className={cn('h-full w-full object-cover object-left-top', className)}
  />
);

/** Full-width alternating row for the lead projects. */
const ShowcaseProject = ({ project, index }: { project: Project; index: number }) => {
  const flipped = index % 2 === 1;

  return (
    <article className="grid items-center gap-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 lg:grid-cols-2 lg:gap-10 lg:p-6">
      <div
        className={cn(
          'overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950',
          flipped && 'lg:order-2'
        )}
      >
        <div className="aspect-[16/10]">
          <Shot project={project} className="transition-transform duration-500 hover:scale-[1.02]" />
        </div>
      </div>

      <div className={cn(flipped && 'lg:order-1')}>
        <Meta project={project} />

        <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-white lg:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-orange-600 dark:text-orange-400">{project.tagline}</p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
};

/** Compact card for everything past the showcase. */
const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-orange-500/50">
    <div className="aspect-[16/10] overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
      <Shot project={project} className="transition-transform duration-500 group-hover:scale-105" />
    </div>

    <div className="flex flex-1 flex-col p-4">
      <Meta project={project} />

      <div className="mt-2.5 flex items-start justify-between gap-2">
        <h3 className="text-sm font-bold leading-snug text-zinc-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
          {project.title}
        </h3>
        <ArrowUpRight
          size={14}
          className="mt-0.5 shrink-0 text-zinc-400 transition-colors group-hover:text-orange-500"
        />
      </div>

      <p className="mt-0.5 text-xs font-medium text-orange-600 dark:text-orange-400">{project.tagline}</p>
      <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1">
        {project.tags.slice(0, 3).map((tag) => (
          <li key={tag}>
            <Badge variant="secondary" className="text-[10px]">
              {tag}
            </Badge>
          </li>
        ))}
        {project.tags.length > 3 && (
          <li>
            <Badge variant="outline" className="text-[10px]">
              +{project.tags.length - 3}
            </Badge>
          </li>
        )}
      </ul>

      <div className="flex-1" />
      <div className="mt-4">
        <ProjectLinks project={project} />
      </div>
    </div>
  </article>
);

const Projects = () => {
  // No filtering, so everything is visible. Projects with a live link lead:
  // the showcase slots are the most prominent, and a visitor can click through
  // from them. Featured breaks ties, then source order.
  const ordered = [...projects].sort(
    (a, b) =>
      Number(Boolean(b.demoLink)) - Number(Boolean(a.demoLink)) ||
      Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );
  const showcase = ordered.slice(0, SHOWCASE_COUNT);
  const rest = ordered.slice(SHOWCASE_COUNT);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-zinc-50 to-zinc-100 px-4 py-14 dark:from-zinc-900 dark:to-zinc-950 md:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            <Zap size={14} className="mr-1.5" />
            Selected work
          </div>
          <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            Products I've shipped
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            AI-powered SaaS platforms, web applications and mobile apps — taken from first scope through to
            production.
          </p>
        </div>

        <div className="space-y-5">
          {showcase.map((project, index) => (
            <ShowcaseProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-12">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:text-left">
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Have a project like these in mind?</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Tell me what you're building and I'll come back with an honest view of scope, timeline and cost.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap justify-center gap-2">
              <Button asChild>
                <a href="#contact">Book a free discovery call</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/mubashar-nouman" target="_blank" rel="noopener noreferrer">
                  <Github />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
