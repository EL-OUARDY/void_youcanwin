import { type ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

interface Props {
  children: ReactNode;
}

function SmoothScroll({ children }: Props) {
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 1,
        smoothTouch: 0.1,
        effects: true,
        normalizeScroll: true,
      });

      history.scrollRestoration = 'manual';
      smoother.current.scrollTo(0, false);

      return () => {
        if (smoother.current) {
          smoother.current.kill();
        }
      };
    },
    { dependencies: [], revertOnUpdate: true },
  );

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

export default SmoothScroll;
