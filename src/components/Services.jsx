import React, { useState, useEffect } from "react";
import { FaPaintBrush, FaLaptopCode, FaCode, FaMobile } from "react-icons/fa";
import styles from "../TerminalTheme.module.css";

const services = [
  {
    name: "Web Development",
    icon: <FaLaptopCode />,
    description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
    features: ["Responsive Design", "Performance Optimization", "Modern Frameworks", "SEO Friendly"],
    type: "development"
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: "User-centered design solutions that enhance usability and create meaningful experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    type: "design"
  },
  {
    name: "Frontend Development",
    icon: <FaCode />,
    description: "Interactive user interfaces using React, Vue, or vanilla JavaScript with modern CSS frameworks.",
    features: ["React/Vue.js", "TypeScript", "Tailwind CSS", "State Management"],
    type: "development"
  },
  {
    name: "Mobile-First Design",
    icon: <FaMobile />,
    description: "Mobile-optimized experiences that work seamlessly across all devices and screen sizes.",
    features: ["Progressive Web Apps", "Touch Interfaces", "Offline Support", "App-like Experience"],
    type: "design"
  },
];

const Services = ({ onNavigate }) => {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [animatedServices, setAnimatedServices] = useState([]);
  
  const command = "cat services.json";

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
          // Animate services appearing
          services.forEach((service, index) => {
            setTimeout(() => {
              setAnimatedServices(prev => [...prev, service]);
            }, index * 150);
          });
        }, 500);
      }
    }, 50);

    return () => clearInterval(typing);
  }, []);

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
            <div className={styles.terminalTitle}>Services - samar@portfolio:~/services</div>
          </div>
          
          <div className={styles.terminalContent}>
            <div className={styles.commandBlock}>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>samar@portfolio:~/services$</span>
                <span className={styles.command}>{displayedCommand}</span>
                {displayedCommand.length < command.length && <span className={styles.cursor}>|</span>}
              </div>
              
              {showOutput && (
                <div className={styles.output}>
                  <div className={styles.servicesHeader}>
                    <p>🛠️  Available Services Configuration</p>
                    <p>Version: 2.0.0 | Total: {services.length} services</p>
                    <div className={styles.divider}>{'─'.repeat(60)}</div>
                  </div>

                  <div className={styles.servicesGrid}>
                    {services
                      .filter(service => animatedServices.includes(service))
                      .map(service => (
                        <div key={service.name} className={styles.serviceCard}>
                          <div className={styles.serviceHeader}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <div className={styles.serviceInfo}>
                              <h3 className={styles.serviceName}>{service.name}</h3>
                              <div className={styles.serviceType}>[{service.type}]</div>
                            </div>
                          </div>
                          
                          <div className={styles.serviceDescription}>
                            {service.description}
                          </div>
                          
                          <div className={styles.serviceFeatures}>
                            <div className={styles.featuresTitle}>Features:</div>
                            {service.features.map((feature) => (
                              <div key={feature} className={styles.featureItem}>
                                • {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
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
                <span onClick={() => onNavigate('contact')} className={styles.clickableCommand}>contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
