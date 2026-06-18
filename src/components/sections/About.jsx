const About = () => {
  return (
    <section id="about">
      <div>
        <h2 className="about-headline">Creativity<br/>for the<br/><em>ambitious.</em></h2>
      </div>
      <div className="about-right">
        <p className="about-body">
          Form is a London-based creative studio built on the belief that design changes things. Founded in 2018, we work with brands who are serious about what they do — from challenger startups to global institutions.<br/><br/>
          We bring together strategy, craft, and technology to create work that earns its place in the world. Not beautiful for beauty's sake — beautiful because it works.
        </p>
        <div className="about-services">
          <div className="about-svc reveal-up">Brand Strategy <span>01</span></div>
          <div className="about-svc reveal-up" style={{transitionDelay:'0.06s'}}>Communications <span>02</span></div>
          <div className="about-svc reveal-up" style={{transitionDelay:'0.12s'}}>Digital Design <span>03</span></div>
          <div className="about-svc reveal-up" style={{transitionDelay:'0.18s'}}>Motion Design <span>04</span></div>
          <div className="about-svc reveal-up" style={{transitionDelay:'0.24s'}}>E-Commerce <span>05</span></div>
          <div className="about-svc reveal-up" style={{transitionDelay:'0.30s'}}>Art Direction <span>06</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;
