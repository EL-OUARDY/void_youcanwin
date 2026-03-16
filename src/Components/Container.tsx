import { type ElementType, type ReactNode, forwardRef } from 'react';
import { cn } from '../lib/utils';

interface Props {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export const Container = forwardRef<HTMLElement, Props>(
  ({ as: Comp = 'section', className, children, ...rest }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn('overflow-hidden px-6', className)}
        {...rest}
      >
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </Comp>
    );
  },
);

Container.displayName = 'Container';
