import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background-secondary relative">
      {/* Background decoration */}
      <div className="bg-decoration absolute inset-0">
        <div 
          className="floating-element animate-float"
          style={{
            position: 'absolute',
            top: '2.5rem',
            right: '2.5rem',
            width: '16rem',
            height: '16rem',
            background: 'var(--primary)'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="gradient-border"></div>
          <p className="section-subtitle">
            Passionate about technology and driven by curiosity
          </p>
        </div>

        <div className="grid gap-16 items-center" style={{gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr'}}>
          {/* Profile Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div 
                className="glass flex items-center justify-center shadow-2xl"
                style={{
                  width: '24rem',
                  height: '24rem',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(29, 205, 159, 0.2)'
                }}
              >
                <span className="gradient-text font-bold" style={{fontSize: '8rem'}}>SP</span>
              </div>
              {/* Floating elements */}
              <div 
                className="absolute bg-primary rounded-full animate-float"
                style={{
                  top: '-1rem',
                  right: '-1rem',
                  width: '2rem',
                  height: '2rem'
                }}
              ></div>
              <div 
                className="absolute bg-accent rounded-full animate-float"
                style={{
                  bottom: '-1rem',
                  left: '-1rem',
                  width: '1.5rem',
                  height: '1.5rem',
                  animationDelay: '1s'
                }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <p className="text-lg text-secondary leading-relaxed">
                I am currently a third-year B.Tech student pursuing Computer Science and Engineering 
                at <span className="text-primary font-semibold">SRM IST, Tiruchirappalli</span>. 
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                I enjoy collaborating on challenging projects. Beyond coding, I find inspiration in music, poetry writing, and both physical 
                and virtual games. 
              </p>
            </div>

            {/* Education Section */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <h3 className="text-3xl font-bold text-primary mb-8">Education</h3>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div 
                  className="glass rounded-2xl p-6 transition-all"
                  style={{
                    border: '1px solid rgba(29, 205, 159, 0.2)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = 'rgba(29, 205, 159, 0.4)'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'rgba(29, 205, 159, 0.2)'}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-primary text-lg transition-colors">
                      B.Tech in Computer Science Engineering
                    </h4>
                    <span 
                      className="text-sm font-bold text-accent px-3 py-1 rounded-full"
                      style={{background: 'rgba(29, 205, 159, 0.2)'}}
                    >
                      CGPA: 9.09
                    </span>
                  </div>
                  <p className="text-secondary">SRM Institute of Science and Technology, Tiruchirappalli</p>
                  <p className="text-muted text-sm mt-2">2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
