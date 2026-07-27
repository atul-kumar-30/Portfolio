import React, { useEffect, useState } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show loader for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      
      // Wait for fade out animation to finish before unmounting
      setTimeout(() => {
        onLoadingComplete();
      }, 500); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loader-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="monogram-wrap loader-monogram">
        <div className="monogram-ring"></div>
        <div className="monogram-glow"></div>
        <div className="monogram">AK</div>
      </div>
    </div>
  );
};

export default Loader;
