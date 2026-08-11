import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  /** Small uppercase kicker above the title, e.g. "Selected work". */
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  /** Applies a subtle tinted band, used to separate adjacent sections. */
  muted?: boolean;
}

/**
 * One section rhythm for the whole page.
 *
 * Headers are left-aligned rather than centred: a reader scanning down the page
 * follows a single vertical edge instead of re-centring on every band.
 */
const Section = ({ id, eyebrow, title, description, children, className, muted }: SectionProps) => (
  <section id={id} className={cn('py-16 md:py-24', muted && 'bg-muted/40', className)}>
    <div className="container">
      <header className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
        {description && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>}
      </header>

      <div className="mt-10 md:mt-12">{children}</div>
    </div>
  </section>
);

export default Section;
