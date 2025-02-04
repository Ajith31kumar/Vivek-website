import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById("backToTop");

    // Scroll to top functionality
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    return () => {
      backToTopButton.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div>
      {/* Footer Section */}
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-brand-title">Forge Your Peak</h3>
          <p className="footer-brand-description">
            Transforming athletes through advanced vision &amp; cognitive training
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#webinarDetails" className="footer-link">Webinar Details</a></li>
            <li><a href="#benefits" className="footer-link">Benefits</a></li>
            <li><a href="#bonuses" className="footer-link">Bonuses</a></li>
            <li><a href="#faq" className="footer-link">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-cta">
          <h4 className="footer-cta-title">Ready to Level Up?</h4>
          <a href="https://tagmango.app/36e3433a84" className="footer-register-button">
            Register Now
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © 2024 Forge Your Peak. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <span className="footer-bottom-separator">|</span>
          <a href="#" className="footer-bottom-link">Terms of Service</a>
          <span className="footer-bottom-separator">|</span>
          <a href="#" className="footer-bottom-link">Contact Us</a>
        </div>
        <p className="footer-disclaimer">
          Disclaimer: Results may vary. Commitment to training required for optimal performance gains.
        </p>
      </div>

      <div className="footer-back-to-top">
        <button id="backToTop" className="back-to-top-button" aria-label="Back to top">
          <svg className="back-to-top-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Footer;
