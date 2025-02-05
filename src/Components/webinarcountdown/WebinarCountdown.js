import React, { useState, useEffect, useCallback } from "react";
import "./WebinarCountdown.css";

const WebinarCountdown = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      ended: false,
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // Now calculateTimeLeft is stable

  return (
    <div id="webinarDetails" className="webinar-dive p-8 md:p-12">
      <div className="webinar-countdown text-center p-6 bg-neutral-800/50 rounded-xl mb-8">
        <h3 className="text-xl font-bold text-white mb-4">⏳ Registration Closes In:</h3>
        {timeLeft.ended ? (
          <p className="expired-message text-red-500 text-lg">The webinar has already occurred.</p>
        ) : (
          <div className="countdown flex justify-center space-x-4 text-xl font-semibold">
            <div className="countdown-box p-4 bg-[#E63946] rounded-lg">
              <span className="block">{timeLeft.days}</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="countdown-box p-4 bg-[#E63946] rounded-lg">
              <span className="block">{timeLeft.hours}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="countdown-box p-4 bg-[#E63946] rounded-lg">
              <span className="block">{timeLeft.minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="countdown-box p-4 bg-[#E63946] rounded-lg">
              <span className="block">{timeLeft.seconds}</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebinarCountdown;
