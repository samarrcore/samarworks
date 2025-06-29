
import React from 'react';
import { GraduationCap, BookOpen, Trophy } from 'lucide-react';

const About = () => {
  const education = [
    {
      level: '10th Grade',
      score: '93.6%',
      school: 'St. Karen\'s High School, Patna, Bihar',
      icon: Trophy
    },
    {
      level: '12th Grade',
      score: '73.5%',
      school: 'St. Karen\'s High School',
      icon: BookOpen
    },
    {
      level: 'B.Tech (CSE)',
      score: 'Expected 2027',
      school: 'SRM IST, Tiruchirappalli',
      icon: GraduationCap
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-teal-400/20 flex items-center justify-center border border-electric-blue/30">
              <span className="text-6xl font-bold text-electric-blue">SP</span>
            </div>
            
            <div className="bg-dark-card p-8 rounded-2xl glow-border">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am currently a second year B.Tech student pursuing my degree in Computer Science and 
                Engineering from SRM IST, Tiruchirappalli. I have always had a passion for creating 
                things with tech and continually learning about emerging technologies.
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed text-lg">
                I aspire to finish my degree with both academic excellence and practical experience to 
                thrive in the tech industry. I'm a team player who leads effectively, and I enjoy music, 
                poetry writing, and games — both physical and virtual. My hunger for knowledge and 
                hardworking nature fuel my journey of continuous improvement.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-electric-blue mb-8">Educational Background</h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-dark-card p-6 rounded-xl glow-border card-hover">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-electric-blue/10 rounded-lg">
                    <edu.icon className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{edu.level}</h4>
                      <span className="text-electric-blue font-bold">{edu.score}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
