import { useEffect } from 'react';

export const useCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if (!cursor || !follower) return;

    let mx = 0, my = 0, fx = 0, fy = 0;
    
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animateFollower = () => {
      fx += (mx - fx) * 0.1;
      fy += (my - fy) * 0.1;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      requestAnimationFrame(animateFollower);
    };
    
    const animationFrame = requestAnimationFrame(animateFollower);
    window.addEventListener('mousemove', onMouseMove);

    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, .service-card, .project-item, .logo-cell, .award-item, .about-svc, .strip-item');
      if (target) {
        cursor.classList.add('hover');
        follower.classList.add('hover');
      } else {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
      }
    };

    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
};
