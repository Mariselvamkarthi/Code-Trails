/**
 * Shared motion configuration for consistent micro-interactions
 * Duration: 150-250ms
 * Easing: ease-out or cubic-bezier(0.4, 0, 0.2, 1)
 */

// Standard transition timing
export const motionConfig = {
  fast: {
    duration: 0.15,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
  standard: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
  slow: {
    duration: 0.25,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
};

// Scroll reveal variants
export const scrollReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Staggered container variants
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Card hover variants
export const cardHover = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: motionConfig.standard,
  },
};

// Button press variants
export const buttonPress = {
  rest: { scale: 1 },
  pressed: {
    scale: 0.98,
    transition: motionConfig.fast,
  },
};

// Link arrow animation
export const arrowSlide = {
  rest: { x: 0 },
  hover: {
    x: 3,
    transition: motionConfig.standard,
  },
};

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Conditional animation variants (respects reduced motion)
export const conditionalVariants = (variants: any) => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  return variants;
};

