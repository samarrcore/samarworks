
import React from 'react';
import { GraduationCap, BookOpen, Trophy, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-card/30 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-electric-blue/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-electric-blue font-medium text-lg mb-2">PROBLEM SOLVER</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            I enjoy solving problems with clean<br />
            scalable solutions.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I have a genuine passion for inspiring design. I have a strong foundation in computer science 
            and interactive design, and am interested in user-centered branding and visual systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Stats Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-electric-blue mb-2">2+</div>
                <div className="text-muted-foreground">Years of<br />experience.</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-electric-blue mb-2">10+</div>
                <div className="text-muted-foreground">Projects<br />Completed.</div>
              </div>
            </div>

            {/* Brand Logos Placeholder */}
            <div className="flex items-center justify-between opacity-60">
              <div className="text-muted-foreground font-semibold">SRM IST</div>
              <div className="text-muted-foregreen font-semibold">GitHub</div>
              <div className="text-muted-foreground font-semibold">VS Code</div>
              <div className="text-muted-foreground font-semibold">React</div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <div className="bg-dark-card p-6 rounded-2xl glow-border relative">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg">
                  <Trophy className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground">10th Grade</h4>
                    <span className="text-electric-blue font-bold">93.6%</span>
                  </div>
                  <p className="text-muted-foreground">St. Karen's High School, Patna, Bihar</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card p-6 rounded-2xl glow-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground">12th Grade</h4>
                    <span className="text-electric-blue font-bold">73.5%</span>
                  </div>
                  <p className="text-muted-foreground">St. Karen's High School</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card p-6 rounded-2xl glow-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground">B.Tech (CSE)</h4>
                    <span className="text-electric-blue font-bold">Expected 2027</span>
                  </div>
                  <p className="text-muted-foreground">SRM IST, Tiruchirappalli</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-dark-card p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-4 right-4 w-12 h-12 bg-electric-blue/20 rounded-full"></div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-dark-bg" />
                </div>
                <span className="text-electric-blue font-semibold">Samar's</span>
                <span className="text-foreground">talent and care for his</span>
              </div>
              <p className="text-foreground text-xl font-medium">
                work delivered excellent results on all aspects of our project.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-muted-foreground text-sm">Professor at Computer Science Department</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-electric-blue/20 to-teal-400/20 rounded-full flex items-center justify-center border border-electric-blue/30">
                <span className="text-2xl font-bold text-electric-blue">SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
