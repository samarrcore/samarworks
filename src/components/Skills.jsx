import React, { useState } from "react";
import { sound } from "../utils/audio";
import { 
  FaCuttlefish, 
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
  FaSearch
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiGit, SiVite } from "react-icons/si";

const SKILLS_DATA = [
  { name: "C", icon: <FaCuttlefish />, category: "Languages", level: "Intermediate", percent: 75, perm: "-rwxr-xr-x", size: "48KB" },
  { name: "C++", icon: <FaCuttlefish />, category: "Languages", level: "Intermediate", percent: 75, perm: "-rwxr-xr-x", size: "64KB" },
  { name: "Python", icon: <FaPython />, category: "Languages", level: "Advanced", percent: 85, perm: "-rwxr-xr-x", size: "112KB" },
  { name: "Java", icon: <FaJava />, category: "Languages", level: "Proficient", percent: 65, perm: "-rwxr-xr-x", size: "88KB" },
  { name: "JavaScript (ES6+)", icon: <FaJs />, category: "Frontend", level: "Advanced", percent: 90, perm: "-rwxr-xr-x", size: "140KB" },
  { name: "React 19", icon: <FaReact />, category: "Frontend", level: "Advanced", percent: 85, perm: "-rwxr-xr-x", size: "220KB" },
  { name: "HTML5 / Semantics", icon: <FaHtml5 />, category: "Frontend", level: "Expert", percent: 95, perm: "-rw-r--r--", size: "32KB" },
  { name: "CSS3 / Modern Layouts", icon: <FaCss3Alt />, category: "Frontend", level: "Expert", percent: 95, perm: "-rw-r--r--", size: "54KB" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend", level: "Advanced", percent: 90, perm: "-rw-r--r--", size: "96KB" },
  { name: "Vite Bundler", icon: <SiVite />, category: "Frontend", level: "Advanced", percent: 85, perm: "-rwxr-xr-x", size: "40KB" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", level: "Intermediate", percent: 70, perm: "-rwxr-xr-x", size: "180KB" },
  { name: "MySQL", icon: <SiMysql />, category: "Database", level: "Advanced", percent: 85, perm: "-rw-r--r--", size: "160KB" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database", level: "Intermediate", percent: 75, perm: "-rw-r--r--", size: "135KB" },
  { name: "Git & Version Control", icon: <SiGit />, category: "Tools", level: "Advanced", percent: 88, perm: "-rwxr-xr-x", size: "90KB" },
  { name: "Technical Communication", icon: <FaComments />, category: "Soft Skills", level: "Expert", percent: 95, perm: "-rw-r--r--", size: "CORE" },
  { name: "Project Leadership", icon: <FaUsers />, category: "Soft Skills", level: "Advanced", percent: 85, perm: "-rw-r--r--", size: "CORE" },
  { name: "Agile Time Management", icon: <FaClock />, category: "Soft Skills", level: "Advanced", percent: 90, perm: "-rw-r--r--", size: "CORE" },
];

const CATEGORIES = ["ALL", "Languages", "Frontend", "Backend", "Database", "Tools", "Soft Skills"];

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
                  {cat === "ALL" ? "--all" : `--${cat.toLowerCase().replace(" ", "-")}`}
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
