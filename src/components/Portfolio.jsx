import React, { useState } from "react";
import { sound } from "../utils/audio";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTerminal, 
  FaCodeBranch, 
  FaFolder, 
  FaSearch,
  FaCheckCircle,
  FaLaptopCode,
  FaGamepad,
  FaFilm
} from "react-icons/fa";

const PROJECTS_DATA = [
  {
    id: "pip-manager",
    title: "PiP Manager Extension",
    category: "Extension",
    icon: <FaLaptopCode />,
    hash: "a4f912c",
    date: "2024-11-18",
    description: "A high-performance browser extension that orchestrates multimedia tabs with global Picture-in-Picture (PiP) controls directly from a unified interface.",
    highlights: [
      "Streamlined single-click PiP activation across background tabs",
      "Real-time media state detection and mute/playback synchronization",
      "Minimalist lightweight UI adhering to Chrome & Firefox MV3 specs"
    ],
    tech: ["JavaScript (ES6)", "Browser WebExtensions API", "HTML5 Video", "CSS Grid"],
    github: "https://github.com/samarrcore/pip-manager",
    status: "RELEASED"
  },
  {
    id: "simon-says",
    title: "Simon Says Game",
    category: "Game / Web App",
    icon: <FaGamepad />,
    hash: "7e20b5a",
    date: "2024-10-04",
    description: "An arcade-inspired tactile memory game with dynamic audio feedback, strict timing sequences, variable difficulty curves, and high-score tracking.",
    highlights: [
      "Procedural sequence engine with interactive audio-visual triggers",
      "Reactive failure states and progressive tempo scaling",
      "Zero-latency keyboard & touch controls"
    ],
    tech: ["JavaScript", "HTML5 Canvas/DOM", "Web Audio API", "CSS Animations"],
    github: "https://github.com/samarrcore/simon-says-game",
    status: "STABLE"
  },
  {
    id: "movie-recommender",
    title: "Movie Recommender System",
    category: "ML / Data App",
    icon: <FaFilm />,
    hash: "3d8c90f",
    date: "2024-08-22",
    description: "A machine-learning-driven cinematic discovery engine utilizing content-based filtering algorithms and TMDB API metadata to serve tailored viewing recommendations.",
    highlights: [
      "Cosine similarity vectorization on plot keywords, cast & genres",
      "Live TMDB API poster and synopsis ingestion",
      "Dynamic interactive filtering and search interface"
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "TMDB API", "Streamlit / React"],
    github: "https://github.com/samarrcore/movie-recommender",
    status: "MAINTAINED"
  }
];

const Portfolio = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [activeInspect, setActiveInspect] = useState(null);

  const tags = ["ALL", "Extension", "Game / Web App", "ML / Data App"];

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
              git log --oneline --decorate {selectedTag !== "ALL" ? `--grep="${selectedTag}"` : ""}
            </span>
          </div>

          {/* Filter Bar */}
          <div className="skills-toolbar">
            <div className="filter-pill-group">
              <span className="filter-label"><FaCodeBranch /> BRANCH:</span>
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
                    <span className="tech-label">DEPENDENCIES:</span>
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
                        <div className="inspect-section-title">## ARCHITECTURE & KEY CAPABILITIES</div>
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
