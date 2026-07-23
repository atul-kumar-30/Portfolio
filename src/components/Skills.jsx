import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section-title reveal">⚙️ <span className="accent">Technical</span> Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">🤖</span>
              <h3>AI & Machine Learning</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Keras</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">scikit-learn</span>
              <span className="skill-tag">Pandas</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">💻</span>
              <h3>Programming</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">🌐</span>
              <h3>Web Development</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">FastAPI</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">🛠️</span>
              <h3>Tools & Databases</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">SQLite</span>
              <span className="skill-tag">Supabase</span>
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
