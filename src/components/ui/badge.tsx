import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex cursor-default items-center rounded-lg bg-transparent px-2.5 font-semibold',
  {
    variants: {
      variant: {
        default: 'outline outline-1',
        filled: '',
      },
      color: {
        default: 'text-default-500 dark:text-default-400',
        primary: 'text-primary-500 dark:text-primary-400',
      },
      size: {
        default: 'py-1.5 text-sm',
        sm: 'py-1 text-xs',
        lg: 'py-2 text-base',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        color: 'default',
        class:
          'outline-default-400 data-[clickable=true]:hover:outline-default-500 dark:outline-default-500 dark:data-[clickable=true]:hover:outline-default-400',
      },
      {
        variant: 'default',
        color: 'primary',
        class:
          'outline-primary-400 data-[clickable=true]:hover:outline-primary-500 dark:outline-primary-500 dark:data-[clickable=true]:hover:outline-primary-400',
      },
      {
        variant: 'filled',
        color: 'default',
        class:
          'bg-default-100 data-[clickable=true]:hover:bg-default-500 data-[clickable=true]:hover:text-default-50 dark:bg-default-100/10 dark:data-[clickable=true]:hover:bg-default-400',
      },
      {
        variant: 'filled',
        color: 'primary',
        class:
          'bg-primary-100 data-[clickable=true]:hover:bg-primary-500 data-[clickable=true]:hover:text-primary-50 dark:bg-primary-100/10 dark:data-[clickable=true]:hover:bg-primary-400',
      },
    ],
    defaultVariants: {
      variant: 'default',
      color: 'default',
      size: 'default',
    },
  },
);
export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  color?: 'default' | 'primary';
  clickable?: boolean;
  dismissible?: boolean;
}
function Badge({
  className,
  clickable,
  dismissible,
  variant,
  color,
  size,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      data-clickable={clickable}
      className={cn(
        badgeVariants({ variant, color, size, className }),
        {
          'cursor-pointer': clickable,
        },
        className,
      )}
      {...props}
    >
      {children}
      {dismissible && (
        <button id="dismiss-button" className="group ml-1">
          <X
            style={{ width: '1em', height: '1em' }}
            className="stroke-2 group-hover:stroke-[3px]"
          />
        </button>
      )}
    </div>
  );
}
export { Badge, badgeVariants };
