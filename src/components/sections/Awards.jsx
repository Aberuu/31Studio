import { awards } from '../../data/awards';

const Awards = () => {
  const allAwards = [...awards, ...awards, ...awards, ...awards];
  return (
    <section id="awards">
      <div className="awards-track">
        {allAwards.map((name, i) => (
          <div className="award-item" key={i}>
            {name} <div className="award-sep"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
