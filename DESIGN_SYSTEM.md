# DESIGN_SYSTEM.md

> The official design reference for SamarWorks. Every future page, section, component, and UI update must follow this specification so the developer workstation aesthetic and tactile command line interface remain cohesive across the entire product.

---

## 1. Project Overview

- **Website / Product Name:** SamarWorks (SamarOS Workstation)
- **Website Type:** Developer Portfolio, Workstation & Interactive Terminal Shell
- **Surface Profile:** Technical Web App / CLI Shell / Developer Portfolio
- **Platform:** Web (Cross-Platform Responsive: Mobile, Tablet, Desktop, Ultra-Wide)
- **Target Users:** Engineering hiring managers, tech leads, startup founders, open-source collaborators, and fellow developers
- **Main Design Goal:** Combine the tactile nostalgia and authority of an authentic terminal workstation with modern web responsiveness, zero-friction navigation, rich interactivity, and unmistakable developer personality.

---

## 2. Brand Direction & Core Concept

- **Visual Style:** Brutalist Technical / Cyber-Deck / Phosphor Terminal OS
- **Mood & Tone:** Precise, responsive, authentic, curious, tactile, uncompromisingly developer-first.
- **Design Personality:** Brutalist / Technical / Dev Craftsman
- **Design Concept (Step 2.7 Commitment):**
  > **"Obsidian Cyber-Deck (SamarOS v2.5)"** — A living, unified terminal operating system where every page is a structured command buffer inside a calibrated phosphor environment. Rather than static green text on black or generic marketing cards, the interface behaves like an authentic workstation with live system stats, synthesized mechanical audio clicks, Up/Down arrow bash history, tab completion, CRT scanlines, and an omnipresent command palette.
- **Adversarial-Review Verdict (Step 4.5):**
  - *Cover-the-Name Test:* If all branding is removed, the interface is immediately recognizable by its cohesive terminal chrome, live system daemon readouts (`systemctl`), git commit card trees, ASCII architecture, and instant CLI command execution.
  - *Identified Weakness & Fix:* Previous implementation had an artificial 1500ms delay on every click and required 5-second multi-step auto-typing loops to switch views, locking users behind a freeze screen. **Fixed:** Navigation is now zero-latency (instant component switch with smooth scrolling), while preserving realistic CLI auto-typing only for interactive demonstrations.
- **Voice & UX Copy:** Plain, confident, Unix-idiomatic. Prompts use standard POSIX conventions (`samar@dev:~$`, `drwxr-xr-x`, `exit 0`, `systemctl active (running)`). No corporate fluff or filler words.

---

## 3. Color System

| Role | Color Name | Hex Token | Usage |
|---|---|---|---|
| **60% — Dominant** | Obsidian Deep | `#080c10` | Fullscreen background, canvas underlay, CRT buffer |
| **30% — Secondary** | Surface Elevated | `#0e141b` / `#141d27` | Terminal window body, card chrome, status bar, docks |
| **10% — Accent (Primary)** | Emerald Phosphor | `#10b981` / `#34d399` | Prompts, primary active indicators, terminal cursor, glow |
| **Accent (Info)** | Cyber Cyan | `#06b6d4` / `#38bdf8` | Paths (`~/skills`), system specs, file sizes, links |
| **Accent (Notice)** | Phosphor Amber | `#f59e0b` | Command syntax highlights (`$`), flags (`--verbose`), branch tags |
| **Accent (Alert)** | Neon Crimson | `#f43f5e` | Close buttons, sudo denial alerts, error messages |
| **Text (High Contrast)** | Terminal Slate Bright | `#f1f5f9` | Primary headings, command input text, key metrics |
| **Text (Muted)** | Dim Phosphor Slate | `#94a3b8` / `#64748b` | Descriptions, timestamps, secondary specs, empty states |
| **Borders** | Subtle Charcoal Slate | `#1e293b` / `#334155` | Window boundaries, dividers, card outlines |

### Contrast Compliance (WCAG AA):
- `#f1f5f9` on `#080c10` $\rightarrow$ Contrast ratio **16.8:1** (Passes AAA)
- `#10b981` on `#080c10` $\rightarrow$ Contrast ratio **7.4:1** (Passes AAA)
- `#38bdf8` on `#080c10` $\rightarrow$ Contrast ratio **9.8:1** (Passes AAA)
- `#f59e0b` on `#080c10` $\rightarrow$ Contrast ratio **8.6:1** (Passes AAA)

---

## 4. Typography System

- **Brand Personality:** Brutalist / Technical / Dev
- **Font Family:** `Cascadia Code` (local self-hosted `.ttf`, zero external network dependencies) with fallback to `Consolas`, `'Fira Code'`, `monospace`.
- **Why this font fits:** Cascadia Code offers clean geometric terminals, crisp box-drawing and ASCII fidelity, and distinct programming ligatures without feeling fatigued or illegible.

| Token | Size (Desktop) | Size (Mobile) | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| `display-banner` | `0.65rem` | `0.45rem` | 400 | `1.15` | ASCII art headers (`SAMARWORKS`) |
| `heading-lg` | `1.25rem` | `1.1rem` | 700 | `1.4` | Profile names, project titles |
| `heading-md` | `1.05rem` | `0.95rem` | 700 | `1.4` | Card titles, service unit names |
| `body-main` | `0.875rem` | `0.85rem` | 400 | `1.65` | Bio paragraphs, project overviews, deliverables |
| `prompt-line` | `0.875rem` | `0.8rem` | 600 | `1.5` | Shell commands, dock input, active prompt |
| `code-caption` | `0.75rem` | `0.7rem` | 500 | `1.4` | Git hashes, file permissions, tags, status badges |

---

## 5. Layout System & Architecture

- **Page Shell Structure:**
  1. **Top OS Status Bar (`WorkstationHeader`):**
     - Left: Online heartbeat dot, `SAMAR-OS v2.5`, dynamic path `~/whoami`.
     - Center: Direct command tabs (`init`, `whoami`, `skills`, `projects`, `services`, `contact`).
     - Right: Tactile SFX toggle, CRT scanline toggle, Matrix rain button, `⌘K` launcher, live UTC clock.
  2. **Central Viewport:** Max width `1320px`, centered, responsive padding (`1.5rem` desktop, `1rem` mobile).
  3. **Terminal Window Container:**
     - Authentic 3-button window controls (`red` resets buffer, `yellow` minimizes, `green` maximizes).
     - Title bar with user session context.
     - Live command line breadcrumb with blinking block cursor (`█`).
  4. **Persistent Bottom Command Dock (`BottomCommandDock`):**
     - Always visible across all subpages.
     - Interactive input with command history navigation (`Up` / `Down` arrow keys).
     - Auto-completion with `Tab`.
     - Clickable suggestion chips (`$whoami`, `$skills`, `$projects`, `$services`, `$contact`, `$matrix`, `$clear`, `$help`).
  5. **Quick Command Palette (`⌘K` / `/`):**
     - Modal search overlay to jump to any page or trigger directives with keyboard arrows and Enter.

---

## 6. Page-by-Page Specifications

### Page 1: Home (`~` / `init`)
- Full interactive bash shell.
- ASCII art logo banner.
- Live system specifications readout (OS, Kernel, Core Focus, Uptime).
- Command dispatch loop: handles `help`, `whoami`, `skills`, `projects`, `services`, `contact`, `matrix`, `neofetch`, `date`, `echo`, `sudo`, `clear`.

### Page 2: About (`~/whoami`)
- Neofetch developer inspector with ASCII terminal badge.
- Bio prose emphasizing craftsmanship, rapid learning, and anti-AI-slop design.
- Metric gauge cards: Experience, Education, Base Location, Core Creed.
- Engineering manifesto detailing tactile UI principles and performance standards.

### Page 3: Skills (`~/skills`)
- Full Unix directory listing (`ls -la skills/`).
- Interactive filter flags: `--all`, `--languages`, `--frontend`, `--backend`, `--database`, `--tools`, `--soft-skills`.
- Real-time search/grep input (`grep skills...`).
- ASCII proficiency gauges (`[████████░░] 80%`) alongside clean `react-icons`.

### Page 4: Projects (`~/projects`)
- Git repository log representation (`git log --graph --oneline`).
- Categorized commits with commit hashes, tags, and status badges.
- Expandable README inspector showing architectural highlights and direct clone commands.
- External links to GitHub repositories with clean security attributes (`rel="noopener noreferrer"`).

### Page 5: Services (`~/services`)
- Service daemon status inspector (`systemctl list-units --type=service`).
- 4 production daemons: Web Dev, UI/UX Systems, Frontend Performance, Mobile PWA.
- Shows PIDs, memory allocation, SLAs, and clear deliverables.
- "Request Quote" buttons that navigate directly to the contact console with the service pre-filled.

### Page 6: Contact (`~/contact`)
- Dual-column workstation:
  1. Digital vCard: Email, Phone, Location, LinkedIn, GitHub with instant one-click copy feedback (`[COPIED!]`).
  2. Transmission Console: Fully integrated EmailJS message dispatcher with input validation, error handling, sound effects, and terminal success readouts.

---

## 7. Tactile Interactions & Audio Synthesizer

- **SoundFX Engine (`src/utils/audio.js`):**
  - Pure Web Audio API synthesis (0kb external audio asset footprint).
  - Keystroke clicks: randomized 600–800Hz triangle wave transient (25ms).
  - Enter / navigation: rising dual-tone sine wave sweep (440Hz $\rightarrow$ 880Hz).
  - Error: 180Hz sawtooth buzz.
  - Global mute/unmute control in the top OS bar with persistent state.
- **CRT Scanlines Mode:**
  - CSS linear-gradient overlay replicating shadow mask monitor lines.
  - Instant toggle via top bar button.
- **Matrix Rain Mainframe (`src/components/MatrixRain.jsx`):**
  - High-performance HTML5 Canvas digital rain stream.
  - Activated via `$ matrix`, button in header, or Command Palette.
  - Dismissible with `Esc` or single click.

---

## 8. UX Audit Summary & Remediation

| Previous UX Flaw | Impact | Remediated Solution |
|---|---|---|
| **1.5s Artificial Loading Screen** | Trapped users in a 1.5s freeze on every click. | Completely eliminated. Page switches are now instant (<10ms) and fluid. |
| **Multi-Step 5s Auto-Type Freeze** | Clicking subpage links forced a 5s loop back to home. | Direct reactive routing. Users navigate immediately to their target content. |
| **Navbar Not Rendered** | Navbar component was dead code, leaving subpages stranded. | Replaced with unified `WorkstationHeader` & `BottomCommandDock` on all pages. |
| **Broken Link Handling** | `Navbar` attempted `document.getElementById` and threw alert popups. | Pure React state routing without fragile DOM queries or modal lockups. |
| **No Terminal Continuity** | Subpages lost the command-line interface entirely. | Persistent command dock + `⌘K` palette ensures CLI is accessible from anywhere. |
| **External Third-Party Font Import** | `@import url('...github.io/...')` risked network latency / broken typography. | Self-hosted local `CascadiaCode.ttf` loaded with `font-display: swap`. |
| **Cramped 800px Fixed Window** | Caused clipping and awkward double scrollbars on laptops. | Responsive container scaling with clean layout and dedicated terminal buffer scrolling. |
