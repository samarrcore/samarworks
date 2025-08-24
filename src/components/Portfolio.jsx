import React from "react";
import { FaGithub } from "react-icons/fa";
import sectionStyles from "./Section.module.css";

const projects = [
  {
    title: "PiP Manager Extension",
    description: "A browser extension that manages multimedia tabs with Picture-in-Picture (PiP) controls from a single interface.",
    tech: ["JavaScript", "HTML", "CSS", "Browser APIs"],
    github: "https://github.com/samarrcore/pip-manager",
    category: "Extension"
  },
  {
    title: "Simon Says Game",
    description: "An interactive memory game with difficulty levels, flashing patterns, and level tracking system.",
    tech: ["JavaScript", "HTML", "CSS", "Game Logic"],
    github: "https://github.com/samarrcore/simon-says",
    category: "Game"
  },
  {
    title: "Big Tac Toe",
    description: "A team-based advanced tic-tac-toe game with nested boards and strategic gameplay.",
    tech: ["JavaScript", "HTML", "CSS", "Algorithm"],
    github: "https://github.com/samarrcore/big-tac-toe",
    category: "Game"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Portfolio</h2>
      <div className={sectionStyles.sectionContent}>
        A showcase of my recent projects and creative solutions
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {projects.map((project) => (
          <div key={project.title} style={{ background: "#181818", borderRadius: 8, border: "1px solid #222", padding: "2rem 1.5rem", minWidth: 260, maxWidth: 340, flex: "1 1 260px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12, color: "#00ff00", fontWeight: 700 }}>{project.title.charAt(0)}</div>
            <h3 style={{ color: "#00ff00", fontWeight: 700, marginBottom: 10, fontSize: 18 }}>{project.title}</h3>
            <div style={{ color: "#00ff00", marginBottom: 12, textAlign: "center", fontSize: 14 }}>{project.description}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: 10 }}>
              {project.tech.map((tech) => (
                <span key={tech} style={{ background: "rgba(0,255,0,0.08)", border: "1px solid #00ff00", color: "#00ff00", borderRadius: 4, padding: "0.2rem 0.5rem", fontSize: 12 }}>{tech}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#00ff00", marginTop: 8, textDecoration: "underline", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
              <FaGithub /> Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
