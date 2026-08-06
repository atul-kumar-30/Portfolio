import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    const texts = [
      'Building Full-Stack Apps',
      'Developing AI/ML Systems'
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
            <div className="hero-buttons" style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--surface)', border: '1px solid var(--glass-border)', padding: '8px 16px', borderRadius: 'var(--radius)', backdropFilter: 'blur(10px)' }}>
                <span style={{ fontWeight: '600', color: 'var(--text)' }}>📄 Resume</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href="/Atul_Kumar_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn--primary" style={{ padding: '8px 16px', fontSize: '0.9rem', minWidth: 'auto' }}>
                    View
                  </a>
                  <a href="/Atul_Kumar_Resume.pdf" download className="btn btn--outline" style={{ padding: '8px 16px', fontSize: '0.9rem', minWidth: 'auto' }}>
                    ⬇️ Download
                  </a>
                </div>
              </div>
              <a href="#projects" className="btn btn--outline">View My Work ➔</a>
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
