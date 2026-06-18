const ServiceCard = ({ service, index }) => {
  return (
    <div className="service-card reveal-up" style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="service-img">
        <div className={`service-img-inner ${service.imgClass}`}></div>
      </div>
      <div className="service-num">{service.num}</div>
      <div className="service-title">{service.title}</div>
      <p className="service-desc">{service.desc}</p>
      <div className="service-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </div>
    </div>
  );
};

export default ServiceCard;
