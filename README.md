# SamarWorks // SamarOS v2.5

> A taste-first, tactile developer workstation and interactive terminal shell designed with retro-modern phosphor aesthetics, zero-latency reactive navigation, and full CLI fidelity.

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-10B981?style=flat-square)](./LICENSE)
[![Status: Maintained](https://img.shields.io/badge/Status-Active_Development-F59E0B?style=flat-square)]()

---

```
 ███████╗ █████╗ ███╗   ███╗ █████╗ ██████╗ ██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗███████╗
 ██╔════╝██╔══██╗████╗ ████║██╔══██╗██╔══██╗██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝██╔════╝
 ███████╗███████║██╔████╔██║███████║██████╔╝██║ █╗ ██║██║   ██║██████╔╝█████╔╝ ███████╗
 ╚════██║██╔══██║██║╚██╔╝██║██╔══██║██╔══██╗██║███╗██║██║   ██║██╔══██╗██╔═██╗ ╚════██║
 ███████║██║  ██║██║ ╚═╝ ██║██║  ██║██║  ██║╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗███████║
 ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
```

---

## ⚡ Overview

**SamarWorks** is the official portfolio and developer workstation operating system of **Samar Pratap Singh**, a Computer Science & Engineering undergraduate at **SRM IST-Trichy** (GPA: 9.2/10).

Designed following the anti-AI-slop philosophy of the **`ui-ux-kit`** skill, the project avoids cookie-cutter cards and generic SaaS templates in favor of a cohesive, living Unix-like environment:

- **Authentic Terminal Shell:** Functional command line with history recall (`Up`/`Down` arrows), tab autocompletion, and rich terminal output.
- **Web Audio Mechanical Synthesizer:** Pure browser-native audio feedback that replicates tactile mechanical keystrokes and rising execution tones without any external audio asset dependencies.
- **Persistent Bottom Command Dock:** Type CLI directives from *any* page without losing your context.
- **Spotlight Command Palette (`Ctrl+K` / `⌘K` / `/`):** Quick-launcher overlay to jump between directories or trigger system directives.
- **CRT Phosphor Scanlines:** Toggleable hardware scanline simulation.
- **Matrix Digital Rain Protocol:** Embedded Canvas-based matrix rain visualization accessible via the `$ matrix` directive.

---

## 🖥️ Directory Structure & Views

| Directory / Command | View | Description |
|---|---|---|
| `~` (`init`) | **Terminal Shell (Home)** | Interactive bash workstation with ASCII banner, system specs, quick switches, and command interpreter. |
| `~/whoami` | **Developer Profile (About)** | Neofetch-style system inspect, academic record (SRM IST-Trichy, 9.2 GPA), verified certifications, and engineering manifesto. |
| `~/skills` | **Technical Directory (Skills)** | Unix file permissions list (`ls -la`), real-time `grep` search, interactive category filters, and ASCII gauge meters. |
| `~/projects` | **Repository Log (Portfolio)** | Git commit tree (`git log --graph --oneline`), status tags, and expandable `$ cat README.md` technical inspection drawers. |
| `~/services` | **Systemd Daemons (Services)** | Live service unit viewer (`systemctl list-units`), SLAs, and direct quote dispatch workflows. |
| `~/contact` | **Transmission Console (Contact)** | Digital vCard with one-click clipboard copy + EmailJS packet transmission console with live validation. |

---

## 🚀 Featured Projects

### 1. SmartJourney (2025)
- **Stack:** `React Native` • `TypeScript` • `Expo` • `Android` • `Notifee` • `Expo Audio`
- Intelligent location-based travel alarm utilizing background GPS tracking, adaptive polling, multi-signal confidence scoring, and distance/ETA prediction algorithms.
- Implements a 5-stage alarm escalation system, battery-aware tracking, destination search, and offline-capable journey persistence.

### 2. Movie-Recommender (2025)
- **Stack:** `Python` • `Pandas` • `NumPy` • `Streamlit` • `TMDB API` • `Cosine Similarity`
- ML-driven recommendation engine vectorized over 5,000 movies from TMDB.
- Computes Cosine Similarity embeddings across plot keywords, genres, and cast metadata to deliver the top 5 closest recommendations with zero-latency response.

### 3. Habit Tracker (2025)
- **Stack:** `React Native` • `Expo` • `JavaScript/TypeScript` • `AsyncStorage` • `Expo Router`
- Cross-platform habit-tracking mobile application with automatic streak calculation and progress visualization.
- Built with an offline-first architecture using AsyncStorage and state management through React Context API and custom hooks.

### 4. PiP Manager Extension (2024)
- **Stack:** `JavaScript (ES6)` • `WebExtensions API` • `HTML5 Video` • `CSS Grid`
- Single-click global Picture-in-Picture management extension for browser tabs adhering to Chrome & Firefox MV3 specifications.

---

## 📜 Academic Background & Certifications

- **Education:** B.Tech in Computer Science and Engineering (2023 – 2027) — **SRM IST-Trichy** (GPA: **9.2 / 10.0**)
- **Schooling:** St Karen's High School, Patna, Bihar (Class XII: 72.20%, Class X: 93.60%)
- **Certifications:**
  - **Oracle Cloud Infrastructure 2025 Certified Foundations Associate** (Credential: `323479580OCI25AICFA`)
  - **Data Structures and Algorithms Professional Certification** — Microsoft / Coursera
  - **Machine Learning Specialization Certification** — Coursera
  - **Internet of Things (IoT) Systems Certification** — Coursera

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Variables & Phosphor Design Tokens
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, Simple Icons)
- **Audio Synthesizer:** Pure Web Audio API (zero external assets, 25ms-80ms procedural transients)
- **Typography:** Self-hosted local `Cascadia Code` (no blocking CDN calls)
- **Communication:** [EmailJS Browser SDK](https://www.emailjs.com/)
- **Design System:** [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) adhering to WCAG AAA contrast standards

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samarrcore/samarworks.git
   cd samarworks
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Run ESLint checks:**
   ```bash
   npm run lint
   ```

---

## ⌨️ Shell Commands & Keyboard Shortcuts

You can type the following commands directly into the terminal or the persistent bottom dock:

| Command | Action |
|---|---|
| `help` | List all available directives |
| `whoami` / `about` | Open developer profile and credentials |
| `skills` / `ls` | Open skills directory |
| `projects` / `git` | Open project repository log |
| `services` / `systemctl` | View service daemons and offerings |
| `contact` / `ping` | Open digital vCard & transmission form |
| `matrix` | Launch Matrix digital rain visualization |
| `neofetch` / `specs` | Print system architecture specs |
| `clear` / `cls` | Reset terminal output buffer |
| `date` | Output current UTC timestamp |
| `echo <msg>` | Echo string to stdout |

### Global Shortcuts:
- <kbd>Ctrl</kbd> + <kbd>K</kbd> or <kbd>⌘</kbd> + <kbd>K</kbd>: Open Command Palette
- <kbd>/</kbd>: Focus Command Palette (when not in an input field)
- <kbd>Tab</kbd>: Autocomplete command in the bottom dock
- <kbd>↑</kbd> / <kbd>↓</kbd>: Navigate through previous command history
- <kbd>Esc</kbd>: Close Matrix rain or Command Palette

---

## 📬 Contact & Connect

- **Academic Email:** [ss8073@srmist.edu.in](mailto:ss8073@srmist.edu.in)
- **Direct Email:** [samarpratapyes.01@gmail.com](mailto:samarpratapyes.01@gmail.com)
- **GitHub:** [@samarrcore](https://github.com/samarrcore)
- **LinkedIn:** [samar-singh-444bb927b](https://www.linkedin.com/in/samar-singh-444bb927b/)
- **LeetCode:** [leetcode.com/samarrcore](https://leetcode.com/u/samarrcore/)

---

## 📄 License

This project is open-source and available under the [MIT License](./LICENSE).
