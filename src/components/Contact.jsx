import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
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
                      <form onSubmit={handleSubmit} className={styles.messageForm}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Name:</label>
                          <input 
                            type="text" 
                            name="name" 
                            value={form.name} 
                            onChange={handleChange} 
                            required 
                            className={styles.formInput}
                          />
                        </div>
                        
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Email:</label>
                          <input 
                            type="email" 
                            name="email" 
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                            className={styles.formInput}
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
                          />
                        </div>
                        
                        <button type="submit" className={styles.formButton}>
                          Send Message
                        </button>
                        
                        {submitted && (
                          <div className={styles.formSuccess}>
                            ✓ Message sent successfully!
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
