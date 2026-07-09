import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      
      // Update active link
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 120;
      
      let currentActive = '';
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          currentActive = `#${id}`;
        }
      });
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuActive ? 'hidden' : '';
  }, [menuActive]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(e.target)) {
        setMenuActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuActive(false);
    
    // Update the URL without reloading the page, removing the #
    const newPath = '/' + id.substring(1);
    window.history.pushState(null, '', newPath);
    
    const target = document.querySelector(id);
    const navbar = document.getElementById('navbar');
    if (target && navbar) {
      const offset = navbar.offsetHeight + 10;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">⚡ Atul Kumar</div>
        <div className={`nav-menu ${menuActive ? 'active' : ''}`} id="nav-menu">
          {['#about', '#skills', '#projects', '#certificates', '#education', '#timeline', '#contact'].map(id => (
            <a
              key={id}
              href={id}
              className={`nav-link ${activeLink === id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, id)}
            >
              {id.substring(1).charAt(0).toUpperCase() + id.substring(2)}
            </a>
          ))}
        </div>
        <div 
          className={`hamburger ${menuActive ? 'active' : ''}`} 
          id="hamburger"
          onClick={() => setMenuActive(!menuActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
