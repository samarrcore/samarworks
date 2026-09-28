import React, { useState, useEffect } from "react";
import { sound } from "../utils/audio";
import { 
  FaTerminal, 
  FaUserAstronaut, 
  FaCode, 
  FaFolderOpen, 
  FaServer, 
  FaEnvelope, 
  FaVolumeUp, 
  FaVolumeMute, 
  FaTv,
  FaBolt
} from "react-icons/fa";

const WorkstationHeader = ({ 
  currentPage, 
  onNavigate, 
  soundEnabled, 
  setSoundEnabled, 
  crtEnabled, 
  setCrtEnabled,
  onOpenMatrix,
  onOpenPalette
}) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: "home", label: "home", cmd: "init", icon: <FaTerminal /> },
    { id: "about", label: "whoami", cmd: "whoami", icon: <FaUserAstronaut /> },
    { id: "skills", label: "skills", cmd: "ls skills/", icon: <FaCode /> },
    { id: "portfolio", label: "projects", cmd: "git log", icon: <FaFolderOpen /> },
    { id: "services", label: "services", cmd: "systemctl", icon: <FaServer /> },
    { id: "contact", label: "contact", cmd: "ping samar", icon: <FaEnvelope /> },
  ];

  const handleTabClick = (pageId) => {
    sound.playEnter();
    onNavigate(pageId);
  };

  const handleSoundToggle = () => {
    const nextState = sound.toggle();
    setSoundEnabled(nextState);
  };

  const handleCrtToggle = () => {
    sound.playKey();
    setCrtEnabled(prev => !prev);
  };

  return (
    <header className="workstation-header">
      <div className="header-left">
        <div className="system-badge">
          <span className="system-dot"></span>
          <span className="system-brand">SAMAR-OS</span>
          <span className="system-version">v2.5</span>
        </div>
        <div className="system-host">
          samar@portfolio:<span className="path-text">~/{currentPage === 'home' ? '' : currentPage}</span>
        </div>
      </div>

      <nav className="header-nav">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`nav-tab ${isActive ? "active" : ""}`}
              title={`Execute: $ ${item.cmd}`}
            >
              <span className="tab-icon">{item.icon}</span>
              <span className="tab-label">{item.label}</span>
              {isActive && <span className="tab-indicator"></span>}
            </button>
          );
        })}
      </nav>

      <div className="header-right">
        <button
          onClick={handleSoundToggle}
          className={`control-btn ${soundEnabled ? "active" : "muted"}`}
          title={soundEnabled ? "Mute mechanical sounds" : "Enable mechanical sounds"}
        >
          {soundEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
          <span className="btn-label">{soundEnabled ? "SFX" : "MUTED"}</span>
        </button>

        <button
          onClick={handleCrtToggle}
          className={`control-btn ${crtEnabled ? "active" : ""}`}
          title="Toggle retro CRT scanlines"
        >
          <FaTv />
          <span className="btn-label">CRT</span>
        </button>

        <button
          onClick={() => {
            sound.playEnter();
            onOpenMatrix();
          }}
          className="control-btn matrix-btn"
          title="Launch Matrix digital rain"
        >
          <FaBolt />
          <span className="btn-label">MATRIX</span>
        </button>

        <button
          onClick={() => {
            sound.playKey();
            onOpenPalette();
          }}
          className="control-btn palette-btn"
          title="Open Command Launcher (Ctrl+K or /)"
        >
          <span className="key-hint">⌘K</span>
        </button>

        <div className="clock-display">
          {time}
        </div>
      </div>
    </header>
  );
};

export default WorkstationHeader;
