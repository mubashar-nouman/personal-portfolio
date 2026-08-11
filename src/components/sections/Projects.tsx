import { useMemo, useState } from 'react';
import { ArrowUpRight, Check, Github, Lock } from 'lucide-react';

import Section from '@/components/layout/Section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { projects } from '@/data';
import type { Project, ProjectCategory } from '@/types';

const filters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'SaaS', label: 'SaaS' },
  { id: 'AI', label: 'AI' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'Web', label: 'Web' },
];

const ProjectLinks = ({ project, className }: { project: Project; className?: string }) => (
  <div className={cn('flex flex-wrap items-center gap-2', className)}>
    {project.demoLink ? (
      <Button asChild size="sm">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          Live demo
          <ArrowUpRight />
        </a>
      </Button>
    ) : (
      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <Lock className="h-3.5 w-3.5" />
        Client project
      </span>
    )}

    {project.codeLink && (
      <Button asChild size="sm" variant="outline">
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          <Github />
          Code
        </a>
      </Button>
    )}
  </div>
);

const TagList = ({ tags, limit }: { tags: string[]; limit?: number }) => {
  const shown = limit ? tags.slice(0, limit) : tags;
  const overflow = limit ? tags.length - shown.length : 0;

  return (
    <ul className="flex flex-wrap gap-1.5">
      {shown.map((tag) => (
        <li key={tag}>
          <Badge variant="secondary">{tag}</Badge>
        </li>
      ))}
      {overflow > 0 && (
        <li>
          <Badge variant="outline">+{overflow}</Badge>
        </li>
      )}
    </ul>
  );
};

const FeaturedProject = ({ project }: { project: Project }) => (
  <article className="grid gap-8 rounded-xl border bg-card p-6 md:p-8 lg:grid-cols-2 lg:gap-12">
    <div className="order-last lg:order-first">
      <div className="flex items-center gap-3">
        <Badge>Featured</Badge>
        <span className="text-sm text-muted-foreground">
          {project.category} · {project.year}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-6 space-y-2.5">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2.5 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <TagList tags={project.tags} />
      </div>

      <ProjectLinks project={project} className="mt-6" />
    </div>

    <div className="overflow-hidden rounded-lg border bg-muted">
      <img
        src={project.image}
        alt={`${project.title} — ${project.tagline}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-left-top"
      />
    </div>
  </article>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-foreground/20">
    <div className="aspect-[16/10] overflow-hidden border-b bg-muted">
      <img
        src={project.image}
        alt={`${project.title} — ${project.tagline}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-semibold tracking-tight">{project.title}</h3>
        <span className="shrink-0 text-xs text-muted-foreground">{project.year}</span>
      </div>

      <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-4">
        <TagList tags={project.tags} limit={4} />
      </div>

      <div className="flex-1" />
      <ProjectLinks project={project} className="mt-5" />
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
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Products I've shipped"
      description="AI-powered SaaS platforms, web applications and mobile apps — taken from first scope through to production."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {availableFilters.map((filter) => (
          <Button
            key={filter.id}
            type="button"
            size="sm"
            variant={activeFilter === filter.id ? 'secondary' : 'ghost'}
            aria-pressed={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={cn(activeFilter === filter.id && 'ring-1 ring-border')}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {featured && <FeaturedProject project={featured} />}

      {rest.length > 0 && (
        <div className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', featured && 'mt-5')}>
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Projects;
