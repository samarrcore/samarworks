import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import sectionStyles from "./Section.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={sectionStyles.section} style={{ marginBottom: 0, marginTop: 40 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        <div style={{ minWidth: 220, maxWidth: 340, flex: "1 1 220px" }}>
          <h3 className={sectionStyles.sectionTitle} style={{ marginBottom: 10 }}>Samar Pratap Singh</h3>
          <div className={sectionStyles.sectionContent} style={{ marginBottom: 10 }}>
            Aspiring developer passionate about creating innovative solutions and building meaningful digital experiences.
          </div>
        </div>
        <div style={{ minWidth: 180, maxWidth: 220, flex: "1 1 180px" }}>
          <div className={sectionStyles.sectionTitle} style={{ fontSize: 18, marginBottom: 10 }}>Quick Links</div>
          <ul className={sectionStyles.list}>
            {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} style={{ color: "#00ff00", textDecoration: "underline" }}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ minWidth: 180, maxWidth: 220, flex: "1 1 180px" }}>
          <div className={sectionStyles.sectionTitle} style={{ fontSize: 18, marginBottom: 10 }}>Get In Touch</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="mailto:samarpratapyes.01@gmail.com" style={{ color: "#00ff00", display: "flex", alignItems: "center", gap: 8, textDecoration: "underline" }}><FaEnvelope /> samarpratapyes.01@gmail.com</a>
            <a href="https://www.linkedin.com/in/samar-singh-444bb927b/" target="_blank" rel="noopener noreferrer" style={{ color: "#00ff00", display: "flex", alignItems: "center", gap: 8, textDecoration: "underline" }}><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/samarrcore" target="_blank" rel="noopener noreferrer" style={{ color: "#00ff00", display: "flex", alignItems: "center", gap: 8, textDecoration: "underline" }}><FaGithub /> GitHub</a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", color: "#00ff00", marginTop: 30, fontSize: 13 }}>
        &copy; {currentYear} Samar Pratap Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
