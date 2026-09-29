import React, { useState } from "react";
import { sound } from "../utils/audio";
import { 
  FaGithub, 
  FaTerminal, 
  FaCodeBranch, 
  FaFolder, 
  FaCheckCircle,
  FaLaptopCode,
  FaFilm,
  FaMobileAlt,
  FaCalendarCheck,
  FaMapMarkedAlt,
  FaBrain
} from "react-icons/fa";

const PROJECTS_DATA = [
  {
    id: "smart-journey",
    title: "SmartJourney",
    category: "Mobile",
    icon: <FaMapMarkedAlt />,
    hash: "9b3c41e",
    date: "2025",
    description: "An intelligent location-based travel alarm app using background GPS tracking, adaptive polling, multi-signal confidence scoring, and distance/ETA prediction to wake travelers before reaching their destination.",
    highlights: [
      "Engineered background GPS tracking with adaptive polling and battery-aware power optimization",
      "Multi-signal confidence scoring and real-time distance/ETA prediction algorithms",
      "5-stage alarm escalation system integrated with Notifee and Expo Audio to guarantee wake-up",
      "Destination search, live journey monitoring, and offline-capable journey state persistence"
    ],
    tech: ["React Native", "TypeScript", "Expo", "Android", "Notifee", "Expo Audio", "GPS Tracking"],
    github: "https://github.com/samarrcore/SmartJourney",
    status: "FEATURED // 2025"
  },
  {
    id: "movie-recommender",
    title: "Movie-Recommender",
    category: "ML / Data Science",
    icon: <FaFilm />,
    hash: "3d8c90f",
    date: "Aug 2025 - Present",
    description: "An ML-based cinematic recommendation engine trained on a dataset of 5,000 movies from TMDB, computing vector similarity to deliver the 5 closest related films based on a searched title.",
    highlights: [
      "Vectorized a comprehensive dataset of 5,000 movies from TMDB using text processing and feature extraction",
      "Implemented Cosine Similarity algorithms over plot keywords, genres, and cast metadata",
      "Built an intuitive interactive Streamlit application serving recommendations with near-zero latency",
      "Enabled users to receive the 5 closest, most related movie recommendations instantly"
    ],
    tech: ["Python", "Pandas", "NumPy", "Streamlit", "TMDB API", "Cosine Similarity", "Machine Learning"],
    github: "https://github.com/samarrcore/movie-recommender",
    status: "ACTIVE // 2025"
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    category: "Mobile",
    icon: <FaCalendarCheck />,
    hash: "5f8a22d",
    date: "Jun 2025 - Present",
    description: "A cross-platform mobile habit-tracking application enabling users to create, edit, and monitor daily habits with automatic streak calculation and progress visualization.",
    highlights: [
      "Automatic streak calculation and progress visualization across daily and weekly consistency metrics",
      "Persistent local storage architecture using AsyncStorage for offline-first reliability",
      "State management engineered with React Hooks and Context API for optimal reactivity",
      "Minimalist, ergonomic UI designed with Expo Router for fluid navigation across Android and iOS"
    ],
    tech: ["React Native", "Expo", "JavaScript", "TypeScript", "AsyncStorage", "Expo Router"],
    github: "https://github.com/samarrcore/habit-tracker",
    status: "ACTIVE // 2025"
  },
  {
    id: "pip-manager",
    title: "PiP Manager Extension",
    category: "Web Tool",
    icon: <FaLaptopCode />,
    hash: "a4f912c",
    date: "2024",
    description: "A high-performance browser extension that orchestrates multimedia tabs with global Picture-in-Picture (PiP) controls directly from a unified interface.",
    highlights: [
      "Streamlined single-click PiP activation across background tabs without tab-switching overhead",
      "Real-time media state detection and mute/playback synchronization across active sessions",
      "Minimalist lightweight UI adhering strictly to Chrome & Firefox Manifest V3 specifications"
    ],
    tech: ["JavaScript (ES6)", "Browser WebExtensions API", "HTML5 Video", "CSS Grid"],
    github: "https://github.com/samarrcore/pip-manager",
    status: "RELEASED"
  }
];

const Portfolio = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [activeInspect, setActiveInspect] = useState("smart-journey"); // Default open top project

  const tags = ["ALL", "Mobile", "ML / Data Science", "Web Tool"];

  const filtered = PROJECTS_DATA.filter(p => 
    selectedTag === "ALL" || p.category === selectedTag
  );

  const toggleInspect = (id) => {
    sound.playEnter();
    setActiveInspect(prev => prev === id ? null : id);
  };

  return (
    <div className="terminal-page sub-page portfolio-page">
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
            samar@samarworks-os: ~/projects (git log --graph --all)
          </div>
          <div className="window-status-tag">REPOS: {PROJECTS_DATA.length}</div>
        </div>

        {/* Content Body */}
        <div className="terminal-body">
          {/* CLI Prompt Line */}
          <div className="cli-prompt-line">
            <span className="prompt-user">samar@dev</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~/projects</span>
            <span className="prompt-char">$</span>
            <span className="prompt-text">
              git log --oneline --decorate {selectedTag !== "ALL" ? `--grep="${selectedTag}"` : "--all"}
            </span>
          </div>

          {/* Filter Bar */}
          <div className="skills-toolbar">
            <div className="filter-pill-group">
              <span className="filter-label"><FaCodeBranch /> FILTER BRANCH:</span>
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    sound.playKey();
                    setSelectedTag(tag);
                  }}
                  className={`filter-pill ${selectedTag === tag ? "active" : ""}`}
                >
                  {tag === "ALL" ? "--all-branches" : `--${tag.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                </button>
              ))}
            </div>
          </div>

          {/* Project Repository Grid */}
          <div className="projects-list-container">
            {filtered.map((proj) => {
              const isInspecting = activeInspect === proj.id;
              return (
                <div key={proj.id} className={`project-repo-card ${isInspecting ? "inspected" : ""}`}>
                  <div className="repo-meta-bar">
                    <div className="repo-hash-branch">
                      <span className="git-commit-label">commit</span>
                      <span className="git-hash">{proj.hash}</span>
                      <span className="git-branch">(HEAD -&gt; main, origin/main)</span>
                    </div>
                    <div className="repo-date-status">
                      <span className="repo-date">{proj.date}</span>
                      <span className="repo-status-badge">{proj.status}</span>
                    </div>
                  </div>

                  <div className="repo-main-row">
                    <div className="repo-info">
                      <div className="repo-title-group">
                        <span className="repo-icon">{proj.icon}</span>
                        <h3 className="repo-title">{proj.title}</h3>
                        <span className="category-tag">[{proj.category}]</span>
                      </div>
                      <p className="repo-description">{proj.description}</p>
                    </div>

                    <div className="repo-actions">
                      <a 
                        href={proj.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cli-btn-action"
                        onClick={() => sound.playEnter()}
                      >
                        <FaGithub /> git clone
                      </a>
                      <button
                        onClick={() => toggleInspect(proj.id)}
                        className={`cli-btn-action ${isInspecting ? "active" : ""}`}
                      >
                        <FaFolder /> {isInspecting ? "$ cat README [x]" : "$ cat README.md"}
                      </button>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="repo-tech-tags">
                    <span className="tech-label">STACK:</span>
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Expanded README Inspection Block */}
                  {isInspecting && (
                    <div className="repo-inspect-block">
                      <div className="inspect-header">
                        <span>README.md :: {proj.title}</span>
                        <span className="inspect-close" onClick={() => toggleInspect(proj.id)}>✕ CLOSE</span>
                      </div>
                      <div className="inspect-content">
                        <div className="inspect-section-title">## ARCHITECTURE & TECHNICAL SPECIFICATIONS</div>
                        <ul className="inspect-bullets">
                          {proj.highlights.map((h, i) => (
                            <li key={i}><FaCheckCircle className="check-icon" /> {h}</li>
                          ))}
                        </ul>
                        <div className="inspect-cli-hint">
                          <code>$ git clone {proj.github}.git && cd {proj.id}</code>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Subpage Navigation */}
          <div className="subpage-nav-bar">
            <span className="nav-bar-label">PROCEED:</span>
            <div className="nav-bar-buttons">
              <button onClick={() => onNavigate("skills")} className="nav-pill">
                $ ls skills/
              </button>
              <button onClick={() => onNavigate("services")} className="nav-pill">
                $ systemctl services
              </button>
              <button onClick={() => onNavigate("contact")} className="nav-pill">
                $ contact --hire
              </button>
              <button onClick={() => onNavigate("home")} className="nav-pill">
                $ cd ~/home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
