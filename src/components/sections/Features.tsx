import {
  Calendar1Icon,
  ChartNoAxesColumnIncreasingIcon,
  CheckCircle2Icon,
  GiftIcon,
  GridIcon,
  LayersIcon,
} from 'lucide-react';
import { Container } from '../shared/Container';
import { buttonVariants } from '../ui/button';
import clsx from 'clsx';
import Chip from '../ui/chip';

const features = [
  {
    icon: <GridIcon />,
    title: 'Activation instantanée',
    desc: 'QR codes uniques sur chaque produit',
  },
  {
    icon: <LayersIcon />,
    title: 'Collection digitale',
    desc: 'Cartes de joueurs, raretés, échanges',
  },
  {
    icon: <GiftIcon />,
    title: 'Récompenses exclusives',
    desc: 'Tirages au sort, lots partenaires, expériences VIP',
  },
  {
    icon: <ChartNoAxesColumnIncreasingIcon />,
    title: 'Analytics avancés',
    desc: 'Dashboard temps réel, insights consommateurs',
  },
];

function Features() {
  return (
    <Container className="features relative py-24">
      {/* Gradient background */}
      <div className="to-muted/20 absolute inset-0 -z-100 size-full bg-linear-to-br from-white" />

      <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2 md:gap-12">
        {/* Image */}
        <div className="grid justify-center md:justify-end lg:pr-12">
          <div className="aspect-3/4 max-h-125 overflow-hidden rounded-2xl">
            <img
              src="/assets/img/ball.webp"
              alt="Football on pitch"
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Badge */}
          <Chip className="text-primary mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium">
            <CheckCircle2Icon className="text-primary size-4" />
            Solution complète
          </Chip>

          <h2 className="mb-4 max-w-[24rem] text-3xl leading-tight font-bold capitalize">
            Le terrain de jeu digital de votre marque
          </h2>

          <p className="text-muted-foreground mb-7 max-w-md text-sm leading-relaxed">
            YouCanWin transforme vos produits en expériences interactives.
            Chaque achat devient une opportunité d'engagement avec vos
            consommateurs.
          </p>

          {/* Feature list */}
          <ul className="mb-8 space-y-4">
            {features.map(({ icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="bg-primary/20 text-primary flex size-8 items-center justify-center rounded-md stroke-2 p-2">
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-muted-foreground text-xs">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#"
            className={clsx(
              'flex w-fit items-center gap-2',
              buttonVariants({ variant: 'danger' }),
            )}
          >
            <span>Planifier une démo</span>
            <Calendar1Icon className="size-4" />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Features;
