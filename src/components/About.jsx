import React, { useState, useEffect } from "react";
import { sound } from "../utils/audio";
import { 
  FaUserAstronaut, 
  FaTerminal, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaHeart, 
  FaCode,
  FaArrowRight
} from "react-icons/fa";

const AVATAR_ASCII = `
   .----------------.
  |  .------------.  |
  | |   SAMAR      | |
  | |   DEV v2.5   | |
  | |   (^_^)      | |
  | |  <[==]>      | |
  | |   /  \\       | |
  |  '------------'  |
   '----------------'
`;

const STATS = [
  { label: "EXP LEVEL", value: "5+ Months Daily Code", detail: "Fast-learning fullstack generalist" },
  { label: "EDUCATION", value: "Computer Science", detail: "NIT Trichy / Engineering mindset" },
  { label: "BASE LOCATION", value: "Tamil Nadu, India", detail: "Remote & Worldwide collaborative" },
  { label: "CORE CREED", value: "Anti-Slop Craft", detail: "Intentional, high-performance web apps" },
];

const PHILOSOPHIES = [
  {
    tag: "01 // TASTE OVER TEMPLATES",
    desc: "Every interface must feel tailored and distinctive. No generic boilerplates or bland defaults."
  },
  {
    tag: "02 // SNAPPY RESPONSIVENESS",
    desc: "Zero unnecessary loading spinners. Fluid zero-friction interactions designed for human flow."
  },
  {
    tag: "03 // FULL SPECTRUM COGNITION",
    desc: "From database schemas and API integrations to pixel-perfect micro-interactions and terminal aesthetics."
  }
];

const About = ({ onNavigate }) => {
  const [typedCommand, setTypedCommand] = useState("");
  const fullCommand = "whoami --verbose --all";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-page sub-page about-page">
      <div className="terminal-window">
        {/* Terminal Header */}
        <div className="terminal-window-header">
          <div className="window-dots">
            <span className="dot dot-close" onClick={() => onNavigate("home")}></span>
            <span className="dot dot-min"></span>
            <span className="dot dot-max"></span>
          </div>
          <div className="window-title">
            <FaTerminal className="title-icon" />
            samar@samarworks-os: ~/whoami (cat bio.md)
          </div>
          <div className="window-status-tag">PROFILE_OK</div>
        </div>

        {/* Content Body */}
        <div className="terminal-body">
          {/* Active Command Line Header */}
          <div className="cli-prompt-line">
            <span className="prompt-user">samar@dev</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~/whoami</span>
            <span className="prompt-char">$</span>
            <span className="prompt-text">{typedCommand}</span>
            {typedCommand.length < fullCommand.length && (
              <span className="terminal-blinking-cursor">█</span>
            )}
          </div>

          <div className="about-grid">
            {/* Left Column: Terminal Neofetch Card */}
            <div className="about-sidebar-card">
              <pre className="avatar-ascii">{AVATAR_ASCII}</pre>
              <div className="profile-identity">
                <h2 className="profile-name">Samar Pratap Singh</h2>
                <div className="profile-role">Full Stack Developer & Designer</div>
                <div className="profile-location">
                  <FaMapMarkerAlt /> Tiruchirappalli, Tamil Nadu
                </div>
              </div>

              <div className="quick-spec-table">
                <div className="spec-line">
                  <span className="spec-k">STATUS</span>
                  <span className="spec-v active-status">● Open to Work</span>
                </div>
                <div className="spec-line">
                  <span className="spec-k">SHELL</span>
                  <span className="spec-v">zsh / React 19</span>
                </div>
                <div className="spec-line">
                  <span className="spec-k">WORK STYLE</span>
                  <span className="spec-v">Autonomous & Rapid</span>
                </div>
                <div className="spec-line">
                  <span className="spec-k">CONTACT</span>
                  <span className="spec-v">samarpratapyes.01</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  sound.playEnter();
                  onNavigate("contact");
                }}
                className="cli-action-btn primary"
              >
                $ ping samar --contact <FaArrowRight />
              </button>
            </div>

            {/* Right Column: Bio & Core Philosophy */}
            <div className="about-main-content">
              <div className="terminal-card">
                <div className="card-header">
                  <span className="card-tag">SYSTEM_BIOGRAPHY</span>
                  <span className="card-file">bio.markdown</span>
                </div>
                <div className="bio-prose">
                  <p>
                    I am an engineer, developer, and interface creator driven by a deep curiosity for how software feels under the fingers. I specialize in building responsive, personality-rich applications with modern technologies like React, Tailwind, and Node.js.
                  </p>
                  <p>
                    Rather than building generic cookie-cutter web pages, I craft memorable digital experiences where function and tactile design reinforce each other. Whether designing browser extensions, interactive games, or full-stack web platforms, I obsess over performance, clarity, and intentional aesthetics.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="stats-metric-grid">
                {STATS.map(stat => (
                  <div key={stat.label} className="metric-box">
                    <div className="metric-header">{stat.label}</div>
                    <div className="metric-value">{stat.value}</div>
                    <div className="metric-detail">{stat.detail}</div>
                  </div>
                ))}
              </div>

              {/* Philosophy Cards */}
              <div className="terminal-card">
                <div className="card-header">
                  <span className="card-tag">ENGINEERING_MANIFESTO</span>
                  <span className="card-file">principles.cfg</span>
                </div>
                <div className="principles-list">
                  {PHILOSOPHIES.map(p => (
                    <div key={p.tag} className="principle-item">
                      <div className="principle-tag">{p.tag}</div>
                      <div className="principle-desc">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Router Action */}
              <div className="subpage-nav-bar">
                <span className="nav-bar-label">PROCEED TO DIRECTORY:</span>
                <div className="nav-bar-buttons">
                  <button onClick={() => onNavigate("skills")} className="nav-pill">
                    $ ls skills/
                  </button>
                  <button onClick={() => onNavigate("portfolio")} className="nav-pill">
                    $ git log projects/
                  </button>
                  <button onClick={() => onNavigate("services")} className="nav-pill">
                    $ systemctl services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
