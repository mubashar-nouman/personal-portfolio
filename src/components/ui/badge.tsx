import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-orange-600 text-white',
        secondary: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300',
        outline: 'border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400',
        accent:
          'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
