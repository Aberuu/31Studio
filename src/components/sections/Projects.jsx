import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Selected<br/><em style={{fontStyle:'italic',fontWeight:300}}>Work</em></h2>
        <a href="#" className="projects-cta">View All</a>
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.num} project={project} />
      ))}
    </section>
  );
};

export default Projects;
