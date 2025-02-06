import React, { useState, useEffect } from "react";
import "./EliteAthlete.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="timer-container">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="timer-box">
          <span className="timer-value">{value}</span>
          <p className="timer-label">{key}</p>
        </div>
      ))}
    </div>
  );
};

const RegistrationSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(targetDate.getHours() + 9);
  targetDate.setMinutes(targetDate.getMinutes() + 2);
  targetDate.setSeconds(targetDate.getSeconds() + 2);

  return (
    <section className="registration-container">
      <div className="content-wrapper">
        <h2 className="main-heading">
          ⚡ Are You Ready to Train Like an <span className="highlight">Elite Athlete</span>?
        </h2>
        <p className="subtext">
          This FREE Masterclass will give you the missing link to faster reaction times, 
          smarter decisions, and better performance.
        </p>

        <div className="countdown-box">
  <p className="pots-text">⏳ LIMITED SPOTS REMAINING</p>
<CountdownTimer targetDate={targetDate} />
</div>


        <p className="cta-text">
          📌 LIMITED SPOTS LEFT! Sign up NOW before it's too late!
        </p>

        <a href="https://tagmango.app/36e3433a84" className="cta-button">
          👉 JOIN NOW – 100% FREE
        </a>
      </div>
    </section>
  );
};

export default RegistrationSection;
