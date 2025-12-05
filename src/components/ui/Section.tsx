import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, spacing = 'lg', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full',
          {
            'py-0': spacing === 'none',
            'py-8 md:py-12': spacing === 'sm',
            'py-12 md:py-16': spacing === 'md',
            'py-16 md:py-24': spacing === 'lg',
            'py-24 md:py-32': spacing === 'xl',
          },
          className
        )}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);
Section.displayName = 'Section';

export { Section };
