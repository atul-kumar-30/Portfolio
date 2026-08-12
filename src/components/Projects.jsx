import React from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A10.52 10.52 0 0 1 12 6.845a10.55 10.55 0 0 1 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.839 24 17.342 24 12 24 5.373 18.627 0 12 0z" />
  </svg>
);

const ViewIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.88 2.16a1 1 0 0 0-1-.16l-14 5a1 1 0 0 0-.56 1.45l3.85 6.67 1.88 5.65a1 1 0 0 0 .9.68 1 1 0 0 0 .32-.05l6-2a1 1 0 0 0 .64-1.2l-2-6 4.64-8.08a1 1 0 0 0-.67-1.96z" />
  </svg>
);

const projects = [
  {
    title: "💰 Expense Tracker",
    image: "/Expense_Tracker.png",
    alt: "Expense Tracker dashboard",
    github: "https://github.com/atul-kumar-30/Expense_Tracker",
    live: "https://expense-tracker-eosin-delta.vercel.app",
    description:
      "Full-stack expense tracking application with secure Supabase authentication, real-time PostgreSQL synchronization, CRUD operations, spending analytics, and a responsive React interface.",
    technologies: [
      "React.js",
      "Supabase",
      "PostgreSQL",
      "JavaScript",
      "CSS",
    ],
  },
  {
    title: "🧠 Deepfake Detection",
    image: "/Deepfake_Detection.png",
    alt: "Deepfake Detection System dashboard",
    github: "https://github.com/atul-kumar-30/Deepfake-Detection",
    live: null,
    description:
      "AI-powered deepfake detection application using EfficientNet-B4 and MTCNN. Supports image and video uploads through a Flask REST API with real-time confidence scores.",
    technologies: [
      "Python",
      "TensorFlow",
      "EfficientNet-B4",
      "Flask",
      "OpenCV",
      "MTCNN",
    ],
  },
  {
    title: "🌍 Air Quality Predictor",
    image: "/Air_Quality_predictor.png",
    alt: "Air Quality Predictor dashboard",
    imageClass: "project-screenshot--air",
    github: "https://github.com/atul-kumar-30/Air-Quality-Predictor",
    live: "https://air-quality-predictor-frontend.onrender.com",
    description:
      "Full-stack machine-learning application using Random Forest to forecast PM2.5 levels. Integrates Open-Meteo data, FastAPI, SQLite, interactive charts, and environmental readings.",
    technologies: [
      "React.js",
      "FastAPI",
      "Random Forest",
      "SQLite",
      "Docker",
    ],
  },
  {
    title: "🤖 AI Job Tracker",
    image: "/AI_Job_Tracker.png",
    alt: "AI Job Tracker applications pipeline",
    github: "https://github.com/atul-kumar-30/AI-Job-Tracker",
    live: "https://ai-job-tracker-mu-one.vercel.app/",
    description:
      "AI-powered full-stack job tracker with JWT authentication, drag-and-drop application management, ATS resume scoring, and Gemini-powered cover-letter and email generation.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
    ],
  },
];

const ProjectCard = ({ project }) => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="project-card">
      <div className="project-preview">
        <img
          src={project.image}
          alt={project.alt}
          className={`project-screenshot ${project.imageClass || ""}`}
          loading="lazy"
        />

        <div className="project-overlay">
          <div className="project-overlay-links">
            <button
              type="button"
              className="proj-link"
              onClick={() => openLink(project.github)}
              aria-label={`Open ${project.title} GitHub repository`}
            >
              <GitHubIcon />
              GitHub
            </button>

            {project.live && (
              <button
                type="button"
                className="proj-link proj-link--live"
                onClick={() => openLink(project.live)}
                aria-label={`Open ${project.title} live application`}
              >
                <ViewIcon />
                View App
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          🚀 <span className="accent">Main</span> Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="projects-more">
          <button
            onClick={() => window.open('https://github.com/atul-kumar-30', '_blank', 'noreferrer')}
            className="btn btn--outline"
          >
            View More on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
