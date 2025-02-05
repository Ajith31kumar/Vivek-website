import React from "react";
import WebinarCountdown from "../webinarcountdown/WebinarCountdown";


const EliteAthlete = () => {
  return (
    <section id="registration" className="registration-section">
      <div className="container">
        <div className="content">
          <div className="heading-container">
            <h2 className="main-heading">
              ⚡ Are You Ready to Train Like an{" "}
              <span className="highlight">Elite Athlete</span>?
            </h2>
            <p className="subheading">
              This FREE Masterclass will give you the missing link to faster
              reaction times, smarter decisions, and better performance.
            </p>
          </div>

          <div className="countdown-timer">
            <WebinarCountdown targetDate="February 9, 2025 19:00:00 GMT+5:30" />
          </div>

          <div className="cta-container">
            <p className="cta-message">
              📌 LIMITED SPOTS LEFT! Sign up NOW before it's too late!
            </p>

            <a href="https://tagmango.app/36e3433a84" className="cta-button">
              👉 JOIN NOW – 100% FREE
            </a>

            <p className="cta-footer">
              By clicking the button, you'll be redirected to our secure
              registration page
            </p>
          </div>
        </div>
      </div>

      <div className="background-decor-left"></div>
      <div className="background-decor-right"></div>
    </section>
  );
};

export default EliteAthlete;
