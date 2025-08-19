import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Background decoration */}
      <div className="bg-decoration absolute inset-0">
        <div 
          className="floating-element"
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '24rem',
            height: '24rem',
            background: 'var(--primary)'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container">
        <div 
          className="grid gap-12 mb-12"
          style={{
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, minmax(0, 1fr))' : '1fr'
          }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-6">Samar Pratap Singh</h3>
            <p className="text-secondary leading-relaxed text-lg">
              Aspiring developer passionate about creating innovative solutions 
              and building meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-6">Quick Links</h4>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="footer-link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-6">Get In Touch</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <a 
                href="mailto:samarpratapyes.01@gmail.com"
                className="flex items-center text-secondary transition-colors"
                style={{gap: '0.75rem', textDecoration: 'none'}}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <div 
                  className="flex items-center justify-center transition-colors"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: 'rgba(139, 92, 246, 0.2)',
                    borderRadius: '0.5rem'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(139, 92, 246, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(139, 92, 246, 0.2)'}
                >
                  <FaEnvelope />
                </div>
                <span className="font-medium">samarpratapyes.01@gmail.com</span>
              </a>
              
              <div className="flex pt-4" style={{gap: '1rem'}}>
                <a 
                  href="https://www.linkedin.com/in/samar-singh-444bb927b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="https://github.com/samarrcore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="border-t pt-8 flex justify-between items-center"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
            gap: window.innerWidth < 768 ? '1rem' : '0'
          }}
        >
        </div>
      </div>
    </footer>
  );
};

export default Footer;
