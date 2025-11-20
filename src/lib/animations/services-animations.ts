import { gsap, ScrollTrigger } from './gsap-setup';

export const initHorizontalScroll = (container: HTMLElement) => {
  const cards = gsap.utils.toArray<HTMLElement>('.service-card');

  if (cards.length === 0) return null;

  const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0);

  return gsap.to(cards, {
    xPercent: -100 * (cards.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (cards.length - 1),
      end: () => `+=${totalWidth}`,
    },
  });
};

export const initServiceCardHover = (card: HTMLElement) => {
  const icon = card.querySelector('.service-icon');

  card.addEventListener('mouseenter', () => {
    gsap.to(icon, {
      scale: 1.2,
      rotation: 10,
      duration: 0.3,
      ease: 'back.out(1.7)',
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
};
