
import "./TerminalTheme.module.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [unlockedSections, setUnlockedSections] = useState(new Set(['home']));

  const unlockSection = (sectionName) => {
    setUnlockedSections(prev => new Set([...prev, sectionName]));
  };

  return (
    <div style={{ overflow: unlockedSections.size === 1 ? 'hidden' : 'auto', height: unlockedSections.size === 1 ? '100vh' : 'auto' }}>
      <Navbar />
      <main>
        <Home onSectionUnlock={unlockSection} />
        {unlockedSections.has('about') && <About />}
        {unlockedSections.has('skills') && <Skills />}
        {unlockedSections.has('services') && <Services />}
        {unlockedSections.has('portfolio') && <Portfolio />}
        {unlockedSections.has('contact') && <Contact />}
      </main>
      {unlockedSections.size > 1 && <Footer />}
    </div>
  );
}

export default App;
