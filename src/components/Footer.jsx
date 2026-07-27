import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" style={{ padding: '4rem 0 2rem', background: 'rgba(5,0,17,0.95)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>© {new Date().getFullYear()} Atul Kumar. All rights reserved.</p>
          <button onClick={scrollToTop} style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--text)', padding: '0.5rem 1.2rem', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.9rem', backdropFilter: 'blur(10px)' }}>
            Back to Top ⬆️
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
