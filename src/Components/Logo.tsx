import { TrophyIcon } from 'lucide-react';
import { APP_NAME } from '../lib/constants';
import Chip from './ui/chip';

function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 text-xl font-bold"
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
