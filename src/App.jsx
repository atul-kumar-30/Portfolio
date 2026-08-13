import React, { useEffect, useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [appReady, setAppReady] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    if (appReady) {
      const timer = setTimeout(() => setHideLoader(true), 800);
      return () => clearTimeout(timer);
    }
  }, [appReady]);
  useEffect(() => {
    // Handle initial load if someone visits a direct link like /skills
    const path = window.location.pathname;
    if (path.length > 1) {
      const id = path.substring(1);
      const target = document.getElementById(id);
      const navbar = document.getElementById('navbar');
      if (target && navbar) {
      setTimeout(() => {
          const offset = navbar.offsetHeight - 60;
          window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  useEffect(() => {
    // Generic scroll reveal observer for components that have .reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Section-level reveal for cards
    const cardTargets = [
      '.highlight-card', '.stat-card', '.skill-category',
      '.project-card', '.cert-card', '.achievement'
    ];
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cardTargets.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        cardObserver.observe(el);
      });
    });

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      {!hideLoader && (
        <div className={`global-loader ${appReady ? 'fade-out' : ''}`}>
          <div className="loader-content">
            <div className="loader-logo">AK</div>
            <div className="loader-bar"><div className="loader-progress"></div></div>
          </div>
        </div>
      )}
      <AnimatedBackground />
      <Navbar />
      <Hero onReady={() => setAppReady(true)} />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
