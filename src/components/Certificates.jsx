import React from 'react';

const certs = [
  {
    icon: '🛡️',
    title: 'Cybersecurity Analyst Job Simulation',
    org: 'TATA Consultancy via Forage — March 2025',
    desc: 'Completed practical tasks in Identity & Access Management (IAM) fundamentals, IAM strategy assessment, and crafting custom IAM solutions.',
    url: 'https://www.linkedin.com/posts/activity-7321257402689900546-9TKF',
  },
  {
    icon: '☁️',
    title: 'Oracle Cloud Infrastructure AI Foundations',
    org: 'Oracle University — August 2025',
    desc: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate. Recognized by Oracle Corporation, valid until August 2028.',
    url: 'https://www.linkedin.com/posts/activity-7367123225211777024-C59U',
  },
  {
    icon: '🤖',
    title: 'Introduction to Generative AI',
    org: 'Google Cloud & Simplilearn SkillUP — September 2025',
    desc: 'Completed online course covering Generative AI fundamentals, Large Language Models (LLMs), and practical AI applications powered by Google Cloud.',
    url: 'https://www.linkedin.com/posts/activity-7368271728440975362-ee-4',
  },
];

const Certificates = () => (
  <section id="certifications" className="section section--alt">
    <div className="container">
      <h2 className="section-title reveal">🏅 <span className="accent">Certifications</span></h2>
      <div className="certs-grid">
        {certs.map(cert => (
          <div key={cert.title} className="cert-card">
            <div className="cert-icon">{cert.icon}</div>
            <h3>{cert.title}</h3>
            <p className="cert-org">{cert.org}</p>
            <p className="cert-desc">{cert.desc}</p>
            <button
              className="btn btn--outline"
              onClick={() => window.open(cert.url, '_blank', 'noreferrer')}
            >
              🎖️ View Credential
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
