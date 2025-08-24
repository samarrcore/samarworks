import React, { useState } from "react";
import styles from "./Navbar.module.css";
import computerIcon from "../assets/icons8-imac-100.png"; // Pixel art icon

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    } else {
      alert('🔒 This section is locked! Use terminal commands to unlock it first.');
    }
  };

  return (
    <nav className={styles.navbar}>
      <img
        src={computerIcon}
        alt="Computer"
        className={styles.icon}
        onClick={() => setOpen(o => !o)}
      />
      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>$ home</a>
        <a href="#" onClick={() => handleNavClick('about')}>$ whoami</a>
        <a href="#" onClick={() => handleNavClick('portfolio')}>$ portfolio</a>
        <a href="#" onClick={() => handleNavClick('contact')}>$ contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
