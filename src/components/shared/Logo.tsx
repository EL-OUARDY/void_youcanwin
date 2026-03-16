import { TrophyIcon } from 'lucide-react';
import { APP_NAME } from '../../lib/constants';
import Chip from '../ui/chip';
import { cn } from '../../lib/utils';

interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  return (
    <a
      href="#"
      className={cn('flex items-center gap-2 text-xl font-bold', className)}
      aria-label={APP_NAME}
    >
      <TrophyIcon className="corner-squircle from-primary to-primary-strong size-8 rounded-xl bg-linear-to-r stroke-white stroke-2 p-2" />

      <span className="">
        <span className="text-destructive">You</span>
        can
        <span className="text-primary">win</span>
      </span>

      <Chip>GAMES</Chip>
    </a>
  );
}

export default Logo;
