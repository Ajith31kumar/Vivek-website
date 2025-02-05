import React, { useEffect } from 'react';
import './FaqSection.css';

const FaqSection = () => {
  useEffect(() => {
    document.querySelectorAll('.faq-item button').forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const arrow = button.querySelector('svg');

        // Toggle content visibility
        content.classList.toggle('visible');
        
        // Rotate arrow
        arrow.style.transform = content.classList.contains('visible') ? 'rotate(180deg)' : 'rotate(0deg)';

        // Close other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
          if (item.contains(button)) return;

          const otherContent = item.querySelector('.faq-content');
          const otherArrow = item.querySelector('svg');

          otherContent.classList.remove('visible');
          otherArrow.style.transform = 'rotate(0deg)';
        });
      });
    });
  }, []);

  return (
    <section id="faq" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate__animated animate__fadeIn text-3xl md:text-4xl font-extrabold font-montserrat text-[#2B2D42] mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {/* FAQ Items */}
          {[{ question: "Is this really free?", answer: "✅ Yes! 100% FREE." },
            { question: "Who is this for?", answer: "✅ Athletes serious about reaction speed & vision training." },
            { question: "Will this work for my sport?", answer: "✅ YES! Any athlete can benefit." },
            { question: "What if I can't attend live?", answer: "✅ Replay provided!" },
            { question: "How long is the session?", answer: "✅ 60 minutes of game-changing value!" }
          ].map((faq, index) => (
            <div className={`animate__animated animate__fadeInUp animate__delay-${index}s faq-item`} key={index}>
              <div className="faq-box">
                <button className="faq-button w-full bg-neutral-100 hover:bg-neutral-200 px-6 py-4 rounded-lg text-left transition-all duration-300 focus:outline-none">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#1D3557]">🔹 Q: {faq.question}</span>
                    <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div className="faq-content bg-white px-6 py-4 rounded-b-lg">
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default FaqSection;
