import React, { useState, useRef } from "react";
import { sound } from "../utils/audio";
import { FaTerminal, FaChevronRight } from "react-icons/fa";

const QUICK_CHIPS = ["whoami", "skills", "projects", "services", "contact", "matrix", "clear", "help"];

const BottomCommandDock = ({ onExecuteCommand }) => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    sound.playEnter();
    setHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    onExecuteCommand(cmd);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    sound.playKey();

    // Tab completion
    if (e.key === "Tab") {
      e.preventDefault();
      const match = QUICK_CHIPS.find(c => c.startsWith(inputVal.toLowerCase().trim()));
      if (match) {
        setInputVal(match);
      }
      return;
    }

    // Command history navigation
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    }
  };

  const handleChipClick = (chip) => {
    sound.playEnter();
    onExecuteCommand(chip);
  };

  return (
    <div className="bottom-command-dock">
      <div className="dock-container">
        <form onSubmit={handleSubmit} className="dock-input-form">
          <div className="dock-prompt">
            <FaTerminal className="dock-terminal-icon" />
            <span className="dock-user">samar@dev</span>
            <span className="dock-colon">:</span>
            <span className="dock-tilde">~</span>
            <span className="dock-sign">$</span>
          </div>
          <input
            ref={inputRef}
            type="text"
            className="dock-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command here (e.g. whoami, skills, projects, matrix) or click a chip..."
            autoComplete="off"
            spellCheck="false"
          />
          <button type="submit" className="dock-send-btn" title="Run Command">
            <FaChevronRight />
          </button>
        </form>

        <div className="dock-chips">
          <span className="dock-chips-label">SUGGESTIONS:</span>
          {QUICK_CHIPS.map(chip => (
            <button
              key={chip}
              type="button"
              className="dock-chip"
              onClick={() => handleChipClick(chip)}
            >
              ${chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomCommandDock;
