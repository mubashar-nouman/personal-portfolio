import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Same centred layout and orange rule as before — only the scale changed.
 * Headings were 36px and subtitles 18px, which read as oversized on desktop;
 * they now top out at 30px and 16px, and vertical padding is tightened.
 */
const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={cn('px-4 py-14 md:py-20', className)}>
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto max-w-2xl text-base text-zinc-600 dark:text-zinc-300">{subtitle}</p>
          )}
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-500" />
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
