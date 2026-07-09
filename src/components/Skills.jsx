import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section-title reveal">⚙️ <span className="accent">Technical</span> Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">🧠</span>
              <h3>AI & Machine Learning</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Keras</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">CNN</span>
              <span className="skill-tag">MTCNN</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">⚙️</span>
              <h3>Software Engineering</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">DSA</span>
              <span className="skill-tag">OOP</span>
              <span className="skill-tag">DBMS</span>
              <span className="skill-tag">Computer Networks</span>
              <span className="skill-tag">System Design</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">🌐</span>
              <h3>Web & Frameworks</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">ReactJS</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">🛠️</span>
              <h3>Tools & Databases</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">PostgreSQL (Supabase)</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">JupyterLab</span>
              <span className="skill-tag">Google Colab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
