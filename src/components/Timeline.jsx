import React, { useEffect } from "react";

const timelineItems = [
  {
    date: "2020",
    icon: "📚",
    title: "Completed Class 10",
    description: (
      <>
        Successfully completed secondary education while building a strong
        academic foundation in <strong>Science and Mathematics</strong>.
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
    title: "Started Web Development",
    description: (
      <>
        Learned <strong>HTML, CSS, and JavaScript</strong>, building responsive
        and interactive websites while laying the foundation for full-stack
        development.
      </>
    ),
  },
  {
    date: "July 2025 - September 2026",
    icon: "⚙️",
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
    date: "Oct 2025 – Apr 2026",
    icon: "🧠",
    title: "Final Year Project – Deepfake Detection",
    description: (
      <>
        Developed a{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Deepfake-Detection">
          Deepfake Detection System
        </TimelineLink>{" "}
        using <strong>EfficientNet-B4, TensorFlow, MTCNN, OpenCV,</strong> and{" "}
        <strong>Flask</strong> for image and video analysis as my final-year
        project.
      </>
    ),
  },
  {
    date: "Feb 2026 – Mar 2026",
    icon: "📊",
    title: "First Production Full-Stack Application",
    description: (
      <>
        Built the{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Expense_Tracker">
          Expense Tracker
        </TimelineLink>{" "}
        using <strong>React, Supabase, and PostgreSQL</strong>, implementing
        authentication, CRUD operations, real-time synchronization, interactive
        analytics, and responsive dashboard design.
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
    date: "June 2026 – August 2026",
    icon: "🌐",
    title: "Full-Stack, ML & AI Applications",
    description: (
      <>
        Expanded my development experience by building the{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Air-Quality-Predictor">
          Air Quality Predictor
        </TimelineLink>
        ,{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/ultimate-tic-tac-toe-react">
          Ultimate Tic-Tac-Toe
        </TimelineLink>
        ,{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/Project-Tracker">
          Project Tracker
        </TimelineLink>
        , and{" "}
        <TimelineLink href="https://github.com/atul-kumar-30/AI-Job-Tracker">
          AI Job Tracker
        </TimelineLink>
        . These projects strengthened my experience with{" "}
        <strong>
          React, Node.js, Express.js, FastAPI, MongoDB, PostgreSQL, Supabase,
          machine learning, and the Gemini API
        </strong>
        .
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
