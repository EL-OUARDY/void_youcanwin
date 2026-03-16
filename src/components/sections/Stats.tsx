import {
  BookOpenIcon,
  CloudIcon,
  GlobeIcon,
  QrCodeIcon,
  UsersIcon,
} from 'lucide-react';
import { Container } from '../shared/Container';

const stats = [
  {
    label: 'Utilisateurs',
    value: 'De 1K à illimité',
    icon: <UsersIcon className="text-primary size-6" />,
  },
  {
    label: 'QR Codes',
    value: 'Volume adapté',
    icon: <QrCodeIcon className="text-primary size-6" />,
  },
  {
    label: 'Couverture',
    value: 'Local à mondial',
    icon: <GlobeIcon className="text-primary size-6" />,
  },
  {
    label: 'Albums',
    value: 'Standard ou custom',
    icon: <BookOpenIcon className="text-primary size-6" />,
  },
  {
    label: 'Infrastructure',
    value: 'Cloud ou On-Premise',
    icon: <CloudIcon className="text-primary size-6" />,
  },
];

function Stats() {
  return (
    <Container className="stats relative">
      <div className="border-muted grid grid-cols-2 gap-x-4 gap-y-10 border-b py-16 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center"
          >
            <div className="bg-primary/20 group-hover:bg-primary/30 mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
              {stat.icon}
            </div>

            <h4 className="mb-1 text-base font-bold text-slate-900">
              {stat.label}
            </h4>

            <p className="text-xs font-medium text-slate-500 md:text-sm">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Stats;
