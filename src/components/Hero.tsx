
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
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-electric-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-40 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-40 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating Labels with better positioning */}
        <div className="absolute top-28 right-28 bg-muted/80 text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium animate-float backdrop-blur-sm border border-muted-foreground/20">
          Developer
        </div>
        <div className="absolute bottom-40 left-28 bg-muted/80 text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium animate-float backdrop-blur-sm border border-muted-foreground/20" style={{ animationDelay: '1.5s' }}>
          Problem Solver
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-electric-blue font-medium text-lg">THIS IS ME</p>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-gradient">Samar</span><br />
                <span className="text-gradient">Pratap Singh</span>
                <span className="text-electric-blue">→</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <div className="h-8 flex items-center">
                <span className="text-xl text-muted-foreground font-medium">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                A passionate B.Tech Computer Science student & programmer from SRM IST, Tiruchirappalli. 
                I love to add clarity to complicated concepts by design.
              </p>
            </div>

            <button 
              onClick={scrollToPortfolio}
              className="group relative px-8 py-4 bg-transparent border-2 border-electric-blue text-electric-blue font-semibold rounded-full transition-all duration-300 hover:bg-electric-blue hover:text-dark-bg transform hover:scale-105"
            >
              <span className="relative z-10">Explore My Work →</span>
            </button>
          </div>

          {/* Right Side - Profile Image with Floating Elements */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Main Profile Container */}
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-electric-blue/20 to-teal-400/20 border border-electric-blue/30 relative overflow-hidden">
                <img 
                  src="https://i.postimg.cc/BZdpL1G6/Whats-App-Image-2025-06-30-at-01-46-23-68d0ecbe.jpg" 
                  alt="Samar Pratap Singh"
                  className="w-full h-full object-cover rounded-3xl"
                />
                
                {/* Floating skill bubbles around profile with better spacing */}
                <div className="absolute -top-6 -right-6 bg-muted/90 text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-muted-foreground/20">
                  Experience designer
                </div>
                <div className="absolute -bottom-6 -left-6 bg-muted/90 text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-muted-foreground/20">
                  and developer remotely
                </div>
                <div className="absolute top-1/2 -right-10 bg-muted/90 text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium transform -translate-y-1/2 backdrop-blur-sm border border-muted-foreground/20">
                  from India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
