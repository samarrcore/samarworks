import React from "react";
import { FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    name: "Web Development",
    icon: <FaLaptopCode className="text-4xl" style={{color: 'var(--primary)', marginBottom: '1rem'}} />,
    description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
    features: [" Responsive Design", " Performance Optimization", " Modern Frameworks", " SEO Friendly"]
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush className="text-4xl" style={{color: 'var(--primary)', marginBottom: '1rem'}} />,
    description: "User-centered design solutions that enhance usability and create meaningful experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
];

const Services = () => {
  return (
    <section id="services" className="section py-24 bg-background-secondary">
      {/* Background decoration */}
      <div className="bg-decoration absolute inset-0">
        <div 
          className="floating-element animate-float"
          style={{
            position: 'absolute',
            top: '5rem',
            right: '5rem',
            width: '20rem',
            height: '20rem',
            background: 'var(--primary)'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title gradient-text">Services</h2>
          <div className="gradient-border"></div>
          <p className="section-subtitle">
            Comprehensive solutions tailored to bring your ideas to life
          </p>
        </div>

        <div 
          className="grid gap-8 justify-center"
          style={{
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {services.map((service, index) => (
            <div 
              key={service.name} 
              className="card"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(29, 205, 159, 0.5)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(29, 205, 159, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-center mb-8">
                <div 
                  className="inline-flex items-center justify-center rounded-3xl mb-6 transition-transform"
                  style={{
                    width: '6rem',
                    height: '6rem',
                    background: 'linear-gradient(135deg, rgba(29, 205, 159, 0.2), rgba(22, 153, 118, 0.2))'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 transition-colors">
                  {service.name}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mb-8" style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={feature} 
                    className="flex items-center text-sm transition-colors"
                    style={{animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s`}}
                  >
                    <div 
                      className="rounded-full mr-3 flex-shrink-0"
                      style={{
                        width: '0.5rem',
                        height: '0.5rem',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))'
                      }}
                    ></div>
                    <span className="text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary w-full"
                style={{
                  borderRadius: '1rem',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(29, 205, 159, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
