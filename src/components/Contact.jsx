import React, { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import styles from "../TerminalTheme.module.css";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "samarpratapyes.01@gmail.com",
    link: "mailto:samarpratapyes.01@gmail.com",
    type: "email"
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 9798499241",
    link: "tel:9798499241",
    type: "phone"
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Tiruchirappalli, Tamil Nadu",
    link: null,
    type: "location"
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/samar-singh-444bb927b/",
    type: "social"
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "View my repositories",
    link: "https://github.com/samarrcore",
    type: "social"
  }
];

const Contact = ({ onNavigate }) => {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [animatedContacts, setAnimatedContacts] = useState([]);
  const [form, setForm] = useState({ user_name: "", user_email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef();
  
  const command = "cat contact.vcard";

  useEffect(() => {
    // Type the command
    let i = 0;
    const typing = setInterval(() => {
      if (i < command.length) {
        setDisplayedCommand(command.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setShowOutput(true);
          // Animate contact info appearing
          contactInfo.forEach((contact, index) => {
            setTimeout(() => {
              setAnimatedContacts(prev => [...prev, contact]);
            }, index * 150);
          });
        }, 500);
      }
    }, 50);

    return () => clearInterval(typing);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    // EmailJS configuration
    const serviceId = 'default_service'; // You'll need to set this in EmailJS dashboard
    const templateId = 'template_rach02q';
    const publicKey = 'mgLpbuGgBZyyG_NvE';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
          setForm({ user_name: "", user_email: "", message: "" });
          setSending(false);
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError('Failed to send message. Please try again or contact me directly.');
          setSending(false);
        },
      );
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalButtons}>
              <div className={`${styles.terminalButton} ${styles.close}`}></div>
              <div className={`${styles.terminalButton} ${styles.minimize}`}></div>
              <div className={`${styles.terminalButton} ${styles.maximize}`}></div>
            </div>
            <div className={styles.terminalTitle}>Contact - samar@portfolio:~/contact</div>
          </div>
          
          <div className={styles.terminalContent}>
            <div className={styles.commandBlock}>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>samar@portfolio:~/contact$</span>
                <span className={styles.command}>{displayedCommand}</span>
                {displayedCommand.length < command.length && <span className={styles.cursor}>|</span>}
              </div>
              
              {showOutput && (
                <div className={styles.output}>
                  <div className={styles.contactHeader}>
                    <p>📞 Contact Information</p>
                    <p>Status: Available for opportunities</p>
                    <div className={styles.divider}>{'─'.repeat(60)}</div>
                  </div>

                  <div className={styles.contactLayout}>
                    <div className={styles.contactInfo}>
                      <h3 className={styles.contactSectionTitle}>Contact Details</h3>
                      {contactInfo
                        .filter(contact => animatedContacts.includes(contact))
                        .map((info, idx) => (
                          <div key={idx} className={styles.contactItem}>
                            <div className={styles.contactIcon}>{info.icon}</div>
                            <div className={styles.contactDetails}>
                              <div className={styles.contactLabel}>{info.label}</div>
                              {info.link ? (
                                <a 
                                  href={info.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className={styles.contactLink}
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <span className={styles.contactValue}>{info.value}</span>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className={styles.contactForm}>
                      <h3 className={styles.contactSectionTitle}>Send Message</h3>
                      <form ref={formRef} onSubmit={handleSubmit} className={styles.messageForm}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Name:</label>
                          <input 
                            type="text" 
                            name="user_name" 
                            value={form.user_name} 
                            onChange={handleChange} 
                            required 
                            className={styles.formInput}
                            disabled={sending}
                          />
                        </div>
                        
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Email:</label>
                          <input 
                            type="email" 
                            name="user_email" 
                            value={form.user_email} 
                            onChange={handleChange} 
                            required 
                            className={styles.formInput}
                            disabled={sending}
                          />
                        </div>
                        
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Message:</label>
                          <textarea 
                            name="message" 
                            value={form.message} 
                            onChange={handleChange} 
                            rows={4} 
                            required 
                            className={styles.formTextarea}
                            disabled={sending}
                          />
                        </div>
                        
                        <button type="submit" className={styles.formButton} disabled={sending}>
                          {sending ? 'Sending...' : 'Send Message'}
                        </button>
                        
                        {submitted && (
                          <div className={styles.formSuccess}>
                            ✓ Message sent successfully! I'll get back to you soon.
                          </div>
                        )}
                        
                        {error && (
                          <div className={styles.formError}>
                            ✗ {error}
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.navigationHelp}>
              <p>💡 Use terminal commands to navigate:</p>
              <div className={styles.commandList}>
                <span onClick={() => onNavigate('home')} className={styles.clickableCommand}>home</span>
                <span onClick={() => onNavigate('about')} className={styles.clickableCommand}>about</span>
                <span onClick={() => onNavigate('skills')} className={styles.clickableCommand}>skills</span>
                <span onClick={() => onNavigate('portfolio')} className={styles.clickableCommand}>portfolio</span>
                <span onClick={() => onNavigate('services')} className={styles.clickableCommand}>services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
