
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Frameworks (Learning)',
      skills: ['React.js', 'Node.js'],
      color: 'from-electric-blue to-cyan-400'
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Figma'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Empathy', 'Leadership', 'Teamwork', 'Time Management'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-electric-blue/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Skills &</span><br />
            <span className="text-gradient">Technologies</span>
            <span className="text-electric-blue">→</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The technologies and skills I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-dark-card/50 backdrop-blur-sm p-8 rounded-3xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group hover:scale-105 relative overflow-hidden">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-6 h-6 bg-white/90 rounded"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-6 group-hover:text-electric-blue transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-dark-accent/70 text-foreground rounded-full text-sm border border-electric-blue/20 hover:border-electric-blue/50 hover:bg-electric-blue/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Background decoration */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-electric-blue/10 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
