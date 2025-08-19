import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "samarpratapyes.01@gmail.com",
      link: "mailto:samarpratapyes.01@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 9798499241",
      link: "tel:9798499241"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Tiruchirappalli, Tamil Nadu",
      link: null
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/samar-singh-444bb927b/"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "View my repositories",
      link: "https://github.com/samarrcore"
    }
  ];

  return (
    <section id="contact" className="section py-24 bg-background-secondary">
      {/* Background decoration */}
      <div className="bg-decoration absolute inset-0">
        <div 
          className="floating-element animate-float"
          style={{
            position: 'absolute',
            top: '2.5rem',
            left: '2.5rem',
            width: '20rem',
            height: '20rem',
            background: 'var(--primary)'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <div className="gradient-border"></div>
          <p className="section-subtitle">
            Ready to start a conversation? I'd love to hear from you.
          </p>
        </div>

        <div 
          className="grid gap-16"
          style={{
            gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr'
          }}
        >
          {/* Contact Information */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Let's Connect</h3>
              <p className="text-secondary leading-relaxed mb-8 text-lg">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'm always excited to connect with fellow developers and potential clients.
              </p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start" style={{gap: '1rem'}}>
                  <div 
                    className="flex-shrink-0 flex items-center justify-center text-primary border transition-all"
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(16, 185, 129, 0.2))',
                      borderRadius: '1rem',
                      borderColor: 'rgba(139, 92, 246, 0.2)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)'}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 text-lg transition-colors">{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-secondary font-medium transition-colors"
                        style={{textDecoration: 'none'}}
                        onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-secondary font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-3xl font-bold text-primary mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div>
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="form-input"
                  style={{resize: 'none'}}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full"
                style={{
                  borderRadius: '1rem',
                  fontWeight: '700',
                  padding: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(139, 92, 246, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>

              {submitted && (
                <div 
                  className="glass text-accent px-6 py-4 rounded-2xl text-center font-semibold"
                  style={{border: '1px solid rgba(16, 185, 129, 0.5)'}}
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
