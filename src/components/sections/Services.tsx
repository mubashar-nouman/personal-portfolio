import { ArrowRight, Check, Layout, Server, Smartphone, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
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
      title="How I Can Help"
      subtitle="Whether you need a full product built or an existing one taken further, here's what I take on for clients."
      className="bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-orange-500/50"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-bold text-zinc-900 dark:text-white">{service.title}</h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{service.description}</p>

                <ul className="mt-5 space-y-2 border-t border-zinc-100 pt-5 dark:border-zinc-700">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300"
                    >
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-orange-500" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
          >
            Not sure which fits? Tell me about your project
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Services;
