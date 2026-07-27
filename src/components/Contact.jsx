import React, { useState } from 'react';

const Contact = () => {
  const [btnText, setBtnText] = useState('📨 Send Message');
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
    setBtnText('⏳ Sending...');
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
      setBtnText('📨 Send Message');
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
        <h2 className="section-title reveal">✉️ <span className="accent">Get In</span> Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Drop a Message</h3>
            <p>I'm actively open to roles in <strong>Software Engineering</strong> and <strong>AI/ML</strong>.
              Feel free to reach out regarding full-time positions, internships, or project collaborations.</p>
            <div className="contact-details">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=atulk864943@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M16.5 20.4v-9.6L12 14.1l-4.5-3.3v9.6H3.9c-1.32 0-2.4-1.08-2.4-2.4V7.2c0-1.67 1.92-2.61 3.24-1.6L12 10.9l7.26-5.3c1.32-1 3.24-.06 3.24 1.6v10.8c0 1.32-1.08 2.4-2.4 2.4h-3.6z" fill="#ea4335" />
                    <path d="M16.5 10.8V20.4H20.1C21.42 20.4 22.5 19.32 22.5 18V7.2L16.5 10.8z" fill="#fbbc04" />
                    <path d="M1.5 7.2v10.8C1.5 19.32 2.58 20.4 3.9 20.4H7.5V10.8L1.5 7.2z" fill="#4285f4" />
                    <path d="M16.5 10.8L22.5 7.2C22.5 5.53 20.58 4.6 19.26 5.6L12 10.9L4.74 5.6C3.42 4.6 1.5 5.53 1.5 7.2L7.5 10.8V3.6h9v7.2z" fill="#34a853" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">atulk864943@gmail.com</span>
                </div>
              </a>
              <div className="contact-item reveal">
                <div className="contact-icon">📍</div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Dehradun, Uttarakhand, India</span>
                </div>
              </div>
              <a href="https://github.com/atul-kumar-30" target="_blank" rel="noreferrer" className="contact-item reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/atul-kumar-30</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/atul-kumar-805477335/" target="_blank" rel="noreferrer" className="contact-item reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077b5"/>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="#ffffff"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/atul-kumar</span>
                </div>
              </a>
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
            <button type="submit" className="btn btn--primary btn--full" disabled={disabled}>{btnText}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
