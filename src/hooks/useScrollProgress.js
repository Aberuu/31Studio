import { useEffect } from 'react';

export const useScrollProgress = () => {
  useEffect(() => {
    const prog = document.getElementById('scrollProgress');
    if (!prog) return;

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      prog.style.transform = `scaleX(${scrolled})`;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
};
