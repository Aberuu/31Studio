import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const ProjectCard = ({ project }) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.project-bg',
      { scale: 1.1 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="project-item reveal-up" ref={containerRef}>
      <div className="project-visual">
        <div className={`project-bg ${project.bg}`}></div>
      </div>
      <div className="project-meta">
        <div className="proj-num">Project — {project.num}</div>
        <h3 className="proj-name">{project.name}</h3>
        <div className="proj-type">{project.type}</div>
        <p className="proj-desc">{project.desc}</p>
        <div className="proj-view">
          <div className="proj-view-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
          View Case Study
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
