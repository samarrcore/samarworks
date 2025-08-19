import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-2xl">
              <span className="text-8xl text-primary font-bold">SP</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-text-light leading-relaxed mb-6">
                I am currently a second-year B.Tech student pursuing Computer Science and Engineering 
                at SRM IST, Tiruchirappalli. With a passion for creating innovative solutions with technology, 
                I continuously explore emerging technologies and strive for both academic excellence and 
                practical experience.
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                As a natural team player with leadership qualities, I enjoy collaborating on challenging 
                projects. Beyond coding, I find inspiration in music, poetry writing, and both physical 
                and virtual games. My hunger for knowledge and dedication drive my continuous growth 
                in the tech industry.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent mb-6">Education</h3>
              
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-accent">B.Tech in Computer Science Engineering</h4>
                  <span className="text-sm text-text-light">2023 - 2027</span>
                </div>
                <p className="text-text-light">SRM Institute of Science and Technology, Tiruchirappalli</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-accent">Higher Secondary (12th)</h4>
                  <span className="text-sm text-text-light font-medium text-primary">73.5%</span>
                </div>
                <p className="text-text-light">St. Karen's High School, Patna, Bihar</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-accent">Secondary (10th)</h4>
                  <span className="text-sm text-text-light font-medium text-primary">93.6%</span>
                </div>
                <p className="text-text-light">St. Karen's High School, Patna, Bihar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
