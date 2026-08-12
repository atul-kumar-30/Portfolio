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

function App() {
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

  // 3D mouse-tilt effect for all cards
  useEffect(() => {
    const SELECTORS = [
      '.skill-category',
      '.highlight-card', '.quick-info-card',
    ];
    const MAX_TILT = 12;

    const applyTilt = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
      const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
      card.style.transition = 'transform 0.1s ease';
      card.style.transform  = `perspective(800px) rotateX(${-dy * MAX_TILT}deg) rotateY(${dx * MAX_TILT}deg) translateZ(10px)`;
    };

    const resetTilt = (e) => {
      e.currentTarget.style.transition = 'transform 0.5s ease';
      e.currentTarget.style.transform  = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    };

    const cards = [];
    SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach(card => {
        card.classList.add('tilt-card');
        card.addEventListener('mousemove',  applyTilt);
        card.addEventListener('mouseleave', resetTilt);
        cards.push(card);
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove',  applyTilt);
        card.removeEventListener('mouseleave', resetTilt);
      });
    };
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
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
