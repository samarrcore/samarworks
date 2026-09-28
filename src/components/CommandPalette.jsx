import React, { useState, useEffect, useRef } from "react";
import { sound } from "../utils/audio";
import { FaTerminal, FaSearch, FaTimes, FaArrowRight } from "react-icons/fa";

const ALL_COMMANDS = [
  { cmd: "home", desc: "Initialize primary terminal session", action: (nav) => nav("home") },
  { cmd: "whoami", desc: "Display Samar's developer profile & specs", action: (nav) => nav("about") },
  { cmd: "skills", desc: "List technical skills, tools & proficiencies", action: (nav) => nav("skills") },
  { cmd: "projects", desc: "Inspect software repository and git log", action: (nav) => nav("portfolio") },
  { cmd: "services", desc: "View engineering & design service daemon", action: (nav) => nav("services") },
  { cmd: "contact", desc: "Transmit message & open digital vCard", action: (nav) => nav("contact") },
  { cmd: "matrix", desc: "Activate Matrix digital rain visualization", special: "matrix" },
  { cmd: "clear", desc: "Reset terminal viewport buffer", special: "clear" },
  { cmd: "help", desc: "List all executable system directives", special: "help" },
];

const CommandPalette = ({ isOpen, onClose, onNavigate, onTriggerSpecial }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filteredCommands = ALL_COMMANDS.filter(c => 
    c.cmd.toLowerCase().includes(query.toLowerCase()) || 
    c.desc.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    sound.playKey();
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredCommands[selectedIndex];
      if (selected) {
        sound.playEnter();
        executeItem(selected);
      }
    }
  };

  const executeItem = (item) => {
    if (item.special) {
      onTriggerSpecial(item.special);
    } else if (item.action) {
      item.action(onNavigate);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette-modal" onClick={(e) => e.stopPropagation()}>
        <div className="palette-header">
          <FaTerminal className="palette-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or jump: whoami, skills, projects, matrix..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="palette-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="palette-list">
          {filteredCommands.length === 0 ? (
            <div className="palette-empty">
              <span>No command found for "{query}". Try <code>help</code>, <code>whoami</code>, <code>skills</code>.</span>
            </div>
          ) : (
            filteredCommands.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.cmd}
                  className={`palette-item ${isSelected ? "selected" : ""}`}
                  onClick={() => executeItem(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="item-cmd-badge">
                    <span className="dollar">$</span> {item.cmd}
                  </div>
                  <div className="item-desc">{item.desc}</div>
                  <FaArrowRight className="item-arrow" />
                </div>
              );
            })
          )}
        </div>

        <div className="palette-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span><kbd>Enter</kbd> to execute</span>
          <span><kbd>Esc</kbd> to dismiss</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
