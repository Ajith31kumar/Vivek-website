import React from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Top Section */}
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-brand">
          <h3>Forge Your Peak</h3>
          <p>Transforming athletes through advanced vision & cognitive training</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#webinarDetails">Webinar Details</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#bonuses">Bonuses</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        {/* Register CTA */}
        <div className="footer-cta">
          <h4>Ready to Level Up?</h4>
          <a href="https://tagmango.app/36e3433a84" className="register-btn">Register Now</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Forge Your Peak. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a> | 
          <a href="#">Terms of Service</a> | 
          <a href="#">Contact Us</a>
        </div>
        <p className="footer-disclaimer">
          Disclaimer: Results may vary. Commitment to training required for optimal performance gains.
        </p>
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top">
        <button id="backToTop" aria-label="Back to top">
          ↑
        </button>
      </div>
    </div>
  );
};

export default Footer;
