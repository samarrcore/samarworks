import React from "react";
import { sound } from "../utils/audio";
import { 
  FaLaptopCode, 
  FaPaintBrush, 
  FaCode, 
  FaMobileAlt, 
  FaTerminal, 
  FaCheck, 
  FaPaperPlane,
  FaCogs
} from "react-icons/fa";

const SERVICES_DATA = [
  {
    unit: "web-dev.service",
    title: "Full-Stack Web Development",
    icon: <FaLaptopCode />,
    pid: "1042",
    memory: "64MB",
    status: "active (running)",
    summary: "Production-grade, modern web applications built from scratch with clean component architecture and reactive data flow.",
    deliverables: [
      "Responsive React 19 + Vite architecture",
      "Robust state management and API orchestration",
      "Production-ready SEO & Lighthouse 95+ optimization",
      "Modular components documented for team scale"
    ],
    sla: "Rapid turnaround // Clean git commits"
  },
  {
    unit: "ui-ux-craft.service",
    title: "Taste-First UI / UX Design",
    icon: <FaPaintBrush />,
    pid: "1055",
    memory: "42MB",
    status: "active (running)",
    summary: "Bespoke digital product aesthetics with personality. Zero cookie-cutter templates, anti-AI-slop design language, and unified design tokens.",
    deliverables: [
      "Complete DESIGN_SYSTEM.md specification",
      "Tactile micro-interactions and intentional color palettes",
      "Interactive prototypes and wireframes",
      "High-contrast, accessible WCAG AA standards"
    ],
    sla: "Zero slop // High visual distinction"
  },
  {
    unit: "frontend-perf.service",
    title: "Frontend Engineering & Refactoring",
    icon: <FaCode />,
    pid: "1071",
    memory: "38MB",
    status: "active (running)",
    summary: "Transforming sluggish or bloated interfaces into lightning-fast, zero-jank frontend applications with Tailwind CSS and modern JavaScript.",
    deliverables: [
      "Tailwind CSS v4 & modern responsive grids",
      "Code splitting and bundle size reduction",
      "Interactive client-side filters, search & state sync",
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)"
    ],
    sla: "60 FPS rendering // Fluid UX"
  },
  {
    unit: "mobile-pwa.service",
    title: "Mobile-First & PWA Deployment",
    icon: <FaMobileAlt />,
    pid: "1089",
    memory: "51MB",
    status: "active (running)",
    summary: "Touch-optimized web experiences engineered to look and feel like native applications on smartphones, tablets, and desktops.",
    deliverables: [
      "Progressive Web App manifests and offline readiness",
      "Fluid touch targets and ergonomic mobile navigation",
      "Native-feel gestures and keyboard interactions",
      "Adaptive dark / light terminal aesthetic options"
    ],
    sla: "Responsive across 320px to 4K"
  }
];

const Services = ({ onNavigate }) => {
  const handleDeployService = (serviceTitle) => {
    sound.playEnter();
    // Navigate to contact and pass the service name if supported
    onNavigate("contact", serviceTitle);
  };

  return (
    <div className="terminal-page sub-page services-page">
      <div className="terminal-window">
        {/* Terminal Header */}
        <div className="terminal-window-header">
          <div className="window-dots">
            <span className="dot dot-close" onClick={() => onNavigate("home")}></span>
            <span className="dot dot-min"></span>
            <span className="dot dot-max"></span>
          </div>
          <div className="window-title">
            <FaTerminal className="title-icon" />
            samar@samarworks-os: ~/services (systemctl status services.d)
          </div>
          <div className="window-status-tag">ALL_DAEMONS_OK</div>
        </div>

        {/* Content Body */}
        <div className="terminal-body">
          {/* CLI Prompt Line */}
          <div className="cli-prompt-line">
            <span className="prompt-user">samar@dev</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~/services</span>
            <span className="prompt-char">$</span>
            <span className="prompt-text">systemctl list-units --type=service --state=active</span>
          </div>

          {/* Intro Notice */}
          <div className="system-overview-card daemon-card">
            <div className="daemon-specs">
              <span>● SERVICES DAEMON: 4 LOADED, 4 ACTIVE, 0 FAILED</span>
              <span>HOST: Samar Devstation (Remote & Direct Contract)</span>
            </div>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {SERVICES_DATA.map((srv) => (
              <div key={srv.unit} className="service-unit-card">
                <div className="unit-header">
                  <div className="unit-name-box">
                    <span className="unit-icon">{srv.icon}</span>
                    <div>
                      <h3 className="unit-title">{srv.title}</h3>
                      <span className="unit-sub">unit: {srv.unit}</span>
                    </div>
                  </div>
                  <div className="unit-status-box">
                    <span className="pulse-green"></span>
                    <span className="unit-status-text">{srv.status}</span>
                  </div>
                </div>

                <div className="unit-meta-stats">
                  <span>Main PID: {srv.pid}</span>
                  <span>Memory: {srv.memory}</span>
                  <span>SLA: {srv.sla}</span>
                </div>

                <p className="unit-summary">{srv.summary}</p>

                <div className="unit-deliverables">
                  <span className="deliv-heading">SPECIFICATIONS & DELIVERABLES:</span>
                  <ul>
                    {srv.deliverables.map((d, i) => (
                      <li key={i}>
                        <FaCheck className="check-icon" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleDeployService(srv.title)}
                  className="cli-action-btn primary service-deploy-btn"
                >
                  <FaPaperPlane /> $ request-quote --service="{srv.unit}"
                </button>
              </div>
            ))}
          </div>

          {/* Quick Subpage Navigation */}
          <div className="subpage-nav-bar">
            <span className="nav-bar-label">PROCEED:</span>
            <div className="nav-bar-buttons">
              <button onClick={() => onNavigate("contact")} className="nav-pill">
                $ contact --compose
              </button>
              <button onClick={() => onNavigate("portfolio")} className="nav-pill">
                $ git log projects/
              </button>
              <button onClick={() => onNavigate("home")} className="nav-pill">
                $ cd ~/home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
