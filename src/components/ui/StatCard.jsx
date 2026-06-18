const StatCard = ({ label, value, index }) => (
  <div className="stat-item reveal-up" style={{ transitionDelay: `${index * 0.08}s` }}>
    <div className="stat-num">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);
export default StatCard;
