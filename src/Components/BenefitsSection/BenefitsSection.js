import React from "react";
import "./BenefitsSection.css";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="header-title">
            🚀 The #1 Secret to <span className="highlight-red">Reacting Faster</span> &amp;
            <span className="highlight-green">Performing at Peak Level!</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid">
          <div className="left-side">
            <div className="benefit-card">
              <div className="flex">
                <span className="icon">✅</span>
                <div>
                  <h3 className="benefit-title">See the game differently—literally.</h3>
                  <p className="description">Unlock enhanced visual perception and spatial awareness</p>
                </div>
              </div>
            </div>

            <div className="benefit-card delay-1">
              <div className="flex">
                <span className="icon">✅</span>
                <div>
                  <h3 className="benefit-title">React in split seconds</h3>
                  <p className="description">Make smarter, faster decisions under pressure</p>
                </div>
              </div>
            </div>

            <div className="benefit-card delay-2">
              <div className="flex">
                <span className="icon">✅</span>
                <div>
                  <h3 className="benefit-title">Dominate under pressure</h3>
                  <p className="description">Perform at your peak without hesitation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Performance Metrics */}
          <div className="right-side">
            <div className="performance-metrics">
              <div className="metric">
                <span className="metric-value">10%</span>
                <p className="metric-description">Average Improvement in Reaction Time</p>
              </div>
              <div className="metric">
                <span className="metric-value">40+</span>
                <p className="metric-description">Athletes Successfully Trained</p>
              </div>
              <div className="metric">
                <span className="metric-value">60</span>
                <p className="metric-description">Minutes to Transform Your Game</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="cta-section">
          <p className="cta-text">🔥 One session could transform your performance.</p>
          <div>
            <a href="https://tagmango.app/36e3433a84" className="cta-button">
              👉 Claim Your Free Spot Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
