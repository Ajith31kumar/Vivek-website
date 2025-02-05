import React from "react";
import "./Bonus.css"; // Importing the CSS file

const Bonus = () => {
  return (
    <section id="bonuses" className="bonuses-section">
      <div className="container">
        <div className="header">
          <h2>FAST START BUNDLE 🎁</h2>
          <p>💡 Master the #1 overlooked skill in sports—vision & brain training!</p>
          <p className="highlight">WORTH ₹25,997 – FREE!</p>
        </div>

        <div className="grid">
          <div className="bonus-card">
            <div className="icon">✅</div>
            <h3>Live Training</h3>
            <p>Learn the game-changing techniques</p>
            <p className="value">Rs.999 Value</p>
          </div>

          <div className="bonus-card">
            <div className="icon">✅</div>
            <h3>Foundation Course</h3>
            <p>6 lessons on elite vision & cognitive training</p>
            <p className="value">Rs.4,999 Value</p>
          </div>

          <div className="bonus-card">
            <div className="icon">✅</div>
            <h3>1:1 Personal Consultation</h3>
            <p>Tailored strategies for YOUR sport</p>
            <p className="value">Rs.10,000 Value</p>
          </div>

          <div className="bonus-card">
            <div className="icon">✅</div>
            <h3>Private Athlete Community</h3>
            <p>Train with serious athletes</p>
            <p className="value">Rs.9,999 Value</p>
          </div>
        </div>

        <div className="cta-section">
          <p className="total-value">💰 Total Value: ₹25,997</p>
          <p>YOURS FREE TODAY!</p>
          <a href="https://tagmango.app/36e3433a84" className="cta-button">
            👉 Reserve Your Spot Now
          </a>
        </div>
      </div>
      <div className="background-decorative"></div>
      <div className="background-decorative right"></div>
    </section>
  );
};

export default Bonus;
