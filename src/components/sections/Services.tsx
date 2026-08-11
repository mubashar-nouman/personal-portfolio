import { ArrowRight, Check, Layout, Server, Smartphone, Sparkles } from 'lucide-react';

import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { services } from '@/data';
import type { Service } from '@/types';

const iconMap: Record<Service['icon'], typeof Sparkles> = {
  sparkles: Sparkles,
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
};

const Services = () => {
  if (services.length === 0) return null;

  return (
    <Section
      id="services"
      muted
      eyebrow="Services"
      title="How I can help"
      description="Whether you need a full product built or an existing one taken further, here's what I take on for clients."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = iconMap[service.icon];

          return (
            <article key={service.id} className="rounded-xl border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-semibold tracking-tight">{service.title}</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

              <ul className="mt-5 space-y-2 border-t pt-5">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="mt-6">
        <Button asChild variant="link" className="px-0">
          <a href="#contact">
            Not sure which fits? Tell me about your project
            <ArrowRight />
          </a>
        </Button>
      </div>
    </Section>
  );
};

export default Services;
