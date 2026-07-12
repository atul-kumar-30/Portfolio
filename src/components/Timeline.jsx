import React, { useEffect } from 'react';

const Timeline = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-tl');
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="section section--alt">
      <div className="container">
        <h2 className="section-title reveal">🗺️ My <span className="accent">Journey</span></h2>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-icon">📚</div>
            <div className="timeline-content">
              <span className="timeline-date">2020</span>
              <h3>Completed 10th Grade</h3>
              <p>Graduated high school with a strong foundation in Science and Mathematics — the start of my tech journey.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🏫</div>
            <div className="timeline-content">
              <span className="timeline-date">2022</span>
              <h3>Completed 12th Grade</h3>
              <p>Finished senior secondary education and secured admission into B.Tech CSE, ready to dive deep into
                Computer Science.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">💻</div>
            <div className="timeline-content">
              <span className="timeline-date">2022 – 2023</span>
              <h3>Initial Phase: Foundations</h3>
              <p>Mastered <strong>C and C++</strong>. Built a strong foundation in <strong>Data Structures & Algorithms
                  (DSA)</strong> and <strong>Object-Oriented Programming (OOPs)</strong>.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">⚙️</div>
            <div className="timeline-content">
              <span className="timeline-date">2023 – 2024</span>
              <h3>Advanced Algorithms & Core CS</h3>
              <p>Learned <strong>Java</strong> and <strong>DAA (Design & Analysis of Algorithms)</strong>. Mastered core
                CS subjects: <strong>OS, DBMS, and Computer Networks (CN)</strong>.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🌐</div>
            <div className="timeline-content">
              <span className="timeline-date">Late 2024</span>
              <h3>Web Development Mastery</h3>
              <p>Transitioned into building for the web. Learned <strong>HTML, CSS, and JavaScript</strong> to create
                responsive and interactive user interfaces.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎮</div>
            <div className="timeline-content">
              <span className="timeline-date">Early 2025</span>
              <h3>Advanced Frontend Mastery</h3>
              <p>Built <strong>Ultimate Tic-Tac-Toe</strong>, a competitive multiplayer web app showcasing advanced <strong>React</strong> state management, Supabase integration, and premium UI/UX design.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">☁️</div>
            <div className="timeline-content">
              <span className="timeline-date">Late 2025</span>
              <h3>Oracle AI Certification & ML Research</h3>
              <p>Earned the Oracle Cloud Infrastructure AI Foundations 2025 Associate certificate. Commenced work on my
                Major Final Year Project.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🧠</div>
            <div className="timeline-content">
              <span className="timeline-date">2025 – 2026</span>
              <h3>Final Year Project: Deepfake Detection</h3>
              <p>Extensive research and development of a CNN-based system to detect digital manipulation in image and
                video media.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">💰</div>
            <div className="timeline-content">
              <span className="timeline-date">Feb – March 2026</span>
              <h3>Modern Expense Tracker</h3>
              <p>Engineered a full-stack financial tool with React and Supabase, featuring secure authentication and
                real-time data synchronization.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎓</div>
            <div className="timeline-content">
              <span className="timeline-date">May 2026</span>
              <h3>Graduated B.Tech CSE</h3>
              <p>Successfully completed B.Tech in Computer Science & Engineering from GEHU. Actively seeking opportunities to contribute as a Software Engineer or AI/ML Engineer.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🌍</div>
            <div className="timeline-content">
              <span className="timeline-date">July 2026</span>
              <h3>Air Quality Predictor</h3>
              <p>Developed an intuitive application to predict air quality indices using machine learning, helping users monitor environmental health.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
