import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "../TerminalTheme.module.css";

const projects = [
  {
    title: "PiP Manager Extension",
    description: "A browser extension that manages multimedia tabs with Picture-in-Picture (PiP) controls from a single interface.",
    tech: ["JavaScript", "HTML", "CSS", "Browser APIs"],
    github: "https://github.com/samarrcore/pip-manager",
    category: "Extension"
  },
  {
    title: "Simon Says Game",
    description: "An interactive memory game with difficulty levels, flashing patterns, and level tracking system.",
    tech: ["JavaScript", "HTML", "CSS", "Game Logic"],
    github: "https://github.com/samarrcore/simon-says",
    category: "Game"
  },
  {
    title: "Big Tac Toe",
    description: "A team-based advanced tic-tac-toe game with nested boards and strategic gameplay.",
    tech: ["JavaScript", "HTML", "CSS", "Algorithm"],
    github: "https://github.com/samarrcore/big-tac-toe",
    category: "Game"
  },
];

const Portfolio = ({ onNavigate }) => {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [animatedProjects, setAnimatedProjects] = useState([]);
  
  const command = "ls -la projects/";

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
          // Animate projects appearing
          projects.forEach((project, index) => {
            setTimeout(() => {
              setAnimatedProjects(prev => [...prev, project]);
            }, index * 200);
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
            <div className={styles.terminalTitle}>Portfolio - samar@portfolio:~/projects</div>
          </div>
          
          <div className={styles.terminalContent}>
            <div className={styles.commandBlock}>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>samar@portfolio:~/projects$</span>
                <span className={styles.command}>{displayedCommand}</span>
                {displayedCommand.length < command.length && <span className={styles.cursor}>|</span>}
              </div>
              
              {showOutput && (
                <div className={styles.output}>
                  <div className={styles.portfolioHeader}>
                    <p>📁 Project Repository</p>
                    <p>Total: {projects.length} projects</p>
                    <div className={styles.divider}>{'─'.repeat(60)}</div>
                  </div>

                  <div className={styles.projectGrid}>
                    {projects
                      .filter(project => animatedProjects.includes(project))
                      .map(project => (
                        <div key={project.title} className={styles.projectCard}>
                          <div className={styles.projectHeader}>
                            <div className={styles.projectIcon}>
                              {project.category === 'Extension' ? '🔧' : '🎮'}
                            </div>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <div className={styles.projectCategory}>[{project.category}]</div>
                          </div>
                          
                          <div className={styles.projectDescription}>
                            {project.description}
                          </div>
                          
                          <div className={styles.techStack}>
                            {project.tech.map((tech) => (
                              <span key={tech} className={styles.techTag}>{tech}</span>
                            ))}
                          </div>
                          
                          <div className={styles.projectLinks}>
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className={styles.projectLink}
                            >
                              <FaGithub /> Source Code
                            </a>
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

export default Portfolio;
