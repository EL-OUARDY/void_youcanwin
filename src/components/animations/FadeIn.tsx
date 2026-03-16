import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/utils';

interface Props {
  className?: string;
  children?: ReactNode;
  vars?: gsap.TweenVars;
  start?: string;
  onComplete?: () => void;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FadeIn({
  children,
  vars = {},
  className = '',
  start = 'top 95%',
  onComplete = () => {},
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set(el, { opacity: 1, y: 0 });
        if (onComplete) onComplete();
        return;
      }

      gsap.to(el, {
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        y: 0,
        ...vars,
        scrollTrigger: {
          trigger: el,
          start,
        },
        onComplete: onComplete,
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={cn('fade-in opacity-0', className)}>
      {children}
    </div>
  );
}

export default FadeIn;
