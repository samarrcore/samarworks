
import React from 'react';
import { Globe, Palette, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Simple Web Design',
      description: 'Clean, responsive websites built with modern technologies and best practices.',
      features: ['Responsive Design', 'Modern UI/UX', 'Fast Loading', 'SEO Optimized']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Image,
      title: 'Logo Creation',
      description: 'Memorable brand identities that capture your vision and connect with your audience.',
      features: ['Brand Identity', 'Vector Graphics', 'Style Guides', 'Multiple Formats']
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Services</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            What I can help you with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-dark-card p-8 rounded-2xl glow-border card-hover group">
              <div className="p-4 bg-electric-blue/10 rounded-xl w-fit mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-electric-blue" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-dark-bg transition-all duration-300 font-medium">
                Hire Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
