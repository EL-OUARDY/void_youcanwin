import clsx from 'clsx';
import { Container } from '../shared/Container';
import { CheckIcon, GlobeIcon, TrendingUpIcon, ZapIcon } from 'lucide-react';
import { buttonVariants } from '../ui/button';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Campagne locale',
    description: 'Idéal pour tester sur un marché',
    icon: <ZapIcon className="text-green-600" />,
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      '1 pays / région',
      'Album standard (équipe nationale)',
      'Hébergement Cloud sécurisé',
      'Backoffice simplifié',
      'Support par email',
      '1 marque',
    ],
    buttonText: 'Demander un devis',
    featured: false,
    color: 'green',
  },
  {
    name: 'Scale',
    subtitle: 'Expansion nationale',
    description: "Pour des campagnes d'envergure",
    icon: <TrendingUpIcon className="text-destructive" />,
    features: [
      "Jusqu'à 50 000 utilisateurs",
      'QR codes illimités',
      "Multi-pays (jusqu'à 5)",
      'Album complet (toutes les équipes)',
      'Cloud ou On-Premise',
      'Backoffice avancé avec analytics',
      'Support prioritaire 24/7',
      "Jusqu'à 3 marques",
      'API REST disponible',
    ],
    buttonText: 'Planifier une démo',
    featured: true,
    color: 'red',
  },
  {
    name: 'Enterprise',
    subtitle: 'Solution globale',
    description: 'Pour les groupes internationaux',
    icon: <GlobeIcon className="text-green-600" />,
    features: [
      'Utilisateurs illimités',
      'QR codes illimités',
      'Déploiement mondial',
      'Albums personnalisés par région',
      'Infrastructure dédiée (On-Premise)',
      'Multi-marques illimité',
      'Développements sur-mesure',
      'Account manager dédié',
      'SLA garanti 99.9%',
      'Formation et onboarding complet',
    ],
    buttonText: 'Contactez-nous',
    featured: false,
    color: 'green',
  },
];

function PricingTable() {
  return (
    <Container className="pricing-table py-24 text-center">
      {/* Header Section */}
      <h2 className="mb-4 text-3xl leading-tight font-bold capitalize">
        Des formules adaptées à votre échelle
      </h2>
      <p className="text-muted-foreground mx-auto mb-7 max-w-md text-center leading-relaxed">
        Choisissez la solution qui correspond à vos besoins et votre ambition
      </p>

      {/* Plans */}
      <div className="mt-20 grid grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-3">
        {plans.map((tier, idx) => (
          <div
            key={idx}
            className={`relative h-full rounded-3xl border p-8 transition-all hover:shadow-md ${
              tier.featured ? 'border-destructive/30' : 'border-muted shadow-sm'
            }`}
          >
            {tier.featured && (
              <div className="bg-destructive absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-sm! font-bold tracking-widest text-white uppercase shadow-lg">
                Populaire
              </div>
            )}

            <div className="flex h-full flex-col items-start text-left">
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${tier.color === 'red' ? 'bg-destructive/20' : 'bg-primary/20'}`}
              >
                {tier.icon}
              </div>
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p
                className={`mb-4 text-sm font-bold ${tier.color === 'red' ? 'text-destructive' : 'text-primary'}`}
              >
                {tier.subtitle}
              </p>
              <p className="mb-6 text-sm text-slate-500">{tier.description}</p>

              <div className="bg-muted mb-6 h-px w-full" />
              <p className="text-muted-foreground mb-8 text-xs italic">
                Tarification sur mesure selon vos volumes
              </p>

              <ul className="mb-auto w-full space-y-4">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <CheckIcon
                      className={
                        tier.color === 'red'
                          ? 'text-destructive size-5 shrink-0'
                          : 'text-primary size-5 shrink-0'
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={clsx(
                  'mt-10 flex w-full items-center gap-1',
                  buttonVariants({
                    variant: tier.featured ? 'danger' : 'outline',
                  }),
                )}
              >
                {tier.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default PricingTable;
