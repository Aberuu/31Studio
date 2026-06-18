import { gsap } from '../lib/gsap';

export const initStatsCounter = () => {
  document.querySelectorAll('.stat-num').forEach(el => {
    const original = el.textContent;
    const num = parseFloat(original);
    if (!isNaN(num)) {
      gsap.from(el, {
        textContent: 0,
        duration: 1.5,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: { trigger: el, start: 'top 80%' },
        onUpdate: function() {
          const v = Math.round(parseFloat(el.textContent));
          el.textContent = original.includes('+') ? v + '+' : v;
        }
      });
    }
  });
};
