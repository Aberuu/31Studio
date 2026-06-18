import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  return (
    <section id="services">
      <div className="section-header">
        <span className="section-label">Our Disciplines</span>
        <span className="section-number">02</span>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={service.num} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
