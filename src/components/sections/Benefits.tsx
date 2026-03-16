import { HeartIcon, WaypointsIcon, ZapIcon } from 'lucide-react';
import { Container } from '../shared/Container';

const features = [
  {
    title: 'Engagement immédiat',
    desc: 'Chaque produit devient une opportunité de jeu',
    icon: <ZapIcon className="size-6" />,
  },
  {
    title: 'Fidélisation naturelle',
    desc: 'Les clients reviennent pour compléter leur collection',
    icon: <HeartIcon className="size-6" />,
  },
  {
    title: 'Viralité organique',
    desc: 'Les fans partagent et échangent entre eux',
    icon: <WaypointsIcon className="size-6" />,
  },
];

function Benefits() {
  return (
    <Container className="benefits relative py-24 text-center text-white">
      {/* Gradient background */}
      <div className="from-primary to-primary-strong absolute inset-0 -z-100 size-full bg-linear-to-r" />

      {/* Header Section */}
      <h2 className="mb-4 text-3xl leading-tight font-bold capitalize">
        Un parcours client simple et engageant
      </h2>
      <p className="text-muted mx-auto mb-7 max-w-md text-center leading-relaxed">
        De l'achat du produit à la récompense, en 5 étapes
      </p>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md transition-all hover:bg-white/20"
          >
            {/* Icon Container */}
            <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-white/20 shadow-inner">
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="mb-3 text-xl font-bold text-white">
              {feature.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Benefits;
