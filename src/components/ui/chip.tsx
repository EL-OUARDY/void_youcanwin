import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
}

function Chip({ children, className }: Props) {
  return (
    <span
      className={cn(
        'text-primary-strong bg-primary/20 rounded-2xl px-2 text-[0.6rem]',
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Chip;
