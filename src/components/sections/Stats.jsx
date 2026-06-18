import { stats } from '../../data/stats';
import StatCard from '../ui/StatCard';

const Stats = () => {
  return (
    <div className="stats-strip">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} label={stat.label} value={stat.value} index={i} />
      ))}
    </div>
  );
};

export default Stats;
