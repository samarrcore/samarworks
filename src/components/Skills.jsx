import React from "react";
import { FaCuttlefish, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaUsers, FaComments, FaClock } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "C", icon: <FaCuttlefish className="text-3xl" style={{color: '#60a5fa'}} />, category: "Programming" },
  { name: "C++", icon: <FaCuttlefish className="text-3xl" style={{color: '#3b82f6'}} />, category: "Programming" },
  { name: "Java", icon: <FaJava className="text-3xl" style={{color: '#fb923c'}} />, category: "Programming" },
  { name: "Python", icon: <FaPython className="text-3xl" style={{color: '#60a5fa'}} />, category: "Programming" },
  { name: "HTML", icon: <FaHtml5 className="text-3xl" style={{color: '#fb923c'}} />, category: "Web" },
  { name: "CSS", icon: <FaCss3Alt className="text-3xl" style={{color: '#60a5fa'}} />, category: "Web" },
  { name: "JavaScript", icon: <FaJs className="text-3xl" style={{color: '#fbbf24'}} />, category: "Web" },
  { name: "React.js", icon: <FaReact className="text-3xl" style={{color: '#22d3ee'}} />, category: "Web" },
  { name: "Node.js", icon: <FaNodeJs className="text-3xl" style={{color: '#4ade80'}} />, category: "Backend" },
  { name: "MySQL", icon: <SiMysql className="text-3xl" style={{color: '#60a5fa'}} />, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl" style={{color: '#4ade80'}} />, category: "Database" },
  { name: "Leadership", icon: <FaUsers className="text-3xl" style={{color: 'var(--primary)'}} />, category: "Soft Skills" },
  { name: "Communication", icon: <FaComments className="text-3xl" style={{color: 'var(--primary)'}} />, category: "Soft Skills" },
  { name: "Time Management", icon: <FaClock className="text-3xl" style={{color: 'var(--primary)'}} />, category: "Soft Skills" },
];

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="section py-24 bg-background">
      {/* Background decoration */}
      <div className="bg-decoration absolute inset-0">
        <div 
          className="floating-element animate-float"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '2.5rem',
            width: '18rem',
            height: '18rem',
            background: 'var(--accent)'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
          <div className="gradient-border"></div>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and personal competencies
          </p>
        </div>

        <div className="flex flex-col items-center" style={{gap: '5rem'}}>
          {categories.map((category, categoryIndex) => (
            <div 
              key={category} 
              className="animate-fade-in w-full max-w-6xl" 
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <h3 className="text-3xl font-bold text-primary text-center" style={{marginBottom: '2.5rem'}}>{category}</h3>
              <div 
                className="flex flex-wrap justify-center gap-6"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '1.5rem'
                }}
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="skill-card"
                      style={{
                        animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                        width: '140px',
                        minWidth: '140px'
                      }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="skill-icon mb-4">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-secondary text-sm transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
