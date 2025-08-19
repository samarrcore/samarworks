import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container py-4">
        <div className="flex justify-center items-center">
          <div className="text-xl font-bold gradient-text" style={{marginRight: '3rem'}}>
            Samar Pratap Singh
          </div>
          
          {/* Desktop Menu */}
          <ul className="flex gap-8" style={{display: window.innerWidth >= 768 ? 'flex' : 'none'}}>
            {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="nav-link"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - positioned absolutely for mobile */}
          <button 
            className="p-2 rounded-lg transition-colors absolute right-4"
            style={{
              display: window.innerWidth < 768 ? 'block' : 'none',
              background: isMobileMenuOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className="block bg-primary transition-all"
                style={{
                  height: '2px',
                  width: '24px',
                  transform: isMobileMenuOpen ? 'rotate(45deg) translateY(2px)' : 'none'
                }}
              ></span>
              <span 
                className="block bg-primary transition-all"
                style={{
                  height: '2px',
                  width: '24px',
                  marginTop: '4px',
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
              ></span>
              <span 
                className="block bg-primary transition-all"
                style={{
                  height: '2px',
                  width: '24px',
                  marginTop: '4px',
                  transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
                }}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu" style={{display: window.innerWidth < 768 ? 'block' : 'none'}}>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
