import React, { useState } from "react";
import { sound } from "../utils/audio";
import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaUsers, 
  FaComments, 
  FaClock,
  FaTerminal,
  FaFilter,
  FaSearch,
  FaMobileAlt,
  FaDatabase,
  FaFigma
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiGit, 
  SiTypescript,
  SiExpo,
  SiPandas,
  SiNumpy
} from "react-icons/si";

const SKILLS_DATA = [
  { name: "React Native", icon: <FaMobileAlt />, category: "Mobile", level: "Expert", percent: 92, perm: "-rwxr-xr-x", size: "260KB" },
  { name: "Expo & Expo Router", icon: <SiExpo />, category: "Mobile", level: "Advanced", percent: 90, perm: "-rwxr-xr-x", size: "180KB" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Languages", level: "Advanced", percent: 88, perm: "-rwxr-xr-x", size: "150KB" },
  { name: "Python", icon: <FaPython />, category: "Languages", level: "Advanced", percent: 90, perm: "-rwxr-xr-x", size: "160KB" },
  { name: "JavaScript (ES6+)", icon: <FaJs />, category: "Languages", level: "Expert", percent: 95, perm: "-rwxr-xr-x", size: "190KB" },
  { name: "Java", icon: <FaJava />, category: "Languages", level: "Proficient", percent: 78, perm: "-rwxr-xr-x", size: "120KB" },
  { name: "React.js", icon: <FaReact />, category: "Frontend", level: "Advanced", percent: 90, perm: "-rwxr-xr-x", size: "240KB" },
  { name: "Pandas & NumPy", icon: <SiPandas />, category: "Libraries & ML", level: "Advanced", percent: 85, perm: "-rwxr-xr-x", size: "210KB" },
  { name: "SQL & Relational DBs", icon: <SiMysql />, category: "Database", level: "Advanced", percent: 88, perm: "-rw-r--r--", size: "140KB" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database", level: "Intermediate", percent: 78, perm: "-rw-r--r--", size: "135KB" },
  { name: "Figma (UI/UX Systems)", icon: <FaFigma />, category: "Tools & Design", level: "Advanced", percent: 88, perm: "-rw-r--r--", size: "95KB" },
  { name: "GitHub Co-Pilot & Stitch", icon: <SiGit />, category: "Tools & Design", level: "Advanced", percent: 92, perm: "-rwxr-xr-x", size: "110KB" },
  { name: "HTML5 & Modern CSS", icon: <FaHtml5 />, category: "Frontend", level: "Expert", percent: 95, perm: "-rw-r--r--", size: "85KB" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend", level: "Expert", percent: 92, perm: "-rw-r--r--", size: "110KB" },
  { name: "Node.js & APIs", icon: <FaNodeJs />, category: "Backend", level: "Intermediate", percent: 75, perm: "-rwxr-xr-x", size: "160KB" },
  { name: "Git & Version Control", icon: <SiGit />, category: "Tools & Design", level: "Advanced", percent: 90, perm: "-rwxr-xr-x", size: "90KB" },
  { name: "Technical Communication", icon: <FaComments />, category: "Soft Skills", level: "Expert", percent: 95, perm: "-rw-r--r--", size: "CORE" },
  { name: "Project Leadership", icon: <FaUsers />, category: "Soft Skills", level: "Advanced", percent: 90, perm: "-rw-r--r--", size: "CORE" },
  { name: "Agile Time Management", icon: <FaClock />, category: "Soft Skills", level: "Advanced", percent: 88, perm: "-rw-r--r--", size: "CORE" },
];

const CATEGORIES = ["ALL", "Mobile", "Languages", "Frontend", "Libraries & ML", "Database", "Tools & Design", "Soft Skills"];

const Skills = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilter = (cat) => {
    sound.playKey();
    setSelectedCategory(cat);
  };

  const filtered = SKILLS_DATA.filter((item) => {
    const matchCat = selectedCategory === "ALL" || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const renderGauge = (pct) => {
    const totalBars = 10;
    const filledBars = Math.round((pct / 100) * totalBars);
    const emptyBars = totalBars - filledBars;
    return `[${"█".repeat(filledBars)}${"░".repeat(emptyBars)}]`;
  };

  return (
    <div className="terminal-page sub-page skills-page">
      <div className="terminal-window">
        {/* Terminal Window Header */}
        <div className="terminal-window-header">
          <div className="window-dots">
            <span className="dot dot-close" onClick={() => onNavigate("home")}></span>
            <span className="dot dot-min"></span>
            <span className="dot dot-max"></span>
          </div>
          <div className="window-title">
            <FaTerminal className="title-icon" />
            samar@samarworks-os: ~/skills (ls -la skills/)
          </div>
          <div className="window-status-tag">PKGS: {SKILLS_DATA.length}</div>
        </div>

        {/* Content Body */}
        <div className="terminal-body">
          {/* CLI Command Line */}
          <div className="cli-prompt-line">
            <span className="prompt-user">samar@dev</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~/skills</span>
            <span className="prompt-char">$</span>
            <span className="prompt-text">
              ls -la --category="{selectedCategory}" {searchQuery ? `| grep "${searchQuery}"` : ""}
            </span>
          </div>

          {/* Interactive Filters & Search */}
          <div className="skills-toolbar">
            <div className="filter-pill-group">
              <span className="filter-label"><FaFilter /> FILTER:</span>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
                >
                  {cat === "ALL" ? "--all" : `--${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                </button>
              ))}
            </div>

            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="grep skills..."
                value={searchQuery}
                onChange={(e) => {
                  sound.playKey();
                  setSearchQuery(e.target.value);
                }}
                className="search-input"
              />
            </div>
          </div>

          {/* Skills Table / Directory Stream */}
          <div className="terminal-card">
            <div className="directory-header-row">
              <span className="col-perm">PERMISSIONS</span>
              <span className="col-size">SIZE</span>
              <span className="col-name">PACKAGE / SKILL</span>
              <span className="col-cat">CATEGORY</span>
              <span className="col-gauge">PROFICIENCY GAUGE</span>
              <span className="col-level">STATUS</span>
            </div>

            <div className="skills-directory-list">
              {filtered.length === 0 ? (
                <div className="empty-results">
                  No packages matched expression: <code>grep "{searchQuery}"</code>
                </div>
              ) : (
                filtered.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <span className="col-perm">{skill.perm}</span>
                    <span className="col-size">{skill.size}</span>
                    <div className="col-name">
                      <span className="skill-item-icon">{skill.icon}</span>
                      <span className="skill-item-text">{skill.name}</span>
                    </div>
                    <span className="col-cat tag-badge">{skill.category}</span>
                    <div className="col-gauge">
                      <span className="gauge-ascii">{renderGauge(skill.percent)}</span>
                      <span className="gauge-pct">{skill.percent}%</span>
                    </div>
                    <span className={`col-level status-badge ${skill.level.toLowerCase()}`}>
                      [{skill.level}]
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick Jump Bar */}
          <div className="subpage-nav-bar">
            <span className="nav-bar-label">SYSTEM NAVIGATION:</span>
            <div className="nav-bar-buttons">
              <button onClick={() => onNavigate("portfolio")} className="nav-pill">
                $ git log projects/
              </button>
              <button onClick={() => onNavigate("services")} className="nav-pill">
                $ systemctl services
              </button>
              <button onClick={() => onNavigate("contact")} className="nav-pill">
                $ contact --compose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
