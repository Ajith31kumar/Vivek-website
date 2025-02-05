import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you have a separate CSS file for styles
import Navbar from './Components/navbar/Navbar'; // Import the Navbar component
import Footer from './Components/Footer/Footer';
import Webinar from "./Components/webinar/Webinar";
import HeroSection from './Components/HeroSection/HeroSection';
import SolutionSection from './Components/SolutionSection/SolutionSection';
import BenefitsSection from './Components/BenefitsSection/BenefitsSection';
import CredentialsSection from './Components/CredentialsSection/CredentialsSection';
import Athlete from './Components/Athlete/Athlete';
import Bonus from './Components/Bonus/Bonus';
import EliteAthlete from './Components/EliteAthlete/EliteAthlete';

import WebinarCountdown from './Components/webinarcountdown/WebinarCountdown';
import FaqSection from './Components/Faqsection/FaqSection';

const App = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      <Webinar />
      <HeroSection />
      <SolutionSection />
      <WebinarCountdown targetDate="February 9, 2025 19:00:00 GMT+5:30" />
      <BenefitsSection />
      <CredentialsSection />
      <Athlete />
      <Bonus />
      <EliteAthlete />
      <FaqSection/> {/* Add the FAQSection component here */}
      <Footer/>
    </>
  );
};

export default App;



     