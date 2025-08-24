import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import sectionStyles from "./Section.module.css";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "samarpratapyes.01@gmail.com",
    link: "mailto:samarpratapyes.01@gmail.com"
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 9798499241",
    link: "tel:9798499241"
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Tiruchirappalli, Tamil Nadu",
    link: null
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/samar-singh-444bb927b/"
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "View my repositories",
    link: "https://github.com/samarrcore"
  }
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={sectionStyles.section}>
      <h2 className={sectionStyles.sectionTitle}>Get In Touch</h2>
      <div className={sectionStyles.sectionContent}>
        Ready to start a conversation? I'd love to hear from you.
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {/* Contact Info */}
        <div style={{ minWidth: 260, maxWidth: 340, flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {contactInfo.map((info, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: 16, background: "#181818", borderRadius: 8, border: "1px solid #222", padding: "1rem" }}>
              <span style={{ fontSize: 24, color: "#00ff00" }}>{info.icon}</span>
              <div>
                <div style={{ color: "#00ff00", fontWeight: 600 }}>{info.label}</div>
                {info.link ? (
                  <a href={info.link} target="_blank" rel="noopener noreferrer" style={{ color: "#00ff00", textDecoration: "underline", fontSize: 14 }}>{info.value}</a>
                ) : (
                  <span style={{ color: "#00ff00", fontSize: 14 }}>{info.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{ minWidth: 260, maxWidth: 340, flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "1rem", background: "#181818", borderRadius: 8, border: "1px solid #222", padding: "1.5rem" }}>
          <label style={{ color: "#00ff00", fontWeight: 500, marginBottom: 4 }}>Your Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required style={{ padding: "0.5rem", borderRadius: 4, border: "1px solid #222", background: "#222", color: "#00ff00", marginBottom: 8 }} />
          <label style={{ color: "#00ff00", fontWeight: 500, marginBottom: 4 }}>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ padding: "0.5rem", borderRadius: 4, border: "1px solid #222", background: "#222", color: "#00ff00", marginBottom: 8 }} />
          <label style={{ color: "#00ff00", fontWeight: 500, marginBottom: 4 }}>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} required style={{ padding: "0.5rem", borderRadius: 4, border: "1px solid #222", background: "#222", color: "#00ff00", marginBottom: 8, resize: "none" }} />
          <button type="submit" style={{ background: "#00ff00", color: "#181818", fontWeight: 700, border: "none", borderRadius: 4, padding: "0.75rem", marginTop: 8, cursor: "pointer" }}>Send Message</button>
          {submitted && <div style={{ color: "#00ff00", marginTop: 8 }}>Thank you! Your message has been sent successfully.</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
