import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { ChevronRightIcon, MenuIcon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Container } from './Container';
import Logo from './Logo';
import NavLink from './ui/navlink';
import Drawer from './ui/drawer';
import { buttonVariants } from './ui/button';

gsap.registerPlugin(useGSAP);

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Sets up an IntersectionObserver to watch for scroll events relative to the header,
  // and updates isScroll state to change header appearance accordingly
  useEffect(() => {
    if (!headerRef.current) return;
    const scrollWatcher = document.createElement('div');

    scrollWatcher.setAttribute('data-scroll-watcher', '');
    headerRef.current.before(scrollWatcher);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setIsScroll(true);
        else setIsScroll(false);
      },
      { rootMargin: '50px 0px 0px 0px' },
    );

    observer.observe(scrollWatcher);

    return () => {
      observer.unobserve(scrollWatcher);
    };
  }, []);

  // Animate mobile menu links
  useGSAP(
    () => {
      if (!headerRef.current) return;

      const links = headerRef.current.querySelectorAll(
        '.mobile-menu .menu-item',
      );

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isDrawerOpen) {
        gsap.fromTo(
          links,
          { paddingLeft: '3rem', opacity: 0 },
          {
            paddingLeft: 0,
            opacity: 1,
            duration: prefersReducedMotion ? 0 : 0.6,
            ease: 'power3.out',
            delay: 0.2,
            stagger: 0.1,
          },
        );
      }
    },
    { dependencies: [isDrawerOpen] },
  );

  return (
    <header
      ref={headerRef}
      data-scroll={isScroll}
      className="page-header group border-muted fixed z-1000 w-full border-b data-[scroll=true]:border-none data-[scroll=true]:bg-white data-[scroll=true]:shadow-[0_4px_30px_#00000013]"
    >
      <Container className="overflow-visible">
        <div className="flex h-[60px] items-center">
          <Logo />

          <div className="ml-auto hidden h-full items-center gap-8 lg:flex">
            <nav
              className="flex h-full items-center gap-6 whitespace-nowrap"
              aria-label="Main Navigation"
            >
              <NavLink href="#">Nos offres</NavLink>
              <NavLink href="#">Nos jeux</NavLink>
              <NavLink href="#">Album 2025</NavLink>
              <NavLink href="#">À propos</NavLink>
            </nav>
            <a
              href="#"
              className={clsx(
                'group/link flex items-center gap-1',
                buttonVariants({ variant: 'default' }),
              )}
            >
              <span>Demander une démo</span>
              <ChevronRightIcon className="size-4 transition-transform group-hover/link:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            className="ml-auto cursor-pointer lg:hidden"
            aria-label="Open menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon className="size-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        position="right"
        className="bg-white"
      >
        <div className="flex h-full flex-col">
          <nav
            className="mobile-menu font-title flex flex-1 flex-col items-center justify-center gap-6 text-2xl font-semibold"
            aria-label="Main Navigation"
          >
            <NavLink className="menu-item w-fit" href="#">
              Nos offres
            </NavLink>
            <NavLink className="menu-item w-fit" href="#">
              Nos jeux
            </NavLink>
            <NavLink className="menu-item w-fit" href="#">
              Album 2025
            </NavLink>
            <NavLink className="menu-item w-fit" href="#">
              À propos
            </NavLink>
          </nav>
          <div className="controls border-muted mx-auto flex w-full justify-between gap-4 border-t pt-4">
            <a
              href="#"
              className={clsx(
                buttonVariants({ variant: 'default' }),
                'group/link flex flex-1 items-center justify-center gap-1 px-0 py-2',
              )}
            >
              <span>Demander une démo</span>
              <ChevronRightIcon className="size-4 transition-transform group-hover/link:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Drawer>
    </header>
  );
}

export default Header;
