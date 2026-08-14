import React, { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!barRef.current) return;
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      barRef.current.style.transform = `scaleX(${scroll})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #064e3b, #047857, #10b981)',
        transformOrigin: '0%',
        transform: 'scaleX(0)',
        zIndex: 9999,
        boxShadow: '0 0 15px rgba(4, 120, 87, 0.8)'
      }}
      ref={barRef}
    />
  );
};

export default ScrollProgress;
