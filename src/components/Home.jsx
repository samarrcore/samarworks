import React, { useState, useEffect, useRef } from "react";
import styles from "../TerminalTheme.module.css";
import terminalStyles from "./InteractiveTerminal.module.css";

const commands = {
  help: "Available commands: help, about, portfolio, skills, services, contact, home, clear",
  about: "Loading About page...",
  portfolio: "Loading Portfolio page...",
  skills: "Loading Skills page...",
  services: "Loading Services page...",
  contact: "Loading Contact page...",
  home: "Returning to home terminal...",
  clear: "CLEAR"
};

const Home = ({ onNavigate, pendingCommand }) => {
  const [history, setHistory] = useState([
    { type: "output", content: "Welcome to SamarWorks Terminal v2.0" },
    { type: "output", content: "🌟 Explore the portfolio using terminal commands!" },
    { type: "output", content: "Type 'help' to see available commands" }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isAutoTyping, setIsAutoTyping] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && !isAutoTyping) {
      inputRef.current.focus();
    }
  }, [isAutoTyping]);

  // Handle pending command auto-typing
  useEffect(() => {
    if (pendingCommand && !isAutoTyping) {
      setIsAutoTyping(true);
      setCurrentInput("");
      
      // Auto-type the command
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < pendingCommand.length) {
          setCurrentInput(pendingCommand.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          // Execute the command after typing is complete
          setTimeout(() => {
            executeCommand(pendingCommand);
            setCurrentInput("");
            setIsAutoTyping(false);
          }, 500);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [pendingCommand]);

  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    
    // Add command to history
    setHistory(prev => [...prev, { type: "command", content: `$ ${cmd}` }]);

    if (command === "clear") {
      setHistory([
        { type: "output", content: "Welcome to SamarWorks Terminal v2.0" },
        { type: "output", content: "🌟 Explore the portfolio using terminal commands!" },
        { type: "output", content: "Type 'help' to see available commands" }
      ]);
      return;
    }

    if (commands[command]) {
      setHistory(prev => [...prev, { type: "output", content: commands[command] }]);
      
      // Navigate to pages
      setTimeout(() => {
        switch (command) {
          case "about":
            onNavigate('about');
            break;
          case "portfolio":
            onNavigate('portfolio');
            break;
          case "skills":
            onNavigate('skills');
            break;
          case "services":
            onNavigate('services');
            break;
          case "contact":
            onNavigate('contact');
            break;
          case "home":
            onNavigate('home');
            break;
        }
      }, 1000);
    } else {
      setHistory(prev => [...prev, { type: "output", content: `Command not found: ${command}. Type 'help' for available commands.` }]);
    }
  };

  const handleKeyPress = (e) => {
    if (isAutoTyping) return; // Don't allow manual input during auto-typing
    
    if (e.key === "Enter") {
      if (currentInput.trim()) {
        executeCommand(currentInput);
      }
      setCurrentInput("");
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current && !isAutoTyping) {
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
                onChange={(e) => !isAutoTyping && setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                autoComplete="off"
                spellCheck="false"
                disabled={isAutoTyping}
                style={{ 
                  opacity: isAutoTyping ? 0.7 : 1,
                  pointerEvents: isAutoTyping ? 'none' : 'auto'
                }}
              />
              <span className={terminalStyles.cursor}>|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
