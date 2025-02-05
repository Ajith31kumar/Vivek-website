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
        <p className="highlight">🔥 React Faster. Think Sharper. Dominate Every Game You Play.</p> 
        <p>🎯 Milliseconds decide winners. If your reaction speed is slow, you're already behind.</p>

        {/* CTA Section */}
        <div className="cta">
          <p>
            ✔️ Join this <strong>FREE Masterclass</strong> & Gain the Speed Edge!
          </p>
          <p className="details">
            📅 <strong>Next LIVE Session: 9th Feb, 2025 @ 7PM IST</strong>
            <br /> 🚀 <strong className="highlight">Seats Are Limited – Claim Yours NOW!</strong>
          </p>
        </div>

        <a href="https://tagmango.app/36e3433a84" className="register-btn">
          👉 REGISTER FREE
        </a>
      </section>
    </>
  );
};

export default Webinar;
