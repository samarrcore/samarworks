
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'PiP Manager Extension',
      description: 'A browser extension for managing all media tabs with Picture-in-Picture functionality from a single interface. Enables seamless media control without switching tabs.',
      image: '/api/placeholder/400/250',
      tech: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Simon Says Game',
      description: 'A responsive and interactive memory game with difficulty modes, pattern recognition, and level tracking. Built with vanilla JavaScript for optimal performance.',
      image: '/api/placeholder/400/250',
      tech: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Big Tac Toe',
      description: 'Team-based extended version of classic tic-tac-toe with nested game boards. Features advanced game logic and multiplayer functionality.',
      image: '/api/placeholder/400/250',
      tech: ['JavaScript', 'Game Theory', 'HTML', 'CSS'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-card rounded-2xl overflow-hidden glow-border card-hover group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-electric-blue opacity-50">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dark-accent text-electric-blue text-xs rounded border border-electric-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-electric-blue/10 text-electric-blue rounded-lg hover:bg-electric-blue/20 transition-colors duration-300 text-sm">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-dark-bg transition-all duration-300 text-sm">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
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
