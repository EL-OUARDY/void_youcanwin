import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import Logo from '../Logo';
import { cn } from '../../lib/utils';

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'right' | 'left';
  className?: string;
}

function Drawer({
  open,
  onClose,
  children,
  className,
  position = 'left',
}: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsDrawerOpen(open);
  }, [open]);

  return (
    <>
      <div
        className={clsx(
          'drawer-overlay fixed inset-0 z-40 opacity-0 transition-all duration-500',
          isDrawerOpen
            ? 'pointer-events-auto opacity-100 backdrop-blur-xs'
            : 'pointer-events-none backdrop-blur-none',
        )}
        onClick={() => {
          setIsDrawerOpen(false);
          onClose();
        }}
        aria-hidden="true"
      />

      <div
        className={cn(
          'nav-drawer pointer-events-auto fixed top-0 z-50 flex h-full w-[85%] flex-col gap-6 bg-white p-6 transition-transform duration-500 sm:w-92',
          position === 'left' ? 'left-0' : 'right-0',
          isDrawerOpen
            ? 'translate-x-0'
            : position === 'left'
              ? '-translate-x-full'
              : 'translate-x-full',
          className,
        )}
        role="dialog"
        aria-modal={isDrawerOpen}
        aria-label="Menu"
      >
        <div className="header border-muted flex items-center justify-between border-b pb-4">
          <div
            className="size-fit"
            onClick={() => {
              setIsDrawerOpen(false);
              onClose();
            }}
          >
            <Logo />
          </div>
          <button
            className="hover:bg-foreground/10 cursor-pointer p-2 transition-colors duration-300"
            onClick={() => {
              setIsDrawerOpen(false);
              onClose();
            }}
            aria-label="Close Menu"
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            <XIcon className="size-6" />
          </button>
        </div>

        <div className="content flex-1">{children}</div>
      </div>
    </>
  );
}

export default Drawer;
