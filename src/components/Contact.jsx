import React, { useState } from 'react';
import { Mail, Send, Phone, Briefcase, Globe, MapPin } from 'lucide-react';

const Contact = () => {
  const [btnText, setBtnText] = useState('Send Message');
  const [disabled, setDisabled] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [visitorType, setVisitorType] = useState('Recruiter');

  const showNotification = (msg, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [{ id, msg, type }, ...prev]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText('Sending...');
    setDisabled(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message })
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
      setBtnText('Send Message');
      setDisabled(false);
    }
  };

  return (
    <section id="contact" className="section">
      {notifications.map(n => (
        <div key={n.id} className={`notification notification--${n.type}`}>
          <div className="notification-content">
            <span className="notification-message">{n.msg}</span>
            <button className="notification-close" onClick={() => setNotifications(prev => prev.filter(item => item.id !== n.id))}>✕</button>
          </div>
        </div>
      ))}
      <div className="container">
        <h2 className="section-title reveal"><Mail className="section-icon" /> <span className="accent">Let's</span> Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Drop a Message</h3>
            <p>I'm actively open to roles in <strong>Software Engineering</strong> and <strong>AI/ML</strong>.
              Feel free to reach out regarding full-time positions, internships, or project collaborations.</p>

            <div className="quick-info-cards">
              <div className="quick-info-card">
                <span className="quick-info-icon"><Mail className="card-icon" style={{ margin: 0 }} /></span>
                <div>
                  <span className="quick-info-label">Email</span>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=atulk864943@gmail.com" target="_blank" rel="noreferrer" className="quick-info-value" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }} onMouseOver={(e) => e.target.style.color='var(--primary)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>atulk864943@gmail.com</a>
                </div>
              </div>
              <div className="quick-info-card">
                <span className="quick-info-icon"><Phone className="card-icon" style={{ margin: 0 }} /></span>
                <div>
                  <span className="quick-info-label">Phone</span>
                  <span className="quick-info-value">+91 85339 85314</span>
                </div>
              </div>
              <div className="quick-info-card">
                <span className="quick-info-icon"><MapPin className="card-icon" style={{ margin: 0 }} /></span>
                <div>
                  <span className="quick-info-label">Location</span>
                  <span className="quick-info-value">Dehradun, India</span>
                </div>
              </div>
              <div className="quick-info-card">
                <span className="quick-info-icon"><Briefcase className="card-icon" style={{ margin: 0 }} /></span>
                <div>
                  <span className="quick-info-label">Available For</span>
                  <span className="quick-info-value">Full-time &amp; Internships</span>
                </div>
              </div>
              <div className="quick-info-card">
                <span className="quick-info-icon"><Globe className="card-icon" style={{ margin: 0 }} /></span>
                <div>
                  <span className="quick-info-label">Work Preference</span>
                  <span className="quick-info-value">Remote &amp; On-site</span>
                </div>
              </div>
            </div>

            <div className="contact-socials" style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Find Me Online</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/atul-kumar-805477335/', '_blank', 'noreferrer')}
                  className="social-icon linkedin"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '6px' }}>
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077b5"/>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="#ffffff"/>
                  </svg>
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open('https://github.com/atul-kumar-30', '_blank', 'noreferrer')}
                  className="social-icon github"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '6px' }}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>

          </div>
          <form className="contact-form reveal" id="contact-form" action="https://formspree.io/f/mlgoprap" method="POST" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@email.com" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>I am a:</label>
              <div className="pills-container">
                {['Recruiter', 'Developer', 'Student', 'Other'].map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`pill-btn ${visitorType === type ? 'active' : ''}`}
                    onClick={() => setVisitorType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <input type="hidden" name="Visitor Type" value={visitorType} />
              
              {visitorType === 'Other' && (
                <div style={{ marginTop: '1rem' }}>
                  <input type="text" name="Specific Visitor Type" placeholder="Please specify who you are..." required />
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Let's collaborate!" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..."
                required></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full" disabled={disabled}>
              <Send className="btn-icon" style={{ marginRight: '8px' }} /> {btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;