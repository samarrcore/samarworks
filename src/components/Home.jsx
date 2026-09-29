import React, { useState, useEffect, useRef } from "react";
import { sound } from "../utils/audio";
import { 
  FaTerminal, 
  FaUser, 
  FaCode, 
  FaProjectDiagram, 
  FaTools, 
  FaPaperPlane, 
  FaBolt, 
  FaPlay, 
  FaTrashAlt,
  FaCheckCircle
} from "react-icons/fa";

const ASCII_LOGO = `
 ███████╗ █████╗ ███╗   ███╗ █████╗ ██████╗ ██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗███████╗
 ██╔════╝██╔══██╗████╗ ████║██╔══██╗██╔══██╗██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝██╔════╝
 ███████╗███████║██╔████╔██║███████║██████╔╝██║ █╗ ██║██║   ██║██████╔╝█████╔╝ ███████╗
 ╚════██║██╔══██║██║╚██╔╝██║██╔══██║██╔══██╗██║███╗██║██║   ██║██╔══██╗██╔═██╗ ╚════██║
 ███████║██║  ██║██║ ╚═╝ ██║██║  ██║██║  ██║╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗███████║
 ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
`;

const SYSTEM_SPECS = [
  { label: "DEVELOPER", val: "Samar Pratap Singh" },
  { label: "INSTITUTE", val: "SRM IST-Trichy (B.Tech CSE '27) // GPA: 9.2" },
  { label: "CORE FOCUS", val: "React Native, Expo, Mobile Apps, Python ML" },
  { label: "CERTIFICATIONS", val: "Oracle OCI 2025 Associate // Microsoft DSA" },
  { label: "FEATURED WORK", val: "SmartJourney (Mobile GPS AI), Movie-Recommender" },
];

const INITIAL_HISTORY = [
  { type: "banner", content: ASCII_LOGO },
  { 
    type: "system", 
    content: "⚡ Terminal Workstation Initialized. Welcome to SamarWorks Interactive Shell." 
  },
  { 
    type: "hint", 
    content: "💡 Tip: Type 'help' for command list, or click any directive below to navigate." 
  }
];

const Home = ({ onNavigate, onTriggerSpecial }) => {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    sound.playEnter();
    const [command, ...args] = trimmed.split(" ");
    const cmd = command.toLowerCase();

    setCmdHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Append executed command line to history
    setHistory(prev => [...prev, { type: "command", content: trimmed }]);

    switch (cmd) {
      case "help":
        setHistory(prev => [
          ...prev,
          {
            type: "output",
            content: (
              <div className="cli-help-block">
                <div className="help-title">AVAILABLE SYSTEM COMMANDS:</div>
                <div className="help-grid">
                  <div><code>whoami</code> - Read developer bio & philosophy</div>
                  <div><code>skills</code> - Inspect tech stack & tools</div>
                  <div><code>projects</code> - Browse portfolio repository</div>
                  <div><code>services</code> - View service offerings</div>
                  <div><code>contact</code> - Send email / view contact info</div>
                  <div><code>matrix</code> - Launch Matrix digital rain</div>
                  <div><code>neofetch</code> - Display system architecture specs</div>
                  <div><code>clear</code> - Flush terminal output buffer</div>
                  <div><code>date</code> - Print current system timestamp</div>
                  <div><code>echo &lt;msg&gt;</code> - Echo message to standard output</div>
                </div>
              </div>
            )
          }
        ]);
        break;

      case "clear":
      case "cls":
        setHistory([
          { type: "system", content: "Terminal buffer reset. Type 'help' for commands." }
        ]);
        break;

      case "whoami":
      case "about":
        setHistory(prev => [
          ...prev,
          { type: "output", content: "→ Navigating to developer profile (~/whoami)..." }
        ]);
        setTimeout(() => onNavigate("about"), 300);
        break;

      case "skills":
        setHistory(prev => [
          ...prev,
          { type: "output", content: "→ Accessing technical proficiencies directory (~/skills)..." }
        ]);
        setTimeout(() => onNavigate("skills"), 300);
        break;

      case "projects":
      case "portfolio":
        setHistory(prev => [
          ...prev,
          { type: "output", content: "→ Inspecting software repositories (~/projects)..." }
        ]);
        setTimeout(() => onNavigate("portfolio"), 300);
        break;

      case "services":
        setHistory(prev => [
          ...prev,
          { type: "output", content: "→ Querying services daemon (~/services)..." }
        ]);
        setTimeout(() => onNavigate("services"), 300);
        break;

      case "contact":
        setHistory(prev => [
          ...prev,
          { type: "output", content: "→ Initializing communication protocol (~/contact)..." }
        ]);
        setTimeout(() => onNavigate("contact"), 300);
        break;

      case "matrix":
        setHistory(prev => [
          ...prev,
          { type: "output", content: "→ Connecting to mainframe stream..." }
        ]);
        if (onTriggerSpecial) onTriggerSpecial("matrix");
        break;

      case "neofetch":
      case "specs":
        setHistory(prev => [
          ...prev,
          {
            type: "output",
            content: (
              <div className="cli-neofetch">
                <div className="neofetch-art">
                  {`   /\\_/\\  \n  ( o.o ) \n   > ^ <  `}
                </div>
                <div className="neofetch-data">
                  <div className="neofetch-row"><span className="neofetch-label">OS:</span> SamarOS GNU/Linux x86_64</div>
                  <div className="neofetch-row"><span className="neofetch-label">Host:</span> SRM IST-Trichy (B.Tech CSE '27)</div>
                  <div className="neofetch-row"><span className="neofetch-label">GPA:</span> 9.2 / 10.0 (Dean's Honor Scale)</div>
                  <div className="neofetch-row"><span className="neofetch-label">Mobile:</span> React Native, Expo, Expo Router</div>
                  <div className="neofetch-row"><span className="neofetch-label">Web/ML:</span> React 19, TypeScript, Python, Pandas</div>
                  <div className="neofetch-row"><span className="neofetch-label">Cloud:</span> Oracle Cloud (OCI 2025 Associate)</div>
                </div>
              </div>
            )
          }
        ]);
        break;

      case "date":
        setHistory(prev => [
          ...prev,
          { type: "output", content: new Date().toUTCString() }
        ]);
        break;

      case "sudo":
        sound.playError();
        setHistory(prev => [
          ...prev,
          { type: "error", content: "samar is not in the sudoers file. This incident will be reported to Santa 🎅" }
        ]);
        break;

      case "echo":
        setHistory(prev => [
          ...prev,
          { type: "output", content: args.join(" ") || "" }
        ]);
        break;

      default:
        sound.playError();
        setHistory(prev => [
          ...prev,
          { 
            type: "error", 
            content: `Command not recognized: '${trimmed}'. Type 'help' or click an action below.` 
          }
        ]);
    }
  };

  const handleKeyDown = (e) => {
    sound.playKey();

    if (e.key === "Enter") {
      executeCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const candidates = ["whoami", "skills", "projects", "services", "contact", "matrix", "clear", "help", "neofetch"];
      const match = candidates.find(c => c.startsWith(inputVal.toLowerCase().trim()));
      if (match) setInputVal(match);
    }
  };

  const handleQuickAction = (cmd) => {
    executeCommand(cmd);
  };

  return (
    <div className="terminal-page home-page">
      <div className="terminal-window">
        {/* Terminal Header Chrome */}
        <div className="terminal-window-header">
          <div className="window-dots">
            <span 
              className="dot dot-close" 
              onClick={() => {
                sound.playEnter();
                setHistory(INITIAL_HISTORY);
              }}
              title="Reset terminal"
            ></span>
            <span className="dot dot-min" title="Minimize"></span>
            <span className="dot dot-max" title="Maximize"></span>
          </div>
          <div className="window-title">
            <FaTerminal className="title-icon" />
            samar@samarworks-os: ~/portfolio (bash)
          </div>
          <div className="window-status-tag">
            <span className="pulse-green"></span>
            READY
          </div>
        </div>

        {/* Terminal Main Body */}
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          {/* Quick System Badge Bar */}
          <div className="system-overview-card">
            <div className="specs-list">
              {SYSTEM_SPECS.map(s => (
                <div key={s.label} className="spec-badge">
                  <span className="spec-key">{s.label}:</span>
                  <span className="spec-val">{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Fast Jump Command Bar */}
          <div className="cli-action-strip">
            <span className="strip-title">QUICK DIRECTIVES:</span>
            <button onClick={() => handleQuickAction("whoami")} className="strip-btn">
              <FaUser /> $ whoami
            </button>
            <button onClick={() => handleQuickAction("skills")} className="strip-btn">
              <FaCode /> $ skills
            </button>
            <button onClick={() => handleQuickAction("projects")} className="strip-btn">
              <FaProjectDiagram /> $ projects
            </button>
            <button onClick={() => handleQuickAction("services")} className="strip-btn">
              <FaTools /> $ services
            </button>
            <button onClick={() => handleQuickAction("contact")} className="strip-btn">
              <FaPaperPlane /> $ contact
            </button>
            <button onClick={() => handleQuickAction("matrix")} className="strip-btn highlight">
              <FaBolt /> $ matrix
            </button>
          </div>

          {/* Output Stream */}
          <div className="history-output-stream">
            {history.map((item, idx) => (
              <div key={idx} className={`history-entry ${item.type}`}>
                {item.type === "command" && (
                  <div className="cli-prompt-line">
                    <span className="prompt-user">samar@dev</span>
                    <span className="prompt-sep">:</span>
                    <span className="prompt-path">~</span>
                    <span className="prompt-char">$</span>
                    <span className="prompt-text">{item.content}</span>
                  </div>
                )}
                {item.type === "banner" && (
                  <pre className="ascii-banner">{item.content}</pre>
                )}
                {item.type === "system" && (
                  <div className="system-msg">{item.content}</div>
                )}
                {item.type === "hint" && (
                  <div className="hint-msg">{item.content}</div>
                )}
                {item.type === "output" && (
                  <div className="output-msg">{item.content}</div>
                )}
                {item.type === "error" && (
                  <div className="error-msg">{item.content}</div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Active Input Line */}
          <div className="active-cli-line">
            <span className="prompt-user">samar@dev</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-char">$</span>
            <input
              ref={inputRef}
              type="text"
              className="active-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck="false"
              autoComplete="off"
              placeholder="Type command ('help', 'whoami', 'skills', 'projects', 'contact')..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
