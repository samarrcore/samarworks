import React, { useState, useEffect } from "react";
import sectionStyles from "./Section.module.css";

const About = () => {
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  
  const text1 = "Hi, I'm Samar Pratap Singh. I love building things and solving problems with code.";
  const text2 = "Skills: React, JS, CSS, Terminal Aesthetics, and more.";

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
            }
          }, 50);
        }, 500);
      }
    }, 50);

    return () => {
      clearInterval(typing1);
    };
  }, []);

  return (
    <section className={sectionStyles.section} id="about">
      <h2 className={sectionStyles.sectionTitle}>About Me</h2>
      <div className={sectionStyles.sectionContent}>
        A comprehensive overview of who I am and what I do
      </div>
      <div className={sectionStyles.terminalBlock}>
        <div className={sectionStyles.commandLine}>
          <span className={sectionStyles.prompt}>$</span> whoami
        </div>
        <div className={sectionStyles.output}>
          <p>
            {displayedText1}
            {showCursor1 && <span style={{ animation: 'blink 1s steps(1) infinite' }}>|</span>}
          </p>
          {displayedText2 && (
            <p>
              {displayedText2}
              {showCursor2 && <span style={{ animation: 'blink 1s steps(1) infinite' }}>|</span>}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
