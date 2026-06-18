import { clients } from '../../data/clients';
import LogoCard from '../ui/LogoCard';

const Clients = () => {
  return (
    <section id="clients">
      <div className="clients-intro">
        <span className="clients-label">Trusted By</span>
        <div className="clients-line"></div>
        <span className="section-number">04</span>
      </div>
      <div className="logo-grid">
        {clients.map((name) => (
          <LogoCard key={name} name={name} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
