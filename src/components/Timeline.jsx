import React, { useEffect } from "react";

const timelineItems = [
  {
    date: "2020",
    icon: "🌱",
    title: "Completed Class 10",
    description: (
      <>
        Completed secondary education with a growing interest in{" "}
        <strong>Science, Mathematics, and technology</strong>.
      </>
    ),
  },
  {
    date: "2022",
    icon: "📖",
    title: "Completed Class 12 & Started B.Tech CSE",
    description: (
      <>
        Completed senior secondary education and began pursuing{" "}
        <strong>B.Tech in Computer Science and Engineering</strong> at Graphic
        Era Hill University.
      </>
    ),
  },
  {
    date: "2022 – 2024",
    icon: "🧱",
    title: "Programming & Core CS Foundations",
    description: (
      <>
        Learned <strong>C, C++, and Java</strong> while developing strong
        foundations in <strong>Data Structures and Algorithms, OOP, DBMS, OS,</strong>{" "}
        and <strong>Computer Networks</strong>.
      </>
    ),
  },
  {
    date: "Late 2024",
    icon: "🎨",
    title: "Web Development Foundations",
    description: (
      <>
        Started building for the web by learning{" "}
        <strong>HTML, CSS, and JavaScript</strong> to create responsive and
        interactive user interfaces.
      </>
    ),
  },
  {
    date: "Jul – Sep 2025",
    icon: "🛠️",
    title: "Core Development Projects",
    description: (
      <>
        Built the{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Picoc-Interpreter">
          PicoC Interpreter
        </TimelineLink>
        , a custom C-based interpreter, along with a{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Dynamic-Weather-App">
          Dynamic Weather App
        </TimelineLink>{" "}
        and{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Stopwatch-web-app">
          Stopwatch
        </TimelineLink>
        . These projects strengthened my systems programming, problem-solving,
        and frontend development skills.
      </>
    ),
  },
  {
    date: "Late 2025",
    icon: "☁️",
    title: "AI Certification & Final-Year Project",
    description: (
      <>
        Earned the{" "}
        <strong>
          Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
        </strong>{" "}
        certification and began working on my final-year deep learning project.
      </>
    ),
  },
  {
    date: "2025 – 2026",
    icon: "🧠",
    title: "Deepfake Detection System",
    description: (
      <>
        Developed a{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Deepfake-Detection">
          Deepfake Detection System
        </TimelineLink>{" "}
        using <strong>EfficientNet-B4 transfer learning, TensorFlow, MTCNN, OpenCV,</strong>{" "}
        and <strong>Flask</strong> for image and video analysis.
      </>
    ),
  },
  {
    date: "Feb – Mar 2026",
    icon: "📊",
    title: "Expense Tracker",
    description: (
      <>
        Built a{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Expense_Tracker">
          full-stack expense tracking application
        </TimelineLink>{" "}
        with <strong>React, Supabase Authentication, PostgreSQL, real-time sync,</strong>{" "}
        CRUD operations, and interactive spending analytics.
      </>
    ),
  },
  {
    date: "May 2026",
    icon: "🎓",
    title: "Graduated B.Tech CSE",
    description: (
      <>
        Successfully completed my{" "}
        <strong>B.Tech in Computer Science and Engineering</strong> from Graphic
        Era Hill University and began actively exploring entry-level software
        engineering opportunities.
      </>
    ),
  },
  {
    date: "Jul 2026",
    icon: "🌍",
    title: "Air Quality Predictor",
    description: (
      <>
        Developed a{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Air-Quality-Predictor">
          full-stack machine learning application
        </TimelineLink>{" "}
        that combines live environmental data with a{" "}
        <strong>Random Forest model</strong> to forecast PM2.5 levels using{" "}
        <strong>React, FastAPI, SQLite, Leaflet,</strong> and{" "}
        <strong>Chart.js</strong>.
      </>
    ),
  },
  {
    date: "Jul 2026",
    icon: "🎮",
    title: "Ultimate Tic-Tac-Toe",
    description: (
      <>
        Built a{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/ultimate-tic-tac-toe-react">
          real-time multiplayer game
        </TimelineLink>{" "}
        with dynamic <strong>3x3, 4x4, and 5x5 grids</strong>, Minimax-based AI,
        ranked matchmaking, Blitz Mode, and persistent player profiles using{" "}
        <strong>React, Supabase,</strong> and <strong>PostgreSQL</strong>.
      </>
    ),
  },
  {
    date: "Late Jul 2026",
    icon: "🪄",
    title: "Full-Stack & AI Applications",
    description: (
      <>
        Created two MERN applications: a{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Project-Tracker">
          Project Tracker
        </TimelineLink>{" "}
        with drag-and-drop Kanban boards and role-based access, and an{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/AI-Job-Tracker">
          AI Job Tracker
        </TimelineLink>{" "}
        with JWT authentication, Gemini API integration, AI-generated cover
        letters, and ATS resume scoring.
      </>
    ),
  },
];

function TimelineLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="timeline-link"
    >
      <strong>{children}</strong>
    </a>
  );
}

const Timeline = () => {
  const timelineRef = React.useRef(null);

  useEffect(() => {
    if (!timelineRef.current) return;
    
    const items = timelineRef.current.querySelectorAll(".timeline-item");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("reveal-tl"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-tl");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="timeline" className="section section--alt">
      <div className="container">
        <h2 className="section-title reveal">
          🗺️ My <span className="accent">Journey</span>
        </h2>

        <div className="timeline" ref={timelineRef}>
          {timelineItems.map((item, index) => (
            <article className="timeline-item" key={`${item.date}-${index}`}>
              <div className="timeline-icon" aria-hidden="true">
                {item.icon}
              </div>

              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
