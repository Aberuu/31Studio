import { useEffect, useRef } from 'react';
import { initHeroAnimation } from '../../animations/heroAnimation';

const Hero = () => {
  const sectionRef = useRef(null);
  const text = "We partner with ambitious brands, businesses and people to deliver impactful design, advertising and digital.";
  const words = text.split(' ');

  useEffect(() => {
    const cleanup = initHeroAnimation(sectionRef.current);
    return () => cleanup();
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
      <div className="hero-label">Salatiga Creative Studio — Est. 2018</div>
      <h1 className="hero-headline">
        {words.map((word, i) => (
          <span key={i} className="hero-word-wrapper">
            <span className="hero-word">{word}&nbsp;</span>
          </span>
        ))}
      </h1>
      <div className="hero-sub">
        <p className="hero-tagline">Strategy, identity, and experience — crafted for those who demand more.</p>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
          Scroll
        </div>
      </div>
      <div className="hero-counter">
        <span>2024</span>
        <span>—</span>
        <span>01</span>
      </div>
    </section>
  );
};

export default Hero;
