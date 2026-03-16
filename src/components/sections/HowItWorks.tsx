import { GiftIcon } from 'lucide-react';
import { Container } from '../shared/Container';

const steps = [
  {
    id: 1,
    title: 'Achat produit',
    desc: 'Le client achète votre produit en magasin',
    icon: <GiftIcon />,
    class: 'text-primary',
  },
  {
    id: 2,
    title: 'Scan QR Code',
    desc: "Il scanne le code sur l'emballage",
    icon: <GiftIcon />,
    class: 'text-primary',
  },
  {
    id: 3,
    title: 'Déblocage carte',
    desc: 'Une carte digitale est débloquée',
    icon: <GiftIcon />,
    class: 'text-primary',
  },
  {
    id: 4,
    title: 'Collection',
    desc: 'Il complète sa collection',
    icon: <GiftIcon />,
    class: 'text-destructive',
  },
  {
    id: 5,
    title: 'Récompenses',
    desc: 'Participe aux tirages',
    icon: <GiftIcon />,
    class: 'text-destructive',
  },
];

function HowItWorks() {
  return (
    <Container className="how-it-works py-24 text-center">
      {/* Header Section */}
      <h2 className="mb-4 text-3xl leading-tight font-bold capitalize">
        Un parcours client simple et engageant
      </h2>
      <p className="text-muted-foreground mx-auto mb-7 max-w-md text-center leading-relaxed">
        De l'achat du produit à la récompense, en 5 étapes
      </p>

      {/* Grid Container */}
      <div className="mt-16 grid grid-cols-2 gap-x-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step ${step.class} group relative flex flex-col items-center`}
          >
            {/* Badge */}
            <div className="absolute -top-2 right-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-current text-xs font-bold md:right-8">
              <span className="text-white">{step.id}</span>
            </div>

            {/* Icon Card */}
            <div className="bg-background mb-6 flex size-16 items-center justify-center rounded-2xl border border-current/40 shadow-sm">
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </span>
            </div>

            {/* Text Content */}
            <h3 className="text-foreground mb-2 text-lg leading-tight font-bold">
              {step.title}
            </h3>
            <p className="text-muted-foreground px-2 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default HowItWorks;
