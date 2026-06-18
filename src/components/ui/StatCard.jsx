import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const StatCard = ({ label, value, index }) => {
  const numRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const targetValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    
    const counter = { val: 0 };
    let ctx = gsap.context(() => {
      gsap.to(counter, {
        val: targetValue,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 95%',
          once: true
        },
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.innerText = Math.floor(counter.val) + suffix;
          }
        }
      });
    });

    return () => ctx.revert();
  }, [value]);

  return (
    <div 
      className="stat-item reveal-up" 
      ref={containerRef}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="stat-num" ref={numRef}>0</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatCard;
