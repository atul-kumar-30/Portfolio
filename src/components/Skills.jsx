import React, { useEffect } from 'react';
import { Layers3, BrainCircuit, Terminal, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-category');
    const MAX_TILT = 12;

    const applyTilt = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      
      card.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
      card.style.transform = `perspective(800px) rotateX(${-dy * MAX_TILT}deg) rotateY(${dx * MAX_TILT}deg) translateZ(10px)`;
    };

    const resetTilt = (e) => {
      e.currentTarget.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
      e.currentTarget.style.transform = '';
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', applyTilt);
      card.addEventListener('mouseleave', resetTilt);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', applyTilt);
        card.removeEventListener('mouseleave', resetTilt);
      });
    };
  }, []);

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section-title reveal">
          <Layers3 className="section-icon" />
          <span className="accent">Technical</span> Skills
        </h2>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-cat-header">
              <BrainCircuit className="card-icon" />
              <h3>AI, ML & Generative AI</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Keras</span>
              <span className="skill-tag">Scikit-learn</span>
              <span className="skill-tag">NLTK</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">Gemini API</span>
              <span className="skill-tag">RAG</span>
              <span className="skill-tag">LangGraph</span>
              <span className="skill-tag">LangChain</span>
              <span className="skill-tag">Embeddings</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <Terminal className="card-icon" />
              <h3>Programming Languages</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <Globe className="card-icon" />
              <h3>Web Development</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">JWT</span>
              <span className="skill-tag">SQLAlchemy</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-cat-header">
              <Wrench className="card-icon" />
              <h3>Tools, Cloud & Databases</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">Render</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">SQLite</span>
              <span className="skill-tag">Supabase</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">pgvector</span>
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
