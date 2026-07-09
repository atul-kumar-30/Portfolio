import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title reveal">📁 <span className="accent">Main</span> Projects</h2>
        <div className="projects-grid">
          
          <div className="project-card">
            <div className="project-preview project-preview--image">
              <img src="/Expense_Tracker.png" alt="Expense Tracker Dashboard" className="project-screenshot" />
              <div className="project-overlay">
                <div className="project-overlay-links">
                  <a href="https://github.com/atul-kumar-30/Expense_Tracker" target="_blank" rel="noreferrer" className="proj-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-body">
              <h3>💰 Modern Expense Tracker</h3>
              <p>Full-stack expense tracking app with secure Supabase authentication and real-time PostgreSQL data sync.
                Features full CRUD operations, an interactive analytics dashboard with monthly trends, category-wise
                spending visualizations, and a responsive React UI across desktop and mobile.</p>
              <div className="tech-tags">
                <span>ReactJS</span><span>Supabase</span><span>PostgreSQL</span><span>JavaScript</span><span>CSS</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-preview project-preview--image">
              <img src="/Deepfake_Detection.png" alt="Deepfake Detection System Dashboard" className="project-screenshot" />
              <div className="project-overlay">
                <div className="project-overlay-links">
                  <a href="https://github.com/atul-kumar-30/Deepfake-Detection" target="_blank" rel="noreferrer" className="proj-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-body">
              <h3>🧠 Deepfake Detection (Final Year Project)</h3>
              <p>AI-powered deepfake detection web app using EfficientNet-B4 deep learning model. Integrated MTCNN for
                face detection and preprocessing. Built a Flask REST API supporting image and video uploads — analyzing
                images in under 3 seconds and short videos in under 30 seconds.</p>
              <div className="tech-tags">
                <span>Python</span><span>TensorFlow</span><span>EfficientNet-B4</span><span>Flask</span><span>OpenCV</span><span>MTCNN</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-preview project-preview--image">
              <img src="/Suduko_validator.png" alt="Sudoku Validator Dashboard" className="project-screenshot" />
              <div className="project-overlay">
                <div className="project-overlay-links">
                  <a href="https://github.com/atul-kumar-30/sudoku-solution-validator" target="_blank" rel="noreferrer" className="proj-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-body">
              <h3>🧮 Sudoku Validator</h3>
              <p>Web app for validating Sudoku solutions using Flask (Python) and C++. Validates all rows, columns, and
                3×3 subgrids via REST APIs that process grid inputs and return validation results, with a responsive
                HTML/CSS/JavaScript frontend.</p>
              <div className="tech-tags">
                <span>Flask</span><span>C++</span><span>Python</span><span>HTML/CSS</span><span>JavaScript</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
