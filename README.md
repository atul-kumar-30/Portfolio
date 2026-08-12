# Atul Kumar - Personal Portfolio

A modern, responsive, and visually stunning personal portfolio built using **React**, **Vite**, and **Three.js** for immersive 3D effects.

This portfolio showcases my skills as a Software Engineer, featuring my technical skill sets, major projects (like DeepFake Detection and a Full-Stack Expense Tracker), certifications, and a timeline of my educational journey.

## 🚀 Live Demo

[View Live Portfolio](https://portfolio-atul-kumar.vercel.app/) *(Hosted on Vercel)*

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| 🎨 **Frontend Framework** | [React.js](https://react.dev/) |
| ⚡ **Build Tool** | [Vite](https://vitejs.dev/) |
| 🌌 **3D Graphics** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| 💅 **Styling** | Vanilla CSS3 (Custom Design System, Glassmorphism, Dark Mode) |
| 🎬 **Animations** | Custom CSS Animations, Keyframes, IntersectionObserver (React Hooks) |
| 🚀 **Deployment** | Vercel (with custom `vercel.json` routing configuration) |

## ✨ Key Features

*   **3D Animated Background:** A live Tron-style perspective grid rendered using Three.js WebGL, with real-time animation.
*   **3D Hero Scene:** An interactive icosahedron with animated orbit rings that responds to mouse movement using `@react-three/fiber` and `@react-three/drei`.
*   **Component-Based Architecture:** Modular design with highly reusable React components (`Hero`, `Projects`, `Skills`, etc.).
*   **Clean URL Routing:** Uses HTML5 pushState for clean URLs (e.g. `/skills`, `/projects`) instead of hash anchors, with full Vercel SPA routing support.
*   **Interactive Stats:** Clickable stat cards in the About section (4+ Years of Coding, 7+ Projects Built, 15+ Technologies, 3 Certifications) that smoothly scroll to the relevant section.
*   **Interactive UI & Typography:** Smooth scroll reveals, uppercase navigation styling, dynamic typing animations, automatic stat counters, and a responsive mobile hamburger menu.
*   **Visual Project Showcase:** Image-based project cards featuring high-quality screenshots for the Modern Expense Tracker, Deepfake Detection System, Air Quality Predictor, and AI Job Tracker.
*   **Modern 2.5D Aesthetic:** Deep space dark theme, Tron-inspired 3D grid background, and sleek layered glassmorphism cards with dynamic 3D mouse tracking.
*   **Advanced Contact Section:** Integrated with Formspree for immediate email delivery. Features a modern "Visitor Type" pill selection UI and direct social integrations including a one-click Gmail composer.
*   **No Status Bar Leaks:** All external links use `<button>` elements to prevent browser URL preview in the status bar on hover.

## 💻 Running Locally

If you want to run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/atul-kumar-30/Portfolio.git
    cd Portfolio
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:5173` to view the app.

## 📂 Project Structure

```text
├── public/                 # Static assets (Resume PDF, project screenshots)
│   ├── AI_Job_Tracker.png
│   ├── Air_Quality_predictor.png
│   ├── Deepfake_Detection.png
│   ├── Expense_Tracker.png
│   ├── Atul_Kumar_Resume.pdf
│   ├── GEHU_Dehradun_Campus.jpg
│   └── School.jpeg
├── src/
│   ├── assets/             # Images and Icons
│   │   └── skills-icon.png
│   ├── components/         # Modular React components
│   │   ├── About.jsx           # About section with animated stats
│   │   ├── AnimatedBackground.jsx  # Three.js background entry
│   │   ├── Certificates.jsx    # Certifications section
│   │   ├── Contact.jsx         # Contact form (Formspree)
│   │   ├── Education.jsx       # Education section
│   │   ├── Footer.jsx          # Footer
│   │   ├── Hero.jsx            # Hero section with typing animation
│   │   ├── HeroScene.jsx       # Three.js 3D icosahedron scene
│   │   ├── Navbar.jsx          # Responsive navigation bar
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Skills.jsx          # Skills grid
│   │   ├── ThreeBackground.jsx # Tron perspective grid (WebGL)
│   │   └── Timeline.jsx        # Education/career timeline
│   ├── App.jsx             # Main Application Assembly & Observer Logic
│   ├── index.css           # Global Styles & Animations
│   └── main.jsx            # React Entry Point
├── vercel.json             # Vercel SPA Routing Rules
├── index.html              # HTML Shell
├── package.json            # Project Dependencies
└── vite.config.js          # Vite Configuration
```

## 📬 Contact

*   **Email:** atulk864943@gmail.com
*   **LinkedIn:** [linkedin.com/in/atul-kumar](https://www.linkedin.com/in/atul-kumar-805477335/)
*   **GitHub:** [github.com/atul-kumar-30](https://github.com/atul-kumar-30)

---
*Designed & Developed by Atul Kumar © 2026*
