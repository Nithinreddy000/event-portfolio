import { gsap, ScrollTrigger } from './gsap-setup';

export const initHeroParallax = (moonElement: HTMLElement) => {
  return gsap.to(moonElement, {
    rotation: 360,
    scale: 1.5,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
};

export const initHeroTextAnimation = (container: HTMLElement) => {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
  });

  tl.from('.hero-title', {
    opacity: 0,
    y: 100,
    duration: 1,
  })
    .from(
      '.hero-subtitle',
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      '-=0.5'
    )
    .from(
      '.hero-cta',
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
      },
      '-=0.3'
    );

  return tl;
};

export const initScrollIndicator = () => {
  gsap.to('.scroll-indicator', {
    y: 10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
};
