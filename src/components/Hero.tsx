import { ChevronRightIcon, LightbulbIcon } from 'lucide-react';
import AppMockup from './AppMockup';
import { Container } from './Container';
import { buttonVariants } from './ui/button';
import clsx from 'clsx';

function Hero() {
  return (
    <Container className="hero relative">
      <div className="h-dvh min-h-200 pt-15 md:min-h-180 lg:min-h-168">
        {/* Gradient background */}
        <div
          className="absolute inset-0 -z-100 size-full"
          style={{
            background:
              'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 50%, #FEF2F2 100%)',
          }}
        />

        {/* Content */}
        <div className="flex size-full items-center gap-4">
          {/* Text */}
          <div className="flex-3">
            <div className="flex max-w-lg flex-col gap-6">
              {/* Heading */}
              <h1 className="text-[clamp(2.1rem,4.5vw,3.4rem)] leading-tight font-bold sm:leading-none md:pr-16">
                Transformez chaque{' '}
                <span className="from-primary to-primary-strong relative bg-linear-to-r bg-clip-text text-transparent">
                  produit
                  {/* Dash */}
                  <svg
                    className="absolute -bottom-1 -left-1 -z-1 w-full"
                    viewBox="0 0 273 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.05698 10.2833C67.8699 -0.685563 204.98 -0.685563 270.793 10.2833"
                      stroke="url(#paint0_linear_3252_2)"
                      strokeWidth="4.11331"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3252_2"
                        x1="2.05698"
                        y1="2.05664"
                        x2="26875.7"
                        y2="2.05664"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="var(--primary)" />
                        <stop offset="1" stopColor="var(--primary-strong)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{' '}
                en expérience de jeu
              </h1>

              {/* Paragraph */}
              <p className="">
                YouCanWin connecte vos marques aux fans de football à travers
                des mécaniques de gamification innovantes.{' '}
                <strong className="font-bold">
                  Codes QR, cartes digitales, défis et récompenses.
                </strong>
              </p>

              {/* Numbers */}
              <div className="numbers flex max-w-md justify-between">
                <div className="flex flex-col">
                  <span className="text-primary text-xl font-bold">500K+</span>
                  <p className="text-sm">Interactions / Mois</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-destructive text-xl font-bold">
                    50+
                  </span>
                  <p className="text-sm">Marques Actives</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary text-xl font-bold">x3.5</span>
                  <p className="text-sm">ROI Moyen</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 md:gap-4">
                <a
                  href="#"
                  className={clsx(
                    'group/link flex items-center gap-1',
                    buttonVariants({ variant: 'default' }),
                  )}
                >
                  <span>Voir la démo</span>
                  <ChevronRightIcon className="size-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>

                <a
                  href="#"
                  className={clsx(
                    'flex items-center gap-1',
                    buttonVariants({ variant: 'outline' }),
                  )}
                >
                  <LightbulbIcon className="size-4" />
                  <span>Comment ça marche</span>
                </a>
              </div>

              {/* Links */}
              <div className="text-muted-foreground border-muted space-y-2 border-t pt-6 text-sm">
                <p className="uppercase">Ils nous font confiance</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <span className="hover:text-foreground cursor-pointer transition-colors">
                    Maroc Telecom
                  </span>
                  <span className="hover:text-foreground cursor-pointer transition-colors">
                    Inwi
                  </span>
                  <span className="hover:text-foreground cursor-pointer transition-colors">
                    Orange
                  </span>
                  <span className="hover:text-foreground cursor-pointer transition-colors">
                    Carrefour
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* App mockup */}
          <div className="flex-2 max-lg:hidden">
            <AppMockup className="w-3/4" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
