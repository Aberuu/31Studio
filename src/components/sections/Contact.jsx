const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-top">
        <h2 className="contact-headline" id="contactHeadline">Ready to<br/><em>collaborate?</em></h2>
      </div>
      <div className="contact-grid">
        <div className="contact-block">
          <div className="contact-block-label">Email</div>
          <a href="mailto:hello@formstudio.co" className="contact-block-value">hello@formstudio.co</a>
        </div>
        <div className="contact-block">
          <div className="contact-block-label">Phone</div>
          <span className="contact-block-value">+44 20 7946 0832</span>
        </div>
        <div className="contact-block">
          <div className="contact-block-label">Location</div>
          <span className="contact-block-value">Shoreditch, London</span>
        </div>
      </div>
      <div className="contact-buttons">
        <button className="contact-btn">
          Book a Meeting
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>
        <button className="contact-btn">
          Start a Project
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>
        <button className="contact-btn">
          View Our Work
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>
      </div>
    </section>
  );
};

export default Contact;
