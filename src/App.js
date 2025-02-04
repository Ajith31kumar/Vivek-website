import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you have a separate CSS file for styles
import Navbar from './navbar/Navbar'; // Import the Navbar component
import FAQSection from './FAQSection';
import Footer from './Footer';

// Webinar Countdown Component
const WebinarCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
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
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.ended) {
    return <p>The webinar has already occurred.</p>;
  }

  return (
    <div className="webinar-countdown">
      <h3>⏳ Registration Closes In:</h3>
      <div className="countdown">
        <div className="countdown-box"><span>{timeLeft.days}</span> Days</div>
        <div className="countdown-box"><span>{timeLeft.hours}</span> Hours</div>
        <div className="countdown-box"><span>{timeLeft.minutes}</span> Minutes</div>
        <div className="countdown-box"><span>{timeLeft.seconds}</span> Seconds</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Train Your Eyes & Brain Like an <span className="highlight">Elite Athlete</span></h1>
        <p>🔥 React Faster. Think Sharper. Dominate Every Game You Play.</p>
        <p>🎯 Milliseconds decide winners. If your reaction speed is slow, you're already behind.</p>

        {/* CTA Section */}
        <div className="cta">
          <p>✔️ Join this <strong>FREE Masterclass</strong> & Gain the Speed Edge!</p>
          <p className="details">
            📅 <strong>Next LIVE Session: 9th Feb, 2025 @ 7PM IST</strong><br />
            🚀 <strong>Seats Are Limited – Claim Yours NOW!</strong>
          </p>
        </div>

        <a href="#register" className="register-btn">👉 REGISTER FREE</a>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <h2 className="problem-title">🔴 You train your body. But what about your brain?</h2>
        
        <div className="problem-content">
          <div className="problem-list">
            {[ 
              "Slow reactions are costing you points",
              "Misjudging distances is killing your accuracy",
              "Hesitating under pressure makes you lose every time"
            ].map((text, index) => (
              <div key={index} className="problem-item">
                <span className="problem-icon">❌</span>
                <p>{text}</p>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div className="problem-cta">
            <p className="problem-highlight">👀 Your eyes & brain control how fast you react—so why aren't you training them?</p>
            <p className="problem-description">📌 Discover the missing piece to peak athletic performance!</p>
            <a href="https://tagmango.app/36e3433a84" className="problem-btn">👉 Register for the FREE Training</a>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <div className="container">
          <div className="section-header">
            <h2>What You'll Learn in This <span className="highlight">Webinar</span></h2>
          </div>

          <div className="solution-cards">
            {[ 
              { icon: "🏆",title: <span className="highlight">The Split-Second Secret</span>, text: "How to shave milliseconds off your reactions and make faster decisions on the field." },
              { icon: "👀⚡",  title: <span className="highlight">Game-Changing Vision Hacks</span>, text: "Track movement & anticipate plays faster with proven vision training techniques." },
              { icon: "🚀", title: <span className="highlight">The Brain-Speed Formula</span>, text: "Strengthen cognitive reflexes & stay sharp under pressure with mental conditioning." }
            ].map((item, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                
              </div>
              
            ))}
            
          </div>

          <div className="solution-cta">
            <p>💡<span className="highlight">This isn't just theory—it's science-backed, PROVEN training.</span></p>
            <a href="#" className="cta-button">👉 Reserve Your Free Spot Now</a>
          </div>
        </div>
      </section>
      <div id="webinarDetails" className="webinar-dive p-8 md-p-12">
  {/* Details Grid */}
  <div className="info-grid grid md:grid-cols-3 gap-8 mb-12">
  {/* Date */}
  <div className="info-card animate__animated animate__fadeInUp text-center p-6 bg-neutral-800/50 rounded-xl">
    <div className="text-3xl mb-4 text-[#E63946]">📅</div>
    <h3 className="text-xl font-bold text-white mb-2">DATE</h3>
    <p className="text-[#F8F9FA]">9th Feb, 2025</p>
  </div>

  {/* Time */}
  <div className="info-card animate__animated animate__fadeInUp animate__delay-1s text-center p-6 bg-neutral-800/50 rounded-xl">
    <div className="text-3xl mb-4 text-[#E63946]">⏰</div>
    <h3 className="text-xl font-bold text-white mb-2">TIME</h3>
    <p className="text-[#F8F9FA]">7PM IST</p>
  </div>

  {/* Access */}
  <div className="info-card animate__animated animate__fadeInUp animate__delay-2s text-center p-6 bg-neutral-800/50 rounded-xl">
    <div className="text-3xl mb-4 text-[#E63946]">🎥</div>
    <h3 className="text-xl font-bold text-white mb-2">ACCESS</h3>
    <p className="text-[#F8F9FA]">Live on Zoom</p>
  </div>
</div>

{/* Call to Action */}
<div className="cta-area text-center mb-12">
  <p className="cta-message text-xl text-white mb-4">
    🚀 <span className="highlight-text">Serious athletes don't wait. Seats are LIMITED.</span>
  </p>
</div>


  {/* Call to Action */}
  <div className="cta-section text-center mb-12">
    <p className="cta-text text-xl text-white mb-4">
      🚀 <span className="highlight">Serious athletes don't wait. Seats are LIMITED.</span>
    </p>
    <div className="cta-button">
      <a
        href="https://tagmango.app/36e3433a84"
        className="btn inline-block bg-[#E63946] text-white py-3 px-8 text-xl font-semibold rounded-lg hover:bg-[#c92b2b] transition-all"
      >
        👉 Secure Your Spot Now – 100% FREE
      </a>
    </div>
  </div>

  {/* Webinar Countdown Section (Last Div) */}
  <section id="webinar-countdown" className="webinar-section">
    <WebinarCountdown targetDate="February 9, 2025 19:00:00 GMT+5:30" />
  </section>
</div>
<section id="benefits" className="benefits-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="header-title">
            🚀 The #1 Secret to <span className="highlight-red">Reacting Faster</span> &amp;
            <span className="highlight-green">Performing at Peak Level!</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid">
          <div className="left-side">
            <div className="benefit-card">
              <div className="flex">
                <span className="icon">✅</span>
                <div>
                  <h3 className="benefit-title">See the game differently—literally.</h3>
                  <p className="description">Unlock enhanced visual perception and spatial awareness</p>
                </div>
              </div>
            </div>

            <div className="benefit-card delay-1">
              <div className="flex">
                <span className="icon">✅</span>
                <div>
                  <h3 className="benefit-title">React in split seconds</h3>
                  <p className="description">Make smarter, faster decisions under pressure</p>
                </div>
              </div>
            </div>

            <div className="benefit-card delay-2">
              <div className="flex">
                <span className="icon">✅</span>
                <div>
                  <h3 className="benefit-title">Dominate under pressure</h3>
                  <p className="description">Perform at your peak without hesitation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Performance Metrics */}
          <div className="right-side">
            <div className="performance-metrics">
              <div className="metric">
                <span className="metric-value">10%</span>
                <p className="metric-description">Average Improvement in Reaction Time</p>
              </div>
              <div className="metric">
                <span className="metric-value">40+</span>
                <p className="metric-description">Athletes Successfully Trained</p>
              </div>
              <div className="metric">
                <span className="metric-value">60</span>
                <p className="metric-description">Minutes to Transform Your Game</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="cta-section">
          <p className="cta-text">🔥 One session could transform your performance.</p>
          <div>
            <a href="https://tagmango.app/36e3433a84" className="cta-button">
              👉 Claim Your Free Spot Now
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="background-circle top-left"></div>
      <div className="background-circle bottom-right"></div>
    </section>
    <section id="credentials" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate__animated animate__fadeIn text-3xl md:text-4xl font-extrabold font-montserrat text-[#2B2D42] mb-4">
            Why Trust Me?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Credentials Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div className="animate__animated animate__fadeInLeft bg-neutral-50 rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-[#E63946] text-2xl">🏆</span>
                <div>
                  <h3 className="text-lg font-bold text-[#1D3557]">Certified Sports Optometrist</h3>
                  <p className="text-neutral-600">HAC Jerusalem</p>
                </div>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-1s bg-neutral-50 rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-[#E63946] text-2xl">🎯</span>
                <div>
                  <h3 className="text-lg font-bold text-[#1D3557]">Certified Bates Method Trainer</h3>
                  <p className="text-neutral-600">British School of Yoga</p>
                </div>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-2s bg-neutral-50 rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-[#E63946] text-2xl">📚</span>
                <div>
                  <h3 className="text-lg font-bold text-[#1D3557]">Research Experience</h3>
                  <p className="text-neutral-600">8+ years in sports vision &amp; cognitive training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div className="animate__animated animate__fadeInRight bg-[#2B2D42] text-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-[#06D6A0] text-2xl">👀</span>
                <div>
                  <h3 className="text-lg font-bold">Trained 40+ athletes</h3>
                  <p className="text-gray-300">in 2 offline programs</p>
                </div>
              </div>
            </div>

            <div className="animate__animated animate__fadeInRight animate__delay-1s bg-[#2B2D42] text-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-[#06D6A0] text-2xl">🔥</span>
                <div>
                  <h3 className="text-lg font-bold">Success Stories</h3>
                  <p className="text-gray-300">4 students permanently removed their glasses</p>
                </div>
              </div>
            </div>

            <div className="animate__animated animate__fadeInRight animate__delay-2s bg-[#2B2D42] text-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-[#06D6A0] text-2xl">🏏</span>
                <div>
                  <h3 className="text-lg font-bold">Proven Results</h3>
                  <p className="text-gray-300">Cricketers improved shot timing by 10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <p className="animate__animated animate__fadeIn text-xl font-bold text-[#1D3557]">
            💡 Athletes trust me because I deliver RESULTS.
          </p>

          <div className="animate__animated animate__fadeInUp">
            <a href="https://tagmango.app/36e3433a84" className="cta-button">
              👉 Join the Free Webinar &amp; See for Yourself
            </a>
          </div>
        </div>
      </div>

    </section>

    <div class="container">
  <div class="header">
    <h2>📢 Real Athletes, Real <span class="highlight">Results</span></h2>
  </div>

  <div class="slider">
    <div class="slide">
      <div class="testimonial">
        <div class="icon">💬</div>
        <p>"My reaction speed improved drastically! I play more confidently now."</p>
        <div class="athlete-info">
          <p class="role">Professional Athlete</p>
          <p class="sport">Cricket Player</p>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="testimonial">
        <div class="icon">💬</div>
        <p>"This training helped me see and track the ball way faster than before!"</p>
        <div class="athlete-info">
          <p class="role">Semi-Pro Athlete</p>
          <p class="sport">Tennis Player</p>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="testimonial">
        <div class="icon">💬</div>
        <p>"After using these drills, I make split-second plays without overthinking."</p>
        <div class="athlete-info">
          <p class="role">Amateur Athlete</p>
          <p class="sport">Basketball Player</p>
        </div>
      </div>
    </div>
  </div>

  <div class="cta-section">
    <p class="cta-text">🔥 If they can do it, so can you.</p>
    <a href="#" class="cta-button">👉 Register Now & Get Started</a>
  </div>
</div>
<section id="bonuses" class="relative py-20 bg-white">
  <div class="container">

    <div class="header">
      <h2>FAST START BUNDLE 🎁</h2>
      <p>💡 Master the #1 overlooked skill in sports—vision & brain training!</p>
      <p class="highlight">WORTH ₹25,997 – FREE!</p>
    </div>

    <div class="grid">
      <div class="bonus-card">
        <div class="icon">✅</div>
        <h3>Live Training</h3>
        <p>Learn the game-changing techniques</p>
        <p class="value">Rs.999 Value</p>
      </div>

      <div class="bonus-card">
        <div class="icon">✅</div>
        <h3>Foundation Course</h3>
        <p>6 lessons on elite vision & cognitive training</p>
        <p class="value">Rs.4,999 Value</p>
      </div>

      <div class="bonus-card">
        <div class="icon">✅</div>
        <h3>1:1 Personal Consultation</h3>
        <p>Tailored strategies for YOUR sport</p>
        <p class="value">Rs.10,000 Value</p>
      </div>

      <div class="bonus-card">
        <div class="icon">✅</div>
        <h3>Private Athlete Community</h3>
        <p>Train with serious athletes</p>
        <p class="value">Rs.9,999 Value</p>
      </div>
    </div>

    <div class="cta-section">
      <p class="total-value">💰 Total Value: ₹25,997</p>
      <p>YOURS FREE TODAY!</p>

      <a href="https://tagmango.app/36e3433a84" class="cta-button">
        👉 Reserve Your Spot Now
      </a>
    </div>
  </div>

  <div class="background-decorative"></div>
  <div class="background-decorative right"></div>
</section>

<section id="registration" class="registration-section">
  <div class="container">
    <div class="content">
      <div class="heading-container">
        <h2 class="main-heading">
          ⚡ Are You Ready to Train Like an 
          <span class="highlight">Elite Athlete</span>?
        </h2>
        <p class="subheading">
          This FREE Masterclass will give you the missing link to faster reaction times, smarter decisions, and better performance.
        </p>
      </div>

      <div class="countdown-timer">
      <WebinarCountdown targetDate="February 9, 2025 19:00:00 GMT+5:30" />
      </div>

      
      <div class="cta-container">
        <p class="cta-message">
          📌 LIMITED SPOTS LEFT! Sign up NOW before it's too late!
        </p>

        <a href="https://tagmango.app/36e3433a84" class="cta-button">
          👉 JOIN NOW – 100% FREE
        </a>

        <p class="cta-footer">
          By clicking the button, you'll be redirected to our secure registration page
        </p>
      </div>
    </div>
  </div>

  <div class="background-decor-left"></div>
  <div class="background-decor-right"></div>
</section>

<div className="App">
      <FAQSection /> {/* Add the FAQSection component here */}
      <Footer />
    </div>
   

    </>
  );
}

export default App;
