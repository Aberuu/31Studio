import { useEffect } from 'react';
import { stats } from '../../data/stats';
import StatCard from '../ui/StatCard';
import { initStatsCounter } from '../../animations/statsAnimation';

const Stats = () => {
  useEffect(() => {
    initStatsCounter();
  }, []);

  return (
    <div className="stats-strip">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} label={stat.label} value={stat.value} index={i} />
      ))}
    </div>
  );
};

export default Stats;
