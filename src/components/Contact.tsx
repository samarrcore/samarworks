
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-electric-blue/20 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-40 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 bg-electric-blue text-dark-bg px-4 py-2 rounded-full text-sm font-semibold animate-float">
        Open for new projects
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-gradient">Let's</span>
                <span className="text-electric-blue">→</span><br />
                <span className="text-gradient">Connect.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and design.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a href="mailto:samarpratapyes.01@gmail.com" className="text-foreground hover:text-electric-blue transition-colors duration-300">
                    samarpratapyes.01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <a href="tel:+919798499241" className="text-foreground hover:text-electric-blue transition-colors duration-300">
                    +91 9798499241
                  </a>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-electric-blue/10 rounded-lg hover:bg-electric-blue/20 transition-colors duration-300 group">
                  <Github className="w-6 h-6 text-electric-blue" />
                </a>
                <a href="#" className="p-3 bg-electric-blue/10 rounded-lg hover:bg-electric-blue/20 transition-colors duration-300 group">
                  <Linkedin className="w-6 h-6 text-electric-blue" />
                </a>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-8">
              <div className="text-muted-foreground text-sm mb-2">SAMAR P.</div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-dark-card p-8 rounded-3xl glow-border relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-muted-foreground text-sm mb-2">
                  Your name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-muted-foreground/30 pb-2 text-foreground focus:border-electric-blue focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-muted-foreground text-sm mb-2">
                  Your email address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-muted-foreground/30 pb-2 text-foreground focus:border-electric-blue focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-muted-foreground text-sm mb-2">
                  Tell about the project:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-muted-foreground/30 pb-2 text-foreground focus:border-electric-blue focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Describe your project..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center space-x-2 bg-electric-blue text-dark-bg px-6 py-3 rounded-full font-semibold hover:bg-electric-blue/90 transition-colors duration-300"
              >
                <span>Send</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            {/* Floating decoration in form */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-electric-blue/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
