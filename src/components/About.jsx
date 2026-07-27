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
          <p className="about-desc reveal">
            I'm Atul Kumar, a recent <strong>B.Tech CSE</strong> graduate from Graphic Era Hill University. I specialize in building full-stack applications, integrating <strong>AI/ML systems</strong>, working with databases and authentication, and implementing real-time features. I am passionate about software engineering and eager to contribute to a team where technology creates a real impact.
          </p>

          <div className="stats-grid" ref={statsRef}>
            <div className="stat-card" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} title="Click to view Education">
              <span className="stat-num" data-target="4">0</span><span className="stat-suffix"></span>
              <span className="stat-label">Years of Study</span>
            </div>
            <div className="stat-card" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} title="Click to view Projects">
              <span className="stat-num" data-target="7">0</span><span className="stat-suffix">+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} title="Click to view Technologies">
              <span className="stat-num" data-target="15">0</span><span className="stat-suffix">+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card" onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} title="Click to view Certifications">
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
