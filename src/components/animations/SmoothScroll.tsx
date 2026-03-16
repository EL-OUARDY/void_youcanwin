import ReactLenis, { type LenisRef } from 'lenis/react';
import { type ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  children: ReactNode;
}

function SmoothScroll({ children }: Props) {
  const lenisRef = useRef<LenisRef | null>(null);

  // GSAP integration
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
