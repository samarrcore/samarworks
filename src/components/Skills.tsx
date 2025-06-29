
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
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Technologies and skills I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-dark-card p-8 rounded-2xl glow-border card-hover">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-dark-accent text-foreground rounded-full text-sm border border-electric-blue/20 hover:border-electric-blue/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
