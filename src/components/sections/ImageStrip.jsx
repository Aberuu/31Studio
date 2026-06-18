import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const ImageStrip = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.to('.strip-img', {
        scale: 1.15,
        duration: 1.6,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 85%' 
        }
      });

      // Parallax Effect
      const items = sectionRef.current.querySelectorAll('.strip-item');
      items.forEach(item => {
        const img = item.querySelector('.strip-img');
        const speed = parseFloat(img.dataset.parallax);
        
        gsap.to(img, {
          yPercent: speed * 18,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="image-strip" ref={sectionRef}>
      <div className="strip-item">
        <div className="strip-img img-fill-1" data-parallax="1.5"></div>
        <span className="strip-caption">Editorial / Identity</span>
      </div>
      <div className="strip-item">
        <div className="strip-img img-fill-2" data-parallax="0.6"></div>
        <span className="strip-caption">Brand Strategy</span>
      </div>
      <div className="strip-item">
        <div className="strip-img img-fill-3" data-parallax="1.2"></div>
        <span className="strip-caption">Digital Design</span>
      </div>
      <div className="strip-item">
        <div className="strip-img img-fill-4" data-parallax="0.4"></div>
        <span className="strip-caption">Motion</span>
      </div>
    </section>
  );
};

export default ImageStrip;
