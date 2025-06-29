
import React from 'react';
import { GraduationCap, BookOpen, Trophy, Users, Star, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-card/30 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-electric-blue/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-20 bg-electric-blue text-dark-bg px-4 py-2 rounded-full text-sm font-semibold animate-float" style={{ animationDelay: '0.5s' }}>
        Student Developer
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">About</span>
            <span className="text-electric-blue">→</span><br />
            <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            I am currently a second year B.Tech student pursuing my degree in Computer Science and Engineering from SRM IST, Tiruchirappalli. 
            I have always had a passion for creating things with tech and continually learning about emerging technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - Personal Info & Stats */}
          <div className="space-y-8">
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center bg-dark-card/50 backdrop-blur-sm p-6 rounded-3xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group">
                <div className="text-4xl font-bold text-electric-blue mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-muted-foreground">Years of<br />Learning</div>
              </div>
              <div className="text-center bg-dark-card/50 backdrop-blur-sm p-6 rounded-3xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group">
                <div className="text-4xl font-bold text-electric-blue mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-muted-foreground">Projects<br />Completed</div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-dark-card/50 backdrop-blur-sm p-8 rounded-3xl border border-electric-blue/20 relative overflow-hidden">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Star className="w-6 h-6 text-electric-blue mr-3" />
                Beyond Code
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy music, poetry writing, and games — both physical and virtual. 
                My hunger for knowledge and hardworking nature fuel my journey of continuous improvement. 
                I'm a team player who leads effectively and aspires to finish my degree with both academic excellence and practical experience.
              </p>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-electric-blue/10 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Education Cards */}
          <div className="space-y-6">
            <div className="bg-dark-card/70 backdrop-blur-sm p-6 rounded-3xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-electric-blue/10 rounded-2xl group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <Trophy className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-300">10th Grade</h4>
                    <span className="text-electric-blue font-bold text-xl">93.6%</span>
                  </div>
                  <p className="text-muted-foreground">St. Karen's High School, Patna, Bihar</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-electric-blue/10 rounded-full opacity-50"></div>
            </div>

            <div className="bg-dark-card/70 backdrop-blur-sm p-6 rounded-3xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-electric-blue/10 rounded-2xl group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-300">12th Grade</h4>
                    <span className="text-electric-blue font-bold text-xl">73.5%</span>
                  </div>
                  <p className="text-muted-foreground">St. Karen's High School</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-electric-blue/10 rounded-full opacity-50"></div>
            </div>

            <div className="bg-dark-card/70 backdrop-blur-sm p-6 rounded-3xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-electric-blue/10 rounded-2xl group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-300">B.Tech (CSE)</h4>
                    <span className="text-electric-blue font-bold">2027</span>
                  </div>
                  <p className="text-muted-foreground">SRM IST, Tiruchirappalli</p>
                  <div className="mt-2">
                    <span className="text-xs bg-electric-blue/10 text-electric-blue px-2 py-1 rounded-full">Currently Pursuing</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-electric-blue/10 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-br from-dark-card/70 to-electric-blue/5 backdrop-blur-sm p-8 rounded-3xl border border-electric-blue/30 relative overflow-hidden">
          <div className="absolute top-4 right-4 w-12 h-12 bg-electric-blue/20 rounded-full"></div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-8 h-8 text-electric-blue" />
                <span className="text-electric-blue font-semibold text-lg">My Vision</span>
              </div>
              <p className="text-foreground text-xl font-medium leading-relaxed">
                "To thrive in the tech industry by combining academic excellence with practical experience, 
                creating innovative solutions that make a difference."
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-electric-blue/20 to-teal-400/20 rounded-full flex items-center justify-center border border-electric-blue/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-electric-blue">SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
