import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title reveal">🎓 <span className="accent">Education</span></h2>
        <div className="edu-card">
          <div className="edu-header">
            <div className="edu-icon">🎓</div>
            <div className="edu-info">
              <h3>Bachelor of Technology (B.Tech)</h3>
              <h4>Computer Science Engineering</h4>
              <div className="edu-tags">
                <span>🏛️ Graphic Era Hill University, Dehradun</span>
                <span>📍 Dehradun, India</span>
                <span>📅 2022 – 2026</span>
                <span>📊 CGPA: 7.22 / 10</span>
              </div>
            </div>
          </div>
          <div className="edu-achievements">
            <div className="achievement">
              <span className="ach-icon">🏆</span>
              <div>
                <h5>Oracle Cloud AI Foundations Certified</h5>
                <p>Earned Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate — valid until August 2027.
                </p>
              </div>
            </div>
            <div className="achievement">
              <span className="ach-icon">🔐</span>
              <div>
                <h5>Cybersecurity Analyst Job Simulation</h5>
                <p>Completed IAM fundamentals, IAM strategy assessment, and crafting custom IAM solutions via TATA
                  Consultancy + Forage.</p>
              </div>
            </div>
            <div className="achievement">
              <span className="ach-icon">🤖</span>
              <div>
                <h5>Introduction to Generative AI</h5>
                <p>Completed Google Cloud & Simplilearn SkillUP course on Generative AI fundamentals and LLMs.</p>
              </div>
            </div>
            <div className="achievement">
              <span className="ach-icon">🧠</span>
              <div>
                <h5>AI & ML Projects</h5>
                <p>Built an AI-powered DeepFake Detection System using TensorFlow, EfficientNet-B4, MTCNN, and Flask.</p>
              </div>
            </div>
            <div className="achievement">
              <span className="ach-icon">🖥️</span>
              <div>
                <h5>Software Development Projects</h5>
                <p>Built a full-stack Expense Tracker (React + Supabase) and a Sudoku Validator (Flask + C++) during
                  degree.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
