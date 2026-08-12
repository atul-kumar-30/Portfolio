import React from 'react';
import { Cloud } from 'react-icon-cloud';

const allSkills = [
  "Python", "TensorFlow", "Keras", "Scikit-learn", "OpenCV",
  "Pandas", "Gemini API", "RAG", "LangGraph", "LangChain",
  "C", "C++", "Java", "JavaScript", "TypeScript", "SQL",
  "HTML5", "React.js", "CSS3", "Tailwind CSS", "Node.js",
  "Express.js", "Flask", "FastAPI", "REST APIs", "JWT",
  "SQLAlchemy", "Git", "GitHub", "VS Code", "Vercel",
  "Render", "MongoDB", "PostgreSQL", "SQLite", "Supabase",
  "Docker", "pgvector", "JupyterLab", "Google Colab"
];

const SkillSphere = () => {
  const options = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
    textHeight: 22,
    textFont: 'Poppins, sans-serif',
    textColour: '#ffffff',
    weight: true,
  };

  const texts = allSkills.map(skill => {
    return (
      <a key={skill} href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>
        {skill}
      </a>
    );
  });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Cloud
        id={"skill-sphere"}
        options={options}
      >
        {texts}
      </Cloud>
    </div>
  );
};

export default SkillSphere;
