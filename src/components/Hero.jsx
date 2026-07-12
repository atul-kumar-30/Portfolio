import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const typingRef = useRef(null);
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    const texts = [
      'Aspiring Software Engineer',
      'AI/ML Engineer'
    ];

    let tIdx = 0, cIdx = 0, deleting = false;
    let timerId;

    function type() {
      if (!el) return;
      const current = texts[tIdx];
      el.textContent = deleting
        ? current.substring(0, cIdx--)
        : current.substring(0, cIdx++);

      let speed = deleting ? 45 : 95;
      if (!deleting && cIdx > current.length) { deleting = true; speed = 1800; }
      else if (deleting && cIdx < 0) { deleting = false; tIdx = (tIdx + 1) % texts.length; speed = 400; }
      timerId = setTimeout(type, speed);
    }
    type();
    
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const el = document.getElementById('scroll-indicator');
    const handleScroll = () => {
      if (window.scrollY > 100) el?.classList.add('hidden');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Atul Kumar</span>
            </h1>
            <p className="hero-typing">
              <span id="typing-text" ref={typingRef}></span><span className="cursor">|</span>
            </p>
            <p className="hero-description">Recent B.Tech CSE Graduate from GEHU, Dehradun. Aspiring <strong>Software
                Engineer</strong> & <strong>AI/ML Engineer</strong>, open to opportunities.</p>
            <div className="hero-buttons">
              <div className="resume-dropdown-container" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
                <button 
                  className="btn btn--primary" 
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  📄 Resume 
                  <span style={{ fontSize: '0.8em', marginLeft: '8px' }}>▼</span>
                </button>
                {showDropdown && (
                  <div className="resume-dropdown" style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    marginTop: '10px',
                    background: 'var(--surface)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius)',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    zIndex: 20,
                    minWidth: '240px',
                    boxShadow: 'var(--shadow)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text)' }}>Atul_Resume.pdf</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href="/Atul_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn--primary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>View</a>
                        <a href="/Atul_Resume.pdf" download className="btn btn--outline" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>⬇️</a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text)' }}>Atul_Resume_FullStack.pdf</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href="/Atul_Resume_FullStack.pdf" target="_blank" rel="noreferrer" className="btn btn--primary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>View</a>
                        <a href="/Atul_Resume_FullStack.pdf" download className="btn btn--outline" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>⬇️</a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text)' }}>Atul_Resume_SDE.pdf</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href="/Atul_Resume_SDE.pdf" target="_blank" rel="noreferrer" className="btn btn--primary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>View</a>
                        <a href="/Atul_Resume_SDE.pdf" download className="btn btn--outline" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>⬇️</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#projects" className="btn btn--outline">🚀 View My Work</a>
            </div>
            <div className="floating-social">
              <a href="https://github.com/atul-kumar-30" className="social-icon github" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/atul-kumar-805477335/" className="social-icon linkedin" target="_blank"
                rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="monogram-wrap">
              <div className="monogram-ring"></div>
              <div className="monogram-glow"></div>
              <div className="monogram">AK</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" id="scroll-indicator" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span>Scroll down</span>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
