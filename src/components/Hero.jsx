import React, { useEffect, useRef } from 'react';
import HeroScene from './HeroScene';
import { FileText, Eye, Download, ChevronDown } from 'lucide-react';



const Hero = ({ onReady }) => {
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
                <span style={{ fontWeight: '600', color: 'var(--text)', display: 'flex', alignItems: 'center' }}><FileText className="btn-icon" style={{ marginRight: '6px' }} /> Resume</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => window.open('/Atul_Kumar_Resume.pdf', '_blank', 'noreferrer')} className="btn btn--primary" style={{ padding: '8px 16px', fontSize: '0.9rem', minWidth: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Eye className="btn-icon" style={{ marginRight: '6px' }} /> View
                  </button>
                  <button onClick={() => { const a = document.createElement('a'); a.href='/Atul_Kumar_Resume.pdf'; a.download='Atul_Kumar_Resume.pdf'; a.click(); }} className="btn btn--outline" style={{ padding: '8px 16px', fontSize: '0.9rem', minWidth: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Download className="btn-icon" style={{ marginRight: '6px' }} /> Download
                  </button>
                </div>
              </div>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn--outline">View My Work ➔</button>
            </div>

            {/* Social Links */}
            <div className="floating-social" style={{ marginTop: '1.5rem' }}>
              <button
                onClick={() => window.open('https://github.com/atul-kumar-30', '_blank', 'noreferrer')}
                className="social-icon github"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '6px' }}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/atul-kumar-805477335/', '_blank', 'noreferrer')}
                className="social-icon linkedin"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '6px' }}>
                  <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077b5"/>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="#ffffff"/>
                </svg>
                LinkedIn
              </button>
              <button
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=atulk864943@gmail.com', '_blank', 'noreferrer')}
                className="social-icon gmail"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '6px' }}>
                  <path d="M16.5 20.4v-9.6L12 14.1l-4.5-3.3v9.6H3.9c-1.32 0-2.4-1.08-2.4-2.4V7.2c0-1.67 1.92-2.61 3.24-1.6L12 10.9l7.26-5.3c1.32-1 3.24-.06 3.24 1.6v10.8c0 1.32-1.08 2.4-2.4 2.4h-3.6z" fill="#ea4335" />
                  <path d="M16.5 10.8V20.4H20.1C21.42 20.4 22.5 19.32 22.5 18V7.2L16.5 10.8z" fill="#fbbc04" />
                  <path d="M1.5 7.2v10.8C1.5 19.32 2.58 20.4 3.9 20.4H7.5V10.8L1.5 7.2z" fill="#4285f4" />
                  <path d="M16.5 10.8L22.5 7.2C22.5 5.53 20.58 4.6 19.26 5.6L12 10.9L4.74 5.6C3.42 4.6 1.5 5.53 1.5 7.2L7.5 10.8V3.6h9v7.2z" fill="#34a853" />
                </svg>
                Gmail
              </button>
              <span className="social-icon location" style={{ whiteSpace: 'nowrap' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#a78bfa" style={{ marginRight: '6px' }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Dehradun, India
              </span>
            </div>

          </div>
          <div className="hero-visual">
            <HeroScene onReady={onReady} />
          </div>
        </div>
      </div>
      <div className="scroll-indicator" id="scroll-indicator" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span>Scroll down</span>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;