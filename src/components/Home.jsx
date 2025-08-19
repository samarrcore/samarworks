import React from "react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 opacity-20">
        <div 
          className="floating-element animate-float" 
          style={{
            position: 'absolute',
            top: '5rem',
            left: '5rem',
            width: '18rem',
            height: '18rem',
            background: 'var(--primary)'
          }}
        ></div>
        <div 
          className="floating-element animate-float" 
          style={{
            position: 'absolute',
            bottom: '5rem',
            right: '5rem',
            width: '24rem',
            height: '24rem',
            background: 'var(--accent)',
            animationDelay: '2s'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container text-center">
        <div className="animate-slide-up">
          {/* Profile Avatar */}
          <div className="mb-8">
            <div 
              className="mx-auto mb-8 rounded-full flex items-center justify-center shadow-2xl animate-float"
              style={{
                width: '10rem',
                height: '10rem',
                background: 'linear-gradient(135deg, var(--primary), var(--accent))'
              }}
            >
              <span className="text-5xl font-bold" style={{color: 'white'}}>SP</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-bold mb-6 leading-tight" style={{fontSize: 'clamp(3rem, 8vw, 6rem)'}}>
            <span className="block gradient-text">Samar Pratap Singh</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-secondary mb-8 font-light" style={{fontSize: 'clamp(1.25rem, 4vw, 2rem)'}}>
            Aspiring Developer & Creative Problem Solver
          </p>
          
          {/* Description */}
          <p className="text-muted mb-12 mx-auto leading-relaxed" style={{fontSize: '1.125rem', maxWidth: '32rem'}}>
            Building innovative solutions with modern technologies while pursuing excellence in Computer Science Engineering
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-6 justify-center" style={{gap: '1.5rem'}}>
            <button
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
              style={{
                padding: '1rem 2rem',
                borderRadius: '1rem',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="flex items-center justify-center">
                View My Work
                <svg className="ml-2 w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{marginLeft: '0.5rem', width: '1rem', height: '1rem'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-outline"
              style={{
                padding: '1rem 2rem',
                borderRadius: '1rem',
                fontWeight: '600'
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
