import React, { useState, useEffect } from "react";
import "./App.css";
import WorkstationHeader from "./components/WorkstationHeader";
import BottomCommandDock from "./components/BottomCommandDock";
import CommandPalette from "./components/CommandPalette";
import MatrixRain from "./components/MatrixRain";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { sound } from "./utils/audio";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crtEnabled, setCrtEnabled] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [prefillService, setPrefillService] = useState("");

  // Global key bindings: Ctrl+K / Cmd+K / / to open palette; Esc to close
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        sound.playEnter();
        setIsPaletteOpen(prev => !prev);
      } else if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        sound.playEnter();
        setIsPaletteOpen(true);
      } else if (e.key === "Escape") {
        if (isMatrixOpen) setIsMatrixOpen(false);
        if (isPaletteOpen) setIsPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isMatrixOpen, isPaletteOpen]);

  const navigateToPage = (page, extraData = "") => {
    sound.playEnter();
    setCurrentPage(page);
    if (page === "contact" && extraData) {
      setPrefillService(extraData);
    } else if (page !== "contact") {
      setPrefillService("");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExecuteCommand = (rawCmd) => {
    const cmd = rawCmd.toLowerCase().trim();
    if (cmd === "home" || cmd === "init" || cmd === "cd ~") {
      navigateToPage("home");
    } else if (cmd === "whoami" || cmd === "about" || cmd === "bio") {
      navigateToPage("about");
    } else if (cmd === "skills" || cmd.startsWith("ls")) {
      navigateToPage("skills");
    } else if (cmd === "projects" || cmd === "portfolio" || cmd.startsWith("git")) {
      navigateToPage("portfolio");
    } else if (cmd === "services" || cmd.startsWith("systemctl")) {
      navigateToPage("services");
    } else if (cmd === "contact" || cmd === "sendmail" || cmd === "ping") {
      navigateToPage("contact");
    } else if (cmd === "matrix") {
      sound.playEnter();
      setIsMatrixOpen(true);
    } else if (cmd === "clear" || cmd === "cls") {
      sound.playEnter();
      navigateToPage("home");
    } else if (cmd === "sound" || cmd === "audio") {
      setSoundEnabled(sound.toggle());
    } else if (cmd === "crt") {
      setCrtEnabled(prev => !prev);
    } else if (cmd === "help") {
      setIsPaletteOpen(true);
    } else {
      // Default to opening palette or handling on page
      setIsPaletteOpen(true);
    }
  };

  const handleTriggerSpecial = (special) => {
    if (special === "matrix") {
      sound.playEnter();
      setIsMatrixOpen(true);
    } else if (special === "clear") {
      navigateToPage("home");
    } else if (special === "help") {
      setIsPaletteOpen(true);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={navigateToPage} onTriggerSpecial={handleTriggerSpecial} />;
      case "about":
        return <About onNavigate={navigateToPage} />;
      case "skills":
        return <Skills onNavigate={navigateToPage} />;
      case "portfolio":
        return <Portfolio onNavigate={navigateToPage} />;
      case "services":
        return <Services onNavigate={navigateToPage} />;
      case "contact":
        return <Contact onNavigate={navigateToPage} prefillService={prefillService} />;
      default:
        return <Home onNavigate={navigateToPage} onTriggerSpecial={handleTriggerSpecial} />;
    }
  };

  return (
    <div className={`workstation-root ${crtEnabled ? "crt-active" : ""}`}>
      {/* Scanline CRT overlay when enabled */}
      {crtEnabled && <div className="crt-scanlines-layer" />}

      {/* Persistent OS Header */}
      <WorkstationHeader
        currentPage={currentPage}
        onNavigate={navigateToPage}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        crtEnabled={crtEnabled}
        setCrtEnabled={setCrtEnabled}
        onOpenMatrix={() => setIsMatrixOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="workstation-viewport">
        {renderPage()}
      </main>

      {/* Persistent Bottom Command Dock */}
      <BottomCommandDock onExecuteCommand={handleExecuteCommand} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onNavigate={navigateToPage}
        onTriggerSpecial={handleTriggerSpecial}
      />

      {/* Matrix Rain Modal */}
      {isMatrixOpen && <MatrixRain onClose={() => setIsMatrixOpen(false)} />}
    </div>
  );
}

export default App;
