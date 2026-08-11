import { ExternalLink } from 'lucide-react';

import Section from '@/components/layout/Section';
import { certifications, education } from '@/data';

/**
 * Education and certifications share one band. Separately they were two full
 * sections carrying five short entries between them, which gave a Udemy course
 * the same visual weight as a shipped product.
 */
const Background = () => {
  if (education.length === 0 && certifications.length === 0) return null;

  return (
    <Section id="background" muted eyebrow="Background" title="Education & certifications">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {education.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Education</h3>
            <ul className="mt-5 space-y-6">
              {education.map((item) => (
                <li key={item.id} className="border-t pt-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-medium tracking-tight">{item.degree}</h4>
                    <span className="text-sm text-muted-foreground">{item.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{item.institution}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {certifications.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Certifications</h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((item) => (
                <li key={item.id} className="flex flex-wrap items-baseline justify-between gap-x-4 border-t pt-4">
                  <div>
                    <h4 className="font-medium tracking-tight">{item.title}</h4>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.issuer} · {item.date}
                    </p>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
                    >
                      View
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Background;
