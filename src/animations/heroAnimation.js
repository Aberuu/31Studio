import { gsap } from '../lib/gsap';

export const initHeroAnimation = (element) => {
  if (!element) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to('.hero-word', {
      y: '0%',
      duration: 1.4,
      stagger: 0.03,
      ease: 'power4.out'
    })
    .from('.hero-label', { 
      opacity: 0, 
      y: 20, 
      duration: 1, 
      ease: 'power3.out' 
    }, 0.1)
    .from('.hero-counter', { 
      opacity: 0, 
      x: 20, 
      duration: 1, 
      ease: 'power3.out' 
    }, 0.8)
    .from('.hero-tagline', { 
      opacity: 0, 
      y: 20, 
      duration: 1, 
      ease: 'power3.out' 
    }, 1.2)
    .from('.hero-scroll', { 
      opacity: 0, 
      y: 20, 
      duration: 1, 
      ease: 'power3.out' 
    }, 1.4);
  }, element);

  return () => ctx.revert();
};

