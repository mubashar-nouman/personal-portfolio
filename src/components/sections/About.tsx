import { ArrowUpRight, Clock, Code2, MapPin, MessageSquare } from 'lucide-react';

import Section from '@/components/layout/Section';
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
  { icon: MapPin, label: 'Lahore, Pakistan — working across US & EU hours' },
  { icon: Code2, label: '4+ years building production software' },
  { icon: Clock, label: 'Weekly sprints, demo at the end of each' },
  { icon: MessageSquare, label: 'Fluent English, direct communication' },
];

const About = () => (
  <Section
    id="about"
    muted
    eyebrow="About"
    title="One engineer, idea to production"
    description="You don't need to assemble a team. I cover architecture, AI integrations, APIs, auth, billing and deployment — and write code your next developer can pick up."
  >
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          Over the past four years I've built AI SaaS platforms, web apps and mobile apps end to end — most
          recently ZygenAI, a support automation product that answers marketplace buyer messages from live order
          data, and SkillPet, a gamified learning platform with subscription billing.
        </p>
        <p>
          My work sits mostly where product meets AI: retrieval pipelines, LLM integrations, and the billing and
          auth layers that turn a demo into something you can actually sell.
        </p>

        <div className="pt-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Core toolkit</p>
          <ul className="flex flex-wrap gap-1.5">
            {technologies.map((technology) => (
              <li key={technology}>
                <Badge variant="secondary">{technology}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <Button asChild variant="outline">
            <a href="#contact">
              Start a conversation
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>

      <ul className="h-fit space-y-4 rounded-xl border bg-card p-6">
        {facts.map((fact) => (
          <li key={fact.label} className="flex gap-3 text-sm text-muted-foreground">
            <fact.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{fact.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default About;
