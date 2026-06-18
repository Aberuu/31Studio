import { marqueeItems } from '../../data/services';

const Marquee = () => {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-item">
          {marqueeItems.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
              {item} <div className="marquee-dot"></div>
            </span>
          ))}
        </div>
        <div className="marquee-item">
          {marqueeItems.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
              {item} <div className="marquee-dot"></div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
