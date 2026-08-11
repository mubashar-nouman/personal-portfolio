import { useMemo, useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Calendar, Check, Lock, Zap } from 'lucide-react';
import { projects } from '@/data';
import type { Project, ProjectCategory } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const filters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'SaaS', label: 'SaaS' },
  { id: 'AI', label: 'AI' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'Web', label: 'Web' },
];

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap gap-2">
    {project.demoLink ? (
      <Button asChild size="sm" className="flex-1">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          <ExternalLink />
          Live demo
        </a>
      </Button>
    ) : (
      <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
        <Lock size={14} />
        Client project
      </span>
    )}

    {project.codeLink && (
      <Button asChild size="sm" variant="outline" className="flex-1">
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          <Github />
          Code
        </a>
      </Button>
    )}
  </div>
);

/**
 * Both badges sit bottom-right so they never cover the product logo or nav,
 * which sit top-left in most dashboard screenshots.
 */
const Badges = ({ project }: { project: Project }) => (
  <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
    <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-zinc-800 shadow-sm backdrop-blur-sm">
      <Calendar size={10} className="mr-1" />
      {project.year}
    </span>
    <span className="inline-flex items-center rounded-full bg-orange-600/90 px-2 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
      {project.category}
    </span>
  </div>
);

const FeaturedProject = ({ project }: { project: Project }) => (
  <article className="group mb-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
    <div className="grid lg:grid-cols-2">
      <div className="relative h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-900 lg:h-auto lg:min-h-full">
        <img
          src={project.image}
          alt={`${project.title} — ${project.tagline}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <Badges project={project} />
      </div>

      <div className="flex flex-col justify-center p-5 lg:p-6">
        <Badge variant="accent" className="mb-3 w-fit uppercase tracking-wider">
          Featured case study
        </Badge>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{project.title}</h3>
        <p className="mt-1 text-xs font-medium text-orange-600 dark:text-orange-400">{project.tagline}</p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
              <Check size={16} className="mt-0.5 flex-shrink-0 text-orange-500" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  </article>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
    <div className="relative h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
      <img
        src={project.image}
        alt={`${project.title} — ${project.tagline}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <Badges project={project} />
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
          {project.title}
        </h3>
        <ArrowUpRight
          size={16}
          className="mt-1 flex-shrink-0 text-zinc-400 transition-colors group-hover:text-orange-500"
        />
      </div>

      <p className="text-xs font-medium text-orange-600 dark:text-orange-400">{project.tagline}</p>

      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 4 && <Badge variant="outline">+{project.tags.length - 4}</Badge>}
      </div>

      <div className="mt-5 flex-1" />
      <ProjectLinks project={project} />
    </div>
  </article>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const availableFilters = useMemo(
    () => filters.filter((filter) => filter.id === 'all' || projects.some((p) => p.category === filter.id)),
    []
  );

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter]
  );

  const featured = filteredProjects.find((project) => project.featured);
  const rest = filteredProjects.filter((project) => project !== featured);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-zinc-50 to-zinc-100 px-4 py-14 dark:from-zinc-900 dark:to-zinc-950 md:py-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            <Zap size={14} className="mr-1.5" />
            Selected work
          </div>
          <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            Products I've shipped
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            AI-powered SaaS platforms, web applications and mobile apps — taken from first scope through to production.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {availableFilters.map((filter) => (
            <Button
              key={filter.id}
              type="button"
              size="sm"
              variant="outline"
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
              className={cn(
                'rounded-full',
                activeFilter === filter.id &&
                  'border-orange-300 bg-orange-50 text-orange-800 hover:bg-orange-100 dark:border-orange-700 dark:bg-orange-900/30 dark:text-orange-200'
              )}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {featured && <FeaturedProject project={featured} />}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-zinc-100 md:text-xl">
              Have a project like these in mind?
            </h3>

            <p className="mx-auto mb-6 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              Tell me what you're building and I'll come back with an honest view of scope, timeline and cost — no
              obligation.
            </p>

            <div className="mb-5 flex flex-col justify-center gap-2.5 sm:flex-row">
              <Button asChild>
                <a href="#contact">Book a free discovery call</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/mubashar-nouman" target="_blank" rel="noopener noreferrer">
                  <Github />
                  View GitHub
                </a>
              </Button>
            </div>

            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 dark:border-orange-800 dark:bg-orange-900/20">
              <div className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs font-medium text-orange-800 dark:text-orange-200">
                Currently taking on new client projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
