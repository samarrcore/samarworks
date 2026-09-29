import React, { useState, useEffect } from "react";
import { sound } from "../utils/audio";
import { 
  FaUserAstronaut, 
  FaTerminal, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaCertificate, 
  FaAward, 
  FaCode,
  FaArrowRight,
  FaCheck
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
  { label: "ACADEMICS", value: "B.Tech CSE (2023 - 2027)", detail: "SRM IST-Trichy // GPA: 9.2 / 10" },
  { label: "CERTIFICATIONS", value: "Oracle OCI 2025 Certified", detail: "Microsoft DSA, Coursera ML & IoT" },
  { label: "ENGINEERING FOCUS", value: "Mobile (React Native) & Fullstack", detail: "Python ML, Web Dev, State Architecture" },
  { label: "BASE LOCATION", value: "Trichy, TN // Patna, Bihar", detail: "Remote & Worldwide Collaborative" },
];

const CERTIFICATIONS = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    id: "323479580OCI25AICFA",
    year: "2025"
  },
  {
    name: "Data Structures And Algorithms Professional Certification",
    issuer: "Microsoft / Coursera",
    id: "Verified Credential",
    year: "2024"
  },
  {
    name: "Machine Learning Specialization Certification",
    issuer: "Coursera",
    id: "Verified Credential",
    year: "2024"
  },
  {
    name: "Internet Of Things (IoT) Systems Certification",
    issuer: "Coursera",
    id: "Verified Credential",
    year: "2024"
  }
];

const PHILOSOPHIES = [
  {
    tag: "01 // MOBILE & SYSTEM RESILIENCE",
    desc: "From battery-aware background GPS polling (SmartJourney) to offline-first AsyncStorage state (Habit Tracker), I build software that performs reliably in real-world mobile conditions."
  },
  {
    tag: "02 // DATA & ML APPLIED PRACTICALLY",
    desc: "Vectorizing 5,000+ movie embeddings using Cosine Similarity, Pandas, and NumPy to power responsive, zero-latency recommendation workflows."
  },
  {
    tag: "03 // ACADEMIC RIGOR & CLEAN CODE",
    desc: "Maintaining a 9.2 GPA at SRM IST-Trichy while building end-to-end applications in React Native, TypeScript, Expo, Python, and modern web frameworks."
  }
];

const About = ({ onNavigate }) => {
  const [typedCommand, setTypedCommand] = useState("");
  const fullCommand = "whoami --academic-profile --certs --verbose";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
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
            samar@samarworks-os: ~/whoami (cat resume.json)
          </div>
          <div className="window-status-tag">SRM_IST // 9.2_GPA</div>
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
                <div className="profile-role">Full Stack & Mobile Engineer (React Native / Python)</div>
                <div className="profile-location">
                  <FaMapMarkerAlt /> SRM IST-Trichy, Tamil Nadu
                </div>
              </div>

              <div className="quick-spec-table">
                <div className="spec-line">
                  <span className="spec-k">DEGREE</span>
                  <span className="spec-v">B.Tech CSE (2027)</span>
                </div>
                <div className="spec-line">
                  <span className="spec-k">INSTITUTE</span>
                  <span className="spec-v">SRM IST-Trichy</span>
                </div>
                <div className="spec-line">
                  <span className="spec-k">GPA / SCORE</span>
                  <span className="spec-v active-status">9.2 / 10.0</span>
                </div>
                <div className="spec-line">
                  <span className="spec-k">LANGUAGES</span>
                  <span className="spec-v">Hindi (Native), English (Prof)</span>
                </div>
                <div className="spec-line">
                  <span className="spec-k">PRIMARY EMAIL</span>
                  <span className="spec-v">ss8073@srmist.edu.in</span>
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

            {/* Right Column: Bio, Academic & Achievements */}
            <div className="about-main-content">
              {/* Bio Prose Card */}
              <div className="terminal-card">
                <div className="card-header">
                  <span className="card-tag">SYSTEM_BIOGRAPHY</span>
                  <span className="card-file">profile.markdown</span>
                </div>
                <div className="bio-prose">
                  <p>
                    I am a Computer Science & Engineering student at <strong>SRM IST-Trichy</strong> (CGPA: <strong>9.2/10</strong>) specializing in cross-platform mobile development (React Native, Expo, TypeScript) and full-stack systems.
                  </p>
                  <p>
                    My recent work focuses on solving real-world engineering challenges — such as building <strong>SmartJourney</strong> (an intelligent location-based travel alarm using background GPS tracking and 5-stage alarm escalation), an ML-based <strong>Movie Recommender</strong> trained on 5,000+ films, and offline-first mobile applications with clean state architecture.
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

              {/* Certifications & Achievements Card */}
              <div className="terminal-card">
                <div className="card-header">
                  <span className="card-tag">CERTIFICATIONS & ACHIEVEMENTS</span>
                  <span className="card-file">credentials.v2</span>
                </div>
                <div className="principles-list">
                  {CERTIFICATIONS.map(cert => (
                    <div key={cert.name} className="principle-item">
                      <div className="principle-tag">
                        <FaAward style={{ color: "var(--amber-accent)", marginRight: "6px" }} />
                        {cert.name}
                      </div>
                      <div className="principle-desc">
                        Issued by <strong>{cert.issuer}</strong> ({cert.year}) — Credential: <code>{cert.id}</code>
                      </div>
                    </div>
                  ))}
                </div>
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
                  <button onClick={() => onNavigate("portfolio")} className="nav-pill">
                    $ git log projects/
                  </button>
                  <button onClick={() => onNavigate("skills")} className="nav-pill">
                    $ ls skills/
                  </button>
                  <button onClick={() => onNavigate("contact")} className="nav-pill">
                    $ contact --reach
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
