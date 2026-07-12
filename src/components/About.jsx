import React, { useEffect, useRef } from 'react';

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const statNums = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          const targetStr = entry.target.dataset.target;
          const target = parseInt(targetStr);
          let current = 0;
          const inc = target / 60;
          const timer = setInterval(() => {
            current = Math.min(current + inc, target);
            entry.target.textContent = Math.floor(current);
            if (current >= target) clearInterval(timer);
          }, 30);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal">👨‍💻 <span className="accent">About</span> Me</h2>
        <div className="about-content">
          <p className="about-desc reveal">I'm Atul Kumar, a recent <strong>B.Tech CSE (2022-2026)</strong> graduate from Graphic
            Era Hill University,Dehradun passionate about <strong>Software Engineering</strong> and <strong>AI/ML</strong>. I have
            strong fundamentals in DSA, OOP, DBMS, and Computer Networks. I enjoy building practical applications — my key
            projects include an AI-based DeepFake Detection System using EfficientNet-B4, TensorFlow, and Flask, a full-stack Expense
            Tracker with React and Supabase, and a feature-rich Ultimate Tic-Tac-Toe web app. I've also earned certifications
            in Oracle Cloud AI Foundations, Cybersecurity, and Generative AI. Eager to contribute to a team where
            technology creates real impact.</p>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🧠</div>
              <div>
                <h4>AI & Machine Learning</h4>
                <p>Built an AI-powered DeepFake Detection System using TensorFlow, EfficientNet-B4, and Flask with
                  real-time image and video analysis.</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">⚙️</div>
              <div>
                <h4>Software Engineering</h4>
                <p>Developed full-stack applications including a React + Supabase Expense Tracker and a modern, 
                  competitive Ultimate Tic-Tac-Toe game.</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🔬</div>
              <div>
                <h4>Problem Solving</h4>
                <p>Strong foundation in DSA, OOP, and system design — passionate about writing efficient, scalable code.
                </p>
              </div>
            </div>
          </div>

          <div className="stats-grid" ref={statsRef}>
            <div className="stat-card">
              <span className="stat-num" data-target="4">0</span><span className="stat-suffix"></span>
              <span className="stat-label">Years of Study</span>
            </div>
            <div className="stat-card">
              <span className="stat-num" data-target="7">0</span><span className="stat-suffix">+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card">
              <span className="stat-num" data-target="15">0</span><span className="stat-suffix">+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card">
              <span className="stat-num" data-target="3">0</span><span className="stat-suffix"></span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
