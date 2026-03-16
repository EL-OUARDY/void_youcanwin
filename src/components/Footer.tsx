import {
  ExternalLinkIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ShieldCheckIcon,
  TwitterIcon,
} from 'lucide-react';
import Chip from './ui/chip';
import { APP_NAME } from '../lib/constants';
import Logo from './shared/Logo';
import { Container } from './shared/Container';

function Footer() {
  return (
    <Container className="pt-16 pb-8">
      <footer className="bg-background">
        {/* Main Footer Grid */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Logo className="mb-6" />
            <p className="text-muted-foreground mb-6 max-w-sm text-sm leading-relaxed">
              Plateforme de jeux digitaux pour engager vos communautés autour du
              football. Un service d'Agency.Africa.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="hover:bg-muted/70 bg-muted/50 text-muted-foreground hover:text-foreground flex size-8 items-center justify-center rounded-lg transition-all"
                  >
                    <Icon className="size-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3">
            <h4 className="0 mb-6 font-bold">Liens rapides</h4>
            <ul className="text-muted-foreground space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nos offres
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nos jeux
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Album 2025
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4">
            <h4 className="mb-6 font-bold">Contact & Légal</h4>
            <ul className="text-muted-foreground space-y-4 text-sm">
              <li>
                <a
                  href="mailto:games@agency.africa"
                  className="hover:text-primary transition-colors"
                >
                  games@agency.africa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary flex items-center gap-1 transition-colors"
                >
                  Protection des données (CNDP){' '}
                  <ExternalLinkIcon className="size-4" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-muted mb-8 h-px w-full" />

        {/* Bottom Bar */}
        <div className="mb-8 flex flex-col items-center justify-between gap-6 text-xs md:flex-row">
          <p>
            © {new Date().getFullYear()} {APP_NAME}. Tous droits réservés.
          </p>
          <p>
            Un service de{' '}
            <span className="text-primary font-bold">Agency.Africa</span> —
            games.agency.africa
          </p>
        </div>

        {/* Compliance Badge */}
        <div className="flex justify-center">
          <Chip className="text-primary mx-auto mb-4 flex w-fit items-center gap-1.5 px-3 py-1.5 text-xs font-medium">
            <ShieldCheckIcon className="text-primary size-4" />
            Site conforme CNDP Maroc
          </Chip>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
