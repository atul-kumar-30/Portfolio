import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="section section--alt">
      <div className="container">
        <h2 className="section-title reveal">🏅 <span className="accent">Certifications</span></h2>
        <div className="certs-grid">
          <div className="cert-card">
            <div className="cert-icon">🛡️</div>
            <h3>Cybersecurity Analyst Job Simulation</h3>
            <p className="cert-org">TATA Consultancy via Forage — March 2025</p>
            <p className="cert-desc">Completed practical tasks in Identity & Access Management (IAM) fundamentals, IAM
              strategy assessment, and crafting custom IAM solutions.</p>
            <a href="https://www.linkedin.com/posts/activity-7321257402689900546-9TKF" target="_blank" rel="noreferrer"
              className="btn btn--outline">🎖️ View Credential</a>
          </div>
          <div className="cert-card">
            <div className="cert-icon">☁️</div>
            <h3>Oracle Cloud Infrastructure AI Foundations</h3>
            <p className="cert-org">Oracle University — August 2025</p>
            <p className="cert-desc">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate. Recognized by Oracle
              Corporation, valid until August 2027.</p>
            <a href="https://www.linkedin.com/posts/activity-7367123225211777024-C59U" target="_blank" rel="noreferrer"
              className="btn btn--outline">🎖️ View Credential</a>
          </div>
          <div className="cert-card">
            <div className="cert-icon">🤖</div>
            <h3>Introduction to Generative AI</h3>
            <p className="cert-org">Google Cloud & Simplilearn SkillUP — September 2025</p>
            <p className="cert-desc">Completed online course covering Generative AI fundamentals, Large Language Models
              (LLMs), and practical AI applications powered by Google Cloud.</p>
            <a href="https://www.linkedin.com/posts/activity-7368271728440975362-ee-4" target="_blank" rel="noreferrer"
              className="btn btn--outline">🎖️ View Credential</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
