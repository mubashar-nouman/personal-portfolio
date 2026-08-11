import { ArrowRight, Check, Layout, Server, Smartphone, Sparkles } from 'lucide-react';

import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { services } from '@/data';
import type { Service } from '@/types';

const iconMap: Record<Service['icon'], typeof Sparkles> = {
  sparkles: Sparkles,
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
};

/**
 * Numbered rows rather than a 2x2 card grid. Each service gets one full-width
 * band: index and title on the left, description and deliverables on the right,
 * so the deliverables are readable as a list instead of cramped into a column.
 */
const Services = () => {
  if (services.length === 0) return null;

  return (
    <Section
      id="services"
      title="How I Can Help"
      subtitle="Whether you need a full product built or an existing one taken further, here's what I take on for clients."
      className="bg-zinc-100 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.id}
                className="group grid gap-x-8 gap-y-4 border-b border-zinc-200 p-6 transition-colors last:border-b-0 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/60 md:grid-cols-[minmax(0,15rem)_1fr] md:p-7"
              >
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 transition-colors group-hover:bg-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:ring-orange-500/20">
                    <Icon size={19} />
                  </span>

                  <div>
                    <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-bold leading-snug text-zinc-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{service.description}</p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <Check size={15} className="mt-0.5 shrink-0 text-orange-500" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-950 sm:flex-row sm:text-left">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white">Not sure which of these you need?</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Tell me what you're building and I'll come back with an honest view of scope and cost.
            </p>
          </div>

          <Button asChild className="shrink-0">
            <a href="#contact">
              Tell me about your project
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Services;
