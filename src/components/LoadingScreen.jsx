import React from 'react';

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="monogram-wrap">
        <div className="monogram-ring"></div>
        <div className="monogram-glow"></div>
        <div className="monogram">AK</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
