
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Aspiring Developer | Passionate Creator | Tech Explorer';

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-electric-blue rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Picture Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-teal-400 p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
              <span className="text-4xl font-bold text-electric-blue">SP</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Samar Pratap Singh</span>
        </h1>
        
        <div className="h-16 flex items-center justify-center mb-8">
          <span className="text-xl md:text-2xl text-muted-foreground font-medium">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Second-year B.Tech Computer Science student passionate about creating innovative digital solutions 
          and exploring emerging technologies.
        </p>

        <button 
          onClick={scrollToPortfolio}
          className="group relative px-8 py-4 bg-transparent border-2 border-electric-blue text-electric-blue font-semibold rounded-lg transition-all duration-300 hover:bg-electric-blue hover:text-dark-bg transform hover:scale-105"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
