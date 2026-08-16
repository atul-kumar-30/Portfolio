import React from 'react';
import { Award, ShieldCheck, Cloud, Bot, ExternalLink } from 'lucide-react';

const certs = [
  {
    icon: Bot,
    iconColor: '#10b981', // green
    title: 'Introduction to Generative AI',
    org: 'Google Cloud & Simplilearn',
    date: 'September 2025',
    orgBg: 'rgba(16, 185, 129, 0.15)',
    orgText: '#34d399',
    desc: <>Completed online course covering <strong className="cert-highlight">Generative AI fundamentals</strong>, <strong className="cert-highlight">Large Language Models (LLMs)</strong>, and practical AI applications powered by Google Cloud.</>,
    skills: ["Generative AI Models", "Gen AI Applications", "AI Content Generation", "Responsible AI"],
    url: 'https://www.linkedin.com/posts/activity-7368271728440975362-ee-4',
  },
  {
    icon: Cloud,
    iconColor: '#ef4444', // red
    title: 'Oracle Cloud Infrastructure AI Foundations',
    org: 'Oracle',
    date: 'August 2025',
    orgBg: 'rgba(239, 68, 68, 0.15)',
    orgText: '#f87171',
    desc: <><strong className="cert-highlight">Oracle Cloud Infrastructure 2025</strong> Certified AI Foundations Associate. Recognized by Oracle Corporation, valid until August 2027.</>,
    skills: ["AI & ML Basics", "Deep Learning (CNNs, RNNs)", "Generative AI & LLMs", "OCI AI Services", "Oracle 23ai"],
    url: 'https://www.linkedin.com/posts/activity-7367123225211777024-C59U',
  },
  {
    icon: ShieldCheck,
    iconColor: '#3b82f6', // blue
    title: 'Cybersecurity Analyst Job Simulation',
    org: 'Tata Group via Forage',
    date: 'March 2025',
    orgBg: 'rgba(59, 130, 246, 0.15)',
    orgText: '#60a5fa',
    desc: <>Completed practical tasks in <strong className="cert-highlight">Identity & Access Management (IAM)</strong> fundamentals, <strong className="cert-highlight">IAM strategy assessment</strong>, and crafting custom IAM solutions.</>,
    skills: ["IAM Fundamentals", "IAM Strategy Assessment", "Custom IAM Solutions", "Platform Integration"],
    url: 'https://www.linkedin.com/posts/activity-7321257402689900546-9TKF',
  },
];

const CertCard = ({ cert }) => {
  const cardRef = React.useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      className="cert-card cert-card-spotlight"
      onMouseMove={handleMouseMove}
    >
      <div className="cert-spotlight"></div>
      <div className="cert-card-content">
        <div className="cert-card-left">
          <div 
            className="cert-icon-glow" 
            style={{ color: cert.iconColor, filter: `drop-shadow(0 0 20px ${cert.iconColor}A0)` }}
          >
            <cert.icon size={48} />
          </div>
        </div>
        
        <div className="cert-card-right">
          <div className="cert-header-row">
            <h3 
              className="cert-gradient-title"
              style={{ backgroundImage: `linear-gradient(135deg, #ffffff 30%, ${cert.iconColor} 150%)` }}
            >
              {cert.title}
            </h3>
            <button
              className="premium-glass-btn cert-btn-desktop"
              style={{ '--glow-color': cert.iconColor }}
              onClick={() => window.open(cert.url, '_blank', 'noreferrer')}
            >
              <ExternalLink className="btn-icon" /> View Credential
            </button>
          </div>
          
          <div className="cert-meta">
            <span className="cert-badge" style={{ backgroundColor: cert.orgBg, color: cert.orgText }}>
              {cert.org}
            </span>
            <span className="cert-date">{cert.date}</span>
          </div>
          
          <p className="cert-desc-modern">{cert.desc}</p>
          
          {cert.skills && (
            <div className="cert-skills-container">
              <span 
                className="cert-skills-label"
                style={{ backgroundImage: `linear-gradient(90deg, ${cert.iconColor}, #ffffff)` }}
              >
                Skills Demonstrated:
              </span>
              <div className="cert-skills">
                {cert.skills.map(skill => (
                  <span key={skill} className="cert-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          
          <button
            className="premium-glass-btn cert-btn-mobile"
            style={{ '--glow-color': cert.iconColor }}
            onClick={() => window.open(cert.url, '_blank', 'noreferrer')}
          >
            <ExternalLink className="btn-icon" /> View Credential
          </button>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => (
  <section id="certifications" className="section section--alt">
    <div className="container">
      <h2 className="section-title reveal"><Award className="section-icon" /> <span className="accent">Certifications</span></h2>
      <div className="certs-grid">
        {certs.map(cert => (
          <CertCard key={cert.title} cert={cert} />
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
