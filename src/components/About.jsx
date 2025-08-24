import React, { useState, useEffect } from "react";
import styles from "../TerminalTheme.module.css";

const About = ({ onNavigate }) => {
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [displayedText3, setDisplayedText3] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showCursor3, setShowCursor3] = useState(false);
  
  const text1 = "Hi, I'm Samar Pratap Singh.";
  const text2 = "I'm a passionate developer who loves building innovative solutions.";
  const text3 = "Welcome to my digital workspace - explore using terminal commands!";

  useEffect(() => {
    // Type first text
    let i = 0;
    const typing1 = setInterval(() => {
      if (i < text1.length) {
        setDisplayedText1(text1.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing1);
        setShowCursor1(false);
        
        // Start typing second text after a pause
        setTimeout(() => {
          setShowCursor2(true);
          let j = 0;
          const typing2 = setInterval(() => {
            if (j < text2.length) {
              setDisplayedText2(text2.slice(0, j + 1));
              j++;
            } else {
              clearInterval(typing2);
              setShowCursor2(false);
              
              // Start typing third text after a pause
              setTimeout(() => {
                setShowCursor3(true);
                let k = 0;
                const typing3 = setInterval(() => {
                  if (k < text3.length) {
                    setDisplayedText3(text3.slice(0, k + 1));
                    k++;
                  } else {
                    clearInterval(typing3);
                    setShowCursor3(false);
                  }
                }, 50);
              }, 500);
            }
          }, 50);
        }, 500);
      }
    }, 80);

    return () => {
      clearInterval(typing1);
    };
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
            <div className={styles.terminalTitle}>About - samar@portfolio:~/about</div>
          </div>
          
          <div className={styles.terminalContent}>
            <div className={styles.commandBlock}>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>samar@portfolio:~/about$</span>
                <span className={styles.command}>whoami</span>
              </div>
              <div className={styles.output}>
                <p>
                  {displayedText1}
                  {showCursor1 && <span className={styles.cursor}>|</span>}
                </p>
                {displayedText2 && (
                  <p>
                    {displayedText2}
                    {showCursor2 && <span className={styles.cursor}>|</span>}
                  </p>
                )}
                {displayedText3 && (
                  <p>
                    {displayedText3}
                    {showCursor3 && <span className={styles.cursor}>|</span>}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Developer Profile</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Name:</span>
                  <span className={styles.infoValue}>Samar Pratap Singh</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Role:</span>
                  <span className={styles.infoValue}>Full Stack Developer</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Experience:</span>
                  <span className={styles.infoValue}>5+ Years</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>Remote/Global</span>
                </div>
              </div>
            </div>

            <div className={styles.navigationHelp}>
              <p>💡 Use terminal commands to navigate:</p>
              <div className={styles.commandList}>
                <span onClick={() => onNavigate('home')} className={styles.clickableCommand}>home</span>
                <span onClick={() => onNavigate('skills')} className={styles.clickableCommand}>skills</span>
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

export default About;
