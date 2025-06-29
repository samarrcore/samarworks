
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'PiP Manager Extension',
      description: 'A browser extension for managing all media tabs with Picture-in-Picture functionality from a single interface. Enables seamless media control without switching tabs.',
      image: '/api/placeholder/400/250',
      tech: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS'],
      gradient: 'from-blue-500 to-purple-600',
      featured: true
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
    <section id="portfolio" className="py-20 bg-dark-card/30 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-electric-blue/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-float">
        Featured Work
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Featured</span>
            <span className="text-electric-blue">→</span><br />
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''} bg-dark-card/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group hover:scale-105 relative`}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl font-bold text-electric-blue opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-electric-blue text-dark-bg px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
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
                      className="px-3 py-1 bg-dark-accent/70 text-electric-blue text-xs rounded-full border border-electric-blue/20 hover:border-electric-blue/40 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-electric-blue/10 text-electric-blue rounded-2xl hover:bg-electric-blue/20 transition-colors duration-300 text-sm group">
                    <Github size={16} />
                    <span>Code</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-electric-blue/30 text-electric-blue rounded-2xl hover:bg-electric-blue hover:text-dark-bg transition-all duration-300 text-sm group">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-electric-blue text-electric-blue font-semibold rounded-full transition-all duration-300 hover:bg-electric-blue hover:text-dark-bg transform hover:scale-105">
            <span className="relative z-10 flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
