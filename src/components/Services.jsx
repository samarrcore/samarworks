import React from "react";
import { FaPaintBrush, FaLaptopCode } from "react-icons/fa";
import sectionStyles from "./Section.module.css";

const services = [
  {
    name: "Web Development",
    icon: <FaLaptopCode />,
    description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
    features: ["Responsive Design", "Performance Optimization", "Modern Frameworks", "SEO Friendly"]
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: "User-centered design solutions that enhance usability and create meaningful experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
];

const Services = () => {
  return (
    <section id="services" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Services</h2>
      <div className={sectionStyles.sectionContent}>
        Comprehensive solutions tailored to bring your ideas to life
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {services.map((service) => (
          <div key={service.name} style={{ background: "#181818", borderRadius: 8, border: "1px solid #222", padding: "2rem 1.5rem", minWidth: 260, maxWidth: 340, flex: "1 1 260px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 16, color: "#00ff00" }}>{service.icon}</div>
            <h3 style={{ color: "#00ff00", fontWeight: 700, marginBottom: 12, fontSize: 20 }}>{service.name}</h3>
            <div style={{ color: "#00ff00", marginBottom: 16, textAlign: "center", fontSize: 15 }}>{service.description}</div>
            <ul className={sectionStyles.list}>
              {service.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
