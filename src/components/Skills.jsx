import React, { useState, useEffect } from "react";
import { FaCuttlefish, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaUsers, FaComments, FaClock } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import styles from "../TerminalTheme.module.css";

const skills = [
  { name: "C", icon: <FaCuttlefish />, category: "Programming", level: "Intermediate" },
  { name: "C++", icon: <FaCuttlefish />, category: "Programming", level: "Intermediate" },
  { name: "Java", icon: <FaJava />, category: "Programming", level: "Beginner" },
  { name: "Python", icon: <FaPython />, category: "Programming", level: "Intermediate" },
  { name: "HTML", icon: <FaHtml5 />, category: "Web", level: "Expert" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Web", level: "Expert" },
  { name: "JavaScript", icon: <FaJs />, category: "Web", level: "Intermediate" },
  { name: "React.js", icon: <FaReact />, category: "Web", level: "Beginner" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", level: "Beginner" },
  { name: "MySQL", icon: <SiMysql />, category: "Database", level: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database", level: "Intermediate" },
  { name: "Leadership", icon: <FaUsers />, category: "Soft Skills", level: "Advanced" },
  { name: "Communication", icon: <FaComments />, category: "Soft Skills", level: "Expert" },
  { name: "Time Management", icon: <FaClock />, category: "Soft Skills", level: "Advanced" },
];

const Skills = ({ onNavigate }) => {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  
  const command = "ls -la skills/";

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
          // Animate skills appearing
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, skill]);
            }, index * 100);
          });
        }, 500);
      }
    }, 50);

    return () => clearInterval(typing);
  }, []);

  const categories = [...new Set(skills.map(skill => skill.category))];

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
            <div className={styles.terminalTitle}>Skills - samar@portfolio:~/skills</div>
          </div>
          
          <div className={styles.terminalContent}>
            <div className={styles.commandBlock}>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>samar@portfolio:~/skills$</span>
                <span className={styles.command}>{displayedCommand}</span>
                {displayedCommand.length < command.length && <span className={styles.cursor}>|</span>}
              </div>
              
              {showOutput && (
                <div className={styles.output}>
                  <div className={styles.skillsHeader}>
                    <p>🛠️  Technical Skills & Expertise Directory</p>
                    <p>Total: {skills.length} skills across {categories.length} categories</p>
                    <div className={styles.divider}>{'─'.repeat(60)}</div>
                  </div>

                  {categories.map((category) => (
                    <div key={category} className={styles.skillCategory}>
                      <h3 className={styles.categoryTitle}>📁 {category}/</h3>
                      <div className={styles.skillGrid}>
                        {skills
                          .filter(skill => skill.category === category)
                          .filter(skill => animatedSkills.includes(skill))
                          .map(skill => (
                            <div key={skill.name} className={styles.skillItem}>
                              <div className={styles.skillIcon}>{skill.icon}</div>
                              <div className={styles.skillInfo}>
                                <div className={styles.skillName}>{skill.name}</div>
                                <div className={styles.skillLevel}>[{skill.level}]</div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.navigationHelp}>
              <p>💡 Use terminal commands to navigate:</p>
              <div className={styles.commandList}>
                <span onClick={() => onNavigate('home')} className={styles.clickableCommand}>home</span>
                <span onClick={() => onNavigate('about')} className={styles.clickableCommand}>about</span>
                <span onClick={() => onNavigate('portfolio')} className={styles.clickableCommand}>portfolio</span>
                <span onClick={() => onNavigate('services')} className={styles.clickableCommand}>services</span>
                <span onClick={() => onNavigate('contact')} className={styles.clickableCommand}>contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
