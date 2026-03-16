import { cn } from '../lib/utils';

interface Props {
  className?: string;
}

function AppMockup({ className }: Props) {
  return <div className={cn('bg-muted aspect-2/3', className)}>AppMockup</div>;
}

export default AppMockup;
