import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "PiP Manager Extension",
    description: "A browser extension that manages multimedia tabs with Picture-in-Picture (PiP) controls from a single interface.",
    tech: ["JavaScript", "HTML", "CSS", "Browser APIs"],
    github: "https://github.com/samarrcore/pip-manager",
    demo: "#",
    category: "Extension"
  },
  {
    title: "Simon Says Game",
    description: "An interactive memory game with difficulty levels, flashing patterns, and level tracking system.",
    tech: ["JavaScript", "HTML", "CSS", "Game Logic"],
    github: "https://github.com/samarrcore/simon-says",
    demo: "#",
    category: "Game"
  },
  {
    title: "ByteTalk",
    description: "A modern communication platform designed for seamless conversations and efficient messaging.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/samarrcore/bytetalk",
    demo: "#",
    category: "Web App"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section py-24 bg-background">
      {/* Background decoration */}
      <div className="bg-decoration absolute inset-0">
        <div 
          className="floating-element animate-float"
          style={{
            position: 'absolute',
            bottom: '5rem',
            right: '5rem',
            width: '24rem',
            height: '24rem',
            background: 'var(--accent)'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title gradient-text">Portfolio</h2>
          <div className="gradient-border"></div>
          <p className="section-subtitle">
            A showcase of my recent projects and creative solutions
          </p>
        </div>

        <div 
          className="grid gap-8"
          style={{
            gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, minmax(0, 1fr))' : window.innerWidth >= 768 ? 'repeat(2, minmax(0, 1fr))' : '1fr'
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="project-image">
                <div className="text-7xl font-bold" style={{color: 'rgba(29, 205, 159, 0.4)'}}>
                  {project.title.charAt(0)}
                </div>
                <div 
                  className="absolute"
                  style={{
                    top: '1rem',
                    right: '1rem'
                  }}
                >
                  <span 
                    className="glass text-primary px-3 py-1 rounded-full text-xs font-semibold"
                    style={{border: '1px solid rgba(29, 205, 159, 0.3)'}}
                  >
                    {project.category}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="project-overlay">
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="glass rounded-full transition-all"
                      style={{
                        padding: '0.75rem',
                        border: '1px solid rgba(29, 205, 159, 0.3)',
                        color: 'var(--primary)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--primary)';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.color = 'var(--primary)';
                      }}
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap mb-6" style={{gap: '0.75rem'}}>
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-primary font-medium"
                      style={{
                        background: 'rgba(29, 205, 159, 0.2)',
                        border: '1px solid rgba(29, 205, 159, 0.3)',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 glass text-primary rounded-xl font-semibold text-sm transition-all"
                    style={{border: '2px solid rgba(29, 205, 159, 0.5)'}}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--primary)';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.color = 'var(--primary)';
                    }}
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
