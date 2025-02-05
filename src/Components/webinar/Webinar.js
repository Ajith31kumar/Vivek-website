import React from "react";
import "./Webinar.css"; // Ensure you have a corresponding CSS file for styling

const Webinar = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>
          Train Your Eyes & Brain Like an <span className="highlight">Elite Athlete</span>
        </h1>
        <p>🔥 React Faster. Think Sharper. Dominate Every Game You Play.</p>
        <p>🎯 Milliseconds decide winners. If your reaction speed is slow, you're already behind.</p>

        {/* CTA Section */}
        <div className="cta">
          <p>
            ✔️ Join this <strong>FREE Masterclass</strong> & Gain the Speed Edge!
          </p>
          <p className="details">
            📅 <strong>Next LIVE Session: 9th Feb, 2025 @ 7PM IST</strong>
            <br /> 🚀 <strong>Seats Are Limited – Claim Yours NOW!</strong>
          </p>
        </div>

        <a href="#register" className="register-btn">
          👉 REGISTER FREE
        </a>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <h2 className="problem-title">🔴 You train your body. But what about your brain?</h2>

        <div className="problem-content">
          <div className="problem-list">
            {["Slow reactions are costing you points", "Misjudging distances is killing your accuracy", "Hesitating under pressure makes you lose every time"].map(
              (text, index) => (
                <div key={index} className="problem-item">
                  <span className="problem-icon">❌</span>
                  <p>{text}</p>
                </div>
              )
            )}
          </div>

          {/* CTA Block */}
          <div className="problem-cta">
            <p className="problem-highlight">👀 Your eyes & brain control how fast you react—so why aren't you training them?</p>
            <p className="problem-description">📌 Discover the missing piece to peak athletic performance!</p>
            <a href="https://tagmango.app/36e3433a84" className="problem-btn">
              👉 Register for the FREE Training
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;
