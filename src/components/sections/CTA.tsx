import { CalendarIcon, MailIcon } from 'lucide-react';
import { Container } from '../shared/Container';
import { buttonVariants } from '../ui/button';
import clsx from 'clsx';

function CTA() {
  return (
    <Container className="cta relative py-16 text-center text-white">
      {/* Gradient background */}
      <div className="from-destructive to-destructive-strong absolute inset-0 -z-100 size-full bg-linear-to-r" />

      {/* Header Section */}
      <h2 className="mb-4 text-3xl leading-tight font-bold capitalize">
        Prêt à transformer votre marketing ?
      </h2>
      <p className="mx-auto mb-7 text-center leading-relaxed">
        Rejoignez les marques qui engagent leurs fans avec YouCanWin
      </p>

      {/* Controls */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
        <a
          href="#"
          className={clsx(
            'text-destructive! flex items-center gap-2 max-sm:w-full',
            buttonVariants({ variant: 'white' }),
          )}
        >
          <CalendarIcon className="size-4" />
          <span>Planifier une démo gratuite</span>
        </a>

        <a
          href="#"
          className={clsx(
            'flex items-center gap-2 max-sm:w-full',
            buttonVariants({ variant: 'ghost' }),
          )}
        >
          <MailIcon className="size-4" />
          <span>Nous contacter</span>
        </a>
      </div>
    </Container>
  );
}

export default CTA;
