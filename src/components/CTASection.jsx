import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-left">
          <div className="cta-rocket">🚀</div>
          <div className="cta-text">
            <h2 className="cta-title">
              Make Learning Visual. Make Learning Last.
            </h2>
            <p className="cta-sub">
              Join AlgoVision and transform the way you understand Computer
              Science.
            </p>
          </div>
        </div>
        <a href="#" className="cta-btn">
          Get Started for Free →
        </a>
      </div>
    </section>
  );
};

export default CTASection;
