# 📄 Interactive Resume Workspace

Welcome to your personalized **Resume Workspace**. This workspace provides a full-featured, interactive, web-based resume application with live customizers, multiple theme choices, LocalStorage state persistence, JSON import/export, and single-click print/PDF export styling.

## 📁 Workspace Files

- [`index.html`](index.html) - Main application layout and drawer control panel.
- [`styles.css`](styles.css) - Design system tokens, glassmorphism UI, themes (Dark, Light, Emerald), and A4 print media queries (`@media print`).
- [`app.js`](app.js) - Application logic, state management, live visual editor, JSON import/export, and PDF print trigger.
- [`resume-data.json`](resume-data.json) - Default structured JSON resume data.
- [`server.js`](server.js) - Lightweight local HTTP server.
- [`generate_pdf.js`](generate_pdf.js) - Automated PDF export script (Headless Edge/Puppeteer).

---

## ✨ Features

1. **Presentation & Portfolio View**:
   - Clean, modern visual layout featuring interactive timeline for work experience.
   - Skill categories and level badges.
   - Featured project cards with repository and live demo badges.
   - Social profile badges.

2. **Live Customizer & Form Drawer**:
   - Click **✏️ Edit Resume** to open the side customizer drawer.
   - Update your Name, Professional Title, Contact Info, and Executive Summary with real-time live preview updates.
   - Toggle to the **JSON Tab** for direct raw JSON manipulation of experience, skills, projects, and education arrays.

3. **Theme Customization**:
   - Choose between **🌙 Dark Mode**, **☀️ Light Mode**, and **🌿 Emerald Glow** from the header dropdown.

4. **Export to PDF & Print**:
   - Click **📄 Print / PDF** (or press `Ctrl + P` / `Cmd + P`).
   - The application automatically strips navigation header, background gradients, and side drawers, formatting your resume into a high-contrast print layout optimized for A4 / Letter PDF export.

5. **JSON Import / Export**:
   - Click **💾 Save JSON** to back up your current resume dataset.
   - Click **📂 Load JSON** to restore or upload custom resume JSON files.

---

## 🚀 How to Run Locally

You can preview the app using any static web server (such as Python `http.server` or VSCode Live Server):

```bash
# Using Python
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.
