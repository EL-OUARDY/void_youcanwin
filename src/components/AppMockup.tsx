import {
  BadgeEuroIcon,
  BlocksIcon,
  GiftIcon,
  ScanQrCodeIcon,
  UserIcon,
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Props {
  className?: string;
}

function AppMockup({ className }: Props) {
  return (
    <div className="relative">
      <article
        className={cn(
          'bg-background flex aspect-3/5 flex-col overflow-hidden rounded-3xl border-6 shadow-xl',
          className,
        )}
      >
        <header className="from-primary to-primary-strong space-y-2 bg-linear-to-b p-4 text-white">
          <div className="space-y-1">
            <p className="text-muted text-xs uppercase">Album Digital 2025</p>
            <p className="text-lg font-bold">Ma Collection</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-lg font-bold">127</span>
              <p className="text-xs">Cartes</p>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">76%</span>
              <p className="text-xs">Complet</p>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">#12</span>
              <p className="text-xs">Rang</p>
            </div>
          </div>
        </header>

        <section className="games grid flex-1 grid-cols-3 place-content-start gap-2 p-4">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="from-muted/30 to-muted aspect-4/5 rounded-md bg-linear-to-br"
              />
            ))}
        </section>

        <footer className="border-muted mt-auto flex justify-between border-t px-4 py-2">
          <div className="flex flex-col items-center justify-center gap-1">
            <BlocksIcon className="bg-muted/50 size-6 rounded-md p-1" />
            <p className="text-xs">Collection</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <ScanQrCodeIcon className="bg-muted/50 size-6 rounded-md p-1" />
            <p className="text-xs">Scanner</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <BadgeEuroIcon className="bg-muted/50 size-6 rounded-md p-1" />
            <p className="text-xs">Échanges</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <UserIcon className="bg-muted/50 size-6 rounded-md p-1" />
            <p className="text-xs">Profil</p>
          </div>
        </footer>
      </article>

      {/* Floating items */}
      <div className="bg-background absolute -bottom-1 -left-24 flex gap-2 rounded-md p-4 shadow-2xl">
        <GiftIcon className="bg-destructive/20 stroke-destructive size-8 rounded-md stroke-2 p-2" />
        <div className="text-xs">
          <p className="font-bold">Récompense</p>
          <p className="text-muted-foreground">Tirage hebdomadaire</p>
        </div>
      </div>
      <div className="bg-background absolute -top-2 right-4 flex gap-2 rounded-md p-4 shadow-2xl">
        <ScanQrCodeIcon className="bg-primary/20 stroke-primary size-8 rounded-md stroke-2 p-2" />
        <div className="text-xs">
          <p className="font-bold">Scan QR Code</p>
          <p className="text-muted-foreground">Débloquer une carte</p>
        </div>
      </div>
    </div>
  );
}

export default AppMockup;
