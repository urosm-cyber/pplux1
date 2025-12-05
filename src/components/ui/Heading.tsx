import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xl' | 'lg' | 'md' | 'sm';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as: Component = 'h2', size = 'lg', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-heading font-medium leading-tight text-foreground',
          {
            'text-4xl md:text-5xl lg:text-6xl': size === 'xl',
            'text-3xl md:text-4xl lg:text-5xl': size === 'lg',
            'text-2xl md:text-3xl': size === 'md',
            'text-xl md:text-2xl': size === 'sm',
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Heading.displayName = 'Heading';

export { Heading };
