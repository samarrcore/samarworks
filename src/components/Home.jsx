import React, { useState, useEffect, useRef } from "react";
import styles from "../TerminalTheme.module.css";
import terminalStyles from "./InteractiveTerminal.module.css";

const commands = {
  help: "Available commands: help, whoami, portfolio, skills, services, contact, clear",
  whoami: "Unlocking About section...",
  portfolio: "Unlocking Portfolio section...",
  skills: "Unlocking Skills section...",
  services: "Unlocking Services section...",
  contact: "Unlocking Contact section...",
  clear: "CLEAR"
};

const Home = ({ onSectionUnlock }) => {
  const [history, setHistory] = useState([
    { type: "output", content: "Welcome to SamarWorks Terminal v1.0" },
    { type: "output", content: "🔒 Navigation is locked. Use terminal commands to explore!" },
    { type: "output", content: "Type 'help' to see available commands" }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    
    // Add command to history
    setHistory(prev => [...prev, { type: "command", content: `$ ${cmd}` }]);

    if (command === "clear") {
      setHistory([
        { type: "output", content: "Welcome to SamarWorks Terminal v1.0" },
        { type: "output", content: "🔒 Navigation is locked. Use terminal commands to explore!" },
        { type: "output", content: "Type 'help' to see available commands" }
      ]);
      return;
    }

    if (commands[command]) {
      setHistory(prev => [...prev, { type: "output", content: commands[command] }]);
      
      // Unlock and navigate to sections
      setTimeout(() => {
        switch (command) {
          case "whoami":
            onSectionUnlock('about');
            setTimeout(() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            break;
          case "portfolio":
            onSectionUnlock('portfolio');
            setTimeout(() => {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            break;
          case "skills":
            onSectionUnlock('skills');
            setTimeout(() => {
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            break;
          case "services":
            onSectionUnlock('services');
            setTimeout(() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            break;
          case "contact":
            onSectionUnlock('contact');
            setTimeout(() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            break;
        }
      }, 1000);
    } else {
      setHistory(prev => [...prev, { type: "output", content: `Command not found: ${command}. Type 'help' for available commands.` }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (currentInput.trim()) {
        executeCommand(currentInput);
      }
      setCurrentInput("");
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className={styles.terminal} id="home">
      <div className={terminalStyles.terminalContainer}>
        <div className={terminalStyles.terminalWindow} onClick={handleTerminalClick}>
          <div className={terminalStyles.terminalHeader}>
            <div className={terminalStyles.terminalButtons}>
              <div className={`${terminalStyles.terminalButton} ${terminalStyles.close}`}></div>
              <div className={`${terminalStyles.terminalButton} ${terminalStyles.minimize}`}></div>
              <div className={`${terminalStyles.terminalButton} ${terminalStyles.maximize}`}></div>
            </div>
            <div className={terminalStyles.terminalTitle}>samar@portfolio:~</div>
          </div>
          <div className={terminalStyles.terminalBody}>
            {history.map((item, index) => (
              <div key={index}>
                {item.type === "command" ? (
                  <div className={terminalStyles.terminalLine}>
                    <span className={terminalStyles.prompt}>samar@portfolio:~$</span>
                    <span className={terminalStyles.command}>{item.content.substring(2)}</span>
                  </div>
                ) : (
                  <div className={terminalStyles.output}>{item.content}</div>
                )}
              </div>
            ))}
            <div className={terminalStyles.inputLine}>
              <span className={terminalStyles.prompt}>samar@portfolio:~$</span>
              <input
                ref={inputRef}
                className={terminalStyles.terminalInput}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                autoComplete="off"
                spellCheck="false"
              />
              <span className={terminalStyles.cursor}>|</span>
            </div>
            <div className={terminalStyles.helpText}>
              💡 Try typing: help, whoami, portfolio, skills, services, contact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
