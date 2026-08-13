import React, { useEffect, useRef } from 'react';
import { UserRound, Code2, FolderCode, Blocks, Award, Terminal } from 'lucide-react';

const About = () => {
  const statsRef = useRef(null);

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    const navbar = document.getElementById('navbar');
    if (target && navbar) {
      const offset = navbar.offsetHeight - 60;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  };

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
        <h2 className="section-title reveal"><UserRound className="section-icon" /> <span className="accent">About</span> Me</h2>
        <div className="about-content">
          <div className="about-glass-box reveal" style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '3rem', 
            background: 'var(--glass)', 
            border: `1px solid var(--glass-border)`, 
            borderRadius: 'var(--radius)', 
            padding: '3rem',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '4rem',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            {/* Avatar Placeholder */}
            <div className="about-avatar" style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
              padding: '5px',
              flexShrink: 0,
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#0b0020',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4.5rem',
                fontWeight: 'bold',
                color: '#fff',
                fontFamily: 'sans-serif'
              }}>
                AK
              </div>
            </div>

            {/* Text Area */}
            <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
              <p className="about-desc" style={{ margin: 0, textAlign: 'left', fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '100%' }}>
                I'm a recent <strong>B.Tech CSE</strong> graduate from Graphic Era Hill University. I specialize in building full-stack applications, integrating <strong>AI/ML systems</strong>, working with databases and authentication, and implementing real-time features. I am passionate about software engineering and eager to contribute to a team where technology creates a real impact.
              </p>
            </div>
          </div>

          <div className="stats-grid" ref={statsRef}>
            <div className="stat-card" onClick={() => scrollTo('education')} style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <span className="stat-num" data-target="4">0</span><span className="stat-suffix">+</span>
              <span className="stat-label"><Code2 className="card-icon" />Years of Coding</span>
            </div>
            <div className="stat-card" onClick={() => scrollTo('projects')} style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <span className="stat-num" data-target="7">0</span><span className="stat-suffix">+</span>
              <span className="stat-label"><FolderCode className="card-icon" />Projects Built</span>
            </div>
            <div className="stat-card" onClick={() => scrollTo('skills')} style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <span className="stat-num" data-target="15">0</span><span className="stat-suffix">+</span>
              <span className="stat-label"><Blocks className="card-icon" />Technologies</span>
            </div>
            <div className="stat-card" onClick={() => scrollTo('certifications')} style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <span className="stat-num" data-target="3">0</span><span className="stat-suffix">+</span>
              <span className="stat-label"><Award className="card-icon" />Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
