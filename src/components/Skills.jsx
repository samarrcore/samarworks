import React from "react";
import { FaCuttlefish, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaUsers, FaComments, FaClock } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import sectionStyles from "./Section.module.css";

const skills = [
  { name: "C", icon: <FaCuttlefish />, category: "Programming" },
  { name: "C++", icon: <FaCuttlefish />, category: "Programming" },
  { name: "Java", icon: <FaJava />, category: "Programming" },
  { name: "Python", icon: <FaPython />, category: "Programming" },
  { name: "HTML", icon: <FaHtml5 />, category: "Web" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Web" },
  { name: "JavaScript", icon: <FaJs />, category: "Web" },
  { name: "React.js", icon: <FaReact />, category: "Web" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "MySQL", icon: <SiMysql />, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
  { name: "Leadership", icon: <FaUsers />, category: "Soft Skills" },
  { name: "Communication", icon: <FaComments />, category: "Soft Skills" },
  { name: "Time Management", icon: <FaClock />, category: "Soft Skills" },
];

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];
  return (
    <section id="skills" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Skills & Expertise</h2>
      <div className={sectionStyles.sectionContent}>
        A comprehensive overview of my technical skills and personal competencies
      </div>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ color: "#00ff00", fontWeight: 700, marginBottom: "1.5rem", fontSize: "1.3rem" }}>{category}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
            {skills
              .filter(skill => skill.category === category)
              .map(skill => (
                <div key={skill.name} style={{ width: 120, minHeight: 90, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#181818", borderRadius: 8, border: "1px solid #222", padding: "1rem 0.5rem" }}>
                  <div style={{ fontSize: 32, marginBottom: 8, color: "#00ff00" }}>{skill.icon}</div>
                  <span style={{ color: "#00ff00", fontWeight: 500, fontSize: 14 }}>{skill.name}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
