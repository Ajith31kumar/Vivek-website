import React from "react";
import "./Athlete.css"; // Importing custom CSS file

const Athlete = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>📢 <span class="highlight-5">Real Athletes, Real</span> <span className="highlight">Results</span></h2>
      </div>

      <div className="slider">
        <div className="slide">
          <div className="testimonial">
            <div className="icon">💬</div>
            <p>"My reaction speed improved drastically! I play more confidently now."</p>
            <div className="athlete-info">
              <p className="role">Professional Athlete</p>
              <p className="sport">Cricket Player</p>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="testimonial">
            <div className="icon">💬</div>
            <p>"This training helped me see and track the ball way faster than before!"</p>
            <div className="athlete-info">
              <p className="role">Semi-Pro Athlete</p>
              <p className="sport">Tennis Player</p>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="testimonial">
            <div className="icon">💬</div>
            <p>"After using these drills, I make split-second plays without overthinking."</p>
            <div className="athlete-info">
            <p className="role">Amateur Athlete</p>
              <p className="sport">Basketball Player</p>

           </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <p className="cta-text">🔥<span class="highlight-2">If they can do it, so can you.</span> </p>
        <a href="https://tagmango.app/36e3433a84" className="cta-button">👉 Register Now & Get Started</a>
      </div>
    </div>
  );
};

export default Athlete;
