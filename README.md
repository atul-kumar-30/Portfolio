# Atul Kumar - Personal Portfolio

A modern, responsive, and highly animated personal portfolio built using **React** and **Vite**. 

This portfolio showcases my skills as a Software Engineer, featuring my technical skill sets, major projects (like DeepFake Detection and a Full-Stack Expense Tracker), certifications, and a timeline of my educational journey.

## 🚀 Live Demo

[View Live Portfolio](https://portfolio-atul-kumar.vercel.app/) *(Hosted on Vercel)*

## 🛠️ Built With

*   **Frontend Framework:** [React.js](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** Vanilla CSS3 (Custom Design System, Glassmorphism, Dark Mode)
*   **Animations:** Custom CSS Animations, Keyframes, IntersectionObserver (React Hooks)
*   **Deployment:** Vercel (with custom `vercel.json` routing configuration)

## ✨ Key Features

*   **Component-Based Architecture:** Modular design with highly reusable React components (`Hero`, `Projects`, `Skills`, etc.).
*   **Clean URL Routing:** Uses standard HTML5 pushState to create clean URLs (e.g. `/skills`, `/projects`) instead of hash anchors, with full Vercel SPA routing support.
*   **Interactive UI & Typography:** Smooth scroll reveals, uppercase navigation styling, dynamic typing animations, automatic stat counters, and a responsive mobile hamburger menu.
*   **Visual Project Showcase:** Image-based project cards featuring high-quality screenshots for the Modern Expense Tracker, Deepfake Detection System, Air Quality Predictor, and Ultimate Tic-Tac-Toe.
*   **Modern Aesthetic:** Deep space gradients, floating particle backgrounds, and glassmorphism styling.
*   **Advanced Contact Form:** Integrated with Formspree for immediate email delivery. Features a modern "Visitor Type" pill selection UI (Recruiter / Developer / Student / Other) that dynamically requests more context.
*   **UI/UX Polish:** Unified contact section with official SVG social logos, and consistent, attractive emoji iconography across the timeline, skills, and projects sections.

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
│   ├── Deepfake_Detection.png
│   ├── Expense_Tracker.png
│   ├── air quality predictor.png
│   ├── tic-tac-toe.png
│   ├── Atul_Kumar_Resume.pdf
│   ├── GEHU_Dehradun_Campus.jpg
│   └── School.jpeg
├── src/
│   ├── assets/             # Images and Icons
│   │   └── skills-icon.png
│   ├── components/         # Modular React components
│   │   ├── About.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Timeline.jsx
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
