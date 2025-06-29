
import React from 'react';
import { Monitor, Palette, Image, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'UI / UX Designer.',
      description: 'Clean, responsive websites built with modern technologies.',
      projects: '13+ Projects',
      color: 'from-gray-600 to-gray-800',
      textColor: 'text-white'
    },
    {
      icon: ArrowRight,
      title: 'Front End Developer.',
      description: 'Interactive web applications with modern frameworks.',
      projects: '100+ Projects',
      color: 'from-blue-500 to-purple-600',
      textColor: 'text-white'
    },
    {
      icon: Image,
      title: 'Social Media Designer.',
      description: 'Creative visual content for social platforms.',
      projects: '50+ Projects',
      color: 'from-green-400 to-blue-500',
      textColor: 'text-white'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-electric-blue/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`p-8 rounded-3xl bg-gradient-to-br ${service.color} relative overflow-hidden group hover:scale-105 transition-transform duration-300`}>
              <div className="relative z-10">
                <div className="mb-6">
                  <service.icon className={`w-8 h-8 ${service.textColor}`} />
                </div>
                
                <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>
                  {service.title}
                </h3>
                
                <p className={`${service.textColor} opacity-80 mb-6 text-sm leading-relaxed`}>
                  {service.description}
                </p>
                
                <div className={`text-sm ${service.textColor} opacity-60`}>
                  {service.projects}
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
