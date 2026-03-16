import {
  LifeBuoyIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-react';
import { Container } from '../shared/Container';

const numbers = [
  {
    label: 'Interactions mensuelles',
    value: '500K+',
    icon: <TrendingUpIcon className="text-primary size-8 stroke-2" />,
  },
  {
    label: 'Marques partenaires',
    value: '50+',
    icon: <UsersIcon className="text-primary size-8 stroke-2" />,
  },
  {
    label: 'Taux de satisfaction',
    value: '98%',
    icon: <StarIcon className="text-primary size-8 stroke-2" />,
  },
  {
    label: 'Support technique',
    value: '24/7',
    icon: <LifeBuoyIcon className="text-primary size-8 stroke-2" />,
  },
];

function SocialProof() {
  return (
    <Container className="social-proof relative py-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {numbers.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4">{item.icon}</div>

            <span className="mb-2 text-2xl font-black md:text-3xl">
              {item.value}
            </span>

            <p className="text-muted-foreground text-sm font-medium md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default SocialProof;
