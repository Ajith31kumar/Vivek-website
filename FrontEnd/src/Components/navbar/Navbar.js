import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand-container">
        <div className="navbar-brand">Forge Your Peak</div>
      </div>
      <div className="navbar-links-container">
        <div className="navbar-links">
          <a href="#problem" className="navbar-link">Why Us</a>
          <a href="#solution" className="navbar-link">Benefits</a>
          <Link to="/reactiongame" className="navbar-link">ReactionGame</Link>
          <a href="#webinarDetails" className="navbar-link">Schedule</a>
          <a href="#credentials" className="navbar-link">About</a>
        </div>
        <a href="https://tagmango.app/36e3433a84" className="navbar-register">Register Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
