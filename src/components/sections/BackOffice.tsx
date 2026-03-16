import {
  BellIcon,
  ChartNoAxesColumnIncreasingIcon,
  ChevronRightIcon,
  CloudDownloadIcon,
  GiftIcon,
  LayersIcon,
  QrCodeIcon,
  Settings2Icon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react';
import { Container } from '../shared/Container';
import Chip from '../ui/chip';
import { buttonVariants } from '../ui/button';
import clsx from 'clsx';

const featureList = [
  {
    title: 'Générateur QR Codes',
    desc: 'Créez et téléchargez vos QR codes uniques en masse',
    icon: <QrCodeIcon className="text-primary" />,
  },
  {
    title: 'CRM Participants',
    desc: 'Collectez et gérez vos participants avec segmentation avancée',
    icon: <UsersIcon className="text-primary" />,
  },
  {
    title: 'Configuration jeux',
    desc: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels',
    icon: <Settings2Icon className="text-primary" />,
  },
  {
    title: 'Analytics temps réel',
    desc: 'Suivez vos KPIs : scans, conversions, engagement, ROI',
    icon: <ChartNoAxesColumnIncreasingIcon className="text-primary" />,
  },
  {
    title: 'Gestion des lots',
    desc: 'Définissez vos récompenses et gérez les tirages au sort',
    icon: <GiftIcon className="text-primary" />,
  },
  {
    title: 'Notifications',
    desc: 'Envoyez des push, emails et SMS à vos participants',
    icon: <BellIcon className="text-primary" />,
  },
  {
    title: 'Export données',
    desc: 'Téléchargez vos données en CSV, Excel ou via API',
    icon: <CloudDownloadIcon className="text-primary" />,
  },
  {
    title: 'Multi-campagnes',
    desc: 'Gérez plusieurs campagnes simultanément',
    icon: <LayersIcon className="text-primary" />,
  },
];

function BackOffice() {
  return (
    <Container className="backoffice relative py-24">
      {/* Gradient background */}
      <div className="to-muted/20 absolute inset-0 -z-100 size-full bg-linear-to-br from-white" />

      {/* Header Section */}
      <Chip className="text-primary mx-auto mb-4 flex w-fit items-center gap-1.5 px-3 py-1.5 text-xs font-medium">
        <SettingsIcon className="text-primary size-4" />
        Backoffice tout-en-un
      </Chip>
      <h2 className="mb-4 text-center text-3xl leading-tight font-bold capitalize">
        Gérez tout depuis une interface unique
      </h2>
      <p className="text-muted-foreground mx-auto mb-7 max-w-lg text-center leading-relaxed">
        Notre backoffice intuitif vous permet de créer, configurer et piloter
        vos campagnes en toute autonomie
      </p>

      {/* Grid */}
      <div className="mb-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featureList.map((item, idx) => (
          <div
            key={idx}
            className="group border-muted bg-background rounded-2xl border p-8 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="bg-primary/20 mb-6 flex size-12 items-center justify-center rounded-xl">
              <span className="transition-transform group-hover:scale-110">
                {item.icon}
              </span>
            </div>
            <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#"
        className={clsx(
          'group/link mx-auto flex w-fit items-center gap-1',
          buttonVariants({ variant: 'default' }),
        )}
      >
        <span>Demander un accès au backoffice</span>
        <ChevronRightIcon className="size-4 transition-transform group-hover/link:translate-x-0.5" />
      </a>
    </Container>
  );
}

export default BackOffice;
