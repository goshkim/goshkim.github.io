import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { type AnchorHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const linkVariants = cva('inline-flex items-center underline-offset-2', {
  variants: {
    color: {
      default: 'text-default-500 dark:text-default-400',
      primary: 'text-primary-500 dark:text-primary-400',
    },
    underline: {
      default: 'underline',
      none: 'no-underline',
      hover: 'hover:underline',
    },
  },
  defaultVariants: {
    color: 'default',
    underline: 'default',
  },
});
interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  color?: 'default' | 'primary';
  asChild?: boolean;
  isExternal?: boolean;
}
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, color, underline, asChild = false, isExternal = false, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'a';
    return (
      <Comp
        className={cn(linkVariants({ color, underline, className }))}
        ref={ref}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
        {isExternal && (
          <ExternalLinkIcon
            strokeWidth={2}
            style={{ width: '1em', height: '1em' }}
            className="ml-1"
          />
        )}
      </Comp>
    );
  },
);
Link.displayName = 'Link';
export { Link, linkVariants };
