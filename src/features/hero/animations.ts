import { useMemo } from "react";
import type { Variants } from "framer-motion";

export interface HeroAnimations {
  envelopeVariants: Variants;
  flapVariants: Variants;
  cardVariants: Variants;
  sealVariants: Variants;
}

export function useHeroAnimations(): HeroAnimations {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  const envelopeVariants: Variants = {
    closed: { scale: 1, x: 0, y: 0, rotateZ: 0 },
    open: {
      scale: 0.9,
      x: isDesktop ? "-55%" : 0,
      y: isDesktop ? 0 : 150,
      rotateZ: isDesktop ? -5 : 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const flapVariants: Variants = {
    closed: { rotateX: 0, zIndex: 10 },
    open: {
      rotateX: -180,
      zIndex: 5,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const cardVariants = useMemo<Variants>(
    () => ({
      closed: { x: 0, y: 0, opacity: 0, scale: 0.8, zIndex: 5 },
      open: {
        x: isDesktop ? "55%" : 0,
        y: isDesktop ? 0 : -200,
        opacity: 1,
        scale: 1,
        zIndex: 50,
        transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
      },
    }),
    [isDesktop],
  );

  const sealVariants: Variants = {
    closed: { scale: 1, opacity: 1 },
    open: { scale: 1.5, opacity: 0, transition: { duration: 0.4 } },
  };

  return { envelopeVariants, flapVariants, cardVariants, sealVariants };
}
