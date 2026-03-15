import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

export default function NavLink({
  href,
  children,
  className,
  isActive = false,
}: Props) {
  return (
    <a href={href} className={cn('group/link relative', className)}>
      <span>{children}</span>
      <svg
        viewBox="0 0 54 6"
        className={cn(
          'pointer-events-none absolute top-full origin-top scale-x-[1.2] scale-y-[1.2] transform',
        )}
      >
        <path
          className={cn(
            'group-hover/link:animate-draw stroke-primary fill-transparent opacity-0 transition-all duration-75 group-hover/link:opacity-100',
            isActive && 'opacity-100 group-hover/link:animate-none',
          )}
          d="M0.349976 0.501996C18.05 0.00199559 35.95 0.302997 53.65 1.402C37.75 1.302 21.95 1.902 6.14997 2.402C20.25 2.702 34.349 3.102 48.549 3.402C35.749 3.703 22.949 3.902 10.249 4.203C20.049 4.002 29.949 4.303 39.749 5.103"
        ></path>
      </svg>
    </a>
  );
}
