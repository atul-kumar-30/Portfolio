// ===== TYPING ANIMATION =====
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const texts = [
    'Aspiring Software Engineer',
    'AI/ML Engineer'
  ];

  let tIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const current = texts[tIdx];
    el.textContent = deleting
      ? current.substring(0, cIdx--)
      : current.substring(0, cIdx++);

    let speed = deleting ? 45 : 95;
    if (!deleting && cIdx > current.length) { deleting = true; speed = 1800; }
    else if (deleting && cIdx < 0) { deleting = false; tIdx = (tIdx + 1) % texts.length; speed = 400; }
    setTimeout(type, speed);
  }
  type();
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveLink();
  });

  // Hamburger
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';

      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        const offset = navbar.offsetHeight + 10;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  // Generic reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Timeline reveal
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('reveal-tl');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.timeline-item').forEach(el => tlObserver.observe(el));

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
}

// ===== STATS COUNTERS =====
function initStatsCounter() {
  const statNums = document.querySelectorAll('.stat-num');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const target = parseInt(entry.target.dataset.target);
        let current = 0;
        const inc = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + inc, target);
          entry.target.textContent = Math.floor(current);
          if (current >= target) clearInterval(timer);
        }, 30);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => observer.observe(el));
}

// ===== SCROLL INDICATOR =====
function initScrollIndicator() {
  const el = document.getElementById('scroll-indicator');
  if (!el) return;
  el.addEventListener('click', () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  });
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) el.classList.add('hidden');
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;

    btn.textContent = '⏳ Sending...';
    btn.disabled = true;

    // Use mailto as reliable fallback (no backend needed)
    const name = form.querySelector('#name')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const subject = form.querySelector('#subject')?.value || 'Portfolio Contact';
    const message = form.querySelector('#message')?.value || '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message
        })
      });

      if (response.ok) {
        showNotification('✅ Message sent! I will get back to you soon.', 'success');
        form.reset();
      } else {
        showNotification('❌ Oops! There was a problem. Try again.', 'error');
      }
    } catch (error) {
      showNotification('❌ Something went wrong. Check your connection.', 'error');
    } finally {
      btn.textContent = origText;
      btn.disabled = false;
    }
  });
}

// ===== NOTIFICATIONS =====
function showNotification(msg, type = 'success') {
  document.querySelectorAll('.notification').forEach(n => n.remove());
  const n = document.createElement('div');
  n.className = `notification notification--${type}`;
  n.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${msg}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">✕</button>
    </div>`;
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 5000);
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initTypingAnimation();
  initNavbar();
  initScrollReveal();
  initStatsCounter();
  initScrollIndicator();
  initContactForm();
});